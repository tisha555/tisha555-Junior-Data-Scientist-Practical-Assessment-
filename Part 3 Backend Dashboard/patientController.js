const Patient = require('../models/patientModel');

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving patients' });
  }
};

// Get a single patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving patient' });
  }
};
