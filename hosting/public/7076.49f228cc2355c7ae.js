"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7076],{7076:(M,w,a)=>{a.r(w),a.d(w,{ion_select:()=>I,ion_select_option:()=>z,ion_select_popover:()=>T});var m=a(467),s=a(5539),C=a(9001),u=a(5572),g=a(4920),x=a(2478),E=a(5083),r=a(333),c=a(2935),d=a(3992),h=a(3635);a(8476),a(7567),a(1970);const I=class{constructor(e){(0,s.r)(this,e),this.ionChange=(0,s.d)(this,"ionChange",7),this.ionCancel=(0,s.d)(this,"ionCancel",7),this.ionDismiss=(0,s.d)(this,"ionDismiss",7),this.ionFocus=(0,s.d)(this,"ionFocus",7),this.ionBlur=(0,s.d)(this,"ionBlur",7),this.ionStyle=(0,s.d)(this,"ionStyle",7),this.inputId="ion-sel-"+F++,this.inheritedAttributes={},this.onClick=t=>{const l=t.target,o=l.closest('[slot="start"], [slot="end"]');l===this.el||null===o?(this.setFocus(),this.open(t)):t.preventDefault()},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.isExpanded=!1,this.cancelText="Cancel",this.color=void 0,this.compareWith=void 0,this.disabled=!1,this.fill=void 0,this.interface="alert",this.interfaceOptions={},this.justify="space-between",this.label=void 0,this.labelPlacement="start",this.multiple=!1,this.name=this.inputId,this.okText="OK",this.placeholder=void 0,this.selectedText=void 0,this.toggleIcon=void 0,this.expandedIcon=void 0,this.shape=void 0,this.value=void 0}styleChanged(){this.emitStyle()}setValue(e){this.value=e,this.ionChange.emit({value:e})}componentWillLoad(){this.inheritedAttributes=(0,g.h)(this.el,["aria-label"])}connectedCallback(){var e=this;return(0,m.A)(function*(){const{el:t}=e;e.notchController=(0,C.c)(t,()=>e.notchSpacerEl,()=>e.labelSlot),e.updateOverlayOptions(),e.emitStyle(),e.mutationO=(0,c.w)(e.el,"ion-select-option",(0,m.A)(function*(){e.updateOverlayOptions(),(0,s.j)(e)}))})()}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0),this.notchController&&(this.notchController.destroy(),this.notchController=void 0)}open(e){var t=this;return(0,m.A)(function*(){if(t.disabled||t.isExpanded)return;t.isExpanded=!0;const l=t.overlay=yield t.createOverlay(e);if(l.onDidDismiss().then(()=>{t.overlay=void 0,t.isExpanded=!1,t.ionDismiss.emit(),t.setFocus()}),yield l.present(),"popover"===t.interface){const o=t.childOpts.map(i=>i.value).indexOf(t.value);if(o>-1){const i=l.querySelector(`.select-interface-option:nth-child(${o+1})`);if(i){(0,g.f)(i);const n=i.querySelector("ion-radio, ion-checkbox");n&&n.focus()}}else{const i=l.querySelector("ion-radio:not(.radio-disabled), ion-checkbox:not(.checkbox-disabled)");i&&((0,g.f)(i.closest("ion-item")),i.focus())}}return l})()}createOverlay(e){let t=this.interface;return"action-sheet"===t&&this.multiple&&(console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`),t="alert"),"popover"===t&&!e&&(console.warn(`Select interface cannot be a "${t}" without passing an event. Using the "alert" interface instead.`),t="alert"),"action-sheet"===t?this.openActionSheet():"popover"===t?this.openPopover(e):this.openAlert()}updateOverlayOptions(){const e=this.overlay;if(!e)return;const t=this.childOpts,l=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,l);break;case"popover":const o=e.querySelector("ion-select-popover");o&&(o.options=this.createPopoverOptions(t,l));break;case"alert":e.inputs=this.createAlertInputs(t,this.multiple?"checkbox":"radio",l)}}createActionSheetButtons(e,t){const l=e.map(o=>{const i=y(o),n=Array.from(o.classList).filter(p=>"hydrated"!==p).join(" "),b=`${P} ${n}`;return{role:(0,u.i)(t,i,this.compareWith)?"selected":"",text:o.textContent,cssClass:b,handler:()=>{this.setValue(i)}}});return l.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),l}createAlertInputs(e,t,l){return e.map(i=>{const n=y(i),b=Array.from(i.classList).filter(f=>"hydrated"!==f).join(" ");return{type:t,cssClass:`${P} ${b}`,label:i.textContent||"",value:n,checked:(0,u.i)(l,n,this.compareWith),disabled:i.disabled}})}createPopoverOptions(e,t){return e.map(o=>{const i=y(o),n=Array.from(o.classList).filter(p=>"hydrated"!==p).join(" ");return{text:o.textContent||"",cssClass:`${P} ${n}`,value:i,checked:(0,u.i)(t,i,this.compareWith),disabled:o.disabled,handler:p=>{this.setValue(p),this.multiple||this.close()}}})}openPopover(e){var t=this;return(0,m.A)(function*(){const{fill:l,labelPlacement:o}=t,i=t.interfaceOptions,n=(0,h.b)(t),b="md"!==n,p=t.multiple,f=t.value;let _=e,O="auto";"floating"===o||"stacked"===o||"md"===n&&void 0!==l?O="cover":_=Object.assign(Object.assign({},e),{detail:{ionShadowTarget:t.nativeWrapperEl}});const v=Object.assign(Object.assign({mode:n,event:_,alignment:"center",size:O,showBackdrop:b},i),{component:"ion-select-popover",cssClass:["select-popover",i.cssClass],componentProps:{header:i.header,subHeader:i.subHeader,message:i.message,multiple:p,value:f,options:t.createPopoverOptions(t.childOpts,f)}});return x.c.create(v)})()}openActionSheet(){var e=this;return(0,m.A)(function*(){const t=(0,h.b)(e),l=e.interfaceOptions,o=Object.assign(Object.assign({mode:t},l),{buttons:e.createActionSheetButtons(e.childOpts,e.value),cssClass:["select-action-sheet",l.cssClass]});return x.b.create(o)})()}openAlert(){var e=this;return(0,m.A)(function*(){const t=e.interfaceOptions,l=e.multiple?"checkbox":"radio",o=(0,h.b)(e),i=Object.assign(Object.assign({mode:o},t),{header:t.header?t.header:e.labelText,inputs:e.createAlertInputs(e.childOpts,l,e.value),buttons:[{text:e.cancelText,role:"cancel",handler:()=>{e.ionCancel.emit()}},{text:e.okText,handler:n=>{e.setValue(n)}}],cssClass:["select-alert",t.cssClass,e.multiple?"multiple-select-alert":"single-select-alert"]});return x.a.create(i)})()}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}get labelText(){const{label:e}=this;if(void 0!==e)return e;const{labelSlot:t}=this;return null!==t?t.textContent:void 0}getText(){const e=this.selectedText;return null!=e&&""!==e?e:W(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){const{disabled:e}=this;this.ionStyle.emit({"interactive-disabled":e})}renderLabel(){const{label:e}=this;return(0,s.h)("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!this.hasLabel},part:"label"},void 0===e?(0,s.h)("slot",{name:"label"}):(0,s.h)("div",{class:"label-text"},e))}componentDidRender(){var e;null===(e=this.notchController)||void 0===e||e.calculateNotchWidth()}get labelSlot(){return this.el.querySelector('[slot="label"]')}get hasLabel(){return void 0!==this.label||null!==this.labelSlot}renderLabelContainer(){return"md"===(0,h.b)(this)&&"outline"===this.fill?[(0,s.h)("div",{class:"select-outline-container"},(0,s.h)("div",{class:"select-outline-start"}),(0,s.h)("div",{class:{"select-outline-notch":!0,"select-outline-notch-hidden":!this.hasLabel}},(0,s.h)("div",{class:"notch-spacer","aria-hidden":"true",ref:l=>this.notchSpacerEl=l},this.label)),(0,s.h)("div",{class:"select-outline-end"})),this.renderLabel()]:this.renderLabel()}renderSelectText(){const{placeholder:e}=this;let l=!1,o=this.getText();return""===o&&void 0!==e&&(o=e,l=!0),(0,s.h)("div",{"aria-hidden":"true",class:{"select-text":!0,"select-placeholder":l},part:l?"placeholder":"text"},o)}renderSelectIcon(){const e=(0,h.b)(this),{isExpanded:t,toggleIcon:l,expandedIcon:o}=this;let i;return i=t&&void 0!==o?o:null!=l?l:"ios"===e?d.w:d.q,(0,s.h)("ion-icon",{class:"select-icon",part:"icon","aria-hidden":"true",icon:i})}get ariaLabel(){var e;const{placeholder:t,inheritedAttributes:l}=this,o=this.getText(),i=null!==(e=l["aria-label"])&&void 0!==e?e:this.labelText;let n=o;return""===n&&void 0!==t&&(n=t),void 0!==i&&(n=""===n?i:`${i}, ${n}`),n}renderListbox(){const{disabled:e,inputId:t,isExpanded:l}=this;return(0,s.h)("button",{disabled:e,id:t,"aria-label":this.ariaLabel,"aria-haspopup":"dialog","aria-expanded":`${l}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:o=>this.focusEl=o})}render(){const{disabled:e,el:t,isExpanded:l,expandedIcon:o,labelPlacement:i,justify:n,placeholder:b,fill:p,shape:f,name:_,value:O}=this,A=(0,h.b)(this),v="floating"===i||"stacked"===i,H=!v,N=(0,E.i)(t)?"rtl":"ltr",D=(0,r.h)("ion-item",this.el),G="md"===A&&"outline"!==p&&!D,L=this.hasValue(),J=null!==t.querySelector('[slot="start"], [slot="end"]');(0,g.d)(!0,t,_,U(O),e);const Q="stacked"===i||"floating"===i&&(L||l||J);return(0,s.h)(s.f,{key:"6e282b0b0bc7202c4a1601e5997933c62a7598fd",onClick:this.onClick,class:(0,r.c)(this.color,{[A]:!0,"in-item":D,"in-item-color":(0,r.h)("ion-item.ion-color",t),"select-disabled":e,"select-expanded":l,"has-expanded-icon":void 0!==o,"has-value":L,"label-floating":Q,"has-placeholder":void 0!==b,"ion-focusable":!0,[`select-${N}`]:!0,[`select-fill-${p}`]:void 0!==p,[`select-justify-${n}`]:H,[`select-shape-${f}`]:void 0!==f,[`select-label-placement-${i}`]:!0})},(0,s.h)("label",{key:"f2624d200a6f185b4ecdb0df3ffabc4d258adec9",class:"select-wrapper",id:"select-label"},this.renderLabelContainer(),(0,s.h)("div",{key:"71cdbfd064bd5f3c49ae390c09b05c0e1b9937ea",class:"select-wrapper-inner"},(0,s.h)("slot",{key:"a85d652a91c09b71ea7c4ccf0c4ff9dea4000c8f",name:"start"}),(0,s.h)("div",{key:"d101e38fa9fb55612f98e8d82ac637647673abda",class:"native-wrapper",ref:X=>this.nativeWrapperEl=X,part:"container"},this.renderSelectText(),this.renderListbox()),(0,s.h)("slot",{key:"3d005f2281bef9e51311f76b845c8a6da8a71803",name:"end"}),!v&&this.renderSelectIcon()),v&&this.renderSelectIcon(),G&&(0,s.h)("div",{key:"87a7fe0f38b718cbd0b36d971e1eee7013e660a9",class:"select-highlight"})))}get el(){return(0,s.i)(this)}static get watchers(){return{disabled:["styleChanged"],isExpanded:["styleChanged"],placeholder:["styleChanged"],value:["styleChanged"]}}},y=e=>{const t=e.value;return void 0===t?e.textContent||"":t},U=e=>{if(null!=e)return Array.isArray(e)?e.join(","):e.toString()},W=(e,t,l)=>void 0===t?"":Array.isArray(t)?t.map(o=>j(e,o,l)).filter(o=>null!==o).join(", "):j(e,t,l)||"",j=(e,t,l)=>{const o=e.find(i=>(0,u.c)(t,y(i),l));return o?o.textContent:null};let F=0;const P="select-interface-option";I.style={ios:":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]),:host([slot=end]){width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;-ms-flex-negative:0;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.select-wrapper .select-placeholder{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{-ms-flex-positive:1;flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.select-justify-start) .select-wrapper{-ms-flex-pack:start;justify-content:start}:host(.select-justify-end) .select-wrapper{-ms-flex-pack:end;justify-content:end}:host(.select-label-placement-start) .select-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;-ms-flex-positive:1;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]:last-of-type){-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}::slotted([slot=end]:first-of-type){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host{--highlight-height:0px}.select-icon{width:1.125rem;height:1.125rem;color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 1.125rem - 4px)}:host(.select-disabled){opacity:0.3}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}",md:":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]),:host([slot=end]){width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;-ms-flex-negative:0;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.select-wrapper .select-placeholder{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{-ms-flex-positive:1;flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.select-justify-start) .select-wrapper{-ms-flex-pack:start;justify-content:start}:host(.select-justify-end) .select-wrapper{-ms-flex-pack:end;justify-content:end}:host(.select-label-placement-start) .select-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;-ms-flex-positive:1;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]:last-of-type){-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}::slotted([slot=end]:first-of-type){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.select-fill-solid){--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-color:var(--ion-color-step-500, var(--ion-background-color-step-500, gray));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-solid) .select-wrapper{border-bottom:var(--border-width) var(--border-style) var(--border-color)}:host(.has-focus.select-fill-solid.ion-valid),:host(.select-fill-solid.ion-touched.ion-invalid){--border-color:var(--highlight-color)}:host(.select-fill-solid) .select-bottom{border-top:none}@media (any-hover: hover){:host(.select-fill-solid:hover){--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}:host(.select-fill-solid.select-expanded),:host(.select-fill-solid.ion-focused){--background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}:host(.select-fill-solid) .select-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0px;border-end-start-radius:0px}:host(.label-floating.select-fill-solid) .label-text-wrapper{max-width:calc(100% / 0.75)}:host(.select-fill-outline){--border-color:var(--ion-color-step-300, var(--ion-background-color-step-300, #b3b3b3));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-outline.select-shape-round){--border-radius:28px;--padding-start:32px;--padding-end:32px}:host(.has-focus.select-fill-outline.ion-valid),:host(.select-fill-outline.ion-touched.ion-invalid){--border-color:var(--highlight-color)}@media (any-hover: hover){:host(.select-fill-outline:hover){--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}:host(.select-fill-outline.select-expanded),:host(.select-fill-outline.ion-focused){--border-width:var(--highlight-height);--border-color:var(--highlight-color)}:host(.select-fill-outline) .select-bottom{border-top:none}:host(.select-fill-outline) .select-wrapper{border-bottom:none}:host(.select-ltr.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-fill-outline.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-fill-outline.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-fill-outline.select-label-placement-floating) .label-text-wrapper{position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .label-text-wrapper{position:relative;z-index:1}:host(.label-floating.select-fill-outline) .label-text-wrapper{-webkit-transform:translateY(-32%) scale(0.75);transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc((100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75)}:host(.select-fill-outline.select-label-placement-stacked) select,:host(.select-fill-outline.select-label-placement-floating) select{margin-left:0;margin-right:0;margin-top:6px;margin-bottom:6px}:host(.select-fill-outline) .select-outline-container{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-end{pointer-events:none}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-notch,:host(.select-fill-outline) .select-outline-end{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.select-fill-outline) .select-outline-notch{max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .notch-spacer{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none}:host(.select-fill-outline) .select-outline-start{-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color)}:host(.select-fill-outline) .select-outline-start{border-start-start-radius:var(--border-radius);border-start-end-radius:0px;border-end-end-radius:0px;border-end-start-radius:var(--border-radius)}:host(.select-fill-outline) .select-outline-start{width:calc(var(--padding-start) - 4px)}:host(.select-fill-outline) .select-outline-end{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color)}:host(.select-fill-outline) .select-outline-end{border-start-start-radius:0px;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);border-end-start-radius:0px}:host(.select-fill-outline) .select-outline-end{-ms-flex-positive:1;flex-grow:1}:host(.label-floating.select-fill-outline) .select-outline-notch{border-top:none}:host{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--highlight-height:2px}.select-icon{width:0.8125rem;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray))}:host(.select-label-placement-floating.select-expanded) .label-text-wrapper,:host(.select-label-placement-floating.ion-focused) .label-text-wrapper,:host(.select-label-placement-stacked.select-expanded) .label-text-wrapper,:host(.select-label-placement-stacked.ion-focused) .label-text-wrapper{color:var(--highlight-color)}:host(.has-focus.select-label-placement-floating.ion-valid) .label-text-wrapper,:host(.select-label-placement-floating.ion-touched.ion-invalid) .label-text-wrapper,:host(.has-focus.select-label-placement-stacked.ion-valid) .label-text-wrapper,:host(.select-label-placement-stacked.ion-touched.ion-invalid) .label-text-wrapper{color:var(--highlight-color)}.select-highlight{bottom:-1px;position:absolute;width:100%;height:var(--highlight-height);-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 200ms;transition:-webkit-transform 200ms;transition:transform 200ms;transition:transform 200ms, -webkit-transform 200ms;background:var(--highlight-color)}.select-highlight{inset-inline-start:0}:host(.select-expanded) .select-highlight,:host(.ion-focused) .select-highlight{-webkit-transform:scale(1);transform:scale(1)}:host(.in-item) .select-highlight{bottom:0}:host(.in-item) .select-highlight{inset-inline-start:0}:host(.select-expanded:not(.has-expanded-icon)) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.select-expanded) .select-wrapper .select-icon,:host(.has-focus.ion-valid) .select-wrapper .select-icon,:host(.ion-touched.ion-invalid) .select-wrapper .select-icon,:host(.ion-focused) .select-wrapper .select-icon{color:var(--highlight-color)}:host(.select-shape-round){--border-radius:16px}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 0.8125rem - 4px)}:host(.select-disabled){opacity:0.38}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}"};const z=class{constructor(e){(0,s.r)(this,e),this.inputId="ion-selopt-"+K++,this.disabled=!1,this.value=void 0}render(){return(0,s.h)(s.f,{key:"ba5a9c695c53fe0802af11a49f4305a9b8f71773",role:"option",id:this.inputId,class:(0,h.b)(this)})}get el(){return(0,s.i)(this)}};let K=0;z.style=":host{display:none}";const T=class{constructor(e){(0,s.r)(this,e),this.header=void 0,this.subHeader=void 0,this.message=void 0,this.multiple=void 0,this.options=[]}findOptionFromEvent(e){const{options:t}=this;return t.find(l=>l.value===e.target.value)}callOptionHandler(e){const t=this.findOptionFromEvent(e),l=this.getValues(e);null!=t&&t.handler&&(0,x.s)(t.handler,l)}dismissParentPopover(){const e=this.el.closest("ion-popover");e&&e.dismiss()}setChecked(e){const{multiple:t}=this,l=this.findOptionFromEvent(e);t&&l&&(l.checked=e.detail.checked)}getValues(e){const{multiple:t,options:l}=this;if(t)return l.filter(i=>i.checked).map(i=>i.value);const o=this.findOptionFromEvent(e);return o?o.value:void 0}renderOptions(e){const{multiple:t}=this;return!0===t?this.renderCheckboxOptions(e):this.renderRadioOptions(e)}renderCheckboxOptions(e){return e.map(t=>(0,s.h)("ion-item",{class:Object.assign({"item-checkbox-checked":t.checked},(0,r.g)(t.cssClass))},(0,s.h)("ion-checkbox",{value:t.value,disabled:t.disabled,checked:t.checked,justify:"start",labelPlacement:"end",onIonChange:l=>{this.setChecked(l),this.callOptionHandler(l),(0,s.j)(this)}},t.text)))}renderRadioOptions(e){const t=e.filter(l=>l.checked).map(l=>l.value)[0];return(0,s.h)("ion-radio-group",{value:t,onIonChange:l=>this.callOptionHandler(l)},e.map(l=>(0,s.h)("ion-item",{class:Object.assign({"item-radio-checked":l.value===t},(0,r.g)(l.cssClass))},(0,s.h)("ion-radio",{value:l.value,disabled:l.disabled,onClick:()=>this.dismissParentPopover(),onKeyUp:o=>{" "===o.key&&this.dismissParentPopover()}},l.text))))}render(){const{header:e,message:t,options:l,subHeader:o}=this,i=void 0!==o||void 0!==t;return(0,s.h)(s.f,{key:"302553a2eec4d1442751b8af28b7c9bd3487fd5d",class:(0,h.b)(this)},(0,s.h)("ion-list",{key:"39ae8579e6fe3bae2c7504147268ad5c82fd27e6"},void 0!==e&&(0,s.h)("ion-list-header",{key:"e0e6686380d188f46c593e1bb25287dcf08c75c2"},e),i&&(0,s.h)("ion-item",{key:"8a2d8652db269593c0ba7d767277e12c2b06144d"},(0,s.h)("ion-label",{key:"a30cc0ecf95d5bdd6421ee1683922c1b853e98ea",class:"ion-text-wrap"},void 0!==o&&(0,s.h)("h3",{key:"c298459ca450123808a08d65660825b2c26d00e5"},o),void 0!==t&&(0,s.h)("p",{key:"ed895fbaec020e809021138401341b6fd7675035"},t))),this.renderOptions(l)))}get el(){return(0,s.i)(this)}};T.style={ios:".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-ios-h{overflow-y:auto}",md:".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-md-h{overflow-y:auto}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md::part(container){display:none}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}"}},333:(M,w,a)=>{a.d(w,{c:()=>C,g:()=>g,h:()=>s,o:()=>E});var m=a(467);const s=(r,c)=>null!==c.closest(r),C=(r,c)=>"string"==typeof r&&r.length>0?Object.assign({"ion-color":!0,[`ion-color-${r}`]:!0},c):c,g=r=>{const c={};return(r=>void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter(d=>null!=d).map(d=>d.trim()).filter(d=>""!==d):[])(r).forEach(d=>c[d]=!0),c},x=/^[a-z][a-z0-9+\-.]*:/,E=function(){var r=(0,m.A)(function*(c,d,h,S){if(null!=c&&"#"!==c[0]&&!x.test(c)){const k=document.querySelector("ion-router");if(k)return null!=d&&d.preventDefault(),k.push(c,h,S)}return!1});return function(d,h,S,k){return r.apply(this,arguments)}}()}}]);