const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemRoutes = require("./routes/ItemtodoRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount the routes - this is crucial!
app.use("/api/items", itemRoutes);  // Make sure this line exists!

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/todolist")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});