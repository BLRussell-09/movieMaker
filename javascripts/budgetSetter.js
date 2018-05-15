const budgetPrompt = () =>
{
  const result = window.prompt('What is your budget?', '0...');
  $('#counterBox').html(result);
};

module.exports = {budgetPrompt,};
