const asciiArt = String.raw`
                         .              .
                          .'  .---.           '.
                      .-"  ."     ".      "-.
                   .-"    /  .-"""-. \   .    "-.
                 .'      |  /  _   _ \ |   '.      '.
                /        | |  ( ) ( )  | |     \       \
               ;         | |   .-._-.   | |      ;      ;
               |         | |  /  ___  \  | |      |      |
               |         | |  \ (___) /  | |      |      |
               ;         | |   '-._.-'   | |      ;      ;
                \        |  \         /  |     /       /
                 '.       \  '.___.'  /    .'      .'
                   "-.      "-.___.-"    .-"    .-"
                      "-._            _.-"  _.-"
                          ""--..__..--""""""

      _   _                 _____       _
     | \ | |               / ____|     | |
     |  \| | _____   ____ | (___  _ __ | |__   ___ _ __ ___
     | . \` |/ _ \ \ / / _ \ \___ \| '_ \| '_ \ / _ \ '__/ _ \
     | |\  | (_) \ V /  __/ ____) | |_) | | | |  __/ | |  __/
     |_| \_|\___/ \_/ \___||_____/| .__/|_| |_|\___|_|  \___|
                                  | |
                                  |_|

  ┌───────────────────────────────────────────────────────────────────────┐
  │  HOLOGRAPHIC CONSOLE :: BOOTSTRAP SEQUENCE                              │
  │  ---------------------------------------------------------------------  │
  │  [OK] Quantum Core ................. ONLINE                              │
  │  [OK] Neural Co-Processor .......... CALIBRATED                          │
  │  [OK] Holo-Projection Array ........ SYNCHRONIZED                        │
  │  [OK] Lattice Memory Grid .......... 1.21 PB AVAILABLE                    │
  │  [..] Spatial UI Renderer .......... WARMING UP                           │
  │                                                                           │
  │        .-"""""-.
  │      .'  _   _  '.                 .-------------------------------.
  │     /   (o) (o)   \                |  > command: render --sphere    |
  │    |     .-"""-.    |               |  > mode: "holographic"         |
  │    |    /  .-.  \   |               |  > status: stable              |
  │     \   \ (   ) /  /                |  > fidelity: 99.97%            |
  │      '.  '-._.-' .'                 '-------------------------------'
  │        '-._____.-' 
  │
  │     ┌───────────────┐      ┌──────────────────────────────────────┐
  │     │   _________   │      │   NOVASPHERE: PERSONAL COMPUTING, REIMAGINED │
  │     │  | SPHERE |   │      │   - gesture-first UI                  │
  │     │   ‾‾‾‾‾‾‾‾‾   │      │   - AI-assisted workflows               │
  │     └──────┬────────┘      │   - zero-latency holographic output    │
  │            │               └──────────────────────────────────────┘
  │         ___|___
  │        /  / \  \
  │       /__/___\__\
  │         /_/_\_\
  │
  └───────────────────────────────────────────────────────────────────────┘
`;

const style = document.createElement('style');
style.textContent = `
  :root {
    color-scheme: dark;
  }

  body {
    margin: 0;
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: radial-gradient(1200px 700px at 50% 20%, #1a2a4a 0%, #0b1020 55%, #050714 100%);
    color: #e6f1ff;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
      "Apple Color Emoji", "Segoe UI Emoji";
  }

  .page {
    width: min(1100px, calc(100% - 40px));
    padding: 28px;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.45),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(122, 162, 255, 0.18);
    backdrop-filter: blur(10px);
  }

  .page h1 {
    margin: 0 0 10px;
    font-size: 28px;
    letter-spacing: 0.2px;
  }

  .page p {
    margin: 0 0 18px;
    opacity: 0.85;
  }

  .ascii {
    margin: 0;
    padding: 18px;
    overflow: auto;
    border-radius: 14px;
    border: 1px solid rgba(122, 162, 255, 0.22);
    background:
      radial-gradient(900px 260px at 50% 0%, rgba(110, 142, 251, 0.22), rgba(0,0,0,0) 70%),
      rgba(0, 0, 0, 0.25);
    box-shadow:
      inset 0 0 0 1px rgba(0,0,0,0.2),
      0 10px 35px rgba(0,0,0,0.35);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
      monospace;
    font-size: 12px;
    line-height: 1.15;
    color: #dbe7ff;
    text-shadow: 0 0 14px rgba(122, 162, 255, 0.22);
    white-space: pre;
  }
`;
document.head.appendChild(style);

const app = document.createElement('main');
app.className = 'page';

const title = document.createElement('h1');
title.textContent = 'NovaSphere landing page rebuilt in JS';

const subtitle = document.createElement('p');
subtitle.textContent = 'Complex ASCII diagnostics rendered live in-browser.';

const pre = document.createElement('pre');
pre.className = 'ascii';
pre.textContent = asciiArt;

app.appendChild(title);
app.appendChild(subtitle);
app.appendChild(pre);

document.body.appendChild(app);
