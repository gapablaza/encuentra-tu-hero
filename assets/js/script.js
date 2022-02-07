// llamadas fijas
// const bomb = { "response": "success", "id": "1", "name": "A-Bomb", "powerstats": { "intelligence": "38", "strength": "100", "speed": "17", "durability": "80", "power": "24", "combat": "64" }, "biography": { "full-name": "Richard Milhouse Jones", "alter-egos": "No alter egos found.", "aliases": ["Rick Jones"], "place-of-birth": "Scarsdale, Arizona", "first-appearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)", "publisher": "Marvel Comics", "alignment": "good" }, "appearance": { "gender": "Male", "race": "Human", "height": ["6'8", "203 cm"], "weight": ["980 lb", "441 kg"], "eye-color": "Yellow", "hair-color": "No Hair" }, "work": { "occupation": "Musician, adventurer, author; formerly talk show host", "base": "-" }, "connections": { "group-affiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom", "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)" }, "image": { "url": "assets\/img\/abomb.jpeg" } };
// const superman = { "response": "success", "id": "644", "name": "Superman", "powerstats": { "intelligence": "94", "strength": "100", "speed": "100", "durability": "100", "power": "100", "combat": "85" }, "biography": { "full-name": "Clark Kent", "alter-egos": "Superman Prime One-Million", "aliases": ["Clark Joseph Kent", "The Man of Steel", "the Man of Tomorrow", "the Last Son of Krypton", "Big Blue", "the Metropolis Marvel", "the Action Ace"], "place-of-birth": "Krypton", "first-appearance": "ACTION COMICS #1", "publisher": "Superman Prime One-Million", "alignment": "good" }, "appearance": { "gender": "Male", "race": "Kryptonian", "height": ["6'3", "191 cm"], "weight": ["225 lb", "101 kg"], "eye-color": "Blue", "hair-color": "Black" }, "work": { "occupation": "Reporter for the Daily Planet and novelist", "base": "Metropolis" }, "connections": { "group-affiliation": "Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)", "relatives": "Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El\/Conner Kent, partial clone)" }, "image": { "url": "assets\/img\/superman.jpeg" } };
// const ironman = { "response": "success", "id": "346", "name": "Iron Man", "powerstats": { "intelligence": "100", "strength": "85", "speed": "58", "durability": "85", "power": "100", "combat": "64" }, "biography": { "full-name": "Tony Stark", "alter-egos": "No alter egos found.", "aliases": ["Iron Knight", "Hogan Potts", "Spare Parts Man", "Cobalt Man II", "Crimson Dynamo", "Ironman"], "place-of-birth": "Long Island, New York", "first-appearance": "Tales of Suspence #39 (March, 1963)", "publisher": "Marvel Comics", "alignment": "good" }, "appearance": { "gender": "Male", "race": "Human", "height": ["6'6", "198 cm"], "weight": ["425 lb", "191 kg"], "eye-color": "Blue", "hair-color": "Black" }, "work": { "occupation": "Inventor, Industrialist; former United States Secretary of Defense", "base": "Seattle, Washington" }, "connections": { "group-affiliation": "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.", "relatives": "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)" }, "image": { "url": "assets\/img\/ironman.jpeg" } };
// const widow = { "response": "success", "id": "107", "name": "Black Widow", "powerstats": { "intelligence": "75", "strength": "13", "speed": "33", "durability": "30", "power": "36", "combat": "100" }, "biography": { "full-name": "Natasha Romanoff", "alter-egos": "No alter egos found.", "aliases": ["Yelena Belova", "Natasha Romanoff", "Natasha", "Tasha", "Madame Natasha", "Nancy Rushman", "Laura Matthers", "Nadine Roman", "\"Oktober\"", "Black Pearl", "Ebon Flame"], "place-of-birth": "-", "first-appearance": "Tales of Suspense #52", "publisher": "Marvel Comics", "alignment": "good" }, "appearance": { "gender": "Female", "race": "Human", "height": ["5'7", "170 cm"], "weight": ["131 lb", "59 kg"], "eye-color": "Green", "hair-color": "Auburn" }, "work": { "occupation": "Adventurer, Intelligence agent, former ballerina", "base": "Mobile" }, "connections": { "group-affiliation": "Secret Avengers; formerly Thunderbolts (as Yelena Belova), Nick Fury, Mighty Avengers, S.H.I.E.L.D., Avengers, Champions of Los Angeles, Lady Liberators, KGB, \"Marvel Knights\", partner of Daredevil, Hawkeye, Boris Turgenov, Logan", "relatives": "Unnamed parents (presumed deceased); Alexi Shostakov (Red Guardian, estranged husband); Vindiktor (alleged brother, deceased)" }, "image": { "url": "assets\/img\/widow.jpeg" } };
// const heroes = [bomb, superman, ironman, widow];

// selectores globales
var formEl = $("#buscarHero");
var formAltEl = $("#buscarHeroAlt");
var inputEl = $("#heroID");
var inputAltEl = $("#heroIDAlt");
var helpEl = $("#emailHelp");

var tituloEl = $("#hero-titulo");
var imagenEl = $("#hero-imagen");
var biografiaEl = $("#hero-biografia");
var graficoEl = $("#hero-grafico");
var trabajoEl = $("#hero-trabajo");
var conexionesEl = $("#hero-conexiones");
var aparienciaEl = $("#hero-apariencia");


