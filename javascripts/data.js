const xhr = require('./xhr');
const domBuilder = require('./domBuilders');

const iLoad = function ()
{
  const categories = JSON.parse(this.responseText).categories;
  domBuilder.domBuilderInit(categories);
  console.log(categories);
  xhr.startApp2(elementLoad, iFail);
};

const elementLoad = function () {
  const elements = JSON.parse(this.responseText).elements;
  console.log(elements);
  domBuilder.domBuilderElem(elements);
};

const iFail = function ()
{
  console.log('You broke it good if you see this message');
};

const initializer = () =>
{
  xhr.startApp(iLoad, iFail);
};

module.exports =
{
  initializer,
};
