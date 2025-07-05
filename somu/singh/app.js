let buttons = document.querySelectorAll("button");
let string ='';
let msg = document.getElementById("msg");
let reset = document.getElementById("reset");
let newgame = document.getElementById("new")
let turn = true;
const restgame =()=>{
  enebledd();
   msg.innerText ='';
  
}
const winpatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function disabledd(){
    for(let btn of buttons){
        btn.disabled = true;
    }
};
function enebledd(){
    for(let btn of buttons){
        btn.disabled = false;
        btn.innerText='';
    }
};

buttons.forEach(function(btn){
    btn.addEventListener('click',function(){
           if (turn === true){
            btn.innerText ="x";
            turn=false;
           } else{
            btn.innerText="o";
            turn=true;
           }
        btn.disabled=true; 

        checkwinner();
    });
    
});
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1=buttons[pattern[0]].innerHTML;
        let pos2=buttons[pattern[1]].innerHTML;
        let pos3=buttons[pattern[2]].innerHTML;

        if(pos1 !="" && pos2 != "" && pos3 != ""){
                if (pos1== pos2 && pos2==pos3){
                   msg.innerText = 'congratulation winner is'+ " "+pos1;
                   disabledd();
                }
        }
    }
};
 reset.addEventListener('click',restgame);
 newgame.addEventListener('click',restgame);
