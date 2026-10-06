const apiKey = '1cb23a7bdfcb467280ae1f1313053f05'
let heady = document.querySelector('h2')
document.querySelector('button').addEventListener('click', biggy)
function biggy() {
  const query = document.querySelector('input').value
  fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${apiKey}&includeNutrition=true`)
    // fetch(`https://api.spoonacular.com/recipes/${query}/information?&apiKey=${apiKey}&includeNutrition=true`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Figure out a way to show all the recipe titles in the data array
      console.log(data.forEach(element => {
        console.log(element.title)
      }))
      // Had to make element async so I can have a variable value have the await keyword infront
      data.forEach( async element => {
        //Instead of wasting my calls for the day by fetching different items. I can just show one 
        // They can click on the button again to get a different item
        let header = document.createElement('h3')
        header.innerText = element.title
        
        // recipeInformation()
        console.log(element.id)
        let identity = element.id
        let alink = document.createElement('a')
        //Needed to make the value for the inner Text await because since I am fetching from an API
        //It is not instant, JS does not like to wait. This was causing an issue earlier
        let imageLink = await recipeInformation(identity)
        alink.href = imageLink
        alink.innerText ='Blog post on How to cook recipe'        
        console.log(`What came back ${imageLink}`)
        document.body.appendChild(header)
        document.body.appendChild(alink)
      })
    })
}
function recipeInformation(iden) {
  console.log(iden)
  //Needed to return the promise so I can use it in my other function
   return fetch(`https://api.spoonacular.com/recipes/${iden}/information?apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      //Needed to return the data.sourceUrl so I can see and use it
      return data.sourceUrl
      // let para = document.createElement('p')
      // para.innerText = element.id
      // document.body.appendChild(header)
    })
}
// ready in minutes
// recipe url
// Image of recipe


