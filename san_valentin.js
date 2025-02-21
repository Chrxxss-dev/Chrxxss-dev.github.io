function mostrarMensaje() {
    document.getElementById('mensaje').style.display = 'block';
    document.querySelector('.buttons').style.display = 'none';
}

function mostrarRechazo() {
    document.getElementById('rechazo').style.display = 'flex';
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.background-hearts').style.display = 'none';
}

function volverAIntentar() {
    document.getElementById('rechazo').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.background-hearts').style.display = 'block';
    document.querySelector('.buttons').style.display = 'flex';
    document.getElementById('mensaje').style.display = 'none';
}

function createHearts() {
    const backgroundHearts = document.querySelector('.background-hearts');
    const symbols = ['❤️', '💝', '💖', '💕'];
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        backgroundHearts.appendChild(heart);
    }
}
createHearts();
function toggleMusic() {
const audio = document.getElementById("backgroundMusic");
const button = document.getElementById("playMusicBtn");

if (audio.paused) {
audio.currentTime = 69 ; 
audio.play();
button.textContent = "⏸️ Pausar Música";
} else {
audio.pause();
button.textContent = "🎵 Reproducir ";
}
}
