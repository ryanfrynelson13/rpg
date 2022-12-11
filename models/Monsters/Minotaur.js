import Monster from "../Monstres/Monster.js";

class Minotaur extends Monster {

    constructor (name) {
        super(name);
        this.leather = this.dice4.roll();
    }

}

export default Minotaur;