const button = document.querySelector('button');
const bg = document.querySelector('section');

button.addEventListener('click',() => {
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    bg.style.backgroundColor = color ;
    console.log(color)
})



 
let clickCount = 0;

function size() {
    clickCount++;
    if (clickCount < 4) { 
        let button = document.getElementById("myButton");
        button.style.width = (100 + clickCount * 70) + "px";
        button.style.height = (50 + clickCount * 50) + "px";
        button.style.fontSize = (24 + clickCount * 7) + "px";
    }
}
