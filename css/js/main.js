const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Ajustar tamaño del canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Instanciar objetos
const ocean = new Ocean(canvas);
const player = new PlayerShip(canvas.width / 2, canvas.height / 2);

// Controles Táctiles
canvas.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    player.moveTo(touch.clientX, touch.clientY);
});

canvas.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    player.moveTo(touch.clientX, touch.clientY);
});

// Bucle Principal (Game Loop)
function gameLoop() {
    // 1. Actualizar estados
    ocean.update();
    player.update();

    // 2. Renderizar
    ocean.draw();
    player.draw(ctx);

    requestAnimationFrame(gameLoop);
}

// Iniciar el juego
gameLoop();
