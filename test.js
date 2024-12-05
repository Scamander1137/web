const box = document.getElementById('hover-mainDiv');
let debounce = false;

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms * 1000));
}

box.addEventListener('mouseenter', () => {

    if (debounce) {return;}
    debounce = true;
    box.classList.add('animate');

    wait(0.5).then(() => {

        debounce = false;
        box.classList.remove('animate');

    })

});

box.addEventListener('click', () => {

    window.location.href='https://i.pinimg.com/564x/2e/1d/6b/2e1d6be769bcd31c101cbe88636e019c.jpg';

});