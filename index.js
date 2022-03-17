const express = require('express')
const app = express()

app.use(express.json())

// settings
app.set('PORT',process.env.PORT || 3002)

// routes

app.use(require('./src/routes/index'))
app.use(require('./src/routes/ghosts'))


// starting sv
app.listen(app.get('PORT'),()=>{
  console.log(`listening on port ${app.get('PORT')}`)
})