const canMake = () =>
{
  if ($('#progress').text() === '100' && !$('h3#counterBox').hasClass('overBudget'))
  {
    $('output').append('You Can Make this Movie');
  }
  else
  {
    $('output').append(`You can't make this movie yet`);
  }
};

module.exports = canMake;
