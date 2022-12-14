import Character from "../Character.js";
import generateStats from "../../utils/generateStats.js";
class Monster extends Character {
     // eslint-disable-next-line
    constructor (name) {
        super(name);
        this.initiative = generateStats()
    }
    

    toString () {
        return "Monstre : " + super.toString()
    }
}

export default Monster