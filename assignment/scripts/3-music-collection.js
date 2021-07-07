console.log('***** Music Collection *****')

// declaring collection
let collection = [];

// delcaring addToCollection
function addToCollection(title, artist, yearPublished){
  var aboutRecord = {title: title, artist: artist, yearPublished: yearPublished};
  collection.push(aboutRecord);
  return aboutRecord;
} // end addToCollection

// adding albums to collection with addToCollection
console.log('Add Album:', addToCollection('Led Zeppelin', 'Led Zeppelin', 1969));
console.log('Add Album:', addToCollection('Man on the Moon: End of the Day', 'Kid Cudi', 2009));
console.log('Add Album:', addToCollection('The Search', 'NF', 2019));
console.log('Add Album:', addToCollection('Language & Perspective', 'Bad Suns', 2014));
console.log('Add Album:', addToCollection('Too Low For Zero', 'Elton John', 1983));
console.log('Add Album:', addToCollection('40oz. To Freedom', 'Sublime', 1992));
console.log(collection);
