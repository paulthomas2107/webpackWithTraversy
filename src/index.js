import generateJoke from "./generateJoke";
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughingImg = document.getElementById('laughImg')
laughingImg.src = laughing

console.log(generateJoke())