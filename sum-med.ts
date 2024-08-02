const matrice = [1, 2, 3, 4, 5];

let somma: number = 0;
let quanti: number = 0;

for ( const x of matrice ) {
    somma += x;
    quanti++;
}

let media = somma / quanti;

console.log("Somma = ", somma);
console.log("Media = ", media);