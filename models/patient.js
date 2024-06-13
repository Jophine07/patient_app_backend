const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "age":{type:String,required:true},
        "mobile":{type:String,required:true},
        "sick":{type:String,required:true}
    }
)
let patientModel=mongoose.model("Patients",schema)
module.exports={patientModel}