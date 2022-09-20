console.log("Assignment 6 script loaded")
//To load last saved text box data on page reload
document.getElementById('textBox').value = localStorage.getItem('autosave-data');

// Runs every 1 sec and checks if feature flag is ticked, and save data to localstorage if ticked
setInterval(function() {
    console.log(document.getElementById('textBox').value);
    if(document.getElementById('featureFlag').checked) {
        //saving to localstorage
        localStorage.setItem('autosave-data', document.getElementById('textBox').value);
    }
},1000)

//setInterval runs every n secs
//setTimeout runs after n sec and only once