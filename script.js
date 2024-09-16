// Declare variables of different data types
let title = "Chart.js Example"; // string
let version = 1.0; // number
let isActive = true; // boolean
console.log(title);
// Simple operation functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}

// Function to update the output
function updateOutput(result) {
  document.getElementById("output").textContent = `Result: ${result}`;
}

// Event listeners for buttons
document.getElementById("addBtn").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = add(num1, num2);
  updateOutput(result);
  console.log(num1);
  console.log(num2);
  console.log(`Sum: ${result}`);
});

document.getElementById("subtractBtn").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = subtract(num1, num2);
  updateOutput(result);
  console.log(num1);
  console.log(num2);
  console.log(`Difference: ${result}`);
});

document.getElementById("multiplyBtn").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = multiply(num1, num2);
  updateOutput(result);
  console.log(num1);
  console.log(num2);
  console.log(`Product: ${result}`);
});

document.getElementById("divideBtn").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = divide(num1, num2);
  updateOutput(result);
  console.log(num1);
  console.log(num2);
  console.log(`Division: ${result}`);
});

// Initialize Chart.js chart
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar", // Bar chart type
  data: {
    labels: ["January", "February", "March", "April", "May", "June"], // X-axis labels
    datasets: [
      {
        label: "Monthly Sales",
        data: [10, 19, 3, 5, 2, 3], // Y-axis data
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
