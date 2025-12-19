# NovaSphere v2.0

Une page d'accueil moderne et responsive pour NovaSphere - un appareil informatique personnel futuriste imaginaire doté d'interfaces holographiques, de traitement quantique et d'une technologie énergétique révolutionnaire.

## Aperçu

NovaSphere v2.0 est une page d'accueil professionnelle présentant un appareil informatique fictif de nouvelle génération. Le site démontre les principes modernes de conception web avec une esthétique épurée, des animations fluides et une expérience utilisateur engageante.

## Fonctionnalités

### Points Forts du Produit
- **Interface Holographique** - Interaction numérique 3D avec une véritable profondeur volumétrique
- **Traitement Quantique** - Puce quantique propriétaire avec une consommation énergétique minimale
- **Sécurité Neuronale** - Authentification biométrique adaptative
- **Batterie Infinie** - Technologie de récupération d'énergie offrant des semaines d'autonomie

### Fonctionnalités du Site Web
- Design responsive optimisé pour tous les appareils
- Navigation par défilement fluide avec liens d'ancrage
- Cartes de fonctionnalités animées au défilement
- Formulaire de contact interactif
- Trois niveaux de tarification (Standard, Pro, Entreprise)
- Page d'équipe dédiée présentant la direction de l'entreprise
- Section vision produit avec feuille de route sur 5 ans

## Structure du Projet

```
/vercel/sandbox/
├── index.html          # Page d'accueil principale
├── team.html           # Page d'équipe avec profils des dirigeants
├── header.html         # Composant d'en-tête partagé
├── script.js           # JavaScript pour interactions et animations
├── styles.css          # Styles CSS (référencé mais absent du dépôt)
├── README.md           # Fichier README en anglais
├── README.fr.md        # Ce fichier (version française)
└── images/             # Ressources d'images
    ├── logo.svg        # Logo de l'entreprise
    └── product.svg     # Visualisation du produit
```

## Pages

### Page d'Accueil Principale (`index.html`)
- Section héro avec boutons d'appel à l'action
- Présentation des fonctionnalités avec 4 capacités clés
- Tableau comparatif des tarifs avec 3 niveaux
- Section Produit & Vision avec feuille de route sur 5 ans
- Section À propos
- Formulaire de contact
- Pied de page complet avec liens et informations de contact

### Page d'Équipe (`team.html`)
- Profils des dirigeants présentant :
  - Sarah Chen - PDG & Fondatrice
  - Marcus Rodriguez - Directeur Technique
  - Dr. Aisha Patel - Responsable de la Recherche
  - James Wilson - Directeur du Design

## Pile Technologique

- **HTML5** - Balisage sémantique avec fonctionnalités d'accessibilité
- **CSS3** - Styles modernes avec police Montserrat de Google Fonts
- **JavaScript Vanilla** - Pas de frameworks, interactions légères
- **Graphiques SVG** - Ressources vectorielles évolutives pour le logo et les images de produit

## Fonctionnalités JavaScript

Le fichier `script.js` fournit :
- Navigation par défilement fluide pour les liens d'ancrage internes
- Gestion de la soumission du formulaire de contact avec validation
- Animations de fondu déclenchées par le défilement pour les cartes de fonctionnalités
- Décalage d'en-tête responsive pour la navigation

## Démarrage

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Optionnel : Serveur web local pour le développement

### Exécution en Local

1. Cloner le dépôt :
```bash
git clone <url-du-dépôt>
cd /vercel/sandbox
```

2. Ouvrir dans le navigateur :
   - Ouvrir simplement `index.html` dans votre navigateur web, ou
   - Utiliser un serveur de développement local :
   ```bash
   # Avec Python 3
   python -m http.server 8000

   # Avec http-server Node.js
   npx http-server
   ```

3. Naviguer vers `http://localhost:8000` dans votre navigateur

## Philosophie de Design

NovaSphere v2.0 suit les principes de design modernes :
- **Épuré & Minimaliste** - Focus sur le contenu avec beaucoup d'espaces blancs
- **Typographie d'Abord** - Famille de polices Montserrat pour la clarté et le professionnalisme
- **Interactions Fluides** - Animations subtiles qui améliorent sans distraire
- **Accessibilité** - HTML sémantique avec étiquettes ARIA appropriées
- **Mobile-First** - Mises en page en grille responsive qui s'adaptent à toutes les tailles d'écran

## Niveaux de Tarification

| Plan | Prix | Fonctionnalités |
|------|------|-----------------|
| Standard | 999 $ | Appareil de base, garantie 1 an, cloud 500 Go |
| Pro | 1 499 $ | Appareil amélioré, garantie 2 ans, cloud 2 To, support prioritaire |
| Entreprise | 2 499 $ | Appareil premium, garantie 3 ans, cloud illimité, support 24h/24 7j/7 |

## Art ASCII

Les deux pages HTML incluent des en-têtes décoratifs en art ASCII :
- Page principale : Logo NovaSphere avec art ASCII de robot
- Page d'équipe : Représentations des membres de l'équipe en personnages ASCII

## Compatibilité des Navigateurs

- Chrome/Edge (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Navigateurs mobiles (iOS Safari, Chrome Mobile)

## Améliorations Futures

Ajouts potentiels pour les versions futures :
- Section blog/actualités
- Intégration de vidéo démo du produit
- Témoignages clients
- Visualiseur de produit 3D interactif
- Fonctionnalité d'inscription à la newsletter
- Support multilingue

## Historique des Versions

- **v2.0** - Version actuelle avec sections vision produit améliorées, page d'équipe et art ASCII
- **v1.0** - Version initiale avec page d'accueil de base

## Licence

© 2025 NovaSphere Inc. Tous droits réservés.

Ceci est un produit fictif créé à des fins de démonstration.

## Contact

Pour toute question concernant ce projet de démonstration :
- Adresse : 123 Innovation Drive, Tech Valley, CA 94025
- Téléphone : (555) 123-4567
- Email : info@novasphere.com

---

**Note :** NovaSphere est un produit imaginaire. Cette page d'accueil sert de pièce de portfolio démontrant les techniques modernes de développement web.
