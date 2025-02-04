const messages = [
    "Ты уверена?",
    "Ты точно уверена??",
    "Жаным, ну пожалуйста...",
    "Подумай еще раз!",
    "Если ты скажешь нет, я буду грустить...",
    "Мне будет очень грустно...",
    "Мне будет очень очень очень грустно...",
    "Ну, окей, я перестану спрашивать...",
    "Просто шучу, скажи ДА пожалуйста! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
