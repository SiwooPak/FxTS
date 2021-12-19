"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6881],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return y}});var r=t(7294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),y=c,d=s["".concat(i,".").concat(y)]||s[y]||f[y]||o;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function y(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,a=new Array(o);a[0]=s;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:c,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8138:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=t(7462),c=t(3366),o=(t(7294),t(3905)),a=["components"],l={id:"cycle"},i=void 0,u={unversionedId:"cycle",id:"cycle",isDocsHomePage:!1,title:"cycle",description:"cycle() function",source:"@site/docs/cycle.md",sourceDirName:".",slug:"/cycle",permalink:"/docs/cycle",tags:[],version:"current",frontMatter:{id:"cycle"}},p=[{value:"cycle() function",id:"cycle-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],f={toc:p};function s(e){var n=e.components,t=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"cycle-function"},"cycle() function"),(0,o.kt)("p",null,"Returns Iterable/AsyncIterable that infinitely repeats the given Iterable/AsyncIterable"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function cycle<A extends Iterable<unknown> | AsyncIterable<unknown>>(iter: A): ReturnIterableIteratorType<A>;\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const iter = cycle("abc")\niter.next(); // {value:"a", done: false}\niter.next(); // {value:"b", done: false}\niter.next(); // {value:"c", done: false}\niter.next(); // {value:"a", done: false}\niter.next(); // {value:"b", done: false}\n\n// with pipe\npipe(\n  cycle([1,2,3,4]),\n  take(5),\n  toArray,\n); // [1,2,3,4,1]\n')))}s.isMDXComponent=!0}}]);