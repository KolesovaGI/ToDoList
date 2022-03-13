window.onload = function initRemoveButtons() {
    const todoList = document.getElementsByTagName("li");

    for (let i = 0; i < todoList.length; i++) {
        const span = document.createElement("span");
        const btn = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(btn);
        todoList[i].appendChild(span);
    }

    const close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }

    const list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

// Добавление дела
function addToList() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("input").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);

    document.getElementById("list").appendChild(li);
    document.getElementById("input").value = "";

    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    const close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Локальный сторож работать не хочет
    //localStorage.setItem('span', value);
    //localStorage.getItem(span);
}

// Показать все дела
function showAll() {
    const todoList = document.getElementsByTagName("li");

    for (let i = 0; i < todoList.length; i++) {
        if (todoList.item(i).className === 'hide') {
            todoList.item(i).className = '';
        }
    }
}

// Показать выполненные дела
function showChecked() {
    const todoList = document.getElementsByTagName("li");

    for (let i = 0; i < todoList.length; i++) {
        if (todoList.item(i).classList.value !== 'checked') {
            todoList.item(i).className = 'hide';
        }
    }
}

// Показать несделанное (девочки, тут баг, я хз что делать)
function showUnfinished() {
    const todoList = document.getElementsByTagName("li");

    for (let i = 0; i < todoList.length; i++) {
        if (todoList.item(i).classList.value === 'checked') {
            todoList.item(i).className = 'hide';
        }
    }
}