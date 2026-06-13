const moddate = new Date(document.lastModified);
document.getElementById('modified-date').textContent = moddate.toLocaleString();

const mainnav = document.querySelector('nav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const subjects = [
  {
    id: "subject",
    name: "General inquiry",
  },

    {
    id: "subject",
    name: "Website suggestion",
  },

    {
    id: "subject",
    name: "Booking inquiry",
  },

    {
    id: "subject",
    name: "Complaint",
  },
];

function renderSections(subjects) {
    const div = document.querySelector("#subject");
    let rows = `<option value="" disabled selected>Please select a subject</option>`;
    for (const subject of subjects) {
        rows += 
        `
        <option value="${subject.id}">${subject.name}</option>
        
        `
    }
    div.innerHTML = rows;
}

renderSections(subjects);


document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("reviewCount");

    reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;

    reviewCount += 1;

    localStorage.setItem("reviewCount", reviewCount);

    console.log(`Total reviews completed: ${reviewCount}`);
    
});