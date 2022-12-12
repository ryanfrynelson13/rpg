import Character from "../Character.js";
class Monster extends Character {
     // eslint-disable-next-line
    constructor (name) {
        super(name);
    }

    toString () {
        return "Monstre : " + super.toString()
    }
}

export default Monster