const app = document.createElement('main');
app.className = 'ascii-page';

const title = document.createElement('h1');
title.textContent = 'NovaSphere';

const subtitle = document.createElement('p');
subtitle.className = 'ascii-subtitle';
subtitle.textContent = 'Holographic-grade computing—now with terminal soul.';

const ascii = String.raw`
███╗   ██╗ ██████╗ ██╗   ██╗ █████╗ ███████╗██████╗ ██╗  ██╗███████╗██████╗ ███████╗
████╗  ██║██╔═══██╗██║   ██║██╔══██╗██╔════╝██╔══██╗██║  ██║██╔════╝██╔══██╗██╔════╝
██╔██╗ ██║██║   ██║██║   ██║███████║███████╗██████╔╝███████║█████╗  ██████╔╝█████╗  
██║╚██╗██║██║   ██║╚██╗ ██╔╝██╔══██║╚════██║██╔═══╝ ██╔══██║██╔══╝  ██╔══██╗██╔══╝  
██║ ╚████║╚██████╔╝ ╚████╔╝ ██║  ██║███████║██║     ██║  ██║███████╗██║  ██║███████╗
╚═╝  ╚═══╝ ╚═════╝   ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝

┌──────────────────────────────────────────────────────────────────────────────────────┐
│  HOLOGRAPHIC CONSOLE // BOOTSTRAP SEQUENCE                                             │
│  status: STABLE    power: 99.7%    thermal: NOMINAL    link: QUANTUM-MESH (LOCKED)     │
├──────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│               *         .                              .         *                   │
│                         .        .        .                                         │
│        .     *                    .                 *                 .              │
│                                                                                      │
│                           .-""""""""-.._                                               │
│                       _.-"  .-"""-.     "-._                                           │
│                    .-"    .'  _    '.       "-.                                        │
│                  .'      /   (_)     \         '.                                      │
│                 /       |   .---.     |          \                                     │
│                ;        |  /     \    |           ;                                    │
│                |        | |  .-.  |   |           |                                    │
│                |        | | (   ) |   |           |                                    │
│                |        |  \ \`-' /    |           |                                    │
│                ;        |   '---'     |           ;                                    │
│                 \        \           /           /                                     │
│                  '.       '._     _.'          .'                                      │
│                    '-._        """         _.-'                                        │
│                        "-._             _.-"                                           │
│                            ""--..___..--"                                              │
│                                                                                      │
│     ┌───────────────┐          ┌───────────────────────────────┐                     │
│     │ CORE: SPHERE   │          │ RENDER: HOLOGRAM GRID         │                     │
│     │  (ACTIVE)      │          │  ░▒▓█  phase: 0x2A            │                     │
│     └───────┬───────┘          │  ░▒▓█  depth:  12.8nm          │                     │
│             │                   │  ░▒▓█  jitter: 0.003          │                     │
│             │                   └───────────────┬───────────────┘                     │
│        ┌────▼───────────────────────────────────▼────┐                                │
│        │   ░▒▓█▌  QUANTUM INTERFACE BUS (QIB)  ▐█▓▒░   │                                │
│        │   [====]  [====]  [====]  [====]  [====]     │                                │
│        │   01AF:7C  01AF:7D  01AF:7E  01AF:7F  01AF:80 │                                │
│        └───────────────────────────────────────────────┘                                │
│                                                                                      │
│  telemetry>  frames: 00000042    latency: 0.8ms    coherence: 0.9997                  │
│  note     >  "The future is bright; the terminal is brighter."                         │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
`;

const asciiWrap = document.createElement('section');
asciiWrap.className = 'ascii-wrap';

const asciiHeading = document.createElement('h2');
asciiHeading.textContent = 'Boot Screen';

const pre = document.createElement('pre');
pre.className = 'ascii-art';
pre.setAttribute('aria-label', 'NovaSphere ASCII art boot screen');
pre.textContent = ascii;

asciiWrap.appendChild(asciiHeading);
asciiWrap.appendChild(pre);

app.appendChild(title);
app.appendChild(subtitle);
app.appendChild(asciiWrap);
document.body.appendChild(app);

// Minimal styling so the ASCII art is readable even without styles.css.
const style = document.createElement('style');
style.textContent = `
  .ascii-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 48px 20px;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    color: #0b1220;
  }
  .ascii-page h1 {
    margin: 0 0 8px;
    font-size: clamp(2rem, 4vw, 3rem);
    letter-spacing: 0.02em;
  }
  .ascii-subtitle {
    margin: 0 0 24px;
    color: rgba(11, 18, 32, 0.72);
  }
  .ascii-wrap h2 {
    margin: 24px 0 12px;
    font-size: 1.25rem;
  }
  .ascii-art {
    margin: 0;
    padding: 18px 16px;
    overflow: auto;
    border-radius: 14px;
    border: 1px solid rgba(110, 142, 251, 0.35);
    background:
      radial-gradient(1200px 500px at 20% 10%, rgba(110, 142, 251, 0.18), transparent 60%),
      radial-gradient(900px 500px at 80% 0%, rgba(167, 119, 227, 0.14), transparent 55%),
      linear-gradient(180deg, rgba(255,255,255,0.9), rgba(245,247,250,0.9));
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 12px;
    line-height: 1.25;
    white-space: pre;
  }
`;
document.head.appendChild(style);
