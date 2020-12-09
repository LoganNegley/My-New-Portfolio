// Element selectors
const pageOffset = window.pageYOffset;
// Form selector
const form = document.getElementById('form');
// Sidebar selectors
const sidebar = document.getElementById('sidebar-container');
const projectBtn = document.getElementById('project-btn');
const resumeBtn = document.getElementById('resume-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');

// Sidebar scroll effect
window.addEventListener('scroll', (e) =>{
if(window.pageYOffset > 550){
    sidebar.style.visibility='visible'

}else{
    sidebar.style.visibility = 'hidden'
}
});


// Email function
form.addEventListener('submit' , (e) =>{
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    e.preventDefault();

    let data = {
        name,
        email,
        subject,
        message
    }
            
    axios.post('/email', data)
    .then((res) =>{
        document.getElementById("form").reset();
        alert('Message Sent Successfully! Thanks for connecting!')
        console.log('server received data')
    }).catch((err) =>{
        console.log('Error sending email', err)
    });
});