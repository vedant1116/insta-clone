const express=require('express')
const userRouter=express.Router()
const identifyUser=require('../middlewares/auth.middleware')
const userController=require('../controllers/user.controller')
/**
 * @route POST /api/users/follow/:userid
 * @description Follow a user
 * @access Private
 */

userRouter.post('/follow/:username',identifyUser,userController.followUserController)

userRouter.post('/unfollow/:username',identifyUser,userController.unfollowUserController)




module.exports=userRouter