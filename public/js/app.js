Vue.createApp({
    data() {
        return {
            content: '',
        }
    },
    methods: {
        printAbout() {
            this.content = `
            <h1>hello</h1>
            <h1>purple</h1>
            <h1>hello</h1>`
        },
        printSkills() {
            this.content = 'good bye'
        },
        printWorks() {
            this.content = 'oooooo'
        },
    },
}).mount('#supply')

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
