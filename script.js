let userProgress = {
    career: null,
    friendships: 0,
    relaxation: 0
};

function makeChoice(choice) {
    let storyElement = document.getElementById('story');
    let feedbackElement = document.getElementById('feedback');

    if (choice === 1) {
        userProgress.career = 'Engineer';
        storyElement.innerHTML = "Your Sim starts a career as an engineer. They're excited, but now they’re super busy!";
        feedbackElement.innerHTML = "You have a job! But will it make you happy?";
    } else if (choice === 2) {
        userProgress.friendships++;
        storyElement.innerHTML = "Your Sim goes to the park and meets a new friend!";
        feedbackElement.innerHTML = "Friendship level +1! Will they become best friends?";
    } else if (choice === 3) {
        userProgress.relaxation++;
        storyElement.innerHTML = "Your Sim decides to watch TV and relax for a while.";
        feedbackElement.innerHTML = "Relaxation level +1! But too much TV could affect your Sim's health!";
    }

    // Give more choices based on progress
    setTimeout(function() {
        showNextChoices();
    }, 2000);
}

function showNextChoices() {
    let choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';

    if (userProgress.career && userProgress.friendships < 2) {
        choicesDiv.innerHTML += '<button onclick="makeChoice(2)">Make Another Friend</button>';
    }
    if (userProgress.relaxation < 2) {
        choicesDiv.innerHTML += '<button onclick="makeChoice(3)">Relax More</button>';
    }
    if (userProgress.career === 'Engineer' && userProgress.friendships > 1) {
        choicesDiv.innerHTML += '<button onclick="makeChoice(1)">Work Harder</button>';
    }
}
