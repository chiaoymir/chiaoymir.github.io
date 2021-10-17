(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5236],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(k,s(s({ref:t},m),{},{components:n})):a.createElement(k,s({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},752:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),s=["components"],l={},o="Autoscaling",c={unversionedId:"Cloud/Kubernetes/Basics/Autoscaling",id:"Cloud/Kubernetes/Basics/Autoscaling",isDocsHomePage:!1,title:"Autoscaling",description:"- Scale automatically based on some metrics (CPU utilization, memory, ...)",source:"@site/docs/Cloud/Kubernetes/Basics/Autoscaling.md",sourceDirName:"Cloud/Kubernetes/Basics",slug:"/Cloud/Kubernetes/Basics/Autoscaling",permalink:"/docs/Cloud/Kubernetes/Basics/Autoscaling",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tips",permalink:"/docs/Cloud/Kubernetes/Advanced/Tips"},next:{title:"ConfidMaps and Secrets",permalink:"/docs/Cloud/Kubernetes/Basics/Config"}},m=[{value:"Metrics",id:"metrics",children:[]},{value:"Metric Server Source Code",id:"metric-server-source-code",children:[]},{value:"Application Source Code",id:"application-source-code",children:[{value:"Explanation",id:"explanation",children:[]}]},{value:"Commands",id:"commands",children:[]},{value:"References",id:"references",children:[]}],p={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"autoscaling"},"Autoscaling"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scale automatically based on some metrics (CPU utilization, memory, ...)"),(0,i.kt)("li",{parentName:"ul"},"Set target CPU along with min and max replicas"),(0,i.kt)("li",{parentName:"ul"},"Target CPU is expressed as a percentage of the Pod's request"),(0,i.kt)("li",{parentName:"ul"},"The autoscaler watch the average resource usage in the deployment, not the host machine")),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Autoscaling depends on metrics being collected"),(0,i.kt)("li",{parentName:"ul"},"Metrics server is one solution for collecting metrics, maintained by Kubernetes itself"),(0,i.kt)("li",{parentName:"ul"},"Several manifest file are used to deploy Metrics Server")),(0,i.kt)("h2",{id:"metric-server-source-code"},"Metric Server Source Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Put the following files under ",(0,i.kt)("inlineCode",{parentName:"li"},"metrics-server")," directory.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="aggregated-metrics-reader.yaml"',title:'"aggregated-metrics-reader.yaml"'},'kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: system:aggregated-metrics-reader\n  labels:\n    rbac.authorization.k8s.io/aggregate-to-view: "true"\n    rbac.authorization.k8s.io/aggregate-to-edit: "true"\n    rbac.authorization.k8s.io/aggregate-to-admin: "true"\nrules:\n- apiGroups: ["metrics.k8s.io"]\n  resources: ["pods"]\n  verbs: ["get", "list", "watch"]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="auth-delegator.yaml"',title:'"auth-delegator.yaml"'},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: metrics-server:system:auth-delegator\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: system:auth-delegator\nsubjects:\n- kind: ServiceAccount\n  name: metrics-server\n  namespace: kube-system\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="auth-reader.yaml"',title:'"auth-reader.yaml"'},"apiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: metrics-server-auth-reader\n  namespace: kube-system\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n  name: extension-apiserver-authentication-reader\nsubjects:\n- kind: ServiceAccount\n  name: metrics-server\n  namespace: kube-system\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resource-reader.yaml"',title:'"resource-reader.yaml"'},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: system:metrics-server\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  - nodes\n  - nodes/stats\n  verbs:\n  - get\n  - list\n  - watch\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: system:metrics-server\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: system:metrics-server\nsubjects:\n- kind: ServiceAccount\n  name: metrics-server\n  namespace: kube-system\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metrics-apiservice.yaml"',title:'"metrics-apiservice.yaml"'},"apiVersion: apiregistration.k8s.io/v1\nkind: APIService\nmetadata:\n  name: v1beta1.metrics.k8s.io\nspec:\n  service:\n    name: metrics-server\n    namespace: kube-system\n  group: metrics.k8s.io\n  version: v1beta1\n  insecureSkipTLSVerify: true\n  groupPriorityMinimum: 100\n  versionPriority: 100\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metrics-server-deployment.yaml"',title:'"metrics-server-deployment.yaml"'},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: metrics-server\n  namespace: kube-system\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: metrics-server\n  namespace: kube-system\n  labels:\n    k8s-app: metrics-server\nspec:\n  selector:\n    matchLabels:\n      k8s-app: metrics-server\n  template:\n    metadata:\n      name: metrics-server\n      labels:\n        k8s-app: metrics-server\n    spec:\n      serviceAccountName: metrics-server\n      volumes:\n      # mount in tmp so we can safely use from-scratch images and/or read-only containers\n      - name: tmp-dir\n        emptyDir: {}\n      containers:\n      - name: metrics-server\n        image: k8s.gcr.io/metrics-server-amd64:v0.3.3\n        imagePullPolicy: Always\n        command:\n        - /metrics-server\n        - --kubelet-insecure-tls\n        - --kubelet-preferred-address-types=InternalIP \n        volumeMounts:\n        - name: tmp-dir\n          mountPath: /tmp\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metric-servier-service.yaml"',title:'"metric-servier-service.yaml"'},'apiVersion: v1\nkind: Service\nmetadata:\n  name: metrics-server\n  namespace: kube-system\n  labels:\n    kubernetes.io/name: "Metrics-server"\n    kubernetes.io/cluster-service: "true"\nspec:\n  selector:\n    k8s-app: metrics-server\n  ports:\n  - port: 443\n    protocol: TCP\n    targetPort: 443\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apply all these file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f metrics-server/\n")),(0,i.kt)("h2",{id:"application-source-code"},"Application Source Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We use the ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployment")," section code in this note too."),(0,i.kt)("li",{parentName:"ul"},"Another 2 file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="6.1-app_tier_cpu_request.yaml"',title:'"6.1-app_tier_cpu_request.yaml"'},"apiVersion: v1\nkind: Service\nmetadata:\n  name: app-tier\n  labels:\n    app: microservices\nspec:\n  ports:\n  - port: 8080\n  selector:\n    tier: app\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app-tier\n  labels:\n    app: microservices\n    tier: app\nspec:\n  replicas: 5\n  selector:\n    matchLabels:\n      tier: app\n  template:\n    metadata:\n      labels:\n        app: microservices\n        tier: app\n    spec:\n      containers:\n      - name: server\n        image: lrakai/microservices:server-v1\n        ports:\n          - containerPort: 8080\n        resources:\n          requests:\n            cpu: 20m # 20 milliCPU / 0.02 CPU\n        env:\n          - name: REDIS_URL\n            # Environment variable service discovery\n            # Naming pattern:\n            #   IP address: <all_caps_service_name>_SERVICE_HOST\n            #   Port: <all_caps_service_name>_SERVICE_PORT\n            #   Named Port: <all_caps_service_name>_SERVICE_PORT_<all_caps_port_name>\n            value: redis://$(DATA_TIER_SERVICE_HOST):$(DATA_TIER_SERVICE_PORT_REDIS)\n            # In multi-container example value was\n            # value: redis://localhost:6379 \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="6.2-autoscale.yaml"',title:'"6.2-autoscale.yaml"'},"apiVersion: autoscaling/v1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: app-tier\n  labels:\n    app: microservices\n    tier: app\nspec:\n  maxReplicas: 5\n  minReplicas: 1\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: app-tier\n  targetCPUUtilizationPercentage: 70\n\n# Equivalent to\n# kubectl autoscale deployment app-tier --max=5 --min=1 --cpu-percent=70\n")),(0,i.kt)("h3",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have to set the reqeust resource option in the deployment to let autoscaler works"),(0,i.kt)("li",{parentName:"ul"},"We can set ",(0,i.kt)("inlineCode",{parentName:"li"},"minReplicas")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"maxReplicas")," to specify the lower and upper bound of the autoscaler"),(0,i.kt)("li",{parentName:"ul"},"And we have to set the ",(0,i.kt)("inlineCode",{parentName:"li"},"targetCPUUtilizationPercentage")," to tell autoscaler when to scale up or down")),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To verify the metric server is working")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n deployments top pods\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apply the new app-tier file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n deployments apply -f 6.1-app_tier_cpu_request.yaml\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apply the autoscaler file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n deployments apply -f 6.2-autoscale.yaml\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Monitor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Install watch using: brew install watch\nwatch -n 1 kubectl -n deployments get pods\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See all api resources")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl api-resources\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See the information of the autoscaler")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n deployments get hpa\nkubectl -n deployments describe hpa\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Edit the config (ephemeral and not recommended)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n deployments edit hpa\n")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/metrics-server"},"https://github.com/kubernetes-sigs/metrics-server"))))}u.isMDXComponent=!0}}]);