import React, { useState, useEffect } from 'react';
import { getPatientById } from '../services/patientService';

const PatientDetails = ({ patientId }) => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    async function fetchPatientDetails() {
      const data = await getPatientById(patientId);
      setPatient(data);
    }
    fetchPatientDetails();
  }, [patientId]);

  if (!patient) return <p>Loading...</p>;

  return (
    <div>
      <h3>{patient.name}</h3>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      <p>Diagnosis: {patient.diagnosis}</p>
      <p>Admission Date: {patient.admission_date}</p>
    </div>
  );
};

export default PatientDetails;
