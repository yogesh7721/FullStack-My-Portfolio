const asyncHandler = require("express-async-handler")
const Projects = require("../models/Projects")
const Carousel = require("../models/Carousel")
const Contact = require("../models/Contact")
const { checkEmpty } = require("../utils/cheackEmpty")

exports.fetchProjects = asyncHandler(async (req, res) => {
    const result = await Projects.find()
    res.json({ message: "Project Fetch Success...!", result })
})
exports.getAllCarousel = asyncHandler(async (req, res) => {
    const result = await Carousel.find()
    res.status(200).json({ message: "Fetch Carousel Success", result })
})

exports.getProjectDetails = asyncHandler(async (req, res) => {
    const result = await Projects.findById(req.params.id)
    res.status(200).json({ message: "Fetch ProjectDetails Success", result })
})
exports.addContact = asyncHandler(async (req, res) => {
    const { name, email, mobile, company, message } = req.body
    const { error, isError } = checkEmpty({ name, email, mobile, company, message })
    if (isError) {
        return res.status(400).json({ message: "ALL Feilds Required.", error: error })
    }
    await Contact.create({ name, email, mobile, company, message })
    res.json({ message: "Contact Create Success" })
})
exports.getContact = asyncHandler(async (req, res) => {
    const result = await Contact.find()
    res.status(200).json({ message: "Contact Add Success", result })
})

