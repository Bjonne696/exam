const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f0c9a90ca6msh556070b3a5d1b4dp189e17jsn52d0a34e3e29',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

 fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=40&tags=under_30_minutes', options)
	.then(response => response.json())
	.then(response => console.log(response))
    .catch(err => console.error(err)); 

    
   /*
    fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=40&tags=under_30_minutes', options)
	.then(response => response.json())
	.then(response => console.log(response))
    .then(response.forEach(function(response){
        response.Container.innerHTML += createResponse(response)
        .catch(err => console.error(err)) 
        }));

        function createResponse(response){
            const createdResponse=`
            <div class="card">
            <div class="card-title"><h2>${post.title.rendered}</h2>
            <p>${post.content.rendered}</p>
            </div>    
            </div>
            `
        console.log(createdResponse);
            return createdResponse;
        } */
        
