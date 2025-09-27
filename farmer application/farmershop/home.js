let crops = [
  { name: "Tomato", qty: 50, price: 40, location: "Farm A", date: "2025-09-26", category: "Vegetable" },
  { name: "Potato", qty: 100, price: 25, location: "Farm B", date: "2025-09-25", category: "Vegetable" },
  { name: "Apple", qty: 20, price: 120, location: "Farm C", date: "2025-09-24", category: "Fruit" },
  { name: "Banana", qty: 50, price: 50, location: "Farm D", date: "2025-09-26", category: "Fruit" }
];

function renderCrops(list) {
  const container = document.getElementById("cropContainer");
  container.innerHTML = "";
  list.forEach(c => {
    container.innerHTML += `
      <div class="crop-card">
        <h3>${c.name}</h3>
        <p>Qty: ${c.qty} kg</p>
        <p>Price: ₹${c.price}</p>
        <p>Location: ${c.location}</p>
        <p>Date: ${c.date}</p>
        <button onclick="addToCart('${c.name}')">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(name) {
  alert(name + " added to cart!");
}

function searchCrops() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = crops.filter(c => c.name.toLowerCase().includes(query));
  renderCrops(filtered);
}

function filterCategory(cat) {
  if (cat === "All") {
    renderCrops(crops);
  } else {
    const filtered = crops.filter(c => c.category === cat);
    renderCrops(filtered);
  }
}

renderCrops(crops);
