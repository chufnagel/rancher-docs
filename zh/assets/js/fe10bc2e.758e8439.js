"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[29449],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(i,".").concat(h)]||p[h]||c[h]||l;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},82744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={title:"Kubernetes Installation Using Helm 2"},o=void 0,s={unversionedId:"pages-for-subheaders/helm2",id:"version-2.0-2.4/pages-for-subheaders/helm2",title:"Kubernetes Installation Using Helm 2",description:"After Helm 3 was released, the Rancher installation instructions were updated to use Helm 3.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm2",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Kubernetes Installation Using Helm 2"},sidebar:"tutorialSidebar",previous:{title:"UI for Istio Virtual Services and Destination Rules",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features"},next:{title:"1. Create Nodes and Load Balancer",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-create-nodes-lb"}},i={},u=[{value:"Recommended Architecture",id:"recommended-architecture",level:2},{value:"Required Tools",id:"required-tools",level:2},{value:"Installation Outline",id:"installation-outline",level:2},{value:"Additional Install Options",id:"additional-install-options",level:2},{value:"Previous Methods",id:"previous-methods",level:2}],d={toc:u};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"After Helm 3 was released, the Rancher installation instructions were updated to use Helm 3."),(0,a.kt)("p",{parentName:"blockquote"},"If you are using Helm 2, we recommend ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"migrating to Helm 3")," because it is simpler to use and more secure than Helm 2."),(0,a.kt)("p",{parentName:"blockquote"},"This section provides a copy of the older high-availability Kubernetes Rancher installation instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.")),(0,a.kt)("p",null,"For production environments, we recommend installing Rancher in a high-availability configuration so that your user base can always access Rancher Server. When installed in a Kubernetes cluster, Rancher will integrate with the cluster's etcd database and take advantage of Kubernetes scheduling for high-availability."),(0,a.kt)("p",null,"This procedure walks you through setting up a 3-node cluster with Rancher Kubernetes Engine (RKE) and installing the Rancher chart with the Helm package manager."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important:")," The Rancher management server can only be run on an RKE-managed Kubernetes cluster. Use of Rancher on hosted Kubernetes or other providers is not supported.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important:")," For the best performance, we recommend a dedicated Kubernetes cluster for the Rancher management server. Running user workloads on this cluster is not advised. After deploying Rancher, you can ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"create or import clusters")," for running your workloads.")),(0,a.kt)("h2",{id:"recommended-architecture"},"Recommended Architecture"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DNS for Rancher should resolve to a Layer 4 load balancer (TCP)"),(0,a.kt)("li",{parentName:"ul"},"The Load Balancer should forward port TCP/80 and TCP/443 to all 3 nodes in the Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},"The Ingress controller will redirect HTTP to HTTPS and terminate SSL/TLS on port TCP/443."),(0,a.kt)("li",{parentName:"ul"},"The Ingress controller will forward traffic to port TCP/80 on the pod in the Rancher deployment.")),(0,a.kt)("figcaption",null,"Kubernetes Rancher install with layer 4 load balancer, depicting SSL termination at ingress controllers"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"High-availability Kubernetes Install",src:r(86089).Z,width:"1236",height:"525"})),(0,a.kt)("sup",null,"Kubernetes Rancher install with Layer 4 load balancer (TCP), depicting SSL termination at ingress controllers"),(0,a.kt)("h2",{id:"required-tools"},"Required Tools"),(0,a.kt)("p",null,"The following CLI tools are required for this install. Please make sure these tools are installed and available in your ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl")," - Kubernetes command-line tool."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/"},"rke")," - Rancher Kubernetes Engine, cli for building Kubernetes clusters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.helm.sh/using_helm/#installing-helm"},"helm")," - Package management for Kubernetes. Refer to the ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher.")),(0,a.kt)("h2",{id:"installation-outline"},"Installation Outline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-create-nodes-lb"},"Create Nodes and Load Balancer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-kubernetes-rke"},"Install Kubernetes with RKE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-helm-init"},"Initialize Helm (tiller)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm-rancher"},"Install Rancher"))),(0,a.kt)("h2",{id:"additional-install-options"},"Additional Install Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on"))),(0,a.kt)("h2",{id:"previous-methods"},"Previous Methods"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on"},"RKE add-on install")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,a.kt)("p",{parentName:"blockquote"},"Please use the Rancher helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Kubernetes Install "),"."),(0,a.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the Helm chart.")))}c.isMDXComponent=!0},86089:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher2ha-109862fddef6042942f103cfc94d892b.svg"}}]);