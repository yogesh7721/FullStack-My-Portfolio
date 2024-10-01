const router = require("express").Router()
const publicController = require("../controller/public.controller")

router
    .get("/fetch-project", publicController.fetchProjects)
    .get("/fetch-caro", publicController.getAllCarousel)
    .get("/get-project-details/:id", publicController.getProjectDetails)

    .post("/add-contact", publicController.addContact)
    .get("/get-contact", publicController.getContact)

module.exports = router

