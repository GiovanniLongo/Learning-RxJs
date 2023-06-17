//Esercizio sulla mappatura di stringhe:

//Crea un observable che emetta le stringhe "apple", "banana" e "orange" utilizzando l'operatore of di RxJS.
//Trasforma ogni primo carattere della stringa in maiuscolo utilizzando l'operatore map.
//Sottoscrivi l'observable e stampa le stringhe maiuscole sulla console.

import { filter, map, of } from "rxjs"

const fruits$ = of("apple", "banana", "orange")

const fruitsCapitalized$ = fruits$.pipe(
  map((words)=> {
    return words.split(" ")
    .map((word) => word.charAt(0).toUpperCase()+ word.slice(1))
  })
)

fruitsCapitalized$.subscribe(fruit => console.log(fruit))


//Esercizio sulle operazioni sugli osservabili:

//Crea un'osservabile che emetta una sequenza di numeri interi da 1 a 5.
//Utilizza l'operatore map per moltiplicare ogni numero per 2.
//Utilizza l'operatore filter per filtrare solo i numeri pari.
//Sottoscriviti all'osservabile e stampa ogni numero emesso nella console.

const numbers$ = of(6, 7, 8, 9, 10);

const multipliedNumbers$ = numbers$.pipe(
  map((numbers) => {
    return numbers * 3;
  }),
  filter((multipliedNumbers: any) => multipliedNumbers % 2 == 0)
);

multipliedNumbers$.subscribe((el) => console.log(el));