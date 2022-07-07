const Post=require('../Models/postModel')
const mongoose=require('mongoose')
//get all posts
const getPosts=async(req,res)=>{
    const allPosts=await Post.find({}).sort({createdAt:-1})
    res.status(200).json(allPosts)
}


// get a single post
const getPost=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such post"})
    }
    const post=await Post.findById(id)
    if(!post){
        return res.status(404).json({error:"can't find post"})
    }
    res.status(200).json(post)
}

//create a new post 

const createPost=async (req,res)=>{
    const {description,interactions,imageSrc}=req.body
    
    try{
        const post= await Post.create({imageSrc,description,interactions})
        res.status(200).json(post)
    } catch(error){
        res.status(400).json({error:error.message})
    }

    
}

// delete a post

const deletePost=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such post"})
    }
    const post=await Post.findByIdAndDelete(id)
    if(!post){
        return res.status(404).json({error:"can't find post"})
    }
    res.status(200).json(post)

}

// update a post
const updatePost=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such post"})
    }
    const post=await Post.findByIdAndUpdate(id,{...req.body})
    if(!post){
        return res.status(404).json({error:"can't find post"})
    }
    res.status(200).json(post)
}


module.exports= {
    createPost,getPost,getPosts,deletePost ,updatePost}