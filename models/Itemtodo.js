const mongoose = require("mongoose");

const ItemtodoSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("Itemtodo", ItemtodoSchema);

