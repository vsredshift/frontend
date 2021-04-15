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
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/449011/pexels-photo-449011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
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
        myName.textContent = "Your Name";
    } else{
    myName.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if(e.type === 'keypress') {
        if (e.which === 13 || e.keyCode === 13) {
        localStorage.setItem('name', e.target.innerText);        
        myName.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null){
        focus.textContent = "Your Plan";
    } else{
    focus.textContent = localStorage.getItem('focus');
    }
}


// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        if (e.which === 13 || e.keyCode === 13) {
        localStorage.setItem('focus', e.target.innerText);        
        focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Clear Field
function clearField(e) {
    e.target.innerText = '';
}


// Events
myName.addEventListener('keypress', setName);
myName.addEventListener('blur', setName);
myName.addEventListener('click', clearField);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', clearField);


// Run
showTime();
setGreeting();
getName();
getFocus();