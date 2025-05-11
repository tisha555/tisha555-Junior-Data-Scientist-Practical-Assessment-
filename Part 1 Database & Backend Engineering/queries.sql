-- Query 1: Average patient weight by district
SELECT district, ROUND(AVG(weight_kg), 2) AS avg_weight
FROM patients
GROUP BY district
ORDER BY avg_weight DESC;

-- Query 2: High-risk patients based on medical condition or delivery type
SELECT p.patient_id, p.condition, d.type_of_delivery
FROM patients p
JOIN deliveries d ON p.patient_id = d.patient_id
WHERE p.condition ILIKE '%anemia%' OR d.type_of_delivery = 'C-section';

-- Query 3: Follow-up trend: average weight change over follow-ups
SELECT patient_id, visit_number, ROUND(AVG(weight_kg), 2) AS avg_visit_weight
FROM followups
GROUP BY patient_id, visit_number
ORDER BY patient_id, visit_number;
