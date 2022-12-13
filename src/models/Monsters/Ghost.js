import Monster from "./Monster.js";

class Ghost extends Monster {

    constructor (name='Casper') {
        super(name)
        this.class = 'ghost'

    }

}

export default Ghost;