
import API from "./dataFetch"
import domBuilder from "./domBuilder";
import dataFetch from "./dataFetch";
import call from "./eventCalls";


const taskUrl = "http://localhost:3000/tasks";
const messagesUrl = "http://localhost:3000/messages";
const articleUrl = "http://localhost:3000/articles";
const usersUrl = "http://localhost:3000/users";
const eventsUrl = "http://localhost:3000/events";


const sign_in_btn = document.querySelector("#sign-in-btn")
const sign_up_btn = document.querySelector("#sign-up-btn")

const log_out_btn = document.querySelector(".logout")

//Check to see if user is logged in
var curr_id = sessionStorage.getItem("session_user_id")
if (curr_id > 0) {
    sendUserHome()
}

//SIGN IN BUTTON LISTENER
sign_in_btn.addEventListener("click", function (e) {
    let username = document.querySelector("#sign-in-username").value
    let password = document.querySelector("#sign-in-password").value
    //Check to make sure fields aren't blank
    if (username === "" || password === "") {
        window.alert("Please Enter Username & Password")
    }
    else {
        API.userLogin(username, password)
            .then(result => {
                //If result is not found, alert the user
                if (result.length === 0) {
                    sessionStorage.clear();
                    window.alert("Username and/or Password not found - Sign Up Today!")
                    //clear inputs
                    document.querySelector("#sign-in-username").value = ""
                    document.querySelector("#sign-in-password").value = ""
                }
                //If user is found, store their id in the session memory
                else {
                    let sessionId = result[0].id
                    let sessionName = result[0].user_name
                    sessionStorage.setItem("session_user_name", sessionName)
                    sessionStorage.setItem("session_user_id", sessionId)
                    //populate menu
                    sendUserHome()
                }
            })
    }

    //Then call function to update DOM
    //At this point SIGN UP SUCCESSFUL! or USERNAME NOT FOUND - SIGN UP!
})
//Sign Up Button Listener
sign_up_btn.addEventListener("click", function (e) {

    let username = document.querySelector("#sign-up-username").value
    let password = document.querySelector("#sign-up-password").value
    //Check to make sure fields aren't blank
    if (username === "" || password === "") {
        window.alert("Please Enter Username & Password")
    }
    else {
        //Check that username isnt already taken
        API.existingUserCheck(username)
            .then(existingUsers => {
                //If result already exists, alert user
                if (existingUsers.length > 0) {
                    sessionStorage.clear();
                    window.alert("Username Already Exists!")
                    //clear inputs
                    document.querySelector("#sign-up-username").value = ""
                    document.querySelector("#sign-up-password").value = ""
                }
                //Else create the user in API/Json and log them into session storage
                else {
                    //put user data into object
                    let obj = {
                        user_name: username,
                        password: password
                    }
                    //Add user to API/Json
                    console.log(obj)
                    API.save("http://localhost:3000/users", obj)
                        .then(next => {
                            API.userLogin(username, password)
                                .then(result => {
                                    let sessionId = result[0].id
                                    let sessionName = result[0].user_name
                                    sessionStorage.setItem("session_user_name", sessionName)
                                    sessionStorage.setItem("session_user_id", sessionId)
                                    // sendUserHome()
                                })
                        })
                }
            })
    }

    //Then call function to update DOM
    //At this point SIGN UP SUCCESSFUL! or USER NAME ALREADY IN USE!
})


//This is the home page after a user logs in
function sendUserHome() {
    curr_id = sessionStorage.getItem("session_user_id")
    API.getOne("http://localhost:3000/users", curr_id)
        .then(user => {
            console.log("Currently Logged In As ", user.user_name)

            //Hide credential forms
            let sign_in = document.querySelector(".sign-in")
            let sign_up = document.querySelector(".sign-up")
            sign_in.style.display = "none"
            sign_up.style.display = "none"
            //let credentials = document.querySelector(".credentials")
            //credentials.style.display = "none"
            let greeting_div = document.createElement("div")
            let greeting = document.createElement("h2")
            greeting.textContent = `${user.user_name}, `
            let greeting2 = document.createElement("h4")
            greeting2.textContent = "this is your day in a nutshell"
            //Fancy code to turn one word a certain color
            greeting2.innerHTML = greeting2.innerHTML.replace("nutshell", "<span style='color: red;'>nutshell</span>")
            greeting_div.appendChild(greeting)
            greeting_div.appendChild(greeting2)
            let home = document.querySelector(".home-div")
            home.appendChild(greeting_div)
            greeting_div.className = "greeting-div"
            greeting_div.id = "greeting-div"
        })
    //populate menu
    document.querySelector(".menu").style.visibility = "visible"
}

