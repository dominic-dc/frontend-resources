(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,i){e.exports=i.p+"static/media/undraw-to-the-moon.a7b4f1ec.png"},24:function(e,t,i){e.exports=i(39)},29:function(e,t,i){},30:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var s=i(0),o=i.n(s),r=i(20),n=i.n(r),a=i(11),l=(i(29),i(5)),c=i(6),p=i(8),d=i(7),m=i(9),u=i(10),h=(i(30),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Nav"},this.props.data.map(function(e,t){return o.a.createElement(a.b,{key:t,className:"Nav-navlink",exact:!0,to:"/".concat(e.type.toLowerCase()),activeClassName:"active"},e.type)}))}}]),t}(s.Component)),b=(i(35),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Label ".concat(this.props.label)},this.props.label)}}]),t}(s.Component)),f=(i(36),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("a",{className:"Card",href:this.props.link},o.a.createElement("h3",{className:"Card-title"},this.props.title),o.a.createElement("p",{className:"Card-description"},this.props.description),o.a.createElement("div",{className:"Card-label-container"},this.props.labels.map(function(e,t){return o.a.createElement(b,{key:t,label:e})})))}}]),t}(s.Component)),g=(i(37),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.findIndex(function(t){return t.type.toLowerCase()===e.props.match.params.name});return-1===t?o.a.createElement(u.a,{to:"/html"}):o.a.createElement("div",{className:"Resources"},o.a.createElement("h2",{className:"Resources-heading"},this.props.match.params.name),o.a.createElement("div",{className:"Resources-card-container"},this.props.data[t].resources.map(function(e,t){return o.a.createElement(f,{key:t,title:e.title,description:e.description,link:e.link,labels:e.labels})}),o.a.createElement("i",{className:"Resources-filler","aria-hidden":"true"}),o.a.createElement("i",{className:"Resources-filler","aria-hidden":"true"}),o.a.createElement("i",{className:"Resources-filler","aria-hidden":"true"}),o.a.createElement("i",{className:"Resources-filler","aria-hidden":"true"}),o.a.createElement("i",{className:"Resources-filler","aria-hidden":"true"})))}}]),t}(s.Component)),k=[{type:"HTML",resources:[{title:"W3C Markup Validator",description:"Check the markup of Web documents",link:"https://validator.w3.org/",labels:["free","open-source"]},{title:"Meta Tags",description:"Preview, edit, and generate meta tags",link:"https://metatags.io/",labels:["free"]},{title:"Favicon Generator",description:"Convert any GIF, PNG, or JPEG to ICO",link:"https://www.favicon-generator.org/",labels:["free"]}]},{type:"CSS",resources:[{title:"W3C CSS Validator",description:"Validate your CSS",link:"https://jigsaw.w3.org/css-validator/",labels:["free","open-source"]},{title:"SpinKit",description:"A collection of loading indicators animated with CSS",link:"https://tobiasahlin.com/spinkit/",labels:["free","open-source"]},{title:"Hamburgers by Jonathan Suh",description:"Tasty CSS-animated hamburgers",link:"https://jonsuh.com/hamburgers/",labels:["free"]},{title:"CSSeffectsSnippets",description:"A collection of CSS effects",link:"https://emilkowalski.github.io/css-effects-snippets/",labels:["free","open-source"]},{title:"Autoprefixer CSS online",description:"Online CSS prefixer",link:"https://autoprefixer.github.io/",labels:["free"]},{title:"CSS Minifier",description:"Online CSS minifier/compressor",link:"https://cssminifier.com/",labels:["free"]}]},{type:"Icons",resources:[{title:"LineIcons",description:"450+ free line icons for designers and developers",link:"https://lineicons.com/",labels:["free"]},{title:"Feather",description:"Simply beautiful open-source icons",link:"https://feathericons.com/",labels:["free","open-source"]},{title:"Ionicons",description:"Beautifully crafted open-source icons",link:"https://ionicons.com/",labels:["free","open-source"]},{title:"IcoMoon",description:"Free 5500+ vector icons",link:"https://icomoon.io/",labels:["free"]},{title:"Xicons",description:"Free (do whatever you want) vector icons",link:"https://www.xicons.co/",labels:["free"]},{title:"IconStore",description:"Free icons by first-class designers",link:"https://iconstore.co/",labels:["free"]},{title:"Simple Icons",description:"Free SVG icons for popular brands",link:"https://simpleicons.org/",labels:["free","open-source"]}]},{type:"Illustrations",resources:[{title:"Undraw",description:"A constantly updated collection of beautiful SVG images",link:"https://undraw.co/illustrations",labels:["free","open-source"]},{title:"manypixels",description:"Royalty-free illustrations",link:"https://gallery.manypixels.co/",labels:["free"]},{title:"IRA Design",description:"Build your own amazing illustrations",link:"https://iradesign.io/",labels:["free"]},{title:"Free Illustrations by Lukasz Adam",description:"Free SVG images",link:"https://lukaszadam.com/illustrations",labels:["free"]}]},{type:"Colors",resources:[{title:"Color Space",description:"Color palettes generator and color gradient tool",link:"https://mycolor.space/",labels:["free"]},{title:"Coolors",description:"Color palettes generator",link:"https://coolors.co/app",labels:["free"]},{title:"Flat UI Colors 2",description:"A total set of 14 color palettes and 280 colors for your designs, projects, presentations and other needs",link:"https://flatuicolors.com/",labels:["free"]},{title:"Material Design Colors",description:"Material design colors",link:"https://www.materialui.co/colors",labels:["free"]},{title:"Web Gradients",description:"Free collection of 180 linear gradients",link:"https://webgradients.com/",labels:["free"]},{title:"uiGradients",description:"Beautiful colored gradients",link:"http://www.uigradients.com/",labels:["free","open-source"]}]},{type:"Images",resources:[{title:"Unsplash",description:"The internet\u2019s source of freely useable images",link:"https://unsplash.com/",labels:["free"]},{title:"Pexels",description:"The best free stock photos & videos shared by talented creators",link:"https://www.pexels.com/",labels:["free"]},{title:"Online Image Compressor",description:"Compress up to 20 images at a time",link:"https://imagecompressor.com/",labels:["free"]},{title:"ImageResizer",description:"Resize and optimize images",link:"https://imageresize.org/",labels:["free"]}]},{type:"JavaScript",resources:[{title:"JavaScript 30",description:"Build 30 things with vanilla JS in 30 days",link:"https://javascript30.com/",labels:["free"]},{title:"Codewars",description:"Solve JavaScript challenges and learn from others",link:"https://www.codewars.com/",labels:["free"]},{title:"ValidateJavaScript",description:"Find and fix JavaScript errors",link:"https://validatejavascript.com/",labels:["free"]}]},{type:"Repositories",resources:[{title:"Developer Roadmap",description:"Roadmap to becoming a web developer in 2019",link:"https://github.com/kamranahmedse/developer-roadmap",labels:["free","open-source"]},{title:"Awesome Design Tools",description:"The best design tools for everything",link:"https://github.com/LisaDziuba/Awesome-Design-Tools",labels:["free","open-source"]},{title:"Front-end Developer Interview Questions",description:"A list of helpful front-end related questions you can use to interview potential candidates, test yourself or completely ignore",link:"https://github.com/h5bp/Front-end-Developer-Interview-Questions",labels:["free","open-source"]},{title:"Front-end Checklist",description:"The perfect Front-End Checklist for modern websites and meticulous developers",link:"https://github.com/thedaviddias/Front-End-Checklist",labels:["free","open-source"]},{title:"Front-end Performance Checklist",description:"The only Front-End Performance Checklist that runs faster than the others",link:"https://github.com/thedaviddias/Front-End-Performance-Checklist",labels:["free","open-source"]},{title:"30 Seconds of CSS",description:"A curated collection of useful CSS snippets you can understand in 30 seconds or less",link:"https://github.com/30-seconds/30-seconds-of-css",labels:["free","open-source"]}]},{type:"Courses",resources:[{title:"Web Accessibility by Google",description:"Get hands-on experience making web applications accessible",link:"https://classroom.udacity.com/courses/ud891",labels:["free"]},{title:"CS50's Introduction to Computer Science",description:"Harvard's introduction to the intellectual enterprises of computer science and the art of programming",link:"https://www.edx.org/course/cs50s-introduction-to-computer-science",labels:["free"]},{title:"CS50's Web Programming with Python and JavaScript",description:"This course dives more deeply into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Flask, Django, and Bootstrap",link:"https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript",labels:["free"]}]},{type:"Readings",resources:[{title:"Front-end Developer Handbook 2019",description:"A guide that everyone can use to learn about the practice of front-end development",link:"https://frontendmasters.com/books/front-end-handbook/2019/",labels:["free"]},{title:"HackerRank 2019 Developer Skills Report",description:"Insights based on 71,281 developers",link:"https://research.hackerrank.com/developer-skills/2019",labels:["free"]},{title:"HTML & CSS",description:"A nicer way to learn about HTML & CSS",link:"http://www.htmlandcssbook.com/",labels:["premium"]},{title:"Refactoring UI",description:"Make your ideas look awesome, without relying on a designer",link:"https://refactoringui.com/book/",labels:["premium"]},{title:"You Don't Know JS",description:"A book series on JavaScript",link:"https://github.com/getify/You-Dont-Know-JS",labels:["free","open-source"]},{title:"Eloquent JavaScript",description:"A modern introduction to programming",link:"https://eloquentjavascript.net/",labels:["free"]},{title:"Learning JavaScript Design Patterns",description:"A JavaScript and jQuery's developer guide",link:"https://addyosmani.com/resources/essentialjsdesignpatterns/book/",labels:["free"]},{title:"Web Content Accessibility Guidelines (WCAG) 2.1",description:"Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more accessible",link:"https://www.w3.org/TR/WCAG21/",labels:["free"]}]},{type:"General",resources:[{title:"Trello",description:"Easy, free, flexible, and visual way to manage your projects and organize anything",link:"https://trello.com/",labels:["free"]},{title:"Google Analytics",description:"Web analytics service offered by Google",link:"https://analytics.google.com/analytics/web/",labels:["free"]},{title:"Adobe XD",description:"Beginner-friendly prototyping software from Adobe",link:"https://www.adobe.com/products/xd.html",labels:["free"]},{title:"Wireframe.cc",description:"Minimal wireframing tool",link:"https://wireframe.cc/",labels:["free"]},{title:"Blobmaker",description:"Online SVG blob maker",link:"https://www.blobmaker.app/",labels:["free"]},{title:"Sizzy",description:"Browser made for responsive design",link:"https://sizzy.co/",labels:["premium"]},{title:"Screenfly",description:"Test your website at different screen resolutions",link:"http://quirktools.com/screenfly/",labels:["free"]},{title:"web.dev",description:"See how well your website performs; uses Lighthouse",link:"https://web.dev/",labels:["free"]},{title:"GTmetrix",description:"Tool that analyzes your page's speed performance",link:"https://gtmetrix.com/",labels:["free"]},{title:"Can I Use",description:"Support tables for HTML, CSS, etc",link:"https://caniuse.com/",labels:["free","open-source"]},{title:"Carbon",description:"Create and share beautiful images of your source code",link:"https://carbon.now.sh/",labels:["free"]},{title:"Wappalyzer",description:"Identify technologies on websites",link:"https://www.wappalyzer.com/",labels:["free"]}]},{type:"Deployment",resources:[{title:"GitHub Pages",description:"Free web hosting service by GitHub",link:"https://pages.github.com/",labels:["free"]},{title:"Netlify",description:"Deploy your site in 30 seconds",link:"https://www.netlify.com/",labels:["free"]},{title:"Surge",description:"Simple, single-command web publishing",link:"https://surge.sh/",labels:["free"]},{title:"Google Domains",description:"Find a domain, create a site, and get custom email",link:"https://domains.google/",labels:["premium"]},{title:"namecheap",description:"Cheap domain names",link:"https://www.namecheap.com/",labels:["premium"]}]},{type:"Accessibility",resources:[{title:"NV Access",description:"Screen reader for Microsoft Windows",link:"https://www.nvaccess.org/",labels:["free"]},{title:"ChromeVox Chrome Extension",description:"Screen reader by Google",link:"https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en",labels:["free"]},{title:"axe Chrome Extension",description:"Accessibility testing in Chrome Developer Tools",link:"https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd",labels:["free"]}]}],w=i(23),y=i.n(w),v=(i(38),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{className:"App-logo",alt:"site logo",src:y.a}),o.a.createElement("h1",{className:"App-heading"},"Front-end Resources"),o.a.createElement("p",{className:"App-subheading"},"A curated collection of useful tools and websites for front-end web developers."),o.a.createElement("a",{className:"github-button",href:"https://github.com/vlipatdev/frontend-resources","data-icon":"octicon-star","data-size":"small","data-show-count":"true","aria-label":"Star vlipatdev/frontend-resources on GitHub"},"Star"),o.a.createElement(h,{data:this.props.data})),o.a.createElement(u.b,{exact:!0,path:"/:name",render:function(t){return o.a.createElement(g,Object.assign({},t,{data:e.props.data}))}}),o.a.createElement("footer",{className:"App-footer"},o.a.createElement("p",null,"by ",o.a.createElement("a",{href:"https://github.com/vlipatdev"},"Val Lipat")," with"," ",o.a.createElement("span",{role:"img","aria-label":"red heart emoji"},"\u2764\ufe0f")," ")))}}]),t}(s.Component));v.defaultProps={data:k};var S=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(a.a,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.d554fc04.chunk.js.map