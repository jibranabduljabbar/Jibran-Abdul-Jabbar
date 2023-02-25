const firebaseConfig = {
    apiKey: "AIzaSyCglRNJoI2Qw33E6jzFcs4t5nVDqwBWW_Q",
    authDomain: "jibran-abdul-jabbar-portfolio.firebaseapp.com",
    databaseURL: "https://jibran-abdul-jabbar-portfolio-default-rtdb.firebaseio.com",
    projectId: "jibran-abdul-jabbar-portfolio",
    storageBucket: "jibran-abdul-jabbar-portfolio.appspot.com",
    messagingSenderId: "589343918799",
    appId: "1:589343918799:web:f731821b81272d043905ba",
    measurementId: "G-VKH6QXBMEQ"
};
    firebase.initializeApp(firebaseConfig);


console.log(firebase)

var fname = document.getElementById("name");
var email = document.getElementById("email");
var project = document.getElementById("project");
var message = document.getElementById("subject");

function send(){
    var database = firebase.database().ref('Messages')
    var contact = {
        name: fname.value,
        email: email.value,
        project: project.value,
        message: message.value,
    }
    database.push(contact)

    fname.value = "";
    email.value = "";
    project.value = "";
    message.value = "";

    alert("Thank you for contacting you will receive message in your gmail as soon as possible.");
}

// Login Model

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}