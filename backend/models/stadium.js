const mongoose = require('mongoose');
// define model attributes
const stadiumShema = mongoose.Schema({
    name:String,  // les attributs dans la base de donnée
    country:String,
    capacity:String
    
    // image:String // attribute for image
});
// 'Match' c'est le Nom du Model dans la DB
const stadium = mongoose.model('Stadium', stadiumShema);
// export match variable
module.exports = stadium;