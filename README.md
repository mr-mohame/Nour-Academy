# Nour Academy

**Plateforme d'inscription en ligne pour un centre de soutien scolaire et de langues.**

## 📌 Présentation du projet

Nour Academy est une interface web responsive conçue pour faciliter l'inscription des élèves aux cours de soutien scolaire et de langues proposés par les centres Nour Academy à Nador.

La plateforme permet aux parents de consulter les formations disponibles, de filtrer les cours selon leurs besoins, de sélectionner plusieurs formations et de préparer un dossier d'inscription en ligne.

Le projet vise à simplifier le parcours d'inscription et à réduire les erreurs dans le choix des formations ainsi que les dossiers incomplets.

## 🎯 Objectifs

- Faciliter l'accès au catalogue des formations.
- Améliorer l'expérience utilisateur sur mobile, tablette et ordinateur.
- Permettre aux parents de sélectionner plusieurs formations.
- Afficher les prix mensuels et les places disponibles.
- Vérifier les informations saisies dans le formulaire.
- Afficher un récapitulatif de l'inscription.

## ✨ Fonctionnalités

### Catalogue des formations
- Affichage dynamique des formations à partir de données JavaScript.
- Présentation du titre, de la matière, du niveau, du créneau, du prix et des places disponibles.
- Affichage du prix mensuel en MAD.
- Désactivation des inscriptions lorsque le cours est complet.

### Filtres
- Filtrage par niveau scolaire.
- Filtrage par matière.
- Combinaison des filtres sans rechargement de la page.

### Panier
- Ajout des formations au panier.
- Prévention des doublons.
- Suppression des formations sélectionnées.
- Calcul du montant mensuel total.
- Affichage du récapitulatif des formations choisies.

### Formulaire d'inscription
- Saisie des informations du parent et de l'élève.
- Validation des champs obligatoires.
- Vérification du numéro de téléphone.
- Vérification du mot de passe et de sa confirmation.
- Vérification du consentement.
- Affichage des messages d'erreur et de confirmation.

### Responsive design
- Interface adaptée aux mobiles, tablettes et ordinateurs.
- Navigation adaptée aux petits écrans.
- Mise en page claire et accessible.

## 🛠️ Technologies utilisées

- **HTML5** — Structure de la page.
- **Tailwind CSS v4** — Mise en forme et design responsive.
- **JavaScript** — Gestion des données, filtres, panier et validations.
- **Vite** — Environnement de développement.
- **Git et GitHub** — Gestion de versions et suivi du projet.
- **Figma** — Conception des maquettes UI/UX.

## 📂 Structure du projet

```text
nour-academy/
├── index.html
│── style.css
│── script.js   
├── img/
│   └── logo.webp
├── package.json
├── package-lock.json
└── README.md
```

*Adapte cette structure à l'organisation réelle de tes fichiers.*

## 🚀 Installation et lancement

### Prérequis

- Node.js et npm installés.
- Git installé.

### 1. Cloner le dépôt

```bash
git clone https://github.com/mr-mohame/Nour-Academy.git
```

### 2. Accéder au projet

```bash
cd Nour-Academy
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Ouvre ensuite dans ton navigateur l'adresse locale affichée par Vite dans le terminal.

## 🧪 Tests et vérifications

- Vérifier l'affichage du catalogue.
- Tester les filtres par niveau et matière.
- Vérifier l'ajout et la suppression des formations.
- Vérifier le calcul du montant total.
- Tester les cours complets.
- Tester les validations du formulaire.
- Vérifier l'affichage sur mobile, tablette et ordinateur.

## ⚠️ Limites du projet

Cette version est conçue comme une application front-end fonctionnant dans le navigateur, sans serveur ni base de données.

Les données et les inscriptions ne sont donc pas enregistrées dans un système centralisé. Le projet constitue un prototype fonctionnel destiné à démontrer le parcours utilisateur.

## 👨‍💻 Auteur

Projet réalisé individuellement dans le cadre d'un projet de conception et de développement web.

**GitHub :** [mr-mohame](https://github.com/mr-mohame)

---

*Projet éducatif — Nour Academy, Nador, Maroc.*
