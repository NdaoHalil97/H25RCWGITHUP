function aireCercle(rayon) {
    return Math.PI * Math.pow(rayon, 2);
}

function perimetreRectangle(longueur, largeur) {
    return 2 * (longueur + largeur);
}

const rayon = parseFloat(prompt("Entrez le rayon du cercle: "));
const longueur = parseFloat(prompt("Entrez la longueur du rectangle: "));
const largeur = parseFloat(prompt("Entrez la largeur du rectangle: "));

console.log(`L'aire du cercle est: ${aireCercle(rayon).toFixed(2)}`);
console.log(`Le périmètre du rectangle est: ${perimetreRectangle(longueur, largeur).toFixed(2)}`);