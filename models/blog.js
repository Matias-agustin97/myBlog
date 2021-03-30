const mongoose= require('mongoose')
const Schema= mongoose.Schema


const blogSchema= new Schema({
    title:{ 
        type: String,
        required: true
    },
    subTitle:{
        type: String,
        required: false
    },
    body:{
        type: String,
        required: true
    }
},{timestamps:true}) //Este valor opcional nos deja un timestamp cada vez que creamos un documento

const Blog= mongoose.model('Blog', blogSchema)

module.exports=Blog

/*Podes crear objetos asi: const x= new Blog({
    title: req.body.title
})

x.save()
*/