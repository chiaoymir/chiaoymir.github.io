(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3161],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return f}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(r),f=i,m=g["".concat(s,".").concat(f)]||g[f]||u[f]||a;return r?t.createElement(m,o(o({ref:n},p),{},{components:r})):t.createElement(m,o({ref:n},p))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1352:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var t=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],l={},s="Path",c={unversionedId:"Linux/System Programming/File System/Path",id:"Linux/System Programming/File System/Path",isDocsHomePage:!1,title:"Path",description:"Get Working Directory",source:"@site/docs/Linux/System Programming/File System/Path.md",sourceDirName:"Linux/System Programming/File System",slug:"/Linux/System Programming/File System/Path",permalink:"/docs/Linux/System Programming/File System/Path",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/Linux/System Programming/File System/Intro"},next:{title:"Read",permalink:"/docs/Linux/System Programming/File System/Read"}},p=[{value:"Get Working Directory",id:"get-working-directory",children:[]},{value:"Change Directory",id:"change-directory",children:[]},{value:"<code>filepath</code> package",id:"filepath-package",children:[]},{value:"Simple Program",id:"simple-program",children:[]}],u={toc:p};function g(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"path"},"Path"),(0,a.kt)("h2",{id:"get-working-directory"},"Get Working Directory"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/pkg/os/#Getwd"},"https://golang.org/pkg/os/#Getwd"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func Getwd() (dir string, err error)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'wd, err := os.Getwd()\nif err != nil {\n    fmt.Println(err)\n    return\n}\nfmt.Println("Current Directory:", wd)\n')),(0,a.kt)("h2",{id:"change-directory"},"Change Directory"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/pkg/os/#Chdir"},"https://golang.org/pkg/os/#Chdir"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func Chdir(dir string) error\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'if err := os.Chdir("/"); err != nil {\n    fmt.Println(err)\n    return\n}\n\nif wd, err = os.Getwd(); err != nil {\n    fmt.Println(err)\n    return\n}\n')),(0,a.kt)("h2",{id:"filepath-package"},(0,a.kt)("inlineCode",{parentName:"h2"},"filepath")," package"),(0,a.kt)("p",null,"There are many other functions to use in the ",(0,a.kt)("inlineCode",{parentName:"p"},"path/filepath")," package."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/pkg/path/filepath/"},"https://golang.org/pkg/path/filepath/"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func Abs(path string) (string, error)\nfunc Base(path string) string\nfunc Clean(path string) string\nfunc Dir(path string) string\nfunc EvalSymlinks(path string) (string, error)\nfunc Ext(path string) string\nfunc FromSlash(path string) string\nfunc Glob(pattern string) (matches []string, err error)\nfunc HasPrefix(p, prefix string) bool\nfunc IsAbs(path string) bool\nfunc Join(elem ...string) string\nfunc Match(pattern, name string) (matched bool, err error)\nfunc Rel(basepath, targpath string) (string, error)\nfunc Split(path string) (dir, file string)\nfunc SplitList(path string) []string\nfunc ToSlash(path string) string\nfunc VolumeName(path string) string\nfunc Walk(root string, fn WalkFunc) error\nfunc WalkDir(root string, fn fs.WalkDirFunc) error\ntype WalkFunc func(path string, info os.FileInfo, err error) error\n")),(0,a.kt)("h2",{id:"simple-program"},"Simple Program"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "os"\n    "path/filepath"\n)\n\nfunc main() {\n    if len(os.Args) != 2 { // ensure path is specified\n        fmt.Println("Please specify a path.")\n        return\n    }\n    root, err := filepath.Abs(os.Args[1]) // get absolute path\n    if err != nil {\n        fmt.Println("Cannot get absolute path:", err)\n        return\n    }\n    pathInfo, err := os.Stat(root)\n    if err != nil {\n        fmt.Println("Path does not exist!")\n        return\n    }\n    if !pathInfo.IsDir() {\n        fmt.Println("The path is not a directory!")\n        return\n    }\n    fmt.Println("Listing files in", root)\n    var c struct {\n        files int\n        dirs int\n    }\n    filepath.Walk(root, func(path string, info os.FileInfo, err error) error {\n        // walk the tree to count files and folders\n        if info.IsDir() {\n            c.dirs++\n        } else {\n            c.files++\n        }\n        fmt.Println("-", path)\n        return nil\n    })\n    fmt.Printf("Total: %d files in %d directories", c.files, c.dirs)\n}\n')))}g.isMDXComponent=!0}}]);