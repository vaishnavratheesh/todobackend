const express = require("express");
const router = express.Router();
const Item = require("../models/Itemtodo");

// This handles GET /api/items
router.get("/", async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items" });
    }
});

// POST route
router.post("/", async (req, res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
