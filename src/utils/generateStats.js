import Dice from "../models/Dice.js";

/**
 * Fonction de génération de statistique sur base des 3 meilleurs lancés parmis 4
 * @returns {number} la statistique
 */
function generateStats () {

    // Création d'un dé à 6 faces
    let dice6 = new Dice(6);

    // Tableau des statistiques générées par le dé
    const stats = [];

    // Génération des 4 statistiques
    for (let i = 0; i < 4; i++) {
        stats.push(dice6.roll());
    }

    // Tri du tableau par ordre croissant + suppression de la plus petite valeur
    stats.sort((a, b) => a - b).shift();

    // Réduction du tableau en une seule valeur (fait la somme des valeurs du tableau)
    return stats.reduce((acc, value) => acc + value, 0);
}

export default generateStats;