import './header.css'
import {
  createButton,
  createContainer,
  createTitle
} from '../Templates/templates'
import memoryCardImages from '../../info/info'
import connect4Template from '../Connect4/connect4'
import memoryTemplate from '../MemoryGame/memoryGame'
import trivialTemplate from '../Trivial/trivial'

const headerTemplate = () => {
  const app = document.querySelector('#app')

  const header = createContainer('header', 'rtc-header')

  const h1 = createTitle('h1', 'rtc-header-h1', 'The Games Hub 🎮🎮')

  const gamesDiv = createContainer('div', 'rtc-header-games')

  const connect4Button = createButton(
    'rtc-header-games-button rtc-header-connect4',
    'Connect4',
    connect4Template
  )

  const memoryButton = createButton(
    'rtc-header-games-button rtc-header-memory',
    'Memory Game',
    (event) => memoryTemplate(event, memoryCardImages)
  )

  const trivialButton = createButton(
    'rtc-header-games-button rtc-header-trivial',
    'Trivial Game',
    trivialTemplate
  )

  gamesDiv.appendChild(connect4Button)
  gamesDiv.appendChild(memoryButton)
  gamesDiv.appendChild(trivialButton)

  header.appendChild(h1)
  header.appendChild(gamesDiv)

  app.appendChild(header)

  return app
}

export default headerTemplate
