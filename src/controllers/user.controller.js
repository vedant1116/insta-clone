const followModel = require('../model/follow.model')
const postModel=require('../model/post.model')
const userModel=require('../model/user.model')

async function followUserController(req,res){
const followerUsername=req.user.username
const followeeUsername=req.params.username

if(followerUsername==followeeUsername){
 return res.status(400).json({
    message:"you cannont follow yourself"
 })
}
const isFolloweeExists= await userModel.findOne({
    username:followeeUsername
})
if(!isFolloweeExists){
    return res.status(404).json({
        message:"user doesnot exists"
    })
}
 const isAlreadyFollowing= await followModel.findOne({
    follower:followerUsername,
    followee:followeeUsername
 })
 if(isAlreadyFollowing){
    return res.status(200).json({
        message:`You are already following ${followerUsername}`,
        follow: isAlreadyFollowing
    })
 }
const followRecord=  await followModel.create({
    follower:followerUsername,
    followee:followeeUsername
})

res.status(201).json({
    message: `You are now following ${followeeUsername}`,
    follow: followRecord
})
}

async function unfollowUserController(req,res){
  const  followerUsername=req.user.username
  const  followeeUsername=req.params.username

    const isUserfollowing=await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername

    })
    if(!isUserfollowing){
        return res.status(200).json({
            message:`You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserfollowing._id)

    res.status(200).json({
        message:`You have unfollowed ${followeeUsername}`
    })

  

}
module.exports={
    followUserController,
    unfollowUserController
}