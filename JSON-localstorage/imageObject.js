let objectArray = [];
console.log(fotoLocaties.length);
// ImgageObject function

function ImageObject(name, description) {
    let imgObj = this;
    imgObj.name = name;
    imgObj.description = description;

}

function createObjects() {
    for (let counter = 0; counter < fotoLocaties.length; counter++){
        objectArray.push(new ImageObject(fotoLocaties[counter], counter));
    }

}
function plaatsFoto(obj) {
    let item = document.createElement('div');
    item.className = 'dierenfoto';
    let fotoVanDier = document.createElement('img');
    fotoVanDier.src = obj.name;
    fotoVanDier.alt = obj.description;
    fotoVanDier.className = 'fotoInhoud';
    item.append(fotoVanDier);
    container.append(item);
}

function geefRandomPlaatjes() {
    for (let i = objectArray.length; i > 0; i--) {
        let nummer = Math.floor(Math.random() * objectArray.length);
        plaatsFoto(objectArray[nummer]);
        objectArray.splice(nummer, 1);
    }
}

function createJSON() {
    let id = document.getElementById('json');
    let applicationData = "application/json;charset=utf-8,"
        + encodeURIComponent(JSON.stringify(objectArray));





    let json = document.createElement('a');
    json.href = 'data:' + applicationData;
    json.download = 'json.json';
    json.innerHTML = 'Ready to download your json file';

    id.appendChild(json);
}
createObjects();
createJSON();
geefRandomPlaatjes();
