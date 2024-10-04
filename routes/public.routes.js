const router = require("express").Router()
const { rateLimit } = require("express-rate-limit")
const publicController = require("../controller/public.controller")

router
    .get("/fetch-project", publicController.fetchProjects)
    .get("/fetch-caro", publicController.getAllCarousel)
    .get("/get-project-details/:id", publicController.getProjectDetails)

    .post("/add-contact", rateLimit({ windowMs: 1 * 6 * 1000, limit: 1 }), publicController.addContact)
    .get("/get-contact", publicController.getContact)

module.exports = router

