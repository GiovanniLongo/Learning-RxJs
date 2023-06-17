import { map, Observable, of } from 'rxjs';
import { mergeMap, toArray } from 'rxjs/operators';

// Osservabile per numeri pari
const evenNumbers$ = of([2,4,6,8])

// Osservabile per numeri dispari
const oddNumbers$ = of([1,3,5,7])

// Combina i due osservabili utilizzando l'operatore merge
const combined$: Observable<number[]> = evenNumbers$.pipe(
  mergeMap(arr1 => oddNumbers$.pipe(
    // Push singoli valori in un nuovo array
    mergeMap(arr2 => [...arr1, ...arr2]) 
  )),
  // Combina i valori in un singolo array
  toArray(),
  map((combined) => combined.sort((a,b)=> a -b))
);

// Sottoscrizione all'osservabile combinato
combined$.subscribe(number => {
  console.log(number);
});
