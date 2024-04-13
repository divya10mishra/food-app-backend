const mongoose = require('mongoose')

const restaurantMenuSchema = mongoose.Schema({
   menuVariety:{
    type:String,
    required:true
   },
   vegetarian:{
    type:Boolean,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   offer:{
    type:String,
    required:false
   },
   rating:{
    type:String,
    required:false
   },
   cuisines:{
    type:Array,
    required:false
   }
})

module.exports = mongoose.model("restaurantMenu", restaurantMenuSchema, "restaurant_menu")