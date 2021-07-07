console.log('***** Music Collection *****')

// declaring collection
let collection = [];

// delcaring addToCollection
function addToCollection(title, artist, yearPublished){
  var aboutRecord = {title: title, artist: artist, yearPublished: yearPublished};
  collection.push(aboutRecord);
  return aboutRecord;
} // end addToCollection

/*
const albumOne = {
  title: 'Led Zeppelin',
  artist: 'Led Zeppelin',
  yearPublished: 1969
}
const albumTwo = {
  title: 'Man on the Moon: End of the Day',
  artist: 'Kid Cudi',
  yearPublished: 1969
}
const albumThree = {
  title: 'The Search',
  artist: 'NF',
  yearPublished: 2019
}
*/

console.log('Add Album:', addToCollection('Led Zeppelin', 'Led Zeppelin', 1969));
