// roep de knop aan en Voeg eventlisteners toe

const startStopKnop = document.getElementById('button');
startStopKnop.addEventListener('click', actions);

// roep de h1 en de lijst(div) aan
const verstrekenTijd = document.getElementById('timeBetween');
const tijdenLijst = document.getElementById('tijdenLijst');

var startTime;
var stopTime;
let myTime = [];

// pas de status van de knop aan doormiddel van een functie
function statusKnoppen() {
    if (startStopKnop.getAttribute('value') === 'start') {
        startStopKnop.setAttribute('value', 'stop');
        startStopKnop.innerText = 'Stop';
    } else {
        startStopKnop.setAttribute('value', 'start');
        startStopKnop.innerText = 'Start';
    }
}

function storeTime(tijd) {
    if (startStopKnop.getAttribute('value') === 'start') {
        startTime = tijd;
    } else {
        stopTime = tijd;
    }
}