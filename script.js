

// Event listener for the button click
document.getElementById('btn').addEventListener('click', () => {
  // Get the input value
  const inputValue = document.getElementById('ip').value;

  // Call the result function with the input val
	 new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputValue);
    }, 2000);
  });
    .then(number => {
      // Update the output div with the result
      document.getElementById('output').textContent = `Result: ${number}`;
      return number; // Pass the number to the next then block
    })
    .then(number => {
      // Multiply the number by 2
      const multipliedNumber = number * 2;
      // Return a promise that resolves after 1 second with the multiplied number
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(multipliedNumber);
        }, 1000);
      });
    })
    .then(number => {
      // Subtract 3 from the number
      const subtractedNumber = number - 3;
      // Return a promise that resolves after 1 second with the subtracted number
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(subtractedNumber);
        }, 1000);
      });
    })
    .then(number => {
      // Divide the number by 2
      const dividedNumber = number / 2;
      // Return a promise that resolves after 1 second with the divided number
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(dividedNumber);
        }, 1000);
      });
    })
    .then(number => {
      // Add 10 to the number
      const finalResult = number + 10;
      // Update the output div with the final result
      document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    })
    .catch(error => {
      // Handle any errors that occur during the promise chain
      console.error('Error:', error);
    });
});
