const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f0c9a90ca6msh556070b3a5d1b4dp189e17jsn52d0a34e3e29',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

const foodUrl = '';

async function getFood() {
    try {
        const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=12&tags=italian', options);
        const jsonFromServer = await response.json();
        console.log(jsonFromServer.results);
        const foodResults = jsonFromServer.results;
        const obj = foodResults.description;
        document.querySelector('.loader').classList.add('hide')


      



        foodResults.forEach(function (value) {
            if (value.description == null) {
                value.description = "";
            }
            document.querySelector('.recipe-container').innerHTML += `
            <div class = cards>
            <div class = title-name><h2>${value.name}</h2></div>
            <div class = description-container>
                <img class = thumbnail src="${value.thumbnail_url}">
                <p>${value.description}</p> 
                 
            </div>
            <div class = gallery-link><a class = link-text href="details.html?id=${value.id}">Read More</a></div>
            </div>
            `; /*classes for gallery goes here*/
            
            });
        


        

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

getFood(foodUrl);


let loadMoreBtn = document.querySelector('.load-the-btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.recipe-container .cards')];

    for (var i = 0; i < 3; i++) {
        var x = currentItem+1;
        console.log(x);
        console.log(boxes);
        console.log(boxes.length, x, x <= boxes.length);
        if (x <= boxes.length) {
            currentItem += 1;
            boxes[x].style.display = "inline-block";
        } else {
            boxes[x].style.display = "none";
        }
        
    }
    

    currentItem += 3;

}
