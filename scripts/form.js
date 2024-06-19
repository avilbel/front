class Activity {
    constructor(id, description, title, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }

    getActivities() {
        return this.activities;
    }

    addActivity({ title, description, imgUrl }) {
        this.id++;
        const newActivity = new Activity(this.id, title, description, imgUrl);
        this.activities.push(newActivity)
    }

    deleteActivity(id) {
        this.activities = this.activities.filter((activity) => activity.id !== id)
        return this.activities;
    }

}

const repository = new Repository();


const button = document.getElementById("addActivity");

const render = () => {
    const container = document.getElementById("cards-Container");
    container.innerHTML = " ";

    const activities = repository.getActivities();

    const htmlActivities = activities.map(activity => {
        const card = document.createElement("div");
        card.className = "cards";

        const cardImage = document.createElement("img")
        cardImage.src = activity.imgUrl;

        const cardTitle = document.createElement("span");
        cardTitle.className = "cardTitle";
        cardTitle.innerHTML = activity.title;

        const cardDescription = document.createElement("p");
        cardDescription.innerText = activity.description;

        card.appendChild(cardTitle);
        card.appendChild(cardImage);
        card.appendChild(cardDescription);

        return card;

    })
    container.appendChild(...htmlActivities);
};

const activityDOM = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imgUrl = document.getElementById("imgUrl").value;

    if (!title || !description || !imgUrl) {
        alert('Missing parts')
        return;
    }

    repository.addActivity({ title, description, imgUrl });

    render()

};



button.addEventListener("click", activityDOM); 