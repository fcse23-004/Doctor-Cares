const express = require('express');
const Prescription = require('../models/Prescription');
const router = express.Router();

// Upload prescription
router.post('/upload', async (req, res) => {
  try {
    const { patientId, medication, dosage, refillDate } = req.body;
    const prescription = new Prescription({ patientId, medication, dosage, refillDate });
    await prescription.save();
    res.status(201).json({ message: "Prescription uploaded" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get prescriptions
router.get('/:patientId', async (req, res) => {
  try {
    const prescriptions = await Prescription.find({ patientId: req.params.patientId });
    res.json(prescriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
