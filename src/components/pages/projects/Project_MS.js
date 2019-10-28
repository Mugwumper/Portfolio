import React from "react";

function Project_MS() {
  return (
    <div>
      <h1>NYT-Mongo-Scraper</h1>
      <p>
        This is a Node.js application that uses Cheerio and MongoDB to scrape
        and save NYT articles.
      </p>

      <h2>Feature Overview</h2>
      <p>
        Scrape the New York Times homepage, then save and add notes to your
        favorite articles using this responsive application.
      </p>

      <p>
        Video:{" "}
        <a
          href={process.env.PUBLIC_URL + "/images/Mongo_Scraper.mp4"}
          target="_blank"
          rel="noopener noreferrer"
        >
          mp4
        </a>
      </p>

      <p>
        NYT Scape Demo <a href="https://thawing-waters-71746.herokuapp.com/" target="_blank"  rel="noopener noreferrer">"deployed example"</a>
      </p>

      <p>The Code: <a href="https://github.com/Mugwumper/mongo-scraper" target="_blank"  rel="noopener noreferrer">RPS-Multiplayer</a></p>

      <h2>Technologies Used</h2>
      <ul>
        <li>Node.js</li>
        <li>MongoDB/Mongoose</li>
        <li>cheerio</li>
        <li>request</li>
        <li>express</li>
        <li>Handlebars</li>
      </ul>
      <h3>Misc Notes</h3>
      <p>
        Without realising it I created a favicon that is the same as the offical
        one used by the NYT's. Mine is sloppy by comparison but as a 16x16 image
        it's almost impossible to tell them apart.
      </p>

      <p>Fonts: https://fonts.google.com/specimen/News+Cycle</p>

    </div>
  );
}

export default Project_MS;
