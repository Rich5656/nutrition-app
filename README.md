# Nutrition Tracker

Nutrition Tracker is an application built with React.js that allows a user to calculate their daily calorie limit, track the foods that the have consumed for the day, and track the amount of calories that they have burned during exercise for the day. All of the user inputs are tracked and displayed in a table to let the user clearly understand the status of their nutrition for the day.

## Demo
![GIF Demo](https://github.com/Rich5656/nutrition-app/blob/main/nutrition-app-video.gif)

## Functionality
- __Calculating Daily Calorie Limit:__ Daily calorie limits are arrived at using the revised Harris-Benedict equation and represent the amount of calories that are needed to maintain current weight.
- __Food Search Data:__ The data returned from the food search functionality is served by the [USDA API](https://www.ers.usda.gov/developer/data-apis/).
- __Adding Exercise:__ Exercise can be added to the tracker by supplying positive integer values. If you need to decrease the exercise value in the tracker, it also supports negative integer values so adjustments can be made as needed.

## Motivation

I recently took an interest in getting better at tracking my caloric intake and was using a mobile app to do this. However the app was almost bogged down with too many features for my taste. I wanted something that was more bare-bones and straightforward, so I thought that it would be fun to try to build something similar with React!

## Technologies Used

[![Tech Used](https://skillicons.dev/icons?i=react,js,html,css,git,github,netlify)](https://skillicons.dev)

## Main Takeaways

1. __React's Context API:__ I wanted to use the process of building this application to build on my experience with using state in React and also explore some new features that React offers to manage state. This led me to use React's context API to access and update state globally throughout the application, as opposed to prop drilling like I have done in the past. It was interesting to learn how this worked, and it really opened my eyes to how effective this could be for larger applications with more complicated state tracking than this one has.
2. __API Calls / Netlify Functions:__ Building this also gave me a chance to work with making API calls securely without having to implement a full back end with Express.js to manage gathering the data. It wound up being a great opportunity to learn about making a serverless app and take advantage of Netlify Functions to securely make the necessary API calls. Being diligent and taking precautions regarding security is something that is of great importance to me. 
