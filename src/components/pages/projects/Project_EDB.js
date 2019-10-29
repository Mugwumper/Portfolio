import React from "react";

function Project_EDB () {
    return (
        <div>
            <h1>Eat-Da-Burger</h1>
            <p>unit 14-handlebars …is a restaurant app that lets users input the names of burgers they’d like to eat.</p>
            <h2>Description</h2>
            <p>This full stack application demonstrates the techniques and technologies needed to create a ‘real world’ solution. The layout utilizes an MVC design pattern with the seperation of concerns maintained. The implementation uses Node.js, Express, mySQl, and Handlebars among others.</p>
            <p>A user can enter a burger name which gets added to the menu. Once there it can be ‘eaten’ or devoured as the button label shows. This causes the item to be removed from the menu list and added to the devoured list.</p>
            <h2>Demo</h2>
            <p>The demo of the burger eating application can be found <a href="https://enigmatic-fortress-39110.herokuapp.com/">here</a>.</p>
            <h2>Installation</h2>
            <p>To run the application locally, first clone this repository with the following commands.</p>
            <p><code>git clone git@github.com:??/eat-da-burger.git cd eat-da-burger npm install node server</code></p>
            <p>Now, open the local application on port 3000 at the URL: <code>http://localhost:3000/</code>.</p>
            <h2>Technology used</h2>
            <ul>
            <li>Node.js</li>
            <li>heroku</li>
            <li>body-parser (npm)</li>
            <li>express</li>
            <li>path (npm)</li>
            <li>JawsDB</li>
            </ul>
            <h3>credits</h3>
            <p>burger image:</p>
            <a href="https://pngtree.com/freepng/delicious-burgers-vector_1401858.html">https://pngtree.com/freepng/delicious-burgers-vector_1401858.html</a>        
        </div>
    )
}

export default Project_EDB;