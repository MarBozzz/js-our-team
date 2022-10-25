/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
Wayne Barnett	Founder & CEO			wayne-barnett-founder-ceo.jpg
Angela Caroll	        Chief Editor			        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager			walter-gordon-office-manager.jpg
Angela Lopez	        Social Media Manager	        angela-lopez-social-media-manager.jpg
Scott Estrada	        Developer				scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer		        barbara-ramos-graphic-designer.jpg
**MILESTONE 0:**
Creare l’array di oggetti con le informazioni fornite.
**MILESTONE 1:**
Stampare su console le informazioni di nome, ruolo e la stringa della foto
**MILESTONE 2:**
Stampare le stesse informazioni su DOM sotto forma di stringhe
**MILESTONE 3:**
Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)
**BONUS:**
Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card
*/



const row = document.querySelector(".row");
//creo l'array del team con proprietà nome, ruolo e url foto
const team = [
  {
    nome : 'Wayne Barnett',
    ruolo : 'Founder & CEO',
    foto : 'wayne-barnett-founder-ceo.jpg',
  },
  {
    nome : 'Angela Caroll',
    ruolo : 'Chief Editor',
    foto : 'angela-caroll-chief-editor.jpg',
  },
  {
    nome : 'Walter Gordon',
    ruolo : 'Office Manager',
    foto : 'walter-gordon-office-manager.jpg',
  },
  {
    nome : 'Angela Lopez',
    ruolo : 'Social Media Manager',
    foto : 'angela-lopez-social-media-manager.jpg',
  },
  {
    nome : 'Scott Estrada',
    ruolo : 'Developer',
    foto : 'scott-estrada-developer.jpg',
  },
  {
    nome : 'Barbara Ramos',
    ruolo : 'Graphic Designer',
    foto : 'barbara-ramos-graphic-designer.jpg',
  }
]

team[0].aggettivo = '"dinamico, puntiglioso"';
team[1].aggettivo = '"puntuale, flessibile, coerente"';
team[3].aggettivo = '"precisa"';
team[4].aggettivo = '"amichevole, attivo"';

//console.log(team);

//milestones 1-2
/*const result = document.querySelector('.result');
*/

//milestone 2 - creo una card dinamica raccogliendo i dati dell'array e ciclando con un for of
for(let membro of team) {
  //console.log(membro);
  //result.innerHTML += `<li>${membro.nome} - ${membro.ruolo} - ${membro.foto}</li>`;

  //milestone 3 creo variabile da usare per eventuale aggettivo, e se undefined il campo deve rimanere vuoto
  let adjective = membro.aggettivo;
  if (adjective === undefined) {
    adjective = '';
    //document.querySelector('#adj').classList.add('.hide');
  } 
  
  //creo la card dinamica
  let card = `<div class="col-4 d-flex justify-content-center text-center zoom">
  <div class="card m-4" style="width: 18rem;">
  <img class="" src="${membro.foto}" class="card-img-top" alt="Foto">
  
  <ul class="list-group list-group-flush">
  <li class="list-group-item"><h5>${membro.nome}</h5></li>
  <li class="list-group-item">${membro.ruolo}</li>
  <li id="adj" class="list-group-item green">${adjective}</li>
  </ul>
  </div>
  </div>`
  
  row.innerHTML += card;
}