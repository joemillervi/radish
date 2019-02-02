const hbs = require( 'express-handlebars');
const express = require('express')
const app = express()


const PATH_TO_LANDING_PAGE = __dirname + '/assets'
const PORT = 42069

app.set('view engine', 'hbs');

app.engine( 'hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'base.hbs',
  partialsDir: [__dirname + '/views/partials/']
}))

app.use("/assets", express.static(PATH_TO_LANDING_PAGE)) 

app.get('/', async (req, res) => {
  res.render('pages/index', {
  /* handlebars data here */
    helloWorld: [
      'hello',
      'world'
    ]
  })
})


app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`)) 
