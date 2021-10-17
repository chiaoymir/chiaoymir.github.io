(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7955],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,g=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6595:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],l={},u="Setup",c={unversionedId:"Programming/Language/Java/Setup",id:"Programming/Language/Java/Setup",isDocsHomePage:!1,title:"Setup",description:"I will use SDKMan as jdk manager",source:"@site/docs/Programming/Language/Java/Setup.md",sourceDirName:"Programming/Language/Java",slug:"/Programming/Language/Java/Setup",permalink:"/docs/Programming/Language/Java/Setup",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java Generic",permalink:"/docs/Programming/Language/Java/Advanced/Java-Generic"},next:{title:"Setup",permalink:"/docs/Programming/Language/Python/Setup"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Install Java",id:"install-java",children:[]},{value:"References",id:"references",children:[]}],p={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup"},"Setup"),(0,i.kt)("p",null,"I will use ",(0,i.kt)("inlineCode",{parentName:"p"},"SDKMan")," as jdk manager"),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Download source\n$ curl -s "https://get.sdkman.io" | zsh\n\n$ source "$HOME/.sdkman/bin/sdkman-init.sh"\n\n# Verify installation\n$ sdk version\n')),(0,i.kt)("h2",{id:"install-java"},"Install Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# List all available version\n$ sdk list java\n\n# Install example\n$ sdk install java 11.0.11.j9-adpt\n")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sdkman.io/install"},"https://sdkman.io/install"))))}m.isMDXComponent=!0}}]);