class PlayerShip {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
        this.speed = 2.5;
        this.angle = 0;
    }

    moveTo(targetX, targetY) {
        this.targetX = targetX;
        this.targetY = targetY;
    }

    update() {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 5) {
            this.angle = Math.atan2(dy, dx);
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // Silueta provisional del barco
        ctx.fillStyle = "#5c3d11";
        ctx.beginPath();
        ctx.moveTo(20, 0);
        ctx.lineTo(-15, -10);
        ctx.lineTo(-10, 0);
        ctx.lineTo(-15, 10);
        ctx.closePath();
        ctx.fill();

        // Velas
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(-5, -8, 4, 16);

        ctx.restore();
    }
}
