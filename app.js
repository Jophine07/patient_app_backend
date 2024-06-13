const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const patient=require("./models/patient.js")
const { patientModel } = require("./models/patient")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://jophine:jophinepaul@cluster0.oyyvgui.mongodb.net/patientDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
let patient=new patientModel(input)
patient.save()
console.log(patient)
res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    let input=req.body
    patientModel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input=req.body
    patientModel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
            }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
})

app.get("/view",(req,res)=>{
    patient.patientModel.find().then(
        (data=>{
            res.json(data)
        })
    )
})

app.listen(8080,()=>{
    console.log("Server initiated")
})