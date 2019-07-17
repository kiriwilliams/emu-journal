const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    date: { type: Date, default: Date.now() },
    content: { type: String, required: true },
    color: { type: String, required: true },
    textColor: { type: String, required: true },
    mood: { type: String, required: true },
    tags: [{
        type: String, required: true 
    }]
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;