const twilio = require('twilio');

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = (to, message) => {
  client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE,
    to: to
  }).then(message => console.log("SMS Sent: ", message.sid))
    .catch(err => console.error(err));
};

module.exports = { sendSMS };
