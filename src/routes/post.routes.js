// const express=require("express")
// const postRouter=express.Router()
// const postController=require('../controllers/post.controller')
// // const multer=require('multer')
// // const upload=multer({storage: multer.memoryStorage()})

// // postRouter.post("/",upload.single("imgUrl"),postController.createPostcontroller)


// module.exports=postRouter

const postController=require('../controllers/post.controller')
const express=require('express')
const postRouter=express.Router()
const multer=require('multer')
const identifyUser = require('../middlewares/auth.middleware')
const upload=multer({storage: multer.memoryStorage()})


postRouter.post('/',upload.single("imgUrl"),identifyUser,postController.createPostConroller)

postRouter.get('/',identifyUser,postController.getPostsController)

postRouter.get('/details/:postId',identifyUser,postController.getPostDetailsController)

module.exports=postRouter

