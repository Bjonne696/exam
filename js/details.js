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

/*
async function getResult(resultId) {
  try {
    console.log(resultId);
    const response = await fetch(
        'https://tasty.p.rapidapi.com/recipes/get-more-info?'+ resultId, options
    );
    const jsonResults = await response.json();
    const foodArray = jsonResults.results();
    console.log(foodArray);
*/

async function getResult(resultId) {
  try {

    const response = await fetch(
      'https://tasty.p.rapidapi.com/recipes/get-more-info?id=' + resultId, options
      );
      const jsonResults = await response.json();
      console.log(jsonResults);


      document.querySelector('h1').innerHTML = `${jsonResults.name}`;
      document.querySelector('.time').innerHTML = `${jsonResults.total_time_minutes}`;
      document.querySelector('.sections').innerHTML = `${jsonResults.sections[0].components[0].raw_text}`;
      document.querySelector('.instructions').innerHTML = `${jsonResults.instructions[0].display_text}`;
      document.querySelector('.yields').innerHTML = `${jsonResults.yields}`;




 


/*
    document.title = foodArray.name;
    document.querySelector('h1').innerHTML = `${foodArray.name}`;
    document.querySelector(
      '.hero__img'
    ).style.backgroundImage = `url('${foodArray.thumbnail_url}')`;
    document.querySelector('.time').innerHTML = `timeNOless: ${foodArray.total_time_minutes}`;
    document.querySelector('.sections').innerHTML = `shitTIbuy: ${foodArray.sections}`;
    document.querySelector('.instructions').innerHTML = `shtTIdo: ${foodArray.instructions}`;
    document.querySelector('.yields').innerHTML = `howMUCH: ${foodArray.yields}`;
  */  
} catch (error) {

} finally {

}
}

getResult(id);

/*

const response = await fetch(
  'https://campspace.one/wp-json/wp/v2/posts/' + postId + "?_embed"
);
const jsonResults = await response.json();

document.querySelector('.loader').classList.add('hide');

document.title = jsonResults.title.rendered;
console.log(jsonResults);

document.querySelector('h1').innerHTML = `${jsonResults.title.rendered}`;
document.querySelector(
'.hero__img'
).style.backgroundImage = `url('${jsonResults._embedded?.["wp:featuredmedia"][0].source_url}')`;
document.querySelector('.text').innerHTML = `${jsonResults.excerpt.rendered}`

*/