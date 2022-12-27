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
    console.log(resultId);
    const response = await fetch(
        'https://tasty.p.rapidapi.com/recipes/list?from=0&size=40&tags=under_30_minutes', options + resultId
    );
    const jsonResults = await response.json();
    const foodArray = jsonResults.result;
    console.log(foodArray);


    document.title = foodArray.name;
    document.querySelector('h1').innerHTML = `${foodArray.name}`;
    document.querySelector(
      '.hero__img'
    ).style.backgroundImage = `url('${foodArray.thumbnail_url}')`;
    document.querySelector('.time').innerHTML = `timeNOless: ${mtgArray.total_time_minutes}`;
    document.querySelector('.sections').innerHTML = `shitTIbuy: ${mtgArray.sections}`;
    document.querySelector('.instructions').innerHTML = `shtTIdo: ${mtgArray.instructions}`;
    document.querySelector('.yields').innerHTML = `howMUCH: ${mtgArray.yields}`;
} catch (error) {

} finally {

}
}

getMagic(id);