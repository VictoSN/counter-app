const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");
const countLabel = document.getElementById("counter");
const startButton = document.getElementById("start")
const startCount = document.getElementById("startInput");
const confirm = document.getElementById("confirm");
const confirmStart = document.getElementById("confirmStart");

let count = 0;

const updateCount = () => {
    countLabel.textContent = count;
};

function enterCount() {
    const checkInput = parseInt(startInput.value);

    if(!isNaN(checkInput)) {
        count = checkInput;
        updateCount();
        startInput.style.display = "none";
        confirm.style.display = "none";
        startButton.style.display = "block";
        startInput.value = "";
    } else {
        alert("That is not an Integer.")
    }
}

increaseButton.addEventListener("click", () => {
    count++;
    updateCount();
});

decreaseButton.addEventListener("click", () => {
    count--;
    updateCount();
});

resetButton.addEventListener("click", () => {
    count = 0;
    confirmStart.style.display = "none";
    startButton.style.display = "block";
    startInput.value = "";
    updateCount();
});

startButton.addEventListener("click", () => {
    confirmStart.style.display = "block";
    startButton.style.display = "none";
    startInput.focus();
});

confirm.addEventListener("click", () => {
    enterCount();
});

startCount.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        enterCount();
    }
});