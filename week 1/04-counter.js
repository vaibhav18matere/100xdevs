// create a counter in JS which counts from 30 to 0

function countdown() {
     let count = 30;

     const countdownInterval = setInterval(() => {
          console.log(count);

          count--;

          if (count < 0) {
               clearInterval(countdownInterval);
               console.log("Countdown Finished!");
          }
     }, 1000);
}

countdown();
