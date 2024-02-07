const btn = document.querySelector(".button");
const nav = document.querySelector(".links");

// Firebase configuration and initialization
const firebaseConfig = {
    apiKey: "AIzaSyCC5ryRQHw-c_8ion6HqZ66aKjCrCxuPO4",
    authDomain: "contactform-siwes.firebaseapp.com",
    databaseURL: "https://contactform-siwes-default-rtdb.firebaseio.com",
    projectId: "contactform-siwes",
    storageBucket: "contactform-siwes.appspot.com",
    messagingSenderId: "800080610824",
    appId: "1:800080610824:web:43eed0c1034f811ac0f3bd"
};

firebase.initializeApp(firebaseConfig);

const contactFormDB = firebase.database().ref('contactForm');

// Function to submit the form
function submitForm(e) {
    e.preventDefault();

    const name = document.contactForm.name.value;
    const email = document.contactForm.email.value;
    const feedback = document.contactForm.feedback.value;

    const name_err = document.querySelector('.name-err');
    const email_err = document.querySelector('.add-err');
    const feedback_err = document.querySelector('.feedback-err');

    if (name.trim() === '') {
        name_err.innerHTML = "⚠️ Please enter your Name";
        return false;
    } else {
        name_err.innerHTML = '';
    }

    if (email.trim() === '') {
        email_err.innerHTML = "⚠️ Please enter a valid E-mail";
        return false;
    } else {
        email_err.innerHTML = '';
    }

    if (feedback.trim() === '') {
        feedback_err.innerHTML = "⚠️ You need to write a feedback";
        return false;
    } else {
        feedback_err.innerHTML = '';
    }

    // Save data to Firebase
    contactFormDB.push({
        name: name,
        email: email,
        feedback: feedback
    }).then(function () {
        console.log("Data successfully saved to Firebase");
        // Reset form fields
        document.getElementById('contactformid').reset();
    }).catch(function (error) {
        console.error("Error saving data to Firebase: ", error);
    });

    return true;
}


// Event listener for form submission
document.getElementById('contactformid').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Call the submitForm function to validate the form and save data to Firebase
    if (submitForm(event)) {
        console.log('Form submitted successfully');
    } else {
        console.log('Form validation failed');
    }
});

// Toggle navigation menu
btn.addEventListener('click', () => {
    if (nav.style.display == 'block') {
        nav.style.display = 'none';
        btn.src = './icon-hamburger.svg';
    } else {
        nav.style.display = 'block';
        btn.src = './icon-close-menu.svg';
    }
});
