/* 1. Isprobati program iz skripte gore za zbrajanje prvih 10 brojeva. 
Možete ga isprobati u konzoli preglednika. 
Zatim je potrebno modificirati program na način da se uvede dodatno mapiranje 
(varijabla) koja će poopćiti problem i ukazivati na to koliko brojeva treba zbrojiti 
(npr. neka to bude varijabla n=10). Isprobati program za prvih 1000 brojeva (n=1000). */

let total = 0;
let count = 1;
let n = 10;

while(count <= n) {
    total += count;
    count += 1;
}

console.log(total); // 55