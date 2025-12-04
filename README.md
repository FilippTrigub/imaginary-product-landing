# NovaSphere v2.0 - L'Avenir de l'Informatique Personnelle

Une page d'accueil moderne et responsive présentant NovaSphere, un appareil informatique révolutionnaire doté d'interfaces holographiques, de traitement quantique, de sécurité neuronale et d'une technologie de batterie infinie.

## 🌟 Aperçu du Projet

NovaSphere v2.0 est une page de destination produit construite avec HTML, CSS et JavaScript vanilla. Le site web présente un appareil informatique futuriste avec un design élégant et moderne et des interactions utilisateur fluides.

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

## 🎨 Fonctionnalités

### Page d'Accueil Principale (index.html)
- **Section Hero** : Introduction accrocheuse avec image de produit animée
- **Fonctionnalités Clés** : 4 cartes de fonctionnalités mettant en avant :
  - 🌐 Interface Holographique
  - ⚡ Traitement Quantique
  - 🔒 Sécurité Neuronale
  - 🔄 Batterie Infinie
- **Plans Tarifaires** : Trois niveaux (Standard, Pro, Entreprise)
- **Section Produit & Vision** : Informations détaillées sur le produit avec statistiques
- **Section À Propos** : Historique de l'entreprise
- **Formulaire de Contact** : Formulaire interactif avec validation
- **Pied de Page Responsive** : Disposition multi-colonnes avec informations de l'entreprise

### Page Équipe (team.html)
- Disposition en grille présentant 4 membres de l'équipe :
  - Sarah Chen - PDG & Fondatrice
  - Marcus Rodriguez - Directeur Technique
  - Dr. Aisha Patel - Responsable de la Recherche
  - James Wilson - Directeur du Design
- Effets de survol sur les cartes d'équipe
- Navigation et pied de page cohérents

### En-tête Amélioré (header.html)
- Navigation fixe avec menus déroulants
- Menu hamburger responsive pour mobile
- Navigation par fil d'Ariane
- Mise en évidence de l'état actif
- Animations de défilement fluides

## 🎯 Technologies Clés

- **HTML5** : Balisage sémantique avec fonctionnalités d'accessibilité
- **CSS3** : Style moderne avec :
  - Mises en page CSS Grid & Flexbox
  - Arrière-plans en dégradé
  - Transitions et animations fluides
  - Design responsive (approche mobile-first)
- **JavaScript (ES6+)** : Fonctionnalités interactives incluant :
  - Défilement fluide
  - Validation de formulaire
  - Animations déclenchées par le défilement
  - Basculement du menu mobile

## 🎨 Caractéristiques du Design

### Typographie
- **Police** : Montserrat (Google Fonts)
- **Graisses** : 300, 400, 600, 700

### Palette de Couleurs
- **Dégradé Principal** : `#6e8efb` → `#a777e3`
- **Arrière-plan** : `#f8f9fa`
- **Texte** : `#333` (primaire), `#666` (secondaire)
- **Pied de page** : `#2d3748`

### Animations
- Image de produit flottante (boucle infinie de 6s)
- Effets de survol sur les cartes et boutons
- Animations d'apparition déclenchées par le défilement
- Transitions de page fluides

## 🚀 Démarrage

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Optionnel : Serveur web local pour le développement

### Installation

1. **Cloner le dépôt** :
   ```bash
   git clone <url-du-dépôt>
   cd /vercel/sandbox
   ```

2. **Ouvrir dans le navigateur** :
   - Ouvrez simplement `index.html` dans votre navigateur web
   - Ou utilisez un serveur local :
     ```bash
     # Avec Python 3
     python3 -m http.server 8000
     
     # Avec Node.js (http-server)
     npx http-server -p 8000
     ```

3. **Naviguer vers** :
   ```
   http://localhost:8000
   ```

## 📱 Design Responsive

Le site web est entièrement responsive avec des points de rupture à :
- **Bureau** : > 992px
- **Tablette** : 768px - 992px
- **Mobile** : < 768px

### Fonctionnalités Mobile
- Menu de navigation pliable
- Mises en page en grille empilées
- Boutons adaptés au tactile
- Tailles de police optimisées

## 🔧 Personnalisation

### Changer les Couleurs
Modifiez les variables CSS dans `styles.css` :
```css
/* Couleurs du dégradé principal */
background: linear-gradient(135deg, #6e8efb, #a777e3);
```

### Ajouter de Nouvelles Sections
1. Ajoutez la structure HTML dans `index.html`
2. Stylisez dans `styles.css`
3. Ajoutez de l'interactivité dans `script.js` si nécessaire

### Modifier le Contenu
- **Fonctionnalités du Produit** : Modifiez les éléments `.feature-card`
- **Plans Tarifaires** : Modifiez les sections `.pricing-card`
- **Membres de l'Équipe** : Mettez à jour les cartes `.team-member` dans `team.html`

## 📄 Pages

### 1. Accueil (index.html)
Page d'accueil principale avec toutes les informations sur le produit, les fonctionnalités, les tarifs et le formulaire de contact.

### 2. Équipe (team.html)
Page dédiée présentant l'équipe de direction avec biographies et rôles.

### 3. Démo En-tête (header.html)
Page de démonstration pour le système de navigation amélioré avec menus déroulants et fils d'Ariane.

## 🎭 Fonctionnalités Interactives

### Défilement Fluide
Tous les liens d'ancrage défilent en douceur vers leurs sections cibles avec décalage pour l'en-tête fixe.

### Validation de Formulaire
Le formulaire de contact inclut :
- Validation des champs obligatoires
- Validation du format d'email
- Message de succès lors de la soumission
- Réinitialisation du formulaire après soumission

### Animations de Défilement
Les cartes de fonctionnalités apparaissent en fondu et glissent vers le haut lorsqu'elles entrent dans la vue.

### Menu Mobile
Menu hamburger responsive avec animation de basculement fluide.

## 🌐 Support des Navigateurs

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Navigateurs mobiles (iOS Safari, Chrome Mobile)

## 📝 Licence

© 2025 NovaSphere Inc. Tous droits réservés. Version 2.0

## 📞 Informations de Contact

- **Adresse** : 123 Innovation Drive, Tech Valley, CA 94025, États-Unis
- **Téléphone** : (555) 123-4567
- **Email** : info@novasphere.com

## 🎨 Crédits Art ASCII

Le projet inclut de l'art ASCII créatif dans les commentaires HTML :
- Bannière du logo NovaSphere
- Illustration de l'appareil produit
- Représentations des membres de l'équipe
- Diagramme du système de navigation

## 🔮 Améliorations Futures

Améliorations potentielles pour les versions futures :
- Intégration backend pour le formulaire de contact
- Intégration de vidéo de démonstration du produit
- Section blog
- Témoignages clients
- Support de chat en direct
- Support multilingue
- Basculement mode sombre
- Animations avancées avec GSAP
- Intégration e-commerce pour les précommandes

## 🤝 Contribution

Il s'agit d'un projet de démonstration. Pour les contributions ou suggestions, veuillez contacter l'équipe de développement.

---

**Construit avec ❤️ par l'Équipe NovaSphere**
