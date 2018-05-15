const data = require('./data');
const progBar = require('./progBar');
const canMake = require('./canIMakeIt');

const buttonListeners = () =>
{
  $(document).ready(initChecks);
};

const initChecks = () =>
{
  $('input.check').click(checkClick);
};

const checkClick = (e) =>
{
  $(e.target).toggleClass('clicked');
  addNewObj(e);
  progBar.progBarUp();
  canMake();
};

const addNewObj = (e) =>
{
  if ($(e.target).hasClass('clicked'))
  {
    console.log(e);
    const newObject = {'name': $(e.target).parent().text(), 'id': $(e.target).attr('id'), 'cost': $(e.target).parent().next().text(),};
    data.addToArray(newObject);

  }
  else
  {
    console.log('no click');
    console.log($(e.target).attr('id'));
    data.removeFromArray($(e.target).attr('id'));
    progBar.progBarDwn();
  }

};

module.exports = buttonListeners;
