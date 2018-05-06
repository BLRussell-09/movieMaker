const data = require('./data');
const progBar = require('./progBar');

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
};

const addNewObj = (e) =>
{
  if ($(e.target).hasClass('clicked'))
  {
    const newObject = {'name': $(e.target).parent().text(), 'id': $(e.target).attr('id'),};
    data.addToArray(newObject);
    progBar();
  }
  else
  {
    console.log('no click');
    console.log($(e.target).attr('id'));
    data.removeFromArray($(e.target).attr('id'));
  }

};

module.exports = buttonListeners;
