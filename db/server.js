const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(express.json());
const corsOption = {
    exposedHeaders: "x-auth-token"
}


mongoose.connect('mongodb://127.0.0.1:27017/NodeTest')
    .then(() => console.log('Connected to mango'))
    .catch((err) => console.log("Not connected to database", err));


app.use(cors(corsOption));
const taskSchema = new mongoose.Schema({
    name: String,
    description: String,   
    });

const Task = mongoose.model('todo', taskSchema);
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET" // Add other verbs you want to support
    );
    next();
  });



app.get('/todolist', async (req, res) => {
    const taches = await Task.find();
    console.log(taches);
    res.status(200).send(taches);
    

});

app.listen(5000, () => {
    console.log("Serveur à l'écoute")
})