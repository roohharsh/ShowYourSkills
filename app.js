const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const _ = require("lodash");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/AlfaazDB",{useNewUrlParser:true});

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
    res.render("index");
})
app.get("/arturo",function(req,res){
    res.render("arturo");
})
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

app.listen(3000,function(){
    console.log("Server started on port 3000");
})

