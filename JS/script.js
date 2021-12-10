
// Question 1: Dark Mode

document.querySelector(".toggle").addEventListener("click", (event) => {
    let body = document.querySelector("body")
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
}   else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
}
})

// Question 3: Contact Form

let contactList=[]

document.querySelector('#frm-btn').addEventListener('click', (event) => {
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let message = document.querySelector('#msg').value

    contactList.push(
        {
            'email': email,
            'name': name,
            'message': message,
        })

    // if there are multiple submits, the below line will print ALL submitted contacts one object at a time
    for (i=0; i<contactList.length; i++) 
        {console.log(contactList[i])}

    // if you want JUST the last created contact, use the below line instead
    // console.log(contactList[contactList.length-1])
})