

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