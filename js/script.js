console.log("MyTicTacToe.com")

// Defining primary variables 
let ting = new Audio("img/ting.mp3");
let turn = 'X';
let gameover = false;


// Function to change the turn
const changeTurn = () => {
    if(turn=='X') {
        turn = 'O'
    }else {
        turn = 'X'
    }
    // console.log(turn)
    return turn
}


// Function to check for a win 
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxText');
    // console.log(turn)    
    let wins = [
        [0, 1, 2, 5, 5, 0, 20],
        [3, 4, 5, 5, 15, 0, 20], 
        [6, 7, 8, 5, 25, 0, 20],
        [0, 3, 6, -5, 15, 90, 20],
        [1, 4, 7, 5, 15, 90, 20],
        [2, 5, 8, 15, 15, 90, 20], 
        [0, 4, 8, 1, 15, 45, 28], 
        [2, 4, 6, 1, 15, 135, 28]
    ]

    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            gameover = true

            document.querySelector(".line").style.width = `${e[6]}vw`
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }

        if (gameover) {
            
        }
    })
}


// Main Logic of the game 
let boxes = document.getElementsByClassName("box")

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText')
    console.log(element)
    element.addEventListener('click', (e) => {
        console.log(boxtext)
        if (boxtext.innerText == '') {
            boxtext.innerText = turn
            turn = changeTurn()
            console.log(turn)
            ting.play()
            if (!gameover) {
                let info = document.getElementsByClassName('info')[0]
                console.log(info)
                info.innerText = `Turn for ${turn}`
            }
            checkWin()
        }
    })
})



let resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxText')
    Array.from(boxtext).forEach(e => {
        console.log(e)
        e.innerText = ''
    })
    turn = 'X'
    gameover = false
    document.querySelector(".line").style.width = `0vw`
    document.getElementsByClassName('info')[0].innerText = `Turn for ${turn}`
})