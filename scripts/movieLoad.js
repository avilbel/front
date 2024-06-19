function movieLoad(movie) {

    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    const button = document.createElement("button")
    const img = document.createElement("img")

    img.src = movie.poster
    img.classList.add("movieImg")
    img.alt = movie.title
    img.value = movie.id
    img.background = movie.background

    h1.innerHTML = movie.title
    button.innerText = "Watch Now"
    div.classList.add("card")

    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(button)

    img.addEventListener("mouseenter", (imageSelect) => {
        const background = imageSelect.target.background
        const body = document.querySelector("body")
        body.style.backgroundImage = `url(${background})`
    })

    return div
}