// Accessing Boxes,Buttons,Containers
let boxes=document.querySelectorAll(".box");

let resetBtn=document.querySelector("#reset-btn");

let newGameBtn=document.querySelector("#new-btn");

let  msgContainer=document.querySelector(".msg-container");

let  msg=document.querySelector("#msg");

// Player Turns
let turnO=true; //Player X , Player O

let count=0;

// 1D Array
// array1=["Apple","Banana","Litchi"];

// 2D Array
// It is also called Array of Array 
// array2=[
//     ["Apple","Litchi"] ,
//     ["Potato","Mushroom"] , 
//     ["Pants","Shirts"]
// ];

// Winning Patterns
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]; 

// Assigning Values to Boxes & checking Draw Condition
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("Box was Clicked!");
        if(turnO){ //Player O
            box.innerHTML="O";
            box.style.color="grey";
            turnO=false;
        }
        else{ //Player X
            box.innerHTML="X";
            box.style.color="black";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if (count===9 && !isWinner) {
            checkDraw();
        }
    });
});

// Check Draw Function 
const checkDraw=()=>{
    msg.innerHTML="Oops! The Game is Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// Check Winner Function
const checkWinner=()=>{
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerHTML,
        //     boxes[pattern[1]].innerHTML, 
        //     boxes[pattern[2]].innerHTML
        // );
        let pos1Value=boxes[pattern[0]].innerHTML;
        let pos2Value=boxes[pattern[1]].innerHTML;
        let pos3Value=boxes[pattern[2]].innerHTML;

        if (pos1Value!="" && pos2Value!="" && pos3Value!="" ) {
            if (pos1Value===pos2Value && pos2Value===pos3Value) {
                // console.log("Winner is Player ",pos1Value);
                showWinner(pos1Value);
            }
        }
    }
};

// Show Winner Function
const showWinner=(winner)=>{
    msg.innerHTML=`Congratulations! The winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// Disable Boxes Function 
// Disable boxes after the result
const disableBoxes=()=>{
    for (let box of boxes) {
        box.disabled=true;
    }
};

// Reset Game Button
const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// Enable Boxes Function 
// Enable boxes after the result
const enableBoxes=()=>{
    for (box of boxes) {
        box.disabled=false;
        box.innerHTML="";
    }
};

newGameBtn.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);
