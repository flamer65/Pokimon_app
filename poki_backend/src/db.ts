import mongoose from "mongoose";
import { Model, Schema } from "mongoose";
mongoose.connect("mongodb+srv://namank6510_db_user:root1234@cluster0.kyljjyy.mongodb.net/");
const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

export const UserModel = mongoose.model("User", UserSchema);


