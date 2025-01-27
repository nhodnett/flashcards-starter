const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe ('Turn', function() {

it('should be a function', function() {
  const turn = new Turn();
  expect(Turn).to.be.a('function');
})

it('should instantiate a new instance of Turn', function() {
  const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const turn = new Turn('pug', card);
  expect(turn).to.be.an.instanceof(Turn);
})

it('should be able to return a users guess', function() {
  const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const turn = new Turn('pug', card);
  expect(turn.returnGuess()).to.equal('pug');
})

it('should be able to return a users card', function() {
  const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const turn = new Turn('pug', card);
  expect(turn.returnCard()).to.equal(card);
})

it('should be able to evaluate incorrect Guess', function() {
  const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const turn = new Turn('pug', card);
  expect(turn.evaluateGuess()).to.equal(false);
})

it('should be able to evaluate correct Guess', function() {
  const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const turn = new Turn('sea otter', card);
  expect(turn.evaluateGuess()).to.equal(true);
})

it('should be able to give feedback', function() {
  const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const turn = new Turn('pug', card);
  const turn2 = new Turn('sea otter', card);
  expect(turn.giveFeedback()).to.equal('incorrect!')
  expect(turn2.giveFeedback()).to.equal('correct!')
})
});
