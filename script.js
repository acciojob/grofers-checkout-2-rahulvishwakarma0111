//your code here
// Get all the elements with data-ns-test="prices"
const pricesElements = document.querySelectorAll('[data-ns-test="prices"]');

// Calculate the sum of all prices
let total = 0;
for (let i = 0; i < pricesElements.length; i++) {
  total += parseFloat(pricesElements[i].innerText);
}

// Create a new row for the total and add it to the table
const newRow = document.createElement('tr');
const totalCell = document.createElement('td');
totalCell.innerText = `Total: $${total.toFixed(2)}`;
newRow.appendChild(totalCell);
document.querySelector('table').appendChild(newRow);

// Set the data-ns-test attribute for the total cell
totalCell.setAttribute('data-ns-test', 'grandTotal');