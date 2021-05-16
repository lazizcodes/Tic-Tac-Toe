let input = document.querySelectorAll("td")

const state = []
for (let i = 0; i < 9; i++) {
    state.push(0);
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

function isSubset(arr1, arr2) {
    return arr2.every(e => arr1.includes(e))
}

function checkState() {
    const ones = [];
    const zeros = [];

    state.forEach((e, i) => {
        if (e === 1) ones.push(i);
        if (e === 2) zeros.push(i);
    })

    for (let s of winningStates) {
        if (isSubset(ones, s) || isSubset(zeros, s)) {
            alert('Game Over!')
            return;
        }
    }
}

let lastAct = 'O';

input.forEach((e, i) => {
    e.addEventListener('click', function () {
        if (e.textContent !== "") {
            return;
        }
        if (lastAct === 'O') {
            lastAct = 'X';
            state[i] = 1;
            e.textContent = 'X';
        } else if (lastAct === 'X') {
            lastAct = 'O';
            state[i] = 2;
            e.textContent = 'O';
        }
        checkState();
    });
})

let button = document.querySelector("#restartBttn")
button.addEventListener('click', function () {
    input.forEach(e => e.textContent = "")
    lastAct = 'O';
})