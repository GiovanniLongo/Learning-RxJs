//Esercizio sull'operatore di filtro (filter):

//Crea un osservabile che emetta una sequenza di numeri da 1 a 10.
//Applica l'operatore filter per filtrare solo i numeri pari.
//Sottoscriviti all'osservabile filtrato e stampa ogni numero emesso nella console.

import { filter, of } from "rxjs"

const numbers$ = of(1,2,3,4,5,6,7,8,9,10)

numbers$.pipe(
  //filtra numeri pari e stampa
  filter((number) => number % 2 == 0)
).subscribe(number => console.log(number))