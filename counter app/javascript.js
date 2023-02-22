// let totalCount = 25
// let Number = 23
// console.log(totalCount)

// Math operations
// let a = 5,b = 10
// let count = a + b
// console.log(count)

let count = 0
let countEl = document.getElementById("count")
let saveEl = document.getElementById("save")

function increament(){
    count++;
    countEl.innerText=count;
}

function save(){
    let finalSAVE =" "+ count + " -"
    saveEl.innerText+=finalSAVE
    count.innerText=0
    count=0
}
function upperCase(){
    
}

// let myPoints=10 
// function increament(){
//     myPoints+=3;
//     document.getElementById("myPoints").innerText=myPoints;
// }
// function decreament(){
//     myPoints--;
//     document.getElementById("myPoints").innerText=myPoints;
// }
