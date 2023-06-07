const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

 function toggle(element, classes){
  classes.forEach((className) => {
    element.classList.toggle(className)
  })
  }

  const pairsClicked = document.querySelector("#pairs-clicked")
  const pairsGuessed = document.querySelector("#pairs-guessed")

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      console.log(card.children)
      pairsClicked.innerHTML++
      toggle(card.children[0], ['back','front'])
      toggle(card.children[1], ['back','front'])

      memoryGame.pickedCards.push(card)
      if (memoryGame.pickedCards.length === 2){
        const first = memoryGame.pickedCards[0];
        const second = memoryGame.pickedCards [1];

        if (memoryGame.checkIfPair(first.getAttribute('data-card-name'), second.getAttribute('data-card-name'))){
          pairsGuessed.innerHTML++
          first.children[1].classList.add('blocked')
          second.children[1].classList.add('blocked')
          memoryGame.pickedCards = [];

        } else {
          setTimeout(() => {
            toggle(first.children[0], ['back','front'])
            toggle(first.children[1], ['back','front'])
            toggle(second.children[0], ['back','front'])
            toggle(second.children[1], ['back','front'])
          }, 2000);
          memoryGame.pickedCards = [];
        }
      }
      memoryGame.checkIfFinished(memoryGame.pairsGuessed)
    });
  });
});
