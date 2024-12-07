const box = document.getElementById('hover-mainDiv');
const bdDiv = document.getElementById('ihs-holder')
const ihs = document.getElementById('ihs');
const dl = document.getElementById('dl');
let debounce = false;
let exit = false;

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms * 1000));
}

box.addEventListener('mouseenter', () => {

    if (debounce) {return;}
    debounce = true;
    box.classList.add('animate');

    wait(0.5).then(() => {

        box.classList.remove('animate');
        debounce = false;

    });

});

box.addEventListener('click', () => {

    window.location.href='https://i.pinimg.com/564x/2e/1d/6b/2e1d6be769bcd31c101cbe88636e019c.jpg';

});

bdDiv.addEventListener('mouseenter', () => {

    exit = false;
    ihs.classList.add('animation-shrink');

    wait(0.3).then(() => {

        if (!exit) {dl.classList.add('animation-expand');}

    });

});

bdDiv.addEventListener('mouseleave', () => {

    exit = true;
    dl.classList.remove('animation-expand');
    ihs.classList.remove('animation-shrink');

});

dl.addEventListener('click', () => {

    window.location.href="https://discord.gg/UcpVCEAawM";

});