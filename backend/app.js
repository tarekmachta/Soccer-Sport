// Import express module
const express = require('express');
// import Mongoose module
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path'); // donne l'accés pour manipuler des dossier dans le back end
// configuration du path : define folder destination

// Create backend application
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//define image folder destination
app.use('/images', express.static(path.join('backend/images')))

// import match model from models/match.js
const Match = require('./models/match');
const Player = require('./models/player');
const User = require('./models/user');
const Stadium = require('./models/stadium');
// connect application to DB 
// if not exists, create DB, else conncet automoatically
mongoose.connect('mongodb://localhost:27017/soccerDB', { useNewUrlParser: true, useUnifiedTopology: true });
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// define images to insert
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
  // destination
  // verify if image correspends to mine type
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  // define file name
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});



// Preparer app pour etre exporter
// / : http://localhost:3000/
app.get("/allMatches", (req, res) => {
  // here traitement
  console.log("I am here for allMatches");
  // Connect to DB and get all Matches

  Match.find((err, docs) => {
    if (err) {
      console.log('Error', err);
    } else {
      res.status(200).json({
        message: 'Here all objects',
        matches: docs
      });
    }
  });

});

app.post('/addMatch', (req, res) => {
  // console.log('Here in adding',req.file);
  // url = req.protocol + '://' + req.get('host');
  // create object to insert into DB
  const match = new Match({
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    // image: url + '/images/' + req.file.filename
  });
  match.save().then((result) => {
    if (result) {
      res.status(200).json({
        message: 'Added successfully',
      });
    }
  })

});

app.delete('/deleteMatch/:id', (req, res) => {
  console.log('Here in delete', req.params.id);
  Match.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Deleted successfully'
        })
      }
    }
  )
});

app.get('/displayMatch/:id', (req, res) => {
  console.log('here in get', req.params.id);
  Match.findOne({ _id: req.params.id }).then(
    data => {
      if (data) {
        res.status(200).json({
          match: data
        })
      }
    }

  )
});

app.put('/editMatch/:id', (req, res) => {
  console.log('here in edit', req.params.id);
  const match = new Match({
    _id: req.body._id,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo
  });
  // update takes 2 params: 1st for search Object and 2end to replace
  Match.update({ _id: req.params.id }, match).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Updated Successfully'
        })
      }
    }
  )
});

app.post('/addUser', (req, res) => {
  // console.log('Here in adding',req.file);
  // url = req.protocol + '://' + req.get('host');
  // create object to insert into DB
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    pwd: req.body.pwd

    // image: url + '/images/' + req.file.filename
  });
  user.save().then((result) => {
    if (result) {
      res.status(200).json({
        message: 'User Added successfully',
      });
    }
  })

});

app.get("/allUsers", (req, res) => {
  // here traitement
  console.log("I am here for allUsers");
  // Connect to DB and get all Users

  User.find((err, docs) => {
    if (err) {
      console.log('Error', err);
    } else {
      res.status(200).json({
        message: 'Here all objects',
        users: docs
      });
    }
  });

});

app.post('/login', (req, res) => {
  console.log('here in login');
  console.log('req body', req.body);
  User.find({ email: req.body.email, pwd: req.body.pwd }).then(
    data => {
      if (data) {
        res.status(200).json({
          user: data
        })
      }
    }
  );
})


app.get('/api/search/:term', (req, res) => {
  console.log('req.body', req.body);
  console.log('req.params', req.params.term);
  Match.find({ teamOne: req.params.term }).then(result => {
    console.log('Here searched result', result);
    if (result) {
      res.send(result);
    }
  });
});



app.get("/MyStadiums", (req, res) => {

  console.log("I am here for allStadiums");

  Stadium.find((err, docs) => {
    if (err) {
      console.log('Error', err);
    } else {
      res.status(200).json({
        message: 'Here all objects',
        stadiums: docs
      });
    }
  });

});

app.post('/addStadium', (req, res) => {
  const stadium = new Stadium({
    name: req.body.name,
    country: req.body.country,
    capacity: req.body.capacity

  });
  stadium.save().then((result) => {
    if (result) {
      res.status(200).json({
        message: 'Added successfully',
      });
    }
  })

});
app.delete('/deleteStadium/:id', (req, res) => {
  console.log('Here in delete stadium', req.params.id);
  Stadium.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Deleted successfully'
        })
      }
    }
  )
});
module.exports = app;
