(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4425],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1463:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),l=["components"],o={},c="Dockerfile",u={unversionedId:"Docker/Basics/File",id:"Docker/Basics/File",isDocsHomePage:!1,title:"Dockerfile",description:"Prerequisites",source:"@site/docs/Docker/Basics/File.md",sourceDirName:"Docker/Basics",slug:"/Docker/Basics/File",permalink:"/docs/Docker/Basics/File",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multicast",permalink:"/docs/Distributed System/Concepts/Multicast"},next:{title:"Docker inside",permalink:"/docs/Docker/Basics/Inside"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Example 1",id:"example-1",children:[{value:"Source code",id:"source-code",children:[]},{value:"Dockerfile configuration",id:"dockerfile-configuration",children:[]}]},{value:"Create an image",id:"create-an-image",children:[]},{value:"Build image",id:"build-image",children:[{value:"Build with tag name",id:"build-with-tag-name",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Source Code",id:"source-code-1",children:[]},{value:"Build Executable",id:"build-executable",children:[]},{value:"Dockerfile",id:"dockerfile-1",children:[]},{value:"Run",id:"run",children:[]},{value:"Inspect",id:"inspect",children:[]}]},{value:"Tagging",id:"tagging",children:[]},{value:"Another Example",id:"another-example",children:[]},{value:"References",id:"references",children:[]}],s={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dockerfile"},"Dockerfile"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter root privilege")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install and update yum packages")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yum install epel-release -y\nyum update\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Go")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yum install golang -y \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verify Installation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go version\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install vim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install vim-enhanced -y  \n")),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("h3",{id:"source-code"},"Source code"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hello.go"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello World!")\n}\n\n// go build hello.go\n')),(0,i.kt)("h3",{id:"dockerfile-configuration"},"Dockerfile configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM scratch\nCOPY hello /\nCMD ["./hello"]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FROM"),": the base image",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scratch"),": the minimalist base"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COPY"),": copy file from host to container",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COPY <src> <dest>")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CMD"),": command to execute",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'CMD ["<binary/command>", "arg1", ...]'))))),(0,i.kt)("h2",{id:"create-an-image"},"Create an image"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can also made an container into an image.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker commit <container_id> <new_image_name>\n# sudo docker commit d381ad9a146f ubuntu_python\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To change the initial command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo docker --change=\'CMD [commands]\' commit <container_id> <new_image_name>\n# sudo docker commit --change=\'CMD ["python", "-c", "import this"]\' d381ad9a146f ubuntu_python\n')),(0,i.kt)("h2",{id:"build-image"},"Build image"),(0,i.kt)("h3",{id:"build-with-tag-name"},"Build with tag name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t greeting .\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker build -t <tag_name> <directory>"))),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("h3",{id:"source-code-1"},"Source Code"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"webapp.go"),":\n(This server is dangerous, don't use in production!)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "net/http"\n    "os"\n)\n\nfunc hostHandler(w http.ResponseWriter, r *http.Request) {\n    name, err := os.Hostname()\n\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Fprintf(w, "<h1>Hostname: %s</h1>", name)\n    fmt.Fprintf(w, "<h1>Environment vars:</h1><br>")\n    fmt.Fprintf(w, "<ul>")\n\n    for _, evar := range os.Environ() {\n        fmt.Fprintf(w, "<li>%s</li>", evar)\n    }\n\n    fmt.Fprintf(w, "</ul>")\n}\n\nfunc rootHandler(w http.ResponseWriter, r *http.Request) {\n    fmt.Fprintf(w, "<h1>Awesome site in Go!</h1><br>")\n    fmt.Fprintf(w, "<a href=\'/host/\'>Host info<br>")\n}\n\nfunc main() {\n    http.HandleFunc("/", rootHandler)\n    http.HandleFunc("/host/", hostHandler)\n    http.ListenAndServe(":8080", nil)\n}\n')),(0,i.kt)("h3",{id:"build-executable"},"Build Executable"),(0,i.kt)("p",null,"Important!! You need to use static linking because go use dynamical linking by default.\nIn this situation, the ",(0,i.kt)("inlineCode",{parentName:"p"},"CGO_ENABLED=0")," disable this behavior. You can find more information in the references."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CGO_ENABLED=0 go build webapp.go\n")),(0,i.kt)("h3",{id:"dockerfile-1"},"Dockerfile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-docker"},'FROM scratch\nCOPY webapp /\nEXPOSE 8080\nCMD ["./webapp"]\n')),(0,i.kt)("h3",{id:"run"},"Run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'docker build -t "webapp" .\ndocker run --name=webapp -d webapp\n# Output like: 00ceff55fe44a5cb46283f5d2b516877518db2b271215f9aa4e1b1891adedb51\n# This is the container id\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--name=webapp"),": lable the container id as webapp for better management"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-d"),": detached mode, let container run in the background"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-P"),": map port to the host, like ",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0:49153->8080/tcp")," (use docker ps)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-p"),": map a specified port to host, ",(0,i.kt)("inlineCode",{parentName:"li"},"-p <host_port>:<container_port>"),", like ",(0,i.kt)("inlineCode",{parentName:"li"},"-p 3000:8080"))),(0,i.kt)("h3",{id:"inspect"},"Inspect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker inspect 00ceff55fe44a5cb46283f5d2b516877518db2b271215f9aa4e1b1891adedb51\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker inspect <container_id>"))),(0,i.kt)("p",null,"You will find the ip address of the container, use it to connect to the container"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl 172.17.0.2:8080\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"curl <ip_address>:<port>"))),(0,i.kt)("h2",{id:"tagging"},"Tagging"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tag when building, ",(0,i.kt)("inlineCode",{parentName:"li"},"latest")," is the default tag.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t <tag>:<version> .\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tag the existing images (add another tag to an image)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker tag demo:latest demo:v1\n")),(0,i.kt)("h2",{id:"another-example"},"Another Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# Python v3 base layer\nFROM python:3\n\n# Set the working directory in the image\'s file system\nWORKDIR /usr/src/app\n\n# Copy everything in the host working directory to the container\'s directory\nCOPY . .\n\n# Install code dependencies in requirements.txt\nRUN pip install --no-cache-dir -r requirements.txt\n\n# Indicate that the server will be listening on port 5000\nEXPOSE 5000\n\n# Set the default command to run the app\nCMD [ "python", "./src/app.py" ]\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cyberithub.com/install-go-on-centos/"},"https://www.cyberithub.com/install-go-on-centos/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.javatpoint.com/how-to-install-vim-on-centos"},"https://www.javatpoint.com/how-to-install-vim-on-centos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arp242.net/static-go.html"},"https://www.arp242.net/static-go.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/builder/"},"https://docs.docker.com/engine/reference/builder/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloudacademy.com/learning-paths/cloud-academy-docker-in-depth-129/"},"https://cloudacademy.com/learning-paths/cloud-academy-docker-in-depth-129/"))))}d.isMDXComponent=!0}}]);