import Hero from "../Heros/Hero.js";

class Goblin extends Hero {

    constructor (name) {
        super(name);
        this.class = 'goblin'
        this.speed += 3
        this.endurance += 2 
        this.strength -= 2
        this.maxEndurance = this.endurance

    }

}

export default Goblin;