const { transformData } = require("./transformData.js")
const { fail } = require("./fail.js")

const cardsContainer = document.querySelector('#cards-container');

$.get("https://students-api.up.railway.app/movies")
    .done(transformData);
    .fail(fail)

