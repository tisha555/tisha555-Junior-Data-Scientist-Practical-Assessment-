const express = require('express');
const cors = require('cors');
const app = express();
const patientRoutes = require('./routes/patientRoutes');

app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Define routes
app.use('/api/patients', patientRoutes);

module.exports = app;
