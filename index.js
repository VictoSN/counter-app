const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");
const countLabel = document.getElementById("counter");
const startButton = document.getElementById("start")
const startCount = document.getElementById("startInput");

let count = 0;

window.onload = () => {
    startCount.value = "";
};

const updateCount = () => {
    countLabel.textContent = count;
};

increaseButton.onclick = () => {
    count++;
    updateCount();
};

decreaseButton.onclick = () => {
    count--;
    updateCount();
};

resetButton.onclick = () => {
    count = 0;
    startInput.style.display = "none";
    startButton.style.display = "block";
    startCount.value = "";
    updateCount();
};

startButton.onclick = () => {
    startInput.style.display = "block";
    startButton.style.display = "none";
}

startCount.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        const checkInput = parseInt(startInput.value);

        if(!isNaN(checkInput)) {
            count = checkInput;
            updateCount();
            startInput.style.display = "none";
            startButton.style.display = "block";
            startInput.value = "";
        } else {
            alert("That is not an Integer.")
        }
    }
});