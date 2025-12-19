/**
 * Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus:

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
 */

//SETUP INIZIALE 
const myOutput = document.getElementById("test"); 
const endpoint  = "https://flynn.boolean.careers/exercises/api/random/mail";

axios.get(endpoint)
.then(response => {

    //codice da eseguire in caso di successo 
    const result = response.data ; 
    console.log(result);
})
.catch(error => {
    //codice da eseguire in caso di errore
    console.error(error.message)
})
.finally(()=> {
    //codice da eseguire sempre 
    console.log("ok"); 
})