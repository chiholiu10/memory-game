(function() {
    "use strict";

    function MemoryGame() {
        let array = ['mario', 'luigi', 'browser', 'peach', 'wario', 'toad', 'yoshi', 'bowser-junior', 'waluigi', 'diddy-kong-jr' ]
        let memoryGame = document.getElementById('memory-game');
        let counterClicks;
        let amountOfCards = 20;
        let play = document.getElementById('play');
        let flipCards = 0;
        let temporaryArray = [];
        let points = 0;
        let getId;
        let counter = 0;
        let timer;

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
            clearInterval(timer);
            showScoreBoard();
        }

        let showScoreBoard = function() {
            let scoreBoard = document.getElementById('score');
            scoreBoard.classList.add('display-block');
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
            let newArray = firstArray.concat(secondArray);
            shuffle(newArray);
        }

        let countFlipCards = function(name, id) {
            temporaryArray.push({
                'name': name,
                'id': id
            });
            flipCards++;  
            if((flipCards % 2) === 0) {
                checkCard();
            }  
        }

        let checkCard = function() {

            let checkCardMatch = temporaryArray.every((val, i, arr) => val.name === arr[0].name);
            let addPoints = +50;
            let removePoints = -2;
            checkCardMatch == true ? assignPoints(addPoints, true) : assignPoints(removePoints, false);
        }

        let assignPoints = function(assignPoints, stayFlipped) {
            points += assignPoints;
            if(stayFlipped) {
                removeCounterClick();
            } else {
                undoFlip();
            }
            document.getElementById('score').innerHTML = points;
            emptyArray();
           
        }

        let undoFlip = function() {
            for(let i = 0; i < temporaryArray.length; i++) {
                findCard(temporaryArray[i].id);
            }
        }

        let findCard = function(element) {
            let memoryCards = document.querySelectorAll('.memory-card');
            for(let i = 0; i < memoryCards.length; i++) {
                if(memoryCards[i].id == element) {
                timer = setTimeout(function () {
                    memoryCards[i].classList.remove('hover');
                    removeCounterClick();
                    }, 2000);
                }
            }
        }

        let emptyArray = function() {
            temporaryArray = [];
        }
            
        let flipCard = function(e) {
            let counterClicks = document.querySelectorAll('.counter-clicks').length;

            if(e.target.className === 'memory-card' && counterClicks < 2) {
                let cardName = e.target.getElementsByTagName('img')[0].src;
                counter++;
                getId = e.target.getAttribute('id');
                e.target.classList.add('hover', 'counter-clicks');
               
                countFlipCards(cardName, getId);
            }
        }

        let removeCounterClick = function() {
            let counterClicks = document.querySelectorAll('.counter-clicks');
            for(let i = 0; i < counterClicks.length; i++) {
                counterClicks[i].classList.remove('counter-clicks');
            }
        }

        let shuffledArray = function(array) {
            let memoryBlock = "";
            if(memoryBlock === undefined) return;

            for(let i = 0; i < array.length; i++) {
                memoryBlock += '<div class="memory-card" id="'+ i + '"><div class="front"></div><div class="back"><img src="src/images/' + array[i] + '.png"/></div></div>';
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