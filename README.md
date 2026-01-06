# Projet : Mini-Site Produit Accessible - Mythologie Pokémon

## Présentation du Projet

Ce projet consiste en la création d'un mini-site web performant et entièrement accessible dédié à la **Mythologie Pokémon**. L'objectif principal est d'appliquer les normes **WCAG** et les bonnes pratiques de qualité web pour simuler un produit commercialisable tout en garantissant une expérience inclusive pour tous les utilisateurs.

## Contenu du Site

Le site est articulé autour de quatre vues principales:
 
 - **Page d'Accueil :** Présente une bannière visuelle (*Hero banner*) avec un bouton d'appel à l'action vers la fiche produit.

 
 - **Page Produit :** Le cœur du site, proposant un carrousel d'images des Pokémon légendaires, une vidéo de présentation avec sous-titres et un glossaire technique.


 - **Page À Propos :** Détaille la mission du projet (archivage des légendes de Sinnoh) et inclut une illustration thématique.


 - **Page Contact :** Contient un formulaire complet avec validation dynamique en JavaScript.

```
MiniSite_Produit_Accessible/
├── assets/
│   ├── carrousel/          # Images des Pokémon légendaires du carrousel (Arceus, Dialga, etc.)
│   ├── images/             # Logo et bannière du site
│   ├── transcription/      # Fichiers de transcription (PDF et VTT)
│   └── video/              # Vidéo de présentation (.mp4)
├── scripts/
│   ├── carrousel.js        # Logique du carrousel accessible
│   └── formulaire.js       # Validation et gestion du formulaire de contact
├── styles/
│   └── style.css           # Feuilles de style globales (CSS pur)
├── apropos.html            # Page "À Propos" (description et visuels)
├── contact.html            # Page avec formulaire de contact
├── index.html              # Page d'accueil (Hero banner)
├── produit.html            # Page produit (Carrousel, Vidéo, Glossaire)
├── Rapport_Lighthouse.pdf  # Audit de performance et d'accessibilité
├── Rapport_Wave.pdf        # Capture d'écran du rapport d'accessibilité WAVE
└── README.md               # Présentation et documentation du projet
```


## Fonctionnalités d'Accessibilité

Conformément aux critères du TP, les mesures suivantes ont été implémentées :

1. Critère Perceptible 

 - **Navigation claire :** Un menu de navigation cohérent sur toutes les pages et un footer contenant des liens vers toutes les sections, y compris une ancre vers les définitions.


 - **Alternatives textuelles :** Toutes les images de contenu possèdent des attributs `alt` descriptifs.


 - **Vidéo accessible :** Utilisation de la balise `<video>` avec des sous-titres au format `.vtt`.



2. Critère Compréhensible 

 - **Formulaire de contact :** Utilisation d'étiquettes (`label`) liées, de groupes de champs (`fieldset`) pour les coordonnées et la plage horaire, et de textes d'aide via `aria-describedby`.


 - **Glossaire :** Une liste de définitions (`<dl>`) permet d'expliquer le jargon utilisé dans la vidéo (ex: "Start-up cosmique", "Monde Distorsion").



3. Critère Utilisable 

 - **Navigation Clavier :** Le site est entièrement navigable par tabulation avec un ordre logique.


 - **Composants Interactifs :** * **Carrousel :** Comprend un bouton "Pause/Play" pour le défilement automatique et est navigable au clavier.


 - **Modale :** Gestion du *Focus Trap*, fermeture avec la touche Échap et retour du focus sur le bouton d'envoi après fermeture.



4. Critère Robuste 

 - **Scores Lighthouse :** Le site obtient un score de **100/100** en Accessibilité, Bonnes Pratiques et SEO sur l'ensemble des pages.
 - **Rapport WAVE :** Aucune erreur critique n'est détectée sur les rapports d'accessibilité.

## Technologies Utilisées

 - **HTML5** (Sémantique et accessible) 


 - **CSS3** (Design responsive et sans frameworks) 


 - **JavaScript Vanilla** (Logique métier, gestion de la modale et du carrousel) 



## Installation et Utilisation

1. Clonez le repository.
2. Ouvrez le fichier `index.html` dans un navigateur web.

---

*Projet réalisé par Juliette Campello dans le cadre d'un Rendu de Projet Individuel.*

