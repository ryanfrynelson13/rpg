import generateStats from "../utils/generateStats.js";
import modifier from "../utils/modifier.js";
import Dice from "./Dice.js";

/** Classe représentant un personnage */
class Character {

    #_strength
    #_endurance

    /**
     * Créer un personnage
     * @param {string} nom Le nom du personnage
     */
    constructor (name) {
        this.dice4 = new Dice(4);
        this.dice6 = new Dice(6);
        this.name = name;
        this.#_strength = generateStats();
        this.#_endurance = generateStats();
        this.hp = this.endurance + modifier(this.endurance);
    }

    get strength () {
        return this.#_strength
    }

    get endurance () {
        return this.#_endurance
    }

    /**
     * Permet de frapper un personnage cible lui ôtant une certaine quantité de points de vie
     * @param {Personnage} cible Personnage cible de l'attaque
     */
    hit (target) {
        if (target === this || !(target instanceof Character) || target.hp <= 0) return;

        console.log("Pv "+ target.name +" avant attaque : ", target.hp);
        let damage = this.dice4.roll() + modifier(this.force);
        // target.pv = target.pv - degats
        target.hp -= damage;
        console.log(`${this.name} a infligé ${damage} points de dégats à ${target.name}`);
        console.log("Pv "+ target.name +" après attaque : ", target.hp);
    }

  

    /**
     * Permet de récupérer les détails du personnage
     * @returns {string} Détails du personnage
     */
    toString () {
        let str = `Nom : ${this.nom} Force: ${this.force} Endurance: ${this.endurance} PV: ${this.pv}`
        return str + "\nInventaire : "
            + ( "cuir" in this ? `\n - Cuir: ${this.leather}` : "" )
            + ( "or" in this ? `\n - Or: ${this.gold}` : "" );
    }
}

export default Character;