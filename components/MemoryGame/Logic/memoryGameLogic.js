import { timeout } from '../../../tools/timeout'
import contentRefresh from '../../../tools/contentRefresh'
import memoryTemplate from '../memoryGame'

let discoveredPairs = []
let flippedCards = []
let gameOver = false
let isProcessing = false // Nueva variable de estado

export const resetMemoryGame = (event, data) => {
  contentRefresh('memory')

  discoveredPairs = []
  flippedCards = []
  gameOver = false
  isProcessing = false // Reinicia el estado de procesamiento

  memoryTemplate(event, data)
}

const handleMemoryCardClick = async (event, data, description, resetButton) => {
  const card = event.target

  // Si el juego ha terminado o ya se está procesando un par, no hacer nada
  if (gameOver || isProcessing) {
    return
  }

  // Si la carta ya está volteada, no hacer nada
  if (card.classList.contains('flipped')) {
    return
  }

  card.classList.add('flipped')
  flippedCards.push(card)

  if (flippedCards.length === 2) {
    isProcessing = true // Bloquea más clics mientras se procesa

    const firstCardImage = flippedCards[0].firstChild
    const secondCardImage = flippedCards[1].firstChild

    if (
      firstCardImage &&
      secondCardImage &&
      firstCardImage.alt === secondCardImage.alt
    ) {
      discoveredPairs.push(flippedCards)
      description.innerText = `You've found ${discoveredPairs.length} of ${data.length} pairs`

      flippedCards = []

      if (discoveredPairs.length === data.length) {
        gameOver = true
        await timeout(500)
        description.innerText = '🎉️EPIC WIN!!🎉️'
        resetButton.innerText = 'Start Again'
      }
      isProcessing = false // Desbloquea los clics
    } else {
      await timeout(1000)

      flippedCards.forEach((flippedCard) => {
        flippedCard.classList.remove('flipped')
      })

      flippedCards = []
      isProcessing = false // Desbloquea los clics
    }
  }
}

export default handleMemoryCardClick
