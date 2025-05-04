document.addEventListener('DOMContentLoaded', function() {
    const countersContainer = document.getElementById("countersContainer");         // set the element to a const
    
    function createCounterHTML(counterId) {
        const counterLabel = counterId === 1 ? "Counter" : `Counter ${counterId}`;  // add number to end of counter
        return `
        <div class="counter-wrapper" data-id="${counterId}">
            <div class="topBar">
                <button class="topButtons remove" title="Remove Counter">-</button>
                <input class="myHeader" type="text" placeholder="${counterLabel}" autocomplete="off">
                <button class="topButtons add" title="Add Counter">+</button>
            </div>
            <span class="counter">0</span><br>
            <div class="controlButtons">
                <button class="buttons decrease" title="Decrease">-</button>
                <button class="buttons reset" title="Reset">Reset</button>
                <button class="buttons increase" title="Increase">+</button>
            </div>
            <button class="buttons start" title="Starting Number">Starting Number</button>
            <div class="confirmStart">
                <input class="startInput" type="number" placeholder="Start Number">
                <button class="buttons confirm" title="Confirm">OK</button>
            </div>
        </div>
        `;
    }

    addNewCounter();    // for the first instance of the the counter
    
    function addNewCounter() {
        const counterId = document.querySelectorAll('.counter-wrapper').length + 1; // set the next container id
        const counterHTML = createCounterHTML(counterId);                           // create new counter
        countersContainer.insertAdjacentHTML('beforeend', counterHTML);             // add new counter to container
        
        const newCounter = countersContainer.lastElementChild;                      // set the last element as the new counter
        setupCounterEvents(newCounter);                                             // setup the event listeners
    }
    
    function removeCounter(counterElement) {
        if (document.querySelectorAll('.counter-wrapper').length > 1) {             // make sure there is at least 1 counter left
            counterElement.remove();                                                        // remove the counter
            document.querySelectorAll('.counter-wrapper').forEach((counter, index) => {     // renumber the rest in for loop
                counter.setAttribute('data-id', index + 1);
                if(index + 1 === 1) {
                    counter.querySelector('.myHeader').placeholder = `Counter`;             // if 1 counter, no need to add
                } else {
                    counter.querySelector('.myHeader').placeholder = `Counter ${index + 1}`;// add number to end of counter
                }
            });
        } else {
            alert("You cannot remove the last counter.");
        }
    }
    
    function setupCounterEvents(counterElement) {
        const decreaseButton = counterElement.querySelector('.decrease');
        const resetButton = counterElement.querySelector('.reset');
        const increaseButton = counterElement.querySelector('.increase');
        const countLabel = counterElement.querySelector('.counter');
        const startButton = counterElement.querySelector('.start');
        const startInput = counterElement.querySelector('.startInput');
        const confirmButton = counterElement.querySelector('.confirm');
        const confirmStart = counterElement.querySelector('.confirmStart');
        const addButton = counterElement.querySelector('.add');
        const removeButton = counterElement.querySelector('.remove');
        
        let count = 0;
        
        const updateCount = () => {
            countLabel.textContent = count;
        };
        
        const enterCount = () => {
            const checkInput = parseInt(startInput.value);
            if (!isNaN(checkInput)) {                       // check if invalid input
                count = checkInput;
                updateCount();                              // update the count
                confirmStart.style.display = "none";        // hide/unhide
                startButton.style.display = "block";
                startInput.value = "";                      // clear the textbox
            } else {
                alert("Insert an Integer.");
            }
        };
        
        increaseButton.addEventListener('click', () => {
            count++;
            updateCount();
        });
        
        decreaseButton.addEventListener('click', () => {
            count--;
            updateCount();
        });
        
        resetButton.addEventListener('click', () => {
            count = 0;
            confirmStart.style.display = "none";
            startButton.style.display = "block";
            startInput.value = "";
            updateCount();
        });
        
        startButton.addEventListener('click', () => {
            confirmStart.style.display = "block";
            startButton.style.display = "none";
            startInput.focus();                             // move the mouse/focus to the textbox
        });
        
        confirmButton.addEventListener('click', enterCount);
        
        startInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') enterCount();
        });
        
        addButton.addEventListener('click', addNewCounter);
        
        removeButton.addEventListener('click', () => {
            removeCounter(counterElement);
        });
    }
});