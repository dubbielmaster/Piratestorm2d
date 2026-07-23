class Ocean {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.waveOffset = 0;
    }

    update() {
        this.waveOffset += 0.03;
    }

    draw() {
        // Fondo Turquesa estilo Pirate Storm
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, "#00b4d8");
        gradient.addColorStop(1, "#0077b6");
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Ondas del agua
        this.ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        this.ctx.lineWidth = 2;

        for (let i = 0; i < this.canvas.height; i += 40) {
            this.ctx.beginPath();
            for (let x = 0; x < this.canvas.width; x += 30) {
                const y = i + Math.sin(x * 0.02 + this.waveOffset + i) * 4;
                if (x === 0) this.ctx.moveTo(x, y);
                else this.ctx.lineTo(x, y);
            }
            this.ctx.stroke();
        }
    }
}
