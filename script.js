const brutto = document.querySelector('#brutto');
const vat = document.querySelector('#vat');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costinfo = document.querySelector('.cost-info');
const costInfoVat = document.querySelector('.cost-info-vat');
const cost = document.querySelector('.cost');
const costVat = document.querySelector('.cost-vat');

const showVat = () => {
    if (brutto.value == '' || vat.value == 0) {
        error.textContent = 'Uzupełnij wszystkie pola !';
        costinfo.style.display = 'none';
    } else {
        error.textContent = '';
        countVat();
    }
}

const countVat = () => {
    const kwota = parseFloat(brutto.value);
    // const newPeople = parseInt(people.value);
    const stawkaVat = parseFloat(vat.value);

    const sumVat = ((kwota * stawkaVat) / (1 + stawkaVat)).toFixed(2);
    console.log(sumVat);
   
    const kwotaNetto = kwota - sumVat;

    costinfo.style.display = 'block';
    costInfoVat.style.display = 'block';
    costVat.textContent = sumVat;
    cost.textContent = kwotaNetto.toFixed(2)

}
countBtn.addEventListener('click', showVat)