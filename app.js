const cancel = document.querySelector('.cancel')
const nav = document.querySelector('.nav')
const bottomA = document.querySelector('.bottomA')
const bottomAx = document.querySelector('.bottomAx')


cancel.addEventListener('click', () => {
    nav.style.display = 'none'
})

bottomAx.addEventListener('click', () => {
    bottomA.style.display = 'block'
})


