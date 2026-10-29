let formations = [
  {
    id: 1,
    titre: "Mathematiques",
    matiere: "Mathematiques",
    niveau: "Primaire",
    creneau: "09:00 - 10:30",
    prix: 350,
    places: 5
  },
  {
    id: 2,
    titre: "Francais",
    matiere: "Francais",
    niveau: "Primaire",
    creneau: "10:30 - 12:00",
    prix: 300,
    places: 8
  },
  {
    id: 3,
    titre: "Arabe",
    matiere: "Arabe",
    niveau: "Primaire",
    creneau: "14:00 - 15:30",
    prix: 250,
    places: 10
  },
  {
    id: 4,
    titre: "Anglais",
    matiere: "Anglais",
    niveau: "Primaire",
    creneau: "15:30 - 17:00",
    prix: 300,
    places: 6
  },
  {
    id: 5,
    titre: "Mathématiques",
    matiere: "Mathematiques",
    niveau: "College",
    creneau: "09:00 - 11:00",
    prix: 400,
    places: 4
  },
  {
    id: 6,
    titre: "Physique-Chimie",
    matiere: "Physique-Chimie",
    niveau: "College",
    creneau: "11:00 - 12:30",
    prix: 400,
    places: 0
  },
  {
    id: 7,
    titre: "SVT",
    matiere: "SVT",
    niveau: "College",
    creneau: "14:00 - 15:30",
    prix: 350,
    places: 7
  },
  {
    id: 8,
    titre: "Français",
    matiere: "Francais",
    niveau: "College",
    creneau: "15:30 - 17:00",
    prix: 350,
    places: 3
  },
  {
    id: 9,
    titre: "Mathématiques",
    matiere: "Mathematiques",
    niveau: "Lycee",
    creneau: "09:00 - 11:00",
    prix: 450,
    places: 5
  },
  {
    id: 10,
    titre: "Physique-Chimie",
    matiere: "Physique-Chimie",
    niveau: "Lycee",
    creneau: "11:00 - 13:00",
    prix: 450,
    places: 2
  },
  {
    id: 11,
    titre: "Philosophie",
    matiere: "Philosophie",
    niveau: "Lycee",
    creneau: "14:00 - 15:30",
    prix: 350,
    places: 0
  },
  {
    id: 12,
    titre: "Anglais",
    matiere: "Anglais",
    niveau: "Lycee",
    creneau: "15:30 - 17:00",
    prix: 350,
    places: 6
  }
];


// ajouter au panier 
let Panier_list = [];
const container = document.querySelector("#formation-liste");
container.addEventListener("click", function (event) {
  const bouton = event.target.closest(".btn-ajouter");
  if (!bouton) return;
  const idchoix = Number(bouton.dataset.id);

  let formationChoix;
  for (let i = 0; i < formations.length; i++) {
    if (formations[i].id === idchoix) {
      formationChoix = formations[i];
      break;
    }
  }

  const dejaAjoutee = Panier_list.find(function (formation) {
    return formation.id === idchoix;
  });

  if (!dejaAjoutee && formationChoix) {
    Panier_list.push(formationChoix);
    afficherPanier();
  } else {
    console.log("cette formation deja dans le panier");
  }
});

//pour ajouter au panier et afficher sur le panier
const main_hero_cart = document.querySelector("#hero-cart");
function afficherPanier() {
  main_hero_cart.innerHTML = "";
  let total = 0;
  for (let i = 0; i < Panier_list.length; i++) {
    const formation = Panier_list[i];
    total += formation.prix;
    main_hero_cart.innerHTML += `
    <div class=" bg-[#FAF7ED] mb-3 rounded-lg border p-3">
      <h3>${formation.matiere} — ${formation.niveau}</h3>
      <div class="flex justify-between items-center">
          <h3 class="font-extrabold text-slate-900 text-2xl">${formation.prix}<span> DH</span></h3>
          <button data-id="${formation.id}" class=" btn-retirer text-xl rounded-2xl font-normal text-emerald-600 cursor-pointer hover:text-red-500">
          Retirer
          </button>
      </div>   
    </div>     
    `;
  }
  main_hero_cart.innerHTML += `
  <div class=" bg-[#E8F5F2] mb-4 rounded-lg border p-4"> 
        <div class="flex justify-between items-center mb-1">
            <span class="text-slate-500 text-sm">Total mensuel estimé</span>
            <span class="text-xl font-black text-slate-900">${total} DH</span>
        </div> 
        <p class="text-xs text-slate-400">Tarifs indicatifs, à confirmer par le centre.</p>
  </div>
  
  `;
  main_hero_cart.innerHTML += `
  <div class="">
    <button class=" btn_inscri w-full bg-[#00A8A6] rounded-2xl p-3 font-bold text-blanc hover:bg-red-300">Continuer vers l’inscription</button>
  
  `
}
// supprimer un produit sur le panier 
main_hero_cart.addEventListener("click", function (event) {
  const btn = event.target.closest(".btn-retirer")
  if (!btn) return;

  const id = Number(btn.dataset.id);

  Panier_list = Panier_list.filter(function (formations) {
    return formations.id !== id

  });
  afficherPanier();
});

