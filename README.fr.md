# NovaSphere v2.0 - Page de Présentation du Produit

Une page de destination moderne et responsive pour NovaSphere, un appareil informatique personnel révolutionnaire doté d'interfaces holographiques, de traitement quantique et de sécurité neuronale.

## 🌟 Aperçu du Projet

NovaSphere v2.0 est un site web de produit fictif présentant des concepts technologiques de pointe. Cette page de destination démontre les principes modernes de conception web avec une esthétique propre et professionnelle et des interactions utilisateur fluides.

## 📁 Structure du Projet

```
/vercel/sandbox/
├── index.html          # Page de destination principale
├── team.html           # Page des membres de l'équipe
├── header.html         # Démo de navigation d'en-tête améliorée
├── styles.css          # Styles globaux et design responsive
├── script.js           # Fonctionnalités interactives
├── README.md           # Documentation du projet
├── .gitignore          # Règles d'exclusion Git
└── images/
    ├── logo.svg        # Logo NovaSphere
    └── product.svg     # Illustration du produit
```

## 🎨 Fonctionnalités

### Page de Destination Principale (`index.html`)
- **Section Hero** : Introduction accrocheuse avec image de produit animée
- **Fonctionnalités Clés** : Disposition en grille présentant 4 fonctionnalités principales :
  - 🌐 Interface Holographique
  - ⚡ Traitement Quantique
  - 🔒 Sécurité Neuronale
  - 🔄 Batterie Infinie
- **Plans Tarifaires** : Trois niveaux (Standard, Pro, Entreprise) avec listes de fonctionnalités détaillées
- **Section Produit & Vision** : Informations détaillées sur le produit avec statistiques et vision à 5 ans
- **Section À Propos** : Contexte et mission de l'entreprise
- **Formulaire de Contact** : Formulaire interactif avec validation
- **Pied de Page Responsive** : Disposition multi-colonnes avec liens de navigation et informations de contact

### Page Équipe (`team.html`)
- Profils des membres de l'équipe avec photos et biographies
- 4 membres clés de l'équipe :
  - Sarah Chen (PDG & Fondatrice)
  - Marcus Rodriguez (Directeur Technique)
  - Dr. Aisha Patel (Directrice de la Recherche)
  - James Wilson (Directeur du Design)
- Effets de survol sur les cartes d'équipe

### En-tête Amélioré (`header.html`)
- Navigation fixe avec menus déroulants
- Navigation par fil d'Ariane
- Menu hamburger responsive pour mobile
- Mise en évidence de la page active
- Animations de défilement fluides

## 🎯 Technologies Clés

- **HTML5** : Balisage sémantique
- **CSS3** : Stylisation moderne avec :
  - Dispositions CSS Grid & Flexbox
  - Arrière-plans en dégradé
  - Transitions et animations fluides
  - Design responsive avec media queries
- **JavaScript Vanilla** : Fonctionnalités interactives sans dépendances
- **Google Fonts** : Famille de polices Montserrat

## 🚀 Démarrage

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Optionnel : Serveur web local pour le développement

### Installation

1. Clonez le dépôt :
```bash
git clone <url-du-dépôt>
cd /vercel/sandbox
```

2. Ouvrez le projet :
   - **Option 1** : Double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur
   - **Option 2** : Utilisez un serveur local :
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (avec http-server)
     npx http-server
     ```

3. Naviguez vers `http://localhost:8000` dans votre navigateur

## 📱 Design Responsive

Le site web est entièrement responsive avec des points de rupture à :
- **Bureau** : 1200px+ (disposition complète)
- **Tablette** : 768px - 992px (dispositions en grille ajustées)
- **Mobile** : < 768px (dispositions empilées, menu hamburger)

## 🎨 Système de Design

### Palette de Couleurs
- **Dégradé Principal** : `#6e8efb` → `#a777e3`
- **Arrière-plan** : `#f8f9fa`
- **Texte** : `#333` (principal), `#666` (secondaire)
- **Pied de page** : `#2d3748`

### Typographie
- **Famille de Police** : Montserrat (Google Fonts)
- **Graisses** : 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold)

### Composants
- **Boutons** : Primaire (dégradé) et Secondaire (contour)
- **Cartes** : Cartes de fonctionnalités, cartes tarifaires, cartes d'équipe
- **Formulaires** : Champs de saisie stylisés avec états de focus
- **Navigation** : En-tête fixe avec menus déroulants

## ⚡ Fonctionnalités Interactives

### Fonctionnalités JavaScript (`script.js`)
1. **Défilement Fluide** : Les liens d'ancrage défilent en douceur vers les sections
2. **Gestion de Formulaire** : Soumission du formulaire de contact avec validation
3. **Animations de Défilement** : Les cartes de fonctionnalités apparaissent en fondu lors du défilement
4. **Menu Mobile** : Fonctionnalité de basculement pour la navigation responsive

### Animations CSS
- Image de produit flottante (boucle de 6s)
- Effets de survol sur les cartes et boutons
- Transitions fluides sur tous les éléments interactifs

## 📄 Sections de Page

### index.html
1. **En-tête** : Navigation fixe avec logo et menu
2. **Hero** : Appel à l'action principal avec présentation du produit
3. **Fonctionnalités** : Grille à 4 colonnes des fonctionnalités clés
4. **Tarification** : Comparaison tarifaire à 3 niveaux
5. **Produit & Vision** : Informations détaillées sur le produit
6. **À Propos** : Aperçu de l'entreprise
7. **Contact** : Formulaire pour les demandes de renseignements
8. **Pied de page** : Plan du site et coordonnées

### team.html
- En-tête amélioré avec navigation
- Grille des membres de l'équipe (4 membres)
- Biographies et rôles individuels
- Pied de page cohérent

### header.html
- Démonstration du système de navigation
- Exemples de menus déroulants
- Navigation par fil d'Ariane
- Présentation de la réactivité mobile

## 🔧 Personnalisation

### Changer les Couleurs
Modifiez les variables CSS dans `styles.css` :
```css
/* Couleurs du dégradé principal */
background: linear-gradient(135deg, #6e8efb, #a777e3);
```

### Ajouter de Nouvelles Pages
1. Copiez la structure de `team.html`
2. Mettez à jour les liens de navigation dans tous les fichiers HTML
3. Ajoutez de nouveaux styles à `styles.css` si nécessaire

### Modifier le Contenu
- Le contenu textuel est directement dans les fichiers HTML
- Les images sont dans le répertoire `/images`
- Remplacez les fichiers SVG par vos propres logos/graphiques

## 📊 Support des Navigateurs

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Navigateurs mobiles (iOS Safari, Chrome Mobile)

## 🎯 Performance

- Dépendances minimales (pas de frameworks)
- CSS optimisé avec sélecteurs efficaces
- JavaScript léger
- Graphiques SVG pour l'évolutivité
- Préconnexion Google Fonts pour un chargement plus rapide

## 📝 Licence

© 2025 NovaSphere Inc. Tous droits réservés. Version 2.0

## 🤝 Contribution

Il s'agit d'un projet de démonstration. N'hésitez pas à le forker et à le personnaliser pour votre propre usage.

## 📞 Informations de Contact

**NovaSphere Inc.**
- Adresse : 123 Innovation Drive, Tech Valley, CA 94025, États-Unis
- Téléphone : (555) 123-4567
- Email : info@novasphere.com

---

**Construit avec ❤️ en utilisant HTML, CSS et JavaScript**
