import React from "react";

function Project_FRH () {
    return (
        <div>
            <h1>Family Reunion Helper</h1>
            <h2>AKA: Something To Talk About</h2>
            <p>This app will take a collection of people’s birthdays and create a concise document of things that happened on each of the birthdays. It would be used for planning family reunions to generate a document that includes the collection of reunion attendees and the events and details of life at the time of their birthdays.</p>
            <p>Give a calendar date and this app will detail what life was like at that point in time.</p>
            <p>Heroku deployment: <a href="https://something-to-talk-about.herokuapp.com/"  target="_blank"  rel="noopener noreferrer">https://something-to-talk-about.herokuapp.com/</a></p>
            <h2>Technoligies Used</h2>
            <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>React</li>
            <li>Mongo</li>
            <li>Morgan</li>
            <li>Moment</li>
            <li>Request</li>
            <li>Axios</li>
            <li>Cheerio</li>
            <li>Firebase</li>
            <li>Fetch</li>
            <li>Passport</li>
            </ul>
            <p>The Video: <a href={process.env.PUBLIC_URL + "/images/??.mp4"} target="_blank"  rel="noopener noreferrer">mp4</a></p>
            <p><a href="https://docs.google.com/presentation/d/1abXqETT7-ytrhYlNgiNSaSlDuBNUP9Ab525zZlCpP0k/edit#slide=id.g649e848b92_0_52"
                target="_blank" rel="noopener noreferrer">Presentation Slide Deck</a>                
            </p>
        </div>
    )
}

export default Project_FRH;