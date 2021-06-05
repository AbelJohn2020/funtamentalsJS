const cyan = document.getElementById('cyan');
const purple = document.getElementById('purple');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const startBtn = document.getElementById('startBtn');

class Game {
    constructor() {
        this.init();
        this.generateRandomColor();
        this.nextLevel();
    }

    init() {
        startBtn.classList.add('hide');
        this.level = 1;
        this.colors = {
            cyan, // is similar to write: cyan: cyan,
            purple,
            orange,
            green,
        }
    }
    
    generateRandomColor() {
        this.sequence = new Array(10).fill(0).map( n => Math.floor(Math.random() * 4))
    }
    
    nextLevel() {
        this.illuminateSequence()
    }
    
    transformNumberToColor(number) {
        switch (number) {
            case 0:
                return 'cyan';
            case 1:
                return 'purple';
            case 2:
                return 'orange';
            case 3:
                return 'green';
        }
    }

    illuminateSequence() {
        for( let i = 0; i < this.level; i++) {
            const color = this.transformNumberToColor(this.sequence[i]);
            setTimeout(() => {
                this.illuminateColor(color)
            }, 1000 * i); 
        }
    }

    illuminateColor(color) {
        this.colors[color].classList.add('light');
        setTimeout(() => {
            this.offColor(color)
        }, 500); 
    }

    offColor(color) {
        this.colors[color].classList.remove('light');
    }
}

function startGame() {
    // alert('The game is going to start')
    window.game = new Game();
}