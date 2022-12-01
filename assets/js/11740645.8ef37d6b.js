"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=c,m=p["".concat(o,".").concat(f)]||p[f]||l[f]||s;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(87462),c=(r(67294),r(3905));const s={title:"Kubernetes Security Best Practices"},a=void 0,i={unversionedId:"reference-guides/rancher-security/kubernetes-security-best-practices",id:"reference-guides/rancher-security/kubernetes-security-best-practices",title:"Kubernetes Security Best Practices",description:"Restricting cloud metadata API access",source:"@site/docs/reference-guides/rancher-security/kubernetes-security-best-practices.md",sourceDirName:"reference-guides/rancher-security",slug:"/reference-guides/rancher-security/kubernetes-security-best-practices",permalink:"/reference-guides/rancher-security/kubernetes-security-best-practices",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-security/kubernetes-security-best-practices.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Kubernetes Security Best Practices"},sidebar:"tutorialSidebar",previous:{title:"About rke2-selinux",permalink:"/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux"},next:{title:"Security Advisories and CVEs",permalink:"/reference-guides/rancher-security/security-advisories-and-cves"}},o={},u=[{value:"Restricting cloud metadata API access",id:"restricting-cloud-metadata-api-access",level:3}],d={toc:u};function l(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h3",{id:"restricting-cloud-metadata-api-access"},"Restricting cloud metadata API access"),(0,c.kt)("p",null,"Cloud providers such as AWS, Azure, DigitalOcean or GCP often expose metadata services locally to instances. By default, this endpoint is accessible by pods running on a cloud instance, including pods in hosted Kubernetes providers such as EKS, AKS, DigitalOcean Kubernetes or GKE, and can contain cloud credentials for that node, provisioning data such as kubelet credentials, or other sensitive data. To mitigate this risk when running on a cloud platform, follow the ",(0,c.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#restricting-cloud-metadata-api-access"},"Kubernetes security recommendations"),": limit permissions given to instance credentials, use network policies to restrict pod access to the metadata API, and avoid using provisioning data to deliver secrets."),(0,c.kt)("p",null,"It is advised to consult your cloud provider's security best practices for further recommendations and specific details on how to restrict access to cloud instance metadata API."),(0,c.kt)("p",null,"Further references: MITRE ATT&CK knowledge base on - ",(0,c.kt)("a",{parentName:"p",href:"https://attack.mitre.org/techniques/T1552/005/"},"Unsecured Credentials: Cloud Instance Metadata API"),"."))}l.isMDXComponent=!0}}]);