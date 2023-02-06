// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

// input element
const stampEl = document.getElementById("stamp");
const rowEl = document.querySelector(".row");

// creo un array di oggetti

const team = [
    {                                   // ad ogni oggetto assegno delle proprietà
        name : "Wayne Barnett",
        job : "Founder & CEO",
        picture : "./img/walter-gordon-office-manager.jpg"
    },

    {
        name : "Angela Caroll",
        job : "Chief Editor",
        picture : "./img/angela-caroll-chief-editor.jpg"
    },

    {
        name : "Walter Gordon",
        job : "Office Manager",
        picture : "./img/walter-gordon-office-manager.jpg"
    },

    {
        name : "Angela Lopez",
        job : "Social Media Manager",
        picture : "./img/angela-lopez-social-media-manager.jpg"
    },

    {
        name : "Scott Estrada",
        job : "Developer",
        picture : "./img/scott-estrada-developer.jpg"
    },

    {
        name : "Barbara Ramos",
        job : "Graphic Designer",
        picture : "./img/barbara-ramos-graphic-designer.jpg"
    },
]

for(memberDetails of team){       // stampo in console le informazioni di ogni membro del team
    console.log(memberDetails);
}

for( let i = 0; i < team.length; i++){  // creo un ciclo per ogni membro del team

    // aggiungo nell' HTML una card di boostrap con le proprietà di ogni membro del team
    rowEl.innerHTML += `<div class="col-4 gy-4">
                        <div class="card">
                            <img src="${team[i].picture}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">${team[i].name}</h5>
                                <p class="card-text text-center">${team[i].job}</p>
                            </div>
                        </div>
                    </div>`
}




                       


