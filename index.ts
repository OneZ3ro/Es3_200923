// Spiegazione generica (Cos'è, a cosa serve, che problema risolve, differenze con JS semplice)

// Typescript è un linguaggio basato su Javascript con maggiori funzionalità.

// Risolve principalmente i problemi di strutturazione dei dati.

// Mentre JS è un linguaggio di tipo "dynamic typing" (ovvero posso inizializzare una variabile come string per poi cambiarla a number o boolean ecc...), TS invece è un linguaggio di tipo "static typing" (ovvero una volta inizializzato una variabile di tipo string non si può più cambiare quel tipo)

// _________________________________________________________________________________________


// Il compilatore TS (perché è necessario? e come si usa?)

// Il compilatore TS è necessario poichè non possiamo usare direttamente il File.ts nel nostro HTML.
// Per usarlo bisogna prima installarsi typescript, scrivendo nel terminal "npm i typescript -g" (dove -g sta per globale).
// Una volta fatto, dopo che abbiamo scritto il nostro codice nel File.ts, nel terminal dobbiamo compilare il file con "tsc File.ts" (se invece vogliamo tenere sempre sotto controllo il nostro file dobbiamo scrivere nel terminal "tsc File.ts -w")

// _________________________________________________________________________________________

// La Type Inference

// Se non volessimo usare lo static typing (ovvero la parte (ad esempio) ": string"), possiamo inizializzare in partenza una variabile mettendogli il suo valore (es: let num = 2 (TS capisce che "num" è di tipo number))

// _________________________________________________________________________________________

// Il tipo ‘any’

// Il tipo any diciamo che è il nostro paracadute di emergenza, non vorremmo mai usarlo poichè rende inutile l'utilizzo di TS poichè esce dalle sue logiche. In pratica torniamo ad utilizzare il "dynamic typing" del JS

// _________________________________________________________________________________________

// Il tipo Union

// Se non volessimo continuamente inserire string | number ovunque ci ServiceWorkerContainer, possiamo usare un "Custom Type"
// (es: type StringOrNumber = string | number)

// _________________________________________________________________________________________


// Il tipo Tuple
// I tuple sono degli array specifici, che ad ogni posizione sono assegnati precisi valori

// _________________________________________________________________________________________

// Le Interfaces in TS
// Interfaces possiamo descriverle come la struttura che dovrebbe avere un mio componente (come ad esempio un oggetto)

// _________________________________________________________________________________________

// Types vs Interfaces

// I Generics
// Sono simili alle interfaces ma sono più generali, ad esempio se in un oggetto non sapessimo ancora il valore del nostro attributo possiamo generalizzarlo con un T (<T>)