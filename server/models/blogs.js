//ชื่อบทความ (title), เนื้อหาบทความ (content), ผู้เขียน (arthor), slug(url)

// install postman -> install%postman(urlทั่วไปขึ้นงี้) -> install-postman(slug ขึ้นยังงี้)
const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    content:{
        type:{},
        require:true,
    },
    arthor:{
        type:String,
        default:"Admin" //ค่าเรื่มต้นที่จะอยู่ใน ฟิล
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true,
        
    }
},{timestamps:true})

module.exports = mongoose.model("Blogs",blogSchema)

// computer-1 ->
// computer-2 ->