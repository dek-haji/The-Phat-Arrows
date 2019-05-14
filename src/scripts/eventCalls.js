import domBuilder from "./domBuilder";
import API from "./dataFetch";
const eventsUrl = "http://localhost:3000/events";
const articleUrl = "http://localhost:3000/articles";
const taskUrl = "http://localhost:3000/tasks";
const messagesUrl = "http://localhost:3000/messages";

const call = {
    eventCall() {
        const saveEventsButton = document.querySelector(".event--save--button")
        saveEventsButton.addEventListener("click", (events) => {
            let eventName = document.querySelector(".new--event--name").value
            let eventDate = document.querySelector(".new--event--date").value
            let eventLocation = document.querySelector(".new--event--location").value
            console.log("events", eventName, eventDate, eventLocation)
            const eventObj = {
                event_name: eventName,
                event_details: eventLocation,
                event_date: eventDate,
                userId: sessionStorage.getItem("session_user_id")
            }
            API.save(eventsUrl, eventObj)
                .then(after => {
                    domBuilder.clearDOM()
                    domBuilder.createEventOutput()
                    domBuilder.createEventForm()
                    this.eventCall()
                })

        })
    },
    newsCall() {
        const saveNewsButton = document.querySelector(".task--news--button")
        saveNewsButton.addEventListener("click", (news) => {
            let newsName = document.querySelector(".new--news--name").value
            let synopsis = document.querySelector(".new--news--synopsis").value
            let newsUrl = document.querySelector(".new--news--url").value
            let publishDate = document.querySelector(".new--publish--date").value
            console.log("news", newsName, synopsis, newsUrl)
            const newsObj = {
                article_title: newsName,
                article_blurb: synopsis,
                article_link: newsUrl,
                article_published: publishDate,
                userId: sessionStorage.getItem("session_user_id")
            }
            API.save(articleUrl, newsObj)
                .then(after => {
                    domBuilder.clearDOM()
                    domBuilder.createNewsOutput()
                    domBuilder.createNewsForm()
                    this.newsCall()
                })
        })
    },

    taskCall() {
        const saveNewTask = document.querySelector(".save--task")
        saveNewTask.addEventListener("click", (e) => {
            let taskName = document.querySelector(".new--task--name").value
            let taskCompletion = document.querySelector(".new--task--completion").value
            console.log("tasks", taskName, taskCompletion, taskUrl)
            const taskObj = {
                task_title: taskName,
                task_doneBy: taskCompletion,
                task_completed: false,
                userId: sessionStorage.getItem("session_user_id")
            }
            API.save(taskUrl, taskObj)
                .then(after => {
                    domBuilder.clearDOM()
                    domBuilder.createTaskOutput()
                    domBuilder.createTaskForm()
                    this.taskCall()
                })
        })
    },
    messageCall() {
        const saveNewMessage = document.querySelector(".save--message")
        saveNewMessage.addEventListener("click", () => {
            let messageContent = document.querySelector(".new--message--content").value
            let newDate = new Date()
            console.log(newDate)
            const messageObj = {
                message_content: messageContent,
                userId: sessionStorage.getItem("session_user_id"),
                userName: sessionStorage.getItem("session_user_name"),
                date: newDate
            }
            API.save(messagesUrl, messageObj)
                .then(after => {
                    domBuilder.clearDOM()
                    domBuilder.createMessageOutput()
                    domBuilder.createMessageForm()
                    this.messageCall()
                })
        })
    },
    messageReset() {
        domBuilder.clearDOM()
        domBuilder.createMessageOutput()
        domBuilder.createMessageForm()
        //this.messageCall()
    },
    taskReset() {
        domBuilder.clearDOM()
        domBuilder.createTaskOutput()
        domBuilder.createTaskForm()
        //this.messageCall()
    }
}

export default call