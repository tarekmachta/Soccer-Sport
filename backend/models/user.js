const mongoose = require('mongoose');
// define model attributes
const userShema = mongoose.Schema({
    firstName:String,  // les attributs dans la base de donnée
    lastName:String,
    email:String,
    pwd:String,
    
    // image:String // attribute for image
});
// 'Match' c'est le Nom du Model dans la DB
const user = mongoose.model('User', userShema);
// export match variable
module.exports = user;