
// console.log('script.js loaded');
// const socket = io();

// function sendMessage(user) {
//     let input = document.getElementById(`input-${user}`);
//     let message = input.value.trim();
//     if (message === "") return;
//     socket.emit('chat message',{ user , message});
//     input.value = "";
// }

// socket.on("chat message", ({user , message}) => {
//     const reciever = user === 1 ? 2 : 1;

//     // to create at reciver side
//     let chat = document.getElementById(`chat-box-${reciever}`);
//     let newMessage = document.createElement('div');
//     newMessage.classList.add('reciever','message')
//     newMessage.textContent = `${message}`;
//     chat.appendChild(newMessage);
//     newMessage.scrollIntoView({ behavior: "smooth", block: "end" });



//     // to create at sender side
//     let senderChat = document.getElementById(`chat-box-${user}`);
//     let senderMessage = document.createElement('div');
//     senderMessage.classList.add('sender','message')
//     senderMessage.textContent = `${message}`;
//     senderChat.appendChild(senderMessage);
//     senderMessage.scrollIntoView({ behavior: "smooth", block: "end" });

// });


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});


console.log('script.js loaded');
const socket = io();

function sendMessage(user) {
    let input = document.getElementById(`input-${user}`);
    let message = input.value.trim();
    if (message === "") return;
    socket.emit('chat message',message);

    let senderChat = document.getElementById(`chat-box`);
    let senderMessage = document.createElement('div');
    senderMessage.classList.add('sender','message')
    senderMessage.textContent = `${message}`;
    senderChat.appendChild(senderMessage);
    senderMessage.scrollIntoView({ behavior: "smooth", block: "end" });

    input.value = "";
}

socket.on("chat message", (message) => {

    console.log("message recieved: " + message);

    let chat = document.getElementById(`chat-box`);
    let newMessage = document.createElement('div');
    newMessage.classList.add('reciever','message')
    newMessage.textContent = `${message}`;
    chat.appendChild(newMessage);
    newMessage.scrollIntoView({ behavior: "smooth", block: "end" });
});