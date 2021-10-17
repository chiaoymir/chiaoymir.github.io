(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1538],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3566:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(2122),l=n(9756),a=(n(7294),n(3905)),i=["components"],o={},s="Overview",u={unversionedId:"Cloud/Kubernetes/Basics/Overview",id:"Cloud/Kubernetes/Basics/Overview",isDocsHomePage:!1,title:"Overview",description:"Kubernetes is an open-source orchestration tool designed to automate, deploying, scaling and operizing containerized applications.",source:"@site/docs/Cloud/Kubernetes/Basics/Overview.md",sourceDirName:"Cloud/Kubernetes/Basics",slug:"/Cloud/Kubernetes/Basics/Overview",permalink:"/docs/Cloud/Kubernetes/Basics/Overview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multi-Container Pods",permalink:"/docs/Cloud/Kubernetes/Basics/Multi-Containers"},next:{title:"Pods",permalink:"/docs/Cloud/Kubernetes/Basics/Pods"}},c=[{value:"Similar Technology",id:"similar-technology",children:[]},{value:"Single-Node k8s clusters",id:"single-node-k8s-clusters",children:[]},{value:"Multi-Node k8s clusters",id:"multi-node-k8s-clusters",children:[]},{value:"Architecture",id:"architecture",children:[{value:"Control plane",id:"control-plane",children:[]},{value:"Pods",id:"pods",children:[]},{value:"Services",id:"services",children:[]},{value:"Deployment",id:"deployment",children:[]}]},{value:"Kubernetes API Server",id:"kubernetes-api-server",children:[{value:"REST API",id:"rest-api",children:[]},{value:"Client Libraries",id:"client-libraries",children:[]},{value:"kubectl",id:"kubectl",children:[]},{value:"Dashboard",id:"dashboard",children:[]}]},{value:"Manifest file",id:"manifest-file",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Kubernetes is an open-source orchestration tool designed to automate, deploying, scaling and operizing containerized applications."),(0,a.kt)("h2",{id:"similar-technology"},"Similar Technology"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DCOS"),(0,a.kt)("li",{parentName:"ul"},"Amazon ECS/EKS"),(0,a.kt)("li",{parentName:"ul"},"Docker swarm")),(0,a.kt)("h2",{id:"single-node-k8s-clusters"},"Single-Node k8s clusters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Options",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Docker (may be deprecated)"),(0,a.kt)("li",{parentName:"ul"},"minikube"),(0,a.kt)("li",{parentName:"ul"},"kubeadm"))),(0,a.kt)("li",{parentName:"ul"},"Create ephemeral clusters that start quickly and are in pristine state for testing applications in Kubernetes")),(0,a.kt)("h2",{id:"multi-node-k8s-clusters"},"Multi-Node k8s clusters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For production workloads"),(0,a.kt)("li",{parentName:"ul"},"Horizontal scaling"),(0,a.kt)("li",{parentName:"ul"},"Tolerate node failure"),(0,a.kt)("li",{parentName:"ul"},"Fully-managed",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Amazon EKS"),(0,a.kt)("li",{parentName:"ul"},"AKS (Azure)"),(0,a.kt)("li",{parentName:"ul"},"GKE (GCP)"))),(0,a.kt)("li",{parentName:"ul"},"Full control",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"kubespray"),(0,a.kt)("li",{parentName:"ul"},"kops"),(0,a.kt)("li",{parentName:"ul"},"kubeadm")))),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Distributed System"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Cluster")," refers to all the machines collectively (the entire system)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Node"),"s are machines in the cluster (VM or real one)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Node"),"s can be categorized as ",(0,a.kt)("inlineCode",{parentName:"li"},"worker"),"s and ",(0,a.kt)("inlineCode",{parentName:"li"},"master"),"s"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Worker")," nodes includes software to run containers managed by ",(0,a.kt)("inlineCode",{parentName:"li"},"Master")," node"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Master")," nodes run the control plane "),(0,a.kt)("li",{parentName:"ul"},"The control plane is a set of APIs and software that Kubernetes users interact with"),(0,a.kt)("li",{parentName:"ul"},"The APIs and software are referred to ",(0,a.kt)("strong",{parentName:"li"},"master components"))),(0,a.kt)("h3",{id:"control-plane"},"Control plane"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Schedules containers to nodes"),(0,a.kt)("li",{parentName:"ul"},"Consider multiple factor like CPU, memory, disk, ...")),(0,a.kt)("h3",{id:"pods"},"Pods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Groups of containers"),(0,a.kt)("li",{parentName:"ul"},"The smallest building blocks in Kubernetes"),(0,a.kt)("li",{parentName:"ul"},"Usually used in tightly-coupled containers"),(0,a.kt)("li",{parentName:"ul"},"Have other complex abstraction on top of pods")),(0,a.kt)("h3",{id:"services"},"Services"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define networking rules for exposing groups of Pods",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Other pods"),(0,a.kt)("li",{parentName:"ul"},"Public network")))),(0,a.kt)("h3",{id:"deployment"},"Deployment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Manage deploying configuration changes to running Pods"),(0,a.kt)("li",{parentName:"ul"},"Horizontal Scaling"),(0,a.kt)("li",{parentName:"ul"},"Rollout and Rollback")),(0,a.kt)("h2",{id:"kubernetes-api-server"},"Kubernetes API Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Client modifys cluster state by sending request to API server"),(0,a.kt)("li",{parentName:"ul"},"The API server is a master component that as the frontend for the cluster")),(0,a.kt)("h3",{id:"rest-api"},"REST API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Possible but not uncommon"),(0,a.kt)("li",{parentName:"ul"},"Use if no client library for your programming language")),(0,a.kt)("h3",{id:"client-libraries"},"Client Libraries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Handles authenticating and managing individual REST API request and response"),(0,a.kt)("li",{parentName:"ul"},"Official and community")),(0,a.kt)("h3",{id:"kubectl"},"kubectl"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kube control"),(0,a.kt)("li",{parentName:"ul"},"Issue high-level commands that are translated into API calls"),(0,a.kt)("li",{parentName:"ul"},"Works with local and remote clusters"),(0,a.kt)("li",{parentName:"ul"},"Manages all types of Kubernetes resources, and provides debugging and introspection feature.")),(0,a.kt)("h3",{id:"dashboard"},"Dashboard"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provide an visual way to view the state of the cluster")),(0,a.kt)("h2",{id:"manifest-file"},"Manifest file"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Declare desired properties"),(0,a.kt)("li",{parentName:"ul"},"Manifests can describe all kinds of resources"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"spec")," contains resource-specific properties")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: mypod\nspec:\n  containers:\n  - name: mycontainer\n    image: nginx:latest\n\n")))}d.isMDXComponent=!0}}]);