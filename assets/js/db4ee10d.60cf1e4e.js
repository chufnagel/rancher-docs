"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[4895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,v=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return r?a.createElement(v,s(s({ref:t},p),{},{components:r})):a.createElement(v,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"Harvester Integration"},s=void 0,o={unversionedId:"integrations-in-rancher/harvester",id:"integrations-in-rancher/harvester",title:"Harvester Integration",description:"Introduced in Rancher v2.6.1, Harvester is an open-source hyper-converged infrastructure (HCI) software built on Kubernetes. Harvester installs on bare metal servers and provides integrated virtualization and distributed storage capabilities. Although Harvester operates using Kubernetes, it does not require users to know Kubernetes concepts, making it a more user-friendly application.",source:"@site/docs/integrations-in-rancher/harvester.md",sourceDirName:"integrations-in-rancher",slug:"/integrations-in-rancher/harvester",permalink:"/integrations-in-rancher/harvester",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/harvester.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"Harvester Integration"},sidebar:"tutorialSidebar",previous:{title:"Using Fleet Behind a Proxy",permalink:"/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy"},next:{title:"Istio",permalink:"/pages-for-subheaders/istio"}},l={},u=[{value:"Feature Flag",id:"feature-flag",level:3},{value:"Harvester Node Driver",id:"harvester-node-driver",level:3},{value:"Limitations",id:"limitations",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Introduced in Rancher v2.6.1, ",(0,n.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/"},"Harvester")," is an open-source hyper-converged infrastructure (HCI) software built on Kubernetes. Harvester installs on bare metal servers and provides integrated virtualization and distributed storage capabilities. Although Harvester operates using Kubernetes, it does not require users to know Kubernetes concepts, making it a more user-friendly application."),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"New in v2.6.3"))),(0,n.kt)("p",null,"Harvester is GA. Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Harvester release notes")," for all updates."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"feature-flag"},"Feature Flag"),(0,n.kt)("p",null,"The Harvester feature flag is used to manage access to the Virtualization Management (VM) page in Rancher where users can navigate directly to Harvester clusters and access the Harvester UI. The Harvester feature flag is enabled by default. Click ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/enable-experimental-features"},"here")," for more information on feature flags in Rancher."),(0,n.kt)("p",null,"To navigate to the Harvester cluster, click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Virtualization Management"),". From Harvester Clusters page, click one of the clusters listed to go to the single Harvester cluster view."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If the Harvester feature flag is enabled, Harvester clusters will be filtered out from any pages or apps (such as Fleet and the multi-cluster app) that list Kubernetes clusters.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If the Harvester feature flag is disabled, and a Harvester cluster is imported, the Harvester cluster will be shown in the Rancher cluster list in the Cluster Management page. Harvester clusters will only be shown on the cluster list when the feature flag is off.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"With the Harvester integration, Harvester clusters can now be imported into Rancher as a cluster type ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Users may import a Harvester cluster only on the Virtualization Management page. Importing a cluster on the Cluster Management page is not supported, and a warning will advise you to return to the VM page to do so."))),(0,n.kt)("h3",{id:"harvester-node-driver"},"Harvester Node Driver"),(0,n.kt)("p",null,"As of Rancher v2.6.3, the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v0.3/rancher/node-driver/"},"Harvester node driver")," is GA for RKE and RKE2 options in Rancher. The node driver is available whether or not the Harvester feature flag is enabled. Note that the node driver is off by default. Users may create RKE or RKE2 clusters on Harvester only from the Cluster Management page."),(0,n.kt)("p",null,"Harvester allows ",(0,n.kt)("inlineCode",{parentName:"p"},".ISO")," images to be uploaded and displayed through the Harvester UI, but this is not supported in the Rancher UI. This is because ",(0,n.kt)("inlineCode",{parentName:"p"},".ISO")," images usually require additional setup that interferes with a clean deployment (without requiring user intervention), and they are not typically used in cloud environments."),(0,n.kt)("p",null,"Click ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/about-provisioning-drivers#node-drivers"},"here")," for more information on node drivers in Rancher."),(0,n.kt)("h3",{id:"limitations"},"Limitations"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Applicable to Rancher v2.6.1 and v2.6.2 only:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Harvester v0.3.0 doesn\u2019t support air-gapped environment installation."),(0,n.kt)("li",{parentName:"ul"},"Harvester v0.3.0 doesn\u2019t support upgrade from v0.2.0 nor upgrade to v1.0.0.")),(0,n.kt)("hr",null))}c.isMDXComponent=!0}}]);