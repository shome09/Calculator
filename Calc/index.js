

let res1="";
let num1=0;
let num2=0;
let ans=0;
let ops="";
let counterCheck=0; // to check if any operator is clicked or not
let num1_el=document.getElementById("num1");

function one(){res1=res1+1; num1_el.innerHTML=res1;}
//2
function two(){ res1=res1+2; num1_el.innerHTML=res1;}
//3
function three(){res1=res1+3; num1_el.innerHTML=res1;}
//4
function four(){res1=res1+4; num1_el.innerHTML=res1;}
//5
function five(){res1=res1+5; num1_el.innerHTML=res1;}
//6
function six(){res1=res1+6; num1_el.innerHTML=res1;}
//7
function seven(){res1=res1+7; num1_el.innerHTML=res1;}
//8
function eight(){res1=res1+8; num1_el.innerHTML=res1;}
//9
function nine(){res1=res1+9; num1_el.innerHTML=res1;}
//0
function zero(){res1=res1+0; num1_el.innerHTML=res1;}
//CE
function reset(){location.reload()}
//add
function add(){
    num1=Number(res1);
    res1="";
    counterCheck+=1;
    ops="+";
}
//sub
function sub(){
    num1=Number(res1);
    res1="";
    counterCheck+=1;
    ops="-";
}
//mul
function mul(){
    num1=Number(res1);
    res1="";
    counterCheck+=1;
    ops="*";
}
//divison
function division(){
    num1=Number(res1);
    res1="";
    counterCheck+=1;
    ops="/";
}
//ans
function result(){
    if (counterCheck===1){
        num2=Number(res1);
        switch(ops) {
            case "+":
                ans=num1+num2;
                res1=""
                counterCheck=0
              break;
            case "-":
                ans=num1-num2;
                res1=""
                counterCheck=0
              break;
            case "*":
                ans=num1*num2;
                res1=""
                counterCheck=0
              break;
            case "/":
                ans=(num1/num2).toFixed(5);//to prevent the overflow
                res1=""
                counterCheck=0
              break;
          }
        
    }
    num1_el.textContent=ans;
}



