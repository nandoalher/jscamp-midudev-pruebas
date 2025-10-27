import { state } from './config.js'

state.count++

//console.log(state)

const filterLocation = document.querySelector('#filter-location');
const filterTechnology = document.querySelector('#filter-technology');
const filterExperience = document.querySelector('#filter-experience-level');

const mensaje = document.querySelector('#filter-selected-value');

filterTechnology.addEventListener('change', function () {
  const jobs = document.querySelectorAll('.job-listing-card')
  const selectedValue = filterTechnology.value

  jobs.forEach(job => {
    // const modalidad = job.dataset.modalidad
    const technology = job.getAttribute('data-technology')
    console.log(technology)
    const isShown = selectedValue === '' || technology.includes(selectedValue)  
    job.classList.toggle('is-hidden', isShown === false)
  })

})

filterLocation.addEventListener('change', function () { 
  const jobs = document.querySelectorAll('.job-listing-card')

  const selectedValue = filterLocation.value

  if (selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`
  } else {
    mensaje.textContent = ''
  }

  jobs.forEach(job => {
    // const modalidad = job.dataset.modalidad
    const modalidad = job.getAttribute('data-modalidad')
    const isShown = selectedValue === '' || selectedValue === modalidad
    job.classList.toggle('is-hidden', isShown === false)
  })
})