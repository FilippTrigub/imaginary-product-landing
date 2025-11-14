# NovaSphere v2 – Expérience de Landing Page

Site marketing futuriste pour **NovaSphere v2**, l’évolution imaginée de l’informatique personnelle mêlant interactions holographiques, performances de niveau quantique et intelligence adaptative.

## ✨ Points forts
- **Section héro immersive** introduisant NovaSphere v2.
- **Grille de fonctionnalités** présentant interface holographique, traitement quantique, sécurité neuronale et autonomie illimitée.
- **Formules tarifaires** (Standard, Pro, Entreprise) avec boutons d’appel à l’action.
- **Mise en avant du produit et de la vision** combinant storytelling, statistiques et mise en valeur visuelle.
- **Support multi-pages** avec une page équipe dédiée et un composant d’en-tête partagé.

## 📁 Structure du projet
```
.
├── index.html        # Page d’accueil principale
├── header.html       # En-tête réutilisable
├── team.html         # Page de présentation de l’équipe
├── styles.css        # Styles globaux (typographie Montserrat, dégradés, mises en page)
├── script.js         # Placeholder pour comportements interactifs
├── images/
│   ├── logo.svg      # Wordmark NovaSphere
│   └── product.svg   # Illustration de l’appareil
└── README.md         # Documentation du projet
```

## 🛠️ Pile technologique
- **HTML5** avec structure sémantique et sections accessibles
- **CSS3** pour la mise en page, les dégradés et la conception responsive
- **JavaScript Vanilla** prêt pour de futures interactions (actuellement minimal)
- **Google Fonts – Montserrat** pour la mise en forme typographique

## 🚀 Mise en route
1. Clonez ou téléchargez ce dépôt.
2. Servez le projet via n’importe quel serveur de fichiers statiques :
   ```bash
   # Option A : Python
   python3 -m http.server 8000

   # Option B : Node.js (requiert http-server)
   npx http-server -p 8000
   ```
3. Ouvrez `http://localhost:8000` dans votre navigateur pour explorer la landing page.

> Astuce : si vous ouvrez directement les fichiers HTML dans un navigateur sans serveur, certaines polices ou futurs assets dynamiques pourraient ne pas se charger correctement ; un serveur local est donc recommandé.

## 🎨 Personnalisation
- **Branding :** remplacez `images/logo.svg` et `images/product.svg` par vos propres assets (conservez les noms de fichiers ou mettez à jour les références dans le HTML).
- **Palette de couleurs & typographie :** ajustez les variables et styles dans `styles.css`.
- **Rédaction :** mettez à jour les textes des sections dans `index.html`, `team.html` et les composants associés.
- **Interactivité :** complétez `script.js` pour des animations, analytics ou formulaires.

## 🧪 Tests & validation
- Validez le balisage via le [validateur HTML du W3C](https://validator.w3.org/).
- Vérifiez le comportement responsive sur desktop, tablette et mobile.
- Lancez des audits d’accessibilité (ex. Lighthouse, axe) pour garantir une conception inclusive.

## 🤝 Contribution
1. Forkez le dépôt et créez une branche de fonctionnalité.
2. Apportez vos améliorations ou corrections.
3. Soumettez une pull request en décrivant vos changements.

## 📄 Licence
Licence MIT © 2025 NovaSphere Inc. (produit imaginaire)
