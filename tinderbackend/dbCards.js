import mongoose from "mongoose";
const cardSchema=mongoose.Schema({
    name:String,
    imgUrl:String
})
//salik updated again after deleting
export default mongoose.model('cards',cardSchema);