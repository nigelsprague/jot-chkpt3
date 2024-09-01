import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  jots = [
    new Jot({
      title: 'Note',
      color: '#0fffff',
      body: 'this is the body that i have written for these notes this is just an example i probably couldve done the lorem ipsum that would have been better huh'
    }),
    new Jot({
      title: 'Another Note',
      color: '#ff34ff',
      body: 'Risers heel flip Christ air quarter pipe Tommy Guerrero. Slob air lipslide nollie deck. Hang ten noseblunt slide Tracker birdie. Slap maxwell wax Saran Wrap kickflip Dudesblood. Bank steps mINUTEMEN acid drop frontside. Full pipe trucks soul skate rocket air. Judo air airwalk invert hardware. Coper melancholy pogo bearings. Fastplant flail rad nosepicker Rob Dyrdek. 720 blunt Dylan Rieder camel back lien air. Skater 540 helipop mini ramp Lester Kasai.'
    }),
    new Jot({
      title: 'Mick`s birthday gift ideas',
      color: '#f33c8f',
      body: 'Crocs crocs crocs crocs crocs crocs crocs crocs crocs crocs? crocs crocs crocs crocs crocs crocs! crocs crocs crocs crocs crocs. crocs crocs crocs crocs crocs crocs crocs crocs crocs crocs crocs crocs crocs'
    }),
    new Jot({
      title: 'And Another Note',
      color: '#2f34ff',
      body: 'Full pipe trucks soul skate rocket air. Judo air airwalk invert hardware. Coper melancholy pogo bearings. Fastplant flail rad nosepicker Rob Dyrdek. 720 blunt Dylan Rieder camel back lien air. Skater 540 helipop mini ramp Lester Kasai.'
    })
  ]

  activeJot = null
}

export const AppState = createObservableProxy(new ObservableAppState())