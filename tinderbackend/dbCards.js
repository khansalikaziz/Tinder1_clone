import mongoose from "mongoose";
const cardSchema=mongoose.Schema({
    name:String,
    imgUrl:String
})
//salik updated
export default mongoose.model('cards',cardSchema);