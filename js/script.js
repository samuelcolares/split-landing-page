const $CONTAINER = document.querySelector('.container')
const $LEFTSIDE = document.querySelector('.left')
const $RIGHTSIDE = document.querySelector('.right')
const $RETURN_BUTTON = document.querySelector('.returnBtn')
const $BUTTON = document.querySelectorAll('.btn')



$LEFTSIDE.addEventListener('mouseenter', () => {
    $CONTAINER.classList.add('hover-left')
    $BUTTON[0].classList.add('show')
    setTimeout(() => {
        $BUTTON[0].classList.add('opacity')
    }, 300)
})

$LEFTSIDE.addEventListener('mouseleave', () => {
    $CONTAINER.classList.remove('hover-left')
    $BUTTON[0].classList.remove('show')
    setTimeout(() => {
        $BUTTON[0].classList.remove('opacity')
    }, 300)
})

$RIGHTSIDE.addEventListener('mouseenter', () => {
    $CONTAINER.classList.add('hover-right')
    $BUTTON[1].classList.add('show')
    setTimeout(() => {
        $BUTTON[1].classList.add('opacity')
    }, 300)
})

$RIGHTSIDE.addEventListener('mouseleave', () => {
    $CONTAINER.classList.remove('hover-right')
    $BUTTON[1].classList.remove('show')
    setTimeout(() => {
        $BUTTON[1].classList.remove('opacity')
    }, 300)
})

$RETURN_BUTTON.addEventListener('click', () => {
    $CONTAINER.classList.remove('hover-right')
    $CONTAINER.classList.remove('hover-left')
    $BUTTON[0].classList.remove('show')
    $BUTTON[0].classList.remove('opacity')
    $BUTTON[1].classList.remove('show')
    $BUTTON[1].classList.remove('opacity')
})
