import properties from "./assets/js/table.js";
import strToArr from "./assets/js/strToArr.js";
import rowTemplate from "./assets/js/rowTemplate.js"

let userData = ''

fetch('./data.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    userData = strToArr(data);
    userData.forEach(({ number, name, score, code }) => {
      console.log(number, name)
      rowTemplate({ number, name, score, code });
    });
  })
  .catch(error => {
    // Handle errors here
    console.error('There was a problem fetching the file:', error);
  });
