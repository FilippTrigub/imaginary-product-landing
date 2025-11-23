# NovaSphere v2.0 - Page de Destination Produit

Une page de destination moderne et responsive pour NovaSphere, un appareil informatique personnel révolutionnaire doté d'interfaces holographiques, de traitement quantique et de sécurité neuronale.

## 🚀 Aperçu du Projet

NovaSphere v2.0 est un site web marketing multi-pages présentant un appareil informatique futuriste. Le site présente un design épuré et moderne avec des animations fluides, des mises en page responsives et un système de navigation intuitif.

## 📁 Structure du Projet

```
/vercel/sandbox/
├── index.html          # Page d'accueil principale
├── team.html           # Page des membres de l'équipe
├── header.html         # Démo de navigation d'en-tête améliorée
├── styles.css          # Styles globaux et design responsive
├── script.js           # Fonctionnalités interactives
├── README.md           # Documentation du projet
├── .gitignore          # Règles d'exclusion Git
└── images/
    ├── logo.svg        # Logo NovaSphere
    └── product.svg     # Image du produit
```

## ✨ Fonctionnalités

### Page d'Accueil Principale (`index.html`)
- **Section Hero** : Introduction accrocheuse avec image de produit animée
- **Fonctionnalités Clés** : Mise en page en grille présentant 4 fonctionnalités principales du produit
  - Interface Holographique
  - Traitement Quantique
  - Sécurité Neuronale
  - Batterie Infinie
- **Plans Tarifaires** : Structure tarifaire à trois niveaux (Standard, Pro, Entreprise)
- **Produit & Vision** : Informations détaillées sur le produit avec statistiques et vision à 5 ans
- **Section À Propos** : Contexte et mission de l'entreprise
- **Formulaire de Contact** : Formulaire interactif avec validation
- **En-tête Fixe** : Navigation fixe avec défilement fluide
- **Pied de Page Responsive** : Mise en page multi-colonnes avec informations de l'entreprise

### Page Équipe (`team.html`)
- Profils des membres de l'équipe avec photos et biographies
- 4 membres clés de l'équipe :
  - Sarah Chen (PDG & Fondatrice)
  - Marcus Rodriguez (Directeur Technique)
  - Dr. Aisha Patel (Responsable de la Recherche)
  - James Wilson (Directeur du Design)
- Effets de survol sur les cartes d'équipe
- Navigation cohérente dans l'en-tête et le pied de page

### En-tête Amélioré (`header.html`)
- Menus de navigation déroulants
- Menu hamburger responsive pour mobile
- Navigation par fil d'Ariane
- Mise en évidence de la page active
- Transitions et animations fluides

## 🎨 Caractéristiques du Design

