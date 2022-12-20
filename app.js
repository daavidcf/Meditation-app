const circleProgress = document.querySelector('.circle-progress')
const NumberOfBreaths = document.querySelector('.breath-input')
const start = document.querySelector('.start')
const instructions = document.querySelector('.instructions')
const breathsText = document.querySelector('.breaths-text')
let breathsLeft = 3

// Watching for selected breaths from user
NumberOfBreaths.addEventListener('change', () => {
    breathsLeft = NumberOfBreaths.value
    breathsText.innerText = breathsLeft
})

// Grow/Shrink Circle

const growCircle = () => {
    circleProgress.classList.add('circle-grow')
    setTimeout(() => {
        circleProgress.classList.remove('circle-grow')
    }, 8000)
}

// Breathing Instructions

const BreathTextUpdate = () => {
    breathsLeft--
    breathsText.innerText = breathsLeft
    instructions.innerText = 'Breath in'
    setTimeout(() => {
        instructions.innerText = 'Hold breath'
        setTimeout(() => {
            instructions.innerText = 'Exhale breath slowly'
        },4000)
    },4000)
}

// Breathing App Function

const breathingApp = () => {
    const breathingAnimation = setInterval(() => {
        if (breathsLeft === 0) {
            clearInterval(breathingAnimation)
            instructions.InnerText = "Breathing session completed. Click 'Begin' to start another one"
            start.classList.remove('button-inactive')
            breathsLeft = NumberOfBreaths.value
            breathsText.innerText = breathsLeft
            return
        }
        growCircle()
        BreathTextUpdate()
    }, 12000)
}

// Start Breathing
start.addEventListener('click', () => {
    start.classList.add('button-inactive')
    instructions.InnerText = 'Get relaxed, and ready to begin breathing'
    setTimeout(() => {
        instructions.InnerText = 'Breathing is about to begin...'
        setTimeout(() => {
            breathingApp()
            growCircle()
            BreathTextUpdate()
        },2000)
    },2000)
})