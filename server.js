require('dotenv').config()
const express= require('express')
const app= express()
const PORT= process.env.PORT||3000
const path= require('path')
const mongoose= require('mongoose')
const Blog= require('./models/blog.js')

mongoose.connect(process.env.DATA_BASEURL,{useUnifiedTopology: true, useNewUrlParser: true })
    .then((result)=>app.listen(PORT,()=> console.log(`Server listening on port ${PORT}`)))
    .catch((error)=>console.log(error))

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
    extended: true
  }))


app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/blog',(req,res)=>{
    Blog.find().sort({createdAt:-1})// sort the array in descending order, thus the -1
    .then((result)=>{
        res.render('blog',{blogs:result}) //Find nos Devuelve un array con todos los objetos,los pasamos al view como varible
    })
    .catch((err)=>{
        console.error(err)
    })
})

app.post('/blog',(req,res)=>{
    let newBlog= new Blog({
        "title":"prueba",
        "subtitle":" sub",
        "body":"body"
    })
    newBlog.save()
    res.send(newBlog)
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.post('/contact',(req,res)=>{

})




