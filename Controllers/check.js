const {v4 : uuidv4} = require("uuid");


let players = require("../Models/players.models");


const check=(req,res)=>{
res.send("I am Okay");
}

const getAllPlayers=(req,res)=>{
res.status(200).json({players})
}

const updatePlayer=(req,res)=>{

const {id}  = req.params;
const {name ,age, category} = req.body;


console.log( age )

players.filter((p)=> p.id == id)
.map((updatedInfo)=>{
    updatedInfo.name = name;
   updatedInfo.age = age;
     updatedInfo.category =category;
   
})

console.log(players);

res.status(200).json({players});
}

const addPlayer=(req,res)=>{
            const {name,category,age} = req.body;
            const newPlayer = [
                {   
                    id : uuidv4(),
                    name : req.body.name,
                    age : req.body.age,
                    category : req.body.category

                }
            ]
            console.log(name + age + category)
            players.push(newPlayer);

            res.status(201).json({players});
}

module.exports = {check,getAllPlayers,updatePlayer,addPlayer};