const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const productRoute = require('./routes/product');
const path = require('path');    
const ejs = require('ejs')
const multer = require('multer');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productRoute);

const storage = multer.diskStorage({
    destination:function(req, file , cb){
        return cb(null , "./uploads")
        //       error , foldername
    },
    filename:function(req, file, cb){
        return cb(null , `${Date.now()}-${file.originalname}`)
            //  error       filename
    },
})

const upload = multer({storage:storage});

app.set("view engine","ejs")
app.set("views", path.resolve( "views"));

app.get('/',(req,res)=>{
    return res.render("home")
})

// app.post('/upload',upload.single("profileImage"),(req,res)=>{
//     console.log(req.body); //no text field -> Null
//     console.log(req.file);

//     return res.redirect("/");
// })





mongoose.connect(process.env.MONGO_URL)
.then((e)=> console.log("MongoDB Connected"))
.catch((e)=> console.log(e))

app.listen(PORT , ()=>console.log(`Server started at PORT:${PORT}`));
