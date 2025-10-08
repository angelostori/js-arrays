const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

//controllo quale valore è assegnato all'indice del quarto elemento
console.log(teachers);
//cambio il valore della variabile in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
//eseguo una verifica
console.log(fourthTeacher);




// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

//tramite il metodo splice applicato alla lista prendo l'elemento nella posizione 4
//specifico la quantità di elementi da sostituire, in questo caso 1 e specifico il
//nuovo valore 
teachers.splice(4 , 1 , 'Patrick')
//eseguo una verifica
console.log(teachers.at(4));




// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

const lastTeacher = teachers.pop();
//verifico che l'elemento rimosso sia l'ultimo della lista
console.log(lastTeacher);
//verifico che effettivamente non sia più nella lista
console.log(teachers);




// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
//verifico che l'elemento rimosso sia il primo della lista
console.log(firstTeacher);
//verifico che effettivamente non sia più nella lista
console.log(teachers);




// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa')
//verifico che effettivamente sia in coda alla lista
console.log(teachers);




// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah')
//verifico che effettivamente sia in coda alla lista
console.log(teachers);




// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;