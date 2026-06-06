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
        <option value="${product.id}">${product.name}</option>
        
        `
    }
    div.innerHTML = rows;
}

renderSections(products);


document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the current review count from localStorage (returns a string or null)
    let reviewCount = localStorage.getItem("reviewCount");

    // 2. Convert to an integer. If it doesn't exist yet, default to 0.
    reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;

    // 3. Increment the counter by 1
    reviewCount += 1;

    // 4. Save the updated count back to localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Optional: Log it to the console or display it on the page to verify it works
    console.log(`Total reviews completed: ${reviewCount}`);
    
    // If you have an element to show the total, you could do:
    // document.querySelector("#counter-display").textContent = reviewCount;
});
