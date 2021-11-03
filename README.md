View app weather forecast [https://denisavilov.github.io/weatherForecast/](https://denisavilov.github.io/weatherForecast/)

# Test assignment for React dev

Objective: Implement a SPA showing the weather in selected cities.

## Exercise:

It is necessary to display a list of cities with “cards”. The card must contain
the following functionality:
○ Brief information about the weather in the city
○ When you click on the card, display detailed information / go to
detailed information page
○ Each city card must have a button: update
weather data now. When you press it, there should be
updating the weather of a given city.
○ It should be possible to add / remove cities. When adding
a new city, a request is made to receive the current weather and display
it on the screen.

● Store data locally in LocalStorage.
○ When reloading the page, the list of cities should be saved, previously
entered by the user, and the weather data must be updated.

## Will be a plus:

● On the detail page, implement the position of the block with
temperature, based on the magnitude of the value. To do this, make an additional
request to get an hourly forecast for the current day.

## Requirements:

● Use Weather API: [openweathermap.org](https://openweathermap.org/).
● Use React, Typescript, Redux + Redux-Thunk (Recommended
use Redux Toolkit), React-router
● Use a CSS framework. It is recommended to use Material UI
● The code must be clean and formatted. Recommended
using ESLint / Prettier
● Test the main components with Jest + (react-testing-library /
enzyme)
● Writing components in a functional style using hooks

Please Deploy React App to GitHub Pages

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
