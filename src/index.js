import generateJoke from "./generateJoke";
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughingImg = document.getElementById('laughImg')
laughingImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke  )

generateJoke()