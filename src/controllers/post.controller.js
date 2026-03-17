const postModel = require('../model/post.model')
const Imagekit = require('@imagekit/nodejs')
const { toFile } = require('@imagekit/nodejs')
const jwt = require("jsonwebtoken")
const imagekit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostConroller(req, res) {
  
    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test"
    })


    const post= await postModel.create({
        caption:req.body.caption,
        imgUrl:file.url,
        user:req.user.id,
    })
    res.status(201).json({
        message:"Post created successfully",
        post
    })
}

async function getPostsController(req,res){
   
   const userId=req.user.id

   const posts= await postModel.find({
    user:userId
   })

   res.status(200).json({
    message:"posts fetched successfully",
    posts
   })
    
}

async function getPostDetailsController(req,res){
    
 const PostId=req.params.postId
 const userId=req.user.id

 
 
 const post= await postModel.findById(PostId)

 if(!post){
    return res.status(404).json({
        message:"Post not found"
    })
 }

 const isValidUser= post.user.toString()===userId


 if(!isValidUser){
    return res.status(403).json({
        message:"Forbidden Content."
    })
 }
 return res.status(200).json({
    message:"Post fetched successfully.",
    post
 })
}
module.exports = {
    createPostConroller,getPostsController,getPostDetailsController
}