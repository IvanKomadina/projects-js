let cnt1 = 1;
let cnt2 = 0;
function calculate() {
    cnt1++;
    cnt2++;
    let price = document.querySelector('#price');
    let amount = document.querySelector('#litres');

    //Convert price and amount to float
    price = parseFloat(price.value);
    amount = parseFloat(amount.value);

    let cost = price * amount;
    cost = cost.toFixed(2);

    let newElement = document.createElement('p');
    newElement.className = 'final-price'+cnt1;
    newElement.innerText = 'Price for ' + amount + 'L of gas is ' + cost + '$';

    document.querySelector('.container').appendChild(newElement);
}

//remove previous calculated price
function remove() {
    let element = document.querySelector('.final-price'+cnt2);
    element.parentNode.removeChild(element);
}