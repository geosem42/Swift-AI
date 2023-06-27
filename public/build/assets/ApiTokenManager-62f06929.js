import{d as y,r as a,o as l,b as L,w as t,f as o,h,i as d,e as n,j as m,k as i,n as u,F as g,l as f,m as N,v as U,t as p}from"./app-9e33c640.js";import{J as z}from"./ActionMessage-5c5087b8.js";import{M as E,J as W,a as q}from"./DialogModal-875d4055.js";import{J as Y}from"./Button-6a91530d.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{J as G}from"./DangerButton-367a0726.js";import{J as H}from"./FormSection-28ffd9c9.js";import{J as K}from"./Input-2edcdd1e.js";import{J as O}from"./Checkbox-20e9b235.js";import{J as Q}from"./InputError-fc966430.js";import{J as R}from"./Label-9db51818.js";import{J as X}from"./SecondaryButton-332648cf.js";import{J as Z}from"./SectionBorder-cfb8221d.js";const x=y({components:{Modal:E},props:{id:{type:String,required:!0},maxWidth:{default:"2xl"}}}),ee={class:"modal-content"},oe={class:"modal-body"},te={class:"d-flex justify-content-start"},se=o("div",{class:"me-3"},[o("div",{class:"bg-warning p-2 rounded-circle"},[o("svg",{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",width:"24"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])])],-1),ne={class:"font-weight-bold"},ie={class:"modal-footer bg-light"};function ae(e,r,j,P,C,J){const k=a("modal");return l(),L(k,{id:e.id,"max-width":e.maxWidth},{default:t(()=>[o("div",ee,[o("div",oe,[o("div",te,[se,o("div",null,[o("h5",ne,[h(e.$slots,"title")]),h(e.$slots,"content")])])]),o("div",ie,[h(e.$slots,"footer")])])]),_:3},8,["id","max-width"])}const re=F(x,[["render",ae]]),le=y({components:{JetActionMessage:z,JetActionSection:W,JetButton:Y,JetConfirmationModal:re,JetDangerButton:G,JetDialogModal:q,JetFormSection:H,JetInput:K,JetCheckbox:O,JetInputError:Q,JetLabel:R,JetSecondaryButton:X,JetSectionBorder:Z},props:["tokens","availablePermissions","defaultPermissions"],data(){return{createApiTokenForm:this.$inertia.form({name:"",permissions:this.defaultPermissions}),updateApiTokenForm:this.$inertia.form({permissions:[]}),deleteApiTokenForm:this.$inertia.form(),managingPermissionsFor:null,apiTokenBeingDeleted:null,bootstrap:null}},methods:{createApiToken(){this.createApiTokenForm.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{this.createApiTokenForm.reset(),this.bootstrap=$("#displayingTokenModal"),this.bootstrap.modal("toggle")}})},manageApiTokenPermissions(e){this.updateApiTokenForm.permissions=e.abilities,this.managingPermissionsFor=e,this.bootstrap=$("#managingPermissionsForModal"),this.bootstrap.modal("toggle")},updateApiToken(){this.updateApiTokenForm.put(route("api-tokens.update",this.managingPermissionsFor),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.managingPermissionsFor=null})},confirmApiTokenDeletion(e){this.apiTokenBeingDeleted=e,this.bootstrap=$("#apiTokenBeingDeletedModal"),this.bootstrap.modal("toggle")},deleteApiToken(){this.deleteApiTokenForm.delete(route("api-tokens.destroy",this.apiTokenBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:()=>{this.apiTokenBeingDeleted=null,this.bootstrap.modal("toggle")}})}}}),de={class:"w-75"},ce={class:"mb-3"},me={key:0},pe={class:"mt-2 row"},ue={class:"mb-3"},ke={class:"form-check"},_e=["for"],he={class:"spinner-border spinner-border-sm",role:"status"},ge=o("span",{class:"visually-hidden"},"Loading...",-1),fe=[ge],be={key:0},ve={class:"d-flex"},Te={key:0,class:"text-sm text-muted"},Ae=["onClick"],ye=["onClick"],$e=o("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),Fe={key:0,class:"bg-light rounded p-3 user-select-all"},je={class:"mt-2 row"},Pe={class:"mb-3"},Ce={class:"form-check"},Je=["for"];function we(e,r,j,P,C,J){const k=a("jet-action-message"),b=a("jet-label"),w=a("jet-input"),S=a("jet-input-error"),v=a("jet-checkbox"),T=a("jet-button"),B=a("jet-form-section"),D=a("jet-section-border"),M=a("jet-action-section"),_=a("jet-secondary-button"),A=a("jet-dialog-modal"),I=a("jet-danger-button"),V=a("jet-confirmation-modal");return l(),d("div",null,[n(B,{onSubmitted:e.createApiToken},{title:t(()=>[i(" Create API Token ")]),description:t(()=>[i(" API tokens allow third-party services to authenticate with our application on your behalf. ")]),form:t(()=>[n(k,{on:e.createApiTokenForm.recentlySuccessful},{default:t(()=>[i(" Created. ")]),_:1},8,["on"]),o("div",de,[o("div",ce,[n(b,{for:"name",value:"Name"}),n(w,{id:"name",type:"text",modelValue:e.createApiTokenForm.name,"onUpdate:modelValue":r[0]||(r[0]=s=>e.createApiTokenForm.name=s),autofocus:"",class:u({"is-invalid":e.createApiTokenForm.errors.name})},null,8,["modelValue","class"]),n(S,{message:e.createApiTokenForm.errors.name},null,8,["message"])]),e.availablePermissions.length>0?(l(),d("div",me,[n(b,{for:"permissions",value:"Permissions"}),o("div",pe,[(l(!0),d(g,null,f(e.availablePermissions,s=>(l(),d("div",{class:"col-6",key:s},[o("div",ue,[o("div",ke,[n(v,{value:s,checked:e.createApiTokenForm.permissions,"onUpdate:checked":r[1]||(r[1]=c=>e.createApiTokenForm.permissions=c),id:`create-${s}`},null,8,["value","checked","id"]),o("label",{class:"form-check-label",for:`create-${s}`},p(s),9,_e)])])]))),128))])])):m("",!0)])]),actions:t(()=>[n(T,{class:u({"text-white-50":e.createApiTokenForm.processing}),disabled:e.createApiTokenForm.processing},{default:t(()=>[N(o("div",he,fe,512),[[U,e.createApiTokenForm.processing]]),i(" Create ")]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"]),e.tokens.length>0?(l(),d("div",be,[n(D),o("div",null,[n(M,null,{title:t(()=>[i(" Manage API Tokens ")]),description:t(()=>[i(" You may delete any of your existing tokens if they are no longer needed. ")]),content:t(()=>[o("div",null,[(l(!0),d(g,null,f(e.tokens,s=>(l(),d("div",{class:"d-flex justify-content-between",key:s.id},[o("div",null,p(s.name),1),o("div",ve,[s.last_used_ago?(l(),d("div",Te," Last used "+p(s.last_used_ago),1)):m("",!0),e.availablePermissions.length>0?(l(),d("button",{key:1,class:"btn btn-link text-secondary",onClick:c=>e.manageApiTokenPermissions(s)}," Permissions ",8,Ae)):m("",!0),o("button",{class:"btn btn-link text-danger text-decoration-none",onClick:c=>e.confirmApiTokenDeletion(s)}," Delete ",8,ye)])]))),128))])]),_:1})])])):m("",!0),n(A,{id:"displayingTokenModal"},{title:t(()=>[i(" API Token ")]),content:t(()=>[$e,e.$page.props.jetstream.flash.token?(l(),d("div",Fe,p(e.$page.props.jetstream.flash.token),1)):m("",!0)]),footer:t(()=>[n(_,{onClick:r[2]||(r[2]=s=>e.displayingToken=!1),"data-dismiss":"modal"},{default:t(()=>[i(" Close ")]),_:1})]),_:1}),n(A,{id:"managingPermissionsForModal"},{title:t(()=>[i(" API Token Permissions ")]),content:t(()=>[o("div",je,[(l(!0),d(g,null,f(e.availablePermissions,s=>(l(),d("div",{class:"col-6",key:s},[o("div",Pe,[o("div",Ce,[n(v,{value:s,checked:e.updateApiTokenForm.permissions,"onUpdate:checked":r[3]||(r[3]=c=>e.updateApiTokenForm.permissions=c),id:`update-${s}`},null,8,["value","checked","id"]),o("label",{class:"form-check-label",for:`update-${s}`},p(s),9,Je)])])]))),128))])]),footer:t(()=>[n(_,{"data-dismiss":"modal",onClick:r[4]||(r[4]=s=>e.managingPermissionsFor=null)},{default:t(()=>[i(" Cancel ")]),_:1}),n(T,{class:u(["ms-2",{"text-black-50":e.updateApiTokenForm.processing}]),onClick:e.updateApiToken,disabled:e.updateApiTokenForm.processing},{default:t(()=>[i(" Save ")]),_:1},8,["onClick","class","disabled"])]),_:1}),n(V,{id:"apiTokenBeingDeletedModal"},{title:t(()=>[i(" Delete API Token ")]),content:t(()=>[i(" Are you sure you would like to delete this API token? ")]),footer:t(()=>[n(_,{onClick:r[5]||(r[5]=s=>e.apiTokenBeingDeleted=null),"data-dismiss":"modal"},{default:t(()=>[i(" Cancel ")]),_:1}),n(I,{class:u(["ms-2",{"text-white-50":e.deleteApiTokenForm.processing}]),onClick:e.deleteApiToken,disabled:e.deleteApiTokenForm.processing},{default:t(()=>[i(" Delete ")]),_:1},8,["onClick","class","disabled"])]),_:1})])}const Ye=F(le,[["render",we]]);export{Ye as default};