import Hero from "../Heros/Hero.js";

class Human extends Hero {

    constructor (name) {
        super(name);
        this.class = 'human'
       
    }

    get strength () {
        return super.strength +1
    }

    get endurance () {
        return super.endurance +1
    }

    

}

export default Human;