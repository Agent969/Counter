const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const done = document.getElementById("done");
const countlabel = document.getElementById("countlabel");
let counting = 0;

increase.onclick = function(){
    counting++
    countlabel.textContent = counting;
}

decrease.onclick = function(){
    counting--
    countlabel.textContent = counting;
}

reset.onclick = function(){
    countlabel.textContent = 0;
}

done.onclick = function(){
    window.alert("Thanks for trying out my counter. Your are free to leave the website or continue using counter.")
}