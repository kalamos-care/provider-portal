(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{JB2W:function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("wx14"),i=n("Ff2n"),c=n("iuhU"),l=n("NqtD"),u=n("H2TA"),s=n("i8i4"),d=!0,p=!1,f=null,m={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function b(e){e.metaKey||e.altKey||e.ctrlKey||(d=!0)}function h(){d=!1}function v(){"hidden"===this.visibilityState&&p&&(d=!0)}function y(e){var t,n,o,a=e.target;try{return a.matches(":focus-visible")}catch(r){}return d||(n=(t=a).type,!("INPUT"!==(o=t.tagName)||!m[n]||t.readOnly)||"TEXTAREA"===o&&!t.readOnly||!!t.isContentEditable)}function w(){p=!0,window.clearTimeout(f),f=window.setTimeout((function(){p=!1}),100)}function g(){return{isFocusVisible:y,onBlurVisible:w,ref:o.useCallback((function(e){var t,n=s.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",b,!0),t.addEventListener("mousedown",h,!0),t.addEventListener("pointerdown",h,!0),t.addEventListener("touchstart",h,!0),t.addEventListener("visibilitychange",v,!0))}),[])}}function E(e,t){"function"==typeof e?e(t):e&&(e.current=t)}var B=n("ofer"),T=o.forwardRef((function(e,t){var n,a,u=e.classes,s=e.className,d=e.color,p=void 0===d?"primary":d,f=e.component,m=void 0===f?"a":f,b=e.onBlur,h=e.onFocus,v=e.TypographyClasses,y=e.underline,w=void 0===y?"hover":y,T=e.variant,k=void 0===T?"inherit":T,x=Object(i.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),O=g(),N=O.isFocusVisible,j=O.onBlurVisible,D=O.ref,F=o.useState(!1),V=F[0],A=F[1],C=(n=t,a=D,o.useMemo((function(){return null==n&&null==a?null:function(e){E(n,e),E(a,e)}}),[n,a]));return o.createElement(B.a,Object(r.a)({className:Object(c.a)(u.root,u["underline".concat(Object(l.a)(w))],s,V&&u.focusVisible,"button"===m&&u.button),classes:v,color:p,component:m,onBlur:function(e){V&&(j(),A(!1)),b&&b(e)},onFocus:function(e){N(e)&&A(!0),h&&h(e)},ref:C,variant:k},x))})),k=Object(u.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(T),x=n("Wbzz"),O=a.a.forwardRef((function(e,t){return a.a.createElement(k,Object.assign({component:x.a,ref:t},e))}));t.a=O},RXBc:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("ofer"),i=n("JB2W"),c=n("Zttt");t.default=function(){return a.a.createElement(c.a,null,a.a.createElement("p",null,"This is a simple example of creating dynamic apps with Gatsby that require user authentication. It uses concepts from the"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/"},"client-only routes section")," ","of the “Building Apps with Gatsby” documentation."),a.a.createElement("p",null,"For the full experience, go to"," ",a.a.createElement(i.a,{to:"/app/profile"},"your profile"),"."),a.a.createElement(r.a,{variant:"h4",component:"h1",gutterBottom:!0},"Gatsby v4-beta example"),a.a.createElement(i.a,{to:"/about",color:"secondary"},"Go to the about page"),a.a.createElement(i.a,{to:"/app",color:"secondary"},"Go to the app page"))}}}]);
//# sourceMappingURL=component---src-pages-index-js-bad28176ff748a7f8b36.js.map