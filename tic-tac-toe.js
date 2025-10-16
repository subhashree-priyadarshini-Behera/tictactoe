let boxes = document.querySelectorAll(".box1");
let resetbtn = document.querySelector("#reset-btn");
let btn2 = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};
// let body = document.querySelectorAll("body");
// let curr = "X";
boxes.forEach((box1) => {
box1.addEventListener("click", () => {
    console.log("box was clicked");
    
  if(turnO){
    box1.innerText = "O";
    turnO = false;
  }else{
    box1.innerText = "X";
    turnO =  true;
  }
  box1.disabled = true;
  checkWinner();

//     curr = "0";
// body.classList.add("0");
//      body.classList.remove("X");
// }else {
//     curr === "X";
//     body.classList.add("X");
//      body.classList.remove("0");
// }
// console.log(curr)
})
});
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

const showWinner = (winner) => {
  msg.innerHTML = `Congratulations,Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes [pattern[0]].innerText,
        //     boxes [pattern[1]].innerText,
        //     boxes [pattern[2]].innerText
        // );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
          if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner",pos1Val);

            showWinner(pos1Val);
          }
        }
    }
};
btn2.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
