



const router = require("express").Router()
const admin = require("../controller/admin.controller")

router
    .post("/add-tech", admin.addTechnology)
    .get("/get-tech", admin.getTechnology)
    .put("/update-tech/:id", admin.updateTechnology)
    .delete("/delete-tech/:id", admin.deleteTechnology)



    //   SOCIAL MEDIA

    .post("/add-social", admin.addSocial)
    .get("/get-social", admin.getSocial)
    .put("/update-social/:id", admin.updateSocial)
    .delete("/delete-social/:id", admin.deleteSocial)


    .post("/add-carousel", admin.addCarousel)
    .get("/get-carousel", admin.getCarousel)
    .put("/update-carousel/:id", admin.updateCarousel)
    .delete("/delete-carousel/:id", admin.deleteCarousel)




module.exports = router