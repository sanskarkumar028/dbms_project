const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine','ejs');
app.set('port',process.env.PORT||7000)
// app.use( express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('views'));
app.use(express.static('../public/'));


const path = require('path')
app.use( express.static(path.join(__dirname, 'public')))
const mongoose=require('mongoose');
// const { urlencoded } = require("body-parser");
mongoose.connect("mongodb://localhost:27017/Newp");

const projectSchema=new mongoose.Schema({
    name:String,   
    mob:Number,   
    items:String,
    email:String,  
    Paymode:String,
    Amount:Number,  
    Address:String,
    Description:String
});
const project=mongoose.model("Project",projectSchema)

const item1=new project({
    name:"Sanskar",   
    mob:"12345",   
    items:"sdfgf,fgfd,fgf",
    email:"sdfrdc",  
    Paymode:"dfgfdfvbhgf",
    Amount:"123",  
    Address:"sdfr fh  erf ghyju 6ejyrh ",
    Description:"efj  hjhk tghn bvzgf jvbfhrwdsfv "
})

item1.save();
app.get("/", (req, res) => {
    res.render("home");
})

app.get("/contact",(req,res)=>{
    res.render("contact")
});
app.get("/menu",(req,res)=>{
    res.render("menu")
})

app.get("/order",(req,res)=>{
    res.render("order")
})
app.get("/about",(req,res)=>{
    res.render("about")
})

app.post("/",(req,res)=>{
    // res.sendFile('./views/thanks.ejs')

    const item=new project({
        name:req.body.name,   
        mob:req.body.mob,   
        items:req.body.items,
        email:req.body.email,  
        Paymode:req.body.Paymode,
        Amount:req.body.Amount,  
        Address:req.body.Address,
        Description:req.body.Description
    })

    item.save();


res.render("thanks")
})

app.listen(7000, () => {
    console.log("server started o port 3000");
})

