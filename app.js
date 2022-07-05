const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const _ = require("lodash");
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
    name:"harsh",
    image:"ss1",
    time: "22h"
})
const arturoItem2= new arturo({
    name:"saurabh",
    image:"ss2",
    time: "22h"
})
const defaultArturo = [arturoItem1, arturoItem2];
app.get("/arturo",function(req,res){
    arturo.find({}, function(err,foundItems){
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

//ALFAAZ STARTS
const alfaazSchema= {
    name: String,
    title: String,
    item: String,
    time: String
};
const alfaaz = mongoose.model("alfaaz",alfaazSchema);
const item1 = new alfaaz({
    name: "saurabh",
    title: "Mehnat",
    item: " Bina kuch kiye hi jay jaykaar nhi hoti\nkosis krne valon ki kbhi haar nhi hoti",
    time:" 22h"
});
const item2 = new alfaaz({
    name: "saurabh",
    title: "Mehnat",
    item: " Bina kuch kiye hi jay jaykaar nhi hoti\nkosis krne valon ki kbhi haar nhi hoti",
    time:" 22h"
});
const item3 = new alfaaz({
    name: "saurabh",
    title: "Mehnat",
    item: " Bina kuch kiye hi jay jaykaar nhi hoti\nkosis krne valon ki kbhi haar nhi hoti",
    time:" 22h"
});
const defaultAlfaaz = [item1,item2,item3];
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
    let name = req.body.yourName;
    let Title = req.body.title;
    let poem = req.body.item;
    let today = new Date();
     let day = today.toLocaleDateString("en-US" ,{ timeZone: 'Asia/Kolkata' });

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
    name:"harsh",
    image:"ss1",
    time: "22h"
})
const gymItem2= new gym({
    name:"saurabh",
    image:"ss2",
    time: "22h"
})
const defaultGym = [gymItem1, gymItem2];
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

//starts vibgyor
const vibgyorSchema = {
    name: String,
    image: String,
    time: String
};
const vibgyor = mongoose.model("vibgyors",vibgyorSchema);
const vibgyorItem1= new gym({
    name:"harsh",
    image:"ss1",
    time: "22h"
})
const vibgyorItem2= new gym({
    name:"saurabh",
    image:"ss2",
    time: "22h"
})
const defaultvibgyor = [vibgyorItem1, vibgyorItem2];
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
})


app.listen(3000,function(){
    console.log("Server started on port 3000");
})

