var saveGames = require('./database/index.js');

const getMathProblems = function() {
  let mainArray = [];
  let level1 = {}

  for(let i = 1; i < 5; i++) {
    for(let j = 1; j < 5; j++ ) {
      level1 = {
        'Question': `${i}  +  ${j}   =  ?`,
        'Answer': (i+j).toString(),
        'Option1': Math.floor(Math.random() * (i+j-1)).toString(),
        'Option2': Math.floor(Math.random() * (i+j) + (i+j+1)).toString()
      }
      saveGames.saveGames(level1);
      level1 = {};
    }
  }
}

module.exports.getMathProblems = getMathProblems;



