(function() {
    "use strict";

    function MemoryGame() {
        let array = ['Mario', 'Luigi', 'Browser', 'Princess Peach', 'Wario', 'Toad', 'Yoshi', 'Bowser Junior', 'Waluigi', 'Diddy Kong' ]
        let newArray;
        let memoryGame = document.getElementById('memory-game');
        let amountOfCards = 20;
        let memoryBlock = "";
        let play = document.getElementById('play');

        this.init = function() {
           addEventListener();
        }

        let addEventListener = function() {
            play.addEventListener('mouseup', showCards);
        }

        let showCards = function() {
            doubleArray(array, array);  
            triggerCall();
            flipCard();
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

        let triggerCall = triggerFirstClick();

        let doubleArray = function(firstArr, secondArr) {
            let firstArray = firstArr;
            let secondArray = secondArr;
            newArray = firstArray.concat(secondArray);
            shuffle(newArray);
        }

        let shuffledArray = function(array) {
            if(memoryBlock === undefined) return;

            for(let i = 0; i < array.length; i++) {
                memoryBlock += '<div class="memory-card">' + array[i] + '</div>';
            }       
            checkMemoryGame(memoryGame.childNodes.length, memoryBlock);
        }
        
        let checkMemoryGame = function(arrayLength, memoryBlock) {
            let addNew = memoryGame.innerHTML += memoryBlock;
            let resetGame = memoryGame.innerHTML = memoryBlock;
            
            arrayLength < amountOfCards ? addNew : resetGame;
        }

        let restartGame = function() {
            console.log('time to restart the game');
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

        let flipCard = function() {
            for(let i = 0; i < memoryBlock.length; i++) {
                
            }
            console.log(memoryBlock);
        }

    }

    let memoryGame = new MemoryGame();
    memoryGame.init();
})(); 