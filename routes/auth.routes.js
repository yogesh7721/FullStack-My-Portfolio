const router = require("express").Router()
const authController = require("../controller/auth.controller")

router
     .post("/register-user", authController.registerUser)
     .post("/login-user", authController.loginUser)
     .post("/logout-user", authController.logoutUser)

module.exports = router