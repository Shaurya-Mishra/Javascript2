const Bas_URL = "https://latest.https://v6.exchangerate-api.com/v6/0df0f1dc693c57cd5a04547e/latest/USD-api.pages.dev/v1/currencies/eur.json";
// for (code in countryList)
// {
//   console.log(code,countryList[code]);
// }
const dropdowns =document .querySelector(".dropdown select");
for (let select of dropdowns) {
        for (currCode in countryList) {
                let newOption = document.createElement("option");
                newOption.innerText = currCode;
                newOption.value = currCode;
                select.append(newOption);


        }
}
