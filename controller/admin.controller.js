
const asyncHandler = require("express-async-handler")
const Technology = require("../models/Technology")
const { checkEmpty } = require("../utils/cheackEmpty")
const Social = require("../models/Social")
const Carousel = require("../models/Carousel")
const { cloudinary } = require("../utils/cloudinary.config")
const upload = require("../utils/upload")

exports.addTechnology = asyncHandler(async (req, res) => {
    const { name, categeory } = req.body
    const { isError, error } = checkEmpty({ name, categeory })
    if (isError) {
        return res.status(400).json({ message: "All Field Required", error })
    }
    await Technology.create({ name, categeory })
    res.json({ message: "Technology Create Success" })
})

exports.getTechnology = asyncHandler(async (req, res) => {
    const result = await Technology.find()
    res.json({ message: "Technology Fetch Success", result })
})

exports.updateTechnology = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Technology.findByIdAndUpdate(id, req.body)
    res.json({ message: "Technology Update Success" })
})
exports.deleteTechnology = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Technology.findByIdAndDelete(id)
    res.json({ message: "Technology Delete Success" })
})


//   SOCIAL MEDIA

exports.addSocial = asyncHandler(async (req, res) => {
    await Social.create(req.body)
    res.json({ message: "SocialMedia Added Success" })
})

exports.getSocial = asyncHandler(async (req, res) => {
    const result = await Social.find()
    res.json({ message: "SocialMedia Fetch Success", result })
})
exports.updateSocial = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Social.findByIdAndUpdate(id, req.body)
    res.json({ message: "SocialMedia Updated Success" })
})
exports.deleteSocial = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Social.findByIdAndDelete(id)
    res.json({ message: "SocialMedia Deleted Success" })
})


/// carousel


exports.addCarousel = asyncHandler(async (req, res) => {
    upload(req, res, async err => {
        const { caption } = req.body
        const { isError, error } = checkEmpty({ caption })
        if (isError) {
            return res.status(400).json({ message: "All Field Required", error })
        }
        if (!req.file) {
            return res.status(400).json({ message: " Hero image is Required" })
        }
        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
        await Social.create(req.body)
        res.json({ message: "SocialMedia Added Success" })
    })

})


exports.getCarousel = asyncHandler(async (req, res) => {

    const result = await Carousel.find()
    res.json({ message: "Carousel Fetch Success", result })
})
exports.updateCarousel = asyncHandler(async (req, res) => {
    upload(req, res, async err => {

        if (err) {
            console.log(err);
            return res.status(400).json({ message: "Multer Error", error: err.message })
        }
        const { id } = req.params

        if (req.file) {
            const result = await Carousel.findById(id)
            await cloudinary.uploader.destroy(path.basename(result.hero))
            const { secure_url } = await cloudinary.uploader.upload(req.file.path)
            await Carousel.findByIdAndUpdate(id, { caption: req.body.caption, hero: secure_url })
            res.json({ message: "Carousel Updated Success" })
        }
        else {
            await Carousel.findByIdAndUpdate(id, { caption: req.body.caption })
            res.json({ message: "Carousel Update Success" })
        }
    })
})
exports.deleteCarousel = asyncHandler(async (req, res) => {
    const { id } = req.params
    const result = await Carousel.findById(id)
    console.log(result);

    await cloudinary.uploader.destroy(path.basename(result.hero))
    await Carousel.findByIdAndDelete(id)
    res.json({ message: "Carousel Deleted Success" })
})