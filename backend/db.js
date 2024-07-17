const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");

    const foodData = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const categoryData = await mongoose.connection.db.collection("foodcatagory").find({}).toArray();

    global.food_items = foodData;
    global.food_categories = categoryData;

    console.log(global.food_items);
    console.log(global.food_categories);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

module.exports = mongoDB;
