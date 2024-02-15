// const submitButton = document.querySelector('#submit')
// async function getMessage()
// {
//     console.log("clicked")
//     try{

//     } catch{

//     }
// }

// submitButton.addEventListener('click', getMessage)


// function submitInput() {
//     // Get the user input
//     const userInput = document.getElementById('userInput').value;

//     // Check if the user input is not empty
//     if (userInput.trim() !== '') {
//         // Hide the middle section
//         const middleSection = document.querySelector('.middle-section');
//         middleSection.style.display = 'none';

//         // Display the user input
//         displayMessage('user', userInput);

//         // Simulate bot response (replace this with your actual bot logic)
//         setTimeout(() => {
//             displayMessage('bot', 'This is a bot response.'); // Replace with your actual response
//         }, 1000); // Simulating a delay for the bot response (1 second in this example)
//     }
// }

// function displayMessage(sender, message) {
//     // Create a new message element
//     const messageElement = document.createElement('p');
//     messageElement.textContent = message;

//     // Add a class based on the sender (user or bot)
//     messageElement.classList.add(sender);

//     // Append the message to the output section
//     const outputSection = document.getElementById('output');
//     outputSection.appendChild(messageElement);
// }


// function submitInput() {
//     // Get the user input
//     const userInput = document.getElementById('userInput').value;

//     // Check if the user input is not empty
//     if (userInput.trim() !== '') {
//         // Hide the middle section
//         const middleSection = document.querySelector('.middle-section');
//         middleSection.style.display = 'none';

//         // Display the user input on the right side
//         displayMessage('user', userInput, 'right');

//         // Simulate bot response (replace this with your actual bot logic)
//         setTimeout(() => {
//             // Display the bot response on the left side
//             displayMessage('bot', 'This is a bot response.', 'left'); // Replace with your actual response
//         }, 1000); // Simulating a delay for the bot response (1 second in this example)
//     }
// }

// function displayMessage(sender, message, position) {
//     // Create a new message element
//     const messageElement = document.createElement('p');
//     messageElement.textContent = message;

//     // Add a class based on the sender (user or bot) and position (left or right)
//     messageElement.classList.add(sender, position);

//     // Append the message to the output section
//     const outputSection = document.getElementById('output');
//     outputSection.appendChild(messageElement);
// }


function submitInput() {
    // Get the user input
    const userInput = document.getElementById('userInput').value;

    // Check if the user input is not empty
    if (userInput.trim() !== '') {

        // Hide the middle section
        const middleSection = document.querySelector('.middle-section');
        middleSection.style.display = 'none';

        // Display the user input on top
        displayMessage('user', userInput, 'right');

        // Simulate bot response (replace this with your actual bot logic)
        setTimeout(() => {
            // Display the bot response below the user input
            displayMessage('bot', 'This is a bot response.', 'left'); // Replace with your actual response
        }, 1000); // Simulating a delay for the bot response (1 second in this example)

        // Clear the user input
        document.getElementById('userInput').value = '';
    }
}

function displayMessage(sender, message, position) {
    // Create a new message element
    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    // Add a class based on the sender (user or bot) and position (left or right)
    messageElement.classList.add(sender, position);

    // Append the message to the output section
    const outputSection = document.getElementById('output');
    outputSection.appendChild(messageElement);
}



// function submitInput() {
//     // Get the user input
//     const userInput = document.getElementById('userInput').value;

//     // Check if the user input is not empty
//     if (userInput.trim() !== '') {

//         // Hide the middle section
//         const middleSection = document.querySelector('.middle-section');
//         middleSection.style.display = 'none';

//         // Display the user input on top
//         displayMessage('user', userInput, 'right');

//         // Simulate bot response (replace this with your actual bot logic)
//         setTimeout(() => {
//             // Display the bot response below the user input
//             displayMessage('bot', 'This is a bot response.', 'left'); // Replace with your actual response

//             // After displaying the messages, scroll to the bottom of the chat
//             scrollToBottom();
//         }, 1000); // Simulating a delay for the bot response (1 second in this example)

//         // Clear the user input
//         document.getElementById('userInput').value = '';
//     }
// }

// function displayMessage(sender, message, position) {
//     // Create a new message element
//     const messageElement = document.createElement('p');
//     messageElement.textContent = message;

//     // Add a class based on the sender (user or bot) and position (left or right)
//     messageElement.classList.add(sender, position);

//     // Append the message to the output section
//     const outputSection = document.getElementById('output');
//     outputSection.appendChild(messageElement);
// }

// function scrollToBottom() {
//     // Scroll to the bottom of the chat
//     const outputSection = document.getElementById('output');
//     outputSection.scrollTop = outputSection.scrollHeight;
// }
