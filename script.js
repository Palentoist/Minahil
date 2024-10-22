const surpriseBtn = document.getElementById('surprise-btn');
const balloonsContainer = document.getElementById('balloons-container');

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    const randomSize = Math.random() * 60 + 20; 
    const randomLeft = Math.random() * 100; 

    balloon.style.width = `${randomSize}px`;
    balloon.style.height = `${randomSize}px`;
    balloon.style.left = `${randomLeft}%`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

    balloonsContainer.appendChild(balloon);

    balloon.style.animation = `balloon-float ${Math.random() * 4 + 6}s linear infinite`;

    setTimeout(() => {
        balloon.remove();
    }, 10000);
}

surpriseBtn.addEventListener('click', () => {
    for (let i = 0; i < 30; i++) {
        setTimeout(createBalloon, i * 200);
    }
});
