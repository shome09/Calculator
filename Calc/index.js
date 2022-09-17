
//      a shorter solution using
//      event listeners

let res1="";
let num1=0;
let num2=0;
let ans=0;
let ops="";
let counterCheck=0; // to check if any operator is clicked or not
let num1_el=document.getElementById("num1");



// added a for loop here that loops for numbers from 0 to 10

// Then added a dynamic document.getElementById('btn-' + i) that changes
//      everytime the loop runs
// Lastly I added an Event Listener to get the clicked number

// the loop runs every time a number is clicked and recognize
//      the clicked number becuase of the addEventListener
for (let i = 0; i < 10; i++){
    const buttonId = document.getElementById('btn-' + i)
    buttonId.addEventListener('click', function(){
        res1=res1 + i;
        num1_el.innerHTML=res1;
    })
}

//CE
function reset(){location.reload()}




// I added a function operate that takes the operator 
//      parameter to shorten your code and remove repeated
//      lines
function operate(operator) {
    num1=Number(res1);
    res1="";
    counterCheck+=1;
    ops=operator;
}
// add
function add(){operate("+")}
//sub
function sub(){operate("-")}
//mul
function mul(){operate("*")}
//divison
function division(){operate("/")}

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



