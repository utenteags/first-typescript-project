const roba: number[] = [1,2,3,4,5]

function sommaNumeri(numeri: number[]) :number {
    let sommaNumeri: number = 0;
    let quanti: number = 0;
    for ( const x of numeri ) {
        sommaNumeri += x;
        quanti++;
    }
    return sommaNumeri;
}

function mediaNumeri(numeri: number[]) :number {
    const lunghezza: number = numeri.length;
    const somma: number = sommaNumeri(numeri);
    return somma / lunghezza;
}

function minore(numeri: number[]) :number {
    let minore: number = Infinity;
    for ( const x of numeri ) {
        if (x < minore) {
            minore = x;
        }
    }
    return minore;
}

function maggiore(numeri: number[]) :number {
    let maggiore: number = 0;
    for ( const x of numeri ) {
        if (x > maggiore) {
            maggiore = x;
        }
    }
    return maggiore;
}

const sommaMia: number = sommaNumeri(roba);
console.log(sommaMia);

const miaMedia: number = mediaNumeri(roba);
console.log(miaMedia);

const mioMinore: number = minore(roba);
console.log(mioMinore);

const mioMaggiore: number = maggiore(roba);
console.log(mioMaggiore);

