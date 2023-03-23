const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port =process.env.PORT;



//midleware


//Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/parcials');


// servir contenido estatico
app.use(express.static('./public/template') );

app.get('/', (req, res)=> {
  res.render('home',{
    nombre:'Santiago cardona garzon',
    titulo:'Ingeniero en sistemas'
  });
});

app.get('/generic', (req, res)=> {
    res.render('generic',{
      nombre:'Santiago cardona garzon',
      titulo:'Ingeniero en sistemas'
    });
  });

app.get('/elements', (req, res)=> {
    res.render('elements',{
      nombre:'Santiago cardona garzon',
      titulo:'Ingeniero en sistemas'
    })
  });

app.get('*', (req, res)=> {
    res.render('*')
  });


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})