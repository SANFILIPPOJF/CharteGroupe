const bouton = document.getElementById("random");
const NbApprenant = 16;
let NumApprenantChoisi;
const LesPrenoms = ['Arnaud', 'Delphine', 'Kevin', 'Johann', 'Terry',
 'Pierre', 'Sebastien', 'Sokunthy', 'Stéphane', 'Jessie', 'Jean-Sebastien',
  'Alexandre', 'Laure', 'Jean-Christophe', 'Sandrine', 'Jean-François', 'Arnaud'];



function Randomize(
    NumApprenantChoisi = Math.random()*NbApprenant

)

bouton.addEventListener('click', Randomize);