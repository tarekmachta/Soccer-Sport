const mongoose = require('mongoose');
// define model attributes
const matchShema = mongoose.Schema({
    teamOne:String,  // les attributs dans la base de donnée
    scoreOne:String,
    teamTwo:String,
    scoreTwo:String
    // image:String // attribute for image
});
// 'Match' c'est le Nom du Model dans la DB
const match = mongoose.model('Match', matchShema);
// export match variable
module.exports = match;