const compliments = [
    "You're doing amazing!",
    "You deserve a cupcake 🧁",
    "Your curiosity is inspiring!",
    "Great attention to detail!",
    "You have capybara-level calm. Respect."
];

document.getElementById('clickMeBtn').addEventListener('click', () => {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    document.getElementById('compliment').innerText = compliment;
    confetti(); // 🎉
});

document.getElementById('surpriseBtn').addEventListener('click', () => {
    alert("You’ve been virtually hugged by a capybara 🧸");
});
