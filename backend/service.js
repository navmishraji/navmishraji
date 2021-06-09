const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Tutorial = require('./Model/tutorial.model');
const { response } = require('express');

// const DB_URI ='mongodb+srv://admin:admin@123@clusterdemo.l2inr.mongodb.net/tutorial_db';
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// mongoose.connect(DB_URI,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// });
// const conn = mongoose.connection;
// conn.once('open',() =>{
//     console.log("mongo is connected sucessfully");
// })



// show list
// app.get("/tutorial/list",(req,res) =>{
//     Tutorial.find().then(data =>{
//         res.end(JSON.stringify(data));
//     }).catch(err => console.log(err))
// })

// show id wise details
// app.get("/tutorial/:id",(req,res) =>{
//      //console.log(req.params.id);
//      Tutorial.findById(req.params.id).then(data =>{
//         res.end(JSON.stringify(data));
//     }).catch(err => console.log(err))
// })

// add record


// app.post("/tutorial",(req,res) =>{
//      const addtutorial = new Tutorial({
//          title:req.body.title,
//          description:req.body.description,
//          status:req.body.status
//      })
//      addtutorial.save().then(data =>{
//         res.end(JSON.stringify(data));

//     }).catch(err => console.log(err))
// })
// update record
// app.put("/tutorial/:id",(req,res) =>{
//     Tutorial.findByIdAndUpdate({_id:req.params.id},{
//         $set:{
//             title:req.body.title,
//             description:req.body.description,
//             status:req.body.status
//         }
//     }).then(data =>{
//         console.log("updated successfully");
//         res.end(JSON.stringify(data));
//     }).catch(err => console.log(err))

// })
// // delete record
// app.delete("/tutorial/:id",(req,res) =>{
//     Tutorial.remove({_id:req.params.id}).then(data =>{
//         console.log("deleted successfully");

//     }).catch(err => console.log(err))

// })
// // remove All record
// app.delete("/tutorial",(req,res) =>{
//     Tutorial.remove().then(data =>{
//         console.log("deleted successfully");
//     }).catch(err => console.log(err))

// })
// // search record
// app.get("/tutorial?:title",(req,res) =>{

//     const title = req.query.title;
//     console.log("hello");
//     var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
//     console.log(condition.toString());
//     Tutorial.find(condition).then(data =>{
//         console.log(data)
//         res.end(JSON.stringify(data));

//     }).catch(err => console.log(err))

// })

app.get("/",(req,res) =>{
    var obj = [
        {
            Name: "demo1"
        },
        {
            Name: "demo2"
        },
        {
            Name: "demo3"
        }
    ]
    res.end(JSON.stringify(obj));
});
app.listen(3030);