(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3XHS":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var o=t("q1tI"),r=t.n(o),i=t("ofer"),a=t("JB2W"),u=t("Zttt");function c(){return r.a.createElement(u.a,null,r.a.createElement(i.a,{variant:"h4",component:"h1",gutterBottom:!0},"Gatsby v4-beta example"),r.a.createElement(a.a,{to:"/"},"Go to the main page"))}},JB2W:function(e,n,t){"use strict";var o=t("q1tI"),r=t.n(o),i=t("wx14"),a=t("Ff2n"),u=t("iuhU"),c=t("NqtD"),l=t("H2TA"),s=t("i8i4"),d=!0,f=!1,m=null,b={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function p(e){e.metaKey||e.altKey||e.ctrlKey||(d=!0)}function v(){d=!1}function w(){"hidden"===this.visibilityState&&f&&(d=!0)}function h(e){var n,t,o,r=e.target;try{return r.matches(":focus-visible")}catch(i){}return d||(t=(n=r).type,!("INPUT"!==(o=n.tagName)||!b[t]||n.readOnly)||"TEXTAREA"===o&&!n.readOnly||!!n.isContentEditable)}function y(){f=!0,window.clearTimeout(m),m=window.setTimeout((function(){f=!1}),100)}function g(){return{isFocusVisible:h,onBlurVisible:y,ref:o.useCallback((function(e){var n,t=s.findDOMNode(e);null!=t&&((n=t.ownerDocument).addEventListener("keydown",p,!0),n.addEventListener("mousedown",v,!0),n.addEventListener("pointerdown",v,!0),n.addEventListener("touchstart",v,!0),n.addEventListener("visibilitychange",w,!0))}),[])}}function E(e,n){"function"==typeof e?e(n):e&&(e.current=n)}var k=t("ofer"),O=o.forwardRef((function(e,n){var t,r,l=e.classes,s=e.className,d=e.color,f=void 0===d?"primary":d,m=e.component,b=void 0===m?"a":m,p=e.onBlur,v=e.onFocus,w=e.TypographyClasses,h=e.underline,y=void 0===h?"hover":h,O=e.variant,T=void 0===O?"inherit":O,B=Object(a.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),N=g(),x=N.isFocusVisible,D=N.onBlurVisible,V=N.ref,j=o.useState(!1),C=j[0],F=j[1],L=(t=n,r=V,o.useMemo((function(){return null==t&&null==r?null:function(e){E(t,e),E(r,e)}}),[t,r]));return o.createElement(k.a,Object(i.a)({className:Object(u.a)(l.root,l["underline".concat(Object(c.a)(y))],s,C&&l.focusVisible,"button"===b&&l.button),classes:w,color:f,component:b,onBlur:function(e){C&&(D(),F(!1)),p&&p(e)},onFocus:function(e){x(e)&&F(!0),v&&v(e)},ref:L,variant:T},B))})),T=Object(l.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(O),B=t("Wbzz"),N=r.a.forwardRef((function(e,n){return r.a.createElement(T,Object.assign({component:B.a,ref:n},e))}));n.a=N}}]);
//# sourceMappingURL=component---src-pages-about-js-24b9c39bd7cc5c20a188.js.map