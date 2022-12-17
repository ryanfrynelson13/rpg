import Hero from "../Heros/Hero.js";

class Human extends Hero {

    constructor (name) {
        super(name);
        this.class = 'human'
        this.mana = 1
        this.endurance = this.endurance +2
        this.maxEndurance = this.endurance
        this.maxMana = this.mana
    }   

    

}

export default Human;