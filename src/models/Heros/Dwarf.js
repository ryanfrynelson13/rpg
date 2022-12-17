import Hero from "../Heros/Hero.js";

class Dwarf extends Hero {

    constructor (name) {
        super(name);
        this.class = 'dwarf'
        this.armor++
        this.strength++
        this.endurance += 2
        this.speed -= 2
        this.maxEndurance = this.endurance
    }


}

export default Dwarf;