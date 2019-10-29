import React from "react";

function Project_Liri () {
    return (
        <div>
            <h1>Liri</h1>
            <h1>liri-node-app</h1>
            <p>liri is like siri. Except that in this case it is a class assignment that uses Node JS. With it you can query one of three APIs that return information about songs, movies or upcoming concerts.</p>
            <h2>Installation</h2>
            <p>To install and run the program do the following:</p>
            <ol>
            <li>
            <p>Clone the repo &quot; <a href="https://www.github.com/Mugwumper/liri-node-app.git">https://www.github.com/Mugwumper/liri-node-app.git</a>&quot;</p>
            </li>
            <li>
            <p>navigate git-bash into the repo directory and type “npm install”</p>
            </li>
            <li>
            <p>create .env file with your keys to the APIs</p>
            </li>
            <li>
            <p>run the program by typing &quot;node liri.js &lt;command&gt; &lt;search&gt;</p>
            </li>
            </ol>
            <p>
                Video:{" "}
                <a
                href={process.env.PUBLIC_URL + "/images/liri.mp4"}
                target="_blank"
                rel="noopener noreferrer"
                >
                mp4
                </a>
            </p>
            <h2>Usage</h2>
            <p>The command must be one continuous string, use dashes between words if you like. The actual wording is rather flexible.</p>
            <p>Any command having ‘spot’, ‘song’ or ‘tune’ will use the Spotify API.</p>
            <p>If you include ‘band’, ‘concert’ or ‘venue’ in your command Liri will search the Bands In Town API.</p>
            <p>Likewise if you use ‘movie’, ‘omdb’ or ‘film’ the OMDb API will be used.</p>
            <p>Finally if your command contains ‘do-what-it-says’, ‘special’, ‘read’ or ‘file’ then the random.txt file will be used and this can itself contains a command and search parameter for any of the three APIs.</p>
            <h3>Logging</h3>
            <p>A history of commands, search parameters and the results are all stored in the file ‘log.txt’.</p>
            <h2>Technologies used</h2>
            <ul>
                <li>node-spotify-api</li>
                <li>inquirer</li>
                <li>dotenv</li>
                <li>axios</li>
                <li>moment</li>
            </ul>

            <p>The Code: <a href="https://github.com/Mugwumper/liri-node-app" target="_blank"  rel="noopener noreferrer">liri-node-app</a></p>
        </div>
    )
}

export default Project_Liri;