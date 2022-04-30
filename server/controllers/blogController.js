

//ติดต่อกับฐานข้อมูล /ดำเนินการกับฐานข้อมูล
const slugify = require("slugify")
const Blogs = require("../models/blogs")
const { v4: uuidv4 } = require('uuid');
//บันทึกข้อมูล
exports.create=(req,res)=>{
    const {title,content,arthor}=req.body;
    let slug = slugify(title);

    if(!slug)slug=uuidv4();

    //validate /ตรวจสอบความถูกต้องของข้อมูล
    switch(true){
        case !title:
            return res.status(400).json({error:"กรุณาป้อนชือบทความ"})
            break;
        case !content:
            return res.status(400).json({error:"กรุณาป้อนรายละเอียดเนื้อหาบทความ"})
            break;
    }
    // res.json({
    //     data:{title,content,arthor,slug}
    // })

    //บันทึกข้อมูล
    Blogs.create({title,content,arthor,slug},(err,blog)=>{
        if(err){
            res.status(400).json({error:"มีชื่อบทความซ้ำ"})
        }
        res.json(blog)
    })  
}
//ดึงข้อมูล
exports.getallblogs=(req,res)=>{
    Blogs.find({}).exec((err,blogs)=>{
        res.json(blogs)
    })
}
//ดึงบทความที่สนใจโดยอ้างอิง Slug
exports.singleBlog=(req,res)=>{
    const {slug} = req.params
    Blogs.findOne({slug}).exec((err,blog)=>{
        res.json(blog)
    })
}