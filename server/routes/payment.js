const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

const razorpay = new Razorpay({
key_id: "rzp_test_SFv8Vjz31igaLj",
key_secret: "YAR4mxAusgvpsFJz5Mp2QCHl"
});

router.post("/create-order", async (req,res)=>{

const {amount} = req.body;

const options = {
amount: amount * 100,
currency: "INR",
receipt: "receipt_order"
};

try{

const order = await razorpay.orders.create(options);

res.json(order);

}

catch(err){
res.status(500).json({message:"Payment failed"});
}

});

module.exports = router;