# NovaSphere v2.0

> L'Avenir de l'Informatique Personnelle

Une page d'accueil moderne et responsive présentant NovaSphere - un appareil informatique révolutionnaire imaginaire doté d'interfaces holographiques, de traitement quantique et de capacités d'IA avancées.

## 🌟 Aperçu

NovaSphere v2.0 est une page d'accueil conceptuelle démontrant les principes de conception web de pointe et les techniques modernes HTML/CSS/JavaScript. Le site présente une expérience immersive pour un appareil informatique holographique fictif avec des fonctionnalités telles que le traitement quantique, la sécurité neuronale et la technologie de batterie infinie.

## ✨ Fonctionnalités

### Points Forts du Produit
- **Interface Holographique** - Interaction 3D avec le contenu numérique
- **Traitement Quantique** - Technologie de puce quantique propriétaire
- **Sécurité Neuronale** - Authentification biométrique avancée
- **Batterie Infinie** - Technologie révolutionnaire de récupération d'énergie (jusqu'à 2 semaines)

### Fonctionnalités du Site Web
- Design entièrement responsive (mobile, tablette, ordinateur)
- Arrière-plans dégradés modernes et animations fluides
- Cartes de tarification interactives avec effets au survol
- Formulaire de contact avec validation
- Page d'équipe présentant le personnel clé
- Navigation avec défilement fluide
- Logo SVG personnalisé et illustrations de produits

## 🚀 Démarrage Rapide

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Optionnel : Serveur web local pour le développement

### Installation

1. Clonez ou téléchargez ce dépôt :
```bash
git clone <url-du-dépôt>
cd sandbox
```

2. Ouvrez le projet :
```bash
# Option 1 : Ouvrir directement dans le navigateur
open index.html

# Option 2 : Utiliser un serveur local (recommandé)
python3 -m http.server 8000
# ou
npx serve
```

3. Naviguez vers `http://localhost:8000` dans votre navigateur

## 📁 Structure du Projet

```
/vercel/sandbox/
├── index.html          # Page d'accueil principale
├── team.html           # Page des membres de l'équipe
├── header.html         # Composant d'en-tête réutilisable
├── styles.css          # Styles globaux et animations
├── script.js           # Fonctionnalités interactives
├── README.md           # Documentation du projet
├── .gitignore          # Règles d'exclusion Git
└── images/
    ├── logo.svg        # Logo NovaSphere
    └── product.svg     # Illustration du produit
```

## 🎨 Système de Design

### Palette de Couleurs
- **Primaire** : `#6366f1` (Indigo)
- **Secondaire** : `#8b5cf6` (Violet)
- **Accent** : `#ec4899` (Rose)
- **Arrière-plan** : Dégradé de `#667eea` à `#764ba2`
- **Texte** : `#333` (Foncé), `#666` (Moyen), `#fff` (Clair)

### Typographie
- **Famille de Police** : Montserrat (Google Fonts)
- **Graisses** : 300 (Léger), 400 (Normal), 600 (Semi-gras), 700 (Gras)

### Points de Rupture
- Mobile : `< 768px`
- Tablette : `768px - 1024px`
- Ordinateur : `> 1024px`

## 🔧 Technologies Utilisées

- **HTML5** - Balisage sémantique
- **CSS3** - Stylisation moderne avec Flexbox et Grid
- **JavaScript (ES6+)** - Fonctionnalités interactives
- **Google Fonts** - Typographie Montserrat
- **SVG** - Graphiques vectoriels évolutifs

## 📄 Pages

### Page d'Accueil Principale (`index.html`)
- Section héros avec boutons d'appel à l'action
- Présentation des fonctionnalités (4 fonctionnalités clés)
- Plans tarifaires (Standard, Pro, Entreprise)
- Section Produit & Vision avec statistiques
- Section À propos
- Formulaire de contact
- Pied de page avec informations sur l'entreprise

### Page Équipe (`team.html`)
- Profils des membres de l'équipe
- Présentation du leadership
- Mise en page en grille responsive

## 🎯 Sections Clés

### Section Héros
Introduction accrocheuse avec slogan du produit et boutons d'appel à l'action.

### Grille de Fonctionnalités
Grille responsive à quatre colonnes mettant en évidence les capacités principales du produit.

### Cartes de Tarification
Structure tarifaire à trois niveaux avec comparaison des fonctionnalités et CTA de précommande.

### Produit & Vision
Aperçu détaillé du produit avec déclaration de vision sur 5 ans et spécifications techniques.

### Formulaire de Contact
Formulaire de contact fonctionnel avec champs nom, email et message.

## 🌐 Support des Navigateurs

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Navigateurs mobiles (iOS Safari, Chrome Mobile)

## 📱 Design Responsive

Le site est entièrement responsive avec des points de rupture optimisés pour :
- Téléphones mobiles (320px - 767px)
- Tablettes (768px - 1023px)
- Ordinateurs (1024px+)

## 🛠️ Personnalisation

### Changer les Couleurs
Modifiez les variables CSS dans `styles.css` :
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* Ajoutez plus de propriétés personnalisées */
}
```

### Ajouter de Nouvelles Sections
Suivez la structure HTML existante et les conventions de nommage des classes CSS :
```html
<section class="votre-section">
  <div class="container">
    <!-- Votre contenu -->
  </div>
</section>
```

### Modifier le Contenu
- Mettez à jour le texte directement dans `index.html` et `team.html`
- Remplacez les images dans le répertoire `/images`
- Ajustez les tarifs dans la section de tarification

## 📝 Licence

© 2025 NovaSphere Inc. Tous droits réservés.

Il s'agit d'un produit fictif créé à des fins de démonstration.

## 👥 Équipe

- **Sarah Chen** - PDG & Fondatrice
- **Marcus Rodriguez** - Directeur Technique
- **Dr. Aisha Patel** - Directrice de la Recherche
- **James Wilson** - Directeur du Design

## 📞 Contact

- **Adresse** : 123 Innovation Drive, Tech Valley, CA 94025, États-Unis
- **Téléphone** : (555) 123-4567
- **Email** : info@novasphere.com

## 🔮 Améliorations Futures

- [ ] Ajouter une section vidéo de démonstration
- [ ] Implémenter l'inscription à la newsletter
- [ ] Ajouter une section blog/actualités
- [ ] Créer un carrousel de témoignages clients
- [ ] Ajouter un accordéon FAQ
- [ ] Implémenter un bouton de mode sombre
- [ ] Ajouter des animations de chargement
- [ ] Créer un outil de comparaison de produits

---

**Version** : 2.0  
**Dernière Mise à Jour** : Novembre 2025  
**Statut** : Développement Actif
