# NovaSphere v2 - Landing Page

This repository contains the source code for the NovaSphere v2 landing page, a fictional futuristic personal computing device. The landing page is designed to showcase the product's features, pricing, and vision.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Security](#security)
- [Deployment](#deployment)

## Features

- **Responsive Design:** The layout adjusts to different screen sizes, providing a good user experience on desktops, tablets, and mobile devices.
- **Interactive Elements:** The page includes smooth scrolling for anchor links and a functional contact form.
- **Animations:** Subtle animations on feature cards enhance the user experience.
- **Multi-page Structure:** The project includes a main landing page, a team page, and a 404 page.
- **Accessibility:** The project has been updated to improve accessibility by using semantic HTML tags and ARIA attributes.
- **CI:** The project uses GitHub Actions to run tests on every push and pull request.
- **Dependabot:** The project uses Dependabot to keep dependencies up to date.
- **Serverless Functions:** The project uses Netlify Functions and Vercel Serverless Functions to run server-side code.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/your_project_.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the server
   ```sh
   npm start
   ```

## Project Structure

The project is structured as follows:

```
/
├── .github/
│   ├── dependabot.yml
│   ├── ISSUE_TEMPLATE.md
│   ├── pull_request_template.md
│   └── workflows/
│       └── main.yml
├── .gitignore
├── 404.html
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
├── api/
│   └── hello.js
├── functions/
│   └── hello.js
├── index.html
├── netlify.toml
├── package.json
├── README.md
├── script.js
├── styles.css
├── team.html
├── vercel.json
└── images/
    ├── logo.svg
    └── product.svg
```

- **`index.html`**: The main landing page.
- **`team.html`**: The page that introduces the team.
- **`404.html`**: The 404 page.
- **`styles.css`**: The stylesheet for the website.
- **`script.js`**: The JavaScript file for the website.
- **`images/`**: A directory containing the images used in the website.
- **`README.md`**: This file.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **Netlify Functions**
- **Vercel Serverless Functions**

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Security

Please read [SECURITY.md](SECURITY.md) for details on our security policy and how to report vulnerabilities.

## Deployment

This project is deployed using Netlify and Vercel.
