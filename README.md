# Random Cocktail Generator

This project is a Node.js and Express web application that fetches random cocktail recipes from the CocktailDB API and displays them to the user. It is a fun way to discover new drinks and learn what are the ingredients for the drink!

## Features
- Fetches a random cocktail from the CocktailDB API
- Displays the cocktail's name, type, image, and a list of ingredients
- Uses EJS for templating
- Uses Axios for API requests
- Styled with custom CSS

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the server with:
```bash
npm start
```

Then open your browser and go to `http://localhost:3000` to see a random cocktail recipe.

## Project Structure
- `index.js` - Main server file
- `views/index.ejs` - EJS template for displaying the cocktail
- `public/styles/main.css` - Custom styles

## API Reference
This app uses [TheCocktailDB API](https://www.thecocktaildb.com/api.php) to fetch random cocktail data.

## License
This project is for educational purposes.
