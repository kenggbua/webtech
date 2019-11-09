let el = document.querySelector("#timertext");
let sw2 = new Stopwatch2(el);

// click events
document.querySelector("#startBtn").addEventListener("click", () => sw2.start());
document.querySelector("#stopBtn").addEventListener("click", () => sw2.stop());
document.querySelector("#resetBtn").addEventListener("click", () => sw2.reset());

// TODO: create custom events for key presses here
//const startEvent;
//const stopEvent;
//const resetEvent;
//const plusEvent;
//const minusEvent;

// TODO: add listeners for custom events to 'el'

// listen for keyboard input
document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        if (key === 's') {
                sw2.start();
        }
        else if (key === 't') {
                sw2.stop()
        }
        else if (key === 'r') {
                 sw2.reset()
        }
        else if (key === "+") {
            sw2.plusTime(5000);
        }
        else if (key === "-") {
            sw2.minusTime(5000);
        }
});
