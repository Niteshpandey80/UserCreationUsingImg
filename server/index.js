const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/simplemern')

const UserSchema = new mongoose.Schema({
    name:String ,
    email:String,
    image:String,
})
const User = mongoose.model('User' , UserSchema)

app.post('/add',  async(req,res) =>{
    const user = new User(req.body);
    await user.save();
    res.json(user)
})
app.get('/user' , async(req,res)=>{
    const user = await User.find();
    res.json(user)
})

app.listen(3000)