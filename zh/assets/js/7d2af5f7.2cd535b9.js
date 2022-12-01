"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,m=u["".concat(s,".").concat(c)]||u[c]||_[c]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>_,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"TLS Settings"},i=void 0,o={unversionedId:"reference-guides/installation-references/tls-settings",id:"version-2.0-2.4/reference-guides/installation-references/tls-settings",title:"TLS Settings",description:"In Rancher v2.1.7, the default TLS configuration changed to only accept TLS 1.2 and secure TLS cipher suites. TLS 1.3 and TLS 1.3 exclusive cipher suites are not supported.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/installation-references/tls-settings.md",sourceDirName:"reference-guides/installation-references",slug:"/reference-guides/installation-references/tls-settings",permalink:"/zh/v2.0-v2.4/reference-guides/installation-references/tls-settings",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/installation-references/tls-settings.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"2022\u5e7410\u670829\u65e5",frontMatter:{title:"TLS Settings"},sidebar:"tutorialSidebar",previous:{title:"Rancher Helm Chart Options",permalink:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options"},next:{title:"Feature Flags",permalink:"/zh/v2.0-v2.4/reference-guides/installation-references/feature-flags"}},s={},d=[{value:"Configuring TLS settings",id:"configuring-tls-settings",level:2},{value:"TLS Environment Variables",id:"tls-environment-variables",level:2},{value:"Legacy configuration",id:"legacy-configuration",level:2}],p={toc:d};function _(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Rancher v2.1.7, the default TLS configuration changed to only accept TLS 1.2 and secure TLS cipher suites. TLS 1.3 and TLS 1.3 exclusive cipher suites are not supported."),(0,a.kt)("h2",{id:"configuring-tls-settings"},"Configuring TLS settings"),(0,a.kt)("p",null,"The Audit Log is enabled and configured by passing environment variables to the Rancher server container. See the following to enable on your installation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/advanced-options#tls-settings"},"TLS settings in Docker options"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#tls-settings"},"TLS settings in Helm chart options")))),(0,a.kt)("h2",{id:"tls-environment-variables"},"TLS Environment Variables"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Available options"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_MIN_VERSION")),(0,a.kt)("td",{parentName:"tr",align:null},"Minimum TLS version"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1.2")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1.0"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"1.1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"1.2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_CIPHERS")),(0,a.kt)("td",{parentName:"tr",align:null},"Allowed TLS cipher suites"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305")),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"https://golang.org/pkg/crypto/tls/#pkg-constants"},"Golang tls constants"))))),(0,a.kt)("h2",{id:"legacy-configuration"},"Legacy configuration"),(0,a.kt)("p",null,"If you need to configure TLS the same way as it was before Rancher v2.1.7, please use the following settings:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Legacy value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_MIN_VERSION")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1.0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_CIPHERS")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_RSA_WITH_AES_128_GCM_SHA256,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_RSA_WITH_AES_256_GCM_SHA384,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_RSA_WITH_AES_128_CBC_SHA,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_RSA_WITH_AES_256_CBC_SHA,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"TLS_RSA_WITH_3DES_EDE_CBC_SHA"))))))}_.isMDXComponent=!0}}]);