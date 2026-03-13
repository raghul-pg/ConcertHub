const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const sendTicketEmail = require("../utils/sendTicketEmail");

/* CREATE BOOKING */

router.post("/", async (req, res) => {

  try {

    const booking = new Booking(req.body);

    await booking.save();

    await sendTicketEmail(req.body);

    res.status(200).json({
      message: "Booking successful and ticket emailed"
    });

  } catch (error) {

    res.status(500).json({
      message: "Booking failed"
    });

  }

});


/* GET USER BOOKINGS */

router.get("/:userId", async (req, res) => {

  try {

    const bookings = await Booking.find({
      userId: req.params.userId
    });

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching bookings"
    });

  }

});

router.delete("/:id",async(req,res)=>{

try{

await Booking.findByIdAndDelete(req.params.id);

res.json({message:"Booking cancelled"});

}
catch(err){

res.status(500).json({message:"Error cancelling booking"});

}

});


module.exports = router;