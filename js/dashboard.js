// Dummy medication stock data
const stockData = {
    "Aspirin": "In Stock",
    "Ibuprofen": "Out of Stock",
    "Paracetamol": "In Stock",
    "Amoxicillin": "In Stock"
  };
  
  // Handle Medication Search
  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById('searchQuery').value.toLowerCase();
    const results = [];
  
    // Search through the stock data
    for (let medication in stockData) {
      if (medication.toLowerCase().includes(searchQuery)) {
        results.push(medication);
      }
    }
  
    // Display search results
    const resultContainer = document.getElementById('medicationResults');
    resultContainer.innerHTML = results.length ? results.map(item => `<p>${item}: ${stockData[item]}</p>`).join('') : `<p>No medications found.</p>`;
  });
  
  // Display Medication Stock Status
  window.onload = function() {
    const stockStatusContainer = document.getElementById('stockStatus');
    let statusText = "Loading stock information...";
  
    // Simulate fetching stock data with a delay
    setTimeout(() => {
      statusText = "";
      for (let medication in stockData) {
        statusText += `<p>${medication}: ${stockData[medication]}</p>`;
      }
      stockStatusContainer.innerHTML = statusText;
    }, 2000); // 2 seconds delay
  };

  // Simulated dispensary data
const dispensaries = [
    { name: "Pharmacy A", location: "Downtown", stock: { "Aspirin": 5, "Ibuprofen": 0 } },
    { name: "Pharmacy B", location: "Uptown", stock: { "Aspirin": 2, "Ibuprofen": 10 } },
    { name: "Pharmacy C", location: "Eastside", stock: { "Aspirin": 0, "Ibuprofen": 3 } }
  ];
  
  // Check stock and suggest alternatives
  function findAlternativeDispensary(medication) {
    const availableDispensaries = dispensaries.filter(dispensary => dispensary.stock[medication] > 0);
  
    if (availableDispensaries.length > 0) {
      return availableDispensaries.map(d => `${d.name} in ${d.location}`);
    } else {
      return ["No alternatives available at this time"];
    }
  }
  
  // Example Usage
  console.log(findAlternativeDispensary("Ibuprofen"));

  // Dummy function for generating notifications
function sendNotification(message) {
    const notificationContainer = document.getElementById('notifications');
    notificationContainer.innerHTML += `<p>${message}</p>`;
  }
  
  // Example of sending a refill reminder
  sendNotification("Reminder: Your prescription for Ibuprofen needs to be refilled soon!");

  // Handle prescription upload and notification
document.getElementById('uploadPrescriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const file = document.getElementById('prescriptionFile').files[0];
    const collectionDate = document.getElementById('collectionDate').value;
  
    if (file && collectionDate) {
      document.getElementById('uploadStatus').innerHTML = `Prescription uploaded. Please collect your medication by ${collectionDate}.`;
      sendNotification(`Your prescription has been uploaded. Please collect by ${collectionDate}.`);
    }
  });
  
  