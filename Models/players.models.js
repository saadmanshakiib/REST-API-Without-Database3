const {v4 : uuidv4} = require("uuid");

const players = [
{
    id : uuidv4(),
    name : "Shakib Al Hasan",
    age : "32",
    category : "All - Rounder"
},
{   
    id : uuidv4(),
     name : "Sadman Al Sakib",
    age : "22",
    category : "Batsman"
}
]

module.exports = players;