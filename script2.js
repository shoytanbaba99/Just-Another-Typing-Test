// Get references to the HTML elements
const timerElement = document.querySelector(".timer");
const wpmElement = document.querySelector(".wpm");
const inputElement = document.querySelector("#input-text");
const restartButton = document.querySelector(".restartbtn");
const sentenceLayer = document.querySelector("#sentence-layer");

let timer = 0;
let isTypingStarted = false;
let interval;
let correctWords = 0;
let currentWordIndex = 0;
let typedWords = []; // To store typed words

// Predefined sample text
const sampleText = "lige ";
// Function to shuffle the words
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
}

// Function to get a random set of 100 words
function getRandomWords() {
	const allWords = sampleText.split(" "); // Split the text into words
	shuffleArray(allWords); // Shuffle the words
	const randomWords = allWords.slice(0, 100); // Pick the first 100 words
	return randomWords;
}

// Generate the random words for the test
let sampleWords = getRandomWords(); // Initialize with random 100 words

function updateSentenceLayer() {
	const sentenceHTML = sampleWords
		.map((word, index) => {
			let wordClass = "";

			if (index < currentWordIndex) {
				// Check if the typed word matches the expected word
				if (typedWords[index] === word) {
					wordClass = "correct"; // Green for correct
				} else {
					wordClass = "incorrect"; // Red for incorrect
				}
			} else if (index === currentWordIndex) {
				// Highlight the current word
				wordClass = "selected";
			}

			return `<span class="word ${wordClass}" id="word-${index}">${word}</span>`;
		})
		.join(" ");
	sentenceLayer.innerHTML = sentenceHTML;

	// Scroll the container to focus on the current word
	const currentWordElement = document.getElementById(`word-${currentWordIndex}`);
	if (currentWordElement) {
		currentWordElement.scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	}
}

// Start timer function
function startTimer() {
	interval = setInterval(() => {
		timer++;
		timerElement.textContent = `Timer: ${timer}s`;
		calculateWPM();
	}, 1000);
}

// Calculate WPM function
function calculateWPM() {
	if (timer > 0) {
		const wpm = Math.floor((correctWords / timer) * 60);
		wpmElement.textContent = `WPM: ${wpm}`;
	}
}

// Handle input change
inputElement.addEventListener("keydown", (e) => {
	if (e.key === " ") {
		e.preventDefault(); // Prevent default space behavior

		// Trim and save the typed word
		typedWord = inputElement.value.trim();

		// Start the timer on first input
		if (!isTypingStarted && typedWord.length > 0) {
			startTimer();
			isTypingStarted = true;
		}

		// Save the typed word to the array
		typedWords[currentWordIndex] = typedWord;

		// Check if the typed word is correct
		if (typedWord === sampleWords[currentWordIndex]) {
			correctWords++;
		}

		currentWordIndex++; // Move to the next word
		typedWord = "";
		inputElement.value = ""; // Clear the input field

		// Update the sentence layer with current typed words
		updateSentenceLayer();

		// If all words are typed, stop the timer
		if (currentWordIndex === sampleWords.length) {
			clearInterval(interval);
			wpmElement.textContent = `WPM: ${Math.floor((correctWords / timer) * 60)}`;
			alert("Typing test completed!");
		}
	}
});

// Restart the test
restartButton.addEventListener("click", () => {
	// Regenerate the random words and reset the game
	sampleWords = getRandomWords();
	timer = 0;
	correctWords = 0;
	currentWordIndex = 0;
	isTypingStarted = false;
	typedWords = []; // Reset typed words
	clearInterval(interval);
	timerElement.textContent = "Timer: 0";
	wpmElement.textContent = "WPM: 0";
	inputElement.value = "";
	updateSentenceLayer();
});

// Initialize the sentence layer on load
updateSentenceLayer();
