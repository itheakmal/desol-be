const validator = require("validator");
const Car = require("../Models/Car");

const submitCar = async (req, res) => {
  try {
    console.log('req', req.body);
    const { carModel, price, phoneNumber, city, pictures } = req.body;

    if (
      !validator.trim(carModel) ||
      !validator.isNumeric(price) ||
      !validator.isMobilePhone(phoneNumber, "any") ||
      !validator.trim(city)
    ) {
      return res
        .status(400)
        .json({ error: "Missing or invalid required fields" });
    }

    // if (!req.files) {
    //   console.error(err);
    //   return res.status(400).json({ error: "Missing Pictures" });
    // }
    // let pictures = [];
    // if (req.files && req.files.length > 0) {
    //   pictures = req.files.map((file) => {
    //     if (!file.mimetype.startsWith("image/")) {
    //       return res.status(400).json({ error: "Only image uploads allowed" });
    //     }
    //     return file.path;
    //   });
    // }

    const car = new Car({
      userId: req.user.id,
      carModel,
      price,
      phoneNumber,
      city,
      pictures,
    });
    const savedCar = await car.save();

    res.status(201).json(savedCar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  submitCar
};
