var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

XHR = (url) => {
    const request   = new XMLHttpRequest();
        request.open('GET', url, false);
        request.send();

    return (request.status == 200) ? JSON.parse(request.responseText).message : '';
}

function Perro(nombre, variedades) {
    return this.Raza = {
        nombre:     nombre,
        variedades: variedades,
        getPhoto() {
            return XHR(`https://dog.ceo/api/breed/${nombre}/images/random`);
        }
    }
}

getRazas = () => {
    let razas = XHR('https://dog.ceo/api/breeds/list/all');

    if (razas) {
        razas   = Object.entries(razas);

        razas.map((raza, index) => {
            let lomo    = new Perro(raza[0], raza[1]);
    
            console.log(index, lomo.nombre, lomo.variedades, lomo.getPhoto());
        });
    }
}

getRazas();