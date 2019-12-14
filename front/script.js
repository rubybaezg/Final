const boton = document.getElementById("boton-enviar");
const inputComentario = document.getElementById("input-comentario");
const divcomentarios= document.getElementById("div-comentarios");

function obtenercomentario(){
    fetch("http://localhost:3000/pedircomentario")

.then(respuestadelpedido => respuestadelpedido.json())

.then(comentarios => {
    comentarios.forEach(alumno => {
        armarComentarios(alumno.userName,alumno.comentarios)
    });

})
}

//arrow functions

function mifuncion(){

}

var mifuncion = function(){

}

var miarrowfunction = (parametro1) => {

}

//addEventListener le da un evento al boton seleccionado
boton.addEventListener("click", function(){
    var comentario = inputComentario.value;

    fetch("http://localhost:3000/comentario?contenidocomentario=" + comentario, {
        method: "POST"
    })//captura la respuesta del servidor, es una promesa
    .then(function(response){
        console.log(response);
    })
})


//esta funcion arma un elemento article de html 
function armarComentarios(nombre,comentario){
    var article = document.createElement("article");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");

    //para darle estilos desde js y css e igual al article que es el contenedor 
    h3.setAttribute("class", "nombre-usuario")
    h3.innerText = nombre;
    p.innerText = comentario;

//metemos el h3 y p dentro del article- aca seleccionamos el contenido del article en este caso en h3 que es el nombre del alumno y el p que es el comentario.
    article.appendChild(h3);
    article.appendChild(p);
//metemos el article dentro del div que esta en el html
    divcomentarios.appendChild(article);  
}

