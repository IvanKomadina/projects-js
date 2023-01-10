//Add entered text to the list when clicking add button
function addListItem() {
    let inputValue = document.querySelector('#chore').value;
    let newItem = document.createElement('li');
    let text = document.createTextNode(inputValue);
    newItem.appendChild(text);
    if (inputValue === '') {
        alert('You must enter something.');
    }
    else {
        document.querySelector('ul').appendChild(newItem);
    }
    document.querySelector('#chore').value = ''; 

    let button = document.createElement('span');
    let text2 = document.createTextNode('\u00D7');
    button.appendChild(text2);
    button.className = 'close';
    newItem.appendChild(button);

    let closeList = document.querySelectorAll('.close');
    for (i = 0; i < closeList.length; i++) {
        closeList[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        }
    }
}

//Create close button at the end of every list item
function closeButton() {
    let list = document.querySelectorAll('li');
    let i;
    for(i = 0; i < list.length; i++) {
        let button = document.createElement('span');
        let text = document.createTextNode('\u00D7');
        button.className = 'close';
        button.appendChild(text);
        list[i].appendChild(button);
    } 
}
closeButton();

//Click on a close button to hide item
function removeChore () {
    let remove = document.querySelectorAll('.close');
    let i;
    for(i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            let item = this.parentElement;
            item.style.display = 'none';
        }
    }
}
removeChore();

//Add check mark and line through list item onclick
function checkedItem() {
    let list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        }
    }, false);
}
checkedItem();
