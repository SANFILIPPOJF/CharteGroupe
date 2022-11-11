const bouton = document.getElementById("random");
let PrenomElu;
const LesPrenoms = ['Arnaud', 'Delphine', 'Kevin', 'Johann', 'Terry',
    'Pierre', 'Sebastien', 'Sokunthy', 'Stéphane', 'Jessie', 'Jean-Sebastien',
    'Alexandre', 'Laure', 'Jean-Christophe', 'Sandrine', 'Jean-François', 'Arnaud'];
const NbApprenant = LesPrenoms.length;


function Randomize (){
    PrenomElu = LesPrenoms[(Math.random() * NbApprenant)];
    bouton.innerHTML = PrenomElu;
    setTimeout(ClearPrenom,3000);
}

function ClearPrenom(){
    bouton.innerHTML = "RANDOM APPRENANT";
}

bouton.addEventListener('click', Randomize);