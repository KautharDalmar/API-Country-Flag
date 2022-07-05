
let coutryName = document.getElementById('country-name')
let countryFlag = document.getElementById('country-flag')
let searchkBtn =  document.getElementById('search')

searchkBtn.addEventListener("submit", (e) => {
 e.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${e.target[0].value}`)
    .then((resp) => resp.json())
    .then((data)=> {
        console.log(data);
        coutryName.textContent = data[0].name.common;
        countryFlag.innerHTML  =`<img src =${data[0].flags.png} alt= "country flag">`;
    })
});

