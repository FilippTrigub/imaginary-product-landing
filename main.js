const app = document.createElement('div');
app.innerHTML = '<h1>NovaSphere landing page rebuilt in JS</h1>';
document.body.appendChild(app);

const circle = document.createElement('div');
circle.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; height: 200px; background-color: red; border-radius: 50%;';
document.body.appendChild(circle);
