import React from "react";

function Project_WGG () {
    return (
        <div>
            <h1>Word Guess Game</h1>
            <h2>gameplay</h2>
            <p>To play press any key, it will start the engines (background sounds). Once a game is complete advance to the next word by pressing "NEXT".</p> 

            <p>Wins and Losses are tallied in the 'computer readout' (small text above the buttons).</p>

            <p>MUTE will turn off the engines (background sounds).</p>
            <p>RESET will restart the game setting wins and losses back to 0.</p> 
            <p>Lastly there is a status message displayed in the upper part of the screen. (press reset to verify).</p>

            <h2>Media Queries</h2>
            <p>The game must be played on a fairly large screen. The main title will be removed as the screen width is made smaller but the size is held to 1125px as the styling becomes distored below this value.</p>

            <h2>Credits:</h2> 
            <p>Theming this game was done by careful using work from other people. I changed items as needed for the game and made sure that was was used has been reviewed such that I at least understand how it was constructed.</p>
            <h3>Visuals</h3>
            <h4>LCARS (StarTrek) CSS</h4>
            <p>BY Tom Hazledine</p> 
            <p>as seen here: https://codepen.io/tomhazledine/pen/MELGrp</p>
            <p>I copied this CSS and changed it by removing the animations and various text elements. I aslo modified it for use as a word game.</p> 
            <h4>Sounds</h4>
            <p>All sounds are from https://www.trekcore.com/audio/</p>

            <h4>Game Engine</h4>
            <p>The mechanics of this game are 100% my own.</p>


            <p>
                Video:{" "}
                <a
                href={process.env.PUBLIC_URL + "/images/WGG.mp4"}
                target="_blank"
                rel="noopener noreferrer"
                >
                mp4
                </a>
            </p>

            <p>
                Word Guess Game Demo <a href="https://mugwumper.github.io/wgg/" target="_blank"  rel="noopener noreferrer">"deployed example"</a>
            </p>

            <p>The Code: <a href="https://github.com/Mugwumper/wgg" target="_blank"  rel="noopener noreferrer">RPS-Multiplayer</a></p>

            <h2> bugs</h2>
            <p>* If you keep typing letters after a loss you will see losses increment.</p> 
            <p>UPDATE: I had to fix the above bug when similar error occured when you win. This being less cute I killed both problems.</p>
            {/* <p>
                Giphy API is used to create a dynamic web site. This app allows you select various search terms and it will display a selection of Giffs. Click any of them to see it play, click again to make it stop.
            </p>
            <p>The Game: <a href=" https://mugwumper.github.io/GifTastic/" target="_blank"  rel="noopener noreferrer">GifTastic</a></p>
            <p>The Code: <a href="https://github.com/Mugwumper/GifTastic" target="_blank"  rel="noopener noreferrer">GifTastic</a></p> */}
        </div>
    )
}

export default Project_WGG;