// inicializa UI y variables
function inicializar() {
    helpEl.removeClass('text-danger');
    $('.hero').hide();
    $('.error-info').hide();

    tituloEl.text('');
    imagenEl.text('');
    biografiaEl.text('');
    graficoEl.text('');
    trabajoEl.text('');
    conexionesEl.text('');
    aparienciaEl.text('');
}


// realiza llamada a API
let obtenerDatos = (heroID) => {
    $('.loading-info').fadeIn();
    // diagramarDatos(heroes[Math.floor(Math.random() * 4)]);
    $.get('https://superheroapi.com/api.php/10227267461655259/' + heroID, function (data, status) {
        $('.loading-info').hide();
        if (data.response == 'success') {
            diagramarDatos(data);
        } else {
            $('.navbar input').focus();
            $('.error-info').fadeIn();
        }
        $('#buscarHeroAlt button').removeAttr("disabled");
    });
}


// renderiza los datos
let diagramarDatos = (heroData) => {
    tituloEl.text(`${heroData.name}`);

    imagenEl.append(`
        <img src="${heroData.image.url}" class="img-fluid rounded mb-4" alt="${heroData.name}">
    `);

    biografiaEl.append(`
        <li class="list-group-item"><strong>Nombre Completo: </strong>${heroData.biography['full-name']}</li>
        <li class="list-group-item"><strong>Alter Ego: </strong>${heroData.biography['alter-egos']}</li>
        <li class="list-group-item"><strong>Alias: </strong>${heroData.biography['aliases'].join('; ')}</li>
        <li class="list-group-item"><strong>Lugar de nacimiento: </strong>${heroData.biography['place-of-birth']}</li>
        <li class="list-group-item"><strong>Primera aparición: </strong>${heroData.biography['first-appearance']}</li>
        <li class="list-group-item"><strong>Editorial: </strong>${heroData.biography['publisher']}</li>
        <li class="list-group-item"><strong>Alineamiento: </strong>${heroData.biography['alignment']}</li>
    `);

    trabajoEl.append(`
        <li class="list-group-item"><strong>Ocupación: </strong>${heroData.work['occupation']}</li>
        <li class="list-group-item"><strong>Base: </strong>${heroData.work['base']}</li>
    `);

    conexionesEl.append(`
        <li class="list-group-item"><strong>Grupos afiliados: </strong>${heroData.connections['group-affiliation']}</li>
        <li class="list-group-item"><strong>Relativos: </strong>${heroData.connections['relatives']}</li>
    `);

    aparienciaEl.append(`
        <li class="list-group-item"><strong>Género: </strong>${heroData.appearance['gender']}</li>
        <li class="list-group-item"><strong>Raza: </strong>${heroData.appearance['race']}</li>
        <li class="list-group-item"><strong>Altura: </strong>${heroData.appearance['height'].join('; ')}</li>
        <li class="list-group-item"><strong>Peso: </strong>${heroData.appearance['weight'].join('; ')}</li>
        <li class="list-group-item"><strong>Color de ojos: </strong>${heroData.appearance['eye-color']}</li>
        <li class="list-group-item"><strong>Color de pelo: </strong>${heroData.appearance['hair-color']}</li>
    `);


    $('.hero').fadeIn();
    graficar(heroData.powerstats);
    $('.navbar input').val(heroData.id).focus();
}


// dibujar gráfico
let graficar = (graphData) => {

    var valores = Object.values(graphData);
    var options = {
        animationEnabled: true,
        axisY: {
            minimum: 0,
            maximum: 100,
            interval: 20,
            labelFontFamily: 'Comic Neue',
        },
        data: [
            {
                type: "bar",
                dataPoints: [
                    { label: "Combate", y: parseInt(valores[5]) },
                    { label: "Poder", y: parseInt(valores[4]) },
                    { label: "Durabilidad", y: parseInt(valores[3]) },
                    { label: "Velocidad", y: parseInt(valores[2]) },
                    { label: "Fuerza", y: parseInt(valores[1]) },
                    { label: "Inteligencia", y: parseInt(valores[0]) },
                ]
            }
        ]
    };

    // var chart = new CanvasJS.Chart("hero-grafico", options);
    // chart.render();
    graficoEl.CanvasJSChart(options);
}

// inicia el script
$(document).ready(function () {

    inputEl.focus();

    // handler del formulario principal
    formEl.submit(function (ev) {
        ev.preventDefault();
        inicializar();

        let valor = inputEl.val();
        if (!isNumeric(valor) || (valor < 1)) {
            helpEl.addClass('text-danger');
        } else {
            $('body').addClass('con-resultado');
            obtenerDatos(valor);
        }
    });

    // handler del formulario en el nav
    formAltEl.submit(function (ev) {
        ev.preventDefault();
        $('#buscarHeroAlt button').attr("disabled", "disabled");
        inicializar();

        let valor = inputAltEl.val();
        if (!isNumeric(valor) || (valor < 1)) {
            alert('Debes ingresar un número entero mayor a 0');
            $('#buscarHeroAlt button').removeAttr("disabled");
        } else {
            obtenerDatos(valor);
        }
    });

})


// https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}