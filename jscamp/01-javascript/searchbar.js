const searchBar = document.querySelector('#empleos-search-input');
const container = document.querySelector('.jobs-listings');
let allJobs = [];

fetch('./data.json')
    .then((response) => {
        return response.json();
    })
    .then((jobs) => {
        allJobs = jobs;
    });

function searchJob(event) {
    event.preventDefault(); // Evita recarga de página si está en un form
    
    const entrada = event.target.value.toLowerCase();
    const resultados = allJobs.filter((job) => {
        return job.titulo.toLowerCase().includes(entrada);
    });

    let html = '';

    resultados.forEach(job => {
        html += `
        <article class="job-listing-card" data-modalidad="${job.modalidad}" data-nivel="${job.nivel}" data-technology="${job.technology}">
            <div>
                <h3>${job.titulo}</h3>
                <small>${job.empresa} | ${job.modalidad}</small>
                <p>${job.descripcion}</p>
            </div>
            <button class="button-apply-job">Aplicar</button>
        </article>`;
    });

    container.innerHTML = html;
    const mensaje = document.createElement('div');
    mensaje.textContent = resultados.length ? '' : 'No se encontraron resultados';
    container.appendChild(mensaje);
}

searchBar.addEventListener("input", searchJob); // Cambiado de "input" a "keydown"