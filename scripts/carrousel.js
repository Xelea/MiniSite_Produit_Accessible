const pokemonsImages = [
    {name: "Arceus", src: "assets/carrousel/arceus.jpg"},
    {name: "Dialga", src: "assets/carrousel/dialga.jpg"},
    {name: "Palkia", src: "assets/carrousel/palkia.jpg"},
    {name: "Giratina", src: "assets/carrousel/giratina.jpg"},
    {name: "Crehelf", src: "assets/carrousel/crehelf.jpg"},
    {name: "Crefollet", src: "assets/carrousel/crefollet.jpg"},
    {name: "Crefadet", src: "assets/carrousel/crefadet.jpg"},
];

const slidesContainer = document.getElementById('carrousel-slides-container');
const indicatorsContainer = document.getElementById('carrousel-indicators-container');
const pauseBtn = document.getElementById('carrousel-pause-btn');

let currentSlide = 0;
let isPaused = false;
let autoPlaySlides;

pokemonsImages.forEach((pokemon, index) => {
    const classActive = index === 0 ? 'active' : '';
    slidesContainer.innerHTML += `
        <div class="slide ${classActive}">
            <img src="${pokemon.src}" alt="${pokemon.name}">
        </div>
    `;

    const selected = index === 0 ? 'true' : 'false';
    indicatorsContainer.innerHTML += `
        <button class="indicator" role="tab" aria-selected="${selected}" aria-label="Image ${index + 1}" data-index="${index}"></button>
    `;
});

const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function updateCarrousel(index) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].setAttribute('aria-selected', 'false');

    currentSlide = (index + pokemonsImages.length) % pokemonsImages.length;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].setAttribute('aria-selected', 'true');
}

function startAutoPlay() {
    autoPlaySlides = setInterval(() => {updateCarrousel(currentSlide + 1);}, 3000);
}

startAutoPlay();

pauseBtn.addEventListener('click', () => {
    if (isPaused) {
        autoPlaySlides = setInterval(() => {
            updateCarrousel(currentSlide + 1);
        }, 3000);
        pauseBtn.textContent = 'Pause';
    } else {
        clearInterval(autoPlaySlides);
        pauseBtn.textContent = 'Play';
    }
    isPaused = !isPaused;
});

indicators.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateCarrousel(index);
        clearInterval(autoPlaySlides);
        pauseBtn.textContent = 'Play';
        isPaused = true;
    });
});

document.querySelector('#carrousel-navigation-p').addEventListener('click', () => updateCarrousel(currentSlide - 1));
document.querySelector('#carrousel-navigation-n').addEventListener('click', () => updateCarrousel(currentSlide + 1));