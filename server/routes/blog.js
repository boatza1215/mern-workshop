const express = require("express")
const router = express.Router()
const {create,getallblogs,singleBlog} = require("../controllers/blogController")



router.post('/create',create)
router.get('/blogs',getallblogs)
router.get('/blog/:slug',singleBlog)

module.exports = router