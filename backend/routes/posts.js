const express=require('express')
const upload = require('../middleware/upload')
const router=express.Router()
const {
    createPost, getPost,getPosts, updatePost, deletePost
} = require("../controllers/postController")
//get all posts
router.get('/api',getPosts)

//GET a single post 
router.get('/api/:id',getPost)

// POST a new post 
router.post('/api',upload.single('PostImage') ,createPost
)

//DELETE a post
router.delete('/api/:id',deletePost)

//UPDATE a post 
router.patch('/api/:id',updatePost)

module.exports=router