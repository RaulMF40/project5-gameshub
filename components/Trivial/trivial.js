import './trivial.css'
import {
  createButton,
  createContainer,
  createText,
  createTitle
} from '../Templates/templates'
import {
  createAnswer,
  createHudState,
  createQuestion
} from './Templates/trivialTemplate'
import contentRefresh from '../../tools/contentRefresh'
import trivialLogic, { resetTrivialGame } from './Logic/trivialLogic'

const trivialTestTemplate = (event) => {
  contentRefresh('trivial')

  const trivialMain = document.querySelector('.rtc-trivial')

  const trivialGame = createContainer('div', 'rtc-trivial-game test')

  const trivialReset = createButton(
    'rtc-trivial-reset',
    'Reset',
    resetTrivialGame
  )

  const trivialHudItem_1 = createContainer('div', 'rtc-trivial-hud_item')

  const trivialHudPrefix_1 = createTitle(
    'h3',
    'rtc-trivial-hud_item-prefix',
    'Question'
  )

  const trivialHudProgress = createHudState(
    'rtc-trivial-hud_item-progress',
    'progress',
    ''
  )

  const trivialCard = createContainer('div', 'rtc-trivial-card')

  const trivialQuestion = createQuestion(
    'rtc-trivial-card-question',
    'question',
    '-'
  )

  const trivialAnswersContainer = createContainer(
    'div',
    'rtc-trivial-card-answers'
  )

  for (let i = 0; i <= 3; i++) {
    const trivialAnswer = createAnswer('rtc-trivial-card-answer', 'answer')
    const trivialAnswerText = createText('rtc-trivial-card-answer_text', '-')

    trivialAnswer.appendChild(trivialAnswerText)
    trivialAnswersContainer.appendChild(trivialAnswer)
  }

  const trivialHudItem_2 = createContainer('div', 'rtc-trivial-hud_item')

  const trivialHudPrefix_2 = createTitle(
    'h3',
    'rtc-trivial-hud_item-prefix',
    'Score'
  )

  const trivialScore = createHudState(
    'rtc-trivial-hud_item-score',
    'score',
    '0'
  )

  const trivialStartAgain = createButton(
    'rtc-trivial-reset',
    'Start Again',
    resetTrivialGame
  )

  trivialHudItem_1.appendChild(trivialHudPrefix_1)
  trivialHudItem_1.appendChild(trivialHudProgress)

  trivialCard.appendChild(trivialQuestion)
  trivialCard.appendChild(trivialAnswersContainer)

  trivialHudItem_2.appendChild(trivialHudPrefix_2)
  trivialHudItem_2.appendChild(trivialScore)

  trivialGame.appendChild(trivialHudItem_1)
  trivialGame.appendChild(trivialCard)
  trivialGame.appendChild(trivialHudItem_2)

  trivialMain.appendChild(trivialGame)
  trivialMain.appendChild(trivialReset)
  trivialLogic(
    trivialHudProgress,
    trivialQuestion,
    trivialAnswersContainer,
    trivialScore,
    trivialStartAgain
  )
}

const trivialTemplate = (event) => {
  contentRefresh('trivial')

  const trivialMain = document.querySelector('.rtc-trivial')

  const trivialGame = createContainer('div', 'rtc-trivial-game')

  const trivialGameDescription = createTitle(
    'h2',
    'rtc-trivial-description',
    'Are you ready for a Trivial Game?'
  )

  const trivialPlayButton = createButton(
    'rtc-trivial-play_button',
    'Go!',
    trivialTestTemplate
  )

  trivialGame.appendChild(trivialGameDescription)
  trivialGame.appendChild(trivialPlayButton)
  trivialMain.appendChild(trivialGame)
}

export default trivialTemplate
