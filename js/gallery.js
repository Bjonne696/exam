const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f0c9a90ca6msh556070b3a5d1b4dp189e17jsn52d0a34e3e29',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

 /* fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=40&tags=under_30_minutes', options)
	.then(response => response.json())
	.then(response => console.log(response))
    .catch(err => console.error(err)); 
*/


const foodUrl = '';

async function getFood() {
    try {
        const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=40&tags=under_30_minutes', options);
        const jsonFromServer = await response.json();
        console.log(jsonFromServer.results);
        const foodResults = jsonFromServer.results;

        foodResults.forEach(function (value) {
            document.querySelector('main').innerHTML += `
                <div>
                <h2>${value.name}</h2>
                <h3>hereYouCanWriteShit${value.description}</h3> 
                <img src="${value.thumbnail_url}">
                <a href="details.html?id=${value.id}">Read More</a>
            </div>`;
            });


        

    } catch (error) {

    } finally {

    }
}

getFood(foodUrl);
