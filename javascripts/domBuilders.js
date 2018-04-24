const domBuilderInit = (categories) => {
  let domString = '';
  categories.forEach(element => {
    domString += `<div class="col-xs-12">`;
    domString += `<h1>${element.category}</h1>`;
    domString += `</div>`;
    domString += `<div class="row" id="${element.category}"></div>`;
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
      domString1 += `<h3>${element.name}</h3>`;
      domString1 += `</div>`;
      printToDom(domString1, 'Actors');
    }
    else if (element.categoryId === 'section 2')
    {
      domString2 += `<div class="col-xs-3">`;
      domString2 += `<h3>${element.name}</h3>`;
      domString2 += `</div>`;
      printToDom(domString2, 'Animals and Trainers');
    }
    else if (element.categoryId === 'section 3')
    {
      domString3 += `<div class="col-xs-3">`;
      domString3 += `<h3>${element.name}</h3>`;
      domString3 += `</div>`;
      printToDom(domString3, 'Locations');
    }
    else if (element.categoryId === 'section 4')
    {
      domString4 += `<div class="col-xs-3">`;
      domString4 += `<h3>${element.name}</h3>`;
      domString4 += `</div>`;
      printToDom(domString4, 'Special Effects');
    }
  });
};

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = '';
  document.getElementById(divId).innerHTML += domString;
};

module.exports =
{
  domBuilderInit,
  domBuilderElem,
};