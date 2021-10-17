(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4134],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,h=m["".concat(i,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5038:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(2122),o=n(9756),l=(n(7294),n(3905)),a=["components"],u={},i="Ubuntu Setup",s={unversionedId:"Tools/Zsh/linux-setup",id:"Tools/Zsh/linux-setup",isDocsHomePage:!1,title:"Ubuntu Setup",description:"Zsh Setup",source:"@site/docs/Tools/Zsh/linux-setup.md",sourceDirName:"Tools/Zsh",slug:"/Tools/Zsh/linux-setup",permalink:"/docs/Tools/Zsh/linux-setup",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/Tools/Zsh/Setup"}},c=[{value:"Zsh Setup",id:"zsh-setup",children:[]},{value:"Zim Setup",id:"zim-setup",children:[]},{value:"powerlevel10k Setup",id:"powerlevel10k-setup",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ubuntu-setup"},"Ubuntu Setup"),(0,l.kt)("h2",{id:"zsh-setup"},"Zsh Setup"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Type the following commands, and then restart.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install zsh\n$ chsh -s $(which zsh)\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Then follow a series of instructions to install zsh.")),(0,l.kt)("h2",{id:"zim-setup"},"Zim Setup"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install zim")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Run the following commands")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vim"},"$ vim ~/.zimrc\n\n# Then add the following line to bottom of ~/.zimrc\n# `zmodule romkatv/powerlevel10k`\n\n$ zimfw install\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Fully restart the terminal.")),(0,l.kt)("h2",{id:"powerlevel10k-setup"},"powerlevel10k Setup"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"You need to install the nerdfont. You can follow this ",(0,l.kt)("a",{parentName:"li",href:"https://holychung.medium.com/%E5%88%86%E4%BA%AB-oh-my-zsh-powerlevel10k-%E5%BF%AB%E9%80%9F%E6%89%93%E9%80%A0%E5%A5%BD%E7%9C%8B%E5%A5%BD%E7%94%A8%E7%9A%84-command-line-%E7%92%B0%E5%A2%83-f66846117921"},"instruction")),(0,l.kt)("li",{parentName:"ol"},"After successfully installed the font, you can restart the terminal to see it to take effect.")))}m.isMDXComponent=!0}}]);