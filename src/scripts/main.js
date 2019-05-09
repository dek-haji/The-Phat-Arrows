
import API from "./dataFetch"
import domBuilder from "./domBuilder";
// API.delete(2)
domBuilder.createEventForm()
domBuilder.navbar()

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


