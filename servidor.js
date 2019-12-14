//los modulos de node que necesita el paquete
const express = require('express');
const app = express();
//path es para actualizar un recurso
const path = require("path");
const cors = require('cors');
const comentarios= [];
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))//transforma el string en un jason
app.use(cors());

//le decimo que los recursos de la carpeta front van a ser estaticos
app.use(express.static(path.join(__dirname, "../front")));
//le decimos que lea el indexhtml
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../front/index.html"));
});

app.get("/comentario",(req,res) => {
    res.json(comentarios);
})
//creamos un requerimiento y recibiremos una respuesta
app.post("/comentario", (req, res) => {
    //si la respuesta viene de lo alman¿cenado en la variable contenido comentario, nos avisa que lo recibio
    //utilizar aqui el doby parser para mostrar el comentario de los alumnos 
    
    if(req.query.contenidocomentario){
        var nuevoComentario = req.query.contenidocomentario;
        comentarios.push (nuevoComentario)

        res.send("comentario recibido");
    }else{
        res.send("no se recibio datos")
    }
})

var puerto = 3000;
app.listen(puerto, () => {
    console.log( "Escuchando en el puerto " + puerto );
    console.log(comentarios);
  });

