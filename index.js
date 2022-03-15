const express = require('express')
const app = express()
app.use(express.json())
//const http = require('http')
//const app = http.createServer((request, response)=> {
//  response.writeHead(200, {'Content-Type': 'application/json'})
//    response.end(JSON.stringify(fantasmas))
// response})



let ghosts = [

  {    
    id:1,
    ghost: 'Demon',
    strength: 'Demons will initiate hunts more often than other ghosts.',
    debility: 'Demons will drain less of your sanity when you use a Cursed Possession.',
    description: 'Demons are the most aggressive ghosts we have ever encountered. Known to attack without reason, they seem to enjoy the thrill of the hunt',
    evidences: {
      evidence_1:'Fingerprints',
      evidence_2:'Ghost Writing',
      evidence_3:'Freezing Temperatures'
    },
    available:false,
    tips: ''
  
  },

  {   
    id:2,
    ghost: 'Spirit',
    strength: '',
    debility: 'A Spirit can be temporarily stopped by burning Smudge Sticks near them.',
    description: 'Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome.',
    evidences: {
      evidence_1:'Spirit Box',
      evidence_2:'Ghost Writing',
      evidence_3:'EMF Level 5'
    },
    available:false,
    tips: ''
  
  },
  {    
    id:3,
    ghost: 'Wraith',
    strength: 'Wraiths almost never touch the ground, meaning it can not be tracked by footsteps.',
    debility: 'Wraiths have a toxic reaction to Salt.',
    description: 'Wraiths are one of the most dangerous ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.',
    evidences: {
      evidence_1:'EMF Level 5',
      evidence_2:'Spirit Box',
      evidence_3:'D.O.T.S Projector'
    },
    available:false,
    tips: ''
  
  },
  {    
    id:4,
    ghost: 'Phantom',
    strength: 'Looking at a Phantom will drop your sanity considerably faster.',
    debility: 'Taking a photo of the Phantom will make it temporarily disappear.',
    description: 'A Phantom is a ghost that can possess the living, inducing fear into those around it. They are most commonly summoned from Ouija Boards',
    evidences: {
      evidence_1:'Spirit Box',
      evidence_2:'Fingerprints',
      evidence_3:'D.O.T.S Projector'
    },
    available:false,
    tips: ''
  
  },
  {    
    id:5,
    ghost: 'Poltergeist',
    strength: 'Poltergeists can throw multiple objects at once.',
    debility: 'With nothing to throw, Poltergeists become powerless.',
    description: 'One of the most famous ghosts, the Poltergeist. Known to manipulate objects around it to spread fear into its victims',
    evidences: {
      evidence_1:'Spirit Box',
      evidence_2:'Fingerprints',
      evidence_3:'Ghost Writing'
    },
    available:false,
    tips: ''
  
  },
  {    
    id:6,
    ghost: 'Banshee',
    strength: 'A Banshee will only target one person at a time.',
    debility: 'Banshees fear the Crucifix and will be less aggressive near one.',
    description: 'The singing siren, known for attracting its victims through song. It has been know to single out its prey before making a killing blow.',
    evidences: {
      evidence_1:'D.O.T.S Projector',
      evidence_2:'Fingerprints',
      evidence_3:'Ghost Orb'
    },
    available:false,
    tips: ''
  
  },
  {    
    id:7,
    ghost: 'Jinn',
    strength: 'A Jinn will travel at a faster speed if its victim is far away.',
    debility: 'Turning off the location is power source will prevent the Jinn from using its ability.',
    description: 'A Jinn is a territorial ghost that will attack when threatened. It has also been known to travel at significant speed.',
    evidences: {
      evidence_1:'Fingerprints',
      evidence_2:'Freezing Temperatures',
      evidence_3:'EMF Level 5'
    },
    available:false,
    tips: ''
  
  },
  {    
    id:8,
    ghost: 'Mare',
    strength: 'A Mare will have an increased chance to attack in the dark.',
    debility: 'Turning the lights on around the Mare will lower its chance to attack.',
    description: 'A Mare is the source of all nightmares, making it most powerful in the dark.',
    evidences: {
      evidence_1:'Spirit Box',
      evidence_2:'Ghost Writing',
      evidence_3:'Ghost Orb'
    },
    available:false,
    tips: ''
  
  },
  {    
    id:9,
    ghost: 'Revenant',
    strength: 'A Revenant will travel at a significantly faster speed when hunting their prey.',
    debility: 'Hidding from the Revenant will cause it to move very slowly',
    description: 'A Revenant is a violent ghost that will attack indiscriminately. Their speed can be deceiving, as they are slow while dormant: however, as soon as they hunt they can move incredibly fast.',
    evidences: {
      evidence_1:'Freezing Temperatures',
      evidence_2:'Ghost Writing',
      evidence_3:'Ghost Orb'
    },
    available:false,
    tips: ''
  
  },  {    
    id:10,
    ghost: 'Shade',
    strength: 'Shades are much harder to find.',
    debility: 'The ghost will not enter a hunt if there are multiple people nearby.',
    description: 'A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranormal activity if there are multiple people nearby.',
    evidences: {
      evidence_1:'EMF Level 5',
      evidence_2:'Ghost Writing',
      evidence_3:'Freezing Temperatures'
    },
    available:false,
    tips: ''
  
  },  {    
    id:11,
    ghost: 'Yurei',
    strength: 'Yurei is have been known to have a stronger effect on people sanity.',
    debility: 'Smudging the Yurei is place of death will trap it temporarily, reducing how much it wanders.',
    description: 'A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.',
    evidences: {
      evidence_1:'Ghost Orb',
      evidence_2:'Freezing Temperatures',
      evidence_3:'D.O.T.S Projector'
    },
    available:false,
    tips: ''
  
  },  {    
    id:12,
    ghost: 'Oni',
    strength: 'Oni is are more active when people are nearby, and have been seen moving objects at great speed.',
    debility: 'Oni is are very active, making them easier to find.',
    description: 'Oni is love to scare their victims as much as possible before attacking. They are often seen in their physical form, guarding their place of death.',
    evidences: {
      evidence_1:'EMF Level 5',
      evidence_2:'Freezing Temperatures',
      evidence_3:'D.O.T.S Projector'
    },
    available:false,
    tips: ''
  
  },  {    
    id:13,
    ghost: 'Yokai',
    strength: 'Talking near a Yokai will anger it, increasing the chance of an attack.',
    debility: 'When hunting, a Yokai can only hear voices close to it.',
    description: 'Yokai are common ghosts that are attracted to human voices. They can usually be found haunting family homes.',
    evidences: {
      evidence_1:'Spirit Box',
      evidence_2:'Ghost Orb',
      evidence_3:'D.O.T.S Projector'
    },
    available:false,
    tips: ''
  
  },  {    
    id:14,
    ghost: 'Hantu',
    strength: 'Lower temperatures allow the Hantu to move at faster speeds.',
    debility: 'Hantus move slower in warmer areas.',
    description: 'A Hantu is a rare ghost that thrives in the coldest climates. The cold seems to make them more aggressive and empowered.',
    evidences: {
      evidence_1:'Fingerprints',
      evidence_2:'Ghost Orb',
      evidence_3:'Freezing Temperatures'
    },
    available:false,
    tips: ''
  
  },  {    
    id:15,
    ghost: 'Goryo',
    strength: 'A Goryo will usually only show itself on camera if there are no people nearby.',
    debility: 'They are rarely seen far from their place of death.',
    description: 'When a Goryo passes through a D.O.T.S projector, using a video camera is the only way to see it.',
    evidences: {
      evidence_1:'EMF Level 5',
      evidence_2:'D.O.T.S Projector',
      evidence_3:'Fingerprints'
    },
    available:false,
    tips: ''
  
  },  {    
    id:16,
    ghost: 'Myling',
    strength: 'A Myling is known to be quieter when hunting.',
    debility: 'Mylings more frequently make paranormal sounds.',
    description: 'A Myling is a very vocal and active ghost. They are rumoured to be quiet when hunting their prey.',
    evidences: {
      evidence_1:'Ghost Writing',
      evidence_2:'EMF Level 5',
      evidence_3:'Fingerprints'
    },
    available:false,
    tips: ''
  
  },  {    
    id:17,
    ghost: 'Onryo',
    strength: 'Extinquishing a flame can cause an Onryo to attack.',
    debility: 'When threatened, this ghost will be less likely to hunt.',
    description: 'The Onryo is often referred to as "The Wrathful Spirit". It steals souls from dying victims`bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.',
    evidences: {
      evidence_1:'Spirit Box',
      evidence_2:'Ghost Orb',
      evidence_3:'Freezing Temperatures'
    },
    available:false,
    tips: ''
  
  },  {    
    id:18,
    ghost: 'The Twins',
    strength: 'Either Twin can be angered and initiate an attack on their prey.',
    debility: 'The Twins will often interact with the environment at the same time.',
    description: 'These ghosts have been reported to mimic each other`s actions. They alternate their attacks to confuse their prey.',
    evidences: {
      evidence_1:'EMF Level 5',
      evidence_2:'Spirit Box',
      evidence_3:'Freezing Temperatures'
    },
    available:false,
    tips: ''
  
  },  {    
    id:19,
    ghost: 'Raiju',
    strength: 'A Raiju can siphon power from nearby electrical devices, making it move faster',
    debility: 'Raiju are constantly disrupting electronic equipment when attacking, making it easier to track.',
    description: 'A Raiju is a demon that thrives on electrical current. While generally calm they can become agitated when overwhelmed with power.',
    evidences: {
      evidence_1:'EMF Level 5',
      evidence_2:'Ghost Orb',
      evidence_3:'D.O.T.S Projector'
    },
    available:false,
    tips: ''
  
  },  {    
    id:20,
    ghost: 'Obake',
    strength: 'When interacting with the environment an Obake will rarely leave a trace.',
    debility: 'Sometimes this ghost will shapeshift, leaving behind unique evidence.',
    description: 'Obake are terrifying shape-shifters, capable of taking on many forms. They have been seen talking on humanoid shapes to attract their prey',
    evidences: {
      evidence_1:'EMF Level 5',
      evidence_2:'Fingerprints',
      evidence_3:'Ghost Orb'
    },
    available:false,
    tips: ''
  
  },  {    
    id:21,
    ghost: 'The Mimic',
    strength: 'We are unsure what this ghost is capable of. Be careful.',
    debility: 'Several reports have noted ghost orb sightings near mimics.',
    description: 'The Mimic is an elusive, mysterious copycat ghost that mirrors traits and behaviours from other ghost types',
    evidences: {
      evidence_1:'Spirit Box',
      evidence_2:'Fingerprints',
      evidence_3:'Freezing Temperatures'
    },
    available:false,
    tips: ''
  
  },
  
]
app.get('/',(request, response)=>{
  response.send('<h1>Hola mama</h1>')
})

app.get('/api/ghosts',(request, response)=>{
  response.json(ghosts)   
})


app.get('/api/ghosts/:id',(request, response)=>{
  const id = Number(request.params.id)
  const fantasmita = ghosts.find(fantasmita => fantasmita.id === id)
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
