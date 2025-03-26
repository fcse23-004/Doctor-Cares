const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  medication: String,
  dosage: String,
  refillDate: Date,
  collected: { type: Boolean, default: false }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
