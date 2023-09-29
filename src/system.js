
class System {
    constructor(count, diam, limX, limY, grav = 0, loss = 0, dragLoss = 0) {
        this.count = count
        this.diam = diam
        this.limX = limX
        this.limY = limY
        this.loss = loss
        this.dragLoss = dragLoss
        this.grav = grav
        this.items = []

        for (let index = 0; index < this.count; index++) {
            const xPos = random(this.diam / 2, this.limX - this.diam / 2 - 1)
            const yPos = random(this.diam / 2, this.limY - this.diam / 2 - 1)
            const xV = random(-10, 10)
            const yV = random(-10, 10)

            const item = new Item(
                xPos, yPos, 
                this.limX, this.limY, 
                this.diam, 
                xV, yV, 
                this.loss, this.grav, this.dragLoss
            )

            this.items.push(item)
        }
    }

    update() {
        this.items.forEach((it) => {
            it.update()
        })
    }

    pulse(min, max)
    {
        this.items.forEach(
            (it) => it.addVel(min, max)
        )
    }
}


if (typeof module !== "undefined") {
    module.exports = { System };
}