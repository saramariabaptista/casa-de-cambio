import Swal from 'sweetalert2';

const searchButton = document.querySelector('#buttonSearch');
const input = document.querySelector('#inputText');
const content = document.querySelector('#container');
const BASE_URL = 'https://api.exchangerate.host/latest?base=';

searchButton.addEventListener('click', () => {
    localStorage.clear();
    const currency = input.value.toUpperCase();
    return fetch(`${BASE_URL}${currency}`)
        .then((Response) => Response.json())
        .then((data) => {
            if (!Object.keys(data.rates).includes(currency)) {
                throw new Error();
            }
            return Object.entries(data.rates).map(([code, rate]) => {
                const div = document.createElement('div');
                div.innerHTML = `${code}: ${rate}`;
                return div;
            });
        })
        .then((divElements) => {
            divElements.forEach((div) => {
                content.appendChild(div);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            // Show error message using SweetAlert2
            Swal.fire({
                title: 'Error!',
                text: 'Moeda inserida inválida',
                icon: 'error',
                confirmButtonText: 'Entendi',
            });
        });
});
