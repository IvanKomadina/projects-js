let total = 0;

function addToWatchlist(element) {
    let mainEl = element.closest('.single-item');
    let priceString = mainEl.querySelector('.price').innerText;
    let priceNum = priceString.substring(8, 10);
    priceNum = parseInt(priceNum);
    total += priceNum;

    let totalPriceDiv = document.querySelector('.totalPrice');
    totalPriceDiv.innerHTML =  `<style>
                                    .totalPrice {
                                        background-color: white;
                                        width: 170px;
                                        padding: 20px;
                                        margin-left: 50px;
                                        border-radius: 10px;
                                        background-color: lightcoral;
                                        font-weight: bold;
                                        font-size: 17px;
                                    }
                                </style>
                                <p>Total price: $${total}`;
    totalPriceDiv.style.display = 'block';                          
    element.innerText = 'Watched';
    element.setAttribute('disabled', 'true');
    element.classList.add('checked');
    element.classList.remove('active');  
    
    let clearDiv = document.querySelector('.clearDiv');
    clearDiv.innerHTML = `<style>
                            .clearDiv {
                                width: 170px;
                                margin-left: 50px;
                                margin-bottom: 20px;
                                margin-top: 10px;
                                padding-bottom: 20px;
                            }
                        </style>
                        <button onclick="clearWatchlist()" class="clearBtn">Clear</button>`; 
    clearDiv.style.display = 'block';  
}

function clearWatchlist() {
    total = 0;
    let clearDiv = document.querySelector('.clearDiv');
    clearDiv.style.display = 'none';

    let totalPriceDiv = document.querySelector('.totalPrice');
    totalPriceDiv.style.display = 'none';

    let watchButtons = document.querySelectorAll('.watch-button');
    for(let i = 0; i < watchButtons.length; i++) {
        watchButtons[i].classList.add('active');
        watchButtons[i].classList.remove('checked');
        watchButtons[i].removeAttribute('disabled');
        watchButtons[i].innerText = 'Watch';
    }
}