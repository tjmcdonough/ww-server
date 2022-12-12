(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8048b6c8"],{"08af":function(e,t,n){"use strict";var o=n("7a23");const a=["value","type","name","readonly","required","placeholder","min","max","step"],i=["value","type","name","readonly","required","placeholder","rows"];function s(e,t,n,s,c,r){const l=Object(o["resolveComponent"])("wwElement",!0);return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["ww-input-basic",{editing:r.isEditing}])},["textarea"!==n.content.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("input",Object(o["mergeProps"])({key:0,ref:"input"},e.$attrs,{value:r.value,class:["ww-input-basic__input",{editing:r.isEditing,hideArrows:n.content.hideArrows&&"number"===r.inputType}],type:r.inputType,name:n.wwElementState.name,readonly:n.content.readonly,required:n.content.required,placeholder:r.isAdvancedPlaceholder?"":e.wwLang.getText(n.content.placeholder),style:r.style,min:n.content.min,max:n.content.max,step:s.step,onInput:t[0]||(t[0]=e=>r.handleManualInput(e)),onBlur:t[1]||(t[1]=e=>r.onBlur(e)),onFocus:t[2]||(t[2]=e=>c.isFocused=!0)}),null,16,a)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("textarea",Object(o["mergeProps"])({key:1,ref:"input"},e.$attrs,{value:r.value,class:["ww-input-basic__input",{editing:r.isEditing}],type:n.content.type,name:n.wwElementState.name,readonly:n.content.readonly,required:n.content.required,placeholder:r.isAdvancedPlaceholder?"":e.wwLang.getText(n.content.placeholder),style:[r.style,{resize:n.content.resize?"":"none"}],rows:n.content.rows,onInput:t[3]||(t[3]=e=>r.handleManualInput(e)),onFocus:t[4]||(t[4]=e=>c.isFocused=!0),onBlur:t[5]||(t[5]=e=>c.isFocused=!1)}),null,16,i)),r.isAdvancedPlaceholder?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:2,ref:"placeholder",class:Object(o["normalizeClass"])(["ww-input-basic__placeholder",{editing:r.isEditing}]),style:Object(o["normalizeStyle"])(r.placeholderSyle),onClick:t[6]||(t[6]=(...e)=>r.focusInput&&r.focusInput(...e))},[Object(o["createVNode"])(l,Object(o["mergeProps"])({style:{pointerevents:"none"}},n.content.placeholderElement,{states:r.value.length?["active"]:[],"ww-props":{text:e.wwLang.getText(n.content.placeholder)||"Placeholder"}}),null,16,["states","ww-props"])],6)):Object(o["createCommentVNode"])("",!0)],2)}var c={inheritAttrs:!1,props:{content:{type:Object,required:!0},uid:{type:String,required:!0},wwElementState:{type:Object,required:!0}},emits:["trigger-event","add-state","remove-state","update:content:effect"],setup(e){const t=Object(o["computed"])(()=>Object.keys(e.wwElementState.props).includes("type")?e.wwElementState.props.type:e.content.type),n=Object(o["computed"])(()=>"decimal"===t.value?e.content.precision:"1");function a(e){if("decimal"!==t.value)return e;if(!e&&0!==e)return"";e=(""+e).replace(",",".");const o=-1!==e.indexOf(".")?n.value.split(".")[1].length:0,a=parseFloat(Number(e).toFixed(o).replace(",","."));return a}const{value:i,setValue:s}=wwLib.wwVariable.useComponentVariable({uid:e.uid,name:"value",type:Object(o["computed"])(()=>["decimal","number"].includes(t.value)?"number":"string"),defaultValue:void 0===e.content.value?"":a(e.content.value)});return{variableValue:i,setValue:s,formatValue:a,step:n,type:t}},data(){return{resizeObserver:null,paddingLeft:"0px",placeholderPosition:{top:"0px",left:"0px"},isFocused:!1,noTransition:!1,isMounted:!1}},computed:{isEditing(){return!1},value(){return this.variableValue},placeholderSyle(){const e=`all ${this.noTransition?"0ms":this.content.transition} ${this.content.timingFunction}`,t="outside"===this.content.placeholderPosition?{top:"-"+this.content.positioningAjustment,left:this.placeholderPosition.left,transform:`translate3d(0, -100%, 0) scale(${this.content.placeholderScaling})`,transformOrigin:"left",transition:e}:{top:this.content.positioningAjustment,left:this.placeholderPosition.left,transform:`translate3d(0, 0%, 0) scale(${this.content.placeholderScaling})`,transformOrigin:"left",transition:e};return this.content.forceAnimation&&this.isEditing||this.value.length||"focus"===this.content.animationTrigger&&this.isFocused?t:{top:this.placeholderPosition.top,left:this.placeholderPosition.left,userSelect:"none",transform:"translate3d(0, 0%, 0) scale(1)",transformOrigin:"left",transition:e}},style(){return{...wwLib.getTextStyleFromContent(this.content),"--placeholder-color":this.content.placeholderColor}},inputType(){return this.content?"password"===this.content.type?this.content.displayPassword?"text":"password":"decimal"===this.content.type?"number":this.content.type:"text"},isReadonly(){return void 0===this.wwElementState.props.readonly?this.content.readonly:this.wwElementState.props.readonly},isAdvancedPlaceholder(){return this.content.advancedPlaceholder&&!this.isReadonly}},watch:{"content.value"(e){"decimal"===this.type&&(e=this.formatValue(e)),e!==this.value&&(this.setValue(e),this.$emit("trigger-event",{name:"initValueChange",event:{value:e}}))},isReadonly:{immediate:!0,handler(e){e?this.$emit("add-state","readonly"):this.$emit("remove-state","readonly"),this.$nextTick(()=>{this.handleObserver()})}}},beforeUnmount(){this.resizeObserver&&this.resizeObserver.disconnect()},mounted(){this.isMounted=!0,this.handleObserver()},methods:{handleManualInput(e){const t=e.target.value;let n;if("number"===this.inputType&&t.length)try{n=parseFloat(t)}catch(o){n=t}else n=t;n!==this.value&&(this.setValue(n),this.$emit("trigger-event",{name:"change",event:{domEvent:e,value:n}}))},onBlur(e){this.correctDecimalValue(e),this.isFocused=!1},correctDecimalValue(e){if("decimal"===this.content.type){const t=this.formatValue(this.value);if(t===this.value)return;this.setValue(t),this.$emit("trigger-event",{name:"change",event:{domEvent:e,value:t}})}},handleObserver(){if(!this.isMounted)return;this.resizeObserver&&this.resizeObserver.disconnect();const e=this.$refs.input;e&&(this.updatePosition(e),this.resizeObserver=new ResizeObserver(()=>{this.updatePosition(e)}),this.resizeObserver.observe(e,{box:"device-pixel-content-box"}))},updatePosition(e){const t=this.$refs.placeholder;if(!e||!t||this.isReadonly)return;this.noTransition=!0;const n=e.getBoundingClientRect().height/2-t.getBoundingClientRect().height/2;this.placeholderPosition.top=n+"px",this.placeholderPosition.left=e.style.paddingLeft,setTimeout(()=>{this.noTransition=!1},wwLib.wwUtils.getLengthUnit(this.content.transition)[0])},focusInput(){if(this.isReadonly)return;const e=this.$refs.input;e&&e.focus()}}},r=(n("a474"),n("6b0d")),l=n.n(r);const d=l()(c,[["render",s],["__scopeId","data-v-7748665c"]]);t["a"]=d},1386:function(e,t,n){"use strict";var o=n("7a23");function a(e,t,n,a,i,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"ww-icon",style:Object(o["normalizeStyle"])(s.style)},[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])([n.content.icon]),"aria-hidden":"true"},null,2)],4)}var i={props:{content:{type:Object,required:!0}},computed:{style(){return{color:this.content.color,fontSize:this.content.fontSize+"px"}}}},s=(n("e47a"),n("6b0d")),c=n.n(s);const r=c()(i,[["render",a],["__scopeId","data-v-0b86c4bc"]]);t["a"]=r},"13d8":function(e,t,n){"use strict";n("2963")},2963:function(e,t,n){},"3c4f":function(e,t,n){"use strict";var o=n("7a23");const a=["name","autocomplete"],i={class:"ww-form-container__relative"};function s(e,t,n,s,c,r){const l=Object(o["resolveComponent"])("wwLayout");return Object(o["openBlock"])(),Object(o["createElementBlock"])("form",{name:r.formName,autocomplete:n.content.autocomplete,class:Object(o["normalizeClass"])(["ww-form-container",{editing:r.isEditing,selected:r.isSelected}]),"data-ww-flag":"form-container",onSubmit:t[0]||(t[0]=Object(o["withModifiers"])((...e)=>r.onSubmit&&r.onSubmit(...e),["prevent"]))},[Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])(l,{class:"ww-form-container__content",path:"formContent"})])],42,a)}var c={props:{content:{type:Object,required:!0},wwElementState:{type:Object,required:!0}},emits:["trigger-event"],computed:{formName(){return this.wwElementState.name},isEditing(){return!1},isSelected(){return!1}},methods:{async onSubmit(){this.$emit("trigger-event",{name:"submit"})}}},r=(n("c47f"),n("6b0d")),l=n.n(r);const d=l()(c,[["render",s],["__scopeId","data-v-1f8b3096"]]);t["a"]=d},"433b":function(e,t,n){"use strict";var o=n("7a23");function a(e,t,n,a,i,s){const c=Object(o["resolveComponent"])("wwLayout");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"modal-container",style:Object(o["normalizeStyle"])(s.backdropStyle),"ww-responsive":"modal-container",onClick:t[0]||(t[0]=Object(o["withModifiers"])(t=>e.$emit("trigger-event",{name:"backdropClick"}),["self"]))},[Object(o["createVNode"])(o["Transition"],{name:n.content.animation,mode:"out-in"},{default:Object(o["withCtx"])(()=>[s.show?(Object(o["openBlock"])(),Object(o["createBlock"])(c,{key:0,class:Object(o["normalizeClass"])(["modal-dropzone",n.content.position]),direction:"column",path:"modalContent",style:Object(o["normalizeStyle"])(s.modalContentStyle),"ww-responsive":"modal-dropzone","inherit-from-element":["width"]},null,8,["class","style"])):Object(o["createCommentVNode"])("",!0)]),_:1},8,["name"])],4)}const i={topLeft:{"--align":"start","--top":"0%","--left":"0%","--translateX":"0%","--translateY":"0%"},topMiddle:{"--align":"center","--top":"0%","--left":"50%","--translateX":"-50%","--translateY":"0%"},topRight:{"--align":"end","--top":"0%","--right":"0%","--translateX":"0%","--translateY":"0%"},middleLeft:{"--align":"start","--top":"50%","--left":"0%","--translateX":"0%","--translateY":"-50%"},middle:{"--align":"center","--top":"50%","--left":"50%","--translateX":"-50%","--translateY":"-50%"},middleRight:{"--align":"end","--top":"50%","--right":"0%","--translateX":"0%","--translateY":"-50%"},bottomLeft:{"--align":"start","--bottom":"0%","--left":"0%","--translateX":"0%","--translateY":"0%"},bottomMiddle:{"--align":"center","--bottom":"0%","--left":"50%","--translateX":"-50%","--translateY":"0%"},bottomRight:{"--align":"end","--bottom":"0%","--right":"0%","--translateX":"0%","--translateY":"0%"}};var s={props:{content:{type:Object,required:!0}},emits:["trigger-event","update:sidepanel-content"],computed:{isEditing(){return!1},show(){return this.content.display},backdropStyle(){return this.show&&this.content.backdrop?{"--backdropColor":this.content.backdropColor,"--backdropEvents":"auto"}:{"--backdropColor":"transparent","--backdropEvents":"none"}},modalContentStyle(){const e={"--transition":this.content.transition};return"custom"!==this.content.position?{...e,...i[this.content.position]}:{...e,"--top":this.content.positionTop,"--left":this.content.positionLeft}}},watch:{}},c=(n("13d8"),n("6b0d")),r=n.n(c);const l=r()(s,[["render",a],["__scopeId","data-v-1cae59f0"]]);t["a"]=l},7290:function(e,t,n){"use strict";n.r(t);var o=n("62ec"),a=(n("7a23"),n("68df")),i=n("4bff"),s=n("1386"),c=n("08af"),r=n("93ec"),l=n("88b2"),d=n("e018"),u=n("aa5d"),p=n("3c4f"),m=n("43ec"),h=n("433b"),b=n("221a");o["default"].component("wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad",a["a"]),o["default"].component("wwobject-6f8796b1-8273-498d-95fc-7013b7c63214",i["a"]),o["default"].component("wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15",s["a"]),o["default"].component("wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba",c["a"]),o["default"].component("wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1",r["a"]),o["default"].component("wwobject-21881619-a984-4847-81a9-922c3dbb5853",l["a"]),o["default"].component("wwobject-aa27b26f-0686-4c29-98c5-8217044045b7",d["a"]),o["default"].component("wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63",u["a"]),o["default"].component("wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834",p["a"]),o["default"].component("wwobject-0be9270a-04fc-44a2-bcd7-b58f7dcfd944",m["a"]),o["default"].component("section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d",h["a"]),o["default"].component("section-99586bd3-2b15-4d6b-a025-6a50d07ca845",b["a"])},8101:function(e,t,n){},9428:function(e,t,n){},a474:function(e,t,n){"use strict";n("c6a5")},c47f:function(e,t,n){"use strict";n("9428")},c6a5:function(e,t,n){},e47a:function(e,t,n){"use strict";n("8101")}}]);