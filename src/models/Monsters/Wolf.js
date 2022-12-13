import Monster from "./Monster.js";

class Wolf extends Monster {

    constructor (name='Lycan') {
        super(name);
        this.leather = this.dice4.roll();
        this.class = 'wolf'

    }

}

export default Wolf;