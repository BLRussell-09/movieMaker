const dom = require('./domBuilders');

let myArr = [];

const addToArray = (newObj) =>
{
  myArr.push(newObj);

  const result = myArr.reduce((unique, o) =>
  {
    if (!unique.find(obj => obj.name === o.name && obj.id === o.id))
    {
      unique.push(o);
    }
    return unique;
  },[]);
  myArr = result;
  dom.outputBuilder(myArr);
};

const removeFromArray = (id) =>
{
  const newArray = myArr.filter(myArr => myArr.id !== id);
  dom.outputBuilder(newArray);
  myArr = newArray;
  console.log(myArr);
  return myArr;
};

module.exports =
{
  addToArray,
  removeFromArray,
};
