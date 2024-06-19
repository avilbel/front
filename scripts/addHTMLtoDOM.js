function addHTMLtoDOM(info) {

    const arrayHTMLcards = info.map(movieLoad)

    arrayHTMLcards.forEach((movie) => cardContainer.appendChild(movie))
}

module.exports = {
    addHTMLtoDOM
}