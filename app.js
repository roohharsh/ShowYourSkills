const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();
const _ = require("lodash");
const http = require("http");
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const AlfaazDB = "mongodb+srv://saurabh_8230:project123@cluster0.zbqxu.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(AlfaazDB,{useNewUrlParser:true});

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
    name:"Gautam Kumawat",
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
    name: "Navneet Singh",
    title: "Alfaaz",
    item: `साल बदल जाते हैं, तारीखें याद रह जाती हैं,
    चेहरे बदल जाते हैं, परछाईं याद रह जाती हैं ।
    इस मोहब्बत को हर शख़्स समझ कर भी न समझ सका,
    सारी यादें मिट जाती हैं, पर आँखें याद रह जाती हैं ।`,
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
    //  let day = today.toLocaleString("en-US" ,{ timeZone: 'Asia/Kolkata' });
    let day = today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear();

    const item = new alfaaz({
        name: name,
        title: Title,
        item: poem,
        time: day
    });
    item.save();
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
        foundItems = foundItems.reverse();
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
    name:"Chitrankar",
    image:"ss1.jpeg",
    time: ""
})
const defaultvibgyor = [vibgyorItem1];
app.get("/vibgyor",function(req,res){
    vibgyor.find({}, function(err,foundItems){
        foundItems = foundItems.reverse();
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
    res.redirect("/vibgyor");
});

// alankar 
const alankarSchema = {
    name: String,
    audio: String,
    time: String
};
const alankar = mongoose.model("alankars",alankarSchema);
const alankarItem1= new alankar({
    name:"Vaibhav",
    audio:"audio.mp3",
    time: ""
})
const defaultAlankar = [alankarItem1];
app.get("/alankar",function(req,res){
    alankar.find({}, function(err,foundItems){
        foundItems = foundItems.reverse();
        if(foundItems.length===0)
        {
            alankar.insertMany(defaultAlankar,function(err){
                if(err)
                {
                    console.log("some error");
                }
                else
                {
                    console.log("Successfully saved");
                }
            })
            res.redirect("/alankar");
        }
        else
        res.render("alankar", { posts:foundItems});
    })
})
app.get("/alankar/alankarUpload",function(req,res){
    res.render("alankarUpload");
})

let alankarstorage = multer.diskStorage({
    destination:"./public/alankarUploads/",
    filename: (req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
});
var upload = multer({
    storage:alankarstorage
}).single('alankarAudio');

app.post("/alankar/alankarUpload" ,upload,function(req,res,next){
    const name = _.capitalize(req.body.yourName);
    const audio = req.file.filename;
    let today = new Date();
    let day = today.toLocaleString("en-US" ,{ timeZone: 'Asia/Kolkata' });
    const item = new alankar({
        name: name,
        audio: audio,
        time: day
    });
    item.save();
    res.redirect("/alankar");
});

// dcypher 
const dcypherSchema = {
    name: String,
    video: String,
    time: String
};
const dcypher = mongoose.model("dcyphers",dcypherSchema);
const dcypherItem1= new dcypher({
    name:"dcypher",
    video:"video.mp4",
    time: ""
})
const defaultDcypher = [dcypherItem1];
app.get("/dcypher",function(req,res){
    dcypher.find({}, function(err,foundItems){
        foundItems = foundItems.reverse();
        if(foundItems.length===0)
        {
            dcypher.insertMany(defaultDcypher,function(err){
                if(err)
                {
                    console.log("some error");
                }
                else
                {
                    console.log("Successfully saved");
                }
            })
            res.redirect("/dcypher");
        }
        else
        res.render("dcypher", { posts:foundItems});
    })
})
app.get("/dcypher/dcypherUpload",function(req,res){
    res.render("dcypherUpload");
})

let dcypherstorage = multer.diskStorage({
    destination:"./public/dcypherUploads/",
    filename: (req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
});
var upload = multer({
    storage:dcypherstorage
}).single('dcypherVideo');

app.post("/dcypher/dcypherUpload" ,upload,function(req,res,next){
    const name = _.capitalize(req.body.yourName);
    const video = req.file.filename;
    let today = new Date();
    let day = today.toLocaleString("en-US" ,{ timeZone: 'Asia/Kolkata' });
    const item = new dcypher({
        name: name,
        video: video,
        time: day
    });
    item.save();
    res.redirect("/dcypher");
});

// alpha 
const alphaSchema = {
    name: String,
    video: String,
    time: String
};
const alpha = mongoose.model("alphas",alphaSchema);
const alphaItem1= new alpha({
    name:"Alpha Productions",
    video:"video.mp4",
    time: ""
})
const defaultAlpha = [alphaItem1];
app.get("/alpha",function(req,res){
    alpha.find({}, function(err,foundItems){
        foundItems = foundItems.reverse();
        if(foundItems.length===0)
        {
            alpha.insertMany(defaultAlpha,function(err){
                if(err)
                {
                    console.log("some error");
                }
                else
                {
                    console.log("Successfully saved");
                }
            })
            res.redirect("/alpha");
        }
        else
        res.render("alpha", { posts:foundItems});
    })
})
app.get("/alpha/alphaUpload",function(req,res){
    res.render("alphaUpload");
})

let alphastorage = multer.diskStorage({
    destination:"./public/alphaUploads/",
    filename: (req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
});
var upload = multer({
    storage:alphastorage
}).single('alphaVideo');

app.post("/alpha/alphaUpload" ,upload,function(req,res,next){
    const name = _.capitalize(req.body.yourName);
    const video = req.file.filename;
    let today = new Date();
    let day = today.toLocaleString("en-US" ,{ timeZone: 'Asia/Kolkata' });
    const item = new alpha({
        name: name,
        video: video,
        time: day
    });
    item.save();
    res.redirect("/alpha");
});

// gaming 
const gamingSchema = {
    name: String,
    video: String,
    time: String
};
const gaming = mongoose.model("gamings",gamingSchema);
const gamingItem1= new gaming({
    name:"Gaming",
    video:"video.mp4",
    time: ""
})
const defaultGaming = [gamingItem1];
app.get("/gaming",function(req,res){
    gaming.find({}, function(err,foundItems){
        foundItems = foundItems.reverse();
        if(foundItems.length===0)
        {
            gaming.insertMany(defaultGaming,function(err){
                if(err)
                {
                    console.log("some error");
                }
                else
                {
                    console.log("Successfully saved");
                }
            })
            res.redirect("/gaming");
        }
        else
        res.render("gaming", { posts:foundItems});
    })
})
app.get("/gaming/gamingUpload",function(req,res){
    res.render("gamingUpload");
})

let gamingstorage = multer.diskStorage({
    destination:"./public/gamingUploads/",
    filename: (req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
});
var upload = multer({
    storage:gamingstorage
}).single('gamingVideo');

app.post("/gaming/gamingUpload" ,upload,function(req,res,next){
    const name = _.capitalize(req.body.yourName);
    const video = req.file.filename;
    let today = new Date();
    let day = today.toLocaleString("en-US" ,{ timeZone: 'Asia/Kolkata' });
    const item = new gaming({
        name: name,
        video: video,
        time: day
    });
    item.save();
    res.redirect("/gaming");
});

// about 
app.get("/about", function(req,res){
    res.render("about");
})

// Login 
app.get("/login", function(req,res){
    res.render("login");
})

// feedback
const feedbackSchema = {
    firstName: String,
    lastName: String,
    phone: Number,
    email: String,
    item: String
};
const feedback = mongoose.model("feedbacks",feedbackSchema);
app.get("/feedback", function(req,res){
    res.render("feedback");
})
app.post("/feedback",function(req,res){
    const firstName = req.body.yourFirstName;
    const lastName = req.body.yourLastName;
    const phone = req.body.Phone;
    const email = req.body.email;
    const item = req.body.item;
    const fb = new feedback({
        firstName: firstName,
        lastName:lastName,
        phone: phone,
        email: email,
        item : item,
    });
    fb.save();
    res.redirect("/");

})

app.listen(port,hostname,function(){
    console.log(`Server started at http://${hostname}:${port}`);
})
