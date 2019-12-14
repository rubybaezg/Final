
var url = 'https://msn-comit.herokuapp.com/login'
var url2 = 'https://msn-comit.herokuapp.com/mensajes'
var contenido = ""
async function tokeN() {
    var respuesta = await fetch(url)
    contenido = await respuesta.text()
}
tokeN()
setInterval(get, 10000)
async function get() {
    var resp = await fetch(url2, {
        headers: {
            token: `${contenido}`
        }
    })
    var msj = await resp.text()
    document.querySelector('table').innerHTML = msj
}
async function post() {
    var respuesta = await fetch(url2, {
        method: 'POST',
        headers: {
            token: `${contenido}`
        },
        body: `${document.querySelector('input').value}`,
    })
    alert("Mandaste el mensaje")
}