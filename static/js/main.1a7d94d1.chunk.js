(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(53),o=a.n(r),i=(a(62),a(15)),c=a(24),s=a(20),m=a(31),u=a(32),h=a(34),p=a(33),d=a(35);var g={textDecoration:"none",margin:"15px"},E=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-toggleable-sm"},l.a.createElement(c.b,{exact:!0,className:"normal navbar-brand",activeClassName:"activeItem",to:"/",activeStyle:{filter:"brightness(250%)"}},l.a.createElement("img",{src:"/Port2/favicon.png",width:"20",height:"20",className:"d-inline-block align-top",alt:""})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/resume",style:g,className:"normal",activeClassName:"activeItem"},"Resume")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/portfolio",style:g,className:"normal",activeClassName:"activeItem"},"Portfolio")))))},f=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("h1",{style:b},"Thomas Lewis"),l.a.createElement(E,null))}}]),t}(n.Component),b={fontFamily:"Iceland",textShadow:"2px 2px 2px #372AE8",color:"#fff",textAlign:"center",padding:"10px"},y=f;var v={padding:"30px"},w=function(){return l.a.createElement("div",{style:v},l.a.createElement("h1",null,"Main"),l.a.createElement("p",null,"This is the main page!"))},k=a(56),C=a.n(k),T=(a(67),l.a.memo((function(e){return l.a.createElement("div",{className:"row"},e.children)})),l.a.memo((function(e){return l.a.createElement("div",{className:"col-sm-".concat(e.span),style:e.style},e.children)})));l.a.memo((function(e){var t=e.style,a=e.bsStyle,n=e.onClick,r=a?"btn btn-".concat(a):"btn";return l.a.createElement("button",{style:t,className:r,onClick:n},e.children)})),l.a.memo((function(e){return l.a.createElement("div",{className:"btn-group"},e.children)}));var S=function(){var e=l.a.useContext(te).setShowMoreX,t=Object(n.useState)(!0),a=Object(i.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),m=s[0],u=s[1],h=Object(n.useState)({}),p=Object(i.a)(h,1)[0],d=Object(n.useRef)(null),g=Object(n.useCallback)((function(){return o((function(e){return!e}))}),[]),E=Object(n.useCallback)((function(t,a){console.log("activeItem=".concat(t,"  - direction=").concat(a)),e({current:t,show:!1}),o(!0)}),[e]);function f(t){console.log("clickToLearnMore"),e({current:t,show:!0}),o(!0)}return l.a.useEffect((function(){m&&(console.log("wasClicked: "+m),u(!1))}),[m,e]),l.a.createElement("div",{className:"container-fluid",style:{paddingBottom:20},onClick:function(e){u(!0)}},l.a.createElement(T,{span:12,style:{marginTop:20}},l.a.createElement(C.a,{animation:!0,autoplay:r,slideshowSpeed:5e3,defaultActiveIndex:0,leftIcon:p.leftIcon,rightIcon:p.rightIcon,onSelect:E,ref:d,version:4},l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/Dream Journal Jumbotron.png",alt:"Dream Journal"}),l.a.createElement("div",{onClick:function(){return f(0)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_GifTastic.png",alt:"Giff Tastic"}),l.a.createElement("div",{onClick:function(){return f(1)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_CG.png",alt:"Crysal Game"}),l.a.createElement("div",{onClick:function(){return f(2)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_RPS.png",alt:"Rock Paper Siccors - Multiplayer"}),l.a.createElement("div",{onClick:function(){return f(3)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_WGG.png",alt:"Word Guess Game"}),l.a.createElement("div",{onClick:function(){return f(4)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_FF.png",alt:"Friend Finder"}),l.a.createElement("div",{onClick:function(){return f(5)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_Bam.png",alt:"Bamazon"}),l.a.createElement("div",{onClick:function(){return f(6)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_TG.png",alt:"Trivia Game"}),l.a.createElement("div",{onClick:function(){return f(7)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_Liri.png",alt:"Liri"}),l.a.createElement("div",{onClick:function(){return f(8)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_EDB.png",alt:"Eat-Da-Burger"}),l.a.createElement("div",{onClick:function(){return f(9)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_MS.png",alt:"Mongo Scraper"}),l.a.createElement("div",{onClick:function(){return f(10)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_Pup.png",alt:"Pupster"}),l.a.createElement("div",{onClick:function(){return f(11)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_CyG.png",alt:"Clicky Game"}),l.a.createElement("div",{onClick:function(){return f(12)},className:"carousel-caption"},"Click to learn more")),l.a.createElement("div",{style:{height:400},onClick:g},l.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_FRH.png",alt:"Family Reunion Helper"}),l.a.createElement("div",{onClick:function(){return f(13)},className:"carousel-caption"},"Click to learn more")))))};var P=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Dream Journal"),l.a.createElement("p",null,"The second group project for UNC Bootcamp"),l.a.createElement("h2",null,"Desciption"),l.a.createElement("p",null,'Dream Journal is a place to log the details of your dreams. Users can create an entry with associated "tags" or categories and browse entries in chronological order or by "tag". User can also toggle skins for day/night mode.'),l.a.createElement("h2",null,"Technologies used"),'"Dream Journal" is a node application utilizing;',l.a.createElement("ul",null,l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"ESLint"),l.a.createElement("li",null,"Travis CI"),l.a.createElement("li",null,"MySQL"),l.a.createElement("li",null,"Many-to-Many sequelize associations."),l.a.createElement("li",null,"Sequelize"),l.a.createElement("li",null,"Handlebars"),l.a.createElement("li",null,"Materialize"),l.a.createElement("li",null,"MVC design pattern")),l.a.createElement("p",null,"The App: ",l.a.createElement("a",{href:"https://mighty-cliffs-37800.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Heroku")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://docs.google.com/presentation/d/1qek1ZaqA3FkIX5uWMjSNhRFgdTe6Nj0te69TZ7C8hEQ/edit#slide=id.p",target:"_blank",rel:"noopener noreferrer"},"Presentation Slide Deck")))};var N=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Crystal Game"),l.a.createElement("p",null,"This game part memorization and part guessing. You click the magic items each in turn noting how much they add to the total. Continue clicking the correct items to reach the targret value."),l.a.createElement("p",null,"The Game: ",l.a.createElement("a",{href:"https://mugwumper.github.io/unit-4-game",target:"_blank",rel:"noopener noreferrer"},"Unit 4 Game")),l.a.createElement("p",null,"The Code: ",l.a.createElement("a",{href:"https://github.com/Mugwumper/unit-4-game",target:"_blank",rel:"noopener noreferrer"},"unit-4-game")))};var j=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Giff Tastic Game"),l.a.createElement("p",null,"Giphy API is used to create a dynamic web site. This app allows you select various search terms and it will display a selection of Giffs. Click any of them to see it play, click again to make it stop."),l.a.createElement("p",null,"The Game: ",l.a.createElement("a",{href:" https://mugwumper.github.io/GifTastic/",target:"_blank",rel:"noopener noreferrer"},"GifTastic")),l.a.createElement("p",null,"The Code: ",l.a.createElement("a",{href:"https://github.com/Mugwumper/GifTastic",target:"_blank",rel:"noopener noreferrer"},"GifTastic")))};var M=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Rock Paper Scissors - Multiplayer"),l.a.createElement("h2",null,"Description"),l.a.createElement("p",null,"This game can be used by two people (or two instances on one machine). It uses Firebase to track each player\u2019s selection. It will keep a running score as well."),l.a.createElement("p",null,"Beyond the assignment\u2019s requirements I\u2019ve added a few things."),l.a.createElement("h5",null,"1 - Player\u2019s Name"),l.a.createElement("p",null,"The ability to give each player a name. This appears on both screens and makes it clear who you are playing against."),l.a.createElement("h5",null,"2 - Status"),l.a.createElement("p",null,"As each player is making a selection the status is relayed to the other player. In other words you will know if your opponent is waiting on you or if you are waiting on them."),l.a.createElement("h5",null,"3 - Control Panel"),l.a.createElement("p",null,"Admittedly this is used more for my own debugging but it does offer a place where user name can be entered. Control panel is accessable by clicking on the gear icon in the upper left."),l.a.createElement("h4",null,"Bugs:"),l.a.createElement("p",null,"There is an issue where at times the both instances appear as \u2018Player 2\u2019. To work around this I\u2019ve added the ability to \u2018Force this to be Player 1\u2019 in the control panel."),l.a.createElement("h2",null,"Technoligies:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Firebase Database"),l.a.createElement("li",null,"JQuery")),l.a.createElement("p",null,"The Game: ",l.a.createElement("a",{href:"https://mugwumper.github.io/RPS-Multiplayer/",target:"_blank",rel:"noopener noreferrer"},"Rock Paper Scissors - Multiplayer")),l.a.createElement("p",null,"The Code: ",l.a.createElement("a",{href:"https://github.com/Mugwumper/RPS-Multiplayer",target:"_blank",rel:"noopener noreferrer"},"RPS-Multiplayer")))};var O=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Word Guess Game"),l.a.createElement("h2",null,"gameplay"),l.a.createElement("p",null,'To play press any key, it will start the engines (background sounds). Once a game is complete advance to the next word by pressing "NEXT".'),l.a.createElement("p",null,"Wins and Losses are tallied in the 'computer readout' (small text above the buttons)."),l.a.createElement("p",null,"MUTE will turn off the engines (background sounds)."),l.a.createElement("p",null,"RESET will restart the game setting wins and losses back to 0."),l.a.createElement("p",null,"Lastly there is a status message displayed in the upper part of the screen. (press reset to verify)."),l.a.createElement("h2",null,"Media Queries"),l.a.createElement("p",null,"The game must be played on a fairly large screen. The main title will be removed as the screen width is made smaller but the size is held to 1125px as the styling becomes distored below this value."),l.a.createElement("h2",null,"Credits:"),l.a.createElement("p",null,"Theming this game was done by careful using work from other people. I changed items as needed for the game and made sure that was was used has been reviewed such that I at least understand how it was constructed."),l.a.createElement("h3",null,"Visuals"),l.a.createElement("h4",null,"LCARS (StarTrek) CSS"),l.a.createElement("p",null,"BY Tom Hazledine"),l.a.createElement("p",null,"as seen here: https://codepen.io/tomhazledine/pen/MELGrp"),l.a.createElement("p",null,"I copied this CSS and changed it by removing the animations and various text elements. I aslo modified it for use as a word game."),l.a.createElement("h4",null,"Sounds"),l.a.createElement("p",null,"All sounds are from https://www.trekcore.com/audio/"),l.a.createElement("h4",null,"Game Engine"),l.a.createElement("p",null,"The mechanics of this game are 100% my own."),l.a.createElement("p",null,"Video:"," ",l.a.createElement("a",{href:"/Port2/images/WGG.mp4",target:"_blank",rel:"noopener noreferrer"},"mp4")),l.a.createElement("p",null,"Word Guess Game Demo ",l.a.createElement("a",{href:"https://mugwumper.github.io/wgg/",target:"_blank",rel:"noopener noreferrer"},'"deployed example"')),l.a.createElement("p",null,"The Code: ",l.a.createElement("a",{href:"https://github.com/Mugwumper/wgg",target:"_blank",rel:"noopener noreferrer"},"RPS-Multiplayer")),l.a.createElement("h2",null," bugs"),l.a.createElement("p",null,"* If you keep typing letters after a loss you will see losses increment."),l.a.createElement("p",null,"UPDATE: I had to fix the above bug when similar error occured when you win. This being less cute I killed both problems."))};var _=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Friend Finder"),l.a.createElement("p",null,"homework assignment for unit 13-express"),l.a.createElement("h2",null," Description"),l.a.createElement("p",null,"*Friend Finder* is an application meant to simulate a dating app. It asks the user 10 questions in a survey and based on the responses the closest match is found and returned."),l.a.createElement("p",null,"Video:"," ",l.a.createElement("a",{href:"/Port2/images/Friend_Finder.mp4",target:"_blank",rel:"noopener noreferrer"},"mp4")),l.a.createElement("h2",null,"Technologies used"),l.a.createElement("ul",null,l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"Express")),l.a.createElement("h2",null,"Demo"),l.a.createElement("p",null,"This application is hosted on Heroku: [Click Me!](https://blooming-castle-32820.herokuapp.com)"))};var x=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Bamazon"))};var G=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Trivia Game"),l.a.createElement("h2",null,"Description"),l.a.createElement("p",null,"This game demonstrates the use of timers to manage each question and anwer's visibility. This is the more advanced assignment (of the two options) as it contains one question at a time with a persistent score that is shown at the end of the quiz. The final screen, shows the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page)."),l.a.createElement("h3",null,"Technologies"),l.a.createElement("ul",null,l.a.createElement("li",null,"JQuery"),l.a.createElement("li",null,"Javascript")),l.a.createElement("h2",null,"Links"),l.a.createElement("p",null,"The Game: ",l.a.createElement("a",{href:"https://mugwumper.github.io/TriviaGame/",target:"_blank",rel:"noopener noreferrer"},"GifTastic")),l.a.createElement("p",null,"The Code: ",l.a.createElement("a",{href:"https://github.com/Mugwumper/TriviaGame",target:"_blank",rel:"noopener noreferrer"},"GitHub Code")),l.a.createElement("p",null,"The Video: ",l.a.createElement("a",{href:"/Port2/images/Trivia_Game.mp4",target:"_blank",rel:"noopener noreferrer"},"mp4")))};var I=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Liri"),l.a.createElement("h1",null,"liri-node-app"),l.a.createElement("p",null,"liri is like siri. Except that in this case it is a class assignment that uses Node JS. With it you can query one of three APIs that return information about songs, movies or upcoming concerts."),l.a.createElement("h2",null,"Installation"),l.a.createElement("p",null,"To install and run the program do the following:"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("p",null,'Clone the repo " ',l.a.createElement("a",{href:"https://www.github.com/Mugwumper/liri-node-app.git"},"https://www.github.com/Mugwumper/liri-node-app.git"),'"')),l.a.createElement("li",null,l.a.createElement("p",null,"navigate git-bash into the repo directory and type \u201cnpm install\u201d")),l.a.createElement("li",null,l.a.createElement("p",null,"create .env file with your keys to the APIs")),l.a.createElement("li",null,l.a.createElement("p",null,'run the program by typing "node liri.js <command> <search>'))),l.a.createElement("p",null,"Video:"," ",l.a.createElement("a",{href:"/Port2/images/liri.mp4",target:"_blank",rel:"noopener noreferrer"},"mp4")),l.a.createElement("h2",null,"Usage"),l.a.createElement("p",null,"The command must be one continuous string, use dashes between words if you like. The actual wording is rather flexible."),l.a.createElement("p",null,"Any command having \u2018spot\u2019, \u2018song\u2019 or \u2018tune\u2019 will use the Spotify API."),l.a.createElement("p",null,"If you include \u2018band\u2019, \u2018concert\u2019 or \u2018venue\u2019 in your command Liri will search the Bands In Town API."),l.a.createElement("p",null,"Likewise if you use \u2018movie\u2019, \u2018omdb\u2019 or \u2018film\u2019 the OMDb API will be used."),l.a.createElement("p",null,"Finally if your command contains \u2018do-what-it-says\u2019, \u2018special\u2019, \u2018read\u2019 or \u2018file\u2019 then the random.txt file will be used and this can itself contains a command and search parameter for any of the three APIs."),l.a.createElement("h3",null,"Logging"),l.a.createElement("p",null,"A history of commands, search parameters and the results are all stored in the file \u2018log.txt\u2019."),l.a.createElement("h2",null,"Technologies used"),l.a.createElement("ul",null,l.a.createElement("li",null,"node-spotify-api"),l.a.createElement("li",null,"inquirer"),l.a.createElement("li",null,"dotenv"),l.a.createElement("li",null,"axios"),l.a.createElement("li",null,"moment")),l.a.createElement("p",null,"The Code: ",l.a.createElement("a",{href:"https://github.com/Mugwumper/liri-node-app",target:"_blank",rel:"noopener noreferrer"},"liri-node-app")))};var D=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Eat-Da-Burger"),l.a.createElement("p",null,"unit 14-handlebars \u2026is a restaurant app that lets users input the names of burgers they\u2019d like to eat."),l.a.createElement("h2",null,"Description"),l.a.createElement("p",null,"This full stack application demonstrates the techniques and technologies needed to create a \u2018real world\u2019 solution. The layout utilizes an MVC design pattern with the seperation of concerns maintained. The implementation uses Node.js, Express, mySQl, and Handlebars among others."),l.a.createElement("p",null,"A user can enter a burger name which gets added to the menu. Once there it can be \u2018eaten\u2019 or devoured as the button label shows. This causes the item to be removed from the menu list and added to the devoured list."),l.a.createElement("h2",null,"Demo"),l.a.createElement("p",null,"The demo of the burger eating application can be found ",l.a.createElement("a",{href:"https://enigmatic-fortress-39110.herokuapp.com/"},"here"),"."),l.a.createElement("h2",null,"Installation"),l.a.createElement("p",null,"To run the application locally, first clone this repository with the following commands."),l.a.createElement("p",null,l.a.createElement("code",null,"git clone git@github.com:??/eat-da-burger.git cd eat-da-burger npm install node server")),l.a.createElement("p",null,"Now, open the local application on port 3000 at the URL: ",l.a.createElement("code",null,"http://localhost:3000/"),"."),l.a.createElement("h2",null,"Technology used"),l.a.createElement("ul",null,l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"heroku"),l.a.createElement("li",null,"body-parser (npm)"),l.a.createElement("li",null,"express"),l.a.createElement("li",null,"path (npm)"),l.a.createElement("li",null,"JawsDB")),l.a.createElement("h3",null,"credits"),l.a.createElement("p",null,"burger image:"),l.a.createElement("a",{href:"https://pngtree.com/freepng/delicious-burgers-vector_1401858.html"},"https://pngtree.com/freepng/delicious-burgers-vector_1401858.html"))};var A=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"NYT-Mongo-Scraper"),l.a.createElement("p",null,"This is a Node.js application that uses Cheerio and MongoDB to scrape and save NYT articles."),l.a.createElement("h2",null,"Feature Overview"),l.a.createElement("p",null,"Scrape the New York Times homepage, then save and add notes to your favorite articles using this responsive application."),l.a.createElement("p",null,"Video:"," ",l.a.createElement("a",{href:"/Port2/images/Mongo_Scraper.mp4",target:"_blank",rel:"noopener noreferrer"},"mp4")),l.a.createElement("p",null,"NYT Scape Demo ",l.a.createElement("a",{href:"https://thawing-waters-71746.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},'"deployed example"')),l.a.createElement("p",null,"The Code: ",l.a.createElement("a",{href:"https://github.com/Mugwumper/mongo-scraper",target:"_blank",rel:"noopener noreferrer"},"RPS-Multiplayer")),l.a.createElement("h2",null,"Technologies Used"),l.a.createElement("ul",null,l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"MongoDB/Mongoose"),l.a.createElement("li",null,"cheerio"),l.a.createElement("li",null,"request"),l.a.createElement("li",null,"express"),l.a.createElement("li",null,"Handlebars")),l.a.createElement("h3",null,"Misc Notes"),l.a.createElement("p",null,"Without realising it I created a favicon that is the same as the offical one used by the NYT's. Mine is sloppy by comparison but as a 16x16 image it's almost impossible to tell them apart."),l.a.createElement("p",null,"Fonts: https://fonts.google.com/specimen/News+Cycle"))};var F=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Pupster"))};var J=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Clicky-Game"),l.a.createElement("p",null),l.a.createElement("p",null,"The Game: ",l.a.createElement("a",{href:"https://serene-citadel-86482.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Clicky Game")),l.a.createElement("p",null,"The Code: ",l.a.createElement("a",{href:"https://github.com/Mugwumper/clicky-game",target:"_blank",rel:"noopener noreferrer"},"clicky-game")),l.a.createElement("p",null,"The Video: ",l.a.createElement("a",{href:"/Port2/images/clicky-game.mp4",target:"_blank",rel:"noopener noreferrer"},"mp4")))};var L=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Family Reunion Helper"),l.a.createElement("h2",null,"AKA: Something To Talk About"),l.a.createElement("p",null,"This app will take a collection of people\u2019s birthdays and create a concise document of things that happened on each of the birthdays. It would be used for planning family reunions to generate a document that includes the collection of reunion attendees and the events and details of life at the time of their birthdays."),l.a.createElement("p",null,"Give a calendar date and this app will detail what life was like at that point in time."),l.a.createElement("p",null,"Heroku deployment: ",l.a.createElement("a",{href:"https://dashboard.heroku.com/apps/something-to-talk-about"},"https://dashboard.heroku.com/apps/something-to-talk-about")),l.a.createElement("h2",null,"Technoligies Used"),l.a.createElement("ul",null,l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Mongo"),l.a.createElement("li",null,"Morgan"),l.a.createElement("li",null,"Moment"),l.a.createElement("li",null,"Request"),l.a.createElement("li",null,"Axios"),l.a.createElement("li",null,"Cheerio"),l.a.createElement("li",null,"Firebase"),l.a.createElement("li",null,"Fetch"),l.a.createElement("li",null,"Passport")),l.a.createElement("p",null,"The Video: ",l.a.createElement("a",{href:"/Port2/images/??.mp4",target:"_blank",rel:"noopener noreferrer"},"mp4")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://docs.google.com/presentation/d/1abXqETT7-ytrhYlNgiNSaSlDuBNUP9Ab525zZlCpP0k/edit#slide=id.g649e848b92_0_52",target:"_blank",rel:"noopener noreferrer"},"Presentation Slide Deck")))};var R=function(){var e=l.a.useContext(te).doShowMore.show,t=l.a.useContext(te).doShowMore.current,a=e&&0===t,n=e&&1===t,r=e&&2===t,o=e&&3===t,i=e&&4===t,c=e&&5===t,s=e&&6===t,m=e&&7===t,u=e&&8===t,h=e&&9===t,p=e&&10===t,d=e&&11===t,g=e&&12===t,E=e&&13===t;return l.a.createElement("div",null,l.a.createElement(S,null),a?P():null,n?j():null,r?N():null,o?M():null,i?O():null,c?_():null,s?x():null,m?G():null,u?I():null,h?D():null,p?A():null,d?F():null,g?J():null,E?L():null)},B=a(22);B.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(B.pdfjs.version,"/pdf.worker.js");var q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={numPages:null,pageNumber:1},a.onDocumentLoadSuccess=function(e){var t=e.numPages;a.setState({numPages:t})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.pageNumber,a=e.numPages;return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement(B.Document,{file:"/Port2/Thomas Lewis Resume.pdf",onLoadSuccess:this.onDocumentLoadSuccess,onLoadError:console.error},l.a.createElement(B.Page,{pageNumber:1})),l.a.createElement("p",null,"Page ",t," of ",a),l.a.createElement(B.Document,{file:"/Port2/Thomas Lewis Resume.pdf",onLoadSuccess:this.onDocumentLoadSuccess,onLoadError:console.error},l.a.createElement(B.Page,{pageNumber:2})),l.a.createElement("p",null,"Page 2 of ",a)))}}]),t}(n.Component);var z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"About"),l.a.createElement("p",null,"About me..."))},U=a(43);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var V=function(e,t){var a=l.a.useState(e),n=Object(i.a)(a,2),r=n[0],o=n[1],c=l.a.useState({}),s=Object(i.a)(c,2),m=s[0],u=s[1],h=l.a.useState(!1),p=Object(i.a)(h,2),d=p[0],g=p[1];return l.a.useEffect((function(){d&&(0===Object.keys(m).length?(console.log("Authenticated!",r.email,r.password),g(!1)):g(!1))}),[m,d,r.password,r.email]),{handleSubmit:function(e){e.preventDefault();var a=t(r);u(a),g(!0)},handleChange:function(e){o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach((function(t){Object(U.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},r,Object(U.a)({},e.target.name,e.target.value)))},handleBlur:function(){var e=t(r);u(e)},errors:m,isSubmitting:d,values:r}};function W(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required Email",e.password?e.password.length<6&&(t.password="Password must be at least 6 characters"):t.password="Required Password",t}var Y={email:"",password:""};var Q={margin:"0 auto",width:"500px"},Z={width:"100%",color:"#000",fontSize:"1.5rem",padding:"0.25em",marginTop:"0.5em",border:"3px solid black"},X={background:"orange",fontSize:"1.3rem",margin:"1em",padding:"0.2em 0.5em"},K={width:"100%",color:"#000",border:"2px solid red",borderRadius:"4px"},$={margin:"0.25em 0 0 0",padding:"0",color:"red",fontStyle:"bold",fontSize:"1.2rem"},ee=function(e){var t=V(Y,W),a=t.handleSubmit,n=t.handleChange,r=t.handleBlur,o=t.errors,i=t.isSubmitting,c=t.values;return l.a.createElement("div",{className:"container",style:Q},l.a.createElement("h1",null,"Register Here"),l.a.createElement("form",{onSubmit:a},l.a.createElement("input",{onChange:n,onBlur:r,className:o.email&&"error-input",name:"email",value:c.email,autoComplete:"off",placeholder:"Your email address",style:o.email?K:Z}),o.email&&l.a.createElement("p",{style:$},o.email),l.a.createElement("input",{onChange:n,onBlur:r,className:o.password&&"error-input",name:"password",type:"password",value:c.password,placeholder:"Choose a safe password",style:o.password?K:Z}),o.password&&l.a.createElement("p",{style:$},o.password),l.a.createElement("div",null,l.a.createElement("button",{disabled:i,type:"submit",style:X},"Submit"))))},te=(a(110),l.a.createContext(null));var ae=function(){var e=l.a.useState({}),t=Object(i.a)(e,2),a=t[0],n=t[1];return l.a.useEffect((function(){}),[a]),l.a.createElement(te.Provider,{value:{doShowMore:a,setShowMoreX:n}},l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(y,null),l.a.createElement(s.a,{exact:!0,path:"/",component:w}),l.a.createElement(s.a,{path:"/about",component:z}),l.a.createElement(s.a,{path:"/resume",component:q}),l.a.createElement(s.a,{path:"/portfolio",component:R}),l.a.createElement(s.a,{path:"/contact",component:ee})))))};o.a.render(l.a.createElement(ae,null),document.getElementById("root"))},29:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=29},57:function(e,t,a){e.exports=a(111)},62:function(e,t,a){},71:function(e,t){},73:function(e,t){},74:function(e,t){},75:function(e,t){},76:function(e,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.1a7d94d1.chunk.js.map