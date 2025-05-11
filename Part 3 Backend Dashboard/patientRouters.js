const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Routes for patient-related requests
router.get('/', patientController.getAllPatients);
router.get('/:id', patientController.getPatientById);

module.exports = router;
