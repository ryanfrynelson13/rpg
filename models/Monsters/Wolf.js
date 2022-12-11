import Monster from "../Monstres/Monster.js";

class Wolf extends Monster {

    constructor (name) {
        super(name);
        this.leather = this.dice4.roll();
    }

}

export default Wolf;