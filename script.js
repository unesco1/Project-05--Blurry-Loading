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