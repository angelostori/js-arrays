const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
//dichiaro la variabile di tipo array
const reversedTeachers = [];

//ciclo al contrario per prendere gli indici dei valori dall'ultimo al primo
for(let i = teachers.length-1 ; i >= 0 ; i--) {
  //li pusho alla fine della lista per seguire un ordine decrescente 
  //degli indici che grazie al metodo ritornano i valori
  reversedTeachers.push(teachers[i])
}
//verifico
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  //verifico la lunghezza di ogni elemento
  if (teachers.at(i).length === 5) {
      //lo aggiungo
      longNames.push(teachers.at(i))
  }
}
console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;