import Monster from "./Monster.js";

class Orc extends Monster {

    constructor (name='Killer Whale') {
        super(name);
        this.gold = this.dice6.roll();
    }

}

export default Orc;