- **Palette de Couleurs** : Thème dégradé violet (#6e8efb à #a777e3)
- **Typographie** : Famille de polices Montserrat (Google Fonts)
- **Animations** : 
  - Image de produit flottante
  - Animations de cartes de fonctionnalités déclenchées par le défilement
  - Effets de survol sur les boutons et les cartes
- **Design Responsive** : Approche mobile-first avec points de rupture à 768px et 992px

## 🛠️ Technologies Utilisées

- **HTML5** : Balisage sémantique
- **CSS3** : 
  - Mises en page CSS Grid et Flexbox
  - Animations et transitions CSS
  - Propriétés personnalisées et dégradés
- **JavaScript Vanilla** : 
  - Défilement fluide
  - Validation de formulaire
  - Animations au défilement
  - Basculement du menu mobile

## 🚀 Démarrage

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Optionnel : Serveur web local pour le développement

### Installation

1. Cloner le dépôt :
```bash
git clone <url-du-dépôt>
cd /vercel/sandbox
```

2. Ouvrir le projet :
   - **Option 1** : Ouvrir `index.html` directement dans votre navigateur
   - **Option 2** : Utiliser un serveur local :
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (avec http-server)
     npx http-server
     ```

3. Naviguer vers `http://localhost:8000` dans votre navigateur

## 📄 Navigation des Pages

- **Accueil** : `index.html` - Page d'accueil principale
- **Équipe** : `team.html` - Rencontrez l'équipe
- **Démo En-tête** : `header.html` - Présentation de la navigation améliorée

### Liens Internes
- `#features` - Section des fonctionnalités du produit
- `#pricing` - Plans tarifaires
- `#about` - À propos de l'entreprise
- `#contact` - Formulaire de contact
- `#product-vision` - Section vision du produit

## 🎯 Sections Clés

### Section Hero
Présente NovaSphere v2.0 avec un titre accrocheur et des boutons d'appel à l'action pour la démo et la précommande.

### Grille de Fonctionnalités
Grille responsive à quatre colonnes mettant en avant :
- 🌐 Interface Holographique
- ⚡ Traitement Quantique
- 🔒 Sécurité Neuronale
- 🔄 Batterie Infinie

### Plans Tarifaires
Trois niveaux tarifaires avec comparaison des fonctionnalités :
- **Standard** : 999 $ - Appareil de base avec garantie 1 an
- **Pro** : 1 499 $ - Appareil amélioré avec garantie 2 ans (Le Plus Populaire)
- **Entreprise** : 2 499 $ - Appareil premium avec stockage illimité

### Produit & Vision
Mise en page à deux colonnes présentant :
- Avantages et fonctionnalités du produit
- Spécifications techniques
- Vision de l'entreprise à 5 ans
- Boutons d'appel à l'action

## 📱 Points de Rupture Responsive

- **Bureau** : > 992px (Mises en page en grille complètes)
- **Tablette** : 768px - 992px (Grilles ajustées)
- **Mobile** : < 768px (Colonne unique, menu hamburger)

## 🎨 Palette de Couleurs

- **Dégradé Principal** : `linear-gradient(135deg, #6e8efb, #a777e3)`
- **Arrière-plan** : `#f8f9fa`
- **Texte** : `#333` (primaire), `#666` (secondaire)
- **Pied de Page** : `#2d3748`
- **Accent** : `#6e8efb`

## 🔧 Personnalisation

### Changer les Couleurs
Modifier les variables CSS dans `styles.css` :
```css
.btn-primary {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
}
```

### Ajouter de Nouvelles Sections
Suivre la structure de section existante :
```html
<section id="nouvelle-section" class="nouvelle-section">
    <div class="container">
        <h2>Titre de la Section</h2>
        <!-- Contenu ici -->
    </div>
</section>
```

### Modifier la Navigation
Mettre à jour la navigation dans la section `<header>` de chaque fichier HTML.

## 📞 Informations de Contact

- **Adresse** : 123 Innovation Drive, Tech Valley, CA 94025, États-Unis
- **Téléphone** : (555) 123-4567
- **Email** : info@novasphere.com

## 📝 Licence

© 2025 NovaSphere Inc. Tous droits réservés. Version 2.0

## 🤝 Contribution

Il s'agit d'un projet de démonstration. Pour les contributions réelles, veuillez suivre le flux de travail Git standard :
1. Forker le dépôt
2. Créer une branche de fonctionnalité
3. Commiter vos modifications
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 🐛 Problèmes Connus

- Les images des membres de l'équipe utilisent des URL de substitution (`via.placeholder.com`)
- Le formulaire de contact n'envoie pas réellement d'emails (côté client uniquement)
- Certains liens de navigation sont des espaces réservés (`#`)

## 🔮 Améliorations Futures

- [ ] Intégration backend pour le formulaire de contact
- [ ] Photos réelles des membres de l'équipe
- [ ] Section blog
- [ ] Pages de documentation produit
- [ ] Témoignages clients
- [ ] Intégration de démo vidéo
- [ ] Support multilingue
- [ ] Basculement mode sombre

## 📚 Ressources

- **Police** : [Montserrat sur Google Fonts](https://fonts.google.com/specimen/Montserrat)
- **Icônes** : Basées sur des emojis (aucune dépendance externe)
- **Images** : Format SVG pour l'évolutivité

---

**Construit avec ❤️ pour l'avenir de l'informatique personnelle**