// continu vers la page d'inscription et closes avec X 
const popup_inscription = document.querySelector("#popup-inscription");
// console.log("Popup:", popup_inscription);
const cart_close = document.querySelector("#cart-close");
const close_btn = document.querySelector(".close-btn");
main_hero_cart.addEventListener("click", function (event) {
  const btn_inscription = event.target.closest(".btn_inscri");
  // console.log(btn_inscription)

  if (!btn_inscription ) return;
  // console.log("Bouton inscription détecté");

  popup_inscription.classList.toggle("hidden");
  
});
close_btn.addEventListener("click", function () {
  popup_inscription.classList.add("hidden");

});

// pour afficher le popup avec panier et closes avec X et panier 
const panier = document.querySelector("#btn");
const cart_popup = document.querySelector("#cart-popup");
const close_popup = document.querySelector("#cart-close");
panier.addEventListener("click", function () {
  cart_popup.classList.toggle("hidden");
});

close_popup.addEventListener("click", function () {
  cart_popup.classList.add("hidden");
});
// pour valide le number telephone
const telephone = document.querySelector("#telephone");
const erreur_telephone = document.querySelector("#erreur-telephone");
const regexTelephone = /^06[0-9]{8}$/;
telephone.addEventListener("input", function(){
  const validTelephone = telephone.value.trim();
  if(!regexTelephone.test(validTelephone)){
    erreur_telephone.classList.remove("hidden");
  }else{
    erreur_telephone.classList.add("hidden");
  }
  // console.log(regexTelephone.test(telephone.value));
});

// pour valide le nom et telephone et email  
const nomPere = document.querySelector("#nom-parent");
const nomEleve = document.querySelector("#nom-eleve");
const email = document.querySelector("#email");
const erreur_parent = document.querySelector("#erreur-parent");
const erreur_eleve = document.querySelector("#erreur-eleve");
const erreur_email = document.querySelector("#erreur-email")
const regexEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
const regexName = /^[A-Za-z]+ [A-Za-z]+$/
nomPere.addEventListener("input", function(){
  const nomPere_proprs = nomPere.value.trim().toLowerCase();
  if(!regexName.test(nomPere_proprs)){
    erreur_parent.classList.remove("hidden")
  }else{
    erreur_parent.classList.add("hidden");
  }

});

nomEleve.addEventListener("input", function(){
  const nomEleve_proprs = nomEleve.value.trim().toLowerCase();
  if(!regexName.test(nomEleve_proprs)){
    erreur_eleve.classList.remove("hidden")
  }else{
    erreur_eleve.classList.add("hidden");
  }
});

email.addEventListener("input", function(){
  const emailProprs = email.value.trim();
  if(!regexEmail.test(emailProprs)){
    erreur_email.classList.remove("hidden");
  }else{
    erreur_email.classList.add("hidden");
  }
});

// // check J’accepte d’être contacté(e) pour cette demande
const form = document.querySelector("#form-inscription")
// console.log(form);
const checkbox = document.querySelector("#check");
// console.log(checkIcon);
check.addEventListener("change", function(){
  // console.log(checkbox.checked);
  if(!form.checkValidity()){
    alert("remplir la formulaire");
    checkbox.checked = false;
  }
});

//. Envoyer la demande
const formaEnvoi = document.querySelector("#form-inscription")
// console.log(form);
const checkBox = document.querySelector("#check");
const btn_envoi = document.querySelector("#btn-envoi");
// console.log(btn_envoi);
btn_envoi.addEventListener("click", function(){
  if(!(formaEnvoi.checkValidity() && checkBox.checked)){
    alert("Remplaire le formulaire");
    return;
  }
  alert("remplair avec succes");


});

// // pour afficher les produit 
function afficher() {
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
function buttonFormation(formations) {
  if (formations.places > 0) {
    return `<button data-id=${formations.id} class="btn-ajouter w-full mt-4 bg-[#009491] p-2 rounded-xl text-white cursor-pointer hover:text-red">
        Ajouter au panier
      </button>`;

  } else {
    return `<button disabled class="w-full mt-4 bg-gray-400 p-2 rounded-xl text-white cursor-not-allowed">
        Complet
      </button>`;
  }

}
afficher();

