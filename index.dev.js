
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function Perro(nombre, variedades) {
    return this.Raza = {
        nombre:     nombre,
        variedades: variedades,
        getPhoto() {
            const request = new XMLHttpRequest();
                request.open('GET', `https://dog.ceo/api/breed/${nombre}/images/random`, false);
                request.send();

            return (request.status == 200) ? JSON.parse(request.responseText).message : '';
        }
    }
}

function getRazas() {
    const request = new XMLHttpRequest();
        request.open('GET', 'https://dog.ceo/api/breeds/list/all', false);
        request.send();

    if (request.status == 200) {
        let response    = JSON.parse(request.responseText);
        let razas       = Object.entries(response.message);
        let i           = 1;


        for (const raza of razas) {
            let lomo    = new Perro(raza[0], raza[1]);
            
            console.log(i, lomo.nombre, lomo.variedades, lomo.getPhoto());
            i++;
        }
    }
}

getRazas();