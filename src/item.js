

class Item {
    constructor(x, y, limX, limY, diameter, vx = 0, vy = 0, loss = 0, grav = 0, dragLoss = 0) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.limX = limX;
        this.limY = limY;
        this.diameter = diameter;
        this.loss = loss;
        this.dragLoss = dragLoss;
        this.grav = grav;
    }

    update() {
        if (this.grav != 0 && this.y + this.diameter / 2 < this.limY) {
                this.vy += this.grav
        }

        if (this.dragLoss != 0) {
            if (this.vx > 0)
                this.vx -= this.dragLoss
            if (this.vx < 0)
                this.vx += this.dragLoss
            if (this.vy > 0)
                this.vy -= this.dragLoss
            if (this.vy < 0)
                this.vy += this.dragLoss
        }
                
        if (this.x + this.diameter / 2 >= this.limX) {
            this.x = this.limX - this.diameter / 2;
            this.vx = -this.vx;
            this.vx += this.loss;
        }

        if (this.x - this.diameter / 2 <= 0) {
            this.x = this.diameter / 2;
            this.vx = -this.vx;
            this.vx -= this.loss;
        }
            

        if (this.y + this.diameter / 2 >= this.limY) {
            this.y = this.limY - this.diameter / 2;
            this.vy = -this.vy;
            this.vy += this.loss;
        }

        if (this.y - this.diameter / 2 <= 0) {
            this.y = this.diameter / 2;
            this.vy = -this.vy;
            this.vy -= this.loss;
        }
            

        this.x += this.vx;
        this.y += this.vy;
    }

    addVel(min, max) {
        const vx = random(min, max)
        const vy = random(min, max)
        if (this.vx < 0)
            this.vx -= vx;
        else
            this.vx += vx;

        if (this.vy < 0)
            this.vy -= vy;
        else
            this.vy += vy;
    }


}

if (typeof module !== "undefined") {
    module.exports = { Item };
}