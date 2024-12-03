let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let msgbox=document.querySelector("#msgcontainer");
let mssg=document.querySelector("#msg");
let turn0= true;

const win= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];
const resetgame=() => {
     turn0= true;
     enableboxes();
     msgbox.classList.add("hide");

};
boxes.forEach((box => {
    box.addEventListener("click", () => {
        
        if (turn0){
            box.innerText="0";
            turn0= false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled = true;
        checkwinner();

    });
}));
    const disableboxes = () =>{
        for(let box of boxes)
            box.disabled=true;
    };
    const enableboxes = () =>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText=" ";
        }
    };
    const showWinner =(winner) =>{
        mssg.innerText =`winner is ${winner}`;
        msgbox.classList.remove("hide");
        disableboxes();
        };

    const checkwinner =() => {
        for( let pattern of win){
            
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;
            
            if(pos1val!=""&& pos2val!="" && pos3val!=""){
                if(pos1val===pos2val && pos2val==pos3val){
                    
                    showWinner(pos1val);
                   
                }
            }
        }
    }
newbtn.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);
