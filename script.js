function toggleMode() {
    const currentMode = document.documentElement.style.getPropertyValue('--navbar-footer-bg-color');

    if (!currentMode || currentMode === 'var(--background-color-light)') {
        document.documentElement.style.setProperty('--navbar-footer-bg-color', 'var(--background-color-dark)');
        document.documentElement.style.setProperty('--text-color', 'var(--text-color-dark)');
        document.body.style.backgroundColor = "#333";  // Adjust if you want the body background to change too
    } else {
        document.documentElement.style.setProperty('--navbar-footer-bg-color', 'var(--background-color-light)');
        document.documentElement.style.setProperty('--text-color', 'var(--text-color-light)');
        document.body.style.backgroundColor = "white";  // Adjust if you want the body background to change too
    }
}

// Event listener for the mode toggle button
document.getElementById('mode-toggle').addEventListener('click', toggleMode);