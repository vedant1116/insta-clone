const express = require('express')
const authRouter = express.Router()
const identifyUser=require('../middlewares/auth.middleware')
// const userModel = require('../model/user.model')
// const crypto = require('crypto')
// const jwt = require('jsonwebtoken')
const authController=require('../controllers/auth.controller')

authRouter.post('/register', authController.registrationController)

authRouter.post("/login",authController.loginController)

authRouter.get('/get-me',identifyUser,authController.getmeController)

module.exports = authRouter
