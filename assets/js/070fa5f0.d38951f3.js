(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7863],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=c(t),m=a,d=b["".concat(s,".").concat(m)]||b[m]||p[m]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},2317:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return b}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],l={},s="Jobs",c={unversionedId:"Kubernetes/Basics/Jobs",id:"Kubernetes/Basics/Jobs",isDocsHomePage:!1,title:"Jobs",description:"Jobs are used for non-long-running applications. Once it successfully finishs its work, it will no longer be restarted. To periodically run the job, you can use cron job instead.",source:"@site/docs/Kubernetes/Basics/Jobs.md",sourceDirName:"Kubernetes/Basics",slug:"/Kubernetes/Basics/Jobs",permalink:"/docs/Kubernetes/Basics/Jobs",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Init Container",permalink:"/docs/Kubernetes/Basics/InitContainer"},next:{title:"Minikube",permalink:"/docs/Kubernetes/Basics/Minikube"}},u=[{value:"Job",id:"job",children:[]},{value:"CronJob",id:"cronjob",children:[]}],p={toc:u};function b(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jobs"},"Jobs"),(0,o.kt)("p",null,"Jobs are used for non-long-running applications. Once it successfully finishs its work, it will no longer be restarted. To periodically run the job, you can use cron job instead."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backOffLimit"),": Number of retry before making a job is failed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"completions"),": Number of jobs need to complete in sequence"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parallelism"),": Number of jobs can be executed in parallel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"restartPolicy"),": set to ",(0,o.kt)("inlineCode",{parentName:"li"},"OnFailure")," because we only need to restart when a job is failed; ",(0,o.kt)("inlineCode",{parentName:"li"},"Never")," for not restart")),(0,o.kt)("h2",{id:"job"},"Job"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: multi-completion-batch-job\nspec:\n  # How many jobs need to do sequentially in total\n  completions: 5\n  # How many jobs can do in parallel \n  parallelism: 2\n  # Maximal time a job can last\n  activeDeadlineSeconds: 60\n  template:\n    metadata:\n      labels:\n        app: batch-job\n    spec:\n      # Cannot use always\n      restartPolicy: OnFailure\n      containers:\n      - name: main\n        image: luksa/batch-job\n")),(0,o.kt)("h2",{id:"cronjob"},"CronJob"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1beta1\nkind: CronJob\nmetadata:\n  name: batch-job-every-fifteen-minutes\nspec:\n  # Every 0, 15, 30, 45 minutes every hour\n  schedule: "0,15,30,45 * * * *"\n  # Must start after the schedule time past\n  startingDeadlineSeconds: 15\n  jobTemplate:\n    spec:\n      template:\n        metadata:\n          labels:\n            app: periodic-batch-job\n        spec:\n          restartPolicy: OnFailure\n          containers:\n          - name: main\n            image: luksa/batch-job\n')))}b.isMDXComponent=!0}}]);