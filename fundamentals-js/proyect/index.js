const cyan = document.getElementById('cyan');
const purple = document.getElementById('purple');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const startBtn = document.getElementById('startBtn');

const LAST_LEVEL = 10;

class Game {
    constructor() {
        this.init = this.init.bind(this)
        this.init();
        this.generateRandomColor();
        setTimeout(this.nextLevel, 500);
    }

    init() {
        this.nextLevel = this.nextLevel.bind(this)
        this.chooseColor = this.chooseColor.bind(this) // here can be,
        this.toggleStartBtn(); 
        this.level = 1;
        this.colors = {
            cyan, // is similar to write: cyan: cyan,
            purple,
            orange,
            green,
        }
    }

    toggleStartBtn() {
        if(startBtn.classList.contains('hide')) {
            startBtn.classList.remove('hide');
        } else {
            startBtn.classList.add('hide');

        }
    }
    
    generateRandomColor() {
        this.sequence = new Array(LAST_LEVEL).fill(0).map( n => Math.floor(Math.random() * 4))
    }
    
    nextLevel() {
        this.sublevel = 0;
        this.illuminateSequence();
        this.addClickEvents();
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

    transformColorToNumber(color) {
        switch (color) {
            case 'cyan':
                return 0;
            case 'purple':
                return 1;
            case 'orange':
                return 2;
            case 'green':
                return 3;
        }
    }

    illuminateSequence() {
        // in for loops usually is recomended use 'let' not 'var' but never ever 'const'
        for( let i = 0; i < this.level; i++) {
            // in this case can be 'let' because each color keeps in this cycle but can be use 'const' because we don't assing again
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

    addClickEvents() {
        // this.colors.cyan.addEventListener('click', this.chooseColor.bind(this)); // .bind(this) is important to join this 'this' with the reference of the 'class Game'. Because if this method doesn't exist 'this' is the reference of the 'div' in this case is cyan.
        this.colors.cyan.addEventListener('click', this.chooseColor);
        this.colors.purple.addEventListener('click', this.chooseColor);
        this.colors.orange.addEventListener('click', this.chooseColor);
        this.colors.green.addEventListener('click', this.chooseColor);
    }

    deleteClickEvents() {
        this.colors.cyan.removeEventListener('click', this.chooseColor);
        this.colors.purple.removeEventListener('click', this.chooseColor);
        this.colors.orange.removeEventListener('click', this.chooseColor);
        this.colors.green.removeEventListener('click', this.chooseColor);
    }

    chooseColor(e) {
        const nameColor = e.target.dataset.color;
        const numberColor = this.transformColorToNumber(nameColor);
        this.illuminateColor(nameColor);
        if(numberColor === this.sequence[this.sublevel]) {
            this.sublevel++;
            if(this.sublevel === this.level) {
                this.level++;
                this.deleteClickEvents();
                if(this.level === (LAST_LEVEL + 1)) {
                    this.youWin();
                } else {
                    setTimeout(this.nextLevel, 2000);
                }
            }
        } else {
            this.youLose();
        }
    }

    youWin() {
        swal('Play memory!', 'Congratulations, you win the game!', 'success')
            .then(this.init)
        }
        
        youLose() {
            swal('Play memory!', 'I am sorry, you lose u.u', 'error')
            .then(() => {
                this.deleteClickEvents();
                this.init();
            })
    }
}

function startGame() {
    // alert('The game is going to start')
    window.game = new Game();
}