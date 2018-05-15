const overBudget = require('./overBudget');

const domBuilderInit = (categories) => {
  let domString = '';
  categories.forEach(element => {
    domString += `<div class="row">`;
    domString += `<div class="col-xs-4">`;
    domString += `<h1>${element.category}</h1>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `<div class="row" id="${element.catID}"></div>`;
  });
  printToDom(domString, 'cat-holder');
};

const domBuilderElem = (movElements) => {
  let domString1 = '';
  let domString2 = '';
  let domString3 = '';
  let domString4 = '';
  movElements.forEach(element => {
    if (element.categoryId === 'section 1')
    {
      domString1 += `<div class="col-xs-3">`;
      domString1 += `<label><input class="check" type="checkbox" id="${element.id}">${element.name}</label>`;
      domString1 += `<h4 class="hidden">${element.cost}</h4>`;
      domString1 += `</div>`;
      printToDom(domString1, 'Actors');
    }
    else if (element.categoryId === 'section 2')
    {
      domString2 += `<div class="col-xs-3">`;
      domString2 += `<label><input class="check" type="checkbox" id="${element.id}">${element.name}</label>`;
      domString2 += `<h4 class="hidden">${element.cost}</h4>`;
      domString2 += `</div>`;
      printToDom(domString2, 'AnimalsandTrainers');
    }
    else if (element.categoryId === 'section 3')
    {
      domString3 += `<div class="col-xs-3">`;
      domString3 += `<label><input class="check" type="checkbox" id="${element.id}">${element.name}</label>`;
      domString3 += `<h4 class="hidden">${element.cost}</h4>`;
      domString3 += `</div>`;
      printToDom(domString3, 'Locations');
    }
    else if (element.categoryId === 'section 4')
    {
      domString4 += `<div class="col-xs-3">`;
      domString4 += `<label><input class="check" type="checkbox" id="${element.id}">${element.name}</label>`;
      domString4 += `<h4 class="hidden">${element.cost}</h4>`;
      domString4 += `</div>`;
      printToDom(domString4, 'SpecialEffects');
    }
  });
};

const outputBuilder = (outputArray) =>
{
  let domString = '';
  let counter =  $('#counterBox').text() * 1;
  outputArray.forEach(element => {
    domString += `<h3>${element.name} $${element.cost}</h3>`;
    counter =  counter - +`${element.cost}`;
  });
  console.log(counter);
  printCounter(counter);
  printToOutput(domString, 'output');
};

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = '';
  document.getElementById(divId).innerHTML += domString;
};

const printCounter = (numbahz) =>
{
  $('#counterBox').html(numbahz);
  overBudget();
};

const printToOutput = (domString, divId) =>
{
  $(divId).html('');
  $(divId).html(domString);
};

module.exports =
{
  domBuilderInit,
  domBuilderElem,
  outputBuilder,
};
