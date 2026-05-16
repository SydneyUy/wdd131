const moddate = new Date(document.lastModified);
document.getElementById('modified-date').textContent = moddate.toLocaleDateString();

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', (event) => {
    event.preventDefault();
    const isOpen = mainnav.classList.toggle('show');
    hambutton.classList.toggle('show', isOpen);
});