import Monster from "./Monster.js";

class Minotaur extends Monster {

    constructor (name='Big Bull') {
        super(name);
        this.class = 'minotaur'

        this.leather = this.dice4.roll();
    }

    test () {
        console.log('Le test fonctionne');
    }

}

export default Minotaur;