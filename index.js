function fetchRandomAdvice() {
  return fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      return {
        id: data.slip.id,
        advice: data.slip.advice
      };
    })
    .catch(error => {
      console.error('Error fetching advice:', error);
      return { id: null, advice: 'An error occurred while fetching advice.' };
    });
}

function getRandomAdvice() {
  const adviceText = document.getElementById('advice-text');
  const adviceIdElement = document.getElementById('advice-id');

  fetchRandomAdvice()
    .then(({ id, advice }) => {
      adviceIdElement.textContent = `ADVICE #${id}`;
      adviceText.textContent = `"${advice}"`;
    });
}

// Attach a click event handler to the SVG element
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', getRandomAdvice);

// Call the function initially to display advice on page load
getRandomAdvice();
