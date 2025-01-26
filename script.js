document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Create an object to store the new entry
    const data = { name, email };
    
    // Get the current list of stored data from localStorage
    let existingData = JSON.parse(localStorage.getItem('userData'));
    
    // Debugging step: Check what type of data we are getting from localStorage
    console.log("existingData:", existingData);
    
    // If there's no data or it's not an array, initialize it as an empty array
    if (!Array.isArray(existingData)) {
      existingData = [];
    }
    
    // Add the new data to the list
    existingData.push(data);
    
    // Store the updated list in localStorage
    localStorage.setItem('userData', JSON.stringify(existingData));
    
    // Display the stored data
    displayStoredData();
    
    // Clear the form
    document.getElementById('dataForm').reset();
  });
  
  function displayStoredData() {
    // Get the stored data from localStorage
    const storedData = JSON.parse(localStorage.getItem('userData')) || [];
    
    // Get the div where the data will be displayed
    const storedDataDiv = document.getElementById('storedData');
    
    // Clear the current displayed data
    storedDataDiv.innerHTML = '';
    
    // Check if there is any stored data
    if (storedData.length > 0) {
      // Loop through each item in the stored data and display it
      storedData.forEach(function(data, index) {
        storedDataDiv.innerHTML += `
          <p><strong>Entry ${index + 1}:</strong></p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <hr>
        `;
      });
    } else {
      storedDataDiv.innerHTML = '<p>No data available</p>';
    }
  }
  
  // Display stored data on page load
  window.onload = displayStoredData;
  