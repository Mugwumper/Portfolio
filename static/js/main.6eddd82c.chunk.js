(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(53),o=a.n(l),i=(a(62),a(8)),c=a(24),s=a(20),m=a(31),u=a(32),h=a(34),p=a(33),d=a(35);var g={textDecoration:"none",margin:"15px"},E=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-toggleable-sm"},r.a.createElement(c.b,{className:"normal navbar-brand",to:"/"},r.a.createElement("img",{src:"/Port2/favicon.ico",width:"30",height:"30",className:"d-inline-block align-top",alt:""})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/resume",style:g,className:"normal",activeClassName:"activeItem"},"Resume")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/portfolio",style:g,className:"normal",activeClassName:"activeItem"},"Portfolio")))))},f=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",{style:b},"Thomas Lewis"),r.a.createElement(E,null))}}]),t}(n.Component),b={fontFamily:"Iceland",textShadow:"2px 2px 2px #372AE8",color:"#fff",textAlign:"center",padding:"10px"},v=f;var y={padding:"30px"},k=function(){return r.a.createElement("div",{style:y},r.a.createElement("h1",null,"Main"),r.a.createElement("p",null,"This is the main page!"))},w=a(56),C=a.n(w),P=(a(67),r.a.memo((function(e){return r.a.createElement("div",{className:"row"},e.children)})),r.a.memo((function(e){return r.a.createElement("div",{className:"col-sm-".concat(e.span),style:e.style},e.children)})));r.a.memo((function(e){var t=e.style,a=e.bsStyle,n=e.onClick,l=a?"btn btn-".concat(a):"btn";return r.a.createElement("button",{style:t,className:l,onClick:n},e.children)})),r.a.memo((function(e){return r.a.createElement("div",{className:"btn-group"},e.children)}));var S=function(){var e=r.a.useContext(te).setShowMoreX,t=Object(n.useState)(!0),a=Object(i.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),m=s[0],u=s[1],h=Object(n.useState)(!1),p=Object(i.a)(h,2),d=p[0],g=p[1],E=Object(n.useState)({}),f=Object(i.a)(E,1)[0],b=Object(n.useRef)(null),v=Object(n.useCallback)((function(){return o((function(e){return!e}))}),[]),y=Object(n.useCallback)((function(t,a){console.log("active=".concat(t,"  - direction=").concat(a)),g(!0),e({current:t,show:!1})}),[e]);function k(t){console.log("clickToLearnMore"),e({current:t,show:!0})}return r.a.useEffect((function(){console.log("React.useEffect"),m&&(console.log("wasClicked: "+m),g(!0),u(!1))}),[m,d,e]),r.a.createElement("div",{className:"container-fluid",style:{paddingBottom:20},onClick:function(e){u(!0)}},r.a.createElement(P,{span:12,style:{marginTop:20}},r.a.createElement(C.a,{animation:!0,autoplay:l,slideshowSpeed:2e3,defaultActiveIndex:0,leftIcon:f.leftIcon,rightIcon:f.rightIcon,onSelect:y,ref:b,version:4},r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/Dream Journal Jumbotron.png",alt:"Dream Journal"}),r.a.createElement("div",{onClick:function(){return k(0)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_GifTastic.png",alt:"Giff Tastic"}),r.a.createElement("div",{onClick:function(){return k(1)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_CG.png",alt:"Crysal Game"}),r.a.createElement("div",{onClick:function(){return k(2)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_RPS.png",alt:"Rock Paper Siccors - Multiplayer"}),r.a.createElement("div",{onClick:function(){return k(3)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_WGG.png",alt:"Word Guess Game"}),r.a.createElement("div",{onClick:function(){return k(4)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_FF.png",alt:"Friend Finder"}),r.a.createElement("div",{onClick:function(){return k(5)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_Bam.png",alt:"Bamazon"}),r.a.createElement("div",{onClick:function(){return k(6)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_TG.png",alt:"Trivia Game"}),r.a.createElement("div",{onClick:function(){return k(7)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_Liri.png",alt:"Liri"}),r.a.createElement("div",{onClick:function(){return k(8)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_EDB.png",alt:"Eat-Da-Burger"}),r.a.createElement("div",{onClick:function(){return k(9)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_MS.png",alt:"Mongo Scraper"}),r.a.createElement("div",{onClick:function(){return k(10)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_Pup.png",alt:"Pupster"}),r.a.createElement("div",{onClick:function(){return k(11)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_CyG.png",alt:"Clicky Game"}),r.a.createElement("div",{onClick:function(){return k(12)},className:"carousel-caption"},"Click to learn more")),r.a.createElement("div",{style:{height:400},onClick:v},r.a.createElement("img",{style:{width:"100%",height:"100%",filter:"brightness(50%)"},src:"/Port2/images/Jumbotron_FRH.png",alt:"Family Reunion Helper"}),r.a.createElement("div",{onClick:function(){return k(13)},className:"carousel-caption"},"Click to learn more")))))};var T=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Dream Journal"),r.a.createElement("p",null,"The second group project for UNC Bootcamp"),r.a.createElement("h2",null,"Desciption"),r.a.createElement("p",null,'Dream Journal is a place to log the details of your dreams. Users can create an entry with associated "tags" or categories and browse entries in chronological order or by "tag". User can also toggle skins for day/night mode.'),r.a.createElement("h2",null,"Technologies used"),'"Dream Journal" is a node application utilizing;',r.a.createElement("ul",null,r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"ESLint"),r.a.createElement("li",null,"Travis CI"),r.a.createElement("li",null,"MySQL"),r.a.createElement("li",null,"Many-to-Many sequelize associations."),r.a.createElement("li",null,"Sequelize"),r.a.createElement("li",null,"Handlebars"),r.a.createElement("li",null,"Materialize"),r.a.createElement("li",null,"MVC design pattern")),r.a.createElement("p",null,"The App: ",r.a.createElement("a",{href:"https://mighty-cliffs-37800.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Heroku")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://docs.google.com/presentation/d/1qek1ZaqA3FkIX5uWMjSNhRFgdTe6Nj0te69TZ7C8hEQ/edit#slide=id.p",target:"_blank",rel:"noopener noreferrer"},"Presentation Slide Deck")))};var N=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Crystal Game"),r.a.createElement("p",null,"This game part memorization and part guessing. You click the magic items each in turn noting how much they add to the total. Continue clicking the correct items to reach the targret value."),r.a.createElement("p",null,"The Game: ",r.a.createElement("a",{href:"https://mugwumper.github.io/unit-4-game",target:"_blank",rel:"noopener noreferrer"},"Unit 4 Game")),r.a.createElement("p",null,"The Code: ",r.a.createElement("a",{href:"https://github.com/Mugwumper/unit-4-game",target:"_blank",rel:"noopener noreferrer"},"unit-4-game")))};var j=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Giff Tastic Game"),r.a.createElement("p",null,"Giphy API is used to create a dynamic web site. This app allows you select various search terms and it will display a selection of Giffs. Click any of them to see it play, click again to make it stop."),r.a.createElement("p",null,"The Game: ",r.a.createElement("a",{href:" https://mugwumper.github.io/GifTastic/",target:"_blank",rel:"noopener noreferrer"},"GifTastic")),r.a.createElement("p",null,"The Code: ",r.a.createElement("a",{href:"https://github.com/Mugwumper/GifTastic",target:"_blank",rel:"noopener noreferrer"},"GifTastic")))};var O=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Rock Paper Scissors - Multiplayer"),r.a.createElement("p",null,r.a.createElement("h2",null,"Description"),r.a.createElement("p",null,"This game can be used by two people (or two instances on one machine). It uses Firebase to track each player\u2019s selection. It will keep a running score as well."),r.a.createElement("p",null,"Beyond the assignment\u2019s requirements I\u2019ve added a few things."),r.a.createElement("h5",null,"1 - Player\u2019s Name"),r.a.createElement("p",null,"The ability to give each player a name. This appears on both screens and makes it clear who you are playing against."),r.a.createElement("h5",null,"2 - Status"),r.a.createElement("p",null,"As each player is making a selection the status is relayed to the other player. In other words you will know if your opponent is waiting on you or if you are waiting on them."),r.a.createElement("h5",null,"3 - Control Panel"),r.a.createElement("p",null,"Admittedly this is used more for my own debugging but it does offer a place where user name can be entered. Control panel is accessable by clicking on the gear icon in the upper left."),r.a.createElement("h4",null,"Bugs:"),r.a.createElement("p",null,"There is an issue where at times the both instances appear as \u2018Player 2\u2019. To work around this I\u2019ve added the ability to \u2018Force this to be Player 1\u2019 in the control panel."),r.a.createElement("h2",null,"Technoligies:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Firebase Database"),r.a.createElement("li",null,"JQuery"))),r.a.createElement("p",null,"The Game: ",r.a.createElement("a",{href:"https://mugwumper.github.io/RPS-Multiplayer/",target:"_blank",rel:"noopener noreferrer"},"Rock Paper Scissors - Multiplayer")),r.a.createElement("p",null,"The Code: ",r.a.createElement("a",{href:"https://github.com/Mugwumper/RPS-Multiplayer",target:"_blank",rel:"noopener noreferrer"},"RPS-Multiplayer")))};var G=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Word Guess Game"))};var _=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Friend Finder"),r.a.createElement("p",null,"homework assignment for unit 13-express"),r.a.createElement("h2",null," Description"),r.a.createElement("p",null,"*Friend Finder* is an application meant to simulate a dating app. It asks the user 10 questions in a survey and based on the responses the closest match is found and returned."),r.a.createElement("h2",null,"Technologies used"),r.a.createElement("ul",null,r.a.createElement("li",null,"Node.js"),r.a.createElement("li",null,"Express")),r.a.createElement("h2",null,"Demo"),r.a.createElement("p",null,"This application is hosted on Heroku: [Click Me!](https://blooming-castle-32820.herokuapp.com)"))};var M=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Bamazon"))};var D=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Trivia Game"),r.a.createElement("h2",null,"Description"),r.a.createElement("p",null,"This game demonstrates the use of timers to manage each question and anwer's visibility. This is the more advanced assignment (of the two options) as it contains one question at a time with a persistent score that is shown at the end of the quiz. The final screen, shows the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page)."),r.a.createElement("h3",null,"Technologies"),r.a.createElement("ul",null,r.a.createElement("li",null,"JQuery"),r.a.createElement("li",null,"Javascript")),r.a.createElement("h2",null,"Links"),r.a.createElement("p",null,"The Game: ",r.a.createElement("a",{href:"https://mugwumper.github.io/TriviaGame/",target:"_blank",rel:"noopener noreferrer"},"GifTastic")),r.a.createElement("p",null,"The Code: ",r.a.createElement("a",{href:"https://github.com/Mugwumper/TriviaGame",target:"_blank",rel:"noopener noreferrer"},"GitHub Code")),r.a.createElement("p",null,"The Video: ",r.a.createElement("a",{href:"/Port2/images/Trivia_Game.mp4",target:"_blank",rel:"noopener noreferrer"},"mp4")))};var x=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Liri"))};var J=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Eat-Da-Burger"),r.a.createElement("p",null),r.a.createElement("p",null,"The Video: ",r.a.createElement("a",{href:"/Port2/images/Eat-Da-Burger.mp4",target:"_blank",rel:"noopener noreferrer"},"mp4")))};var R=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Mongo Scraper"))};var F=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Pupster"))};var I=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Clicky-Game"),r.a.createElement("p",null),r.a.createElement("p",null,"The Game: ",r.a.createElement("a",{href:"https://serene-citadel-86482.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Clicky Game")),r.a.createElement("p",null,"The Code: ",r.a.createElement("a",{href:"https://github.com/Mugwumper/clicky-game",target:"_blank",rel:"noopener noreferrer"},"clicky-game")),r.a.createElement("p",null,"The Video: ",r.a.createElement("a",{href:"/Port2/images/clicky-game.mp4",target:"_blank",rel:"noopener noreferrer"},"mp4")))};var L=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Family Reunion Helper"))};var A=function(){console.log(r.a.useContext(te).doShowMore);var e=r.a.useContext(te).doShowMore.show,t=r.a.useContext(te).doShowMore.current,a=e&&0===t,n=e&&1===t,l=e&&2===t,o=e&&3===t,i=e&&4===t,c=e&&5===t,s=e&&6===t,m=e&&7===t,u=e&&8===t,h=e&&9===t,p=e&&10===t,d=e&&11===t,g=e&&12===t,E=e&&13===t;return r.a.createElement("div",null,r.a.createElement(S,null),a?T():null,n?j():null,l?N():null,o?O():null,i?G():null,c?_():null,s?M():null,m?D():null,u?x():null,h?J():null,p?R():null,d?F():null,g?I():null,E?L():null)},B=a(22);B.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(B.pdfjs.version,"/pdf.worker.js");var q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={numPages:null,pageNumber:1},a.onDocumentLoadSuccess=function(e){var t=e.numPages;a.setState({numPages:t})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.pageNumber,a=e.numPages;return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(B.Document,{file:"/Port2/Thomas Lewis Resume.pdf",onLoadSuccess:this.onDocumentLoadSuccess,onLoadError:console.error},r.a.createElement(B.Page,{pageNumber:1})),r.a.createElement("p",null,"Page ",t," of ",a),r.a.createElement(B.Document,{file:"/Port2/Thomas Lewis Resume.pdf",onLoadSuccess:this.onDocumentLoadSuccess,onLoadError:console.error},r.a.createElement(B.Page,{pageNumber:2})),r.a.createElement("p",null,"Page 2 of ",a)))}}]),t}(n.Component);var z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"About me..."))},H=a(43);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var W=function(e,t){var a=r.a.useState(e),n=Object(i.a)(a,2),l=n[0],o=n[1],c=r.a.useState({}),s=Object(i.a)(c,2),m=s[0],u=s[1],h=r.a.useState(!1),p=Object(i.a)(h,2),d=p[0],g=p[1];return r.a.useEffect((function(){d&&(0===Object.keys(m).length?(console.log("Authenticated!",l.email,l.password),g(!1)):g(!1))}),[m,d,l.password,l.email]),{handleSubmit:function(e){e.preventDefault();var a=t(l);u(a),g(!0)},handleChange:function(e){o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(H.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l,Object(H.a)({},e.target.name,e.target.value)))},handleBlur:function(){var e=t(l);u(e)},errors:m,isSubmitting:d,values:l}};function Z(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required Email",e.password?e.password.length<6&&(t.password="Password must be at least 6 characters"):t.password="Required Password",t}var Q={email:"",password:""};var V={margin:"0 auto",width:"500px"},X={width:"100%",color:"#000",fontSize:"1.5rem",padding:"0.25em",marginTop:"0.5em",border:"3px solid black"},Y={background:"orange",fontSize:"1.3rem",margin:"1em",padding:"0.2em 0.5em"},$={width:"100%",color:"#000",border:"2px solid red",borderRadius:"4px"},K={margin:"0.25em 0 0 0",padding:"0",color:"red",fontStyle:"bold",fontSize:"1.2rem"},ee=function(e){var t=W(Q,Z),a=t.handleSubmit,n=t.handleChange,l=t.handleBlur,o=t.errors,i=t.isSubmitting,c=t.values;return r.a.createElement("div",{className:"container",style:V},r.a.createElement("h1",null,"Register Here"),r.a.createElement("form",{onSubmit:a},r.a.createElement("input",{onChange:n,onBlur:l,className:o.email&&"error-input",name:"email",value:c.email,autoComplete:"off",placeholder:"Your email address",style:o.email?$:X}),o.email&&r.a.createElement("p",{style:K},o.email),r.a.createElement("input",{onChange:n,onBlur:l,className:o.password&&"error-input",name:"password",type:"password",value:c.password,placeholder:"Choose a safe password",style:o.password?$:X}),o.password&&r.a.createElement("p",{style:K},o.password),r.a.createElement("div",null,r.a.createElement("button",{disabled:i,type:"submit",style:Y},"Submit"))))},te=(a(110),r.a.createContext(null));var ae=function(){var e=r.a.useState({}),t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){}),[a]),r.a.createElement(te.Provider,{value:{doShowMore:a,setShowMoreX:n}},r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement(s.a,{exact:!0,path:"/",component:k}),r.a.createElement(s.a,{path:"/about",component:z}),r.a.createElement(s.a,{path:"/resume",component:q}),r.a.createElement(s.a,{path:"/portfolio",component:A}),r.a.createElement(s.a,{path:"/contact",component:ee})))))};o.a.render(r.a.createElement(ae,null),document.getElementById("root"))},29:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=29},57:function(e,t,a){e.exports=a(111)},62:function(e,t,a){},71:function(e,t){},73:function(e,t){},74:function(e,t){},75:function(e,t){},76:function(e,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.6eddd82c.chunk.js.map