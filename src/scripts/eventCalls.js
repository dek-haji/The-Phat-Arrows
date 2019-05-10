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
               event_date: eventDate
           }
           API.save(eventsUrl, eventObj)
    })},
    newscall() {
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
            article_published: publishDate
          }
          API.save(articleUrl, newsObj)
    })},

    taskCall() {
    const saveNewTask = document.querySelector(".save--task")
    saveNewTask.addEventListener("click", (tasks) => {
        let taskName = document.querySelector(".new--task--name").value
        let taskCompletion = document.querySelector(".new--task--completion").value
        console.log("tasks", taskName, taskCompletion)
        const taskObj = {
            task_title: taskName,
            task_doneBy: taskCompletion
        }
        API.save(taskUrl, taskObj)
    })},
    messageCall() {
    const saveNewMessage = document.querySelector(".save--message")
    saveNewMessage.addEventListener("click", (message) => {
        let messageContent = document.querySelector("new--message--content")
        let messageDate = document.querySelector("new--message--date")
        let messageTime = document.querySelector("new--message--time")
        console.log("Messages", messageContent, messageDate, messageTime)
    })
    }
}



export default call