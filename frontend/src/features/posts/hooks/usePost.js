
import { getFeed } from "../services/post.api";
import { PostContext } from "../post.context";
import { useContext } from "react";


export const usePost = () => {

    const context= useContext(PostContext)

    const {loading,setloading,post,setpost,feed,setfeed}=context

     const handleGetFeed = async ()=>{
        setloading(true)
        const data=await getFeed()
        setfeed(data.posts)
        setloading(false)
     }
  return {loading,feed,post,handleGetFeed}
}


