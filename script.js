//your code here
const priceElements = document.querySelectorAll('[data-ns-test="price"]');

// Check the number of price elements
if (priceElements.length === 0) {
  console.error('No price elements found');
} else {
  console.log(`Found ${priceElements.length} price elements`);

  // Calculate the total price
  let totalPrice = 0;
  priceElements.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent);
  });

  // Add the total price to the table
  const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');
  grandTotalElement.textContent = totalPrice.toFixed(2);

  // Check if the grand total matches the sum of prices
  const expectedGrandTotal = priceElements.length > 0 ? totalPrice.toFixed(2) : '';
  if (grandTotalElement.textContent !== expectedGrandTotal) {
    console.error(`Grand total (${grandTotalElement.textContent}) does not match sum of prices (${expectedGrandTotal})`);
  } else {
    console.log(`Grand total (${grandTotalElement.textContent}) matches sum of prices (${expectedGrandTotal})`);
  }
}
