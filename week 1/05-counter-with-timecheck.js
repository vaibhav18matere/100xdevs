//  how can we calculate time it takes between setTimeout call andinside  function actually running?


// Record and log the start time before setInterval
var startTime = new Date().getTime();
// console.log('Start Time:', startTime);

function greet() {
     // Record and log the end time when reach to setInterval
     var endTime = new Date().getTime();
     // console.log('End Time:', endTime);

     var elapsedTime = endTime - startTime;
     console.log('time difference:', elapsedTime, 'milliseconds');

     console.log("Hello Vaibhav");
}

setTimeout(greet, 2000);
// the function will execute after 2 seconds

