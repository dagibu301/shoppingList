const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
const deleteButton = document.getElementsByTagName("i");
const clearButton = document.getElementById("clear");

strikeThrough = (e)=> {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

createDeleteButtonIcon = ()=> {
    for (let ind = 0; ind < li.length; ind++) {
        const createDeleteButton = document.createElement("i");
        const createDiv = document.getElementsByClassName("div");
        console.log(createDiv);
        createDeleteButton.classList.add("fa", "fa-trash");
        createDiv[ind].appendChild(createDeleteButton);
    }
}

deleteNodeOnClick = (e)=> {
    const trash = document.querySelectorAll("i");
    for (let ind = 0; ind < trash.length; ind++) {
        console.log(e);
        this.parentNode.parentNode.remove();
    }
}

inputLength = ()=> {
    return input.value.length;
}

createListElement = ()=> {
    const divClassWrapper = document.createElement("div");
    divClassWrapper.classList.add("li-wrapper");

    const li = document.createElement("li");
    const createDiv = document.createElement("div");

    li.appendChild(document.createTextNode(input.value));
    divClassWrapper.appendChild(li);
    divClassWrapper.appendChild(createDiv);
    ul.appendChild(divClassWrapper);

    input.value = "";
    createDiv.classList.add("div");
    const createDeleteButton = document.createElement("i");
    createDeleteButton.classList.add("fa", "fa-trash");
    createDiv.appendChild(createDeleteButton);
    deleteParentNodeOnClick();
}

addListAfterClick = ()=> {
    if (inputLength() > 0) {
        createListElement();
    }
}

addListAfterKeypress = (event)=> {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

deleteParentNodeOnClick = ()=> {
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteNodeOnClick);
    }
}

clearList = ()=> {
    ul.innerHTML = "";
}

clearButton.addEventListener("click", clearList);
ul.addEventListener("click", strikeThrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
createDeleteButtonIcon();
deleteParentNodeOnClick();
