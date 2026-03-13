const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  eventId: {
    type: String,
    required: true
  },
  eventTitle: {
    type: String,
    required: true
  },
  tickets: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);