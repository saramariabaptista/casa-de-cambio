import './style.css';
import swal from 'sweetalert2';

const btnSubmit = document.getElementById('btn-submit');
const baseUrl = 'https://api.exchangerate.host/latest?base=';

let coinsDownload = [];
const coins = () => {
    fetch(`${baseUrl}EUR`)
        .then((received) => received.json())
        .then((data) => {
            Object.keys(data.rates).forEach((element) => coinsDownload.push(element));
        });
};

const verify = (imput) => {
    if (imput === '') {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Você precisa passar uma moeda!',
        });
        return false;
    } else if (!coinsDownload.some((coin) => coin === imput)) {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Moeda não existente!',
        });
        return false;
    }
    return true;
};

const addDivs = (object, coin) => {
    const divReturn = document.getElementById('return-div');
    if (divReturn.childNodes.length > 3) {
        divReturn.innerHTML = '';
    }
    const h2 = document.getElementById('return-h2');
    h2.innerHTML = `Valores referentes a 1 ${coin}.`;
    Object.entries(object.rates).forEach(element => {
        const div = document.createElement('div');
        const spanCoin = document.createElement('span');
        const spanValue = document.createElement('span');
        const imgCoin = document.createElement('img');
        spanCoin.className = 'coin';
        spanValue.className = 'value';
        spanCoin.innerHTML = element[0];
        spanValue.innerHTML = element[1];
        imgCoin.src = './src/imgs/moeda.png';
        div.id = 'divs-coin';
        div.appendChild(imgCoin);
        div.appendChild(spanCoin);
        div.appendChild(spanValue);
        divReturn.appendChild(div);
    }); 
};

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    const imputCoin = document.getElementById('imput-coin').value;
    if (verify(imputCoin)) {
        fetch(`${baseUrl}${imputCoin}`)
            .then((received) => received.json())
            .then((data) => addDivs(data, imputCoin));
    }
});

window.onload = coins;