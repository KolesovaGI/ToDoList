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
    const list = document.querySelector('ul');

    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            updateCounters();
        }
        else if (ev.target.tagName === "SPAN") {
            let div = ev.target.parentNode;
            div.remove();
            updateCounters();
    }}, false);

}

function handleKeyPress(e){
    const key=e.keyCode || e.which;

    if (key === 13){ // Клавиша Enter
        addToList();
    }
}

// Добавление дела
function addToList() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("input").value;
    const t = document.createTextNode(inputValue);

    li.appendChild(t);

    if (inputValue === '') {
        alert("Дело пустым не бывает");
    } else {
        document.getElementById("list").appendChild(li);
    }
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

    updateCounters();
}

// Показать все дела
function showAll() {
    const todoList = document.getElementsByTagName("li");

    for (let i = 0; i < todoList.length; i++) {
        if (todoList.item(i).classList.contains('hide')) {
            todoList.item(i).classList.remove('hide');
        }
    }
}

// Показать выполненные дела
function showChecked() {
    const todoList = document.getElementsByTagName("li");

    for (let i = 0; i < todoList.length; i++) {
        if (todoList.item(i).classList.contains('checked')) {
            todoList.item(i).classList.remove('hide');
        }
        else {
            todoList.item(i).classList.add('hide');
        }
    }
}

// Показать несделанное (девочки, тут баг, я хз что делать)
function showUnfinished() {
    const todoList = document.getElementsByTagName("li");

    for (let i = 0; i < todoList.length; i++) {
        if (todoList.item(i).classList.contains ('checked')) {
            todoList.item(i).classList.add('hide');
        }
        else {
            todoList.item(i).classList.remove('hide');
        }
    }
}

function updateCounters() {
    const allCount = document.getElementById('allCount');
    let doneCount = document.getElementById('doneCount');
    let notDoneCount = document.getElementById('notDoneCount');
    let allNum = document.querySelectorAll('li').length.toString();
    let doneNum = document.querySelectorAll('li.checked').length.toString()
    let notDoneNum = allNum - doneNum;

    allCount.innerText = allNum;
    doneCount.innerText = doneNum;
    notDoneCount.innerText = notDoneNum.toString();
}

