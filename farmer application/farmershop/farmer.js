let crops = [];

function addCrop() {
  const name = document.getElementById("cropName").value;
  const qty = document.getElementById("qty").value;
  const price = document.getElementById("price").value;
  const location = document.getElementById("location").value;
  const date = document.getElementById("date").value;

  if (name && qty && price && location && date) {
    crops.push({ name, qty, price, location, date });
    renderTable();
    document.getElementById("cropName").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
    document.getElementById("location").value = "";
    document.getElementById("date").value = "";
  }
}

function renderTable() {
  const table = document.getElementById("cropTable");
  table.innerHTML = `
    <tr>
      <th>Crop</th>
      <th>Qty (kg)</th>
      <th>Price</th>
      <th>Location</th>
      <th>Date</th>
      <th>Action</th>
    </tr>
  `;
  crops.forEach((c, index) => {
    table.innerHTML += `
      <tr>
        <td>${c.name}</td>
        <td>${c.qty}</td>
        <td>₹${c.price}</td>
        <td>${c.location}</td>
        <td>${c.date}</td>
        <td><button onclick="deleteCrop(${index})">Delete</button></td>
      </tr>
    `;
  });
}

function deleteCrop(index) {
  crops.splice(index, 1);
  renderTable();
}
