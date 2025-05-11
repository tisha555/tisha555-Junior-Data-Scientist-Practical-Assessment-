import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { getPatients } from './services/patientService';

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchPatients() {
      const data = await getPatients();
      setPatients(data);
    }
    fetchPatients();
  }, []);

  return (
    <div className="App">
      <h1>Hospital Dashboard</h1>
      <Dashboard patients={patients} />
    </div>
  );
}

export default App;
