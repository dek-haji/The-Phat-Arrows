// this will be our fetch calls component.


const taskUrl = "http://localhost:3000/tasks";
const messagesUrl = "http://localhost:3000/messages";
const articleUrl = "http://localhost:3000/articles";
const usersUrl = "http://localhost:3000/users";
const eventsUrl = "http://localhost:3000/events"


const API = {

  userLogin: function(username, password) {
    return fetch(`http://localhost:3000/users?user_name=${username}&password=${password}`)
      .then(results => results.json())
      .then(parsedEvents => {
        return parsedEvents
      })
    },
  getAll: function() {
    return fetch(eventsUrl)
      .then(results => results.json())
      .then(parsedEvents => {
        console.log("this is get all", parsedEvents)
      })
    },
getOne: function(Id) {
  return fetch(`${eventsUrl}/${Id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
    .then(parsedSingle => {
      console.log("this is a single obj", parsedSingle)
    });
},
save: function(eventObject) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(eventObject)
  }).then(response => response.json())
    .then(savedData => {
      console.log("this is savedData", savedData)
    });
},
delete: function(eventId) {
  return fetch(`${eventsUrl}/${eventId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
    .then(console.log("succesfully deleted"));
},
edit: function(id, object) {
  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
  }).then(response => response.json())
    .then(editedDated => {
      console.log("this is edited stuff", editedDated)
    });
}

  }


export default API
