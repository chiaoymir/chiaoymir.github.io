(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9507],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5642:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={},s="Pods Patterns",u={unversionedId:"Kubernetes/Advanced/Pod-Patterns",id:"Kubernetes/Advanced/Pod-Patterns",isDocsHomePage:!1,title:"Pods Patterns",description:"- Pods are a higher level abstraction of containers",source:"@site/docs/Kubernetes/Advanced/Pod-Patterns.md",sourceDirName:"Kubernetes/Advanced",slug:"/Kubernetes/Advanced/Pod-Patterns",permalink:"/docs/Kubernetes/Advanced/Pod-Patterns",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Networking",permalink:"/docs/Kubernetes/Advanced/Networking"},next:{title:"Service Account",permalink:"/docs/Kubernetes/Advanced/Service-Accounts"}},c=[{value:"Side-Car Pattern",id:"side-car-pattern",children:[{value:"File-Sync sidecar",id:"file-sync-sidecar",children:[]}]},{value:"Ambassador Pattern",id:"ambassador-pattern",children:[{value:"Database Ambassador",id:"database-ambassador",children:[]}]},{value:"Adaptor Pattern",id:"adaptor-pattern",children:[]}],d={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pods-patterns"},"Pods Patterns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pods are a higher level abstraction of containers"),(0,i.kt)("li",{parentName:"ul"},"Kubernetes need additional information information to manage workloads (restart policy, probe, ...)"),(0,i.kt)("li",{parentName:"ul"},"Simplifies using different underlying container runtimes (Docker, rkt, ...)"),(0,i.kt)("li",{parentName:"ul"},"Co-locate tightly-coupled containers without packaging them as a single container image")),(0,i.kt)("h2",{id:"side-car-pattern"},"Side-Car Pattern"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uses a helper container to assist the primary container"),(0,i.kt)("li",{parentName:"ul"},"Commonly used for logging, file syncing, or watchers"),(0,i.kt)("li",{parentName:"ul"},"Benefits include leaner main container, failure isolation, independent update cycles")),(0,i.kt)("h3",{id:"file-sync-sidecar"},"File-Sync sidecar"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Primary: web server",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Server content"))),(0,i.kt)("li",{parentName:"ul"},"Sidecar: content puller",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Syncs with content management system (CMS)"))),(0,i.kt)("li",{parentName:"ul"},"The content is synced using a shared volume (pod)")),(0,i.kt)("h2",{id:"ambassador-pattern"},"Ambassador Pattern"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ambassador container is a proxy for communicating to and from the primary container (container share the same network)"),(0,i.kt)("li",{parentName:"ul"},"Commonly used for communicating with database"),(0,i.kt)("li",{parentName:"ul"},"Streamlined development experience, potential to reuse ambassador across different languages")),(0,i.kt)("h3",{id:"database-ambassador"},"Database Ambassador"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Primary: webapp",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Handle requests"),(0,i.kt)("li",{parentName:"ul"},"Database requests are sent to proxy over localhost "))),(0,i.kt)("li",{parentName:"ul"},"Ambassador: Database proxy",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Forward requests to the appropriate database"),(0,i.kt)("li",{parentName:"ul"},"Possibly sharding the requests")))),(0,i.kt)("h2",{id:"adaptor-pattern"},"Adaptor Pattern"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adapters present a standardize interfaces across multiple Pods"),(0,i.kt)("li",{parentName:"ul"},"Commonly used for normalizing output logs and monitoring data"),(0,i.kt)("li",{parentName:"ul"},"Adapts third-party software to meet your needs")),(0,i.kt)("h3",{id:""}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Primary: metrics",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Write metrics to a file with native format"))),(0,i.kt)("li",{parentName:"ul"},"Adaptor: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Another container that read the merics "),(0,i.kt)("li",{parentName:"ul"},"And then transform to json format")))))}p.isMDXComponent=!0}}]);