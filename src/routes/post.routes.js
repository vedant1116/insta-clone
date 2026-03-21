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

/**
 * @route POST /api/posts [protected]
 * @description Create a post with the content and image (optional) provided in the request body. The post should be associated with the user that the request come from
 */
postRouter.post('/',upload.single("imgUrl"),identifyUser,postController.createPostConroller)

/**
 * @route GET /api/posts/ [protected]
 * @description Get all the posts created by the user that the request come from. also return the total number of posts created by the user
 */
postRouter.get('/',identifyUser,postController.getPostsController)

/**
 * @route GET /api/posts/details/:postid
 * @description return an detail about specific post with the id. also check whether the post belongs to the user that the request come from
 */

postRouter.get('/details/:postId',identifyUser,postController.getPostDetailsController)



/**
 * @route POST /api/posts/like/:postid
 * @description like a post with the id provided in the request params. 
 */
postRouter.post('/like/:postId',identifyUser,postController.likePostController)


postRouter.post('/unlike/:postId',identifyUser,postController.unlikePostController)

module.exports=postRouter

