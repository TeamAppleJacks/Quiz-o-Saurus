const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');
const _ = require('underscore');

const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');

const users = require('../routes/users');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({
  extend: false
}));

const server = http.createServer(app);
const io = socketIo(server);

// const gameFunction = require('./gamefunction.js');
const data = require('../database');
app.use(express.json());

const passport = require('passport'),
  auth = require('./auth.js');

auth(passport);
app.use(passport.initialize());
app.use(bodyParser.json());
app.use('/users', users)


app.get('/home/leaderboard', function (req, res) {
  data.leaderboardScore(function (err, data) {
    if (err) {
      console.log('not working')
      res.sendStatus(500);
    } else {
      console.log('get request is going through yay!')
      res.send(data);
    }
  });
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login']
}));

app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    var googleId = req.user.profile.id;
    var displayName = req.user.profile.displayName;

    data.confirmUser(googleId, (err, results) => {
      if (err) {
        console.log(`error, cannot sign in`);
      } else if (!results.length) {
        console.log(`u don't exist, so save to database`);
        data.saveUser(googleId, displayName, (err, results) => {
          if (err) {
            console.log('not working');
          } else {
            console.log('congrats, you exist!!');
            console.log(results);
          }
        });
      } else {
        console.log(`it already here hunni`);
      }
    });

    res.redirect('/')
  });

var dummy = require('./mathTrivia.js').data.results;
var parser = require('socket.io-parser');
var encoder = new parser.Encoder();

app.get('/game', function (req, res) {
  if (req.user) {
    res.send(req.user.profile.id)
  } else {
    res.redirect('/auth/login')
  }
})

var question = dummy[0]
question.incorrect_answers.push(question.correct_answer)
question.incorrect_answers = _.shuffle(question.incorrect_answers);


io.on('connection', socket => {
  // console.log(socket.server.httpServer._connections, 'user connected')


  let q1 = {
    question: question.question,
    options: question.incorrect_answers
  }

  socket.emit('q1', q1);




  socket.on('disconnect', () => {
    console.log('user disconeccted')
  })


})

server.listen(port, () => console.log(`Listening on port: ${port}`))