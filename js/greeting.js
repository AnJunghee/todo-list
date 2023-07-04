const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.getElementById('greeting');
const todoListWrap = document.getElementById('todo-wrap');
const quoteList = document.getElementById('quote');

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    let username = loginInput.value; //입력받은 이름
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Welcome to Todolist ${username} 💝`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoListWrap.classList.remove(HIDDEN_CLASSNAME);
    quoteList.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    // 폼 보이게
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // 폼 안보이고 이름 보이게
    paintGreetings(savedUserName);
}