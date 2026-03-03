const express = require("express");
const router = express.Router();
const { check, getAllPlayers,updatePlayer,addPlayer } = require("../Controllers/check");


router.get("/ok",check);
router.get("/players",getAllPlayers);
router.put("/players/:id",updatePlayer);
router.post("/addplayer",addPlayer);


module.exports = router;