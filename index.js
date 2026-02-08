let homeResult = 0
let guessResult = 0
let homeScoreEl = document.getElementById("home-score")
let guessScoreEl = document.getElementById("guess-score")

function addHomeValue1() {
    homeResult += 1
    homeScoreEl.textContent = homeResult
}

function addHomeValue2() {
    homeResult += 2
    homeScoreEl.textContent = homeResult
}

function addHomeValue3() {
    homeResult += 3
    homeScoreEl.textContent = homeResult
}

function addGuessValue1() {
    guessResult += 1
    guessScoreEl.textContent = guessResult
}

function addGuessValue2() {
    guessResult += 2
    guessScoreEl.textContent = guessResult
}

function addGuessValue3() {
    guessResult += 3
    guessScoreEl.textContent = guessResult
}
