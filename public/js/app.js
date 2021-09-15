Vue.createApp({
    data() {
        return {
            content: '`<div id="touch">Click to top panel</div>`',
            style: '',
        }
    },
    methods: {
        printAbout() {
            this.content = about
            this.style = 'active'
        },
        printSkills() {
            this.content = skills
            this.style = 'active'
        },
        printWorks() {
            this.content = works
            this.style = 'active'
        },
        copyUrl() {
            let emailUrl = 'smelov.nicolas@yandex.ru'
            navigator.clipboard.writeText(emailUrl)
        },
    },
}).mount('#supply')

let container = document.querySelector('.container')
let screen2 = document.querySelector('.screen2')
let slideTop = document.querySelector('#slide-top')
let slideBottom = document.querySelector('#slide-bottom')
let screen = 1

slideBottom.addEventListener('click', () => {
    container.classList.add('up')
    setTimeout(() => {
        screen2.classList.add('up')
    }, 2000)
})

slideTop.addEventListener('click', () => {
    container.classList.remove('up')
    screen2.classList.remove('up')
})

let about = `
    <div class="textname">
        <ul>
            <li>I'm Nikolay</li>
            <li>I'm 19 years old</li>
            <li>I enjoy programming</li>
            <li>I started programming six months ago</li>
            <li>I like the front-end because it has a lot interesting things </li>
        </ul>
    </div>
`

let skills = `
    <div class="textname">
        <ul>
            <li>HTML 5</li>
            <li>CSS3: flex, grid, animation</li>
            <li>the Basics Javascript: VueJS, DOM, AJAX</li>
            <li>The basics NodeJS, EpxressJS</li>
            <li>GIT, GitHub</li>
            <li>The basics docker</li>
        </ul>
    </div>
`

let works = `
    <a href="/gallery" style="color:white"><div class="circle" style="background-color: purple"><p>GALLERY</p>
    </div></a>
    <a href="/board" style="color:white"><div class="circle" style="background-color: purple; margin-top: 1.5cm"><p>BOARD</p>
    </div></a>
`

let audio = new Audio('grailz-beni-it-s-not-so-bad.mp3')
let music = document.querySelector('#music')
let score = true

music.addEventListener('click', () => {
    if (score == true) {
        audio.play()
        score = false
    } else {
        audio.pause()
        score = true
    }
})
