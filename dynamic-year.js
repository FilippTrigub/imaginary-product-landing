document.addEventListener('DOMContentLoaded', () => {
    const yearTarget = document.getElementById('current-year');
    if (yearTarget) {
        yearTarget.textContent = new Date().getFullYear();
    }
});
