const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f0c9a90ca6msh556070b3a5d1b4dp189e17jsn52d0a34e3e29',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};


async function getResult(resultId) {
  try {

    const response = await fetch(
      'https://tasty.p.rapidapi.com/recipes/get-more-info?id=' + resultId, options
      );
      const jsonResults = await response.json();
      console.log(jsonResults);


      document.querySelector('h1').innerHTML = `${jsonResults.name}`;
      document.querySelector('.time').innerHTML = `${jsonResults.total_time_minutes}`;
      document.querySelector('.yields').innerHTML = `${jsonResults.yields}`;

/* instructions */
      let instructArray = jsonResults['instructions'];
      let htmlString = "";
      let htmlStringA = "";

      for (let i=0, len=instructArray.length; i<len; i++){
        htmlString += `<div>${instructArray[i].display_text}</div>`;
        console.log(instructArray[i].display_text);
      }

      document.querySelector('.instructions').innerHTML = htmlString;

      
/* components */

var sections = jsonResults['sections']
for(var i = 0; i < sections.length; i++){

  console.log("component: " + (i+1));
  var components = sections[i].components;
  for(var j = 0; j < components.length; j++){
    htmlStringA += `<div>${components[j].raw_text}</div>`;
    console.log(components[j].raw_text);
    
  }
}

document.querySelector('.sections').innerHTML = htmlStringA;




} catch (error) {

  document.querySelector('.alert').innerHTML = alertUser(
    'Error occured (Cannot load content)',
    'error'
);

} finally {

  setTimeout(function () {
    document.querySelector('.alert').innerHTML = '';
}, 3000)

}
}

getResult(id);

