/*-- Création des variables et constantes --*/
const bouton = document.getElementById("random");
const TextBouton = document.getElementById("TextRandomButton");
let PrenomElu;
/*-- Tableau comprenant les prenoms --*/
const LesPrenoms = ['Arnaud', 'Delphine', 'Kevin', 'Johann', 'Terry',
    'Pierre', 'Sebastien', 'Sokunthy', 'Stéphane', 'Jessie', 'Jean-Sebastien',
    'Alexandre', 'Laure', 'Jean-Christophe', 'Sandrine', 'Jean-François'];
/*-- determination du nombre de prenom dans le tableau -*/
const NbApprenant = LesPrenoms.length;

/*-- fonction choisissant un prénom au hasard dans le tableau et l'affichant 3 sec --*/
function Randomize (){
    PrenomElu = LesPrenoms[(Math.random() * NbApprenant)];
    TextBouton.innerHTML = PrenomElu;
    setTimeout(ClearPrenom,3000);
};
/*-- Fonction réinitialisant le bouton avec son "texte" d'origine --*/
function ClearPrenom(){
    TextBouton.innerHTML = "RANDOM APPRENANT";
};
/*-- Declenchement de la fonction Randomize sur clic du bouton --*/
bouton.addEventListener('click', Randomize);