log_out_btn.addEventListener("click", function (e) {
    //hide the menu
    document.querySelector(".menu").style.visibility = "hidden"
    //clear the  session id
    sessionStorage.clear();
    //Add image back
    image.style.display = "initial"
    //nuke the greeting dom elements
    let greetingExists = document.getElementById("greeting-div")
    if (greetingExists) {
        let greetingParent = greetingExists.parentNode
        greetingParent.removeChild(greetingExists)
    }
    //Make credential forms show up again
    let sign_in = document.querySelector(".sign-in")
    let sign_up = document.querySelector(".sign-up")
    sign_in.style.display = "initial"
    sign_up.style.display = "initial"
    //Clear inputs
    document.querySelector("#sign-up-username").value = ""
    document.querySelector("#sign-up-password").value = ""
    document.querySelector("#sign-in-username").value = ""
    document.querySelector("#sign-in-password").value = ""
    domBuilder.clearDOM()

})
//ADD LISTENERS TO NAV BAR
//
//
var image = document.querySelector(".bg-img")

//

let home = document.querySelector(".home")
home.addEventListener("click", function (e) {
    image.style.display = "initial"
    let greetingExists = document.getElementById("greeting-div")
    if (greetingExists) {
        let greetingParent = greetingExists.parentNode
        greetingParent.removeChild(greetingExists)
    }
    domBuilder.clearDOM()
    //Build the Output and input Form
    sendUserHome()

})
let news = document.querySelector(".news")
news.addEventListener("click", function (e) {
    //remove bg image
    image.style.display = "none"
    //remove greeting
    let greetingExists = document.getElementById("greeting-div")
    if (greetingExists) {
        let greetingParent = greetingExists.parentNode
        greetingParent.removeChild(greetingExists)
    }
    domBuilder.clearDOM()
    //Build the Output and input Form
    domBuilder.createNewsOutput()
    domBuilder.createNewsForm()
    call.newsCall()

})
let events = document.querySelector(".events")
events.addEventListener("click", function (e) {
    //remove bg image
    image.style.display = "none"
    //remove greeting
    let greetingExists = document.getElementById("greeting-div")
    if (greetingExists) {
        let greetingParent = greetingExists.parentNode
        greetingParent.removeChild(greetingExists)
    }
    domBuilder.clearDOM()
    //Build the Output and input Form
    domBuilder.createEventOutput()
    domBuilder.createEventForm()
    call.eventCall()
})
let tasks = document.querySelector(".tasks")
tasks.addEventListener("click", function (e) {
    //remove bg image
    image.style.display = "none"
    //remove greeting
    let greetingExists = document.getElementById("greeting-div")
    if (greetingExists) {
        let greetingParent = greetingExists.parentNode
        greetingParent.removeChild(greetingExists)
    }
    domBuilder.clearDOM()
    //Build the Output and input Form
    domBuilder.createTaskOutput()
    domBuilder.createTaskForm()
    call.taskCall()

})
let messages = document.querySelector(".messages")
messages.addEventListener("click", function (e) {
    //remove bg image
    image.style.display = "none"
    //remove greeting
    let greetingExists = document.getElementById("greeting-div")
    if (greetingExists) {
        let greetingParent = greetingExists.parentNode
        greetingParent.removeChild(greetingExists)
    }
    domBuilder.clearDOM()
    //Build the Output and input Form
    domBuilder.createMessageOutput()
    domBuilder.createMessageForm()
    call.messageCall()
})




//domBuilder.createNewsOutput()
//domBuilder.createEventOutput()
//domBuilder.createNewsOutput()
//domBuilder.createTaskOutput()
