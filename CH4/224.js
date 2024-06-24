// You have been assigned to develop a user feedback form for a website 
// using Express.js and cookies. Implement the following requirements: 
//  Process a form with the following fields: Name, Email , Message , 
// Rating (radio buttons: Bad, Average, Good, Very Good, Excellent) 
// When the user submits the form, store their feedback information 
// (name, email, message, and rating) in a cookie named "feedback" that 
// expires in 10 seconds. Display a confirmation message to the user after 
// successfully submitting the form & Create a link to display the 
// feedback details stored in the "feedback" cookie. When the user click 
// to the link, retrieve the feedback information from the cookie and 
// display it on the page also include a link on the feedback details page 
// to Logout. When the user clicks the link, user redirected to home page. 
// Make app.js file use get method in express js. No need to write html 
// file having form elements.

const express = require('express');
const cp = require('cookie-parser');
const app = express();
app.use(cp());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,{index:'224.html'}))


app.post('/submit-feedback', (req, res) => {
const { name, email, message, rating } = req.body;
// Create the feedback object
const feedback = {name,email,message,rating};
// Set the feedback cookie with a 10-second expiration
res.cookie('feedback', feedback, { maxAge: 10000 });
res.send('Thank you for your feedback! <br> <a href="/feedback-details"> Show Feedback </a>');
});
app.get('/feedback-details', (req, res) => {
const feedback = req.cookies.feedback;
if (feedback) {
res.send(`
<h1>Feedback Details</h1>
<p><strong>Name:</strong> ${feedback.name}</p>
<p><strong>Email:</strong> ${feedback.email}</p>
<p><strong>Message:</strong> ${feedback.message}</p>
<p><strong>Rating:</strong> ${feedback.rating}</p> 
<a href="/" > logout </a>`);
} else {
res.send('No feedback available.');
}
});
app.listen(3000, () => {
console.log('Server is running on port 3000');
});
