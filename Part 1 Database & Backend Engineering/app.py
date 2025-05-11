from flask import Flask, request, jsonify
import psycopg2
from datetime import datetime

app = Flask(__name__)

# Database connection config (adjust for your setup)
conn = psycopg2.connect(
    dbname="hospital_db",
    user="postgres",
    password="yourpassword",
    host="localhost",
    port="5432"
)
cursor = conn.cursor()

@app.route("/patients/<patient_id>", methods=["GET"])
def get_patient(patient_id):
    cursor.execute("SELECT * FROM patients WHERE patient_id = %s", (patient_id,))
    row = cursor.fetchone()
    if row:
        keys = [desc[0] for desc in cursor.description]
        return jsonify(dict(zip(keys, row)))
    return jsonify({"error": "Patient not found"}), 404

@app.route("/patients", methods=["POST"])
def add_patient():
    data = request.json
    cursor.execute('''
        INSERT INTO patients (patient_id, height_cm, weight_kg, education_level, monthly_income, age_at_menarche,
                              age_at_marriage, age_at_first_pregnancy, district, village, occupation, diet, condition)
        VALUES (%(patient_id)s, %(height_cm)s, %(weight_kg)s, %(education_level)s, %(monthly_income)s, %(age_at_menarche)s,
                %(age_at_marriage)s, %(age_at_first_pregnancy)s, %(district)s, %(village)s, %(occupation)s, %(diet)s, %(condition)s)
    ''', data)
    conn.commit()
    return jsonify({"message": "Patient added successfully"}), 201

@app.route("/insights/average_weight_by_district", methods=["GET"])
def avg_weight_by_district():
    cursor.execute('''
        SELECT district, AVG(weight_kg) as avg_weight FROM patients GROUP BY district ORDER BY avg_weight DESC
    ''')
    results = cursor.fetchall()
    return jsonify([{"district": row[0], "average_weight": row[1]} for row in results])

@app.route("/insights/high_risk_patients", methods=["GET"])
def high_risk_patients():
    cursor.execute('''
        SELECT p.patient_id, p.condition, d.type_of_delivery 
        FROM patients p 
        JOIN deliveries d ON p.patient_id = d.patient_id 
        WHERE p.condition ILIKE '%anemia%' OR d.type_of_delivery = 'C-section'
    ''')
    results = cursor.fetchall()
    return jsonify([{"patient_id": row[0], "condition": row[1], "delivery_type": row[2]} for row in results])

if __name__ == "__main__":
    app.run(debug=True)
