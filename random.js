/*-- Création des variables et constantes et tableaux des prénoms--*/
const bouton = document.getElementById("random");
const texte = document.getElementById('resultat');
const LesPrenoms = ['Arnaud', 'Delphine', 'Kevin', 'Johann', 'Terry',
    'Pierre', 'Sebastien', 'Sokunthy', 'Stéphane', 'Jessie', 'Jean-Sebastien',
    'Alexandre', 'Laure', 'Jean-Christophe', 'Sandrine', 'Jean-François'];

const NbApprenant = LesPrenoms.length;
/*-- Declenchement de la fonction Randomize sur clic du bouton --*/
bouton.addEventListener('click', Randomize);

/*-- fonction choisissant un prénom au hasard dans le tableau et l'affichant 3 sec --*/
function Randomize (){
    texte.innerHTML = LesPrenoms[Math.floor(Math.random() * NbApprenant)];
    setTimeout(ClearPrenom,3000);
}
/*-- Fonction réinitialisant le bouton avec son "texte" d'origine --*/
function ClearPrenom(){
    texte.innerHTML = "... le prénom ...";
}