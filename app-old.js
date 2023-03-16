
const http = require('http');

http.createServer((req,res)=>{
    
    
    //res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    //res.writeHead(200,{'content-Type':'applicacion/csv'});

    //res.write('id; nombre\n');
    //res.write('1; Santiago\n');
    //res.write('2; maria\n');
    //res.write('3; jose\n');
    //res.write('4; pepe\n');




    //res.writeHead(200,{'content-Type':'text/plain'});
    //res.write('Hola mundo');

    //const persona = {
    //    id:1,
    //    nombre:'santiago'
    //}

    //res.write(JSON.stringify(persona));



    res.write('Hola mundo');


    res.end();
})
.listen(8080)

console.log('Escuchando en el puerto: ',8080);