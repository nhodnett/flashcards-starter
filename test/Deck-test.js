const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe ('Deck', function() {

let card1, card2, card3, deck;
beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  deck = new Deck([card1, card2, card3]);
})

it('should be a function', function() {
  const deck = new Deck();
  expect(Deck).to.be.a('function');
})

it('should instantiate a new instance of Deck', function() {
  expect(deck).to.be.an.instanceof(Deck);
})

it('should count the number of cards in the Deck', function() {
  expect(deck.countCards()).to.equal(3);

  const card4 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?',
  ["mutator method", "accessor method", "iteration method"], 'accessor method')
  deck2 = new Deck([card1, card2, card3, card4])

  expect(deck2.countCards()).to.equal(4);
})

it('should default to an empty array if no cards are passed in', function() {
  deck = new Deck()
  expect(deck.cards).to.deep.equal([]);
})
});
