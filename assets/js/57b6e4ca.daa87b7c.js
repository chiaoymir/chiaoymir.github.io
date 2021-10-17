(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7098],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),k=a,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9682:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],i={},c="Installation",s={unversionedId:"Cloud/Docker/Basics/Installation",id:"Cloud/Docker/Basics/Installation",isDocsHomePage:!1,title:"Installation",description:"Create a Vagrant VM",source:"@site/docs/Cloud/Docker/Basics/Installation.md",sourceDirName:"Cloud/Docker/Basics",slug:"/Cloud/Docker/Basics/Installation",permalink:"/docs/Cloud/Docker/Basics/Installation",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker inside",permalink:"/docs/Cloud/Docker/Basics/Inside"},next:{title:"Docker Network",permalink:"/docs/Cloud/Docker/Basics/Network"}},u=[{value:"Create a Vagrant VM",id:"create-a-vagrant-vm",children:[]},{value:"Connect Using SSH",id:"connect-using-ssh",children:[]},{value:"Install and Update prerequisites",id:"install-and-update-prerequisites",children:[]},{value:"Install Docker",id:"install-docker",children:[]},{value:"Verify Installation",id:"verify-installation",children:[]},{value:"Add user without root privilege",id:"add-user-without-root-privilege",children:[{value:"Docker Group",id:"docker-group",children:[]},{value:"Docker user",id:"docker-user",children:[]},{value:"Verification",id:"verification",children:[]}]},{value:"References",id:"references",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"create-a-vagrant-vm"},"Create a Vagrant VM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir docker-intro \ncd docker-intro\nvagrant init centos/7\nvagrant up\n")),(0,o.kt)("h2",{id:"connect-using-ssh"},"Connect Using SSH"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant ssh\n")),(0,o.kt)("h2",{id:"install-and-update-prerequisites"},"Install and Update prerequisites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum remove docker docker-common docker-selinux docker-engine\nsudo yum install -y yum-utils device-mapper-persistent-data lvm2\n")),(0,o.kt)("h2",{id:"install-docker"},"Install Docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\nsudo yum install docker-ce -y\n")),(0,o.kt)("h2",{id:"verify-installation"},"Verify Installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start Docker (Each time you reload the VM)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start docker\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"View Status")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status docker\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run a ",(0,o.kt)("strong",{parentName:"li"},"hello-world")," container")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run hello-world\n")),(0,o.kt)("p",null,"You should see the following messages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Hello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.\n    (amd64)\n 3. The Docker daemon created a new container from that image which runs the\n    executable that produces the output you are currently reading.\n 4. The Docker daemon streamed that output to the Docker client, which sent it\n    to your terminal.\n')),(0,o.kt)("h2",{id:"add-user-without-root-privilege"},"Add user without root privilege"),(0,o.kt)("h3",{id:"docker-group"},"Docker Group"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check docker is in the group")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grep docker /etc/group\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If not, add the ",(0,o.kt)("inlineCode",{parentName:"li"},"docker")," group")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd docker\n")),(0,o.kt)("h3",{id:"docker-user"},"Docker user"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add user to ",(0,o.kt)("inlineCode",{parentName:"li"},"docker")," group")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo gpasswd -a $USER docker\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login again")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"newgrp docker\n")),(0,o.kt)("h3",{id:"verification"},"Verification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check whether you can use this command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker info\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloudacademy.com/learning-paths/cloud-academy-docker-in-depth-129/"},"https://cloudacademy.com/learning-paths/cloud-academy-docker-in-depth-129/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://app.vagrantup.com/centos/boxes/7"},"https://app.vagrantup.com/centos/boxes/7"))))}p.isMDXComponent=!0}}]);