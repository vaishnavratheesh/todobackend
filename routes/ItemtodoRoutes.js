const express = require("express");
const router = express.Router();
const Item = require("../models/Itemtodo");


router.post("/", async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json({ message: "Item created successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const items = await Item.find();
        console.log("Fetched items:", items);
        res.status(200).json(items);
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: "Error fetching items", error: error.message });
    }
});

module.exports = router;