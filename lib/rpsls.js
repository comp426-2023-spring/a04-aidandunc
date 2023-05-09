const game_results = {
  rock: {
      rock: 'tie',
      paper: 'win',
      scissors: 'lose',
      lizard: 'lose',
      spock: 'win'
  },
  paper: {
      rock: 'lose',
      paper: 'tie',
      scissors: 'win',
      lizard: 'win',
      spock: 'lose'
  },
  scissors: {
      rock: 'win',
      paper: 'lose',
      scissors: 'tie',
      lizard: 'lose',
      spock: 'win'
  },
  lizard: {
      rock: 'win',
      paper: 'lose',
      scissors: 'win',
      lizard: 'tie',
      spock: 'lose'
  },
  spock: {
      rock: 'lose',
      paper: 'win',
      scissors: 'lose',
      lizard: 'win',
      spock: 'tie'
  }
}

export function rps(shot) {
  let options = ["rock", "paper", "scissors"];
  var opponent = options[Math.trunc(Math.random() * 3)];
    if (shot !== null) {
        shot = shot.toLowerCase();

        if (!(options.includes(shot))) {
            console.error(`${shot} is out of range.`);
            throw new RangeError();
        }

        return { 
            player: shot,
            opponent: opponent,
            result: game_results[opponent][shot] 
            };
    } else if (shot == null) { 
        return { player : opponent }; 
    }
}

export function rpsls(shot) {
    let options = ["rock", "paper", "scissors", "lizard", "spock"];
    var opponent = options[Math.trunc(Math.random() * 5)];
    if (shot !== null) {
        shot = shot.toLowerCase();
    
        if (!(options.includes(shot))) {
            throw new RangeError();
        }
        return {
            player: shot,
            opponent: opponent,
            result: game_results[opponent][shot]
        };
    } else if (shot == null) {
        return { player : opponent }; 
    }
}