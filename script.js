const typingGround = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const showSentence = document.querySelector('#show_sentence');

let startTime, endTime, totalTimeTaken;
const sentences = [
    'The quick brown fox jumps over the lazy dog 1',
    'The quick brown fox jumps over the lazy dog 2',
    'The quick brown fox jumps over the lazy dog 3'
];

const calculateTypingSpeed = (time_taken) => {
    let totalWords = typingGround.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(/\s+/).length;

    if (actualWords !== 0) {
        let typingSpeed = (actualWords / time_taken) * 60;
        typingSpeed = Math.round(typingSpeed);
        score.innerHTML = `Your typing speed is ${typingSpeed} words per minute. You wrote ${actualWords} words in ${time_taken.toFixed(2)} seconds.`;
    } else {
        score.innerHTML = `Your typing speed is 0 words per minute. Time taken: ${time_taken.toFixed(2)} seconds.`;
    }
}

const endTypingTest = () => {
    btn.innerText = "Start";

    endTime = new Date().getTime();
    totalTimeTaken = (endTime - startTime) / 1000;

    calculateTypingSpeed(totalTimeTaken);

    showSentence.innerHTML = "";
    typingGround.value = "";
}

const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    showSentence.innerHTML = sentences[randomNumber];
    typingGround.value = ''; // Clear previous text
    typingGround.removeAttribute('disabled');
    typingGround.focus();

    startTime = new Date().getTime();
    btn.innerText = "Done";
};

btn.addEventListener('click', () => {
    if (btn.innerText.toLowerCase() === "start") {
        startTyping();
    } else if (btn.innerText.toLowerCase() === "done") {
        typingGround.setAttribute('disabled', 'true');
        endTypingTest();
    }
});
