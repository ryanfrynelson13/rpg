import Monster from "./Monster.js";

class Dragonborn extends Monster {

    constructor (name='Drogon') {
        super(name);
        this.leather = this.dice4.roll();
        this.gold = this.dice6.roll();
    }

    
    toString () {
        return "[Légendaire] " + super.toString()
    }

}

export default Dragonborn;