const moddate = new Date(document.lastModified);
document.getElementById('modified-date').textContent = moddate.toLocaleString();



const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function renderSections(products) {
    const div = document.querySelector("#product");
    let rows = "";
    for (const product of products) {
        rows += 
        `
        <option value="${product.name}">${product.name}</option>
        
        `
    }
    div.innerHTML = rows;
}

renderSections(products);