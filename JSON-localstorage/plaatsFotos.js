const fotoLocaties = [
    'img/bear.jpg',
    'img/bird-1.jpg',
    'img/bird-2.jpg',
    'img/bird-3.jpg',
    'img/butterfly.jpg',
    'img/camel.jpg',
    'img/cat.jpg',
    'img/cheetah.jpg',
    'img/dog.jpg',
    'img/elephant.jpg',
    'img/fox.jpg',
    'img/horse-2.jpg',
    'img/horse.jpg',
    'img/lions.jpg',
    'img/monkeys.jpg',
    'img/owl.jpg',
    'img/pelican.jpg',
    'img/shark.jpg',
    'img/sheep.jpg',
    'img/squirrel.jpg'

];
const container = document.getElementById('gallery');

// function plaatsFoto(url){
//     let item = document.createElement('div');
//     item.className = 'dierenfoto';
//     let fotoVanDier = document.createElement('img');
//     fotoVanDier.src = url;
//     fotoVanDier.alt = 'Foto van een dier';
//     fotoVanDier.className = 'fotoInhoud';
//     item.append(fotoVanDier);
//     container.append(item);
// }
// function geefRandomPaatjes(){
//     for(let i = fotoLocaties.length; i > 0; i--){
//         let nummer = Math.floor(Math.random()*fotoLocaties.length);
//         plaatsFoto(fotoLocaties[nummer]);
//         fotoLocaties.splice(nummer, 1);
//     }
// }