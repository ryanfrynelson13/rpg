import Character from "../Character.js";
class Monster extends Character {

    constructor (name) {
        super(name);
    }

    toString () {
        return "Monstre : " + super.toString()
    }
}

export default Monster