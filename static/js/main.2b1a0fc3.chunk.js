(this["webpackJsonpsavvy-shopper"]=this["webpackJsonpsavvy-shopper"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),o=a.n(r);a(9),a(10);var c=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Hello from App.js"))};a(11);var i=function(){return l.a.createElement("div",{className:"calc"},l.a.createElement("h1",null,"Hello from calc.jsx"))},u=a(3);a(12);!function(){var e=localStorage.getItem("userName");if(null===e)localStorage.setItem("userName",prompt("Enter Your Name:"))}();var s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var f=function(){var e,t,a=Object(n.useState)(new Date),r=Object(u.a)(a,2),o=r[0],c=r[1],i=o.getHours(),f=o.toLocaleTimeString(),p=o.getDay(),v=o.getMonth(),g=o.getDate(),E=s[p],h=m[v];return i>=5&&i<11?(t="Good Morning, ",e="greeting morning"):i>=11&&i<17?(t="Good Afternoon, ",e="greeting afternoon"):i>=17&&i<24?(t="Good Evening, ",e="greeting night"):(t="Good Morning, ",e="greeting night"),Object(n.useEffect)((function(){setInterval((function(){return c(new Date)}),1e3)})),l.a.createElement("div",{className:e},l.a.createElement("div",{className:"date-time"},l.a.createElement("h2",null,f),l.a.createElement("h2",null,E+", "+h+" "+g)),l.a.createElement("h1",null,t+localStorage.getItem("userName")+"!"))};a(13);var p=function(){return l.a.createElement("div",{className:"nav"},l.a.createElement("i",{onClick:function(e){e.preventDefault(),alert("Recipe Search")},className:"fas fa-utensils fa-2x"}),l.a.createElement("i",{onClick:function(e){e.preventDefault(),alert("Calculator App")},className:"fas fa-calculator fa-2x"}),l.a.createElement("i",{onClick:function(e){e.preventDefault(),alert("Todo List")},className:"fas fa-list fa-2x"}),l.a.createElement("i",{onClick:function(e){e.preventDefault(),alert("Shopping List")},className:"fas fa-shopping-cart fa-2x"}),l.a.createElement("i",{onClick:function(e){e.preventDefault(),alert("Home Page")},className:"fas fa-home fa-4x"}))};a(14);var v=function(){return l.a.createElement("div",{className:"recipe"},l.a.createElement("h1",null,"Hello from recipe.jsx"))};a(15);var g=function(){return l.a.createElement("div",{className:"shopping"},l.a.createElement("h1",null,"Hello from shopping.jsx"))};a(16);var E=function(){return l.a.createElement("div",{className:"todo"},l.a.createElement("h1",null,"Hello from todo.jsx"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null),l.a.createElement(i,null),l.a.createElement(c,null),l.a.createElement(v,null),l.a.createElement(g,null),l.a.createElement(E,null),l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.2b1a0fc3.chunk.js.map