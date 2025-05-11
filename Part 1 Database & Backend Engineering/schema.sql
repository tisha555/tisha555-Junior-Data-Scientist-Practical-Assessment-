-- Patients table
CREATE TABLE patients (
    patient_id VARCHAR PRIMARY KEY,
    height_cm INT,
    weight_kg FLOAT,
    education_level INT,
    monthly_income INT,
    age_at_menarche INT,
    age_at_marriage INT,
    age_at_first_pregnancy INT,
    district VARCHAR,
    village VARCHAR,
    occupation VARCHAR,
    diet VARCHAR,
    condition VARCHAR
);

-- Deliveries table
CREATE TABLE deliveries (
    delivery_id SERIAL PRIMARY KEY,
    patient_id VARCHAR REFERENCES patients(patient_id),
    date_of_delivery DATE,
    age_at_delivery INT,
    weight_at_delivery FLOAT,
    haemoglobin_at_delivery FLOAT,
    placental_weight INT,
    term_of_delivery VARCHAR,
    type_of_delivery VARCHAR
);

-- Followups table
CREATE TABLE followups (
    followup_id SERIAL PRIMARY KEY,
    patient_id VARCHAR REFERENCES patients(patient_id),
    visit_number INT,
    visit_date DATE,
    bp_diastolic INT,
    bp_systolic INT,
    weight_kg FLOAT
);
