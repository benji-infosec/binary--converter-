// Define the base-2 place values for an 8-bit byte (from 128 down to 1)
const powers = [128, 64, 32, 16, 8, 4, 2, 1];

// Grab elements from the HTML document
const container = document.getElementById('bitsContainer');
const output = document.getElementById('decimalOutput');

// Initial state: all 8 bits set to 0
let bitValues = [0, 0, 0, 0, 0, 0, 0, 0];

// Function to dynamically render the bit buttons onto the webpage
function renderBits() {
  container.innerHTML = ''; // Clear container before re-rendering
  
  powers.forEach((power, index) => {
    const box = document.createElement('div');
    box.className = 'bit-box';
    
    // Build the HTML structure for each individual bit column
    box.innerHTML = `
            <div style="font-size: 12px; margin-bottom: 5px; color: #666;">2<sup>${7 - index}</sup></div>
            <button class="bit-btn ${bitValues[index] === 1 ? 'active' : ''}" onclick="toggleBit(${index})">${bitValues[index]}</button>
            <div style="font-size: 12px; margin-top: 5px;">${power}</div>
        `;
    container.appendChild(box);
  });
  
  calculateDecimal();
}

// Function triggered when a user clicks a bit button
function toggleBit(index) {
  // Flip 0 to 1, or 1 to 0
  bitValues[index] = bitValues[index] === 0 ? 1 : 0;
  renderBits(); // Refresh the display
}

// Function to compute the total decimal value using array reduction
function calculateDecimal() {
  let total = bitValues.reduce((sum, val, idx) => sum + (val * powers[idx]), 0);
  output.textContent = total;
}

// Run the render function when the script loads for the first time
renderBits();