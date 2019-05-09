const taskUrl = "http://localhost:3000/tasks";
const messagesUrl = "http://localhost:3000/messages";
const newsUrl = "http://localhost:3000/news";
const usersUrl = "http://localhost:3000/users";
const eventsUrl = "http://localhost:3000/events"


const API = {
    // getAllUsers: function() {
    //     return fetch(usersUrl).then(results => results.json());
    //   },


    getAll: function() {
      return fetch(eventsUrl)
      .then(results => results.json())
      .then(parsedEvents => {
        console.log(parsedEvents)
      })
    },
    getOne: function(Id) {
      return fetch(`${eventsUrl}/${Id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => response.json());
    },
    save: function(eventObject) {
      return fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(eventObject)
      }).then(response => response.json());
    },
    delete: function(eventId) {
      return fetch(`${baseUrl}/${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => response.json());
    },
    edit: function(id, object) {
      return fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
      }).then(response => response.json());
    }

  }


  //   getAllTasks: function() {
  //       return fetch(baseUrl).then(results => results.json());
  //     },
  //     getOneTask: function(taskId) {
  //       return fetch(`${baseUrl}/${taskId}`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       }).then(response => response.json());
  //     },
  //     saveTask: function(taskObject) {
  //       return fetch(baseUrl, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify(taskObject)
  //       }).then(response => response.json());
  //     },
  //     deleteTask: function(taskId) {
  //       return fetch(`${baseUrl}/${taskId}`, {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       }).then(response => response.json());
  //     },
  //     editTask: function(taskId, taskObject) {
  //       return fetch(`${baseUrl}/${taskId}`, {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify(taskObject)
  //       }).then(response => response.json());
  //     },



  //     getAllArticles: function() {
  //       return fetch(baseUrl).then(results => results.json());
  //     },
  //     getOneArticle: function(articleId) {
  //       return fetch(`${baseUrl}/${articleId}`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       }).then(response => response.json());
  //     },
  //     saveArticle: function(articleObject) {
  //       return fetch(baseUrl, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify(articleObject)
  //       }).then(response => response.json());
  //     },
  //     deleteArticle: function(articleId) {
  //       return fetch(`${baseUrl}/${articleId}`, {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       }).then(response => response.json());
  //     },
  //     editArticle: function(articleId, articleObject) {
  //       return fetch(`${baseUrl}/${articleId}`, {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify(articleObject)
  //       }).then(response => response.json());
  //     }

  // };



  export default API
