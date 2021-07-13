(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{16:function(e,t,n){},38:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(30),r=n.n(s),c=(n(38),n(9)),o=n(10),d=n(12),l=n(11),h=n(18),u=n.n(h),j=n(31),b=n(32),m=n.n(b),p=(n(58),n(59),n(2)),x=n(0),O=function(){var e=Object(p.e)();return Object(x.jsx)("div",{className:"header",children:Object(x.jsxs)("ul",{className:"nav-items",children:[Object(x.jsx)("li",{onClick:function(){return e.push("/")},children:"Home"}),Object(x.jsx)("li",{onClick:function(){return e.push("/about")},children:"About"}),Object(x.jsx)("li",{onClick:function(){return e.push("/service")},children:"Service"}),Object(x.jsx)("li",{onClick:function(){return e.push("/contact")},children:"Contact"})]})})},g=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).onInputChange=function(e){i.setState({city:e.target.value})},i.state={city:""},i}return Object(o.a)(n,[{key:"getCityHandler",value:function(e){e.preventDefault(),this.props.getWeatherData(this.state.city),this.props.hidePreviousData()}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{}),Object(x.jsx)("div",{className:"main-heading",children:"Let's know about today's Weather"}),Object(x.jsx)("div",{className:"body-container",children:Object(x.jsxs)("form",{onSubmit:this.getCityHandler.bind(this),children:[Object(x.jsx)("input",{type:"text",onChange:this.onInputChange,placeholder:"Enter City Name..."}),Object(x.jsx)("button",{type:"submit",children:"Search"})]})})]})}}]),n}(a.a.Component),v=(n(66),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).normalTime=function(e){var t=new Date(1e3*e);return("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)},i.fetchData=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({isLoading:!0}),n="http://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=b91ad9c0d5a96d0d6953ef6f594c3e9e",e.prev=2,e.next=5,m.a.get(n);case 5:a=e.sent,i.setState({list:a.data,isLoading:!1,isLoaded:!0}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),i.setState({isLoading:!1,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),i.state={isLoading:!1,isLoaded:!1,error:null,list:[]},i.hideData=function(){i.setState({isLoaded:!1,error:null})},i}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.list,i=t.isLoading,a=t.error,s=t.isLoaded,r=[n];return Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{getWeatherData:this.fetchData,hidePreviousData:this.hideData}),a?Object(x.jsx)("div",{className:"status-box",children:Object(x.jsx)("p",{className:"error",children:"City Name not found"})}):null,i?Object(x.jsx)("div",{className:"status-box",children:Object(x.jsx)("p",{children:"Searching City name..."})}):null,s?Object(x.jsx)("div",{className:"weather-container",children:r.map((function(t){var n=new Date;return Object(x.jsxs)("div",{className:"weather-info",children:[Object(x.jsxs)("div",{className:"left-container",children:[Object(x.jsxs)("div",{children:[t.name,", ",t.sys.country,", ",n.toDateString()," "]}),Object(x.jsxs)("div",{className:"temp",children:[parseFloat(t.main.temp-273.15).toFixed(1),"\xb0C ",Object(x.jsx)("img",{src:"http://openweathermap.org/img/wn/"+t.weather[0].icon+"@2x.png",alt:"weather icon"})]})]}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("div",{className:"divider",children:[Object(x.jsxs)("li",{children:["Weather: ",Object(x.jsx)("span",{children:t.weather[0].main})]}),Object(x.jsxs)("li",{children:["Wind: ",Object(x.jsxs)("span",{children:[parseFloat(3.6*t.wind.speed).toFixed(1)," km/hr"]})]})]}),Object(x.jsxs)("div",{className:"divider",children:[Object(x.jsxs)("li",{children:["Humidity: ",Object(x.jsxs)("span",{children:[t.main.humidity,"%"]})]}),Object(x.jsxs)("li",{children:["Pressure: ",Object(x.jsxs)("span",{children:[t.main.pressure," Pa"]})]})]}),Object(x.jsxs)("div",{className:"divider",children:[Object(x.jsxs)("li",{children:["Max Temp: ",Object(x.jsxs)("span",{children:[parseInt(t.main.temp_max-273.15),"\xb0C"]})]}),Object(x.jsxs)("li",{children:["Min Temp: ",Object(x.jsxs)("span",{children:[parseInt(t.main.temp_min-273.15),"\xb0C"]})]})]}),Object(x.jsxs)("div",{className:"divider",children:[Object(x.jsxs)("li",{children:["Sunrise: ",Object(x.jsx)("span",{children:e.normalTime(t.sys.sunrise)})]}),Object(x.jsxs)("li",{children:["Sunset: ",Object(x.jsx)("span",{children:e.normalTime(t.sys.sunset)})]})]})]})]},t.id)}))}):null]})}}]),n}(a.a.Component)),f=(n(16),function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{}),Object(x.jsxs)("div",{className:"data-container",children:[Object(x.jsx)("div",{className:"main-heading",children:"About Us"}),Object(x.jsx)("h2",{children:"Building Integrated Customer Experiences in the Telco Space"}),Object(x.jsx)("p",{children:"With an array of service offerings for Communication Service Providers (CSPs), Telecom Equipment Manufacturers (TEMs) and Independent Software Vendors (ISVs), Tech Mahindra is a chosen transformation partner for several leading wireline, wireless and broadband operators in Europe, Asia-Pacific and North America. Our offerings are based on 3 Mega Trends."}),Object(x.jsx)("h3",{children:"We discover the value additions we can give to our customers and help them leverage technology to take them to the next level."}),Object(x.jsx)("h2",{children:"How we work?"}),Object(x.jsx)("p",{children:"We protect our client's time, information, reputation, money and relationships. We endeavor to make our collaborations, products & services resilient and safe. We learn rapidly by experimenting frequently and deliver value continuously."})]})]})}),y=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{}),Object(x.jsxs)("div",{className:"data-container",children:[Object(x.jsx)("div",{className:"main-heading",children:"Our Services"}),Object(x.jsx)("h2",{children:"TRANSFORMING EDUCATION: REIMAGINING LEARNING FOR FUTURE-READY TALENT"}),Object(x.jsx)("p",{children:"With the global economy increasingly centered on knowledge and skill, educational institutions are moving from traditional teaching methods to custom methodologies that promote anytime, personalized, and adaptive learning. Disruption in education with the adoption of online learning platforms and the move to cloud-based solutions have brought about radical changes in education. Equity in education and accessibility to learning are key. The COVID-19 pandemic has served as one of the biggest disruptors as well as accelerators in the education sector by making online learning feasible, easily accessible, attractive, and effective. Education has expanded out of physical spaces to evolve into a blended classroom marked by anywhere, anytime learning. Blended, technology-supported education that is \u2018phygital\u2019 in nature and aimed at improving personalization, engagement, and ultimately outcomes, will not only enrich students, but also teachers and institutions \u2014 a win-win for individuals, government, and society."}),Object(x.jsx)("h2",{children:"Enabling Educators To Make A Positive Impact On the Life Of Learners Using Digital Content"}),Object(x.jsx)("p",{children:"Market disruptions in the education sector brought on by the pandemic and in the form of disruptive technologies by leading EdTech companies has put an increased emphasis on personalized, anytime, anywhere digital learning. The future lies in the innovative use of smart technologies to enable educators to provide an enhanced learning experience, vastly improve student outcomes, and make education more inclusive and affordable. TCS is in a unique position to lead the education transformation at institutions of learning by leveraging physical assets and digital technologies. This includes end-to-end solutions to streamline a wide gamut of functions\u2014from creating new business models such as a digital university, to academic advising, campus management, digital content creation, and co-branded courses with our industry partners\u2014designed to increase a learner\u2019s employability in the world at large."}),Object(x.jsx)("h3",{children:"Current trends"}),Object(x.jsx)("p",{children:"For some time now, educational institutions have been facing challenges in enrolment and funding, both of which were further hit on account of COVID-19. According to reports, a significant drop in student enrolments is expected in the short term. This trend has been visible for some time. As higher education has continually become more expensive and unattainable, students have found online courses to be an easier way to secure degrees and, consequently, jobs quickly."})]})]})},w=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{}),Object(x.jsxs)("div",{className:"data-container",children:[Object(x.jsx)("div",{className:"main-heading",children:"Contact Us"}),Object(x.jsx)("div",{className:"app",children:Object(x.jsxs)("form",{id:"contact-form",method:"POST",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"name",children:"Name"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"text",className:"form-control"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"email",className:"form-control","aria-describedby":"emailHelp"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"message",children:"Message"}),Object(x.jsx)("br",{}),Object(x.jsx)("textarea",{className:"form-controls",rows:"8"})]}),Object(x.jsx)("button",{type:"submit",className:"btn",children:"Submit"})]})})]})]})},N=n(17),C=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(N.a,{children:[Object(x.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(x.jsx)(v,{})}}),Object(x.jsx)(p.a,{exact:!0,path:"/about",render:function(){return Object(x.jsx)(f,{})}}),Object(x.jsx)(p.a,{exact:!0,path:"/service",render:function(){return Object(x.jsx)(y,{})}}),Object(x.jsx)(p.a,{exact:!0,path:"/contact",render:function(){return Object(x.jsx)(w,{})}})]})}}]),n}(i.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),k()}},[[67,1,2]]]);
//# sourceMappingURL=main.b9b19e96.chunk.js.map