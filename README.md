# ReadMeBuilder-Homework

A homework assignment to use node and npm to build a Readme Builder.



## Resources to refer to:
https://www.makeareadme.com/
https://www.npmjs.com/
https://www.w3schools.com/js/js_switch.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

## Pseudocode from Jung
// We should first take a look at the starter code given to us
// We should make a Github Repository, and copy/paste the files & folders in the Develop folder to the Github Repository
// PLEASE DO NOT COPY THE DEVELOP FOLDER. Copy the Contents INSIDE the develop folder.

// Let's update the .gitignore and .DS_Store IF you are a mac user

// Npm install (since the package.json already has the inquirer library written in)

// Test if I can RUN the inquirer library in the index.js file

// If I import it in, can I type stuff into the terminal and console.log the data after

// I see that I have an array called questions.
// Maybe I can use this as the inquirer.prompt(questions), so let's write out the list of questions as an object inside of the questions array

// There is a function called writeToFile, one for fileName, and one for data. So maybe inside of this function... do something with fs.writeFile, or fs.appendFile, fs.writeFileSync

// Init function will start the application...what is it going to run? it should run the inquirer.prompt() method. Afterwards... .then() grab the results from that response and writeToFile and generateMarkdown();

// For the generateMarkdown(), we need to import in/require to bring in the local generateMarkdown.js file

// THIS IS PENDING BUT I MAY JUST GIVE YOU GUYS THE SOLUTION TO THE GENERATEMARKDOWN.JS
