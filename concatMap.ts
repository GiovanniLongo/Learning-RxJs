//Crea un'osservabile che emetta un valore dopo un ritardo di 2 secondi utilizzando l'operatore timer.
//Utilizza l'operatore concatMap per inviare una richiesta HTTP simulata al server.
//Simula il ritorno di dati dal server e stampa la risposta nella console.

import { concatMap, of, timer } from "rxjs";

const source$ = timer(2000)

// Utilizza l'operatore concatMap per inviare una richiesta HTTP simulata al server
const request = source$.pipe(
  concatMap(() => {
    return simulateHttpRequest();
  })
);

// Simulazione della risposta del server
function simulateHttpRequest() {
  return timer(1000).pipe(
    concatMap(() => {
      return of('Risposta dal server');
    })
  );
}

// L'osservabile non viene sottoscritto finchè la funzione simulateHttpRequest non viene completata
request.subscribe((response) => {
  console.log('Risposta ricevuta:', response);
});