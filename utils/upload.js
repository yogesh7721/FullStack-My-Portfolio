const multer = require("multer")
const path = require("path")

const Storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const fn = Date.now() + path.extname(file.originalname)
        cb(null, fn)
    }
})
const upload = multer({ storage: Storage }).single("images")

const projectUpload = multer({ storage: Storage }).fields([
    { name: "images", maxCount: 1 },
    { name: "screenshots-web-main", maxCount: 1 },
    { name: "screenshots-web-other", maxCount: 5 },
    { name: "screenshots-mobile-main", maxCount: 1 },
    { name: "screenshots-mobile-other", maxCount: 5 },
    { name: "sections-web-images", maxCount: 1 },
    { name: "sections-mobile-images", maxCount: 1 },
])
module.exports = { upload, projectUpload }