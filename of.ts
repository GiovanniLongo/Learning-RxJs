//Esercizio sull'osservabile (Observable):

//Crea un osservabile che emetta una sequenza di numeri da 1 a 5.
//Sottoscriviti all'osservabile e stampa ogni numero emesso nella console.

import { Observable, of } from "rxjs";

//primo test
const obs = new Observable((observable) => {
    observable.next(1);
    observable.next(2);
    observable.next(3);
    observable.next(4);
    observable.next(5);
  });
  
  obs.subscribe((el) => console.log(el));
  
  //secondo test
  const obs2 = of(6, 7, 8, 9, 10);
  
  obs2.subscribe((el) => console.log(el));