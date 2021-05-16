let input = document.querySelectorAll("td")

const state = []
for (let i = 0; i < 9; i++) {
    state.push(0);
}

// for(let i = 0; i < input.length; i++) {
//     console.log(state[i]);
// }

const winningStates = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

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
            e.textContent = 'O'
        }
    });
})

let button = document.querySelector("#restartBttn")
button.addEventListener('click', function () {
    input.forEach(e => e.textContent = "")
})