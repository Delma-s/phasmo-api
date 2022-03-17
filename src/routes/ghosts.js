const {Router} = require('express')
const router = Router()

const ghosts = require('../ghosts.json')


router.get('/api/ghosts',(request,response)=>{
  console.log('asdadasdadasd')
  response.json(ghosts)   
})

router.get('/api/ghosts/:id',(request,response)=>{
  console.log('asdadasdadasd')
  const id= Number(request.params.id)
  const ghost = ghosts.find(ghost => ghost.id == id)
  console.log(id)
  if(ghost){
    console.log(ghost)
    console.log('aiuda')
    response.json(ghost)
  }else{
    console.log(ghost)
    response.status(404).end()
  }

})

module.exports = router