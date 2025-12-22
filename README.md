# NovaSphere — Interactive Demo & Landing Page

This repository contains a small interactive demo and a static landing page for the fictional "NovaSphere" product. The project includes an animated, interactive shell greeting script plus a simple static website (HTML/CSS/JS) used as the visual landing page.

**Overview**

- A lightweight demo showcasing an animated, interactive `hello.sh` script that asks for your name and prints a stylized greeting.
- A static landing page composed of `index.html`, `styles.css`, and `script.js` for visual presentation and experimentation.

**What’s Included**

- `hello.sh` — interactive, animated shell script (typing effect, spinner, colored output).
- `index.html`, `header.html`, `team.html` — simple static pages.
- `styles.css`, `script.js` — styling and client-side behavior for the site.
- `images/` — sample image assets used by the static pages.

**Requirements**

- A POSIX-compatible shell (bash/sh). The `hello.sh` script uses common utilities and ANSI escape codes and should work on most Linux and macOS systems.
- Optional: `tput` for terminal capabilities (commonly available on Unix-like systems).

**Usage**

1. Make the script executable (only needed once):

   ```bash
   chmod +x hello.sh
   ```

2. Run the interactive script:

   ```bash
   ./hello.sh
   ```

3. Follow the on-screen prompts. The script will:

- Ask for your name.
- Display a typing-style animated greeting and spinner.
- Print a colored, friendly welcome message.

**Developer Notes**

- The site files (`index.html`, `styles.css`, `script.js`) are static and can be opened directly in a browser for local preview.
- The `hello.sh` script is intentionally simple and self-contained — it avoids external dependencies so it can be used for demos and teaching.

**Contributing**

If you want to improve the demo or landing page, please open a pull request. Small, focused changes (fixes, accessibility improvements, documentation) are welcome.

**License**

This repository is provided for demonstration purposes. No license is specified — treat it as example code.
