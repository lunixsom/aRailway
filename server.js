console.log('Estoy usando nodemon clase 42 test')

// > Como usamos la api node http? tenemos que requerirlo (importarlo):

const http = require('node:http')
const momenta = require('moment')

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
            response.write(`<h2 style="color:blueviolet"> Visitas: ${++contadorVisitas}</h2>`)
            response.end()
        }
        if (url === '/otra-url'){
            response.writeHead(200, {'content-type': 'text/html'})
            response.write(`<h2 style="color:green"> Esta es la url: ${url}</h2>`)
            response.end()
        }
        if (url === '/fecha'){
            response.writeHead(200, {'content-type': 'text/html'})
            response.write(`<h2> La fecha de hoy es: ${momenta().format('LLL')}</h2>`)
            response.end()
        } else {
            response.writeHead(200, {'content-type': 'text/html'})
            response.end(`<h2 style="color:red"> Error 404. Ruta ${url} no encontrada</h2>`)
        }
    }
})

const PORT = process.env.PORT || 8080

server.listen(PORT, err => {
    if (err) return console.log(`Error en el servidor ${err}`) 
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
})