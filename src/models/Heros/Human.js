import Hero from "../Heros/Hero.js";

class Human extends Hero {

    constructor (name) {
        super(name);
        this.class = 'human'

    }

}

export default Human;