const domBuilder = {

    navbar() {
        document.querySelector(".events").addEventListener("click", () => {
            let homepage = document.querySelector(".home-div");
            homepage.innerHTML = "";
            let image = document.querySelector(".bg-img")
            let parent = image.parentNode
            parent.removeChild(image)
        })
    },
    createEventForm() {
        // let homepage = document.querySelector(".home-div");
        // homepage.innerHTML = "";
        let eventContainer = document.getElementById("eventInput");

        // create form HTML elements
        let newEventDiv = document.createElement("div");
        let newEventName = document.createElement("input");
        let newEventDate = document.createElement("input");
        let newEventLocation = document.createElement("input");
        let saveEventFormButton = document.createElement("button");

        // add class to form container
        newEventDiv.classList.add("add--event--form");
        saveEventFormButton.classList.add("event--save--button");
        newEventName.classList.add("new--event--name");
        newEventDate.classList.add("new--event--date");
        newEventLocation.classList.add("new--event--location");

        // add text to button
        saveEventFormButton.textContent = "Save Event"

        // define input attributes
        newEventName.setAttribute("type", "text");
        newEventDate.setAttribute("type", "datetime-local");
        newEventLocation.setAttribute("type", "text");

        // append input fields to the form container
        newEventDiv.appendChild(newEventName);
        newEventDiv.appendChild(newEventDate);
        newEventDiv.appendChild(newEventLocation);
        newEventDiv.appendChild(saveEventFormButton);

        // append form container to event container (temporarily)
        eventContainer.appendChild(newEventDiv);
    },
    createNewsForm() {
        let newsContainer = document.getElementById("newsInput");
        // create form HTML elements
        let newsDiv = document.createElement("div");
        let newsName = document.createElement("input");
        let newsSynopsis = document.createElement("input");
        let newsURL = document.createElement("input");
        let saveNewsButton = document.createElement("button");

        // add class to form container
        newsDiv.classList.add("add--news--form");
        newsName.classList.add("new--news--name");
        newsSynopsis.classList.add("new--news--synopsis");
        newsURL.classList.add("new--news--url")
        saveNewsButton.classList.add("task--news--button");

        // add text to button
        saveNewsButton.textContent = "save"

        // define input attributes
        newsName.setAttribute("type", "text")
        newsSynopsis.setAttribute("type", "text")
        newsURL.setAttribute("type", "href")

        // append input fields to the form container
        newsDiv.appendChild(newsName);
        newsDiv.appendChild(newsSynopsis);
        newsDiv.appendChild(newsURL);
        newsDiv.appendChild(saveNewsButton)

        // append form container to event container (temporarily)
        newsContainer.appendChild(newsDiv);
    },
    createTaskForm() {
        let taskContainer = document.getElementById("taskInput")
        let taskDiv = document.createElement("div");
        let taskName = document.createElement("input");
        let taskCompletion = document.createElement("input");
        let saveTask = document.createElement("button")

        // add class to form container
        taskDiv.classList.add("add--task--form");
        taskName.classList.add("new--task--name");
        taskCompletion.classList.add("new--task--completion");
        // add text to button
        saveTask.textContent = "save task"

        // // define input attributes
        taskName.setAttribute("type", "text")
        taskCompletion.setAttribute("type", "text")

        // append input fields to the form container
        taskDiv.appendChild(taskName);
        taskDiv.appendChild(taskCompletion);
        taskDiv.appendChild(saveTask);

        // append form container to event container (temporarily)
        taskContainer.appendChild(taskDiv)
    }

}

export default domBuilder