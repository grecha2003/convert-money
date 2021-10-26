const valuteCourses = {};
const elementUSD = document.querySelector('[data-value="USD"]')
const elementEUR = document.querySelector('[data-value="EUR"]')

const input = document.querySelector('#input')
const result = document.querySelector('#result')
const select = document.querySelector('#select')
getCurrencies()

async function getCurrencies () {
	const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
	const data = await response.json();
	const result = await data;
	
	valuteCourses.USD = result.Valute.USD;
	valuteCourses.EUR = result.Valute.EUR;
	console.log(valuteCourses)
	// elementUSD.textContent = valuteCourses.USD.Value.toFixed(2);
	// elementEUR.textContent = valuteCourses.EUR.Value.toFixed(2);
}

input.oninput = function() {
	console.log('Changed!');
	result.value = (parseFloat(input.value) / valuteCourses[select.value].Value).toFixed(2);
}

select.oninput = function() {
	console.log('Changed!');
	result.value = (parseFloat(input.value) / valuteCourses[select.value].Value).toFixed(2);
}

function converValue() {
	result.value = (parseFloat(input.value) / valuteCourses[select.value].Value).toFixed(2);
}