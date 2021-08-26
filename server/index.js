const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = require('mongodb')

app.use(express.json());

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    isAdmin: Boolean,
    status: {
        type: String,
        default: "A"
    },
    tags: [String]
});


const User = mongoose.model('MyUsers',userSchema);


app.post('/api/user/new',async(req,res) => {
    try {   
        const newUser = await User.create({...req.body});
        res.json({success: true,payload: newUser});
    } catch (error) {
        res.json({success: false,errorMsg: error.message})
    }
})


app.get('/api/user/all',async (req,res) => {
    try {
        const aggregateUsers = User.aggregate(
            [
               { $match: {isAdmin: true} }
            ]
         )
         console.log(aggregateUsers)
         res.json(aggregateUsers)
        // const users = await User.find().sort({age: -1})
        // res.json({success: true,payload: users})
    } catch (error) {
        res.json({succes: false,errorMsg: error.message})
    }
});





mongoose.connect('mongodb://localhost/myUsers',{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('successfully connected to database'))
    .catch(err => console.log(`Error: ${err}`))




app.listen(3003,() => console.log('Server on 3003'))





