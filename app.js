const express = require('express')
const app = express()
const port =8080;

app.get('/', (req, res)=> {
  res.send('Home page')
});

app.get('/hola-mundo', (req, res)=> {
    res.send('Hello world on its respective route')
  });

app.get('*', (req, res)=> {
    res.send('404 | Page not found')
  });
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})