function Opdracht(vak, beschrijving) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.beschrijving = beschrijving;
}

// OPDRACHT 1.
// Maak de Cijfer functie af.

// opdracht is een object die met behulp van de bovenstaande
// functie is aangemaakt.

// Cijfer een nummer van 0 tot 10

function Cijfer(opdracht, cijfer) {
    let cijferObj = this;
    cijferObj.opdracht = opdracht;
    (cijfer <= 10 && cijfer >= 0)
    ? cijferObj.cijfer = cijfer
    : cijferObj.cijfer = 0;
}

// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.
    // Minimaal 3 opdrachten voor 3 verschillende vakken.
    // Totaal dus 9 opdrachten
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new
let opdracht1 = new opdracht('FRO', 'Fotogallery');
let opdracht2 = new opdracht('FRO', 'Objects');
let opdracht3 = new opdracht('FRO', 'Lightbox');
let opdracht4 = new opdracht('K-ID', 'Registration Page');
let opdracht5 = new opdracht('K-ID', 'Login Page');
let opdracht6 = new opdracht('K-ID', 'Wireframes');
let opdracht7 = new opdracht('BAP', 'Uploaden');
let opdracht8 = new opdracht('BAP', 'Inloggen');
let opdracht9 = new opdracht('BAP', 'SQL Join maken');

// Maak voor al deze opdrachten een cijfer variabele aan
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new
let cijfer1 = new cijfer(opdracht1, 7);
let cijfer2 = new cijfer(opdracht2, 5);
let cijfer3 = new cijfer(opdracht3, 8);
let cijfer4 = new cijfer(opdracht4, 6);
let cijfer5 = new cijfer(opdracht5, 4);
let cijfer6 = new cijfer(opdracht6, 9);
let cijfer7 = new cijfer(opdracht7, 8);
let cijfer8 = new cijfer(opdracht8, 6);
let cijfer9 = new cijfer(opdracht9, 7);

// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!
let opdrachten = [];
let cijfers = [];
opdrachten.push(opdracht1);
opdrachten.push(opdracht2);
opdrachten.push(opdracht3);
opdrachten.push(opdracht4);
opdrachten.push(opdracht5);
opdrachten.push(opdracht6);
opdrachten.push(opdracht7);
opdrachten.push(opdracht8);
opdrachten.push(opdracht9);

cijfer.push(cijfer1);
cijfer.push(cijfer2);
cijfer.push(cijfer3);
cijfer.push(cijfer4);
cijfer.push(cijfer5);
cijfer.push(cijfer6);
cijfer.push(cijfer7);
cijfer.push(cijfer8);
cijfer.push(cijfer9);

function Periode (opdrachten, cijfers) {
    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}

// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie

// OPDRACHT 5.
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft

