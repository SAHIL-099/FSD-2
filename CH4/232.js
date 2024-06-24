// Write express js script to perform tasks as asked below. 
// 1. Create one HTML file which contains two number type input fields, 
// one dropdown which contains options to select like (addition, 
// subtraction, multiplication, division) and one submit button. 
// 2. The input fields must contain the value greater than 0 else it will 
// give a message “Please enter the valid number”. Also, user must select 
// any type of formula from the dropdown else give a message “You have 
// not selected any formula”. (Message will be displayed on “/calc” page.) 
// 3. If one formula is selected and numbers are entered then Both 
// numbers should be stored in cookies which expires in 50 seconds. 
// Respective calculations will be performed on the page “/calc”.


const express = require('express');
const cp = require('cookie-parser');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cp());

app.use(express.static(__dirname, {index:"232.html"}));

app.post('/calc', (req, res) => {
  const { number1, number2, operation } = req.body;
  const num1 = parseFloat(number1);
  const num2 = parseFloat(number2);

  // Validate inputs
  if (num1 <= 0 || num2 <= 0) {
    res.send('<h1>Please enter valid numbers greater than 0</h1>');
    return;
  }

  if (!operation) {
    res.send('<h1>You have not selected any formula</h1>');
    return;
  }

  // Set cookies for numbers with an expiry of 50 seconds
  res.cookie('number1', num1, { maxAge: 50000 });
  res.cookie('number2', num2, { maxAge: 50000 });

  let result;
  switch (operation) {
    case 'addition':
      result = num1 + num2;
      break;
    case 'subtraction':
      result = num1 - num2;
      break;
    case 'multiplication':
      result = num1 * num2;
      break;
    case 'division':
      if (num2 === 0) {
        res.send('<h1>Division by zero is not allowed</h1>');
        return;
      }
      result = num1 / num2;
      break;
    default:
      res.send('<h1>Invalid operation selected</h1>');
      return;
  }

  res.send(`
    <h1>Calculation Result</h1>
    <p>Number 1: ${num1}</p>
    <p>Number 2: ${num2}</p>
    <p>Operation: ${operation}</p>
    <p>Result: ${result}</p>
    <a href="/">Go back</a>
  `);
});

app.listen(5000);

