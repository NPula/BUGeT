// Change the way this works later. Probably just use a toggle class or something
// in css
const navSlide = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-list-left');

    navToggle.addEventListener('click', () => {
        nav.style.display = (nav.style.display == 'none' ? 'flex' : 'none');
        //nav.classList.toggle('nav-active');
    })
    
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 950) {
            nav.style.display = 'flex';
        }
        else {
            nav.style.display = 'none';
        }
    })

    console.log(window.innerWidth);
}

const app = () => {
    navSlide();
}
app();