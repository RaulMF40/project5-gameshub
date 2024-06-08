import { timeout } from '../../../tools/timeout'
import contentRefresh from '../../../tools/contentRefresh'
import memoryTemplate from '../memoryGame'

let discoveredPairs = []
let flippedCards = []
let gameOver = false

export const resetMemoryGame = (event, data) => {
  contentRefresh('memory')

  discoveredPairs = []
  flippedCards = []
  gameOver = false

  memoryTemplate(event, data)
}

const handleMemoryCardClick = async (event, data, description, resetButton) => {
  const card = event.target

  if (!gameOver) {
    card.classList.add('flipped')
    flippedCards.push(card)

    if (flippedCards.length === 2) {
      const firstCardImage = flippedCards[0]
      const secondCardImage = flippedCards[1]

      if (firstCardImage.firstChild.alt === secondCardImage.firstChild.alt) {
        discoveredPairs.push(flippedCards)
        description.innerText = `You've found ${discoveredPairs.length} of ${data.length} pairs`

        flippedCards = []

        if (discoveredPairs.length === data.length) {
          gameOver = true
          await timeout(500)
          description.innerText = '🎉️EPIC WIN!!🎉️'
          resetButton.innerText = 'Start Again'
        }
      } else {
        await timeout(1000)

        flippedCards.forEach((flippedCard) => {
          flippedCard.classList.remove('flipped')
        })

        flippedCards = []
      }
    }
  } else {
    return
  }
}

export default handleMemoryCardClick
