import Monster from "./Monster.js";

class Orc extends Monster {

    constructor (name) {
        super(name);
        this.gold = this.dice6.roll();
    }

}

export default Orc;