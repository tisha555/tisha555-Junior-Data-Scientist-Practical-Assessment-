import React from 'react';
import PatientDetails from './PatientDetails';

const Dashboard = ({ patients }) => {
  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <a href={`#${patient.id}`}>{patient.name}</a>
            <PatientDetails patientId={patient.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
