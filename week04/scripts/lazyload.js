document.addEventListener('DOMContentLoaded', () => {
    const moddate = new Date(document.lastModified);
    const modifiedDateEl = document.getElementById('modified-date');
    if (modifiedDateEl) {
        modifiedDateEl.textContent = moddate.toLocaleString();
    }
});