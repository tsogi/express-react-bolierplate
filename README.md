# The project
## Aim
Aim of the project is to let developer start writing actual business logic right away as opposed to spend 2-3 days on wiring up different technologies and packages.

## File structure
Root directory contains "back" and "front" folders which respectively contain Express.js and React.js apps. These two apps are independent and could be used separately as well.  

## Installation
* Clone or download the repository
* `cd back`
  * `npm install`
  * configure `config/database.json`
  * `npm run nodemon` // starts express js server at localhost:3003 
* `cd front`
  * `npm install`
  * `npm start` // starts react app at localhost:3001
  
That's it! Now you are good to proceed to development.
