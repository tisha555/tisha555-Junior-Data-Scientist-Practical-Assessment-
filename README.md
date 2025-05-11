# 🏥 Hospital Patient Data Management System

A full-stack project to manage and analyze hospital patient data using SQL, Flask, and a frontend dashboard. Designed to help clinicians gain insights and make better decisions.

---

## 🚀 Features

- 📦 Relational database for storing patient, delivery, and follow-up data  
- 🔌 REST API for data access and insights  
- 📊 SQL queries for key health trends  
- 📈 Data science notebook for analysis and visualizations  
- 🖥️ Interactive dashboard for hospital staff

---

## 🗂️ Tech Stack

- **Backend:** Flask + SQLite/MySQL  
- **Frontend:** React / Vue.js  
- **Data Analysis:** Python, Pandas, Matplotlib  
- **Database:** SQL

---

## 📁 Project Structure

- 📂 data/ → Excel files
- 📂 database/ → SQL schema
- 📂 backend/ → Flask API
- 📂 analytics/ → Jupyter notebook + SQL queries
- 📂 frontend/ → Dashboard UI
- 📂 screenshots/ → UI snapshots


---

## ⚙️ How to Run

### 1. Database
- Run `schema.sql` to create tables.
- Import Excel data using Pandas or a script.

### 2. Backend

cd backend
pip install -r requirements.txt
python app.py

# 📌 Project Details

---

## 🔌 API Endpoints

| Method | Endpoint                                | Description                              |
|--------|------------------------------------------|------------------------------------------|
| GET    | `/patients/<id>`                         | Fetch patient details by ID              |
| POST   | `/patients`                              | Add a new patient to the database        |
| GET    | `/insights/average_weight_by_district`   | Returns average patient weight per district |
| GET    | `/insights/high_risk_patients`           | Lists patients with anemia or C-section  |

---


# 📈 Analytics Highlights

- 🧪 Track changes in patient weight and haemoglobin across follow-ups  
- 📊 Visualize district-wise health metrics and trends  
- 🚨 Identify high-risk patients based on vitals (e.g., anemia, low haemoglobin)  
- 🔍 Detect anomalies or outliers in patient data  
- 🤝 Correlate delivery types with health conditions  
- ⏱️ Analyze the effectiveness of follow-up frequency and timing

---

# ✅ Assumptions

- Excel sheets are pre-cleaned before importing into the database  
- Weight and haemoglobin values use consistent units  
- Anemia is detected using keyword search in diagnosis text  
- Follow-up data is normalized and linked to patients by ID  
- Delivery types and medical terms are standardized for consistency

---
## ✅ Conclusion

This project demonstrates a complete, real-world solution for managing hospital patient data — from database design and API development to data analysis and dashboard visualization. It empowers clinicians with actionable insights, improves data accessibility, and lays a scalable foundation for future healthcare analytics systems.
