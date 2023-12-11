# Personal Budget Management App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Idea
A personal budget app is a software application designed to help individuals manage their finances and track their expenses, income, and savings. The primary goal of a personal budget app is to maintain a healthy financial lifestyle. Here are some key features commonly found in this application:

1. Expense Tracking:
Users can input and categorize their monthly expenses. Users can add expenses, delete and track the expenses of that month
2. Budget planning:
Users can plan budget for different categories like groceries, rent, etc. Users can add new budget, delete existing budget and track the budget for specific user logged in
3. Dashboard:
Users can visulaize their budget plan in 3 different visual graphs - bar char, pie chart and polar area chart. It updates dynamically when the budget data changes

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://104.236.4.147:3001](http://104.236.4.147:3001) to view it in your browser.

## Testing
The tests used for this application are 
1. Unit Test: Tests if the token is generated
2. Visual Regression Test: Tests if the application is reachable on the URL provided
3. E2E Test: Tests if the user exists when log in. If the user exists, the control lands on dashboard. If the user does not exist, then it redirects to Signup page where a new user is created and logged in with those credentials, finally landing on dashboard page.

# Test Results
<img width="1469" alt="tokenGenerate_unit_test" src="https://github.com/hkarnat1/personal-budget-frontend/assets/125293786/225a0ffd-fff8-4ccd-958e-62185b2b3d4b">
<img width="1470" alt="firefox_applitools" src="https://github.com/hkarnat1/personal-budget-frontend/assets/125293786/f4e1aadb-e20a-4d89-bcf4-dfcadf81f3b5">
<img width="1470" alt="chrome_applitools" src="https://github.com/hkarnat1/personal-budget-frontend/assets/125293786/0bbb6c54-d63b-4824-b2fc-d36ae0aebd5f">

