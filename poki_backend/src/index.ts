import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const JWT_SECRET = "Secret";
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    try{
        if(username != "" || username != null || username != undefined && password != "" || password != null || password != undefined){
            UserModel.create({ username, password });
            res.json({ message: "User created" });
        }
    }catch(err){
        res.status(500).json({ message: "Internal Server Error" });
    }
})

app.post('/signin', async (req, res) => {
   const { username, password } = req.body;
   try{
    if(username != "" || username != null || username != undefined && password != "" || password != null || password != undefined){
     const user = await UserModel.findOne({username});
        if(!user){
            return res.status(401).send("User not found");
        }
        if(user.password !== password){
            return res.status(401).send("Incorrect password");
        }
        const token = jwt.sign(user._id, JWT_SECRET);
        res.status(200).send(token);
    }
   }catch(err){
    res.status(500).json({ message: "Internal Server Error" });
   }
})
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
