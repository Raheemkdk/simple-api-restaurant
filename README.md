# 🍽️ RaRa Kitchen — Recipe Finder

A simple, interactive recipe finder built with **HTML, CSS, JavaScript, and the Spoonacular API**. Users can search for recipes using ingredients they already have and access links to cooking instructions.

## 🌟 Overview

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

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Internet connection
- A Spoonacular API key

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Raheemkdk/simple-api-restaurant.git
```

**2. Navigate to the project directory**

```bash
cd simple-api-restaurant
```

**3. Configure the API key**

The current JavaScript file contains an API key directly in the source code. For security, replace the exposed key and use a secure API proxy for production.

**4. Run the application**

Open `index.html` in your browser or use a local development server such as VS Code Live Server.

**5. Search for recipes**

Enter an ingredient, click the search button, and browse the returned recipe suggestions.

## 🌐 Deployment

The project is deployed using Render Static Sites.

### Render Configuration

| Setting | Value |
|---|---|
| Service Type | Static Site |
| Branch | `main` |
| Root Directory | Leave blank |
| Build Command | Leave blank |
| Publish Directory | `.` |

Render automatically serves `index.html` from the repository's root directory.

## 🧠 What I Learned

Building this project helped me practice:

- Integrating third-party REST APIs into a JavaScript application.
- Using `fetch()` to retrieve and process JSON data.
- Handling asynchronous operations with Promises and `async/await`.
- Dynamically creating HTML elements with JavaScript.
- Using recipe IDs to make additional API requests.
- Connecting frontend interfaces to external data sources.
- Deploying a static website using Render.

## 🔮 Future Improvements

- Display recipe images and preparation times.
- Add ingredient suggestions and multi-ingredient searches.
- Improve responsive design for mobile devices.
- Add loading indicators and error messages.
- Prevent duplicate results when users perform multiple searches.
- Implement recipe filtering by dietary preferences.
- Secure API requests through a backend proxy.
- Add the ability to save favorite recipes.

## 👨‍💻 Author

**Raheemkdk**

GitHub: [github.com/Raheemkdk](https://github.com/Raheemkdk)

Repository: [Simple API Restaurant](https://github.com/Raheemkdk/simple-api-restaurant)

## 📄 Acknowledgments

Recipe data is provided by the [Spoonacular API](https://spoonacular.com/food-api).

---

Built with HTML, CSS, JavaScript, and the Spoonacular API.
