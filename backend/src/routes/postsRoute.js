import express from 'express'
import {getPosts, getPostsBySearch,createPost,deletePost,updatePost,likePost,} from '../controllers/postController.js'
import auth from '../middlewares/auth.js'
const router=express.Router()


router.get('/',getPosts)
router.get('/search', getPostsBySearch)
router.post('/',auth,createPost)
router.delete('/:id',auth,deletePost)
router.patch('/:id',auth,updatePost)
router.patch('/:id/likePost',auth,likePost)

export default router
