const express = require('express')
const app = express()
const port =8080;

//midleware

// servir contenido estatico

app.use(express.static('./public/template') );


app.get('/generic', (req, res)=> {
    res.sendFile(__dirname+'/public/template/generic.html')
  });

app.get('/elements', (req, res)=> {
    res.sendFile(__dirname+'/public/template/elements.html')
  });

app.get('*', (req, res)=> {
    res.sendFile(__dirname+'/public/old/404.html')
  });


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})