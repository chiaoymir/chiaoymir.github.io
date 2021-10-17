(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1958],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),p=i,h=m["".concat(u,".").concat(p)]||m[p]||d[p]||a;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8973:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),l=["components"],o={},u="Builder Pattern Overview",s={unversionedId:"Programming/Design Pattern/Patterns/Builder/Overview",id:"Programming/Design Pattern/Patterns/Builder/Overview",isDocsHomePage:!1,title:"Builder Pattern Overview",description:"Builder is one of design patterns that is useful in creating objects.",source:"@site/docs/Programming/Design Pattern/Patterns/Builder/Overview.md",sourceDirName:"Programming/Design Pattern/Patterns/Builder",slug:"/Programming/Design Pattern/Patterns/Builder/Overview",permalink:"/docs/Programming/Design Pattern/Patterns/Builder/Overview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java Builder Patterns",permalink:"/docs/Programming/Design Pattern/Patterns/Builder/Java"},next:{title:"Go Factory Pattern",permalink:"/docs/Programming/Design Pattern/Patterns/Factory/Go"}},c=[{value:"Motivation",id:"motivation",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Patterns",id:"patterns",children:[]},{value:"Builders",id:"builders",children:[{value:"String Builder",id:"string-builder",children:[]},{value:"Wrapper Builder",id:"wrapper-builder",children:[]},{value:"Multifacet Builder",id:"multifacet-builder",children:[]},{value:"Functional Builder",id:"functional-builder",children:[]},{value:"Force to use builder",id:"force-to-use-builder",children:[]},{value:"Code Reuse",id:"code-reuse",children:[]}]},{value:"References",id:"references",children:[]}],d={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"builder-pattern-overview"},"Builder Pattern Overview"),(0,a.kt)("p",null,"Builder is one of design patterns that is useful in creating objects."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Having an object with 10 constructor arguments is not productive (easy to make mistake and hard to make modification)"),(0,a.kt)("li",{parentName:"ul"},"Builder provides an API for constructing an object step-by-step"),(0,a.kt)("li",{parentName:"ul"},"Another reason to user builder pattern is to reuse the construction process that you'd already created.")),(0,a.kt)("h2",{id:"goals"},"Goals"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When piecewise object construction is complicated, builder provides an API to do it succintly.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It creates an object using piecewise fashion"),(0,a.kt)("li",{parentName:"ul"},"It reduces the number of arguments (arity) passed in a single function"),(0,a.kt)("li",{parentName:"ul"},"It provides more flexibility when creating an object")),(0,a.kt)("h2",{id:"patterns"},"Patterns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fluent Interface: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Mostly, builder will implement a chain-like pattern"),(0,a.kt)("li",{parentName:"ul"},"It will return the builder itself internally so each return argument is itselt and you can call all builder functions. "),(0,a.kt)("li",{parentName:"ul"},"In some languages, use ",(0,a.kt)("inlineCode",{parentName:"li"},"return this"),". In Python, ",(0,a.kt)("inlineCode",{parentName:"li"},"return self"),". In go, use value receiver ",(0,a.kt)("inlineCode",{parentName:"li"},"return b"),", where b is ",(0,a.kt)("inlineCode",{parentName:"li"},"func (*b)"),"."),(0,a.kt)("li",{parentName:"ul"},"Example: ",(0,a.kt)("inlineCode",{parentName:"li"},'Builder().AddName("name").AddAddress("myaddress")')))),(0,a.kt)("li",{parentName:"ul"},"Usually you will make a builder first, then use this builder to construct the target.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The builder has the target as one of its field, builder call the target's setter directly to set target's fields."),(0,a.kt)("li",{parentName:"ul"},"Some builder class will be a inner class of the target class itself, so it can set the attributes directly without exposing the setters."))),(0,a.kt)("li",{parentName:"ul"},"Lastly, you will call ",(0,a.kt)("inlineCode",{parentName:"li"},"build()")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"construct()")," method as a signal of the end of construction and to return a target with the attributes you given."),(0,a.kt)("li",{parentName:"ul"},"You can use the same builder over and over to simplify the construction process without the need to call constructor.")),(0,a.kt)("h2",{id:"builders"},"Builders"),(0,a.kt)("p",null,"These are some builders example, but not all language can implement every type of builder. You can find implementation in different files in this folder."),(0,a.kt)("h3",{id:"string-builder"},"String Builder"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"String builder is a built-in component for many languages like Java, Go, ... "),(0,a.kt)("li",{parentName:"ul"},"You can import it from the standard library"),(0,a.kt)("li",{parentName:"ul"},"It helps you build a string conveniently, like concatenation, reverse, ..."),(0,a.kt)("li",{parentName:"ul"},"It also accept different types of arguments like byte, char, string, byte array, char array, ..."),(0,a.kt)("li",{parentName:"ul"},"It use a byte buffer internally to help you achieve some complex operations"),(0,a.kt)("li",{parentName:"ul"},"Although it's very powerful, it's still too raw for further use case. For example, you want to add some indentation to form a valid yaml. You'd better find another tool or write your own one instead of this basic string builder.")),(0,a.kt)("h3",{id:"wrapper-builder"},"Wrapper Builder"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An example in this category is html builder"),(0,a.kt)("li",{parentName:"ul"},"This builder is a wrapper using string builder behind the scene"),(0,a.kt)("li",{parentName:"ul"},"It construct html document more easily than simply using string builder"),(0,a.kt)("li",{parentName:"ul"},"You can see Java and Go example")),(0,a.kt)("h3",{id:"multifacet-builder"},"Multifacet Builder"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The pattern is also called aggregated builder"),(0,a.kt)("li",{parentName:"ul"},"It utilizes several sub-builders to construct the object"),(0,a.kt)("li",{parentName:"ul"},"It is a more advanced builder and normaly used in a large object construction")),(0,a.kt)("h3",{id:"functional-builder"},"Functional Builder"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This builder allows easy extension of the builder"),(0,a.kt)("li",{parentName:"ul"},"It delays the execution of initialization (i.e. in a lazy way)."),(0,a.kt)("li",{parentName:"ul"},"It registers a function in each setter, then invoke them when calling ",(0,a.kt)("inlineCode",{parentName:"li"},"build()")," method.")),(0,a.kt)("h3",{id:"force-to-use-builder"},"Force to use builder"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There are some way to force user to use builder instead of using the regular initialization"),(0,a.kt)("li",{parentName:"ul"},"A simple way is to add a wrapper function that takes a builder and it will perform some action internally"),(0,a.kt)("li",{parentName:"ul"},"See Go example for more information.")),(0,a.kt)("h3",{id:"code-reuse"},"Code Reuse"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Another scenario to use builder is for similar object construction"),(0,a.kt)("li",{parentName:"ul"},"You only take an interface and then calling the construct method to initialize."),(0,a.kt)("li",{parentName:"ul"},"See Go example.")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Anghel Leonard - Java Coding Problems"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/design-patterns-java/"},"https://www.udemy.com/course/design-patterns-java/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/design-patterns-go"},"https://www.udemy.com/course/design-patterns-go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/PacktPublishing/Go-Design-Patterns/blob/master/Chapter02/builder.go"},"https://github.com/PacktPublishing/Go-Design-Patterns/blob/master/Chapter02/builder.go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/PacktPublishing/Go-Design-Patterns/blob/master/Chapter02/builder_test.go"},"https://github.com/PacktPublishing/Go-Design-Patterns/blob/master/Chapter02/builder_test.go"))))}m.isMDXComponent=!0}}]);