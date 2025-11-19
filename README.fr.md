# NovaSphere v2.0 - Page d'Accueil

Une page d'accueil moderne et responsive pour NovaSphere, un appareil informatique personnel révolutionnaire fictif doté d'interfaces holographiques et de technologie de traitement quantique.

## 🚀 Aperçu

NovaSphere v2.0 est un site web HTML/CSS/JavaScript entièrement responsive présentant un produit informatique imaginaire de nouvelle génération. Le site présente un design moderne et épuré avec des animations fluides et une expérience utilisateur intuitive.

## ✨ Fonctionnalités

- **Design Responsive** : Entièrement optimisé pour ordinateurs de bureau, tablettes et appareils mobiles
- **UI/UX Moderne** : Interface épurée avec transitions fluides et effets au survol
- **Sections Multiples** :
  - Section héros avec présentation du produit
  - Grille de fonctionnalités clés avec icônes
  - Plans tarifaires (Standard, Pro, Entreprise)
  - Vision produit et statistiques
  - Section À propos
  - Formulaire de contact
  - Page équipe
- **Typographie Personnalisée** : Utilise la famille de polices Montserrat de Google Fonts
- **Graphiques SVG** : Logo et images de produit évolutifs
- **Éléments Interactifs** : Navigation à défilement fluide et interactions de formulaire

## 📁 Structure du Projet

```
/vercel/sandbox/
├── index.html          # Page d'accueil principale
├── team.html           # Page des membres de l'équipe
├── styles.css          # Styles globaux et design responsive
├── script.js           # JavaScript pour les interactions
├── header.html         # Composant d'en-tête réutilisable
├── images/
│   ├── logo.svg        # Logo NovaSphere
│   └── product.svg     # Illustration du produit
├── .gitignore          # Règles d'exclusion Git
└── README.md           # Ce fichier
```

## 🛠️ Technologies Utilisées

- **HTML5** : Balisage et structure sémantiques
- **CSS3** : Stylisation moderne avec Flexbox et Grid
- **JavaScript** : Fonctionnalités interactives
- **Google Fonts** : Famille de polices Montserrat
- **SVG** : Graphiques vectoriels évolutifs pour le logo et les illustrations

## 🚀 Démarrage

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un serveur web local (optionnel, pour le développement)

### Installation

1. Clonez ou téléchargez ce dépôt :
   ```bash
   git clone <url-du-dépôt>
   cd /vercel/sandbox
   ```

2. Ouvrez le projet dans votre éditeur de code préféré

3. Servez les fichiers à l'aide d'un serveur web local :
   
   **Option 1 : Utilisation de Python**
   ```bash
   # Python 3
   python3 -m http.server 8000
   ```
   
   **Option 2 : Utilisation de Node.js (http-server)**
   ```bash
   npx http-server -p 8000
   ```
   
   **Option 3 : Utilisation de PHP**
   ```bash
   php -S localhost:8000
   ```

4. Ouvrez votre navigateur et accédez à :
   ```
   http://localhost:8000
   ```

### Accès Direct aux Fichiers

Alternativement, vous pouvez simplement ouvrir `index.html` directement dans votre navigateur, bien que certaines fonctionnalités puissent mieux fonctionner avec un serveur local.

## 📄 Pages

### Page d'Accueil Principale (`index.html`)
- Section héros avec boutons d'appel à l'action
- Présentation des fonctionnalités avec 4 caractéristiques clés du produit
- Plans tarifaires avec 3 niveaux
- Section vision produit avec statistiques
- Section À propos
- Formulaire de contact
- Pied de page avec liens de navigation

### Page Équipe (`team.html`)
- Profils des membres de l'équipe
- Biographies et postes individuels
- Mise en page en grille responsive

## 🎨 Personnalisation

### Couleurs
La palette de couleurs peut être modifiée dans `styles.css`. Des variables de couleur clés sont utilisées partout :
- Primaire : `#6366f1` (Indigo)
- Secondaire : Diverses nuances de gris
- Couleurs d'accentuation pour les états de survol

### Typographie
Le site utilise la police Montserrat. Pour changer de polices, mettez à jour l'importation Google Fonts dans les fichiers HTML et modifiez les déclarations `font-family` dans `styles.css`.

### Contenu
- Mettez à jour le contenu textuel directement dans `index.html` et `team.html`
- Remplacez les images dans le répertoire `/images`
- Modifiez les plans tarifaires, les fonctionnalités et les membres de l'équipe selon vos besoins

## 📱 Points de Rupture Responsive

Le site est optimisé pour les points de rupture suivants :
- Bureau : 1200px et plus
- Tablette : 768px - 1199px
- Mobile : Moins de 768px

## 🤝 Contribution

Il s'agit d'un projet de démonstration pour un produit fictif. N'hésitez pas à le forker et à le modifier pour vos propres besoins.

## 📝 Licence

© 2025 NovaSphere Inc. Tous droits réservés.

Il s'agit d'un projet fictif créé à des fins de démonstration.

## 📧 Contact

Pour toute question ou commentaire sur ce projet :
- Email : info@novasphere.com (fictif)
- Adresse : 123 Innovation Drive, Tech Valley, CA 94025 (fictif)
- Téléphone : (555) 123-4567 (fictif)

## 🔮 Améliorations Futures

Améliorations potentielles pour les versions futures :
- Ajouter des animations JavaScript et des effets de défilement
- Implémenter la validation et la soumission de formulaire
- Ajouter une section de démonstration vidéo
- Créer une section blog/actualités
- Ajouter des témoignages de clients
- Implémenter un bouton de basculement en mode sombre
- Ajouter l'internationalisation (i18n)
- Intégrer avec une API backend pour les soumissions de formulaire

---

**Version** : 2.0  
**Dernière Mise à Jour** : Novembre 2025  
**Statut** : Développement Actif
