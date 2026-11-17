# 🍽️ RaRa Kitchen — Recipe Finder

A simple, interactive recipe finder built with **HTML, CSS, JavaScript, and the Spoonacular API**. Users can search for recipes using ingredients they already have and access links to cooking instructions.
Live Link: https://rara-kitchen.onrender.com

## 🌟 Overview

<img width="944" height="501" alt="image" src="https://github.com/user-attachments/assets/6013d5aa-a03c-4a6d-b5b9-abe8f08e7d63" />

RaRa Kitchen is a web application that helps users discover recipes based on available ingredients.

Instead of searching manually for meals, users can enter an ingredient and retrieve recipe suggestions from the Spoonacular API.

This project demonstrates working with third-party REST APIs, asynchronous JavaScript, and dynamic webpage updates.

## ✨ Features

- **Ingredient-based recipe search:** Enter an ingredient to discover matching recipes.
- **Recipe suggestions:** Display recipe titles returned by the Spoonacular API.
- **Cooking instructions:** Access external recipe pages through dynamically generated links.
- **Dynamic content:** Update the webpage with recipe results using JavaScript DOM manipulation.
- **Simple interface:** Lightweight styling with CSS and an easy-to-use search field.
- **Static deployment:** Hosted on Render without requiring a backend server.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and layout |
| JavaScript | Application logic and DOM manipulation |
| Fetch API | HTTP requests and API responses |
| Async/Await | Handling asynchronous recipe information |
| Spoonacular API | Retrieving recipe data |
| GitHub | Version control and source code hosting |
| Render | Static website deployment |

## ⚙️ How It Works

1. The user enters an ingredient into the search field.
2. JavaScript captures the input when the search button is clicked.
3. The application sends a request to Spoonacular's `findByIngredients` endpoint.
4. The API returns a list of matching recipes.
5. JavaScript iterates through the results and displays each recipe title.
6. For each recipe, the application makes another API request using its recipe ID.
7. The application retrieves the recipe's source URL and creates a link to the cooking instructions.

### API Endpoints

**Find recipes by ingredients**

```http
GET https://api.spoonacular.com/recipes/findByIngredients
```

**Retrieve recipe information**

```http
GET https://api.spoonacular.com/recipes/{id}/information
```

The second endpoint is used to retrieve the `sourceUrl` associated with each recipe.

## 📁 Project Structure

```text
simple-api-restaurant/
│
├── index.html        # Main webpage
├── restaurant.css    # Website styling
├── restaurant.js     # API requests and application logic
└── README.md         # Project documentation
```


