const express = require('express')
const app = express()
app.use(express.json())
//const http = require('http')
//const app = http.createServer((request, response)=> {
//  response.writeHead(200, {'Content-Type': 'application/json'})
//    response.end(JSON.stringify(fantasmas))
// response})



let fantasmas = [

  {    
    id:1,
    ghost: 'Demona',
    strength: 'Atacan de manera mas frecuente que otros fantasmas',
    debility: 'Poner un crucifijo dentro del radio de terror.. etc',
    description: 'Los demonios basan su actividad en la impiedad, acosando desde un principio a todos los jugadores y dejando al grupo muy desprotegido, ya que existe la posibilidad de que un demonio ataque incluso si la cordura no ha bajado. Cuando la cordura desciende del 25%, podrán atacar cada 20 segundos. Son los más apropiados para conversar mediante una ouija. Se recomienda más usar una varilla de incienso antes que una vela. Su mayor debilidad son los crucifijos, impidiendo que inicien cacería en un radio de 5 metros alrededor Los demonios inician cacería en corduras por debajo del 70%, salvo por su propia habilidad.',
    evidences: {
      evidence_1: 'Huellas dactilares',
      evidence_2:'Escritura Fantasma',
      evidence_3:'Temperaturas Heladas'
    },
    available:false,
    pruebas: 'Prueba: su habilidad especial consiste en teletransportarse cerca de un jugador y, si mantiene rango de visión con el objetivo por 20 segundos, empezará cacería. Los demonios pueden activar su habilidad completa incluso con grupos con cordura promedio por encima de 70%. Con cordura alta, y con vela y mechero en la mano, se puede provocar al fantasma para comprobar si inicia cacería. Prueba: si hay ouija en la casa y se tiene la cordura al máximo, al preguntarle \'¿Estoy loco?\' 2 veces, la respuesta debería ser \'No\'. Esto es porque esta respuesta la obtienes al estar al 90% de cordura o más  Prueba: otra prueba para identificarlos consiste en su debilidad. Los demonios no pueden drenar tanta cordura como el resto, siendo de un 20% menos cuando se usa la ouija (en una situación donde el fantasma drenaría un 40%, los demonios drenarían un 32%). A continuación dejo la tabla de cordura de la ouija:  En la Dread Room: -40% En la habitación del hueso: -20%  otra habitación: -5% Pregunta de cordura: -5% Decir escondite o hide\'n seek: -25%'
  
  },

  {   
    id:2,
    ghost: 'Spirit',
    strength: '',
    debility: 'Utilizar incienso cerca de ellos los parará temporalmente',
    description: 'Los espíritus son el primer fantasma de la lista, y supuestamente el más frecuente, aunque no será con mucha diferencia. Son el único tipo de fantasma que poseen debilidades pero no fortalezas, por lo que pueden ser también un poco más fáciles.Los espíritus inician cacería en corduras por debajo del 50% sin ninguna excepción.',
    evidences: {
      evidence_1: 'Spirit Box',
      evidence_2:'Escritura Fantasma',
      evidence_3:'EMF Nivel 5'
    },
    available:false,
    pruebas: ' Prueba: encender una varilla de incienso en la Dread Room evitará que los espíritus inicien cacería durante 180 segundos (3 minutos).: usar el micrófono parabólico para escuchar pasos. Deberían escucharse con un intervalo entre 2 y 15 segundos.'
  
  },
    

]
app.get('/',(request, response)=>{
  response.send('<h1>Hola mama</h1>')
})

app.get('/api/fantasmas',(request, response)=>{
  response.json(fantasmas)   
})


app.get('/api/fantasmas/:id',(request, response)=>{
  const id = Number(request.params.id)
  const fantasmita = fantasmas.find(fantasmita => fantasmita.id === id)
  if(fantasmita){
    response.json(fantasmita)
  } else {
    response.status(404).end()
        
  }
    
}) 
app.use((request, response) => {
  response.status(404).json({
    error:'not found'
  })
})
const PORT = 3002

app.listen(PORT,()=>{
  console.log(`listening on port ${PORT}`)
})
