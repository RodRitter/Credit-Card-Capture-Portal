# Credit Card Processing Frontend
A frontend that allows the user to process & validate multiple credit cards.

## Tech & Design Choices
**EmotionJS (Styling)** - I decided to go with a CSS-in-JSX approach, using Emotion. This seems to be the trend lately with modular independant components that can be shared between projects. In a more rigid project, I would typically go with stylesheets using Sass. 

**Redux (State Management)** - For all my global state management, I used Redux.

**React Router (Routing)** - While there wasn't any routing involved, I decided to implement React Router anyway. This is the first thing I do when I start a new project.



## Objectives
[X] Allow the user to submit a credit card number. 
[X] Check in which country the card was issued and if that country exists in a list of banned countries. 
[X] Make the list of banned countries configurable. 
[X] If the card is valid – store it somewhere.
[X] Bulk process up to 5 credit cards every 30 seconds. 
[X] Don’t capture the same card twice.
[X] Display all the credit cards that have been captured so far. 

## Getting Started
There is a live version here: `https://ritter.co.za/projects/shift/`

A typical React start. This should get you up and running
```
npm install
```
Start the application. Usually runs on `localhost:3000`
```
npm start
````
