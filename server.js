console.log('Estoy usando nodemon')

// > Como usamos la api node http? tenemos que requerirlo (importarlo):

const http = require('node:http')
const moment = require('moment')

let contadorVisitas = 0

/* console.log(http) */

const server = http.createServer((request, response) => {
    //console.log(request.url)
    //console.log(request.method)

    const { method, url } = request

    if (method === 'GET'){

        if (url === '/'){
            //console.log(response)
            response.writeHead(200, {'content-type': 'text/html'})
            response.write('<h2> Hola soy un servidor HTTP con NODE</h2>')
            response.write(`<h2>Visitas: ${++contadorVisitas}</h2>`)
            response.end()
        } else if (url === '/otra-url'){
            response.writeHead(200, {'content-type': 'text/html'})
            response.write(`<h2 style="color: crimson">Error 404. Ruta <span style="color:blue">${url}</span> no implementada</h2>`)
            response.end()
        } else if (url === '/fecha'){
            response.writeHead(200, {'content-type': 'text/html'})
            response.write(`<h2 style="color: crimson">La fecha y hora actual es: ${moment().format('LLL')}</h2>`)
            response.end()
        }
    }
})

const PORT = process.env.PORT || 8080

server.listen(PORT, err => {
    if (err) return console.log(`Error en el servidor ${err}`) 
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
})