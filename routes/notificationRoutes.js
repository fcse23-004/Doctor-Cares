const express = require('express');
const { sendSMS } = require('../services/twilioService');
const { sendEmail } = require('../services/emailService');
const router = express.Router();

// Send SMS Reminder
router.post('/sms', (req, res) => {
  const { phone, message } = req.body;
  sendSMS(phone, message);
  res.json({ message: "SMS sent successfully" });
});

// Send Email Reminder
router.post('/email', (req, res) => {
  const { email, subject, message } = req.body;
  sendEmail(email, subject, message);
  res.json({ message: "Email sent successfully" });
});

module.exports = router;
