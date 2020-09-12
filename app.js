 
    // hauseyhealth stack Mern + DialogFlow by Facundo Martin Arguello

//const op = require('./operaciones');
const mongoose = require('mongoose');
const express = require('express');
const server = express();
const dfff = require ('dialogflow-fulfillment');

//conexion dialogflow
    server.post ('/', express.json(), (req, res)=> {
        const agent = new dfff.WebhookClient({
            request : req,
            response : res
        });

        function demo (agent){
            agent.add("Enviando respuesta desde webhook server");
        }
    

        var intentMap = new Map ();

        intentMap.set('webhookDemo', demo)

        agent.handleRequest (intentMap);


    });


//conexion a la base de datos 2
const username = "Usuario"
const password = "Password"
const dbname = "Basededatos_name"

const uri = `mongodb+srv://${username}:${password}@hauseycluster0.bzgjq.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))


// Funciones de Express Server

server.get('/', (req, res)=>{
    res.send("Express y Node JS Instalados Ok");
    
});

server.get('/usuario', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify( [
       { nombre :'Luis', edad : 20},
       { nombre :'Luis', edad : 30},
       { nombre :'Luis', edad : 40},
       { nombre :'Luis', edad : 80},
       { nombre :'Luis', edad : 22}]));
});

server.listen(3000, function(){
    console.log('Server running Express y NodeJs OK');
});


//console.log(op);
//console.log(op.suma(369, 500));
