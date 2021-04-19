document.addEventListener('DOMContentLoaded', () => {

    const resultado = document.querySelector('#resultado');
    const marca = document.querySelector('#marca');
    const year = document.querySelector('#year');
    const minimo = document.querySelector('#minimo');
    const maximo = document.querySelector('#maximo');
    const puertas = document.querySelector('#puertas');
    const transmision = document.querySelector('#transmision');
    const color = document.querySelector('#color');

    const max = new Date().getFullYear();
    const min = 2010;

    const datosBusqueda = {
        marca: '',
        year: '',
        minimo: '',
        maximo: '',
        puertas: '',
        transmision: '',
        color: '',
    }

    marca.addEventListener('change', e => {
        datosBusqueda.marca = e.target.value;

        filtrarAuto();
    });

    year.addEventListener('change', e => {
        datosBusqueda.year = e.target.value;
        filtrarAuto();

    });

    minimo.addEventListener('change', e => {
        datosBusqueda.minimo = e.target.value;
        filtrarAuto();
    });

    maximo.addEventListener('change', e => {
        datosBusqueda.maximo = e.target.value;
        filtrarAuto();
    });

    puertas.addEventListener('change', e => {
        datosBusqueda.puertas = e.target.value;
        filtrarAuto();
    });

    transmision.addEventListener('change', e => {
        datosBusqueda.transmision = e.target.value;
        filtrarAuto();
    });

    color.addEventListener('change', e => {
        datosBusqueda.color = e.target.value;
        filtrarAuto();
    })

    mostrarAutos(autos);
    createYear();

    function limpiarAutos(){
        while (resultado.firstChild) {
            resultado.removeChild(resultado.firstChild);
        }
    };

    function mostrarAutos(autos) {
        limpiarAutos();
        autos.forEach( auto => {

            const autoHTML = document.createElement('p');
            const {marca, modelo, year, precio, puertas, color, transmision} = auto

            autoHTML.textContent = 
            `
            ${marca} - 
            ${modelo} - 
            ${year} - 
            ${precio} - 
            ${puertas} - 
            ${color} - 
            ${transmision}
            `;


            resultado.appendChild(autoHTML);
        })

        
    }

    function createYear () {
        for (let i = max; i >= min; i--){

            const seleccion = document.createElement('option');
            
            seleccion.value = i;
            seleccion.textContent = i;
            
            year.appendChild(seleccion);
        }
    }

    function filtrarAuto() {
        const autosFiltrados = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarPrecioMin ).filter(filtrarPrecioMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
        mostrarAutos(autosFiltrados);

        if(autosFiltrados.length <= 0){
            const alerta = document.createElement('div');
            alerta.textContent = 'Lo sentimos, no hay autos disponibles. Pruebe con otros filtros.';
            alerta.classList.add('alerta', 'error');
            resultado.appendChild(alerta);
        }
    };

    function filtrarMarca(auto) {
        const { marca } = datosBusqueda
        if (marca) {
            return auto.marca === marca;
        }
        return auto;
    }

    function filtrarYear (auto) {
        const {year} = datosBusqueda;
        if (year) {
            return auto.year === parseInt(year);
        }
        return auto;
    }

    function filtrarPrecioMin (auto) {
        const { minimo } = datosBusqueda;
        
        if ( minimo ) {
            return auto.precio >= parseInt(minimo);
        }
        return auto;
    }

    function filtrarPrecioMax (auto) {
        const { maximo } = datosBusqueda;
        
        if ( maximo ) {
            return auto.precio <= parseInt(maximo);
        }
        return auto;
    }

    function filtrarPuertas (auto) {
        const { puertas } = datosBusqueda;
        
        if ( puertas ) {
            return auto.puertas === parseInt(puertas);
        }
        return auto;
    }

    function filtrarTransmision (auto) {
        const { transmision } = datosBusqueda;
        
        if ( transmision ) {
            return auto.transmision == transmision;
        }
        return auto;
    }

    function filtrarColor (auto) {
        const { color } = datosBusqueda;
        
        if ( color ) {
            return auto.color == color;
        }
        return auto;
    }

})