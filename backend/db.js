const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://nishan988281675:qwerty1223@cluster0.ddhqnuf.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");

        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        console.log();

    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
};

module.exports = mongoDB;

