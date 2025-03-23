const compliments = [
    "You're doing amazing!",
    "You deserve a cupcake 🧁",
    "Great attention to detail!",
    "Capybaras would be proud of you.",
    "Your curiosity is inspiring!"
];

document.getElementById('clickMeBtn').addEventListener('click', () => {
    const random = Math.floor(Math.random() * compliments.length);
    document.getElementById('compliment').innerText = compliments[random];
});
