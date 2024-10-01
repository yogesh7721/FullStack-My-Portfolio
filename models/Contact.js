const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    mobile: { type: String },
    company: { type: String },
    message: { type: String },

}, { timestamps: true })

module.exports = mongoose.model("contact", contactSchema)