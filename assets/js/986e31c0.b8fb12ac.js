(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1398],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),m=u(r),f=a,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(y,i(i({ref:e},s),{},{components:r})):n.createElement(y,i({ref:e},s))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3961:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={},l="Factory Pattern",u={unversionedId:"Programming/Design Pattern/Patterns/Factory/Overview",id:"Programming/Design Pattern/Patterns/Factory/Overview",isDocsHomePage:!1,title:"Factory Pattern",description:"Motivation",source:"@site/docs/Programming/Design Pattern/Patterns/Factory/Overview.md",sourceDirName:"Programming/Design Pattern/Patterns/Factory",slug:"/Programming/Design Pattern/Patterns/Factory/Overview",permalink:"/docs/Programming/Design Pattern/Patterns/Factory/Overview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go Factory Pattern",permalink:"/docs/Programming/Design Pattern/Patterns/Factory/Go"},next:{title:"Go Prototype Pattern",permalink:"/docs/Programming/Design Pattern/Patterns/Prototype/Go"}},s=[{value:"Motivation",id:"motivation",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Factory Patterns",id:"factory-patterns",children:[{value:"Factory Function",id:"factory-function",children:[]},{value:"Factory Generator",id:"factory-generator",children:[]},{value:"Prototype Factory",id:"prototype-factory",children:[]}]},{value:"References",id:"references",children:[]}],p={toc:s};function m(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"factory-pattern"},"Factory Pattern"),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Object creation sometimes become too convoluted"),(0,o.kt)("li",{parentName:"ul"},"Struct has too many fields, need to initialize all correctly"),(0,o.kt)("li",{parentName:"ul"},"Wholesale object creation (non-piecewise, unlike Builder) can outsourced to a separate function ")),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Factory: A component responsible solely for the wholesale creation of objects")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A factory function (constructor) is a helper function for making structs"),(0,o.kt)("li",{parentName:"ul"},"A factory is any entity that take care of object creation"),(0,o.kt)("li",{parentName:"ul"},"It can be a function or dedicated struct")),(0,o.kt)("h2",{id:"factory-patterns"},"Factory Patterns"),(0,o.kt)("h3",{id:"factory-function"},"Factory Function"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Factory function delegate the creation of an object"),(0,o.kt)("li",{parentName:"ul"},"It may take only part of the arguments and set others as default values"),(0,o.kt)("li",{parentName:"ul"},"You can add some validation before actually create an object"),(0,o.kt)("li",{parentName:"ul"},"Some factory will return an interface rather than the concrete type")),(0,o.kt)("h3",{id:"factory-generator"},"Factory Generator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Functional Approach",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Return a function rather than a struct"),(0,o.kt)("li",{parentName:"ul"},"This is more recommended and easier to implement"),(0,o.kt)("li",{parentName:"ul"},"It uses closure in functional programming paradigm to achieve this"))),(0,o.kt)("li",{parentName:"ul"},"Structure Approach",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Return a type that is a struct"),(0,o.kt)("li",{parentName:"ul"},"Usually you will have to incorporate some helper interface for later use")))),(0,o.kt)("h3",{id:"prototype-factory"},"Prototype Factory"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Another use case for factory pattern is to construct pre-defined objects"),(0,o.kt)("li",{parentName:"ul"},"Given an argument and the factory will construct an object for you automatically")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/design-patterns-go"},"https://www.udemy.com/course/design-patterns-go"))))}m.isMDXComponent=!0}}]);