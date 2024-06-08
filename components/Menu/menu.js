import './menu.css'
import {
  createButton,
  createContainer,
  createTitle
} from '../Templates/templates'
import memoryCardImages from '../../info/info'
import connect4Template from '../Connect4/connect4'
import memoryTemplate from '../MemoryGame/memoryGame'
import trivialTemplate from '../Trivial/trivial'

const menuTemplate = () => {
  const app = document.querySelector('#app')

  const welcomeMain = createContainer('main', 'rtc-welcome')

  const h1 = createTitle(
    'h1',
    'rtc-welcome-h1',
    'PROJECT 5 - THE GAMES HUB 🎮🎮'
  )

  const gamesDiv = createContainer('div', 'rtc-welcome-games')

  const connect4Button = createButton(
    'rtc-welcome-games-button rtc-welcome-connect4',
    'Connect4',
    connect4Template
  )

  const memoryButton = createButton(
    'rtc-welcome-games-button rtc-welcome-memory',
    'Memory Game',
    (event) => memoryTemplate(event, memoryCardImages)
  )

  const trivialButton = createButton(
    'rtc-welcome-games-button rtc-welcome-trivial',
    'Trivial Game',
    trivialTemplate
  )

  gamesDiv.appendChild(connect4Button)
  gamesDiv.appendChild(memoryButton)
  gamesDiv.appendChild(trivialButton)

  welcomeMain.appendChild(h1)
  welcomeMain.appendChild(gamesDiv)

  app.appendChild(welcomeMain)
}

export default menuTemplate
