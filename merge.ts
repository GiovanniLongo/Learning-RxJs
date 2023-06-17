//Esercizio sulla combinazione di osservabili (merge):

//Crea due osservabili, uno che emetta una sequenza di numeri pari e l'altro che emetta una sequenza di numeri dispari.
//Combina i due osservabili utilizzando l'operatore merge.
//Sottoscriviti all'osservabile combinato e stampa ogni numero emesso nella console.
import { merge, of } from "rxjs"



const evenNumbers$ = of(2,4,6,8)

// Osservabile per numeri dispari
const oddNumbers$ = of(1,3,5,7)

const combine = merge(evenNumbers$, oddNumbers$)

combine.subscribe(el => console.log(el))