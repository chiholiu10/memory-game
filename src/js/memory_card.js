(function() {
    "use strict";

    function MemoryGame() {
        let array = ['Mario', 'Luigi', 'Browser', 'Princess Peach', 'Wario', 'Toad', 'Yoshi', 'Bowser Junior', 'Waluigi', 'Diddy Kong' ]
        let newArray;
        let memoryGame = document.getElementById('memory-game');
        let amountOfCards = 20;
        let play = document.getElementById('play');
        let flipCards = 0;

        this.init = function() {
           addEventListener();
        }

        let addEventListener = function() {
            play.addEventListener('mouseup', showCards);
            document.addEventListener('mouseup', flipCard);
        }

        let showCards = function() {
            doubleArray(array, array);  
            triggerClick();
        }
        
        let triggerFirstClick = function() {
            let click = 0;
  
            return function() {
                if(click === 0) {
                     play.textContent = "Restart";
                }
                click++;
            }
        }
        
        let triggerClick = triggerFirstClick(); 
 
        let doubleArray = function(firstArr, secondArr) {
            let firstArray = firstArr;
            let secondArray = secondArr;
            newArray = firstArray.concat(secondArray);
            shuffle(newArray);
        }

        let countFlipCards = function(name) {
            flipCards++;  
            if((flipCards % 2) === 0) {
                console.log(name);
            }  
        }
            
        let flipCard = function(e) {
            if(e.target && e.target.className === 'memory-card') {
                let cardName = e.target.innerText;
                countFlipCards(cardName);
            }
        }


        let shuffledArray = function(array) {
            let memoryBlock = "";
            if(memoryBlock === undefined) return;

            for(let i = 0; i < array.length; i++) {
                memoryBlock += '<div class="memory-card">' + array[i] + '</div>';
            }       
            checkMemoryGame(memoryGame.childNodes.length, memoryBlock);
        }
        
        let checkMemoryGame = function(getArray, memoryBlock) {
            let addNew = memoryGame.innerHTML += memoryBlock;
            let resetGame = memoryGame.innerHTML = memoryBlock;
            let arrayLength = getArray;
            
            arrayLength < amountOfCards ? addNew : resetGame;
        }

        let shuffle = function(array) {
          
            let currentIndex = array.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {
        
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            shuffledArray(array);
            return array;
        }
    }

    let memoryGame = new MemoryGame();
    memoryGame.init();
})(); 