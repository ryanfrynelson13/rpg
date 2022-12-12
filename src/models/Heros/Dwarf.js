import Hero from "../Heros/Hero.js";

class Dwarf extends Hero {

    constructor (name) {
        super(name);
        this.class = 'dwarf'
    }

    get endurance () {
        return super.endurance +1
    }

}

export default Dwarf;