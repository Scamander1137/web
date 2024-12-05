const box = document.getElementById('hover-mainDiv');

box.addEventListener('mouseenter', () => {

    box.classList.add('animate');

});

box.addEventListener('mouseleave', () => {

    box.classList.remove('animate');

});

box.addEventListener('click', () => {

    window.location.href='https://i.pinimg.com/564x/2e/1d/6b/2e1d6be769bcd31c101cbe88636e019c.jpg';

});
