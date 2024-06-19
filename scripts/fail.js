const { addHTMLtoDOM } = require("./addHTMLtoDOM.js");
const { tempData } = require("./tempData.js");

function failAttempt() {

    alert("WE are having problems with the server, we are moving forward with manual settings. Please excuse the inconvenience and are encouraged to try again in a few minutes. Thank you.")

    addHTMLtoDOM(tempData)
}

module.exports = {
    failAttempt
}