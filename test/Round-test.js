const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe ('Round', function() {

let card1, card2, card3, deck, round; //turn
beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  deck = new Deck([card1, card2, card3]);
  //turn = new Turn('pug', card);
  round = new Round(deck);
})

it('should instantiate a new instance of Round', function() {
  expect(round).to.be.an.instanceof(Round);
})

it('should store the first card as the current card', function() {
//console.log(round.currentCard)
  expect(round.returnCurrentCard()).to.deep.equal({
  id: 1,
  question: "What is Robbie's favorite animal",
  answers: [ 'sea otter', 'pug', 'capybara' ],
  correctAnswer: 'sea otter'
});
})

it('should have a method that returns the current card being played', function() {
  expect(round.returnCurrentCard()).to.equal(card1)
})

it('should have a method that updates the turns count', function() {
  round.takeTurn();
  expect(round.turns).to.equal(1)
  round.takeTurn();
  expect(round.turns).to.equal(2)
  // round.takeTurn();
  // round.takeTurn();
  // round.takeTurn();
  // expect(round.turns).to.equal(5)
})

it('should evaluates guesses and give feedback', function() {

  const turn1 = round.takeTurn('sea otter');
  const turn2 = round.takeTurn('spleen');

  //expect(round.takeTurn('pug')).to.equal(false)
  //expect(round.takeTurn('gallbladder')).to.equal(true)
  expect(turn1).to.equal('correct!');
  expect(turn2).to.equal('incorrect!');
})

// it('should give feedback', function() {
//
//   expect(round.takeTurn()).to.equal('incorrect!')
//
//   expect(round.takeTurn()).to.equal('correct!')
// })

it('should store the ID of incorrect guesses', function() {
  round.takeTurn('pug');
  // expect(round.incorrectGuesses).to.be.an('pug')
  expect(round.incorrectGuesses).to.deep.equal([1])
})

it('should be able to calculate the percentage of correct guesses', function () {
  round.takeTurn('sea otter');
  round.takeTurn('pug');
  round.takeTurn('capybara');

  expect(round.calculatePercentCorrect()).to.equal(33);
})

// maybe test different correct answers...

it('should be able to end the round and show the percentage of correct guesses', function () {
  round.takeTurn('sea otter');
  round.takeTurn('pug');
  round.takeTurn('capybara');

  expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!');
});

});
