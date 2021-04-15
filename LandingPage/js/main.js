const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    myName = document.getElementById('name'),
    focus = document.getElementById('focus');


// Show Time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    
    // Set AM or PM
   const amPm = hour => 12 ? 'PM' : 'AM';

   // 12hour format
   //hour = hour % 12 || 12;

   // Output time
   time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
   
   setTimeout(showTime, 1000);
}

// Add Zero before single digit numbers
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


// Background and Greeting

function setGreeting() {
    let hour = new Date().getHours();

    if(hour < 12){
        // Morning
        greeting.textContent = "Good Morning";
    } else if (hour < 18) {
        // aftenoon
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
        greeting.textContent = "Good Afternoon";
    } else if (hour < 24) {
        // Evening
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/365633/pexels-photo-365633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
        document.body.style.color = "var(--secondary-color)";
        greeting.textContent = "Good Evening";
    }
}

// Get name
function getName() {
    if(localStorage.getItem('name') === null){
        myName.textContent.placeholder = "Your Name";
    } else{
    myName.textContent = localStorage.getItem('name');
    }
}


// Run
showTime();
setGreeting();
getName();