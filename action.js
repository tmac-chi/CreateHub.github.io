const writing = document.getElementById("writing");
const drawing = document.getElementById("drawing");
const nothing = document.getElementById("nothing");
const msg = document.getElementById("msg");

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

nothing.addEventListener("click", () => {
    const text = `GET YOUR ASS UP YOU LAZY PIECE OF SHIT!!! #${random(hashtag)}`;
    nothing.remove();
});

writing.addEventListener("click", () => {
    const text =`You are ${random(traveler)} writing to your ${random(receiver)} about your adventure: you discovered ${random(danger)} ${random(discovery)} ${random(time)} ${random(locations)}.`;
    msg.textContent = text;
    nothing?.remove();
});

drawing.addEventListener("click", () => {
    msg.innerHTML= `
        <h3>Alright, choose your challenge level, punk:</h3>
        <button id="easy">Err Idk man</button>
        <button id="medium">The fck you mean?</button>
        <button id="difficult">I'm calling mom. MOM!</button>
        <button id="ultra">Bring it on BITCHES</button>
        `;
    
    const easy = document.getElementById("easy");
    easy.addEventListener("click", () => {
        const text = `Draw ${random(traveler)}. In stick figure if you arereally that big of a loser. #${random(hashtag)}`;
        msg.textContent = text;
    });

    const medium = document.getElementById("medium");
    medium.addEventListener("click", () => {
        const text = `Draw ${random(traveler)} ${random(time)}. Don't forget to colour! #${random(hashtag)}`;
        msg.textContent = text;
    });

    const difficult = document.getElementById("difficult");
    difficult.addEventListener("click", () => {
        const text = `Draw ${random(traveler)} ${random(time)} ${random(locations)}. Make it insteresting. #${random(hashtag)}`;
        msg.textContent = text;
    });

    const ultra = document.getElementById("ultra");
    ultra.addEventListener("click", () => {
        const text = `Good. Now you are ${random(painter)} reincernated. You are commisioned by ${random(company)} to draw a masterpiece of ${random(traveler)} ${random(locations)}. The punishment for failing this job is ${random(punish)}. Good luck.`;
        msg.textContent = text;
    });
});