// let boxes = document.querySelectorAll(".box"); // Use querySelectorAll to get all elements with the class "box"
// let restBtn = document.querySelector(".reset-btn");
// let newButton = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container ");
// let winningMsg = document.querySelector("#msg")

// let turn0 = true; // player x and player 0
// const winPattern = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if(turn0){
//             box.innerText = "0";
//             turn0= false;
//         }
//         else{
//         box.innerText= "x";
//         turn0= true;
//     }
//     box.disable= true;
//     checkWinner()
//     });
//     const showWinner = (winner) => {
//         winningMsg.innerText = `Congratulations, winner is ${winner}`;
//         msgContainer.classList.remove("hide");
//     };
    
//     const checkWinner = () => {
//         for (let pattern of winPattern) {
//             let pos1val = boxes[pattern[0]].innerText;
//             let pos2val = boxes[pattern[1]].innerText;
//             let pos3val = boxes[pattern[2]].innerText;
    
//             if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
//                 if (pos1val === pos2val && pos2val === pos3val) {
//                     console.log("winner" ,pos1val);
//                     return pos1val; // Return the winner
//                     showWinner(pos1val);
//                 }
//             }
//         }
//         return null; // No winner yet
//     }
    
// });






let boxes = document.querySelectorAll(".box"); // Use querySelectorAll to get all elements with the class "box"
let resetBtn = document.querySelector(".reset-btn");
let newButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let winningMsg = document.querySelector("#msg");

let turn0 = true; // player x and player 0
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const showWinner = (winner) => {
    winningMsg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
                return pos1val; // Return the winner
            }
        }
    }
    return null; // No winner yet
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// Optional: If you want to implement a reset functionality
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turn0 = true;
    msgContainer.classList.add("hide");
    winningMsg.innerText = "";
});
