// https://www.omnicalculator.com/finance/what-to-offer-on-a-house

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const offeramountRadio = document.getElementById('offeramountRadio');
const fairmarketvalueRadio = document.getElementById('fairmarketvalueRadio');
const costofrenovationRadio = document.getElementById('costofrenovationRadio');
const desireddiscountRadio = document.getElementById('desireddiscountRadio');

let offeramount;
let fairmarketvalue = v1;
let costofrenovation = v2;
let desireddiscount = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

offeramountRadio.addEventListener('click', function() {
  variable1.textContent = 'Fair market value';
  variable2.textContent = 'Cost of renovation';
  variable3.textContent = 'Desired discount';
  fairmarketvalue = v1;
  costofrenovation = v2;
  desireddiscount = v3;
  result.textContent = '';
});

fairmarketvalueRadio.addEventListener('click', function() {
  variable1.textContent = 'Offer amount';
  variable2.textContent = 'Cost of renovation';
  variable3.textContent = 'Desired discount';
  offeramount = v1;
  costofrenovation = v2;
  desireddiscount = v3;
  result.textContent = '';
});

costofrenovationRadio.addEventListener('click', function() {
  variable1.textContent = 'Offer amount';
  variable2.textContent = 'Fair market value';
  variable3.textContent = 'Desired discount';
  offeramount = v1;
  fairmarketvalue = v2;
  desireddiscount = v3;
  result.textContent = '';
});

desireddiscountRadio.addEventListener('click', function() {
  variable1.textContent = 'Offer amount';
  variable2.textContent = 'Fair market value';
  variable3.textContent = 'Cost of renovation';
  offeramount = v1;
  fairmarketvalue = v2;
  costofrenovation = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(offeramountRadio.checked)
    result.textContent = `Offer amount = ${computeofferamount().toFixed(2)}`;

  else if(fairmarketvalueRadio.checked)
    result.textContent = `Fair market value = ${computefairmarketvalue().toFixed(2)}`;

  else if(costofrenovationRadio.checked)
    result.textContent = `Cost of renovation = ${computecostofrenovation().toFixed(2)}`;

  else if(desireddiscountRadio.checked)
    result.textContent = `Desired discount = ${computedesireddiscount().toFixed(2)}`;
})

// calculation

function computeofferamount() {
  return Number(fairmarketvalue.value) - Number(costofrenovation.value) - ((Number(desireddiscount.value) / 100) * Number(fairmarketvalue.value));
}

function computefairmarketvalue() {
  return Number(offeramount.value) + Number(costofrenovation.value) + ((Number(desireddiscount.value) / 100) * Number(fairmarketvalue.value));
}

function computecostofrenovation() {
  return Number(fairmarketvalue.value) - Number(offeramount.value) - ((Number(desireddiscount.value) / 100) * Number(fairmarketvalue.value));
}

function computedesireddiscount() {
  return ((Number(fairmarketvalue.value) - Number(costofrenovation.value) - Number(offeramount.value)) / Number(fairmarketvalue.value)) * 100;
}