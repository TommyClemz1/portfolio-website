const btn = document.querySelector(".button");
const nav = document.querySelector(".links")

function contact() {


    const name = document.contactForm.name.value;
    const email = document.contactForm.email.value;
    const feedback = document.contactForm.feedback.value;


    const name_err = document.querySelector('.name-err');
    const email_err = document.querySelector('.add-err');
    const feedback_err = document.querySelector('.feedback-err');



    if (name == '') {
        name_err.innerHTML = "⚠️Pls enter your Name";
        return false;
    } else {
        name_err.innerHTML = '';
    }
    if (email == '') {
        email_err.innerHTML = "⚠️Pls enter a valid E-mail";
        return false;
    } else {
        name_err.innerHTML = '';
    }
    if (feedback == '') {
        feedback_err.innerHTML = "⚠️You need to write a feedback";
        return false;
    } else {
        name_err.innerHTML = '';
    }


    alert(`Thank you ${name}! Would surely get back to you soon.`)

}



btn.addEventListener('click', () => {
   
    if (nav.style.display == 'block') {
        nav.style.display = 'none';
        btn.src = './icon-hamburger.svg';
    } else {
        nav.style.display = 'block';
        btn.src = './icon-close-menu.svg';
    }
})