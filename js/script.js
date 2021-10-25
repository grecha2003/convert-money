// Элемент для вывода евро
const EURviuw = document.querySelector('.eur')
// Элемент для вывода доллара
const USDviuw = document.querySelector('.usd')
const eurInRub = document.querySelector('.eur-in-rub')
const eurInput = document.querySelector('.eur-input')
const usdInRub = document.querySelector('.usd-in-rub')
const usdInput = document.querySelector('.usd-input')

// Объект валют
const valute = {
    EUR: "",
    USD: ""
}
 
// Делаем GET запрос на сервер 
axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
    .then((res) => { // Получаем результат
        // Берём евро
        valute.EUR = res.data.Valute.EUR.Value
        // Берём доллар
        valute.USD = res.data.Valute.USD.Value
        // Выводим евро
        EURviuw.textContent = valute.EUR
        // Выводим доллар
        USDviuw.textContent = valute.USD
    })

		eurInput.addEventListener('change', () => {
			if (!Number.isInteger(+eurInput.value)) {
					eurInRub.textContent = "Вы ввели не число"
			} else if (eurInput.value === '') {
					eurInRub.textContent = 0
			} else {
					eurInRub.textContent = Math.round(+eurInput.value * valute.EUR) + " Руб"
			}
	})
	
	usdInput.addEventListener('change', () => {
			if (!Number.isInteger(+usdInput.value)) {
					usdInRub.textContent = "Вы ввели не число"
			} else if (usdInput.value === '') {
					usdInRub.textContent = 0
			} else {
					usdInRub.textContent = Math.round(+usdInput.value * valute.USD) + " Руб"
			}
	})
	