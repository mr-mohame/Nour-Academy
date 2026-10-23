const formations = [
  {
    
    titre: "Mathematiques",
    matiere: "Mathematiques",
    niveau: "Primaire",
    creneau: "09:00 - 10:30",
    prix: 350,
    places: 5
  },
  {
    
    titre: "Francais",
    matiere: "Francais",
    niveau: "Primaire",
    creneau: "10:30 - 12:00",
    prix: 300,
    places: 8
  },
  {
    
    titre: "Arabe",
    matiere: "Arabe",
    niveau: "Primaire",
    creneau: "14:00 - 15:30",
    prix: 250,
    places: 10
  },
  {
    
    titre: "Anglais",
    matiere: "Anglais",
    niveau: "Primaire",
    creneau: "15:30 - 17:00",
    prix: 300,
    places: 6
  },
  {
    
    titre: "Mathématiques",
    matiere: "Mathematiques",
    niveau: "College",
    creneau: "09:00 - 11:00",
    prix: 400,
    places: 4
  },
  {
    
    titre: "Physique-Chimie",
    matiere: "Physique-Chimie",
    niveau: "College",
    creneau: "11:00 - 12:30",
    prix: 400,
    places: 0
  },
  {
    
    titre: "SVT",
    matiere: "SVT",
    niveau: "College",
    creneau: "14:00 - 15:30",
    prix: 350,
    places: 7
  },
  {
    
    titre: "Français",
    matiere: "Francais",
    niveau: "College",
    creneau: "15:30 - 17:00",
    prix: 350,
    places: 3
  },
  {
    
    titre: "Mathématiques",
    matiere: "Mathematiques",
    niveau: "Lycee",
    creneau: "09:00 - 11:00",
    prix: 450,
    places: 5
  },
  {
    
    titre: "Physique-Chimie",
    matiere: "Physique-Chimie",
    niveau: "Lycee",
    creneau: "11:00 - 13:00",
    prix: 450,
    places: 2
  },
  {
    
    titre: "Philosophie",
    matiere: "Philosophie",
    niveau: "Lycee",
    creneau: "14:00 - 15:30",
    prix: 350,
    places: 0
  },
  {
    
    titre: "Anglais",
    matiere: "Anglais",
    niveau: "Lycee",
    creneau: "15:30 - 17:00",
    prix: 350,
    places: 6
  }
];



function afficher(){
  const container = document.querySelector("#formation-liste");
  const niveau_choisi = document.querySelector("#niveau-select").value;
  const matiere_choisi = document.querySelector("#matieres-select").value;
  // console.log(container, niveau_choisi, matiere_choisi);

  container.innerHTML = "";
  for (let i = 0; i < formations.length; i++) {
    const formation = formations[i];

    if (niveau_choisi !== "" && formation.niveau !== niveau_choisi) continue;
    if (matiere_choisi != "" && formation.matiere !== matiere_choisi) continue;

    container.innerHTML += `
    <div class="w-full rounded-3xl border-gray-200 bg-white p-5">
    <h2 class="w-full rounded-full bg-[#E0F2FE] py-2 text-center text-xs font-bold text-[#055C5E]">NOUR ACADEMY</h2>

    <div class="mt-3 flex items-center justify-between">
    <span class="rounded-full bg-[#E0F2FE] px-4 py-2 text-sm font-semibold text-[#055C5E]">${formation.titre}</span>
    <span class="rounded-full bg-[#FAF7ED] px-4 py-2 text-sm font-semibold text-[#055C5E]">${formation.niveau}</span>
    </div>

    <div class="my-4 text-center">
    <h3 class="text-2xl font-bold text-Bleu-nuit">${formation.matiere}</h3>
    <p class="mt-2 text-sm text-gray-500">${formation.creneau}</p>
    </div>

    <div class="mt-4 w-full items-baseline flex justify-between">
     <div class="text-lg font-bold text-Bleu-nuit">${formation.prix} DH<span class="text-sm font-medium text-Bleu-nuit"> / mois</span></div>
     <div class="text-sm font-medium text-[#008B6B]">${formation.places} place</div>
    </div>

    ${buttonFormation(formation)}

    </div>
    `
  }

}
function buttonFormation(formations){
  if(formations.places > 0){
    return `<button class="w-full mt-4 bg-[#009491] p-2 rounded-xl text-white cursor-pointer">
        Ajouter au panier
      </button>`;

  }else{
    return `<button disabled class="w-full mt-4 bg-gray-400 p-2 rounded-xl text-white cursor-not-allowed">
        Complet
      </button>`;
  }

}
afficher();
