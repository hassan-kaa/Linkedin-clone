const express=require('express')
const router=express.Router()
const {
    createPost, getPost,getPosts, updatePost, deletePost
} = require("../controllers/postController")
//get all posts
router.get('/',getPosts)

//GET a single post 
router.get('/:id',getPost)

// POST a new post 
router.post('/', createPost
)

//DELETE a post
router.delete('/:id',deletePost)

//UPDATE a post 
router.patch('/:id',updatePost)

module.exports=router