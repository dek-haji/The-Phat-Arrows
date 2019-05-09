
import API from "./dataFetch"
import eventsForm from "./events";
// API.delete(2)


const sign_in_btn = document.querySelector("#sign-in-btn")
const sign_up_btn = document.querySelector("#sign-up-btn")



sign_in_btn.addEventListener("click", function (e) {

    let username = document.querySelector("#sign-in-username").value
    let password = document.querySelector("#sign-in-password").value
    //Check to make sure fields aren't blank
    if (username === "" || password === "") {
        window.alert("Please Enter Username & Password")
    }
    API.userLogin(username, password)
        .then(result => {
            if (result.length === 0){
                sessionStorage.clear();
                window.alert("Username and/or Password not found!")
            }
            else {
               // let data = String(result[0].id)
                let data = result[0].id
                //console.log(`User ID is equal to ${data}`)
                sessionStorage.setItem("session_user_id", data)
                //console.log("HELLO")

            }
        })

    //console.log(username + " " + password)
    //Add code here to ADD user

    //Then call function to update DOM
    //At this point SIGN UP SUCCESSFUL! or USERNAME NOT FOUND - SIGN UP!
})
sign_up_btn.addEventListener("click", function (e) {

    let username = document.querySelector("#sign-up-username").value
    let password = document.querySelector("#sign-up-password").value
    //Check to make sure fields aren't blank
    if (username === "" || password === "") {
        window.alert("Please Enter Username & Password")
    }


    console.log(username + " " + password)
    //Add code here to ADD user

    //Then call function to update DOM
    //At this point SIGN UP SUCCESSFUL! or USER NAME ALREADY IN USE!
})




