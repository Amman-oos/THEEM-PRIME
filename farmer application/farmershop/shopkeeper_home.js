const tbody = document.getElementById("farmerData");

// Fetch farmer data from localStorage
const farmers = JSON.parse(localStorage.getItem("farmers") || "[]");

if(farmers.length === 0){
  tbody.innerHTML = `<tr><td colspan="6" style="text-align:center">No farmer data found</td></tr>`;
} else {
  farmers.forEach(f => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${f.name || "-"}</td>
      <td>${f.cropName || "-"}</td>
      <td>${f.quantity || "-"}</td>
      <td>${f.price || "-"}</td>
      td>${f.location || "-"}</td>
        <td>${f.date || "-"}</td>
    `;
    tbody.appendChild(tr);
  });
}
