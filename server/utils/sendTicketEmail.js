const nodemailer = require("nodemailer");
const QRCode = require("qrcode");

const sendTicketEmail = async (booking) => {

  const qrData = JSON.stringify({
    event: booking.eventTitle,
    name: booking.userName,
    tickets: booking.tickets
  });

  const qrCodeImage = await QRCode.toDataURL(qrData);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sakthimeenaganesan@gmail.com",
      pass: "wjlk lyrs gjkc ycfm"
    }
  });

  const mailOptions = {
    from: "ConcertHub <yourgmail@gmail.com>",
    to: booking.email,
    subject: "Your Concert Ticket 🎵",
    html: `
      <h2>Your Ticket is Confirmed!</h2>

      <p><b>Event:</b> ${booking.eventTitle}</p>
      <p><b>Name:</b> ${booking.userName}</p>
      <p><b>Tickets:</b> ${booking.tickets}</p>

      <p>Please show this QR code at the entrance:</p>

      <img src="${qrCodeImage}" />

      <p>Enjoy the concert! 🎶</p>
    `
  };

  await transporter.sendMail(mailOptions);

};

module.exports = sendTicketEmail;