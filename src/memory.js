class MemoryGame {
  constructor(cards) {
    this.cards = cards;

    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards() {
   if(this.cards === undefined){
    return undefined
   }
   var j, x, i;
    for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = x;
    }
    return this.cards;
}

  checkIfPair(card1, card2) {

    this.pairsClicked++;

    if (card1 === card2){
      this.pairsGuessed++;
      return true;
    } else {
      return false
    }
    }

  checkIfFinished() {
   if (this.pairsGuessed >= this.cards.length / 2 || this.pairsGuessed === this.cards.length / 2){
    console.log('You won bro');
    return true;
   } else {
    return false
   }
  }
}

