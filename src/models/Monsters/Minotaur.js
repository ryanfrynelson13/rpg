import Monster from "./Monster.js";

class Minotaur extends Monster {

    constructor (name='Big Bull') {
        super(name);
        this.leather = this.dice4.roll();
    }

}

export default Minotaur;