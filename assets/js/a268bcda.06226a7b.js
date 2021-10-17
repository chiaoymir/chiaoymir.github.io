(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6643],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=c,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:c,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2960:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(2122),c=n(9756),o=(n(7294),n(3905)),a=["components"],u={},i="Service Account",l={unversionedId:"Cloud/Kubernetes/Advanced/Service-Accounts",id:"Cloud/Kubernetes/Advanced/Service-Accounts",isDocsHomePage:!1,title:"Service Account",description:"- A Pod may need to authenticate itself to gain access to the cluster resources",source:"@site/docs/Cloud/Kubernetes/Advanced/Service-Accounts.md",sourceDirName:"Cloud/Kubernetes/Advanced",slug:"/Cloud/Kubernetes/Advanced/Service-Accounts",permalink:"/docs/Cloud/Kubernetes/Advanced/Service-Accounts",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pods Patterns",permalink:"/docs/Cloud/Kubernetes/Advanced/Pod-Patterns"},next:{title:"Sidecar Pattern",permalink:"/docs/Cloud/Kubernetes/Advanced/Sidecar"}},s=[{value:"Access Control",id:"access-control",children:[]},{value:"Image Pull Secrets",id:"image-pull-secrets",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"service-account"},"Service Account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Pod may need to authenticate itself to gain access to the cluster resources"),(0,o.kt)("li",{parentName:"ul"},"Provide an identify to a Pod in the cluster"),(0,o.kt)("li",{parentName:"ul"},"Stored in, and managed by the cluster"),(0,o.kt)("li",{parentName:"ul"},"Scoped to namespace")),(0,o.kt)("h2",{id:"access-control"},"Access Control"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Service accounts are compativle with role-based access control (RBAC)"),(0,o.kt)("li",{parentName:"ul"},"Pods have a token mounted on a volume that can be used to authenticated requests"),(0,o.kt)("li",{parentName:"ul"},"When not specifies, a pod will use a default service account"),(0,o.kt)("li",{parentName:"ul"},"Default service account token has no additional permission than an unauthenticated user")),(0,o.kt)("h2",{id:"image-pull-secrets"},"Image Pull Secrets"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Image pull secrets authenticate with private container registries"),(0,o.kt)("li",{parentName:"ul"},"Service accounts can also store image pull secrets")))}p.isMDXComponent=!0}}]);