const { Router } = require('express')
const router = Router()


router.get('/',(request, response)=>{
  response.send('<h1>Hola mama</h1>')
})
    


module.exports = router