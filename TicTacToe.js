let input = document.querySelectorAll("td")
let status = document.querySelector("#status")

let game = {
    state: [],
    isOver: false,
    lastAct: 'O',
    initState: function () {
        for (let i = 0; i < 9; i++) {
            this.state.push(0);
        }
    }
}

const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

game.initState();

function isSubset(arr1, arr2) {
    return arr2.every(e => arr1.includes(e))
}

function paint(s) {
    for (i of s) {
        // input[i].style.backgroundColor = '#94FFA9';
        input[i].style.backgroundColor = '#01FF70';
    }
}

function checkState() {
    const ones = [];
    const zeros = [];

    game.state.forEach((e, i) => {
        if (e === 1) ones.push(i);
        if (e === 2) zeros.push(i);
    })

    for (let s of winningStates) {
        if (isSubset(ones, s)) {
            status.textContent = 'Player X won 🎉';
            paint(s);
            game.isOver = true;
            return;
        } else if (isSubset(zeros, s)) {
            status.textContent = 'Player O won 🎉';
            game.isOver = true;
            paint(s);
            return;
        }
    }
}

input.forEach((e, i) => {
    e.addEventListener('click', function () {
        if (game.isOver === true) {
            return;
        }
        if (e.textContent !== "") {
            return;
        }
        if (game.lastAct === 'O') {
            status.textContent = "Player O"
            game.lastAct = 'X';
            game.state[i] = 1;
            e.textContent = 'X';
        } else if (game.lastAct === 'X') {
            status.textContent = "Player X"
            game.lastAct = 'O';
            game.state[i] = 2;
            e.textContent = 'O';
        }
        checkState();
    });
})

let button = document.querySelector("#restartBttn")
button.addEventListener('click', function () {
    input.forEach(e => {
        e.textContent = ""
        e.style.backgroundColor = 'white';
    })
    game.lastAct = 'O';
    game.state = [];
    game.status = false;
    status.textContent = 'Player X'
})