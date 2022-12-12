(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-772708f9"],{"08af":function(e,t,n){"use strict";var o=n("7a23");const i=["value","type","name","readonly","required","placeholder","min","max","step"],a=["value","type","name","readonly","required","placeholder","rows"];function s(e,t,n,s,r,c){const l=Object(o["resolveComponent"])("wwElement",!0);return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["ww-input-basic",{editing:c.isEditing}])},["textarea"!==n.content.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("input",Object(o["mergeProps"])({key:0,ref:"input"},e.$attrs,{value:c.value,class:["ww-input-basic__input",{editing:c.isEditing,hideArrows:n.content.hideArrows&&"number"===c.inputType}],type:c.inputType,name:n.wwElementState.name,readonly:n.content.readonly,required:n.content.required,placeholder:c.isAdvancedPlaceholder?"":e.wwLang.getText(n.content.placeholder),style:c.style,min:n.content.min,max:n.content.max,step:s.step,onInput:t[0]||(t[0]=e=>c.handleManualInput(e)),onBlur:t[1]||(t[1]=e=>c.onBlur(e)),onFocus:t[2]||(t[2]=e=>r.isFocused=!0)}),null,16,i)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("textarea",Object(o["mergeProps"])({key:1,ref:"input"},e.$attrs,{value:c.value,class:["ww-input-basic__input",{editing:c.isEditing}],type:n.content.type,name:n.wwElementState.name,readonly:n.content.readonly,required:n.content.required,placeholder:c.isAdvancedPlaceholder?"":e.wwLang.getText(n.content.placeholder),style:[c.style,{resize:n.content.resize?"":"none"}],rows:n.content.rows,onInput:t[3]||(t[3]=e=>c.handleManualInput(e)),onFocus:t[4]||(t[4]=e=>r.isFocused=!0),onBlur:t[5]||(t[5]=e=>r.isFocused=!1)}),null,16,a)),c.isAdvancedPlaceholder?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:2,ref:"placeholder",class:Object(o["normalizeClass"])(["ww-input-basic__placeholder",{editing:c.isEditing}]),style:Object(o["normalizeStyle"])(c.placeholderSyle),onClick:t[6]||(t[6]=(...e)=>c.focusInput&&c.focusInput(...e))},[Object(o["createVNode"])(l,Object(o["mergeProps"])({style:{pointerevents:"none"}},n.content.placeholderElement,{states:c.value.length?["active"]:[],"ww-props":{text:e.wwLang.getText(n.content.placeholder)||"Placeholder"}}),null,16,["states","ww-props"])],6)):Object(o["createCommentVNode"])("",!0)],2)}var r={inheritAttrs:!1,props:{content:{type:Object,required:!0},uid:{type:String,required:!0},wwElementState:{type:Object,required:!0}},emits:["trigger-event","add-state","remove-state","update:content:effect"],setup(e){const t=Object(o["computed"])(()=>Object.keys(e.wwElementState.props).includes("type")?e.wwElementState.props.type:e.content.type),n=Object(o["computed"])(()=>"decimal"===t.value?e.content.precision:"1");function i(e){if("decimal"!==t.value)return e;if(!e&&0!==e)return"";e=(""+e).replace(",",".");const o=-1!==e.indexOf(".")?n.value.split(".")[1].length:0,i=parseFloat(Number(e).toFixed(o).replace(",","."));return i}const{value:a,setValue:s}=wwLib.wwVariable.useComponentVariable({uid:e.uid,name:"value",type:Object(o["computed"])(()=>["decimal","number"].includes(t.value)?"number":"string"),defaultValue:void 0===e.content.value?"":i(e.content.value)});return{variableValue:a,setValue:s,formatValue:i,step:n,type:t}},data(){return{resizeObserver:null,paddingLeft:"0px",placeholderPosition:{top:"0px",left:"0px"},isFocused:!1,noTransition:!1,isMounted:!1}},computed:{isEditing(){return!1},value(){return this.variableValue},placeholderSyle(){const e=`all ${this.noTransition?"0ms":this.content.transition} ${this.content.timingFunction}`,t="outside"===this.content.placeholderPosition?{top:"-"+this.content.positioningAjustment,left:this.placeholderPosition.left,transform:`translate3d(0, -100%, 0) scale(${this.content.placeholderScaling})`,transformOrigin:"left",transition:e}:{top:this.content.positioningAjustment,left:this.placeholderPosition.left,transform:`translate3d(0, 0%, 0) scale(${this.content.placeholderScaling})`,transformOrigin:"left",transition:e};return this.content.forceAnimation&&this.isEditing||this.value.length||"focus"===this.content.animationTrigger&&this.isFocused?t:{top:this.placeholderPosition.top,left:this.placeholderPosition.left,userSelect:"none",transform:"translate3d(0, 0%, 0) scale(1)",transformOrigin:"left",transition:e}},style(){return{...wwLib.getTextStyleFromContent(this.content),"--placeholder-color":this.content.placeholderColor}},inputType(){return this.content?"password"===this.content.type?this.content.displayPassword?"text":"password":"decimal"===this.content.type?"number":this.content.type:"text"},isReadonly(){return void 0===this.wwElementState.props.readonly?this.content.readonly:this.wwElementState.props.readonly},isAdvancedPlaceholder(){return this.content.advancedPlaceholder&&!this.isReadonly}},watch:{"content.value"(e){"decimal"===this.type&&(e=this.formatValue(e)),e!==this.value&&(this.setValue(e),this.$emit("trigger-event",{name:"initValueChange",event:{value:e}}))},isReadonly:{immediate:!0,handler(e){e?this.$emit("add-state","readonly"):this.$emit("remove-state","readonly"),this.$nextTick(()=>{this.handleObserver()})}}},beforeUnmount(){this.resizeObserver&&this.resizeObserver.disconnect()},mounted(){this.isMounted=!0,this.handleObserver()},methods:{handleManualInput(e){const t=e.target.value;let n;if("number"===this.inputType&&t.length)try{n=parseFloat(t)}catch(o){n=t}else n=t;n!==this.value&&(this.setValue(n),this.$emit("trigger-event",{name:"change",event:{domEvent:e,value:n}}))},onBlur(e){this.correctDecimalValue(e),this.isFocused=!1},correctDecimalValue(e){if("decimal"===this.content.type){const t=this.formatValue(this.value);if(t===this.value)return;this.setValue(t),this.$emit("trigger-event",{name:"change",event:{domEvent:e,value:t}})}},handleObserver(){if(!this.isMounted)return;this.resizeObserver&&this.resizeObserver.disconnect();const e=this.$refs.input;e&&(this.updatePosition(e),this.resizeObserver=new ResizeObserver(()=>{this.updatePosition(e)}),this.resizeObserver.observe(e,{box:"device-pixel-content-box"}))},updatePosition(e){const t=this.$refs.placeholder;if(!e||!t||this.isReadonly)return;this.noTransition=!0;const n=e.getBoundingClientRect().height/2-t.getBoundingClientRect().height/2;this.placeholderPosition.top=n+"px",this.placeholderPosition.left=e.style.paddingLeft,setTimeout(()=>{this.noTransition=!1},wwLib.wwUtils.getLengthUnit(this.content.transition)[0])},focusInput(){if(this.isReadonly)return;const e=this.$refs.input;e&&e.focus()}}},c=(n("a474"),n("6b0d")),l=n.n(c);const d=l()(r,[["render",s],["__scopeId","data-v-7748665c"]]);t["a"]=d},"3c4f":function(e,t,n){"use strict";var o=n("7a23");const i=["name","autocomplete"],a={class:"ww-form-container__relative"};function s(e,t,n,s,r,c){const l=Object(o["resolveComponent"])("wwLayout");return Object(o["openBlock"])(),Object(o["createElementBlock"])("form",{name:c.formName,autocomplete:n.content.autocomplete,class:Object(o["normalizeClass"])(["ww-form-container",{editing:c.isEditing,selected:c.isSelected}]),"data-ww-flag":"form-container",onSubmit:t[0]||(t[0]=Object(o["withModifiers"])((...e)=>c.onSubmit&&c.onSubmit(...e),["prevent"]))},[Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(l,{class:"ww-form-container__content",path:"formContent"})])],42,i)}var r={props:{content:{type:Object,required:!0},wwElementState:{type:Object,required:!0}},emits:["trigger-event"],computed:{formName(){return this.wwElementState.name},isEditing(){return!1},isSelected(){return!1}},methods:{async onSubmit(){this.$emit("trigger-event",{name:"submit"})}}},c=(n("c47f"),n("6b0d")),l=n.n(c);const d=l()(r,[["render",s],["__scopeId","data-v-1f8b3096"]]);t["a"]=d},9428:function(e,t,n){},a474:function(e,t,n){"use strict";n("c6a5")},b5e6:function(e,t,n){"use strict";n.r(t);var o=n("62ec"),i=(n("7a23"),n("68df")),a=n("4bff"),s=n("08af"),r=n("93ec"),c=n("88b2"),l=n("e018"),d=n("aa5d"),u=n("3c4f"),p=n("43ec"),h=n("221a");o["default"].component("wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad",i["a"]),o["default"].component("wwobject-6f8796b1-8273-498d-95fc-7013b7c63214",a["a"]),o["default"].component("wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba",s["a"]),o["default"].component("wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1",r["a"]),o["default"].component("wwobject-21881619-a984-4847-81a9-922c3dbb5853",c["a"]),o["default"].component("wwobject-aa27b26f-0686-4c29-98c5-8217044045b7",l["a"]),o["default"].component("wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63",d["a"]),o["default"].component("wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834",u["a"]),o["default"].component("wwobject-0be9270a-04fc-44a2-bcd7-b58f7dcfd944",p["a"]),o["default"].component("section-99586bd3-2b15-4d6b-a025-6a50d07ca845",h["a"])},c47f:function(e,t,n){"use strict";n("9428")},c6a5:function(e,t,n){}}]);