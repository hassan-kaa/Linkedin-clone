const  mongoose=require('mongoose')
const Schema = mongoose.Schema
const postSchema=new Schema({
    imageSrc:{
        type:String, 
        required:true,
    },

    description:{
        type:String,
        required:false
    },
    interactions:{
        likes:{type:Number,required:true},
        comments:{type:[String],required:true}
    }

},{timestamps:true});

module.exports=mongoose.model('Post',postSchema)
