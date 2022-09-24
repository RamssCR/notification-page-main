const notifNumber = document.querySelector('#notification-number');
const markRead = document.querySelector('.notification-read');
let counter = 3;
let notifications = document.querySelectorAll('.notification');
notifications = [...notifications];
let dots = document.querySelectorAll('.red-dot');
dots = [...dots];
let unreads = document.querySelectorAll('.unread');
unreads = [...unreads]

markRead.addEventListener('click', ()=>{
    counter = 0;
    notifNumber.textContent = counter;

    notifications.forEach(notification =>{
        notification.classList.remove('unread');
    })

    dots.forEach(dot =>{
        dot.style.display = 'none';
    })
})

unreads.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
        if (counter > 0) {
            item.classList.remove('unread');
            dots[index].style.display = 'none';
            counter--
            notifNumber.textContent = counter;
        }
    })
})