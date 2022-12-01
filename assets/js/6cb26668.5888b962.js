"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[4947],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(o,".").concat(d)]||p[d]||c[d]||l;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),s=a(67392),o=a(7094),u=a(12466);const h="tabList__CuJ",c="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:i,values:p,groupId:d,className:m}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,s.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,o.U)(),[w,y]=(0,r.useState)(k),R=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=d){const e=v[d];null!=e&&e!==w&&g.some((t=>t.value===e))&&y(e)}const A=e=>{const t=e.currentTarget,a=R.indexOf(t),n=g[a].value;n!==w&&(E(t),y(n),null!=d&&N(d,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const a=R.indexOf(e.currentTarget)+1;t=R[a]??R[0];break}case"ArrowLeft":{const a=R.indexOf(e.currentTarget)-1;t=R[a]??R[R.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",h)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>R.push(e),onKeyDown:T,onClick:A},i,{className:(0,l.Z)("tabs__item",c,i?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},51346:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),i=a(85162);const s={title:"Enabling Experimental Features"},o=void 0,u={unversionedId:"pages-for-subheaders/enable-experimental-features",id:"version-2.0-2.4/pages-for-subheaders/enable-experimental-features",title:"Enabling Experimental Features",description:"Rancher includes some features that are experimental and disabled by default. You might want to enable these features, for example, if you decide that the benefits of using an unsupported storage type outweighs the risk of using an untested feature. Feature flags were introduced to allow you to try these features that are not enabled by default.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/enable-experimental-features.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/enable-experimental-features",permalink:"/v2.0-v2.4/pages-for-subheaders/enable-experimental-features",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/enable-experimental-features.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"Enabling Experimental Features"},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/v2.0-v2.4/pages-for-subheaders/advanced-options"},next:{title:"Running on ARM64 (Experimental)",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"}},h={},c=[{value:"Enabling Features when Starting Rancher",id:"enabling-features-when-starting-rancher",level:2},{value:"Rendering the Helm Chart for Air Gap Installations",id:"rendering-the-helm-chart-for-air-gap-installations",level:3},{value:"Enabling Features with the Rancher UI",id:"enabling-features-with-the-rancher-ui",level:2},{value:"Disabling Features with the Rancher UI",id:"disabling-features-with-the-rancher-ui",level:3},{value:"Enabling Features with the Rancher API",id:"enabling-features-with-the-rancher-api",level:2},{value:"Disabling Features with the Rancher API",id:"disabling-features-with-the-rancher-api",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rancher includes some features that are experimental and disabled by default. You might want to enable these features, for example, if you decide that the benefits of using an ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers"},"unsupported storage type")," outweighs the risk of using an untested feature. Feature flags were introduced to allow you to try these features that are not enabled by default."),(0,r.kt)("p",null,"The features can be enabled in three ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabling-features-when-starting-rancher"},"Enable features when starting Rancher.")," When installing Rancher with a CLI, you can use a feature flag to enable a feature by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabling-features-with-the-rancher-ui"},"Enable features from the Rancher UI")," in Rancher v2.3.3+ by going to the ",(0,r.kt)("strong",{parentName:"li"},"Settings")," page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabling-features-with-the-rancher-api"},"Enable features with the Rancher API")," after installing Rancher.")),(0,r.kt)("p",null,"Each feature has two values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A default value, which can be configured with a flag or environment variable from the command line"),(0,r.kt)("li",{parentName:"ul"},"A set value, which can be configured with the Rancher API or UI")),(0,r.kt)("p",null,"If no value has been set, Rancher uses the default value."),(0,r.kt)("p",null,"Because the API sets the actual value and the command line sets the default value, that means that if you enable or disable a feature with the API or UI, it will override any value set with the command line."),(0,r.kt)("p",null,"For example, if you install Rancher, then set a feature flag to true with the Rancher API, then upgrade Rancher with a command that sets the feature flag to false, the default value will still be false, but the feature will still be enabled because it was set with the Rancher API. If you then deleted the set value (true) with the Rancher API, setting it to NULL, the default value (false) would take effect. See the ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/installation-references/feature-flags"},"feature flags page")," for more information."),(0,r.kt)("h2",{id:"enabling-features-when-starting-rancher"},"Enabling Features when Starting Rancher"),(0,r.kt)("p",null,"When you install Rancher, enable the feature you want with a feature flag. The command is different depending on whether you are installing Rancher on a single node or if you are doing a Kubernetes Installation of Rancher."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Values set from the Rancher API will override the value passed in through the command line.")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kubernetes Install",mdxType:"TabItem"},(0,r.kt)("p",null,"When installing Rancher with a Helm chart, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--features")," option. In the below example, two features are enabled by passing the feature flag names names in a comma separated list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm install rancher-latest/rancher \\\n  --name rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set 'extraEnv[0].name=CATTLE_FEATURES' # Available as of v2.3.0\n  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true' # Available as of v2.3.0\n")),(0,r.kt)("p",null,"Note: If you are installing an alpha version, Helm requires adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--devel")," option to the command."),(0,r.kt)("h3",{id:"rendering-the-helm-chart-for-air-gap-installations"},"Rendering the Helm Chart for Air Gap Installations"),(0,r.kt)("p",null,"For an air gap installation of Rancher, you need to add a Helm chart repository and render a Helm template before installing Rancher with Helm. For details, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"air gap installation documentation.")),(0,r.kt)("p",null,"Here is an example of a command for passing in the feature flag names when rendering the Helm template. In the below example, two features are enabled by passing the feature flag names in a comma separated list."),(0,r.kt)("p",null,"The Helm 3 command is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n  --namespace cattle-system \\\n  --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n  --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n  --set ingress.tls.source=secret \\\n  --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Available as of v2.2.0, set a default private registry to be used in Rancher\n  --set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts\n  --set 'extraEnv[0].name=CATTLE_FEATURES' # Available as of v2.3.0\n  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true' # Available as of v2.3.0\n")),(0,r.kt)("p",null,"The Helm 2 command is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm template ./rancher-<VERSION>.tgz --output-dir . \\\n  --name rancher \\\n  --namespace cattle-system \\\n  --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n  --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n  --set ingress.tls.source=secret \\\n  --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Available as of v2.2.0, set a default private registry to be used in Rancher\n  --set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts\n  --set 'extraEnv[0].name=CATTLE_FEATURES' # Available as of v2.3.0\n  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true' # Available as of v2.3.0\n"))),(0,r.kt)(i.Z,{value:"Docker Install",mdxType:"TabItem"},(0,r.kt)("p",null,"When installing Rancher with Docker, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--features")," option. In the below example, two features are enabled by passing the feature flag names in a comma separated list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -d -p 80:80 -p 443:443 \\\n  --restart=unless-stopped \\\n  rancher/rancher:rancher-latest \\\n  --features=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true # Available as of v2.3.0\n")))),(0,r.kt)("h2",{id:"enabling-features-with-the-rancher-ui"},"Enabling Features with the Rancher UI"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Global")," view and click ",(0,r.kt)("strong",{parentName:"li"},"Settings.")),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Feature Flags")," tab. You will see a list of experimental features."),(0,r.kt)("li",{parentName:"ol"},"To enable a feature, go to the disabled feature you want to enable and click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee"," > Activate."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The feature is enabled."),(0,r.kt)("h3",{id:"disabling-features-with-the-rancher-ui"},"Disabling Features with the Rancher UI"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Global")," view and click ",(0,r.kt)("strong",{parentName:"li"},"Settings.")),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Feature Flags")," tab. You will see a list of experimental features."),(0,r.kt)("li",{parentName:"ol"},"To disable a feature, go to the enabled feature you want to disable and click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee"," > Deactivate."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The feature is disabled."),(0,r.kt)("h2",{id:"enabling-features-with-the-rancher-api"},"Enabling Features with the Rancher API"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"<RANCHER-SERVER-URL>/v3/features"),"."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," section, you will see an array containing all of the features that can be turned on with feature flags. The name of the feature is in the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," field. Click the name of the feature you want to enable."),(0,r.kt)("li",{parentName:"ol"},"In the upper left corner of the screen, under ",(0,r.kt)("strong",{parentName:"li"},"Operations,")," click ",(0,r.kt)("strong",{parentName:"li"},"Edit.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Value")," drop-down menu, click ",(0,r.kt)("strong",{parentName:"li"},"True.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Show Request.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Send Request.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Close."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The feature is enabled."),(0,r.kt)("h3",{id:"disabling-features-with-the-rancher-api"},"Disabling Features with the Rancher API"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"<RANCHER-SERVER-URL>/v3/features"),"."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," section, you will see an array containing all of the features that can be turned on with feature flags. The name of the feature is in the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," field. Click the name of the feature you want to enable."),(0,r.kt)("li",{parentName:"ol"},"In the upper left corner of the screen, under ",(0,r.kt)("strong",{parentName:"li"},"Operations,")," click ",(0,r.kt)("strong",{parentName:"li"},"Edit.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Value")," drop-down menu, click ",(0,r.kt)("strong",{parentName:"li"},"False.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Show Request.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Send Request.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Close."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The feature is disabled."))}d.isMDXComponent=!0}}]);