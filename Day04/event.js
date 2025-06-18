
const EventEmitter=require("events")
const event = new EventEmitter()

event.on('greet',(name)=>{
    console.log(`Hello,${name} welcome to the class!`)
})

event.emit('greet','Soham')