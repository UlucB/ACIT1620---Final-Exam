
// Question 1: Dark Mode

document.querySelector(".toggle").addEventListener("click", event =>{
    console.log(event)
    let body = document.querySelector("body")
    if (!body.classList.contains('light-theme')) {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
}   else {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
}
})

// Question 3: Contact Form

document.querySelector('#frm-btn').addEventListener('click', event => {
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let message = document.querySelector('#msg').value

    let contactList = [
        {
            'name': name,
            'email': email,
            'message': message,
        }]
    console.log(contactList[0])

    // for (i=0; i<contactList.length; i++) {console.log(contactList[i])}
})