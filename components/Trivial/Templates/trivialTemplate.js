import { timeout } from '../../../tools/timeout'

export const createAnswer = (className, id) => {
  const trivialAnswer = document.createElement('div')
  trivialAnswer.className = className
  trivialAnswer.id = id
  return trivialAnswer
}

export const createEndgameForm = (scoreText) => {
  const mainContent = document.querySelector('#app > main')
  mainContent.innerHTML = `
        <div class="rtc-trivial-endgame">
            <h2 class="rtc-trivial-endgame-final_score" id="finalScore">${scoreText.innerText}</h2>
            <form class="rtc-trivial-endgame-form">
                <h3 class="rtc-trivial-endgame-form-title">
                    Enter your name below to save your score!
                </h3>
                <input class="rtc-trivial-endgame-form-input" id="username" type="text" name="" placeholder="Enter your name"
                >
                <button class="rtc-trivial-endgame-form-button" id="saveScoreButton" type="button" disabled>
                    Save
                </button>
            </form>
        </div>
    `
  return mainContent
}

export const createEndgameRanking = (resetButton) => {
  const mainContent = document.querySelector('#app > main')
  mainContent.innerHTML = `
        <div class="rtc-trivial-endgame-ranking">
            <h2 class="rtc-trivial-endgame-ranking_title">Ranking</h2>
            <div class="rtc-trivial-endgame-ranking_scores"></div>
            <h3 class="rtc-trivial-endgame-ranking_message">Thanks for Playing! 😃️</h3>
        </div>
    `
  mainContent.appendChild(resetButton)
  return mainContent
}

export const createHudState = (className, id, text) => {
  const trivialHudState = document.createElement('p')
  trivialHudState.className = className
  trivialHudState.id = id
  trivialHudState.innerText = text
  return trivialHudState
}

export const createQuestion = (className, id, text) => {
  const trivialQuestion = document.createElement('h3')
  trivialQuestion.className = className
  trivialQuestion.id = id
  trivialQuestion.innerText = text
  return trivialQuestion
}

export const createScoresContainer = (highScore) => {
  const scoresContainer = document.querySelector(
    '.rtc-trivial-endgame-ranking_scores'
  )
  scoresContainer.innerHTML += `
        <div class="rtc-trivial-endgame-ranking_scores-score">
            <h3 class="rtc-trivial-endgame-ranking_scores-score-username">${highScore.name}</h3>
            <h3 class="rtc-trivial-endgame-ranking_scores-score-points">${highScore.score}</h3>
        </div>
    `
  return scoresContainer
}

export const renderLoader = async () => {
  const mainContent = document.querySelector('#app > main')

  const loaderContainer = document.createElement('div')
  loaderContainer.className = 'rtc-trivial-loader_container'

  const loader = document.createElement('div')
  loader.className = 'rtc-trivial-loader'

  const loaderText = document.createElement('p')
  loaderText.className = 'rtc-trivial-loader_text'
  loaderText.innerText = 'Loading'

  loaderContainer.appendChild(loader)
  loaderContainer.appendChild(loaderText)

  mainContent.appendChild(loaderContainer)
  await timeout(3500)
  mainContent.removeChild(loaderContainer)
}
