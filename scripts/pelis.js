


const cardContainer = document.querySelector("#cardContainer")


$.get("https://students-api.up.railway.app/movies")
    .done(transformData)
    .fail(fail)