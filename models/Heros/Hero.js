import Character from "../Character.js";
import Monster from "../Monsters/Monster.js.js";

/** 
 * Personnage Héros
 */
class Hero extends Character {

    constructor (name) {
        super(name);
        this.gold = 0;
        this.leather = 0;
    }

    /**
     * Permet de ramasser le cuir et/ou l'or d'un monstre
     * @param {Monstre} monstre Le monstre à fouiller
     */
    loot (monster) {

        // A commenter pour les tests
        if (monster.pv > 0 || !(monster instanceof Monster)) return;

        if (monster.hasOwnProperty("gold")) {
            this.gold += monster.gold;
            console.log(`Vous avez récupéré ${monster.gold} or sur ${monster.name}`);
            monster.gold = 0;
        }

        if ("leather" in monster) {
            this.leather += monster.leather;
            // Permet de récupérer le nom de la classe
            console.log(`Vous avez récupéré ${monster.leather} cuirs sur ${monster.constructor.name}`);
            monster.leather = 0;
        }

    }

    toString () {
        return "Héros : " + super.toString();
    }
}

export default Hero;