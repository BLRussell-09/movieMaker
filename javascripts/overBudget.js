
const overBudget = () =>
{
  console.log($('#counterBox').text());
  if ($('#counterBox').text() * 1 < 0)
  {
    $('h3#counterBox').addClass('overBudget');
  };

};

module.exports = overBudget;
