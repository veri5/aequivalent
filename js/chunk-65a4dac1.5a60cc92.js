(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65a4dac1"],{"183d":function(e,t,c){"use strict";c("c7e8")},3077:function(e,t,c){"use strict";c("a8d6")},4650:function(e,t,c){},"4b40":function(e,t,c){},6269:function(e,t,c){"use strict";c("4650")},"647f":function(e,t,c){},"67eb":function(e,t,c){"use strict";var o=c("7a23"),n=c("5502"),a=c("f6f2");const r=Object(o["createTextVNode"])("Sign out ");var l=Object(o["defineComponent"])({__name:"TheVeridaSignOutMenuItem",props:{namespace:{type:String,required:!0,default:"ttp"}},setup(e){const t=e,c=Object(n["b"])();function l(){c.dispatch(t.namespace+"/user/signOut")}return(e,t)=>{const c=Object(o["resolveComponent"])("el-icon"),n=Object(o["resolveComponent"])("el-menu-item");return Object(o["openBlock"])(),Object(o["createBlock"])(n,{onClick:l},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(a["a"]))]),_:1}),r]),_:1})}}});const s=l;var i=s;const u=e=>(Object(o["pushScopeId"])("data-v-a6511ad4"),e=e(),Object(o["popScopeId"])(),e),d={style:{"margin-left":"10px"}},b=["src"],j=u(()=>Object(o["createElementVNode"])("div",{class:"flex-grow"},null,-1)),O=["src"],p=u(()=>Object(o["createElementVNode"])("div",null,"Signed in as:",-1));var f=Object(o["defineComponent"])({__name:"TheVeridaSignOutProfileMenu",props:{namespace:{type:String,required:!0,default:"ttp"},backgroundColor:{type:String,default:"white"}},setup(e){const t=e;function a(e){return e.avatar.uri?e.avatar.uri:c("1771")("./"+e.avatar)}function r(e){return`${e.substring(0,13)}...${e.slice(-4)}`}const l=Object(n["b"])(),s=l.state[t.namespace],u=Object(o["computed"])(()=>s.user.profile),f=Object(o["computed"])(()=>s.company.profile);return(n,l)=>{const s=Object(o["resolveComponent"])("el-avatar"),m=Object(o["resolveComponent"])("el-menu-item"),h=Object(o["resolveComponent"])("el-divider"),v=Object(o["resolveComponent"])("el-sub-menu"),C=Object(o["resolveComponent"])("el-menu"),w=Object(o["resolveComponent"])("el-col"),V=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(V,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(w,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(C,{mode:"horizontal",ellipsis:!1,style:{"align-items":"center",padding:"5px"},"background-color":t.backgroundColor,"text-color":"black"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("img",{width:"30",src:c("1771")("./"+Object(o["unref"])(f).logo)},null,8,b)]),j,Object(o["createVNode"])(v,{index:"0"},{title:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{size:30},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:a(Object(o["unref"])(u))},null,8,O)]),_:1})]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,{index:"0-1",class:"submenu-header no-hover"},{default:Object(o["withCtx"])(()=>[p,Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(Object(o["unref"])(u).name),1),Object(o["createElementVNode"])("i",null,Object(o["toDisplayString"])(r(Object(o["unref"])(u).did)),1)]),_:1}),Object(o["createVNode"])(h,{class:"submenu-divider"}),Object(o["createVNode"])(i,{namespace:e.namespace},null,8,["namespace"])]),_:1})]),_:1},8,["background-color"])]),_:1})]),_:1})}}}),m=(c("6269"),c("6b0d")),h=c.n(m);const v=h()(f,[["__scopeId","data-v-a6511ad4"]]);t["a"]=v},8790:function(e,t,c){},"8dd1":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n=c("5502"),a=c("67eb"),r=c("e2ca");const l=Object(o["createTextVNode"])(" Sign in as an Issuer ");var s=Object(o["defineComponent"])({__name:"TheSignInButton",setup(e){const t=Object(o["ref"])(!1),c=Object(n["b"])(),a="aeq",s=Object(o["computed"])(()=>c.getters[a+"/user/isAuthenticated"]);async function i(){t.value=!0,await r["a"].initialize();const e=r["a"].context;if(e){const e=r["a"].profile;c.dispatch(a+"/user/setProfile",e),c.dispatch(a+"/user/signIn")}t.value=!1}return Object(o["onMounted"])(()=>{s.value&&i()}),(e,c)=>{const n=Object(o["resolveComponent"])("el-button"),a=Object(o["resolveDirective"])("loading");return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(n,{"element-loading-background":"rgba(0, 0, 0, 0.5)",size:"default",color:"#9e1510",round:"",class:"aeq-button",onClick:i},{default:Object(o["withCtx"])(()=>[l]),_:1})),[[a,t.value]])}}}),i=(c("3077"),c("6b0d")),u=c.n(i);const d=u()(s,[["__scopeId","data-v-3158377d"]]);var b=d;const j=e=>(Object(o["pushScopeId"])("data-v-347bb1aa"),e=e(),Object(o["popScopeId"])(),e),O=["src"],p={class:"aeq-title"},f=j(()=>Object(o["createElementVNode"])("h2",{class:"aeq-title",style:{"margin-top":"15px",height:"1px"}},[Object(o["createElementVNode"])("span",{class:"aeq-underline"},"Who")],-1)),m=j(()=>Object(o["createElementVNode"])("p",{class:"aeq-intro-text"},"Aequivalent is Switzerland’s leading digital platform for employment screening (background checks). Through our secure online solution, our team verifies and delivers relevant information to help employers reduce the risk of inappropriate employment.",-1)),h=j(()=>Object(o["createElementVNode"])("div",null,"© Copyright 2020 - 2022 | All Rights Reserved to Aequivalent SA",-1));var v=Object(o["defineComponent"])({__name:"TheLanding",setup(e){const t=Object(n["b"])(),a="aeq",r=t.state[a],l=Object(o["computed"])(()=>r.company.profile);return(e,t)=>{const n=Object(o["resolveComponent"])("el-col"),a=Object(o["resolveComponent"])("el-row"),r=Object(o["resolveComponent"])("el-divider");return Object(o["openBlock"])(),Object(o["createBlock"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{class:"aeq-banner-header"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{alt:"company logo",src:c("1771")("./"+Object(o["unref"])(l).homeLogo)},null,8,O)]),_:1})]),_:1}),Object(o["createVNode"])(a,{class:"aeq-banner-body aeq-banner-background"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{xs:18,sm:18},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h2",p,"Who is "+Object(o["toDisplayString"])(Object(o["unref"])(l).name)+"?",1),f,m,Object(o["createVNode"])(r,{"border-style":"none"}),Object(o["createVNode"])(b)]),_:1})]),_:1}),Object(o["createVNode"])(a,{class:"aeq-body aeq-body-background"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n)]),_:1}),Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{class:"aeq-footer"},{default:Object(o["withCtx"])(()=>[h]),_:1})]),_:1})]),_:1})]),_:1})}}});c("ef3c");const C=u()(v,[["__scopeId","data-v-347bb1aa"]]);var w=C,V=c("c9a1"),g=c("2295"),N=c("f6f2");const x={key:0,id:"toolbar"},y={key:0},_={key:1,class:"not-selected-text"};var k=Object(o["defineComponent"])({__name:"TheRequestsToolbar",setup(e){const t="Please select a request to start reviewing",c=Object(n["b"])(),a="aeq",r=c.state[a],l=Object(o["computed"])(()=>c.getters[a+"/requests/selected"]),s=(Object(o["computed"])(()=>c.getters[a+"/requests/statuses"]),Object(o["computed"])(()=>r.requests.tableData));function i(){c.dispatch(a+"/requests/remove")}function u(){c.dispatch(a+"/requests/view")}function d(){c.dispatch(a+"/requests/clear")}function b(){V["a"].confirm("Request will permanently be remove. Continue?","Remove request",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"error",icon:Object(o["markRaw"])(N["e"])}).then(()=>{Object(g["a"])({message:"Request removed successfully",icon:Object(o["markRaw"])(N["j"]),position:"top-left",duration:3e3}),i()})}return(e,c)=>{const n=Object(o["resolveComponent"])("el-button"),a=Object(o["resolveComponent"])("el-tooltip");return Object(o["unref"])(s).length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",x,[Object(o["unref"])(l)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",y,[Object(o["createVNode"])(a,{content:"Remove",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{type:"danger",size:"default",circle:"",plain:"",icon:Object(o["unref"])(N["e"]),onClick:b},null,8,["icon"])]),_:1}),Object(o["createVNode"])(a,{content:"View",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{size:"default",circle:"",plain:"",icon:Object(o["unref"])(N["n"]),onClick:u},null,8,["icon"])]),_:1}),Object(o["createVNode"])(a,{content:"Clear",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{size:"default",circle:"",plain:"",icon:Object(o["unref"])(N["b"]),onClick:d},null,8,["icon"])]),_:1})])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",_,Object(o["toDisplayString"])(t)))])):Object(o["createCommentVNode"])("",!0)}}});c("d858");const q=u()(k,[["__scopeId","data-v-6cabfc7b"]]);var S=q,B=(c("caad"),c("1e49"));const E={style:{"line-height":"20px",color:"#2c3e50"}};var T=Object(o["defineComponent"])({__name:"TheRequestsTable",setup(e){const t="No request matching your search criteria was found",c="No requests to show yet",a=Object(n["b"])(),r="aeq",l=a.state[r],s=Object(o["computed"])(()=>l.requests.tableData),i=Object(o["ref"])(""),u=Object(o["computed"])(()=>s.value.filter(e=>!i.value||e.type.toLowerCase().includes(i.value.toLowerCase()))),d=Object(o["ref"])(),b=Object(o["computed"])(()=>a.getters[r+"/requests/selected"]);function j(e){let t="";switch(e){case"Approved":t="success";break;case"Rejected":t="danger";break;case"Processing":t="info";break;default:t="info";break}return t}function O(e){a.dispatch(r+"/requests/setSelected",e)}function p(){a.dispatch(r+"/requests/viewSelected")}return Object(o["watch"])(b,e=>{null==e&&d.value.setCurrentRow()}),(e,n)=>{const a=Object(o["resolveComponent"])("el-input"),r=Object(o["resolveComponent"])("el-icon"),l=Object(o["resolveComponent"])("el-table-column"),b=Object(o["resolveComponent"])("el-tag");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["unref"])(s).length?(Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:0,modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=e=>i.value=e),placeholder:"Search all types",clearable:"","prefix-icon":Object(o["unref"])(N["k"]),size:"default","input-style":{color:"#2c3e50",padding:"5px"}},null,8,["modelValue","prefix-icon"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(Object(o["unref"])(B["a"]),{ref_key:"tableRef",ref:d,data:Object(o["unref"])(u),"show-header":!!Object(o["unref"])(s).length&&!i.value,"table-layout":"auto","highlight-current-row":!0,"default-sort":{prop:"type",order:"ascending"},"header-cell-style":{background:"#9e1510",color:"white"},"row-style":{cursor:"pointer"},height:350,onRowClick:O,onRowDblclick:p},Object(o["createSlots"])({default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{prop:"type",label:"Type",sortable:""}),Object(o["createVNode"])(l,{prop:"requester",label:"Requester",sortable:""}),Object(o["createVNode"])(l,{prop:"status",label:"Status",sortable:""},{default:Object(o["withCtx"])(e=>[Object(o["createVNode"])(b,{type:j(e.row.status),effect:"light",style:{width:"80px"}},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.row.status),1)]),_:2},1032,["type"])]),_:1})]),_:2},[Object(o["unref"])(s).length?{name:"empty",fn:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",E,[Object(o["createVNode"])(r,{size:50},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(N["i"]))]),_:1}),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(t))])])])}:{name:"empty",fn:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",{style:{"line-height":"20px",color:"#2c3e50"}},[Object(o["createVNode"])(r,{size:50},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(N["f"]))]),_:1}),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(c))])])])}]),1032,["data","show-header"])],64)}}});const R=T;var D=R;const A=Object(o["createElementVNode"])("strong",null,"View request",-1),I=Object(o["createElementVNode"])("p",{style:{"font-size":"var(--el-font-size-small)"}},"Please find your request details below",-1),z=Object(o["createTextVNode"])(" Close ");var P=Object(o["defineComponent"])({__name:"TheViewRequestModal",setup(e){const t=Object(n["b"])(),c="aeq",a=Object(o["computed"])(()=>t.getters[c+"/requests/selected"]),r=Object(o["ref"])(!1),l=Object(o["computed"])(()=>t.getters[c+"/requests/isViewModalVisible"]);function s(){t.dispatch(c+"/requests/closeViewModal")}function i(e){s(),e()}function u(e){let t="";switch(e){case"Approved":t="success";break;case"Rejected":t="danger";break;case"Processing":t="info";break;default:t="info";break}return t}return Object(o["watch"])(l,e=>{r.value=e}),(e,t)=>{const c=Object(o["resolveComponent"])("el-descriptions-item"),n=Object(o["resolveComponent"])("el-tag"),l=Object(o["resolveComponent"])("el-descriptions"),d=Object(o["resolveComponent"])("el-button"),b=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createBlock"])(b,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),"before-close":i,width:"40%"},{header:Object(o["withCtx"])(()=>[A,I]),footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{onClick:s},{default:Object(o["withCtx"])(()=>[z]),_:1})]),default:Object(o["withCtx"])(()=>[null!==Object(o["unref"])(a)?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,direction:"vertical",column:2,border:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{label:"Type"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).type),1)]),_:1}),Object(o["createVNode"])(c,{label:"Status"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{type:u(Object(o["unref"])(a).status),effect:"plain"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).status),1)]),_:1},8,["type"])]),_:1}),Object(o["createVNode"])(c,{label:"Requester"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).requester),1)]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1},8,["modelValue"])}}});const M=P;var U=M,L=Object(o["defineComponent"])({__name:"TheRequests",setup(e){const t="Requests";return(e,c)=>{const n=Object(o["resolveComponent"])("el-col"),a=Object(o["resolveComponent"])("el-row"),r=Object(o["resolveComponent"])("el-card");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h2",{class:"heading"},Object(o["toDisplayString"])(t))]),_:1})]),_:1}),Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{shadow:"never",class:"aeq-card","body-style":{padding:"5px"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(S)]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{shadow:"never",class:"aeq-card","body-style":{padding:"5px"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(D)]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(U)],64)}}});c("183d");const F=u()(L,[["__scopeId","data-v-6dff1276"]]);var J=F;const W=e=>(Object(o["pushScopeId"])("data-v-b76e3952"),e=e(),Object(o["popScopeId"])(),e),$=W(()=>Object(o["createElementVNode"])("div",null,"© Copyright 2020 - 2022 | All Rights Reserved to Aequivalent SA",-1));function H(e,t){const c=Object(o["resolveComponent"])("el-divider"),n=Object(o["resolveComponent"])("el-col"),a=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{"border-style":"none"}),Object(o["createVNode"])(n,{class:"aeq-footer"},{default:Object(o["withCtx"])(()=>[$]),_:1})]),_:1})}c("d077");const K={},G=u()(K,[["render",H],["__scopeId","data-v-b76e3952"]]);var Q=G;const X={key:0,id:"home"},Y={key:1};var Z=Object(o["defineComponent"])({__name:"TheHome",setup(e){const t=Object(n["b"])(),c="aeq",r=t.state[c],l=Object(o["computed"])(()=>r.user.isAuthenticated);return(e,t)=>Object(o["unref"])(l)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",X,[Object(o["createVNode"])(a["a"],{namespace:c}),Object(o["createVNode"])(J),Object(o["createVNode"])(Q)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Y,[Object(o["createVNode"])(w)]))}});c("c293");const ee=u()(Z,[["__scopeId","data-v-7e9de010"]]);t["default"]=ee},a8d6:function(e,t,c){},c293:function(e,t,c){"use strict";c("8790")},c7e8:function(e,t,c){},d077:function(e,t,c){"use strict";c("647f")},d858:function(e,t,c){"use strict";c("f3ce")},e2ca:function(e,t,c){"use strict";var o=c("7a23"),n=c("4360"),a=c("b215"),r=c("c834"),l=c("4ac1");class s{constructor(e,t){this.storeNamespace=null,this.veridaStore=null,this.userStore=null,this.account=null,this.isAutoAccount=null,this._profile=null,this._context=null,this.msgInstance={},this.isAutoAccount=t,this.storeNamespace=n["a"].state[e],this.veridaStore=Object(o["computed"])(()=>this.storeNamespace.verida),this.userStore=Object(o["computed"])(()=>this.storeNamespace.user.profile)}async initialize(){this._context=await this.connectContext(),this._profile=await this.connectProfile()}async connectContext(){return this.isAutoAccount?this.account=new l["AutoAccount"]({defaultDatabaseServer:{type:"VeridaDatabase",endpointUri:this.veridaStore.value.veridaTestnetDefaultServer},defaultMessageServer:{type:"VeridaMessage",endpointUri:this.veridaStore.value.veridaTestnetDefaultServer}},{privateKey:this.userStore.value.mnemonic,didServerUrl:this.veridaStore.value.veridaTestnetDidServer,environment:this.veridaStore.value.environmentType}):this.account=new r["VaultAccount"]({request:{logoUrl:this.veridaStore.value.logoUrl}}),a["Network"].connect({client:{environment:this.veridaStore.value.environmentType},account:this.account,context:{name:this.veridaStore.value.contextName}})}async connectProfile(){const e=await this.context.getClient(),t=await this.context.account.did(),c=await e.openPublicProfile(t,this.veridaStore.value.contextName,"basicProfile"),{name:o,avatar:n,description:a,country:r}=await c.getMany();return{did:t,name:o,description:a,country:r}}get context(){return this._context}get profile(){return this._profile}}const i="aeq",u=!0,d=new s(i,u);d.initialize(),t["a"]=d},ef3c:function(e,t,c){"use strict";c("4b40")},f3ce:function(e,t,c){}}]);
//# sourceMappingURL=chunk-65a4dac1.5a60cc92.js.map