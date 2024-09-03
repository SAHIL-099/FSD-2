// Write a program using react and node/express to demonstrate a full stack connectivity. Take one 
// textfield, submit button on react and insert a corresponding record in database via node/express 
// script. Write required files.


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/reactconnect');
const UserSchema = new mongoose.Schema({
    username: String
});
const User = new mongoose.model('User', UserSchema);
app.post('/signup', async (req, res) => {
    try {
        const { username } = req.body;
        const newUser = new User({ username });
        await newUser.save();
        res.send();
    }
     catch (error) {
     console.log(error)
    }

})

app.listen(5000)