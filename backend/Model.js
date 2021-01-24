const mongoose=require('mongoose')

const schema= new mongoose.Schema({
title :String,
description:String,
location:


}
)

module.exports=mongoose.model('dataSchema',schema)
