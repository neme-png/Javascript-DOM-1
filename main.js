// Select all buttons and paragraphs
const buttons = document.querySelectorAll('button'); // NodeList of buttons
const paragraphs = document.querySelectorAll('p');   // NodeList of paragraphs

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color; // Return the generated color
}

// Select the specific button
const changeColorButton = document.querySelector('.b1');
const turnTextBold = document.querySelector('.b2');
const removeParagraph = document.querySelector('.b3');
// Variable to check the paragraph's state
let areParagraphsVisible = true;

// Add event listener to the button
changeColorButton.addEventListener('click', () => {
  paragraphs.forEach(paragraph => {
    paragraph.style.color = getRandomColor(); // Assign a random color
  });
});


// Make paragraphs bold
turnTextBold.addEventListener('click', () => {
    paragraphs.forEach(paragraph => {
        paragraph.style.fontWeight = 'bold';
      });
});

removeParagraph.addEventListener('click', () => {
    if (areParagraphsVisible) {
      paragraphs.forEach(paragraph => {
        paragraph.style.display = 'none';
      });
    } else {
      paragraphs.forEach(paragraph => {
        paragraph.style.display = 'block';
      });
    }
  
    areParagraphsVisible = !areParagraphsVisible;
  });
    
