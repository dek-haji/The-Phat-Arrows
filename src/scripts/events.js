import API from "./dataFetch"

const create = {
    eventsForm(){
        let container = document.querySelector(".output");

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
        newEventName.setAttribute("value", "Event Name");
        newEventDate.setAttribute("type", "datetime-local");
        newEventDate.setAttribute("value", "Birthday");
        newEventLocation.setAttribute("type", "text");
        newEventLocation.setAttribute("value", "Event Location")

        // append input fields to the form container
        newEventDiv.appendChild(newEventName);
        newEventDiv.appendChild(newEventDate);
        newEventDiv.appendChild(newEventLocation);
        newEventDiv.appendChild(saveEventFormButton);

        // append form container to event container (temporarily)
        container.appendChild(newEventDiv);
    }
}
//export default eventsForm
