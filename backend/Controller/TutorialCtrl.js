const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Tutorial = require('../Model/tutorial.model');
const { response } = require('express');
const { traverseTwoPhase } = require('react-dom/test-utils');

const DB_URI ='mongodb+srv://admin:admin@123@clusterdemo.l2inr.mongodb.net/tutorial_db';
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

mongoose.connect(DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const conn = mongoose.connection;
conn.once('open',() =>{
    console.log("mongo is connected sucessfully");
})

exports.create = (req,res) => {
    const addtutorial = new Tutorial({
        title:req.body.title,
        description:req.body.description,
        status:req.body.status
    })

    addtutorial.save().then(data =>{ cyscko
       res.end(JSON.stringify(data));
    }).catch(err => console.log(err))

}