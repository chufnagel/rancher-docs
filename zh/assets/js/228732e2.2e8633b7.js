"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55831],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,f=m["".concat(c,".").concat(u)]||m[u]||l[u]||i;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},42852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"1. Configuring Microsoft AD FS for Rancher"},o=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher",title:"1. Configuring Microsoft AD FS for Rancher",description:"Before configuring Rancher to support AD FS users, you must add Rancher as a relying party trust in AD FS.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher.md",tags:[],version:"2.5",lastUpdatedAt:1666124923,formattedLastUpdatedAt:"2022\u5e7410\u670818\u65e5",frontMatter:{title:"1. Configuring Microsoft AD FS for Rancher"},sidebar:"tutorialSidebar",previous:{title:"Configuring Microsoft Active Directory Federation Service (SAML)",permalink:"/zh/v2.5/pages-for-subheaders/configure-microsoft-ad-federation-service-saml"},next:{title:"2. Configuring Rancher for Microsoft AD FS",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs"}},c={},p=[{value:"Next: Configuring Rancher for Microsoft AD FS",id:"next-configuring-rancher-for-microsoft-ad-fs",level:3}],d={toc:p};function l(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Before configuring Rancher to support AD FS users, you must add Rancher as a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/technical-reference/understanding-key-ad-fs-concepts"},"relying party trust")," in AD FS."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log into your AD server as an administrative user.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the ",(0,n.kt)("strong",{parentName:"p"},"AD FS Management")," console. Select ",(0,n.kt)("strong",{parentName:"p"},"Add Relying Party Trust...")," from the ",(0,n.kt)("strong",{parentName:"p"},"Actions")," menu and click ",(0,n.kt)("strong",{parentName:"p"},"Start"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(86963).Z,width:"1802",height:"1292"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Enter data about the relying party manually")," as the option for obtaining data about the relying party."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(26269).Z,width:"2280",height:"1840"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your desired ",(0,n.kt)("strong",{parentName:"p"},"Display name")," for your Relying Party Trust. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"Rancher"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(64869).Z,width:"1460",height:"1178"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"AD FS profile")," as the configuration profile for your relying party trust."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(96377).Z,width:"2210",height:"1782"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Leave the ",(0,n.kt)("strong",{parentName:"p"},"optional token encryption certificate")," empty, as Rancher AD FS will not be using one."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(59624).Z,width:"1460",height:"1178"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Enable support for the SAML 2.0 WebSSO protocol"),"\nand enter ",(0,n.kt)("inlineCode",{parentName:"p"},"https://<rancher-server>/v1-saml/adfs/saml/acs")," for the service URL."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:a(77487).Z,width:"2362",height:"1904"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add ",(0,n.kt)("inlineCode",{parentName:"p"},"https://<rancher-server>/v1-saml/adfs/saml/metadata")," as the ",(0,n.kt)("strong",{parentName:"p"},"Relying party trust identifier"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(16864).Z,width:"1460",height:"1178"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This tutorial will not cover multi-factor authentication; please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/configure-additional-authentication-methods-for-ad-fs"},"Microsoft documentation")," if you would like to configure multi-factor authentication."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(51097).Z,width:"2300",height:"1856"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From ",(0,n.kt)("strong",{parentName:"p"},"Choose Issuance Authorization RUles"),", you may select either of the options available according to use case. However, for the purposes of this guide, select ",(0,n.kt)("strong",{parentName:"p"},"Permit all users to access this relying party"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(40041).Z,width:"2248",height:"1812"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After reviewing your settings, select ",(0,n.kt)("strong",{parentName:"p"},"Next")," to add the relying party trust."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(52737).Z,width:"2468",height:"1992"})))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Open the Edit Claim Rules...")," and click ",(0,n.kt)("strong",{parentName:"p"},"Close"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(33765).Z,width:"2468",height:"1992"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Issuance Transform Rules")," tab, click ",(0,n.kt)("strong",{parentName:"p"},"Add Rule..."),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(36445).Z,width:"1822",height:"1992"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Send LDAP Attributes as Claims")," as the ",(0,n.kt)("strong",{parentName:"p"},"Claim rule template"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(14568).Z,width:"2476",height:"1994"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set the ",(0,n.kt)("strong",{parentName:"p"},"Claim rule name")," to your desired name (for example, ",(0,n.kt)("inlineCode",{parentName:"p"},"Rancher Attributes"),") and select ",(0,n.kt)("strong",{parentName:"p"},"Active Directory")," as the ",(0,n.kt)("strong",{parentName:"p"},"Attribute store"),". Create the following mapping to reflect the table below:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"LDAP Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Outgoing Claim Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Given-Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Given Name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"User-Principal-Name"),(0,n.kt)("td",{parentName:"tr",align:null},"UPN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Token-Groups - Qualified by Long Domain Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SAM-Account-Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name")))),(0,n.kt)("br",null),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(617).Z,width:"2418",height:"1950"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the ",(0,n.kt)("inlineCode",{parentName:"p"},"federationmetadata.xml")," from your AD server at:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://<AD_SERVER>/federationmetadata/2007-06/federationmetadata.xml\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," You've added Rancher as a relying trust party. Now you can configure Rancher to leverage AD."),(0,n.kt)("h3",{id:"next-configuring-rancher-for-microsoft-ad-fs"},(0,n.kt)("a",{parentName:"h3",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs"},"Next: Configuring Rancher for Microsoft AD FS")))}l.isMDXComponent=!0},52737:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-add-rpt-10-f251c1490ea83fd5e90a136c3ca9e78e.png"},33765:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-add-rpt-11-0b255bafa725c47abf5419e666439363.png"},26269:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-add-rpt-2-045a7174ea30f52b5b71232c1bd12ded.png"},64869:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-add-rpt-3-b6de253a652c53824bb45613bb0292e7.png"},96377:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-add-rpt-4-1a78ce3171a031373bc7d2eb587bd00b.png"},59624:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-add-rpt-5-cab07c21d066acfd871d9accf055aa28.png"},77487:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-add-rpt-6-443b7af8916d88aae16474ad41b38f29.png"},16864:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-add-rpt-7-801b286a6dbbd3770afe29372eac4936.png"},51097:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-add-rpt-8-e16f001259ce86d0ac0fe2cc49c3e130.png"},40041:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-add-rpt-9-34b5197a336bc587bb1017cf991a171c.png"},14568:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-add-tcr-1-519ff235b85fff9d7c768bbb96646fe1.png"},617:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-add-tcr-2-1df3e491a28f8cbd8cbe305d2617ac6d.png"},36445:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-edit-cr-be1304c7e7760b7f34abd3967cf8eb21.png"},86963:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adfs-overview-c81642c79ea4a6a28efd8f2574f50cfd.png"}}]);