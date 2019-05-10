// this will be our fetch calls component.

//These are the URLs we need to copy into the events/messages/tasks/news.js files.
const taskUrl = "http://localhost:3000/tasks";
const messagesUrl = "http://localhost:3000/messages";
const articleUrl = "http://localhost:3000/articles";
const usersUrl = "http://localhost:3000/users";
const eventsUrl = "http://localhost:3000/events";

//When calling the function, the URL will be the one that is unique to each JS file.  example.  API.getOne(articleUrl, 2); will get you the second article.  Copy past the var that you need from above, at the top of your .js.
const API = {

  userLogin: function (username, password) {
    return fetch(`http://localhost:3000/users?user_name=${username}&password=${password}`)
      .then(results => results.json())
      .then(parsedEvents => {
        return parsedEvents
      })
  },
  existingUserCheck: function (username) {
    return fetch(`http://localhost:3000/users?user_name=${username}`)
      .then(results => results.json())
      .then(parsedEvents => {
        return parsedEvents
      })
  },
  getAll: function (url) {
    return fetch(url)
      .then(results => results.json())
      .then(parsedResults => {
        console.log("this is get all", parsedResults)
      })
  },
  getOne: function (url, Id) {
    return fetch(`${url}/${Id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(parsedResults => {
        //console.log("this is a single obj", parsedResults)
        return parsedResults
      });
  },
  save: function (url, object) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    }).then(response => response.json())
      .then(savedData => {
        console.log("this is savedData", savedData)
      });
  },
  delete: function (url, Id) {
    return fetch(`${url}/${Id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(console.log("succesfully deleted"));
  },
  edit: function (url, id, object) {
    return fetch(`${url}/${id}`, {
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
