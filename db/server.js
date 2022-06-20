const express = require('express')
const app = express()
const parkings = require('./parkings.json')

/**
 * Import MongoClient & connexion à la DB
 */
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'NodeTest';
let db
 
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  db = client.db(dbName);
});


app.listen(5000, () => {
    console.log("Serveur à l'écoute")
})