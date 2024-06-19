const { addHTMLtoDOM } = require("./addHTMLtoDOM.js");

function transformData(response) {

    response.forEach((movie, index) => {
        movie.id = index + 1

        switch (movie.id) {
            case 1:
                movie.background = "https://images.alphacoders.com/900/900383.jpg"
                break;
            case 2:
                movie.background = "https://images.alphacoders.com/864/thumb-1920-864502.jpg"
                break;
            case 3:
                movie.background = "https://images3.alphacoders.com/855/85585.jpg"
            default:
                break;
        }
    })

    addHTMLtoDOM(response)

}


module.exports = {
    transformData
}
