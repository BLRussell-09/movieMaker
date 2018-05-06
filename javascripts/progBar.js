let perc = 0;

const progBarUp = () =>
{
  if ($('#AnimalsandTrainers').find('input.clicked').length !== 0)
  {
    perc += 25;
    console.log(perc);
    $('#progress').width(`${perc}%`).text(perc);
    return perc;
  };
  if ($('#Actors').find('input.clicked').length !== 0)
  {
    perc += 25;
    console.log(perc);
    $('#progress').width(`${perc}%`).text(perc);
    return perc;
  };
  if ($('#Locations').find('input.clicked').length !== 0)
  {
    perc += 25;
    console.log(perc);
    $('#progress').width(`${perc}%`).text(perc);
    return perc;
  };
  if ($('#SpecialEffects').find('input.clicked').length !== 0)
  {
    perc += 25;
    console.log(perc);
    $('#progress').width(`${perc}%`).text(perc);
    return perc;
  };
};

const progBarDwn = () =>
{
  if ($('#AnimalsandTrainers').find('input.clicked').length === 0)
  {
    perc -= 25;
    console.log(perc);
    $('#progress').width(`${perc}%`).text(perc);
    return perc;
  };
  if ($('#Actors').find('input.clicked').length === 0)
  {
    perc -= 25;
    console.log(perc);
    $('#progress').width(`${perc}%`).text(perc);
    return perc;
  };
  if ($('#Locations').find('input.clicked').length === 0)
  {
    perc -= 25;
    console.log(perc);
    $('#progress').width(`${perc}%`).text(perc);
    return perc;
  };
  if ($('#SpecialEffects').find('input.clicked').length === 0)
  {
    perc -= 25;
    console.log(perc);
    $('#progress').width(`${perc}%`).text(perc);
    return perc;
  };
};

module.exports =
{
  progBarUp,
  progBarDwn,
};
