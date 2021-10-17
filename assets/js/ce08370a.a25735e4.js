(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7260],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=m(n),b=a,g=c["".concat(l,".").concat(b)]||c[b]||p[b]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9844:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],u={},l="Contributing",m={unversionedId:"Submarine/Development/Contributing",id:"Submarine/Development/Contributing",isDocsHomePage:!1,title:"Contributing",description:"We will introduce several steps to contributing to apache submarine project.",source:"@site/docs/Submarine/Development/Contributing.md",sourceDirName:"Submarine/Development",slug:"/Submarine/Development/Contributing",permalink:"/docs/Submarine/Development/Contributing",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/Programming/Language/Python/Setup"},next:{title:"Some Question",permalink:"/docs/Submarine/Development/Question"}},s=[],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"We will introduce several steps to contributing to apache submarine project."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fork ",(0,o.kt)("inlineCode",{parentName:"li"},"https://github.com/apache/submarine")," to your own repositories."),(0,o.kt)("li",{parentName:"ol"},"Clone the submarine project to your local machine.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Step 1. Clone the repository\ngit clone git@github.com:${USERNAME}/submarine.git\n\n# Step 2. Add apache/submarine as remote upstream\ncd submarine\ngit remote add upstream git@github.com:apache/submarine.git\n\n# Step 3. Don't push to the upstream master.\ngit remote set-url --push upstream no_push\n\n# Step 4. Check your remote settings.\ngit remote -v\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create a new Jira issue"),(0,o.kt)("li",{parentName:"ol"},"Create a new local branch of the submarine project.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Step 0. Change to submarine directory\ncd submarine\n\n# Step 1. Make your local master up-to-date\n# On master branch\ngit checkout master\ngit fetch upstream\ngit rebase upstream/master\n\n# Step 2. Create a new branch fro issue SUBMARINE-${jira_number}\n# Example: git checkout -b SUBMARINE-748\ngit checkout -b SUBMARINE-${jira_number} \n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"You add or remove some codes and then make some commits.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Step 1. Add the modified files to stage area.\ngit add ${edited files}\n\n# Step 2. Commit. \n# Notice the commit message format: "SUBMARINE-${jira_number}. ${Commit Message}"\n# Example: git commit -m "SUBMARINE-748. Update Contributing guide"\ngit commit -m "SUBMARINE-${jira_number}. ${Commit Message}"\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Fetch the master again to make your no conflicts between the master and your branch.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# On SUBMARINE-${jira_number} branch\ngit fetch upstream\ngit rebase upstream/master\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Push your local branch to your own repository.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin SUBMARINE-${jira_number}\n")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Create a pull request.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Visit ",(0,o.kt)("inlineCode",{parentName:"li"},"https://github.com/apache/submarine"),". "),(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Compare & Pull Request")," button. "),(0,o.kt)("li",{parentName:"ul"},"You will see a template, then fill in proper description."))),(0,o.kt)("li",{parentName:"ol"},"Code review process.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check the state of your pull request in your free time."),(0,o.kt)("li",{parentName:"ul"},"If found failed tests, fix it and push again. You need not to create a new PR, the github will handle it for you."),(0,o.kt)("li",{parentName:"ul"},"Some reviewers will review your code and give recommendations."),(0,o.kt)("li",{parentName:"ul"},"If many reviews consider the PR is fine, then it will be merged later.")))))}c.isMDXComponent=!0}}]);