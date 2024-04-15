const mongoose = require('mongoose')

const restaurantMenuSchema = mongoose.Schema({
   dishName:{
    type:String,
    required:true
   },
   vegetarian:{
    type:Boolean,
    required:true,
    lowercase:true
   },
   price:{
    type:Number,
    required:true,
    min:99,
    max:1000
   },
   offer:{
    type:String,
    required:false
   },
   rating:{
    type:String,
    required:false
   },
   description:{
    type:String,
    required:false
   },
   createdAt:{
      type: Date,
      immutable:true,
      default: () => Date.now()
   },
   updatedAt:{
      type:Date,
      default: () => Date.now()
   }
})

module.exports = mongoose.model( "restaurant_menu", restaurantMenuSchema)