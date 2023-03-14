const $CONTAINER = document.querySelector('.container')
const $LEFTSIDE = document.querySelector('.left')
const $RIGHTSIDE = document.querySelector('.right')
const $RETURN_BUTTON = document.querySelector('.returnBtn')
const $BUTTON = document.querySelectorAll('.btn')
const $LEFTTEXT = document.querySelector('.left-info')
const $RIGHTTEXT = document.querySelector('.right-info')



$LEFTSIDE.addEventListener('mouseenter', () => {
    $CONTAINER.classList.add('hover-left')
    setTimeout(() => {
        $BUTTON[0].classList.add('show')
    }, 290)
    setTimeout(() => {
        $BUTTON[0].classList.add('opacity')
    }, 300)
})

$LEFTSIDE.addEventListener('mouseleave', () => {
    $CONTAINER.classList.remove('hover-left')
    $BUTTON[0].classList.remove('show')
    $BUTTON[0].classList.remove('opacity')
    setTimeout(() => {
        $BUTTON[0].classList.remove('show')
        $BUTTON[0].classList.remove('opacity')
    }, 300)
})

$RIGHTSIDE.addEventListener('mouseenter', () => {
    $CONTAINER.classList.add('hover-right')
    setTimeout(() => {
        $BUTTON[1].classList.add('show')
    }, 290)
    setTimeout(() => {
        $BUTTON[1].classList.add('opacity')
    }, 300)
})

$RIGHTSIDE.addEventListener('mouseleave', () => {
    $CONTAINER.classList.remove('hover-right')
    $BUTTON[1].classList.remove('show')
    $BUTTON[1].classList.remove('opacity')
    setTimeout(() => {
        $BUTTON[1].classList.remove('show')
        $BUTTON[1].classList.remove('opacity')
    }, 300)
})

$RETURN_BUTTON.addEventListener('click', () => {
    $CONTAINER.classList.remove('hover-right')
    $CONTAINER.classList.remove('hover-left')
})


$LEFTTEXT.addEventListener('mousedown', () => {
    $LEFTTEXT.classList.add('opacityText')
})
$LEFTTEXT.addEventListener('mouseup', () => {
    $LEFTTEXT.classList.remove('opacityText')
})

$RIGHTTEXT.addEventListener('mousedown', () => {
    $RIGHTTEXT.classList.add('opacityText')
})
$RIGHTTEXT.addEventListener('mouseup', () => {
    $RIGHTTEXT.classList.remove('opacityText')
})


document.querySelector('.videoD4').playbackRate = 1.5
