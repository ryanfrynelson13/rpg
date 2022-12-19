import generateStats from "../utils/generateStats.js";
import modifier from "../utils/modifier.js";
import Dice from "./Dice.js";

/** Classe représentant un personnage */
class Character {

    /**
     * Créer un personnage
     * @param {string} nom Le nom du personnage
     */
    constructor (name) {
        this.dice4 = new Dice(4);
        this.dice6 = new Dice(6);
        this.name = name;
        this.strength = generateStats();
        this.endurance = generateStats();
        this.speed = generateStats();
        this.armor = generateStats();
        this.hp = this.endurance + modifier(this.endurance) + generateStats();
        this.maxHP = this.hp;
    }

    /**
     * Permet de frapper un personnage cible lui ôtant une certaine quantité de points de vie
     * @param {Personnage} cible Personnage cible de l'attaque
     */
    strongAttack (target, roll) {
        if (target === this || !(target instanceof Character) || target.hp <= 0) return;

        const rollToHit = roll + modifier(this.strength)
        let damage = 0

        if(rollToHit >= target.armor) {
            console.log("Pv "+ target.name +" avant attaque : ", target.hp);
            damage = this.dice4.roll() + modifier(this.force);
            // target.pv = target.pv - degats
            target.hp -= damage;
            if(target.hp < 0 ) target.hp = 0
            console.log(`${this.name} a infligé ${damage} points de dégats à ${target.name}`);
            console.log("Pv "+ target.name +" après attaque : ", target.hp);
            this.endurance -= 4
        }

        return damage

    }

    speedAttack (target, roll) {
        if (target === this || !(target instanceof Character) || target.hp <= 0) return;

        const rollToHit = roll + modifier(this.speed)

        if(rollToHit >= target.speed) {
            console.log("Pv "+ target.name +" avant attaque : ", target.hp);
            let damage = this.dice4.roll();
            // target.pv = target.pv - degats
            target.hp -= damage;
            if(target.hp < 0 ) target.hp = 0
            console.log(`${this.name} a infligé ${damage} points de dégats à ${target.name}`);
            console.log("Pv "+ target.name +" après attaque : ", target.hp);
            this.endurance -= 2
        } 
        
        return rollToHit
    }

    magicAttack (target, roll) {
        if (target === this || !(target instanceof Character) || target.hp <= 0) return;

        const rollToHit = roll + modifier(this.strength)

        if(rollToHit >= target.armor) {
            console.log("Pv "+ target.name +" avant attaque : ", target.hp);
            let damage = this.dice4.roll() + this.dice4.roll();
            // target.pv = target.pv - degats
            target.hp -= damage;
            if(target.hp < 0 ) target.hp = 0
            console.log(`${this.name} a infligé ${damage} points de dégats à ${target.name}`);
            console.log("Pv "+ target.name +" après attaque : ", target.hp);
            this.mana--            
        }

        return rollToHit


    }

    getInitiative(roll) {
        if(roll > 0){
            return roll + modifier(this.speed)
        }
        return 0
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