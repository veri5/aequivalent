(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f8b2688"],{"123b":function(e,t,c){},1451:function(e,t,c){"use strict";c("ae03")},1953:function(e,t,c){"use strict";c("3993")},2060:function(e,t,c){},3446:function(e,t,c){},3993:function(e,t,c){},"3a59":function(e,t,c){"use strict";c("94b4")},"4c00":function(e,t,c){"use strict";c("9cbf")},8727:function(e,t,c){},"8dd1":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n=c("5502"),r=c("f6f2");const a=Object(o["createTextVNode"])("Sign out ");var l=Object(o["defineComponent"])({__name:"TheSignOutMenuItem",setup(e){const t=Object(n["b"])(),c="aeq";function l(){t.dispatch(c+"/user/signOut")}return(e,t)=>{const c=Object(o["resolveComponent"])("el-icon"),n=Object(o["resolveComponent"])("el-menu-item");return Object(o["openBlock"])(),Object(o["createBlock"])(n,{onClick:l},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(r["a"]))]),_:1}),a]),_:1})}}});const s=l;var i=s;const u=e=>(Object(o["pushScopeId"])("data-v-67267d35"),e=e(),Object(o["popScopeId"])(),e),b={style:{margin:"0px 10px","line-height":"0px"}},d=["src"],j={class:"tagline"},O=u(()=>Object(o["createElementVNode"])("div",{class:"flex-grow"},null,-1)),p=["src"],f=u(()=>Object(o["createElementVNode"])("div",null,"Signed in as:",-1));var m=Object(o["defineComponent"])({__name:"TheSignOutProfileMenu",setup(e){function t(e){return e.avatar.uri?e.avatar.uri:c("1771")("./"+e.avatar)}function r(e){return`${e.substring(0,13)}...${e.slice(-4)}`}const a=Object(n["b"])(),l="aeq",s=a.state[l],u=Object(o["computed"])(()=>s.user.profile),m=Object(o["computed"])(()=>s.company.profile);return(e,n)=>{const a=Object(o["resolveComponent"])("el-avatar"),l=Object(o["resolveComponent"])("el-menu-item"),s=Object(o["resolveComponent"])("el-divider"),h=Object(o["resolveComponent"])("el-sub-menu"),v=Object(o["resolveComponent"])("el-menu"),C=Object(o["resolveComponent"])("el-col"),w=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(w,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(C,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{mode:"horizontal",ellipsis:!1,style:{"align-items":"center",padding:"5px"},"background-color":"white","text-color":"black"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("img",{width:"30",src:c("1771")("./"+Object(o["unref"])(m).homeLogo)},null,8,d)]),Object(o["createElementVNode"])("div",j,Object(o["toDisplayString"])(Object(o["unref"])(m).tagline),1),O,Object(o["createVNode"])(h,{index:"0"},{title:Object(o["withCtx"])(()=>[Object(o["createVNode"])(a,{size:30},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:t(Object(o["unref"])(u))},null,8,p)]),_:1})]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{index:"0-1",class:"submenu-header no-hover"},{default:Object(o["withCtx"])(()=>[f,Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(Object(o["unref"])(u).name),1),Object(o["createElementVNode"])("i",null,Object(o["toDisplayString"])(r(Object(o["unref"])(u).did)),1)]),_:1}),Object(o["createVNode"])(s,{class:"submenu-divider"}),Object(o["createVNode"])(i)]),_:1})]),_:1})]),_:1})]),_:1})}}}),h=(c("ce30"),c("6b0d")),v=c.n(h);const C=v()(m,[["__scopeId","data-v-67267d35"]]);var w=C,V=c("c9a1"),g=c("2295");const N={id:"container"},x={key:0,class:"toolbar"},_={key:1,class:"toolbar"};var y=Object(o["defineComponent"])({__name:"TheRequestsToolbar",setup(e){const t=Object(n["b"])(),c="aeq",a=Object(o["computed"])(()=>t.getters[c+"/requests/selectedRequest"]),l=Object(o["computed"])(()=>t.getters[c+"/requests/requests"]),s=Object(o["computed"])(()=>t.getters[c+"/requests/Statuses"]),i="Click on a request to show the toolbar";function u(){t.dispatch(c+"/requests/showReviewRequestModal")}function b(){t.dispatch(c+"/requests/showViewRequestModal")}function d(){t.dispatch(c+"/requests/clearSelectedRequest")}return(e,t)=>{const c=Object(o["resolveComponent"])("el-button"),n=Object(o["resolveComponent"])("el-tooltip"),j=Object(o["resolveComponent"])("el-divider"),O=Object(o["resolveComponent"])("el-card");return Object(o["unref"])(l).length?(Object(o["openBlock"])(),Object(o["createBlock"])(O,{key:0,shadow:"never",class:"card","body-style":{padding:"5px"}},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",N,[Object(o["unref"])(a)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",x,[Object(o["unref"])(a).status!==Object(o["unref"])(s).Approved&&Object(o["unref"])(a).status!==Object(o["unref"])(s).Rejected?(Object(o["openBlock"])(),Object(o["createBlock"])(n,{key:0,content:"Review Request",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{type:"primary",size:"default",circle:"",plain:"",icon:Object(o["unref"])(r["f"]),onClick:u},null,8,["icon"])]),_:1})):Object(o["createCommentVNode"])("",!0),Object(o["unref"])(a).status!==Object(o["unref"])(s).Approved&&Object(o["unref"])(a).status!==Object(o["unref"])(s).Rejected?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:1,direction:"vertical",class:"menu-divider"})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(n,{content:"View Request",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{size:"default",circle:"",plain:"",icon:Object(o["unref"])(r["o"]),onClick:b},null,8,["icon"])]),_:1}),Object(o["createVNode"])(n,{content:"Clear Selection",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{size:"default",circle:"",plain:"",icon:Object(o["unref"])(r["b"]),onClick:d},null,8,["icon"])]),_:1})])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",_,[Object(o["createElementVNode"])("span",{class:"not-selected-text"},Object(o["toDisplayString"])(i))]))])]),_:1})):Object(o["createCommentVNode"])("",!0)}}});c("4c00");const k=v()(y,[["__scopeId","data-v-6bc36997"]]);var q=k,S=c("1e49");const R={style:{"line-height":"20px",color:"#2c3e50"}};var B=Object(o["defineComponent"])({__name:"TheRequestsTable",setup(e){const t="No request matching your search criteria was found",c="No requests to show yet",a=Object(n["b"])(),l="aeq",s=Object(o["computed"])(()=>a.getters[l+"/requests/requests"]),i=Object(o["ref"])(),u=Object(o["computed"])(()=>a.getters[l+"/requests/selectedRequest"]);function b(e){let t="";switch(e){case"Approved":t="success";break;case"Rejected":t="danger";break;case"Under-Review":t="info";break;default:t="info";break}return t}function d(e){a.dispatch(l+"/requests/setSelectedRequest",e)}function j(){a.dispatch(l+"/requests/showViewRequestModal")}return Object(o["watch"])(u,e=>{null==e&&i.value.setCurrentRow()}),(e,n)=>{const a=Object(o["resolveComponent"])("el-icon"),l=Object(o["resolveComponent"])("el-table-column"),u=Object(o["resolveComponent"])("el-tag"),O=Object(o["resolveComponent"])("el-card");return Object(o["openBlock"])(),Object(o["createBlock"])(O,{shadow:"never",class:"card","body-style":{padding:"5px 5px"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(S["a"]),{ref_key:"tableRef",ref:i,data:Object(o["unref"])(s),"show-header":!!Object(o["unref"])(s).length,"table-layout":"auto","highlight-current-row":!0,"default-sort":{prop:"status",order:"descending"},"header-cell-style":{background:"#e4e4e4",color:"#2c3e50"},"row-style":{cursor:"pointer"},height:150,onRowClick:d,onRowDblclick:j},Object(o["createSlots"])({default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{prop:"type",label:"Type"}),Object(o["createVNode"])(l,{prop:"requester",label:"Requester"}),Object(o["createVNode"])(l,{prop:"status",label:"Status"},{default:Object(o["withCtx"])(e=>[Object(o["createVNode"])(u,{type:b(e.row.status),effect:"plain",style:{"min-width":"90px"}},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.row.status),1)]),_:2},1032,["type"])]),_:1})]),_:2},[Object(o["unref"])(s).length?{name:"empty",fn:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",R,[Object(o["createVNode"])(a,{size:50},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(r["k"]))]),_:1}),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(t))])])])}:{name:"empty",fn:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",{style:{"line-height":"20px",color:"#2c3e50"}},[Object(o["createVNode"])(a,{size:50},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(r["e"]))]),_:1}),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(c))])])])}]),1032,["data","show-header"])]),_:1})}}});c("1451");const T=v()(B,[["__scopeId","data-v-dc602368"]]);var E=T;const A=e=>(Object(o["pushScopeId"])("data-v-1604c351"),e=e(),Object(o["popScopeId"])(),e),D=A(()=>Object(o["createElementVNode"])("strong",null,"Review Request",-1)),I=A(()=>Object(o["createElementVNode"])("p",{style:{"font-size":"var(--el-font-size-small)"}},"Please find the request details below",-1)),z=Object(o["createTextVNode"])(" Cancel "),M=Object(o["createTextVNode"])(" Approve "),U=Object(o["createTextVNode"])(" Reject ");var P=Object(o["defineComponent"])({__name:"TheReviewRequestModal",setup(e){const t=Object(n["b"])(),c="aeq",a=Object(o["computed"])(()=>t.getters[c+"/requests/selectedRequest"]),l=Object(o["ref"])(!1),s=Object(o["computed"])(()=>t.getters[c+"/requests/isReviewRequestModalVisible"]);function i(e){let t="";switch(e){case"Approved":t="success";break;case"Rejected":t="danger";break;case"Under-Review":t="info";break;default:t="info";break}return t}function u(){t.dispatch(c+"/requests/closeReviewRequestModal")}function b(e){u(),e()}function d(){V["a"].confirm("Your signature is being requested. Continue?","Signature request",{confirmButtonText:"Sign",cancelButtonText:"Cancel",type:"warning",icon:Object(o["markRaw"])(r["g"])}).then(()=>{t.dispatch(c+"/requests/approveSelectedRequest"),Object(g["a"])({message:"Request approved successfully",icon:Object(o["markRaw"])(r["m"]),position:"top-left",duration:3e3}),u()})}function j(){V["a"].confirm("Your signature is being requested. Continue?","Signature request",{confirmButtonText:"Sign",cancelButtonText:"Cancel",type:"warning",icon:Object(o["markRaw"])(r["g"])}).then(()=>{t.dispatch(c+"/requests/rejectSelectedRequest"),Object(g["a"])({message:"Request rejected successfully",icon:Object(o["markRaw"])(r["m"]),position:"top-left",duration:3e3}),u()})}return Object(o["watch"])(s,e=>{l.value=e}),(e,t)=>{const c=Object(o["resolveComponent"])("el-descriptions-item"),n=Object(o["resolveComponent"])("el-tag"),r=Object(o["resolveComponent"])("el-descriptions"),s=Object(o["resolveComponent"])("el-divider"),O=Object(o["resolveComponent"])("el-button"),p=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createBlock"])(p,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),"before-close":b,width:"40%"},{header:Object(o["withCtx"])(()=>[D,I]),footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{style:{margin:"0px","margin-bottom":"15px",border:"none"}}),Object(o["createVNode"])(O,{onClick:u},{default:Object(o["withCtx"])(()=>[z]),_:1}),Object(o["createVNode"])(s,{direction:"vertical",class:"menu-divider"}),Object(o["createVNode"])(O,{type:"primary",plain:"",onClick:d},{default:Object(o["withCtx"])(()=>[M]),_:1}),Object(o["createVNode"])(O,{type:"danger",plain:"",onClick:j},{default:Object(o["withCtx"])(()=>[U]),_:1})]),default:Object(o["withCtx"])(()=>[null!==Object(o["unref"])(a)?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:0,direction:"vertical",column:2,border:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{label:"Type",span:2},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).type),1)]),_:1}),Object(o["createVNode"])(c,{label:"Requester"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).requester),1)]),_:1}),Object(o["createVNode"])(c,{label:"Status"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{type:i(Object(o["unref"])(a).status),effect:"plain"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).status),1)]),_:1},8,["type"])]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1},8,["modelValue"])}}});c("cff6");const L=v()(P,[["__scopeId","data-v-1604c351"]]);var J=L;const W=Object(o["createElementVNode"])("strong",null,"View request",-1),Y=Object(o["createElementVNode"])("p",{style:{"font-size":"var(--el-font-size-small)"}},"Please find the request details below",-1),$=Object(o["createTextVNode"])(" Close ");var F=Object(o["defineComponent"])({__name:"TheViewRequestModal",setup(e){const t=Object(n["b"])(),c="aeq",r=Object(o["computed"])(()=>t.getters[c+"/requests/selectedRequest"]),a=Object(o["ref"])(!1),l=Object(o["computed"])(()=>t.getters[c+"/requests/isViewRequestModalVisible"]);function s(){t.dispatch(c+"/requests/closeViewRequestModal")}function i(e){s(),e()}function u(e){let t="";switch(e){case"Approved":t="success";break;case"Rejected":t="danger";break;case"Under-Review":t="info";break;default:t="info";break}return t}return Object(o["watch"])(l,e=>{a.value=e}),(e,t)=>{const c=Object(o["resolveComponent"])("el-descriptions-item"),n=Object(o["resolveComponent"])("el-tag"),l=Object(o["resolveComponent"])("el-descriptions"),b=Object(o["resolveComponent"])("el-divider"),d=Object(o["resolveComponent"])("el-button"),j=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createBlock"])(j,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),"before-close":i,width:"40%"},{header:Object(o["withCtx"])(()=>[W,Y]),footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{style:{margin:"0px","margin-bottom":"15px",border:"none"}}),Object(o["createVNode"])(d,{onClick:s},{default:Object(o["withCtx"])(()=>[$]),_:1})]),default:Object(o["withCtx"])(()=>[null!==Object(o["unref"])(r)?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,direction:"vertical",column:2,border:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{label:"Type",span:2},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(r).type),1)]),_:1}),Object(o["createVNode"])(c,{label:"Requester"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(r).requester),1)]),_:1}),Object(o["createVNode"])(c,{label:"Status"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{type:u(Object(o["unref"])(r).status),effect:"plain"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(r).status),1)]),_:1},8,["type"])]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1},8,["modelValue"])}}});const H=F;var K=H;const G={id:"requests"};var Q=Object(o["defineComponent"])({__name:"TheRequests",setup(e){const t="Requests";return(e,c)=>{const n=Object(o["resolveComponent"])("el-col"),r=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",G,[Object(o["createVNode"])(r,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h2",{class:"heading"},Object(o["toDisplayString"])(t))]),_:1})]),_:1}),Object(o["createVNode"])(r,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(q)]),_:1})]),_:1}),Object(o["createVNode"])(r,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(E)]),_:1})]),_:1})]),Object(o["createVNode"])(J),Object(o["createVNode"])(K)],64)}}});c("3a59");const X=v()(Q,[["__scopeId","data-v-2a8cf6b0"]]);var Z=X;const ee=e=>(Object(o["pushScopeId"])("data-v-06f7c834"),e=e(),Object(o["popScopeId"])(),e),te=ee(()=>Object(o["createElementVNode"])("div",null,"© Copyright 2020 - 2022 | All Rights Reserved to Aequivalent SA",-1));function ce(e,t){const c=Object(o["resolveComponent"])("el-divider"),n=Object(o["resolveComponent"])("el-col"),r=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(r,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{class:"aeq-divider"}),Object(o["createVNode"])(n,{class:"aeq-footer"},{default:Object(o["withCtx"])(()=>[te]),_:1})]),_:1})}c("b9a3");const oe={},ne=v()(oe,[["render",ce],["__scopeId","data-v-06f7c834"]]);var re=ne,ae=c("4360"),le=c("b215"),se=c("c834"),ie=c("4ac1");class ue{constructor(e,t){this.storeNamespace=null,this.veridaStore=null,this.userStore=null,this.account=null,this.isAutoAccount=null,this._profile=null,this._context=null,this.msgInstance={},this.isAutoAccount=t,this.storeNamespace=ae["a"].state[e],this.veridaStore=Object(o["computed"])(()=>this.storeNamespace.verida),this.userStore=Object(o["computed"])(()=>this.storeNamespace.user.profile)}async initialize(){this._context=await this.connectContext(),this._profile=await this.connectProfile()}async connectContext(){return this.isAutoAccount?this.account=new ie["AutoAccount"]({defaultDatabaseServer:{type:"VeridaDatabase",endpointUri:this.veridaStore.value.veridaTestnetDefaultServer},defaultMessageServer:{type:"VeridaMessage",endpointUri:this.veridaStore.value.veridaTestnetDefaultServer}},{privateKey:this.userStore.value.mnemonic,didServerUrl:this.veridaStore.value.veridaTestnetDidServer,environment:this.veridaStore.value.environmentType}):this.account=new se["VaultAccount"]({request:{logoUrl:this.veridaStore.value.logoUrl}}),le["Network"].connect({client:{environment:this.veridaStore.value.environmentType},account:this.account,context:{name:this.veridaStore.value.contextName}})}async connectProfile(){const e=await this.context.getClient(),t=await this.context.account.did(),c=await e.openPublicProfile(t,this.veridaStore.value.contextName,"basicProfile"),{name:o,avatar:n,description:r,country:a}=await c.getMany();return{did:t,name:o,description:r,country:a}}get context(){return this._context}get profile(){return this._profile}}const be="aeq",de=!0,je=new ue(be,de);je.initialize();var Oe=je;const pe=Object(o["createTextVNode"])(" Sign in ");var fe=Object(o["defineComponent"])({__name:"TheSignInButton",setup(e){const t=Object(o["ref"])(!1),c=Object(n["b"])(),r="aeq",a=Object(o["computed"])(()=>c.getters[r+"/user/isAuthenticated"]);async function l(){t.value=!0,await Oe.initialize();const e=Oe.context;if(e){const e=Oe.profile;c.dispatch(r+"/user/setProfile",e),c.dispatch(r+"/user/signIn")}t.value=!1}return Object(o["onMounted"])(()=>{a.value&&l()}),(e,c)=>{const n=Object(o["resolveComponent"])("el-button"),r=Object(o["resolveDirective"])("loading");return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(n,{"element-loading-background":"rgba(0, 0, 0, 0.5)",size:"default",color:"#9e1510",round:"",class:"aeq-button",onClick:l},{default:Object(o["withCtx"])(()=>[pe]),_:1})),[[r,t.value]])}}});c("a2e4");const me=v()(fe,[["__scopeId","data-v-3d064b1e"]]);var he=me;const ve=e=>(Object(o["pushScopeId"])("data-v-7f12dae4"),e=e(),Object(o["popScopeId"])(),e),Ce=["src"],we={class:"title"},Ve=ve(()=>Object(o["createElementVNode"])("h2",{class:"title",style:{"margin-top":"15px",height:"1px"}},[Object(o["createElementVNode"])("span",{class:"underline"},"Who")],-1)),ge=ve(()=>Object(o["createElementVNode"])("p",{class:"tagline"},"Aequivalent is Switzerland’s leading digital platform for employment screening (background checks). Through our secure online solution, our team verifies and delivers relevant information to help employers reduce the risk of inappropriate employment.",-1)),Ne=ve(()=>Object(o["createElementVNode"])("div",null,"© Copyright 2020 - 2022 | All Rights Reserved to Aequivalent SA",-1));var xe=Object(o["defineComponent"])({__name:"TheLanding",setup(e){const t=Object(n["b"])(),r="aeq",a=t.state[r],l=Object(o["computed"])(()=>a.company.profile);return(e,t)=>{const n=Object(o["resolveComponent"])("el-col"),r=Object(o["resolveComponent"])("el-row"),a=Object(o["resolveComponent"])("el-divider");return Object(o["openBlock"])(),Object(o["createBlock"])(r,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{class:"header"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{alt:"company logo",src:c("1771")("./"+Object(o["unref"])(l).landingLogo)},null,8,Ce)]),_:1})]),_:1}),Object(o["createVNode"])(r,{class:"body body-background"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{xs:18,sm:18},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h2",we,"Who is "+Object(o["toDisplayString"])(Object(o["unref"])(l).name)+"?",1),Ve,ge,Object(o["createVNode"])(a,{"border-style":"none"}),Object(o["createVNode"])(he)]),_:1})]),_:1}),Object(o["createVNode"])(r,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{class:"footer"},{default:Object(o["withCtx"])(()=>[Ne]),_:1})]),_:1})]),_:1})]),_:1})}}});c("1953");const _e=v()(xe,[["__scopeId","data-v-7f12dae4"]]);var ye=_e;const ke={key:0,id:"home"},qe={key:1};var Se=Object(o["defineComponent"])({__name:"TheHome",setup(e){const t=Object(n["b"])(),c="aeq",r=t.state[c],a=Object(o["computed"])(()=>r.user.isAuthenticated);return(e,t)=>Object(o["unref"])(a)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ke,[Object(o["createVNode"])(w),Object(o["createVNode"])(Z),Object(o["createVNode"])(re)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",qe,[Object(o["createVNode"])(ye)]))}});c("d932");const Re=v()(Se,[["__scopeId","data-v-6518bdf7"]]);t["default"]=Re},"94b4":function(e,t,c){},"9cbf":function(e,t,c){},a2e4:function(e,t,c){"use strict";c("2060")},ae03:function(e,t,c){},b9a3:function(e,t,c){"use strict";c("f921")},ce30:function(e,t,c){"use strict";c("123b")},cff6:function(e,t,c){"use strict";c("8727")},d932:function(e,t,c){"use strict";c("3446")},f921:function(e,t,c){}}]);
//# sourceMappingURL=chunk-2f8b2688.03053227.js.map