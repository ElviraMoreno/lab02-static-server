//http
var http = require ("http");
//crear un servidor basico
var server= http.createServer(function(req, res){
    // Armar la respuesta en http
    //Armar un encabezado http
    res.writeHead(200,{
    "content-Type" : "text/plain",
    "server" : "ITGAM@4.2.4"
    });
    //ENVIAMOS LA RESPUESTA
    res.write("Hola Mundo");
    //cerrar la conexion
    res.end();
});

//poner a trabajar al serverserver
server. listen(3000,'127.0.0.1',function(){
 console.log(">server listening @http://localhost:300...");
});
    
