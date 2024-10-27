let boxes=document.querySelectorAll(".box");

let resetBtn=document.querySelector("#reset-btn");

let  newGameBtn=document.querySelector("#new-btn");

let  msgContainer=document.querySelector(".msg-container");

let  msg=document.querySelector("#msg");

let turnO=true; //Player X , Player O

// 1D Array
// array1=["Apple","Banana","Litchi"];

// 2D Array
// array2=[
//     ["Apple","Litchi"] ,
//     ["Potato","Mushroom"] , 
//     ["Pants","Shirts"]
// ];

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("Box was Clicked!");
        if(turnO){ //Player O
            box.innerHTML="O";
            turnO=false;
        }
        else{ //Player X
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true

        checkWinner();
    });
});

const disableBoxes=()=>{
    for (box of boxes) {
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for (box of boxes) {
        box.disabled=false;
        box.innerHTML="";
    }
};

const showWinner=(winner)=>{
    msg.innerHTML=`Congratulations! The winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>{
    for (pattern of winPattern) {
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

newGameBtn.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);
