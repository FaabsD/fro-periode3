//maak een object
let persoon = {
    voornaam: '',
    achternaam: '',
    tussenvoegsel: '',
    volledigeNaam: function () {
        console.log(persoon.voornaam, persoon.tussenvoegsel, persoon.achternaam);
    }
};

persoon.voornaam = 'Fabian';
persoon.achternaam = 'Hendriks';
persoon.tussenvoegsel = '';

/*function geefNaam(){
    console.log(persoon.voornaam, persoon.tussenvoegsel, persoon.achternaam);
   
}*/
function laatPersoonZien() {
    let opPagina = document.createElement('div');
    opPagina.innerHTML = persoon.voornaam + ' ' + persoon.tussenvoegsel + ' ' + persoon.achternaam;
    document.body.appendChild(opPagina);
    opPagina.style.border = '2px solid black';
    opPagina.style.height = '12em';
}


laatPersoonZien();