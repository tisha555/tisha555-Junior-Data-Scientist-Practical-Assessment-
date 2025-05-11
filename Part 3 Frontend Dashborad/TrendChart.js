import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getVitalsByPatientId } from '../services/patientService';

const TrendChart = ({ patientId }) => {
  const [vitals, setVitals] = useState([]);

  useEffect(() => {
    async function fetchVitals() {
      const data = await getVitalsByPatientId(patientId);
      setVitals(data);
    }
    fetchVitals();
  }, [patientId]);

  const chartData = {
    labels: vitals.map((vital) => vital.timestamp),
    datasets: [
      {
        label: 'Heart Rate',
        data: vitals.map((vital) => vital.heartRate),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default TrendChart;
