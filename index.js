require("dotenv").config();

const app = require("./app");
const playerRouter = require("./Routes/player.route");

app.use(playerRouter);

app.use((req,res,next)=>{
    res.status(404).json({
        "message" : "Couldnt Find Path"
    })
})

app.use((err,req,res,next)=>{
    res.status(500).json({
        "message" : "Server Error Frontend is Ok"
    })
})

const port = process.env.PORT || 1000;
app.listen(port);
console.log(`Server Running at port. : ${port}`);