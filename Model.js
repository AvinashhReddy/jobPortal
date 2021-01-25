const mongoose=require('mongoose')

const schema= new mongoose.Schema({
title :{
    type:String,
    default:''
},
description:{
    type:String,
    default:''
},
expireDate: {
    type:String,
    default:''
},
location:{
    type:String,
    default:''
},
applicants:{
    type: [],
    default:[]
}


}
) 

module.exports=mongoose.model('dataSchema',schema)
