//create HTML Elements
let divArr = [{
    ele: document.createElement('div'),
    attr: "content clear",
},{
    ele: document.createElement('div'),
    attr: "h1",
}];

divArr.forEach(el => {
    document.body.appendChild(el.ele).setAttribute("class", el.attr);
});

document.querySelectorAll('div')[1].innerHTML = `<h1></h1>`;

// functions
let imgBlur = document.querySelector('.content');
let h1 = document.querySelector('h1');
let hDiv = document.querySelector('.h1')
let counter = 0;
    
window.onload = () => {
    imgBlur.classList.remove('clear');
    hDiv.style.opacity = 0;
};

function myCount() {
    h1.textContent = `${counter++}%`;
    if (counter >= 101) {
        window.clearInterval(myInterval);
    }
}

let myInterval = setInterval(myCount, 40);