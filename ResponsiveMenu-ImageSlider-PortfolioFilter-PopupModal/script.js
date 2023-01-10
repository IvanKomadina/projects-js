// Responsive menu
let btn = document.querySelector('.header button');
let menu = document.querySelector('.header ul');

//Toggle menu on button click
const toggleMenu = () => {
    if(btn.innerText === 'MENU') {
        menu.classList.add('show');
        btn.innerText = 'CLOSE';
    }
    else {
        menu.classList.remove('show');
        btn.innerText = 'MENU';
    }
}

btn.addEventListener('click', toggleMenu);

// Gallery
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

// move images to right
const moveRight = () => {
    displayNone();
    imgNum++;

    if(imgNum === pictures.length) {
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
}

// move images to left
const moveLeft = () => {
    displayNone();
    imgNum--;

    if(imgNum === -1) {
        imgNum = pictures.length - 1;
    }

    pictures[imgNum].style.display = 'block';
}

// event listeners for arrows
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

// function for hiding images
const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    })
}

// portfolio filter
function portfolioSort() {
    let category = this.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });

    if(category === 'all') {
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        });
    }

    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }
    })
} 

let portfolioBtns = document.querySelectorAll('.portfolio-categories button');

portfolioBtns.forEach((btn) => {
    btn.addEventListener('click', portfolioSort);
})

// popup modals
function openModal() {
    let modalWindow1 = document.querySelector('.first');
    let modalWindow2 = document.querySelector('.second');
    let overlay = document.querySelector('.overlay');

    if(this.getAttribute('id') === 'modal-button-1') {
        modalWindow1.style.display = 'block';
    }

    if(this.getAttribute('id') === 'modal-button-2') {
        modalWindow2.style.display = 'block';
    }

    overlay.style.display = 'block';
}

function closeModal() {
    let modalWindow1 = document.querySelector('.first');
    let modalWindow2 = document.querySelector('.second');
    let overlay = document.querySelector('.overlay');

    modalWindow1.style.display = 'none';
    modalWindow2.style.display = 'none';
    overlay.style.display = 'none';
}

let modalBtn = document.querySelectorAll('.modal-section button');
let closeBtn = document.querySelectorAll('.closeModal');

modalBtn.forEach((btn) => {
    btn.addEventListener('click', openModal);
})

closeBtn.forEach((btn) => {
    btn.addEventListener('click', closeModal);
})