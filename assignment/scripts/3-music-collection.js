console.log('***** Music Collection *****')

// declaring collection
let collection = [];

// delcaring addToCollection
function addToCollection(title, artist, yearPublished) {
  var aboutRecord = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(aboutRecord);
  return aboutRecord;
} // end addToCollection

// declaring showCollection
function showCollection(array) {
  console.log(`Number of records in our collection: ${collection.length}`);
  for (let item of collection) {
    console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}.`);
  } // end for loop
} // end showCollection

// declaring findByArtist
function findByArtist(artist) {
  let searchArtist = [];
  for (let song of collection) {
    if (song.artist === artist) {
      searchArtist.push(song);
    } // end if statement
  } // end for loop
  return searchArtist;
} // end findByArtist

// declaring search --> STRETCH GOAL
function search (item) {
  let searchResult = [];
  for (let searchInput of collection) {
    if (item.artist === searchInput.artist && item.yearPublished === searchInput.yearPublished) {
      searchResult.push(searchInput);
    } // end if loop
  } // end for loop
  return searchResult;   // ---> this closes the function and stops looping. Reason for line 77 showing an empty searchReult array and not collection. Stuck here.
} // end search


// calling addToCollectionto test. adding albums to collection.
console.log('Add Album:', addToCollection('Led Zeppelin', 'Led Zeppelin', 1969));
console.log('Add Album:', addToCollection('Man on the Moon: End of the Day', 'Kid Cudi', 2009));
console.log('Add Album:', addToCollection('The Search', 'NF', 2019));
console.log('Add Album:', addToCollection('Sublime', 'Sublime', 1996));
console.log('Add Album:', addToCollection('Too Low For Zero', 'Elton John', 1983));
console.log('Add Album:', addToCollection('40oz. To Freedom', 'Sublime', 1992));
// viewing collection
console.log(collection);

// call showCollection to test
showCollection(collection);

// call findByArtist to test
console.log('Records by Sublime:', findByArtist('Sublime'));
console.log('Records by T-Pain:', findByArtist('T-Pain'));
console.log('Records by Led Zeppelin:', findByArtist('Led Zeppelin'));


// Streach Goal
// call search to test

// should have one searches matching this criteria in the output in the new array: searchResult
console.log(search({artist: 'NF', yearPublished: 2019}));

// should return an empty array
console.log(search({artist: 'Ray Charles', yearPublished: 1957}));

// should return collection array
console.log(search({}));
