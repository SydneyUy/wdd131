const moddate = new Date(document.lastModified);
document.getElementById('modified-date').textContent = moddate.toLocaleDateString();

const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});