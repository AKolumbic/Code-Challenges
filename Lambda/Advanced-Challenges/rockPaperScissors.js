/*

Write a function called rockPaperScissors that will take a number n, 
and output all those possibilities.

*/






function rockPaperScissors(n) {
    const outcomes = [];
    const plays = ['rock', 'paper', 'scissors'];
  
    const findOutcome = (roundsLeft, result) => {
      if (roundsLeft === 0) {
        outcomes.push(result);
        return;
      }
      plays.forEach(play => {
        findOutcome(roundsLeft - 1, [...result, play])
      });
    }
    
    findOutcome(n, []);
    return outcomes;
}

console.log(rockPaperScissors(1));
// console.log(rockPaperScissors(2));
// console.log(rockPaperScissors(3));
