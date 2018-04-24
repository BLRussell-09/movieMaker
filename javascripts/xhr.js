const startApp = (iLoad, iFail) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', iLoad);
  myRequest.addEventListener('error', iFail);
  myRequest.open('GET', './db/categories.json');
  myRequest.send();
};

const startApp2 = (iLoad, iFail) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', iLoad);
  myRequest.addEventListener('error', iFail);
  myRequest.open('GET', './db/movie-elements.json');
  myRequest.send();
};

module.exports =
{
  startApp,
  startApp2,
};
