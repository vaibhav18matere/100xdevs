function logCurrentTime() {
     let now = new Date();
     let hours = now.getHours().toString().padStart(2, '0');
     let minutes = now.getMinutes().toString().padStart(2, '0');
     let seconds = now.getSeconds().toString().padStart(2, '0');

     const currentTime = hours + ':' + minutes + ':' + seconds;
     console.log(currentTime);
}

logCurrentTime();

//   .padStart(2, '0');

// it's used to make sure that hours, minutes, and seconds are always represented 
// with two digits, even if they are less than 10. 
// For example, if the current minutes are 5, .padStart(2, '0') will transform it into '05'. 