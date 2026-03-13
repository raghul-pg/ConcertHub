const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({

title: String,
description: String,
location: String,
date: String,
price: Number,
image: String

});

module.exports = mongoose.model("Event", EventSchema);