import Hero from "../Heros/Hero.js";

class Centaur extends Hero {

    constructor (name) {
        super(name);
        this.class = 'centaur'
        this.strength += 3
        this.endurance += 2
        this.speed -= 2
        this.maxEndurance = this.endurance

    }

}

export default Centaur;