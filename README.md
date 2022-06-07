# MadFish API : 100Devs Practice

An API coding practice with Node and Express making the 10 Genera of common endemic freshwater fish available.

## Table of contents

- [MadFish API : 100Devs Practice](#madfish-api--100devs-practice)
	- [Table of contents](#table-of-contents)
	- [Overview](#overview)
		- [The challenge](#the-challenge)
	- [My process](#my-process)
		- [Built with](#built-with)
		- [What I learned](#what-i-learned)
		- [Continued development](#continued-development)
	- [Author](#author)

## Overview

### The challenge

Create an API using Node and Express to serve up some data. Users can use the text-input and button to get formatted client-side display, or the url [https://madfish-api-100devs.herokuapp.com/api/fishGenus](https://madfish-api-100devs.herokuapp.com/api/fishGenus) to fetch information from a fish.json file

- Gain familiarity and comfort using Node and Express to create an API capable of Read (GET) functionality
- Practice pushing to git and to Heroku for a live build.
- Continue to gain experience organizing code
- In addition to the base build, I added a JSON.parse(readFileSync()) to separate the json object from the server.js and main.js code

## My process

Straight forward Node and Express app following past examples of creating a server in Node and utilizing Express functionality to make the code more readable.

I preferred to have my data file (fish.json) separated from my server code. A little Googling revealed how to use the readFileSync from the 'fs' module, along with JSON.parse() to make that happen.

On top of having the user by able to enter a Madagascar Fish genus in the url to facilitate a GET request and have a three parameter object returned, I wanted to practice using the '/public' folder to have client-side JavaScript available to the user.

Changes were pushed to a github repository and then, when a function build was completed, pushed to Heroku. 

### Built with

- [VSCode](https://code.visualstudio.com/)
- [JavaScript](https://www.javascript.com/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Heroku](https://www.heroku.com/)
- [#100Devs](https://leonnoel.com/100devs/)
- [Timeular](https://timeular.com/) - for keeping the sessions short and productive and preventing burnout
- [Brainscape](https://www.brainscape.com/) - for putting all the lessons learned into a spaced repetition format
- [Focusatwill](https://www.focusatwill.com/app/music) - for the background music or ambient noise to keep going

### What I learned

While starting a Node and Express app is fairly straight forward, passing data back and forth between client-side JavaScript and server-side JavaScript you really need to pay attention to the json formatting. 

That handling a 404 error is not as straight forward as I thought it might be (see [Continued development](#continued-development))

### Continued development

I'd like to handle a 404 error a little more gracefully than just stranding the user. This would be implemented to handle an unknown or mis-typed fish genus.

## Author

- Website - [Aleksei Saunders](https://www.alekseisaunders.com)
- LinkedIn - [Aleksei Saunders](https://www.linkedin.com/in/alekseisaunders/)
