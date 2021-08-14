
let socket=io();
socket.emit("user-connected",name);

socket.on("user-joined",function(name){
    let chatJoined=document.createElement("div");
    chatJoined.classList.add("chat");
    chatJoined.classList.add("join");
    chatJoined.innerHTML=name +" joined the chat"
    document.querySelector(".chat-window").append(chatJoined)
})

socket.on("user-leave",function(name){
    let chatJoined=document.createElement("div");
    chatJoined.classList.add("chat");
    chatJoined.classList.add("leave");
    chatJoined.innerHTML=name +" leaved the chat"
    document.querySelector(".chat-window").append(chatJoined)
})