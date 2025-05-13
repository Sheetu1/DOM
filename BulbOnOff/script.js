console.log("Hello");

let bulb = document.querySelector("#bulb")
let btn = document.querySelector("button")
let flag = 0;
btn.addEventListener("click", () => {
    if(flag == 0){
    bulb.style.backgroundColor = "yellow";
    btn.innerHTML = "Off";
    flag = 1;
    }
    else{
    bulb.style.backgroundColor = "transparent";
    btn.innerHTML = "On"
    flag = 0;
    }
} ) 