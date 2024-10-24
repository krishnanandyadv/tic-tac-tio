let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new")
let msg=document.querySelector(".msg")
let massg=document.querySelectorAll(".masg")

const disablebox=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enabelbox=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const rset= ()=>{
trunO=true;
enabelbox();
msg.classList.add("hide");
}


const showWinner=(winner)=>{
disablebox();
  let name =prompt("what is your name")
    masg.innerHTML= `Congratulation, Winner is ${name} with ${winner}`;
    msg.classList.remove("hide");




}
let trunO=true;
const winpat=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];
boxes.forEach((box)=>{
box.addEventListener("click", () =>{
  
    
    if(trunO){
        box.innerHTML="O";
        trunO=false;
        
    }
    else{

        box.innerHTML="X";
        trunO=true;

    }
box.disabled=true;
checkWinner();
});

});

const checkWinner=()=>{
  for( let pattern of winpat){
   let pos1val=boxes[pattern[0]].innerText;
   let pos2val=boxes[pattern[1]].innerText;
   let pos3val=boxes[pattern[2]].innerText;
  
  if(pos1val!="" && pos2val!="" && pos3val!=""){
    if(pos1val== pos2val && pos2val==pos3val){
 
 showWinner(pos1val);
    }
  }}
}

newbtn.addEventListener("click",rset);
reset.addEventListener("click",rset);