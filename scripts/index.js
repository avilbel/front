const { transformData } = require("./transformData.js")
const { failAttempt } = require("./fail.js")

const cardContainer = document.querySelector('#cardContainer');

$.get("https://students-api.up.railway.app/movies")
    .done(transformData)
    .fail(faiAttempt)

