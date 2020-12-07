const mongoose = require('mongoose');
const playerShema = mongoose.Schema({
    name:String,
    dateOfBirth:String,
    poste:String,
    image:String
});

const player = mongoose.model('Player', playerShema);
module.exports = player;