const board = document.querySelector('#board')
const SQUARES_NUMBER = 736
const colors = [
    '#ba07a8',
    '#07912e',
    '#a9b809',
    '#f70f8b',
    '#2ef70f',
    '#2ef70f',
    '#2ef70f',
]

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('dv')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
