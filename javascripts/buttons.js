const data = require('./data');

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
  }
  else
  {
    console.log('no click');
  }

};

module.exports = buttonListeners;
