
import API from "./dataFetch"
import domBuilder from "./domBuilder";
import dataFetch from "./dataFetch";


const taskUrl = "http://localhost:3000/tasks";
const messagesUrl = "http://localhost:3000/messages";
const articleUrl = "http://localhost:3000/articles";
const usersUrl = "http://localhost:3000/users";
const eventsUrl = "http://localhost:3000/events";

domBuilder.createEventForm()
domBuilder.navbar()
domBuilder.createNewsForm()
domBuilder.createTaskForm()
const sign_in_btn = document.querySelector("#sign-in-btn")
const sign_up_btn = document.querySelector("#sign-up-btn")


sign_in_btn.addEventListener("click", function (e) {

    let username = document.querySelector("#sign-in-username").value
    let password = document.querySelector("#sign-in-password").value

    console.log(username + " " + password)
    //Add code here to ADD user

    //Then call function to update DOM
    //At this point SIGN UP SUCCESSFUL! or USERNAME NOT FOUND - SIGN UP!
})
sign_up_btn.addEventListener("click", function (e) {

    let username = document.querySelector("#sign-up-username").value
    let password = document.querySelector("#sign-up-password").value

    console.log(username + " " + password)
    //Add code here to ADD user

    //Then call function to update DOM
    //At this point SIGN UP SUCCESSFUL! or USER NAME ALREADY IN USE!
})





