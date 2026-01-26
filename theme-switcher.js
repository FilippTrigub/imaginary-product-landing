/**
 * Theme Switcher Script
 * Switches between different color themes
 */

class ThemeSwitcher {
    constructor() {
        this.themes = {
            default: {
                primary: '#667eea',
                secondary: '#764ba2',
                background: '#ffffff',
                text: '#333333',
                accent: '#f093fb'
            },
            dark: {
                primary: '#4a5568',
                secondary: '#2d3748',
                background: '#1a202c',
                text: '#e2e8f0',
                accent: '#805ad5'
            },
            ocean: {
                primary: '#0077be',
                secondary: '#00a8e8',
                background: '#f0f8ff',
                text: '#003459',
                accent: '#00d9ff'
            },
            sunset: {
                primary: '#ff6b6b',
                secondary: '#ee5a6f',
                background: '#fff5f5',
                text: '#2d3436',
                accent: '#feca57'
            },
            forest: {
                primary: '#27ae60',
                secondary: '#229954',
                background: '#f0fff4',
                text: '#1e4620',
                accent: '#82e0aa'
            },
            neon: {
                primary: '#ff00ff',
                secondary: '#00ffff',
                background: '#0a0a0a',
                text: '#ffffff',
                accent: '#ffff00'
            }
        };
        
        this.currentTheme = 'default';
    }

    // Apply theme
    applyTheme(themeName) {
        if (!this.themes[themeName]) {
            console.error(`Theme "${themeName}" not found`);
            return false;
        }

        const theme = this.themes[themeName];
        this.currentTheme = themeName;

        // Apply CSS variables
        if (typeof document !== 'undefined') {
            const root = document.documentElement;
            root.style.setProperty('--primary-color', theme.primary);
            root.style.setProperty('--secondary-color', theme.secondary);
            root.style.setProperty('--background-color', theme.background);
            root.style.setProperty('--text-color', theme.text);
            root.style.setProperty('--accent-color', theme.accent);
        }

        console.log(`Theme switched to: ${themeName}`);
        console.log('Colors:', theme);
        return true;
    }

    // Get current theme
    getCurrentTheme() {
        return {
            name: this.currentTheme,
            colors: this.themes[this.currentTheme]
        };
    }

    // List all themes
    listThemes() {
        return Object.keys(this.themes);
    }

    // Add custom theme
    addTheme(name, colors) {
        if (this.themes[name]) {
            console.warn(`Theme "${name}" already exists. Overwriting...`);
        }
        
        this.themes[name] = colors;
        console.log(`Theme "${name}" added successfully`);
    }

    // Generate random theme
    generateRandomTheme() {
        const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        
        const randomTheme = {
            primary: randomColor(),
            secondary: randomColor(),
            background: randomColor(),
            text: randomColor(),
            accent: randomColor()
        };
        
        const themeName = 'random_' + Date.now();
        this.addTheme(themeName, randomTheme);
        return themeName;
    }

    // Cycle through themes
    cycleThemes(interval = 3000) {
        const themeNames = this.listThemes();
        let index = 0;
        
        console.log('Starting theme cycle...');
        
        const cycle = setInterval(() => {
            this.applyTheme(themeNames[index]);
            index = (index + 1) % themeNames.length;
        }, interval);
        
        return cycle;
    }
}

// Demo usage
console.log('=== THEME SWITCHER DEMO ===\n');

const themeSwitcher = new ThemeSwitcher();

console.log('Available themes:', themeSwitcher.listThemes());
console.log('\nCurrent theme:', themeSwitcher.getCurrentTheme());

console.log('\n--- Switching to Dark theme ---');
themeSwitcher.applyTheme('dark');

console.log('\n--- Switching to Ocean theme ---');
themeSwitcher.applyTheme('ocean');

console.log('\n--- Switching to Sunset theme ---');
themeSwitcher.applyTheme('sunset');

console.log('\n--- Generating random theme ---');
const randomThemeName = themeSwitcher.generateRandomTheme();
themeSwitcher.applyTheme(randomThemeName);

console.log('\n--- Adding custom theme ---');
themeSwitcher.addTheme('custom', {
    primary: '#ff1493',
    secondary: '#00ced1',
    background: '#fffacd',
    text: '#2f4f4f',
    accent: '#ff69b4'
});
themeSwitcher.applyTheme('custom');

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeSwitcher;
}
