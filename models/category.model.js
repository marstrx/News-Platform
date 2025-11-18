import mongoose,{Schema} from "mongoose";

const categorySchema= new Schema({
    name :{
        type :String,
        required :true,
        unique :true,
        trim: true,
        maxLength: 50
    },
    slug:{
        type :String,
        unique :true,
        trim: true
    }
});

const Category = mongoose.model("Category",categorySchema);
export default Category;