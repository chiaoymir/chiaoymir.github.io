(self.webpackChunkyingchiaochen_website=self.webpackChunkyingchiaochen_website||[]).push([[1223],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=o.createContext({}),u=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,h=c["".concat(r,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2019:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var o=n(4034),l=n(9973),a=(n(7294),n(3905)),i=["components"],s={},r="ONOS + mininet",u={unversionedId:"System/Network/Virtualization/SDN/ONOS-Lab",id:"System/Network/Virtualization/SDN/ONOS-Lab",isDocsHomePage:!1,title:"ONOS + mininet",description:"We will use Ubuntu 20.04 for onos. (You can also run on OSX, but you will need to change the installation steps.)",source:"@site/docs/System/Network/Virtualization/SDN/ONOS-Lab.md",sourceDirName:"System/Network/Virtualization/SDN",slug:"/System/Network/Virtualization/SDN/ONOS-Lab",permalink:"/docs/System/Network/Virtualization/SDN/ONOS-Lab",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Network Review",permalink:"/docs/System/Network/Virtualization/SDN/Network-Review"},next:{title:"Dimensions of SDN Applications",permalink:"/docs/System/Network/Virtualization/SDN/SDN-Dimensions"}},p=[{value:"ONOS",id:"onos",children:[{value:"Installation",id:"installation",children:[],level:3},{value:"GUI",id:"gui",children:[],level:3},{value:"CLI",id:"cli",children:[],level:3},{value:"Cleanup",id:"cleanup",children:[],level:3}],level:2},{value:"Mininet",id:"mininet",children:[{value:"Installation",id:"installation-1",children:[],level:3},{value:"Create a topology",id:"create-a-topology",children:[],level:3},{value:"Discover Hosts",id:"discover-hosts",children:[],level:3},{value:"Destrop topology",id:"destrop-topology",children:[],level:3}],level:2},{value:"Add Flows",id:"add-flows",children:[{value:"Launch a command",id:"launch-a-command",children:[],level:3}],level:2},{value:"Rules Automation",id:"rules-automation",children:[{value:"Build Rules",id:"build-rules",children:[],level:3},{value:"Add Rules and Send Request",id:"add-rules-and-send-request",children:[],level:3}],level:2},{value:"Lab Exercise",id:"lab-exercise",children:[{value:"ONOS",id:"onos-1",children:[],level:3},{value:"Mininet",id:"mininet-1",children:[],level:3},{value:"Adding Rules",id:"adding-rules",children:[],level:3}],level:2},{value:"Results",id:"results",children:[],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:p};function c(e){var t=e.components,s=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"onos--mininet"},"ONOS + mininet"),(0,a.kt)("p",null,"We will use Ubuntu 20.04 for onos. (You can also run on OSX, but you will need to change the installation steps.)"),(0,a.kt)("h2",{id:"onos"},"ONOS"),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Follow this ",(0,a.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10244324"},"instruction"),". We will use a binary release to start onos instead of building the source code."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install some dependencies")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt -y install git\nsudo apt-get update && apt-get upgrade\nsudo apt -y install git\nsudo apt-get install openjdk-11-jdk\nsudo apt-get -y install maven\nsudo apt-get update\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add this to ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.bashrc"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/\nexport M2_HOME=/opt/maven\nexport MAVEN_HOME=/opt/maven\nexport PATH=${M2_HOME}/bin:${PATH}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Download Onos release (Go to ONOS wiki downloads or following the commands)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Downloads\n\n# Download onos 2.5.0\nwget https://repo1.maven.org/maven2/org/onosproject/onos-releases/2.5.0/onos-2.5.0.tar.gz\ntar zxvf onos-2.5.0.tar.gz\n\ncd onos-2.5.0\n\n# Start service\n./bin/onos-service\n# Or ./bin/onos-service start\n")),(0,a.kt)("h3",{id:"gui"},"GUI"),(0,a.kt)("p",null,"After complete the previous installation section, you can login to the cli."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:8181/onos/ui/login.html")," with username = ",(0,a.kt)("inlineCode",{parentName:"li"},"onos"),", password = ",(0,a.kt)("inlineCode",{parentName:"li"},"rocks"),".")),(0,a.kt)("h3",{id:"cli"},"CLI"),(0,a.kt)("p",null,"After complete the previous installtion section, you can also login to the cli."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate ssh key (keep pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"Enter"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t rsa\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Change onos-user-key")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Downloads/onos-2.5.0\n./bin/onos-user-key $USER ~/.ssh/id_rsa.pub\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Login to the cli")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Downloads/onos-2.5.0\n# Login to CLI\n./bin/onos\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Install Openflow feature (under cli)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"onos> app activate org.onosproject.openflow\n")),(0,a.kt)("h3",{id:"cleanup"},"Cleanup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"onos> wipe-out please\n")),(0,a.kt)("h2",{id:"mininet"},"Mininet"),(0,a.kt)("h3",{id:"installation-1"},"Installation"),(0,a.kt)("p",null,"Go to this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mininet/mininet/releases"},"website")," and download the latest release. (under the Assets section)"),(0,a.kt)("h3",{id:"create-a-topology"},"Create a topology"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the default ",(0,a.kt)("inlineCode",{parentName:"li"},"topo-2sw-2host.py")," under the ",(0,a.kt)("inlineCode",{parentName:"li"},"mininet/custom")," directory")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mininet@mininet-vm> sudo mn --mac --switch ovsk,protocols=OpenFlow13 --controller=remote,ip=192.168.100.1 --custom ./mininet/custom/topo-2sw-2host.py --topo mytopo\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Or you can define another topology file like this")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mininet@mininet-vm> sudo mn --mac --switch ovsk,protocols=OpenFlow13 --controller=remote,ip=192.168.100.1 --custom ./mininet/custom/mytopo.py --topo mytopo\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="test.py"',title:'"test.py"'},"from mininet.topo import Topo\n\nclass MyTopo( Topo ):\n    \"Simple topology example.\"\n\n    def build( self ):\n        \"Create custom topo.\"\n\n        # Add hosts and switches\n        leftHost = self.addHost( 'h1' )\n        rightHost = self.addHost( 'h2' )\n        leftSwitch = self.addSwitch( 's1' )\n        rightSwitch = self.addSwitch( 's2' )\n\n        # Add links\n        self.addLink( leftHost, leftSwitch )\n        self.addLink( leftSwitch, rightSwitch )\n        self.addLink( rightSwitch, rightHost )\n\n\ntopos = { 'mytopo': ( lambda: MyTopo() ) }\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"2-topo",src:n(5529).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check if the switches has correctly configured")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"onos> devices\n")),(0,a.kt)("h3",{id:"discover-hosts"},"Discover Hosts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This command allows onos to know all the hosts that a switch has connected.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mininet> pingall\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check if the hosts show up.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"onos> hosts\n")),(0,a.kt)("h3",{id:"destrop-topology"},"Destrop topology"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Exit the mininet topology\nmininet> exit\n\n# Clean up\nmininet@mininet-vm> sudo mn -c\n\n# Exit the ssh session\nmininet@mininet-vm> exit\n")),(0,a.kt)("h2",{id:"add-flows"},"Add Flows"),(0,a.kt)("h3",{id:"launch-a-command"},"Launch a command"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a flow for a device (the id must match in both url and json)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'local> curl -X POST -H "content-type:application/json" http://localhost:8181/onos/v1/flows/of:0000000000000001 -d @./test_1.json --user onos:rocks\n')),(0,a.kt)("h2",{id:"rules-automation"},"Rules Automation"),(0,a.kt)("p",null,"You can write a shell script to automate building rules and send requests."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NOTE: you have to look at which port the switch is configured. The port number is related to topology you just defined. Or you can just find the port in GUI."),(0,a.kt)("li",{parentName:"ul"},"Also, you have to defind each rules on each switch.")),(0,a.kt)("h3",{id:"build-rules"},"Build Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We know that rules are similar, so we can have this template:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="templates/template.json"',title:'"templates/template.json"'},'{\n  "priority": 60000,\n  "timeout": 0,\n  "isPermanent": true,\n  "deviceId": "of:0000000000000001",\n  "treatment": {\n    "instructions": [\n      {\n        "type": "OUTPUT",\n        "port": "1"\n      }\n    ]\n  },\n  "selector": {\n    "criteria": [\n      {\n        "type": "ETH_TYPE",\n        "ethType": "0x0800"\n      },\n      {\n        "type": "IPV4_DST",\n        "ip": "10.0.0.1/32"\n      }\n    ]\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We build a rule file using the above template",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"First, we pass some arguments like ",(0,a.kt)("inlineCode",{parentName:"li"},"DEVICE_ID"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"PORT"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ETH_TYPE"),", ... to the script"),(0,a.kt)("li",{parentName:"ul"},"After parsing, we build a python commond while modifying some fields based on the arguments"),(0,a.kt)("li",{parentName:"ul"},"Last, we print the output to ",(0,a.kt)("inlineCode",{parentName:"li"},"STDIN")," (console) for further use")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="build-rule.sh"',title:'"build-rule.sh"'},"#!/usr/bin/env bash\n\nhelpFunc () {\n    echo \"Usage: $0 -f FILE -i DEVICE_ID -p PORT -t ETH_TYPE -a IP_ADDR\"\n    echo \"    -f the file path of the template\"\n    echo \"    -i the device id of the switch\"\n    echo \"    -p the port of the switch\"\n    echo \"    -t the type of ETH frame header\"\n    echo \"    -d the destination ip address\"\n    exit 1\n}\n\nFILE='./template/template.json'\nDEVICE_ID='of:0000000000000001'\nPORT='1'\nETH_TYPE='0x0800'\nDST_IP='10.0.0.1'\nIP_MASK='32'\n\n# Parse options\nwhile getopts 'f:i:p:t:d:' flag; do\n  case \"${flag}\" in\n    f) FILE=\"${OPTARG}\" ;;\n    i) DEVICE_ID=\"${OPTARG}\" ;;\n    p) PORT=\"${OPTARG}\" ;;\n    t) ETH_TYPE=\"${OPTARG}\" ;;\n    d) DST_IP=\"${OPTARG}\" ;;\n    ?) helpFunc ;;\n  esac\ndone\n\nDST_IP_ADDR=\"${DST_IP}/${IP_MASK}\"\n\n# Check if the eth type is not arp\nif [[ \"${ETH_TYPE}\" != \"0x0806\" ]]\nthen\n  PY_SCRIPT=\"import sys, json; \\\n             data = json.load(open('${FILE}', 'r'));\\\n             data['deviceId'] = '${DEVICE_ID}'; \\\n             data['treatment']['instructions'][0]['port'] = '${PORT}'; \\\n             data['selector']['criteria'][0]['ethType'] = '${ETH_TYPE}'; \\\n             data['selector']['criteria'][1]['ip'] = '${DST_IP_ADDR}'; \\\n             print(json.dumps(data));\"\nelse\n  PY_SCRIPT=\"import sys, json; \\\n             data = json.load(open('${FILE}', 'r'));\\\n             data['deviceId'] = '${DEVICE_ID}'; \\\n             data['treatment']['instructions'][0]['port'] = 'FLOOD'; \\\n             data['selector']['criteria'][0]['ethType'] = '${ETH_TYPE}'; \\\n             data['selector']['criteria'].pop(); \\\n             print(json.dumps(data));\"\nfi\n# Build template based on options\npython3 -c \"${PY_SCRIPT}\"\n")),(0,a.kt)("h3",{id:"add-rules-and-send-request"},"Add Rules and Send Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#/usr/bin/env bash\n\n# First, build the all files using the template\n## Basic request info\nCONTENT_TYPE="content-type:application/json"\nAPI_PATH="http://localhost:8181/onos/v1/flows/"\nAUTH="onos:rocks"\n\n## Switches info\nSW1_ID="of:0000000000000001"\nSW2_ID="of:0000000000000002"\nSW3_ID="of:0000000000000003"\nH1_IP="10.0.0.1"\nH2_IP="10.0.0.2"\nH3_IP="10.0.0.3"\nPORT_1="1"\nPORT_2="2"\nPORT_3="3"\nARP_ETH_TYPE="0x0806"\n\n## Generated data info\nGEN_DIR="./generated/"\nSW1_DIR="sw1/"\nSW2_DIR="sw2/"\nTO_1_RULE="to-1.json"\nTO_2_RULE="to-2.json"\nARP_RULE="arp.json"\n\n## Remove old rules\nrm -r "${GEN_DIR}"\n\n## Create directory in case of not existing\nmkdir -p "${GEN_DIR}${SW1_DIR}"\nmkdir -p "${GEN_DIR}${SW2_DIR}"\n\n# Function for sending request\n## $1 = switch id\n## $2 = rule path\nadd_rule () {\n  curl -X POST -H "${CONTENT_TYPE}" \\\n      "${API_PATH}${1}" \\\n      -d "@${2}" --user "${AUTH}"\n}\n\n# Switch 1 Rules\n## Rule1: send packet from H2 to H1 through SW1 port 1\n./build-rule.sh -i "${SW1_ID}" -p "${PORT_1}" -d "${H1_IP}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW1_DIR}${TO_1_RULE}"\n\n## Rule2: send packet from H1 to H2 through SW1 port 2\n./build-rule.sh -i "${SW1_ID}" -p "${PORT_2}" -d "${H2_IP}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW1_DIR}${TO_2_RULE}"\n\n## Rule3: local network arp broadcast\n./build-rule.sh -i "${SW1_ID}" -t "${ARP_ETH_TYPE}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW1_DIR}${ARP_RULE}"\n\n# Switch 2 Rules\n## Rule1: send packet from H2 to H1 through SW1 port 1\n./build-rule.sh -i "${SW2_ID}" -p "${PORT_1}" -d "${H1_IP}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW2_DIR}${TO_1_RULE}"\n\n## Rule2: send packet from H1 to H2 through SW1 port 2\n./build-rule.sh -i "${SW2_ID}" -p "${PORT_2}" -d "${H2_IP}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW2_DIR}${TO_2_RULE}"\n\n## Rule3: local network arp broadcast\n./build-rule.sh -i "${SW2_ID}" -t "${ARP_ETH_TYPE}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW2_DIR}${ARP_RULE}"\n\n# Send requests to ONOS REST API\n## Add rules for SW1\nadd_rule "${SW1_ID}" "${GEN_DIR}${SW1_DIR}${TO_1_RULE}"\nadd_rule "${SW1_ID}" "${GEN_DIR}${SW1_DIR}${TO_2_RULE}"\nadd_rule "${SW1_ID}" "${GEN_DIR}${SW1_DIR}${ARP_RULE}"\n\n## Add rules for SW2\nadd_rule "${SW2_ID}" "${GEN_DIR}${SW2_DIR}${TO_1_RULE}"\nadd_rule "${SW2_ID}" "${GEN_DIR}${SW2_DIR}${TO_2_RULE}"\nadd_rule "${SW2_ID}" "${GEN_DIR}${SW2_DIR}${ARP_RULE}"\n')),(0,a.kt)("h2",{id:"lab-exercise"},"Lab Exercise"),(0,a.kt)("p",null,"In this lab, we create a topology with 3 nodes and 2 end hosts."),(0,a.kt)("p",null,"Note: Sometimes ONOS just doesn't work well. Try to clean up all resources in ONOS and mininet and restart whole services."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"3-topo",src:n(5081).Z})),(0,a.kt)("h3",{id:"onos-1"},"ONOS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Setup ONOS server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"local> cd onos-2.5.0/\nlocal> ./bin/onos-service start\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Login to CLI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"local> cd onos-2.5.0/\nlocal> ./bin/onos\n# Then you will see\n# onos> \n\n# Then activate openflow\nonos> app activate org.onosproject.openflow\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Login to ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:8181/onos/ui/login.html")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"onos:rocks")),(0,a.kt)("li",{parentName:"ul"},"Cleanup")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"onos> wipe-out please\nonos> logout\n")),(0,a.kt)("h3",{id:"mininet-1"},"Mininet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You'd better do mininet setup after you complete onos setup (or mininet will hang on there waiting for the controller to start)"),(0,a.kt)("li",{parentName:"ul"},"Setup")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mininet@mininet-vm> sudo mn --mac --switch ovsk,protocols=OpenFlow13 --controller=remote,ip=192.168.100.1 --custom ./mininet/custom/3-topo.py --topo mytopo\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ping All (to show hosts)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mininet@mininet-vm> pingall\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cleanup")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mininet@mininet-vm> sudo mn -c\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Topology")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from mininet.topo import Topo\n\nclass MyTopo( Topo ):\n    \"3-SW topology example.\"\n\n    def build( self ):\n        \"Create custom topo.\"\n\n        # Add hosts and switches\n        leftHost = self.addHost( 'h1' )\n        rightHost = self.addHost( 'h2' )\n        leftSwitch = self.addSwitch( 's1' )\n        midSwitch = self.addSwitch( 's3' )\n        rightSwitch = self.addSwitch( 's2' )\n\n        # Add links\n        self.addLink( leftHost, leftSwitch )\n        self.addLink( leftSwitch, rightSwitch )\n        self.addLink( rightSwitch, rightHost )\n        self.addLink( leftSwitch, midSwitch )\n        self.addLink( rightSwitch, midSwitch )\n\n\ntopos = { 'mytopo': ( lambda: MyTopo() ) }\n")),(0,a.kt)("h3",{id:"adding-rules"},"Adding Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We reuse the ",(0,a.kt)("inlineCode",{parentName:"li"},"build-rule.sh")," file in the previous section."),(0,a.kt)("li",{parentName:"ul"},"Notice that we add 2 additional rules for ",(0,a.kt)("inlineCode",{parentName:"li"},"SW3")," so that it can exchange packets between each side."),(0,a.kt)("li",{parentName:"ul"},"Plus, we modify the forwarding port of ",(0,a.kt)("inlineCode",{parentName:"li"},"SW1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"SW2")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"PORT_3"),", where they connects to ",(0,a.kt)("inlineCode",{parentName:"li"},"SW3"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="lab-add-rules.sh"',title:'"lab-add-rules.sh"'},'#/usr/bin/env bash\n\n# First, build the all files using the template\n## Basic request info\nCONTENT_TYPE="content-type:application/json"\nAPI_PATH="http://localhost:8181/onos/v1/flows/"\nAUTH="onos:rocks"\n\n## Switches info\nSW1_ID="of:0000000000000001"\nSW2_ID="of:0000000000000002"\nSW3_ID="of:0000000000000003"\nH1_IP="10.0.0.1"\nH2_IP="10.0.0.2"\nH3_IP="10.0.0.3"\nPORT_1="1"\nPORT_2="2"\nPORT_3="3"\nARP_ETH_TYPE="0x0806"\n\n## Generated data info\nGEN_DIR="./generated/"\nSW1_DIR="sw1/"\nSW2_DIR="sw2/"\nSW3_DIR="sw3/"\nTO_1_RULE="to-1.json"\nTO_2_RULE="to-2.json"\nARP_RULE="arp.json"\n\n## Remove old rules\nrm -r "${GEN_DIR}"\n\n## Create directory in case of not existing\nmkdir -p "${GEN_DIR}${SW1_DIR}"\nmkdir -p "${GEN_DIR}${SW2_DIR}"\nmkdir -p "${GEN_DIR}${SW3_DIR}"\n\n# Function for sending request\n## $1 = switch id\n## $2 = rule path\nadd_rule () {\n  curl -X POST -H "${CONTENT_TYPE}" \\\n      "${API_PATH}${1}" \\\n      -d "@${2}" --user "${AUTH}"\n}\n\n# Switch 1 Rules\n## Rule1: send packet from H2 to H1 through SW1 port 1\n./build-rule.sh -i "${SW1_ID}" -p "${PORT_1}" -d "${H1_IP}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW1_DIR}${TO_1_RULE}"\n\n## Rule2: send packet from H1 to H2 through SW1 port 3 (longer path)\n./build-rule.sh -i "${SW1_ID}" -p "${PORT_3}" -d "${H2_IP}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW1_DIR}${TO_2_RULE}"\n\n## Rule3: local network arp broadcast\n./build-rule.sh -i "${SW1_ID}" -t "${ARP_ETH_TYPE}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW1_DIR}${ARP_RULE}"\n\n# Switch 2 Rules\n## Rule1: send packet from H2 to H1 through SW1 port 3 (longer path)\n./build-rule.sh -i "${SW2_ID}" -p "${PORT_3}" -d "${H1_IP}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW2_DIR}${TO_1_RULE}"\n\n## Rule2: send packet from H1 to H2 through SW1 port 2\n./build-rule.sh -i "${SW2_ID}" -p "${PORT_2}" -d "${H2_IP}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW2_DIR}${TO_2_RULE}"\n\n## Rule3: local network arp broadcast\n./build-rule.sh -i "${SW2_ID}" -t "${ARP_ETH_TYPE}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW2_DIR}${ARP_RULE}"\n\n# Switch 3 rules\n## Rule1: send packet from H1 to H2 through SW3 port 2\n./build-rule.sh -i "${SW3_ID}" -p "${PORT_2}" -d "${H2_IP}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW3_DIR}${TO_2_RULE}"\n\n## Rule2: send packet from H1 to H2 through SW3 port 1\n./build-rule.sh -i "${SW3_ID}" -p "${PORT_1}" -d "${H1_IP}" \\\n    | python3 -m json.tool > "${GEN_DIR}${SW3_DIR}${TO_1_RULE}"\n\n# Send requests to ONOS REST API\n## Add rules for SW1\nadd_rule "${SW1_ID}" "${GEN_DIR}${SW1_DIR}${TO_1_RULE}"\nadd_rule "${SW1_ID}" "${GEN_DIR}${SW1_DIR}${TO_2_RULE}"\nadd_rule "${SW1_ID}" "${GEN_DIR}${SW1_DIR}${ARP_RULE}"\n\n## Add rules for SW2\nadd_rule "${SW2_ID}" "${GEN_DIR}${SW2_DIR}${TO_1_RULE}"\nadd_rule "${SW2_ID}" "${GEN_DIR}${SW2_DIR}${TO_2_RULE}"\nadd_rule "${SW2_ID}" "${GEN_DIR}${SW2_DIR}${ARP_RULE}"\n\n## Add rules for SW2\nadd_rule "${SW3_ID}" "${GEN_DIR}${SW3_DIR}${TO_1_RULE}"\nadd_rule "${SW3_ID}" "${GEN_DIR}${SW3_DIR}${TO_2_RULE}"\n')),(0,a.kt)("h2",{id:"results"},"Results"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Topology screenshot")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"3-topo-screenshot",src:n(7078).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ping result")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ping-result",src:n(9723).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SW1 flow table")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sw1-flow-table",src:n(4456).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SW2 flow table")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sw2-flow-table",src:n(2062).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SW3 flow table")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sw3-flow-table",src:n(6557).Z})),(0,a.kt)("p",null,"Note: The flow table of ",(0,a.kt)("inlineCode",{parentName:"p"},"SW1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SW2")," show be symmetric regarding new rules we just added."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10244324"},"https://ithelp.ithome.com.tw/articles/10244324")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10243780"},"https://ithelp.ithome.com.tw/articles/10243780")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10249438?sc=rss.iron"},"https://ithelp.ithome.com.tw/articles/10249438?sc=rss.iron")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hackmd.io/@nosignal/rkXUpWMrz?type=view"},"https://hackmd.io/@nosignal/rkXUpWMrz?type=view")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/52504825/how-to-install-jdk-11-under-ubuntu"},"https://stackoverflow.com/questions/52504825/how-to-install-jdk-11-under-ubuntu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mininet/mininet/blob/master/custom/topo-2sw-2host.py"},"https://github.com/mininet/mininet/blob/master/custom/topo-2sw-2host.py"))))}c.isMDXComponent=!0},5529:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2-topo-e70a2cef5560873b2ef4add2f6e5efc8.png"},7078:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3-topo-screenshot-b9570c0f0fe60ead0d266da4f8c4df09.png"},5081:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3-topo-8b1c63bb66ca4ea3a74888a8b3f5dd3b.png"},9723:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ping-result-a067f6b9bc8f1ae3cf7d1dcf4bb98e9a.png"},4456:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sw1-flow-table-086fcda5018232e428a98c5ff7c56575.png"},2062:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sw2-flow-table-14629a9be0fc6fa8b6cf2c0507b1bde5.png"},6557:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sw3-flow-table-d02b87e6c1b88615ddb0ab83369f77d5.png"}}]);