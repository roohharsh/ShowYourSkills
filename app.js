const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();
const _ = require("lodash");
const alert = require('alert');
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/AlfaazDB",{useNewUrlParser:true});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
    res.render("index");
})

// Arturo starts
const arturoSchema = {
    name: String,
    image: String,
    time: String
};
const arturo = mongoose.model("arturos",arturoSchema);
const arturoItem1= new arturo({
    name:"Arturo",
    image:"ss1.jpeg",
    time: ""
})
const defaultArturo = [arturoItem1];
app.get("/arturo",function(req,res){
    arturo.find({}, function(err,foundItems){
        foundItems = foundItems.reverse();
        if(foundItems.length===0)
        {
            arturo.insertMany(defaultArturo,function(err){
                if(err)
                {
                    console.log("some error");
                }
                else
                {
                    console.log("Successfully saved");
                }
            })
            res.redirect("/arturo");
        }
        else
        res.render("arturo", { posts:foundItems});
    })
})
app.get("/arturo/arturoUpload",function(req,res){
    res.render("arturoUpload");

})

let storage = multer.diskStorage({
    destination:"./public/arturoUploads/",
    filename: (req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
});
var upload = multer({
    storage:storage
}).single('arturoImage');

app.post("/arturo/arturoUpload" ,upload,function(req,res,next){
    const name = _.capitalize(req.body.yourName);
    const image = req.file.filename;
    let today = new Date();
    let day = today.toLocaleString("en-US" ,{ timeZone: 'Asia/Kolkata' });
    const item = new arturo({
        name: name,
        image: image,
        time: day
    });
    item.save();
    // alert("Successfully uploaded");
    message.message();
    res.redirect("/arturo");
});

//ALFAAZ STARTS
const alfaazSchema= {
    name: String,
    title: String,
    item: String,
    time: String
};
const alfaaz = mongoose.model("alfaaz",alfaazSchema);
const item1 = new alfaaz({
    name: "Alfaaz",
    title: "The Raven",
    item: `Deep into that darkness peering,

    Long I stood there, wondering, fearing,
    
    Doubting, dreaming dreams no mortals
    
    Ever dared to dream before;
    
    But the silence was unbroken,
    
    And the stillness gave no token,
    
    And the only word there spoken
    
    Was the whispered word, "Lenore!"
    
    This I whispered, and an echo
    
    Murmured back the word, "Lenore!"
    
    Merely this, and nothing more.`,
    time:""
});
const defaultAlfaaz = [item1];
app.get("/alfaaz",function(req,res){
    alfaaz.find({}, function(err,foundItems){
        foundItems = foundItems.reverse();
        if(foundItems.length===0)
        {
            alfaaz.insertMany(defaultAlfaaz,function(err){
                if(err)
                {
                    console.log("some error");
                }
                else
                {
                    console.log("Successfully saved");
                }
            })
            res.redirect("/alfaaz");
        }
        else
        res.render("alfaaz", { posts:foundItems});
    })
})

app.get("/alfaaz/alfaazUpload",function(req,res){
    res.render("alfaazUpload");
})

app.post("/alfaaz/alfaazUpload",function(req,res){
    const name = _.capitalize(req.body.yourName);
    let Title = req.body.title;
    let poem = req.body.item;
    let today = new Date();
     let day = today.toLocaleString("en-US" ,{ timeZone: 'Asia/Kolkata' });

    const item = new alfaaz({
        name: name,
        title: Title,
        item: poem,
        time: day
    });
    item.save();
    alert("Successfully uploaded");
    res.redirect("/alfaaz");
})

//Gym Starts
const gymSchema = {
    name: String,
    image: String,
    time: String
};
const gym = mongoose.model("gyms",gymSchema);
const gymItem1= new gym({
    name:"Gymnasium",
    image:"ss1.jpeg",
    time: ""
})
const defaultGym = [gymItem1];
app.get("/gymnasium",function(req,res){
    gym.find({}, function(err,foundItems){
        if(foundItems.length===0)
        {
            gym.insertMany(defaultGym,function(err){
                if(err)
                {
                    console.log("some error");
                }
                else
                {
                    console.log("Successfully saved");
                }
            })
            res.redirect("/gymnasium");
        }
        else
        res.render("gymnasium", { posts:foundItems});
    })
})
app.get("/gymnasium/gymnasiumUpload",function(req,res){
    res.render("gymnasiumUpload");
})

let gymstorage = multer.diskStorage({
    destination:"./public/gymUploads/",
    filename: (req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
});
var upload = multer({
    storage:gymstorage
}).single('gymImage');

app.post("/gymnasium/gymnasiumUpload" ,upload,function(req,res,next){
    const name = _.capitalize(req.body.yourName);
    const image = req.file.filename;
    let today = new Date();
    let day = today.toLocaleString("en-US" ,{ timeZone: 'Asia/Kolkata' });
    const item = new gym({
        name: name,
        image: image,
        time: day
    });
    item.save();
    alert("Successfully uploaded");
    res.redirect("/gymnasium");
});

//starts vibgyor
const vibgyorSchema = {
    name: String,
    image: String,
    time: String
};
const vibgyor = mongoose.model("vibgyors",vibgyorSchema);
const vibgyorItem1= new vibgyor({
    name:"Vibgyor",
    image:"ss1.jpeg",
    time: ""
})
const defaultvibgyor = [vibgyorItem1];
app.get("/vibgyor",function(req,res){
    vibgyor.find({}, function(err,foundItems){
        if(foundItems.length===0)
        {
            vibgyor.insertMany(defaultvibgyor,function(err){
                if(err)
                {
                    console.log("some error");
                }
                else
                {
                    console.log("Successfully saved");
                }
            })
            res.redirect("/vibgyor");
        }
        else
        res.render("vibgyor", { posts:foundItems});
    })
})
app.get("/vibgyor/vibgyorUpload",function(req,res){
    res.render("vibgyorUpload");
});

let vibgyorstorage = multer.diskStorage({
    destination:"./public/vibgyorUploads/",
    filename: (req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
});
var upload = multer({
    storage:vibgyorstorage
}).single('vibgyorImage');

app.post("/vibgyor/vibgyorUpload" ,upload,function(req,res,next){
    const name = req.body.yourName;
    const image = req.file.filename;
    let today = new Date();
    let day = today.toLocaleDateString("en-US" ,{ timeZone: 'Asia/Kolkata' });
    const item = new vibgyor({
        name: name,
        image: image,
        time: day
    });
    item.save();
    alert("Successfully uploaded");
    res.redirect("/vibgyor");
});


// dcypher 
app.get("/dcypher", function(req,res){
    res.render("dcypher");
})

// alankar 
app.get("/alankar", function(req,res){
    res.render("alankar");
})

// alpha 
app.get("/alpha", function(req,res){
    res.render("alpha");
})

// about 
app.get("/about", function(req,res){
    res.render("about");
})

// feedback
app.get("/feedback", function(req,res){
    res.render("feedback");
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
})

