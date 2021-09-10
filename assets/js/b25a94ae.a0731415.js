(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4601],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=c(n),b=i,m=f["".concat(u,".").concat(b)]||f[b]||p[b]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4230:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),s=["components"],o={},u="Minikube",c={unversionedId:"Kubernetes/Basics/Minikube",id:"Kubernetes/Basics/Minikube",isDocsHomePage:!1,title:"Minikube",description:"Installation",source:"@site/docs/Kubernetes/Basics/Minikube.md",sourceDirName:"Kubernetes/Basics",slug:"/Kubernetes/Basics/Minikube",permalink:"/docs/Kubernetes/Basics/Minikube",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jobs",permalink:"/docs/Kubernetes/Basics/Jobs"},next:{title:"Multi-Container Pods",permalink:"/docs/Kubernetes/Basics/Multi-Containers"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Start",id:"start",children:[]},{value:"References",id:"references",children:[]}],p={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minikube"},"Minikube"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install minikube\nbrew install hyperkit\n")),(0,a.kt)("h2",{id:"start"},"Start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --driver=hyperkit\n# Set as default \n# minikube config set driver hyperkit \n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"https://minikube.sigs.k8s.io/docs/start/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/drivers/hyperkit/"},"https://minikube.sigs.k8s.io/docs/drivers/hyperkit/"))))}f.isMDXComponent=!0}}]);