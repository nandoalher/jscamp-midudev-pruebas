import { state } from './config.js'

state.count++

//console.log(state)
const RESULTS_PER_PAGE = 3
let number = 0;
const filterLocation = document.querySelector('#filter-location');
const filterTechnology = document.querySelector('#filter-technology');
const filterExperience = document.querySelector('#filter-experience-level');
const $pagination = document.querySelector('.pagination');
const $firstChild = $pagination.querySelector('a:last-child');
console.log($firstChild);

const mensaje = document.querySelector('#filter-selected-value');

function searchJobs() {
  const jobs = document.querySelectorAll('.job-listing-card')
  const experienceValue = filterExperience.value
  const locationValue = filterLocation.value
  const technologyValue = filterTechnology.value
  let dynamicElements = document.querySelectorAll('.dynamic-element');
  dynamicElements.forEach(element => element.remove());

  jobs.forEach(job => {
    const experiencie = job.getAttribute('data-nivel');
    const location = job.getAttribute('data-modalidad');
    const technology = job.getAttribute('data-technology');

    if ((technology.includes(technologyValue) || technologyValue === '') && (location === locationValue || locationValue === '') && (experiencie === experienceValue || experienceValue === '')) {
      job.classList.remove('is-hidden')
      number++
    } else {
      job.classList.add('is-hidden')
    }
  })

  let paginasPerFiltrado = Math.ceil(number / RESULTS_PER_PAGE);
  console.log(paginasPerFiltrado);

  for(let i = 0; i < paginasPerFiltrado; i++) {
      const $a = document.createElement("a");
      $a.textContent = i + 1;
      $a.href = "#";
      $a.classList.add('dynamic-element');
      $pagination.insertBefore($a, $firstChild);
  }

  number = 0; 
}

filterExperience.addEventListener('change', searchJobs)
filterLocation.addEventListener('change', searchJobs)
filterTechnology.addEventListener('change', searchJobs)



// CODIGO MEJORADO POR GROK

/* function searchJobs() {
  const jobs = document.querySelectorAll('.job-listing-card');
  const experienceValue = filterExperience.value;
  const locationValue = filterLocation.value;
  const technologyValue = filterTechnology.value;

  console.log(experienceValue, locationValue, technologyValue);

  jobs.forEach(job => {
    const experiencie = job.getAttribute('data-nivel');
    const location = job.getAttribute('data-modalidad');
    const technology = job.getAttribute('data-technology');

    // Nueva lógica: si el filtro está vacío, ignora esa condición (siempre true)
    const matchesTechnology = (technologyValue === '') || technology.includes(technologyValue);
    const matchesLocation = (locationValue === '') || (location === locationValue);
    const matchesExperience = (experienceValue === '') || (experiencie === experienceValue);

    if (matchesTechnology && matchesLocation && matchesExperience) {
      job.classList.remove('is-hidden');
    } else {
      job.classList.add('is-hidden');
    }
  });
}

filterExperience.addEventListener('change', searchJobs);
filterLocation.addEventListener('change', searchJobs);
filterTechnology.addEventListener('change', searchJobs); */
