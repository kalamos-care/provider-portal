(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CqJm:function(e,t,a){},GsjE:function(e,t,a){},JD6U:function(e,t,a){e.exports={status:"status-module--status--f1PYx",status__text:"status-module--status__text--LFoJQ"}},"Pt/V":function(e,t,a){e.exports={form:"login-module--form--2Emma",form__label:"login-module--form__label--1JUib",form__input:"login-module--form__input--1L_Sj",form__button:"login-module--form__button--3fy5Z"}},qWhP:function(e,t,a){},y9VM:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("YwZP"),o=a("Zttt");function s(e){if(null==e)throw new TypeError("Cannot destructure undefined")}a("CqJm");var u="undefined"!=typeof window,i=function(){return window.localStorage.gatsbyUser?JSON.parse(window.localStorage.gatsbyUser):{}},c=function(e){return window.localStorage.gatsbyUser=JSON.stringify(e)},m=function(){return!!u&&!!i().email},p=function(){return u&&i()},f=function(){return s(p()),l.a.createElement("section",null,l.a.createElement("p",null,"Insert practice stats here"),l.a.createElement("h1",null,"10 new patients this week!"))},d=(a("qWhP"),function(){var e=p(),t=e.name,a=e.legalName,n=e.email;return l.a.createElement("section",null,l.a.createElement("p",null,"This is a client-only route. You can get additional information about a user on the client from this page."),l.a.createElement("ul",null,l.a.createElement("li",null,"Preferred name: ",t),l.a.createElement("li",null,"Legal name: ",a),l.a.createElement("li",null,"Email address: ",n)))}),g=(a("GsjE"),function(){return s(p()),l.a.createElement("section",null,l.a.createElement("p",null,"This would move to the patient app"),l.a.createElement("h1",null,"Insert Registration Form"))}),h=a("dI71"),E=a("Wbzz"),b=a("Pt/V"),_=a.n(b),w=function(e){var t=e.handleSubmit,a=e.handleUpdate;return l.a.createElement("form",{className:_.a.form,method:"post",onSubmit:function(e){t(e),Object(E.c)("/app/profile")}},l.a.createElement("p",{className:_.a.form__instructions},"For this demo, please log in with the username ",l.a.createElement("code",null,"gatsby")," and the password ",l.a.createElement("code",null,"demo"),"."),l.a.createElement("label",{className:_.a.form__label},"Username",l.a.createElement("input",{className:_.a.form__input,type:"text",name:"username",onChange:a})),l.a.createElement("label",{className:_.a.form__label},"Password",l.a.createElement("input",{className:_.a.form__input,type:"password",name:"password",onChange:a})),l.a.createElement("input",{className:_.a.form__button,type:"submit",value:"Log In"}))},y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={username:"",password:""},t}Object(h.a)(t,e);var a=t.prototype;return a.handleUpdate=function(e){var t;this.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){var t,a,n;e.preventDefault(),t=this.state,a=t.username,n=t.password,u&&"gatsby"===a&&"demo"===n&&(console.log("Credentials match! Setting the active user."),c({name:"Jay",legalName:"Jay Gatsby",email:"jay@gatsby.org"}))},a.render=function(){var e=this;return m()&&Object(E.c)("/app/dashboard"),l.a.createElement(w,{handleUpdate:function(t){return e.handleUpdate(t)},handleSubmit:function(t){return e.handleSubmit(t)}})},t}(l.a.Component),v=a("zLVn"),N=function(e){var t=e.component,a=e.location,n=Object(v.a)(e,["component","location"]);return m()||"/app/login"===a.pathname?l.a.createElement(t,n):(Object(E.c)("/app/login"),null)},S=a("JD6U"),J=a.n(S),U=function(){var e;if(m()){var t=p(),a=t.name,n=t.email;e=l.a.createElement("p",{className:J.a.status__text},"Logged in as ",a," (",n,")!"," ",l.a.createElement("a",{href:"/",onClick:function(e){var t;e.preventDefault(),t=function(){return Object(r.navigate)("/app/login")},u&&(console.log("Ensuring the `gatsbyUser` property exists."),c({}),t())}},"log out"))}else e=l.a.createElement("p",{className:J.a.status__text},"To get the full app experience, you’ll need to"," ",l.a.createElement(r.Link,{to:"/app/login"},"log in"),".");return l.a.createElement("div",{className:J.a.status},e)};t.default=function(){return l.a.createElement(o.a,null,l.a.createElement(U,null),l.a.createElement(r.Router,null,l.a.createElement(N,{path:"/app/account-settings",component:d}),l.a.createElement(N,{path:"/app/dashboard",component:f}),l.a.createElement(N,{path:"/app/register-kit",component:g}),l.a.createElement(y,{path:"/app/login"})))}}}]);
//# sourceMappingURL=component---src-pages-app-js-274776c6729ee99c7c7f.js.map