


function eventEditForm(eventId, eventToEdit){
    // create containers to hold the inputs and their labels
    let eventNameEl = document.createElement("p");
    let eventDateEl = document.createElement("p");
    let eventLocationEl = document.createElement("p");

    // declare inputs, labels, and their values
    let eventNameLabel = document.createElement("label");
    eventNameLabel.textContent = "Event Name";
    let eventNameInput = document.createElement("input");
    eventNameInput.value = eventToEdit.name;
    let eventDateLabel = document.createElement("label");
    eventDateLabel.textContent = "Event Date";
    let eventDateInput = document.createElement("input");
    eventDateInput.value = eventToEdit.date;
    eventDateInput.setAttribute("type", "datetime-local");
    let eventLocationLabel = document.createElement("label");
    eventLocationLabel.textContent = "Event Location";
    let eventLocationInput = document.createElement("input");
    eventLocationInput.value = eventToEdit.location;

    // append inputs and labels
    eventNameEl.appendChild(eventNameLabel);
    eventNameEl.appendChild(eventNameInput);
    eventDateEl.appendChild(eventDateLabel);
    eventDateEl.appendChild(eventDateInput);
    eventLocationEl.appendChild(eventLocationLabel);
    eventLocationEl.appendChild(eventLocationInput);

            // create update button
            let updateButton = document.createElement("button");
            updateButton.textContent = "Update";

            // add an event upon clicking the update button that will take the newly added information and replace the existing event with the new information
            updateButton.addEventListener("click", () => {
                // object that contains the new information (or old information that is auto-filled into the input fields)
                let editedEvent = {
                   event_name: eventNameInput.value,
                   event_details: eventLocationInput.value,
                   event_date: eventDateInput.value,
                };
                // access the database and post the updated event
                API.edit(eventsUrl,eventId, editedEvent)
                // upload the updated list of events
               })
            }

    export default eventEditForm