// Function to create a promise that resolves after a specified time with a given value
function delayPromise(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Event listener for the button click
document.getElementById('btn').addEventListener('click', () => {
  // Get the input value
  const inputValue = parseInt(document.getElementById('ip').value);

  // Create a promise that resolves after 2 seconds with the input value
  delayPromise(inputValue, 2000)
    .then(result => {
      // Print the result in the output div
      document.getElementById('output').textContent = `Result: ${result}`;
      // Chain a second promise to multiply the number by 2
      return delayPromise(result * 2, 1000);
    })
    .then(result => {
      // Print the result in the output div
      document.getElementById('output').textContent = `Result: ${result}`;
      // Chain a third promise to subtract 3 from the number
      return delayPromise(result - 3, 1000);
    })
    .then(result => {
      // Print the result in the output div
      document.getElementById('output').textContent = `Result: ${result}`;
      // Chain a fourth promise to divide the number by 2
      return delayPromise(result / 2, 1000);
    })
    .then(result => {
      // Print the result in the output div
      document.getElementById('output').textContent = `Result: ${result}`;
      // Chain a fifth promise to add 10 to the number
      return delayPromise(result + 10, 1000);
    })
    .then(finalResult => {
      // Update the output div with the final result
      document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    })
    .catch(error => {
      // Handle any errors that occur during the promise chain
      console.error('Error:', error);
    });
});
