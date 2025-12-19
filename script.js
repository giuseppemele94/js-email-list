/**
 * Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus:

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
 */

//SETUP INIZIALE 

// lista <ul> dove verranno stampate le email
const emailList = document.getElementById("email-list");
// endpoint API
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";
// bottone per rigenerare le email
const generateEmail = document.querySelector("button");

//prima generazione automatica
randomEmail();

//al click del bottone rigenero le email
generateEmail.addEventListener("click", randomEmail);


//Funzione principale 
function randomEmail() {

    //svuoto la lista prima di inserire le nuove email 
    emailList.innerHTML = "";

    //genero 10 email casuali
    for (let i = 0; i < 10; ++i) {
        axios.get(endpoint)
            .then(response => {

                //estraggo l'email dalla risposta API 
                const email = response.data;

                //aggiungo l'email come <li> alla lista 
                emailList.innerHTML += `<li class="list-group-item">${email.response}</li>`;
            })
            .catch(error => {
                //codice da eseguire in caso di errore
                console.error("Errore nel recupero dell'email",error); 
            })
            .finally(() => {
                //codice da eseguire sempre 
                console.log("Operazione andata a buon fine");
            });
    }
}