(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9239a24c"],{"10f8":function(e,t,o){"use strict";var n=o("7a23");const a={class:"ww-expand"},c={key:0,class:"unactive-toggle"},i={key:0,class:"label unactive label-xs normal"},l={key:1,class:"active-toggle"},d={key:0,class:"label active label-xs normal"},s={class:"content"},b={key:0,class:"label content label-xs normal"};function r(e,t,o,r,u,f){const w=Object(n["resolveComponent"])("wwLayout"),m=Object(n["resolveComponent"])("wwExpandTransition");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("div",{class:"toggle-container",onClick:t[0]||(t[0]=(...e)=>f.toggleContent&&f.toggleContent(...e))},[!u.isVisible||u.editLayout?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[u.editLayout?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,"closed")):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(w,{class:Object(n["normalizeClass"])(["layout toggle-layout",{isEditing:f.isEditing}]),path:"activeToggleLayout"},null,8,["class"])])):Object(n["createCommentVNode"])("",!0),u.isVisible||u.editLayout?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[u.editLayout?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",d,"opened")):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(w,{class:Object(n["normalizeClass"])(["layout toggle-layout",{isEditing:f.isEditing}]),path:"toggleLayout"},null,8,["class"])])):Object(n["createCommentVNode"])("",!0)]),Object(n["createVNode"])(m,{"transition-function":"ease"},{default:Object(n["withCtx"])(()=>[Object(n["withDirectives"])(Object(n["createElementVNode"])("div",s,[u.editLayout?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",b,"content")):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(w,{class:Object(n["normalizeClass"])(["layout content-layout",{isEditing:f.isEditing}]),path:"contentLayout"},null,8,["class"])],512),[[n["vShow"],u.isVisible||f.isEditing]])]),_:1})])}function u(e,t,o,a,c,i){return o.noTransition?Object(n["renderSlot"])(e.$slots,"default",{key:0}):(Object(n["openBlock"])(),Object(n["createBlock"])(n["Transition"],{key:1,name:"expand",onBeforeEnter:i.beforeEnter,onEnter:i.enter,onLeave:i.leave,onAfterEnter:i.afterEnter},{default:Object(n["withCtx"])(()=>[Object(n["renderSlot"])(e.$slots,"default")]),_:3},8,["onBeforeEnter","onEnter","onLeave","onAfterEnter"]))}var f={name:"wwExpandTransition",props:{noTransition:{type:Boolean,default:!1},minHeight:{type:Number,default:0}},methods:{beforeEnter(e){e.style.overflowY="hidden"},enter(e){const{width:t}=window.getComputedStyle(e),o=e.style.width;e.style.width=t,e.style.position="absolute",e.style.visibility="hidden",e.style.height="auto";const{height:n}=window.getComputedStyle(e);e.style.width=o,e.style.position="",e.style.visibility="",e.style.height=this.minHeight||0,window.getComputedStyle(e).height,setTimeout(()=>{e.style.height=n})},afterEnter(e){e.style.height="auto",e.style.overflowY="unset"},leave(e){const{height:t}=window.getComputedStyle(e);e.style.height=t,e.style.overflowY="hidden",window.getComputedStyle(e).height,setTimeout(()=>{e.style.height=this.minHeight||0})}}},w=(o("b005"),o("6b0d")),m=o.n(w);const p=m()(f,[["render",u]]);var j=p,y={components:{wwExpandTransition:j},props:{content:{type:Object,required:!0}},data(){return{isVisible:!1,editLayout:!1}},computed:{isEditing(){return!1}},watch:{isEditing(){this.editLayout=!1}},mounted(){this.editLayout=!1},beforeUnmount(){this.editLayout=!1},methods:{toggleContent(){this.isEditing||(this.isVisible=!this.isVisible)}}};o("17e7");const h=m()(y,[["render",r],["__scopeId","data-v-29b406f5"]]);t["a"]=h},"17e7":function(e,t,o){"use strict";o("9255")},3760:function(e,t,o){},"7d78":function(e,t,o){"use strict";o.r(t);var n=o("62ec"),a=(o("7a23"),o("e018")),c=o("10f8"),i=o("43ec"),l=o("88b2"),d=o("c93c"),s=o("8b73"),b=o("93ec"),r=o("68df"),u=o("8939"),f=o("8436"),w=o("1386"),m=o("3c4f"),p=o("aa5d"),j=o("4bff"),y=o("42fb"),h=o("08af"),g=o("221a"),O=o("433b");n["default"].component("wwobject-aa27b26f-0686-4c29-98c5-8217044045b7",a["a"]),n["default"].component("wwobject-53401515-b694-4c79-a88d-abeecb1de562",c["a"]),n["default"].component("wwobject-0be9270a-04fc-44a2-bcd7-b58f7dcfd944",i["a"]),n["default"].component("wwobject-21881619-a984-4847-81a9-922c3dbb5853",l["a"]),n["default"].component("wwobject-700d9467-e29c-4129-b103-664e9d8611dd",d["a"]),n["default"].component("wwobject-0dc461bb-103e-4b2e-80e0-846ec3c30a6e",s["a"]),n["default"].component("wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1",b["a"]),n["default"].component("wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad",r["a"]),n["default"].component("wwobject-84bb3944-0404-4c4e-b0d5-058a63e4554a",u["a"]),n["default"].component("wwobject-9c263ffe-7da7-45e7-832c-543aef56faef",f["a"]),n["default"].component("wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15",w["a"]),n["default"].component("wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834",m["a"]),n["default"].component("wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63",p["a"]),n["default"].component("wwobject-6f8796b1-8273-498d-95fc-7013b7c63214",j["a"]),n["default"].component("wwobject-a36eacfa-16af-4363-858d-a03177f211d4",y["a"]),n["default"].component("wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba",h["a"]),n["default"].component("section-99586bd3-2b15-4d6b-a025-6a50d07ca845",g["a"]),n["default"].component("section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d",O["a"])},9255:function(e,t,o){},b005:function(e,t,o){"use strict";o("3760")}}]);