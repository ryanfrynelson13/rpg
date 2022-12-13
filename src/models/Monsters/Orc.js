import Monster from "./Monster.js";

class Orc extends Monster {

    constructor (name='Killer Whale') {
        super(name);
        this.class = 'orc'

        this.gold = this.dice6.roll();
    }

}

export default Orc;