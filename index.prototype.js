var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function XHR(url) {
    const request   = new XMLHttpRequest();
        request.open('GET', url, false);
        request.send();

    return (request.status == 200) ? JSON.parse(request.responseText).message : '';
}

function Perro(nombre, variedades) {
    return this.Raza = {
        nombre: nombre,
        variedades: variedades
    }
}

function getRazas() {
    let razas = XHR('https://dog.ceo/api/breeds/list/all');

    if (razas != '') {
        let i   = 1;
        razas   = Object.entries(razas);

        razas.forEach((raza) => {
            let lomo    = new Perro(raza[0], raza[1]);
            
            lomo.getPhoto = Perro.prototype.getPhoto = () => XHR(`https://dog.ceo/api/breed/${raza[0]}/images/random`);
            
            console.log(i, lomo.nombre, lomo.variedades, lomo.getPhoto());
            i++;
        });   
    }
}

getRazas();