//Esercizio sulla mappatura di stringhe:

//Crea un observable che emetta le stringhe "apple", "banana" e "orange" utilizzando l'operatore of di RxJS.
//Trasforma ogni primo carattere della stringa in maiuscolo utilizzando l'operatore map.
//Sottoscrivi l'observable e stampa le stringhe maiuscole sulla console.

import { map, of } from "rxjs"

const fruits$ = of("apple", "banana", "orange")

const fruitsCapitalized$ = fruits$.pipe(
  map((words)=> {
    return words.split(" ")
    .map((word) => word.charAt(0).toUpperCase()+ word.slice(1))
  })
)

fruitsCapitalized$.subscribe(fruit => console.log(fruit))