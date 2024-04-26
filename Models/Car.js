const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    carModel: {
      type: String,
      minlength: 3,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: String,
      validate: {
        validator: (v) => v.length === 11,
        message: "Phone number must be 11 digits long",
      },
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pictures: {
      type: [String],
      validate: {
        validator: (v) => v.length >= 1 && v.length <= 10,
        message: "Number of pictures must be between 1 and 10",
      },
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
