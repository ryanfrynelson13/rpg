import Hero from "../Heros/Hero.js";

class Elf extends Hero {

    constructor (name) {
        super(name);
        this.class = 'elf'
        this.mana = 3
        this.strength -= 1
        this.speed -= 2
        this.maxEndurance = this.endurance
        this.maxMana = this.mana
    }

}

export default Elf;