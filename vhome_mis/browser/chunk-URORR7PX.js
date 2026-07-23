import{a as et,b as Lt,c as Me,d as Cn,e as Tn,f as kn,g as En,h as dt}from"./chunk-W6ARN4IS.js";import{A as yn,B as Mn,C as Sn,D as ct,E as mt,F as pt,G as ut,H as gt,I as ft,J as bt,K as _t,L as ht,M as vt,N as yt,O as Mt,P as St,Q as xt,b as at,c as nt,d as it,e as on,f as rt,g as dn,h as se,j as ot,k as cn,l as mn,m as Se,n as Gt,p as lt,q as G,r as pn,s as un,t as gn,u as st,v as fn,w as bn,x as _n,y as hn,z as vn}from"./chunk-UBKQE7SV.js";import{a as ln,c as sn,e as xn,f as Dn}from"./chunk-GJIWY5JZ.js";import{a as tt}from"./chunk-QFMNEE4V.js";import{c as Ga}from"./chunk-IIUSXNR5.js";import{a as za,b as ja,c as Ua,d as Ue,e as $a,f as $e,g as qe,h as qa}from"./chunk-THKG7UBC.js";import{$ as ne,E as La,F as q,H as ee,I as Xe,J as Ke,K as Xa,L as X,O as te,P as Ye,Q as Ka,S as ge,U as Ya,V as Qe,W as We,X as Ze,Y as Qa,Z as Wa,_ as ae,ba as ie,ca as Za,da as Je,fa as Ja,ga as re,h as Ta,ha as oe,ia as en,ja as tn,k as ka,ma as an,na as ye,q as Ea,u as wa,y as Ia}from"./chunk-3ZGQMDZ3.js";import{b as nn,c as rn}from"./chunk-ANDMQGP2.js";import"./chunk-FZJT2LNK.js";import{a as K,b as le}from"./chunk-OM3YM3AB.js";import{K as Fa,L as ze,Q as Oa,S as Ra,T as Aa,U as Va,V as Pa,W as je,X as Ha,Y as J,c as Ma,d as Bt,h as Sa,j as xa,w as Fe,x as Da,z as Oe}from"./chunk-CF3DPFIZ.js";import{$a as A,$b as T,Ab as ca,Bb as g,Db as u,Eb as _e,Fb as $,Ga as Ae,Gb as ma,Hb as he,Ib as pe,Ic as va,Ja as s,Jb as ue,La as oa,Lb as pa,Mb as ua,Nb as Y,Oa as Ve,Ob as we,Pa as Pe,Pb as Q,Qb as ga,Qc as ya,Ra as la,Rb as c,Rc as Ge,Sb as V,Sc as Ca,Tb as h,Uc as ve,Va as v,Vc as Na,Wa as ke,Xa as He,Xc as Ba,Y as na,Ya as sa,Z as ce,_ as Te,_b as W,a as ea,aa as Z,ac as Pt,b as ta,bc as b,ca as d,cc as k,dc as P,ec as fa,ga as w,ha as I,hc as Ne,ia,ib as L,ic as y,jb as x,jc as Ht,ka as Vt,kb as D,lb as F,mb as da,mc as Be,nb as M,oa as H,ob as S,oc as Le,pa as ra,pb as m,pc as C,qb as r,qc as ba,rb as l,rc as _a,sb as _,ta as f,tb as fe,tc as ha,u as aa,ua as Re,ub as be,uc as Ie,vb as Ee,wb as j,wc as E,xb as U,xc as Nt,ya as me,zb as O}from"./chunk-GYQO6MRE.js";var wn=["*","*","*","*","*","*"],Dt=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["app-handover-message-filter"]],ngContentSelectors:wn,decls:7,vars:0,consts:[[1,"filter-container"]],template:function(e,t){e&1&&(_e(wn),fe(0,"div",0),$(1),$(2,1),$(3,2),$(4,3),$(5,4),$(6,5),be())},styles:[".filter-container[_ngcontent-%COMP%]{height:30%;display:flex;flex-direction:row;justify-content:space-evenly;flex-wrap:wrap}"]})};function $n(a,n){if(a&1&&(c(0),b(1,"translate"),b(2,"translate")),a&2){let e=u().$implicit,t=u();h(" ",k(1,1,t.translate_config.prefix+"."+e.name)!==t.translate_config.prefix+"."+e.name?k(2,3,t.translate_config.prefix+"."+e.name):e.name," ")}}function qn(a,n){if(a&1&&c(0),a&2){let e=u().$implicit;h(" ",e.name," ")}}function Xn(a,n){if(a&1){let e=O();r(0,"mat-chip-row",6),g("removed",function(){let i=w(e).$implicit,o=u();return I(o.remove(i))}),x(1,$n,3,5)(2,qn,1,1),r(3,"button",7)(4,"mat-icon"),c(5,"cancel"),l()()()}if(a&2){let e=u();m("removable",!0),s(),D(e.translate_config!=null?1:2)}}function Kn(a,n){if(a&1&&(c(0),b(1,"translate"),b(2,"translate")),a&2){let e=u().$implicit,t=u();h(" ",k(1,1,t.translate_config.prefix+"."+e.name)!==t.translate_config.prefix+"."+e.name?k(2,3,t.translate_config.prefix+"."+e.name):e.name," ")}}function Yn(a,n){if(a&1&&c(0),a&2){let e=u().$implicit;h(" ",e.name," ")}}function Qn(a,n){if(a&1&&(r(0,"mat-option",5),x(1,Kn,3,5)(2,Yn,1,1),l()),a&2){let e=n.$implicit,t=u();m("value",e),s(),D(t.translate_config!=null?1:2)}}var Ct=class a{label="\u7BE9\u9078";id_tag="Default";translate_config;available_options;selected_options=new ge([],{nonNullable:!0});selection_changed=new H;constructor(){this.selected_options.valueChanges.subscribe(n=>{this.selection_changed.emit([this.id_tag,n])})}remove(n){let e=[];for(let t of this.selected_options.value)t.ID!=n.ID&&e.push(t);this.selected_options.setValue(e)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["app-multi-select-filter"]],inputs:{label:"label",id_tag:"id_tag",translate_config:"translate_config",available_options:"available_options"},outputs:{selection_changed:"selection_changed"},decls:12,vars:2,consts:[["chipGrid",""],[1,"selection-container"],[1,"example-chip-list"],["multiple","",3,"formControl"],[3,"removable"],[3,"value"],[3,"removed","removable"],["matChipRemove",""]],template:function(e,t){e&1&&(r(0,"div",1)(1,"mat-form-field",2)(2,"mat-label"),c(3),l(),r(4,"mat-select",3)(5,"mat-select-trigger")(6,"mat-chip-grid",null,0),M(8,Xn,6,2,"mat-chip-row",4,F),l()(),M(10,Qn,3,2,"mat-option",5,F),l()()()),e&2&&(s(3),V(t.label),s(),m("formControl",t.selected_options),s(4),S(t.selected_options.value),s(2),S(t.available_options()))},dependencies:[va,oe,re,ie,rt,it,at,nt,le,K,mn,ot,cn,se,ye,ae,te,ne,Qe,ee,q],encapsulation:2})};function Wn(a,n){a&1&&(r(0,"mat-error"),c(1,"Invalid start date"),l())}function Zn(a,n){a&1&&(r(0,"mat-error"),c(1,"Invalid end date"),l())}var In=class a{_dateAdapter=d(Se);selectionFinished(n,e){return this._createReversibleDate(n,e)}createPreview(n,e){return this._createReversibleDate(n,e)}_createReversibleDate(n,e){return n&&e?e.start?e.end?new G(n,null):n<e.start?new G(n,e.start):new G(e.start,n):new G(n,null):new G(null,null)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=ce({token:a,factory:a.\u0275fac})},qt=class a{_dateAdapter=d(Se);selectionFinished(n,e){if(!n)return e;let{start:t,end:i}=e;return!t||i?new G(n,null):this._dateAdapter.compareDate(n,t)<0?new G(n,t):new G(t,n)}createPreview(n,e){if(!n)return new G(null,null);let{start:t,end:i}=e;return!t||i?new G(null,null):this._dateAdapter.compareDate(n,t)<0?new G(n,t):new G(t,n)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=ce({token:a,factory:a.\u0275fac})},Tt=class a{range=new Ka({start:new ge(new Date(Date.now()-864e5)),end:new ge(new Date)});label="\u7BE9\u9078";id_tag="Default";selection_changed=new H;constructor(){this.range.valueChanges.subscribe(n=>{let e=n.start??new Date(Date.now()-864e5),t=n.end??new Date(Date.now());this.selection_changed.emit([this.id_tag,e,t])})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["app-date-filter"]],inputs:{label:"label",id_tag:"id_tag"},outputs:{selection_changed:"selection_changed"},features:[W([{provide:pn,useClass:qt},lt()])],decls:11,vars:5,consts:[["picker",""],[3,"formGroup","rangePicker"],["matStartDate","","formControlName","start","placeholder","\u958B\u59CB\u65E5\u671F","readonly",""],["matEndDate","","formControlName","end","placeholder","\u7D50\u675F\u65E5\u671F","readonly",""],["matIconSuffix","",3,"for"]],template:function(e,t){if(e&1&&(r(0,"mat-form-field")(1,"mat-label"),c(2,"\u7BE9\u9078\u65E5\u671F\u7BC4\u570D"),l(),r(3,"mat-date-range-input",1),_(4,"input",2)(5,"input",3),l(),_(6,"mat-datepicker-toggle",4)(7,"mat-date-range-picker",null,0),x(9,Wn,2,0,"mat-error"),x(10,Zn,2,0,"mat-error"),l()),e&2){let i=Y(8);s(3),m("formGroup",t.range)("rangePicker",i),s(3),m("for",i),s(3),D(t.range.controls.start.hasError("matStartDateInvalid")?9:-1),s(),D(t.range.controls.end.hasError("matEndDateInvalid")?10:-1)}},dependencies:[oe,re,ie,Za,Je,ye,vn,st,fn,bn,_n,hn,ae,Ke,te,Ye,ne,Ze,We],encapsulation:2})};var ei=["panelTemplate"],ti=(a,n)=>n.value;function ai(a,n){if(a&1){let e=O();r(0,"mat-option",3),g("onSelectionChange",function(i){w(e);let o=u(2);return I(o._selectValue(i.source))}),c(1),l()}if(a&2){let e=n.$implicit;m("value",e.value),s(),V(e.label)}}function ni(a,n){if(a&1){let e=O();r(0,"div",1),g("animationend",function(i){w(e);let o=u();return I(o._handleAnimationEnd(i))}),M(1,ai,2,2,"mat-option",2,ti),l()}if(a&2){let e=u();Q("mat-timepicker-panel-animations-enabled",!e._animationsDisabled)("mat-timepicker-panel-exit",!e.isOpen()),m("id",e.panelId),L("aria-label",e.ariaLabel()||null)("aria-labelledby",e._getAriaLabelledby()),s(),S(e._timeOptions)}}var ii=[[["","matTimepickerToggleIcon",""]]],ri=["[matTimepickerToggleIcon]"];function oi(a,n){a&1&&(ia(),r(0,"svg",1),_(1,"path",2),l())}var li=/^(\d*\.?\d+)\s*(h|hour|hours|m|min|minute|minutes|s|second|seconds)?$/i,Rn=new Z("MAT_TIMEPICKER_CONFIG");function Fn(a){let n;if(a===null)return null;if(typeof a=="number")n=a;else{if(a.trim().length===0)return null;let e=a.match(li),t=e?parseFloat(e[1]):null,i=e?.[2]?.toLowerCase()||null;if(!e||t===null||isNaN(t))return null;i==="h"||i==="hour"||i==="hours"?n=t*3600:i==="m"||i==="min"||i==="minute"||i==="minutes"?n=t*60:n=t}return n}function si(a,n,e,t,i){let o=[],p=a.compareTime(e,t)<1?e:t;for(;a.sameDate(p,e)&&a.compareTime(p,t)<1&&a.isValid(p);)o.push({value:p,label:a.format(p,n.display.timeOptionLabel)}),p=a.addSeconds(p,i);return o}var di=new Z("MAT_TIMEPICKER_SCROLL_STRATEGY",{providedIn:"root",factory:()=>{let a=d(Vt);return()=>Ea(a)}}),Wt=(()=>{class a{_dir=d(Ge,{optional:!0});_viewContainerRef=d(la);_injector=d(Vt);_defaultConfig=d(Rn,{optional:!0});_dateAdapter=d(Se,{optional:!0});_dateFormats=d(Gt,{optional:!0});_scrollStrategyFactory=d(di);_animationsDisabled=ze();_isOpen=f(!1);_activeDescendant=f(null);_input=f(null);_overlayRef=null;_portal=null;_optionsCacheKey=null;_localeChanges;_onOpenRender=null;_panelTemplate=ba.required("panelTemplate");_timeOptions=[];_options=_a(se);_keyManager=new Da(this._options,this._injector).withHomeAndEnd(!0).withPageUpDown(!0).withVerticalOrientation(!0);interval=C(Fn(this._defaultConfig?.interval||null),{transform:Fn});options=C(null);isOpen=this._isOpen.asReadonly();selected=Le();opened=Le();closed=Le();activeDescendant=this._activeDescendant.asReadonly();panelId=d(Oe).getId("mat-timepicker-panel-");disableRipple=C(this._defaultConfig?.disableRipple??!1,{transform:E});ariaLabel=C(null,{alias:"aria-label"});ariaLabelledby=C(null,{alias:"aria-labelledby"});disabled=y(()=>!!this._input()?.disabled());panelClass=C();constructor(){d(me).nativeElement.setAttribute("mat-timepicker-panel-id",this.panelId),this._handleLocaleChanges(),this._handleInputStateChanges(),this._keyManager.change.subscribe(()=>this._activeDescendant.set(this._keyManager.activeItem?.id||null))}open(){let e=this._input();if(!e||(e.focus(),this._isOpen()))return;this._isOpen.set(!0),this._generateOptions();let t=this._getOverlayRef();t.updateSize({width:e.getOverlayOrigin().nativeElement.offsetWidth}),this._portal??=new ka(this._panelTemplate(),this._viewContainerRef),t.hasAttached()||t.attach(this._portal),this._onOpenRender?.destroy(),this._onOpenRender=oa(()=>{let i=this._options();this._syncSelectedState(e.value(),i,i[0]),this._onOpenRender=null},{injector:this._injector}),this.opened.emit()}close(){this._isOpen()&&(this._isOpen.set(!1),this.closed.emit(),this._animationsDisabled&&this._overlayRef?.detach())}registerInput(e){let t=this._input();this._input.set(e)}ngOnDestroy(){this._keyManager.destroy(),this._localeChanges?.unsubscribe(),this._onOpenRender?.destroy(),this._overlayRef?.dispose()}_getOverlayHost(){return this._overlayRef?.hostElement}_selectValue(e){this.close(),this._keyManager.setActiveItem(e),this._options().forEach(t=>{t!==e&&t.deselect(!1)}),this._input()?.timepickerValueAssigned(e.value),this.selected.emit({value:e.value,source:this}),this._input()?.focus()}_getAriaLabelledby(){return this.ariaLabel()?null:this.ariaLabelledby()||this._input()?.getLabelId()||null}_handleAnimationEnd(e){e.animationName==="_mat-timepicker-exit"&&this._overlayRef?.detach()}_getOverlayRef(){if(this._overlayRef)return this._overlayRef;let e=wa(this._injector,this._input().getOverlayOrigin()).withFlexibleDimensions(!1).withPush(!1).withTransformOriginOn(".mat-timepicker-panel").withPopoverLocation("inline").withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-timepicker-above"}]);return this._overlayRef=Ia(this._injector,{positionStrategy:e,scrollStrategy:this._scrollStrategyFactory(),direction:this._dir||"ltr",hasBackdrop:!1,disableAnimations:this._animationsDisabled,panelClass:this.panelClass()}),this._overlayRef.detachments().subscribe(()=>this.close()),this._overlayRef.keydownEvents().subscribe(t=>this._handleKeydown(t)),this._overlayRef.outsidePointerEvents().subscribe(t=>{let i=Bt(t),o=this._input()?.getOverlayOrigin().nativeElement;i&&o&&i!==o&&!o.contains(i)&&this.close()}),this._overlayRef}_generateOptions(){let e=this.interval()??1800,t=this.options();if(t!==null)this._timeOptions=t;else{let i=this._input(),o=this._dateAdapter,p=this._dateFormats.display.timeInput,R=i?.min()||o.setTime(o.today(),0,0,0),B=i?.max()||o.setTime(o.today(),23,59,0),z=e+"/"+o.format(R,p)+"/"+o.format(B,p);z!==this._optionsCacheKey&&(this._optionsCacheKey=z,this._timeOptions=si(o,this._dateFormats,R,B,e))}}_syncSelectedState(e,t,i){let o=!1;for(let p of t)e&&this._dateAdapter.sameTime(p.value,e)?(p.select(!1),Xt(p,"center"),Ne(()=>this._keyManager.setActiveItem(p)),o=!0):p.deselect(!1);o||(i?(Ne(()=>this._keyManager.setActiveItem(i)),Xt(i,"center")):Ne(()=>this._keyManager.setActiveItem(-1)))}_handleKeydown(e){let t=e.keyCode;if(t===9)this.close();else if(t===27&&!Fe(e))e.preventDefault(),this.close();else if(t===13)e.preventDefault(),this._keyManager.activeItem?this._selectValue(this._keyManager.activeItem):this.close();else{let i=this._keyManager.activeItem;this._keyManager.onKeydown(e);let o=this._keyManager.activeItem;o&&o!==i&&Xt(o,"nearest")}}_handleLocaleChanges(){this._localeChanges=this._dateAdapter.localeChanges.subscribe(()=>{this._optionsCacheKey=null,this.isOpen()&&this._generateOptions()})}_handleInputStateChanges(){Re(()=>{let e=this._input(),t=this._options();this._isOpen()&&e&&this._syncSelectedState(e.value(),t,null)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["mat-timepicker"]],viewQuery:function(t,i){t&1&&pa(i._panelTemplate,ei,5)(i._options,se,5),t&2&&ua(2)},inputs:{interval:[1,"interval"],options:[1,"options"],disableRipple:[1,"disableRipple"],ariaLabel:[1,"aria-label","ariaLabel"],ariaLabelledby:[1,"aria-labelledby","ariaLabelledby"],panelClass:[1,"panelClass"]},outputs:{selected:"selected",opened:"opened",closed:"closed"},exportAs:["matTimepicker"],features:[W([{provide:dn,useExisting:a}])],decls:2,vars:0,consts:[["panelTemplate",""],["role","listbox",1,"mat-timepicker-panel",3,"animationend","id"],[3,"value"],[3,"onSelectionChange","value"]],template:function(t,i){t&1&&A(0,ni,3,7,"ng-template",null,0,fa)},dependencies:[se],styles:[`@keyframes _mat-timepicker-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-timepicker-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
mat-timepicker {
  display: none;
}

.mat-timepicker-panel {
  width: 100%;
  max-height: 256px;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-bottom-left-radius: var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-timepicker-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-timepicker-container-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  .mat-timepicker-panel {
    outline: solid 1px;
  }
}
.mat-timepicker-above .mat-timepicker-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));
}

.mat-timepicker-panel-animations-enabled {
  animation: _mat-timepicker-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-timepicker-panel-animations-enabled.mat-timepicker-panel-exit {
  animation: _mat-timepicker-exit 100ms linear;
}

.mat-timepicker-input[readonly] {
  cursor: pointer;
}

@media (forced-colors: active) {
  .mat-timepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();function Xt(a,n){a._getHostElement().scrollIntoView({block:n,inline:n})}var An=(()=>{class a{_elementRef=d(me);_dateAdapter=d(Se,{optional:!0});_dateFormats=d(Gt,{optional:!0});_formField=d(Ja,{optional:!0});_onChange;_onTouched;_validatorOnChange;_cleanupClick;_accessorDisabled=f(!1);_localeSubscription;_timepickerSubscription;_validator;_lastValueValid=!0;_minValid=!0;_maxValid=!0;_lastValidDate=null;_ariaActiveDescendant=y(()=>{let e=this.timepicker(),t=e.isOpen(),i=e.activeDescendant();return t&&i?i:null});_ariaExpanded=y(()=>this.timepicker().isOpen()+"");_ariaControls=y(()=>{let e=this.timepicker();return e.isOpen()?e.panelId:null});value=ha(null);timepicker=C.required({alias:"matTimepicker"});min=C(null,{alias:"matTimepickerMin",transform:e=>this._transformDateInput(e)});max=C(null,{alias:"matTimepickerMax",transform:e=>this._transformDateInput(e)});openOnClick=C(!0,{alias:"matTimepickerOpenOnClick",transform:E});disabled=y(()=>this.disabledInput()||this._accessorDisabled());disabledInput=C(!1,{transform:E,alias:"disabled"});constructor(){let e=d(Ve);this._validator=this._getValidator(),this._updateFormsState(),this._registerTimepicker(),this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._hasFocus()||this._formatValue(this.value())}),this._cleanupClick=e.listen(this.getOverlayOrigin().nativeElement,"click",this._handleClick)}writeValue(e){let t=this._dateAdapter.deserialize(e);this.value.set(this._dateAdapter.getValidDateOrNull(t))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._accessorDisabled.set(e)}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._validatorOnChange=e}getOverlayOrigin(){return this._formField?.getConnectedOverlayOrigin()||this._elementRef}focus(){this._elementRef.nativeElement.focus()}ngOnDestroy(){this._cleanupClick(),this._timepickerSubscription?.unsubscribe(),this._localeSubscription.unsubscribe()}getLabelId(){return this._formField?.getLabelId()||null}_handleClick=e=>{if(this.disabled()||!this.openOnClick())return;let t=Bt(e),i=this.timepicker()._getOverlayHost();(!t||!i||!i.contains(t))&&this.timepicker().open()};_handleInput(e){let t=e.target.value,i=this.value(),o=this._dateAdapter.parseTime(t,this._dateFormats.parse.timeInput),p=!this._dateAdapter.sameTime(o,i);!o||p||t&&!i?this._assignUserSelection(o,!0):this._validatorOnChange?.()}_handleBlur(){let e=this.value();e&&this._isValid(e)&&this._formatValue(e),this.timepicker().isOpen()||this._onTouched?.()}_handleKeydown(e){this.timepicker().isOpen()||this.disabled()||(e.keyCode===27&&!Fe(e)&&this.value()!==null?(e.preventDefault(),this.value.set(null),this._formatValue(null)):(e.keyCode===40||e.keyCode===38)&&(e.preventDefault(),this.timepicker().open()))}timepickerValueAssigned(e){this._dateAdapter.sameTime(e,this.value())||(this._assignUserSelection(e,!0),this._formatValue(e))}_updateFormsState(){Re(()=>{let{_dateAdapter:e,_lastValueValid:t,_minValid:i,_maxValid:o}=this,p=e.deserialize(this.value()),R=this.min(),B=this.max(),z=this._lastValueValid=this._isValid(p);this._minValid=!R||!p||!z||e.compareTime(R,p)<=0,this._maxValid=!B||!p||!z||e.compareTime(B,p)>=0;let jn=t!==z||i!==this._minValid||o!==this._maxValid;this._hasFocus()||this._formatValue(p),p&&z&&(this._lastValidDate=p),jn&&this._validatorOnChange?.()})}_registerTimepicker(){Re(()=>{let e=this.timepicker();e.registerInput(this),e.closed.subscribe(()=>this._onTouched?.())})}_assignUserSelection(e,t){let i;if(e==null||!this._isValid(e))i=e;else{let o=this._dateAdapter,p=o.getValidDateOrNull(this._lastValidDate||this.value()),R=o.getHours(e),B=o.getMinutes(e),z=o.getSeconds(e);i=p?o.setTime(p,R,B,z):e}t&&this._onChange?.(i),this.value.set(i)}_formatValue(e){e=this._dateAdapter.getValidDateOrNull(e),this._elementRef.nativeElement.value=e==null?"":this._dateAdapter.format(e,this._dateFormats.display.timeInput)}_isValid(e){return!e||this._dateAdapter.isValid(e)}_transformDateInput(e){let t=typeof e=="string"?this._dateAdapter.parseTime(e,this._dateFormats.parse.timeInput):this._dateAdapter.deserialize(e);return t&&this._dateAdapter.isValid(t)?t:null}_hasFocus(){return Ma()===this._elementRef.nativeElement}_getValidator(){return X.compose([()=>this._lastValueValid?null:{matTimepickerParse:{text:this._elementRef.nativeElement.value}},e=>this._minValid?null:{matTimepickerMin:{min:this.min(),actual:this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value))}},e=>this._maxValid?null:{matTimepickerMax:{max:this.max(),actual:this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value))}}])}static \u0275fac=function(t){return new(t||a)};static \u0275dir=He({type:a,selectors:[["input","matTimepicker",""]],hostAttrs:["role","combobox","type","text","aria-haspopup","listbox",1,"mat-timepicker-input"],hostVars:5,hostBindings:function(t,i){if(t&1&&g("blur",function(){return i._handleBlur()})("input",function(p){return i._handleInput(p)})("keydown",function(p){return i._handleKeydown(p)}),t&2){let o;ca("disabled",i.disabled()),L("aria-activedescendant",i._ariaActiveDescendant())("aria-expanded",i._ariaExpanded())("aria-controls",i._ariaControls())("mat-timepicker-id",(o=i.timepicker())==null?null:o.panelId)}},inputs:{value:[1,"value"],timepicker:[1,"matTimepicker","timepicker"],min:[1,"matTimepickerMin","min"],max:[1,"matTimepickerMax","max"],openOnClick:[1,"matTimepickerOpenOnClick","openOnClick"],disabledInput:[1,"disabled","disabledInput"]},outputs:{value:"valueChange"},exportAs:["matTimepickerInput"],features:[W([{provide:Xe,useExisting:a,multi:!0},{provide:Xa,useExisting:a,multi:!0},{provide:tn,useExisting:a}])]})}return a})(),Zt=(()=>{class a{_defaultConfig=d(Rn,{optional:!0});_defaultTabIndex=(()=>{let e=d(new Be("tabindex"),{optional:!0}),t=Number(e);return isNaN(t)?null:t})();_isDisabled=y(()=>{let e=this.timepicker();return this.disabled()||e.disabled()});timepicker=C.required({alias:"for"});ariaLabel=C(void 0,{alias:"aria-label"});ariaLabelledby=C(void 0,{alias:"aria-labelledby"});_defaultAriaLabel="Open timepicker options";disabled=C(!1,{transform:E,alias:"disabled"});tabIndex=C(this._defaultTabIndex);disableRipple=C(this._defaultConfig?.disableRipple??!1,{transform:E});_open(e){this.timepicker()&&!this._isDisabled()&&(this.timepicker().open(),e.stopPropagation())}getAriaLabel(){return this.ariaLabelledby()?null:this.ariaLabel()||this._defaultAriaLabel}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["mat-timepicker-toggle"]],hostAttrs:[1,"mat-timepicker-toggle"],hostVars:1,hostBindings:function(t,i){t&1&&g("click",function(p){return i._open(p)}),t&2&&L("tabindex",null)},inputs:{timepicker:[1,"for","timepicker"],ariaLabel:[1,"aria-label","ariaLabel"],ariaLabelledby:[1,"aria-labelledby","ariaLabelledby"],disabled:[1,"disabled"],tabIndex:[1,"tabIndex"],disableRipple:[1,"disableRipple"]},exportAs:["matTimepickerToggle"],ngContentSelectors:ri,decls:3,vars:6,consts:[["matIconButton","","type","button","aria-haspopup","listbox",3,"tabIndex","disabled","disableRipple"],["height","24px","width","24px","viewBox","0 -960 960 960","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-timepicker-toggle-default-icon"],["d","m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"]],template:function(t,i){t&1&&(_e(ii),r(0,"button",0),$(1,0,null,oi,2,0),l()),t&2&&(m("tabIndex",i._isDisabled()?-1:i.tabIndex())("disabled",i._isDisabled())("disableRipple",i.disableRipple()),L("aria-label",i.getAriaLabel())("aria-labelledby",i.ariaLabelledby())("aria-expanded",i.timepicker().isOpen()))},dependencies:[Aa],encapsulation:2,changeDetection:0})}return a})(),Vn=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=ke({type:a});static \u0275inj=Te({imports:[Wt,Zt,Ta]})}return a})();var gi=["button"],fi=["*"];function bi(a,n){if(a&1&&(r(0,"div",2),_(1,"mat-pseudo-checkbox",6),l()),a&2){let e=u();s(),m("disabled",e.disabled)}}var Pn=new Z("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Hn=new Z("MatButtonToggleGroup"),_i={provide:Xe,useExisting:na(()=>Jt),multi:!0},kt=class{source;value;constructor(n,e){this.source=n,this.value=e}},Jt=(()=>{class a{_changeDetector=d(Ie);_dir=d(Ge,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=d(Oe).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new H;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new H;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=d(Pn,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new ln(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||Fe(e))return;let i=e.target.id,o=this._buttonToggles.toArray().findIndex(R=>R.buttonId===i),p=null;switch(e.keyCode){case 32:case 13:p=this._buttonToggles.get(o)||null;break;case 38:p=this._getNextButton(o,-1);break;case 37:p=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:p=this._getNextButton(o,1);break;case 39:p=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}p&&(e.preventDefault(),p._onButtonClick(),p.focus())}_emitChangeEvent(e){let t=new kt(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,i=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,i)):this._updateModelValue(e,i)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let i=this._buttonToggles;for(let o=1;o<=i.length;o++){let p=(e+t*o+i.length)%i.length,R=i.get(p);if(R&&!R.disabled)return R}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(i=>this._selectValue(i,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(i=>i.tabIndex===-1)){for(let i of t)if(!i.disabled){i.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let i of t)if(i.value===e){i.checked=!0,this._selectionModel.select(i),this.multiple||(i.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||a)};static \u0275dir=He({type:a,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,i,o){if(t&1&&ma(o,Et,5),t&2){let p;pe(p=ue())&&(i._buttonToggles=p)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,i){t&1&&g("keydown",function(p){return i._keydown(p)}),t&2&&(L("role",i.multiple?"group":"radiogroup")("aria-disabled",i.disabled),Q("mat-button-toggle-vertical",i.vertical)("mat-button-toggle-group-appearance-standard",i.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",E],value:"value",multiple:[2,"multiple","multiple",E],disabled:[2,"disabled","disabled",E],disabledInteractive:[2,"disabledInteractive","disabledInteractive",E],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",E],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",E]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[W([_i,{provide:Hn,useExisting:a}])]})}return a})(),Et=(()=>{class a{_changeDetectorRef=d(Ie);_elementRef=d(me);_focusMonitor=d(Sa);_idGenerator=d(Oe);_animationDisabled=ze();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new H;constructor(){d(xa).load(Ra);let e=d(Hn,{optional:!0}),t=d(new Be("tabindex"),{optional:!0})||"",i=d(Pn,{optional:!0});this._tabIndex=f(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:"standard",this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new kt(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["mat-button-toggle"]],viewQuery:function(t,i){if(t&1&&he(gi,5),t&2){let o;pe(o=ue())&&(i._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,i){t&1&&g("focus",function(){return i.focus()}),t&2&&(L("aria-label",null)("aria-labelledby",null)("id",i.id)("name",null),Q("mat-button-toggle-standalone",!i.buttonToggleGroup)("mat-button-toggle-checked",i.checked)("mat-button-toggle-disabled",i.disabled)("mat-button-toggle-disabled-interactive",i.disabledInteractive)("mat-button-toggle-appearance-standard",i.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",E],appearance:"appearance",checked:[2,"checked","checked",E],disabled:[2,"disabled","disabled",E],disabledInteractive:[2,"disabledInteractive","disabledInteractive",E]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:fi,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,i){if(t&1&&(_e(),r(0,"button",1,0),g("click",function(){return i._onButtonClick()}),x(2,bi,2,1,"div",2),r(3,"span",3),$(4),l()(),_(5,"span",4)(6,"span",5)),t&2){let o=Y(1);m("id",i.buttonId)("disabled",i.disabled&&!i.disabledInteractive||null),L("role",i.isSingleSelector()?"radio":"button")("tabindex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("aria-pressed",i.isSingleSelector()?null:i.checked)("aria-checked",i.isSingleSelector()?i.checked:null)("name",i._getButtonName())("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),s(2),D(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),s(4),m("matRippleTrigger",o)("matRippleDisabled",i.disableRipple||i.disabled)}},dependencies:[Oa,sn],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return a})(),Nn=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=ke({type:a});static \u0275inj=Te({imports:[Va,Et,Ca]})}return a})();function vi(a,n){a&1&&Ee(0,"div",2)}var yi=new Z("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var wt=(()=>{class a{_elementRef=d(me);_ngZone=d(ra);_changeDetectorRef=d(Ie);_renderer=d(Ve);_cleanupTransitionEnd;constructor(){let e=Fa(),t=d(yi,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Bn(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Bn(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new H;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,i){t&2&&(L("aria-valuenow",i._isIndeterminate()?null:i.value)("mode",i.mode),ga("mat-"+i.color),Q("_mat-animation-noopable",i._isNoopAnimation)("mdc-linear-progress--animation-ready",!i._isNoopAnimation)("mdc-linear-progress--indeterminate",i._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Nt],bufferValue:[2,"bufferValue","bufferValue",Nt],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,i){t&1&&(fe(0,"div",0),Ee(1,"div",1),x(2,vi,1,0,"div",2),be(),fe(3,"div",3),Ee(4,"span",4),be(),fe(5,"div",5),Ee(6,"span",4),be()),t&2&&(s(),we("flex-basis",i._getBufferBarFlexBasis()),s(),D(i.mode==="buffer"?2:-1),s(),we("transform",i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return a})();function Bn(a,n=0,e=100){return Math.max(n,Math.min(e,a))}function Mi(a,n){a&1&&_(0,"mat-progress-bar",9)}function Si(a,n){if(a&1&&(r(0,"mat-option",21),c(1),l()),a&2){let e=n.$implicit;m("value",e),s(),V(e.name)}}function xi(a,n){if(a&1&&(r(0,"mat-option",21),c(1),b(2,"translate"),b(3,"translate"),l()),a&2){let e=n.$implicit;m("value",e),s(),V(k(2,2,"HANDOVER_MESSAGE.FLOORS."+e.name)!=="HANDOVER_MESSAGE.FLOORS."+e.name?k(3,4,"HANDOVER_MESSAGE.FLOORS."+e.name):e.name)}}function Di(a,n){if(a&1&&(r(0,"mat-button-toggle",21),c(1),b(2,"translate"),b(3,"translate"),l()),a&2){let e=n.$implicit;m("value",e),s(),V(k(2,2,"HANDOVER_MESSAGE.SHIFTS."+e.name)!=="HANDOVER_MESSAGE.SHIFTS."+e.name?k(3,4,"HANDOVER_MESSAGE.SHIFTS."+e.name):e.name)}}function Ci(a,n){if(a&1&&(r(0,"mat-option",21),c(1),b(2,"translate"),b(3,"translate"),l()),a&2){let e=n.$implicit;m("value",e),s(),V(k(2,2,"HANDOVER_MESSAGE.MESSAGETYPE."+e.name)!=="HANDOVER_MESSAGE.MESSAGETYPE."+e.name?k(3,4,"HANDOVER_MESSAGE.MESSAGETYPE."+e.name):e.name)}}function Ti(a,n){if(a&1){let e=O();r(0,"form",26,2)(2,"div",33)(3,"div",34)(4,"div")(5,"mat-form-field",35)(6,"mat-label"),c(7,"\u8A0A\u606F\u985E\u5225"),l(),r(8,"mat-select",36),M(9,Ci,4,6,"mat-option",21,F),l()()()(),r(11,"div",37)(12,"mat-form-field",38)(13,"mat-label"),c(14,"\u8A0A\u606F\u5167\u5BB9"),l(),_(15,"textarea",39),l()(),r(16,"div",40)(17,"button",41),g("click",function(){let i=w(e).$index,o=u();return I(o.removeSecondary(i))}),r(18,"mat-icon"),c(19,"delete"),l()()()()()}if(a&2){let e=n.$implicit,t=u();m("formGroup",e),s(9),S(t.availableMessageTypes()),s(8),m("disabled",t.isSubmitting())}}function ki(a,n){a&1&&c(0," \u8A18\u9304\u50B3\u9001\u4E2D... ")}function Ei(a,n){a&1&&c(0," \u9001\u51FA\u4EA4\u73ED\u7D00\u9304 ")}var It=class a{constructor(n){this.fb=n}currentUserLookup=d(tt);handoverSerivce=d(ve);currentUser=f({ID:0,name:"",localization:"",company_email:"",date_of_employment:"",deleted:!1});availableEmployees=f([]);availableShifts=f([]);availableLocations=f([]);availableMessageTypes=f([]);messageForm;isSubmitting=f(!1);dialogRef=d(za);ngOnInit(){this.currentUser=this.currentUserLookup.getCurrentUser(),this.messageForm=this.fb.group({date:this.fb.control(new Date(Date.now()),{nonNullable:!0,validators:X.required}),time:this.fb.control(new Date(Date.now()),{nonNullable:!0,validators:X.required}),creator:this.fb.control({ID:-1,name:""},{nonNullable:!0,validators:[X.required,this.optionSelectValidator()]}),shift:this.fb.control({ID:-1,name:""},{nonNullable:!0,validators:[X.required,this.optionSelectValidator()]}),locations:this.fb.control([],{nonNullable:!0,validators:X.required}),secondaryMessages:this.fb.array([])}),this.handoverSerivce.apiV3HandoverFilterOptionGet("EMPLOYEE").subscribe(n=>{this.availableEmployees.set(n.data_rows);for(let e of this.availableEmployees())if(e.ID==this.currentUser().ID){this.messageForm.get("creator")?.setValue(e);break}}),this.handoverSerivce.apiV3HandoverFilterOptionGet("FLOORS").subscribe(n=>{this.availableLocations.set(n.data_rows)}),this.handoverSerivce.apiV3HandoverFilterOptionGet("SHIFTS").subscribe(n=>{this.availableShifts.set(n.data_rows)}),this.handoverSerivce.apiV3HandoverFilterOptionGet("MESSAGETYPE").subscribe(n=>{this.availableMessageTypes.set(n.data_rows)}),this.addSecondary()}addSecondary(){let n=this.fb.group({messageType:this.fb.control({ID:-1,name:""},{nonNullable:!0,validators:[X.required,this.optionSelectValidator()]}),messageBody:this.fb.control("",{nonNullable:!0,validators:X.required})});this.secondary.push(n)}removeSecondary(n){this.secondary.controls.splice(n,1),this.secondary.controls.map(e=>e.updateValueAndValidity()),this.messageForm.updateValueAndValidity()}get secondary(){return this.messageForm.controls.secondaryMessages}submitMessage(){if(this.messageForm.invalid){this.messageForm.markAllAsTouched();return}let n=this.messageForm.getRawValue();this.isSubmitting.set(!0),this.messageForm.disable(),this.handoverSerivce.apiV3HandoverNewHandoverMessagePost({creator:n.creator,datetime:this.combineDateAndTime(n.date,n.time).toISOString(),locations:n.locations,secondary_data:n.secondaryMessages.map(e=>({message_body:e.messageBody,message_type:e.messageType})),shift:n.shift}).subscribe({next:e=>{console.log("Data received successfully"),this.dialogRef.close()},error:e=>{console.error("An error occurred:",e)}})}combineDateAndTime(n,e){let t=new Date(n.getTime());return t.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t}optionSelectValidator(){return n=>{let e=n.value;return e.ID===-1?{restrictedSelection:{invalidValue:e}}:null}}static \u0275fac=function(e){return new(e||a)(Pe(Wa))};static \u0275cmp=v({type:a,selectors:[["app-handover-input-dialog"]],features:[W([lt()])],decls:68,vars:10,consts:[["datepicker",""],["timepicker",""],["formDirective","ngForm"],[1,"modal-backdrop"],["mat-dialog-title","",1,"dialog-header"],[1,"spacer"],[1,"header-label-container"],[1,"close-button-container"],["matMiniFab","","mat-dialog-close","",1,"close-button"],["mode","indeterminate"],[1,"dialog-content"],[1,"combined-container"],[3,"ngSubmit","formGroup"],[1,"metadata-rows"],[1,"first-row"],[1,"mandatory-input-elements"],["matInput","","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["matInput","","formControlName","time",3,"matTimepicker"],[1,"second-row"],["formControlName","creator"],[3,"value"],["multiple","","formControlName","locations","required",""],["formControlName","shift","required","true",3,"change"],[1,"secondary-input-combined"],[1,"secondary-input-group"],[3,"formGroup"],[1,"footer-row"],[1,"secondary-add"],["mat-raised-button","","color","primary","type","button",3,"click","disabled"],["align","center"],["mat-button","","mat-dialog-close","","type","button",3,"disabled"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[1,"secondary-input"],[1,"combined-input"],[1,"body-type-field"],["formControlName","messageType","required",""],[1,"body-input"],[1,"body-input-field"],["matInput","","formControlName","messageBody","cdkTextareaAutosize","","cdkAutosizeMinRows","3","cdkAutosizeMaxRows","8"],[1,"msg-delete"],["matMiniFab","",1,"delete-button",3,"click","disabled"]],template:function(e,t){if(e&1&&(r(0,"div",3)(1,"div",4),_(2,"div",5),r(3,"div",6)(4,"h2"),c(5,"\u65B0\u589E\u4EA4\u73ED\u7D00\u9304"),l()(),r(6,"div",7)(7,"button",8)(8,"mat-icon"),c(9,"close"),l()()()(),x(10,Mi,1,0,"mat-progress-bar",9),_(11,"mat-divider"),r(12,"mat-dialog-content",10)(13,"div",11)(14,"form",12),g("ngSubmit",function(){return t.submitMessage()}),r(15,"div",13)(16,"div",14)(17,"div")(18,"mat-form-field",15)(19,"mat-label"),c(20,"\u4EA4\u73ED\u65E5\u671F"),l(),_(21,"input",16)(22,"mat-datepicker",null,0)(24,"mat-datepicker-toggle",17),l()(),r(25,"div")(26,"mat-form-field",15)(27,"mat-label"),c(28,"\u4EA4\u73ED\u6642\u9593"),l(),_(29,"input",18)(30,"mat-timepicker",null,1)(32,"mat-timepicker-toggle",17),l()()(),r(33,"div",19)(34,"div")(35,"mat-form-field",15)(36,"mat-label"),c(37,"\u4EA4\u73ED\u540C\u5DE5"),l(),r(38,"mat-select",20),M(39,Si,2,2,"mat-option",21,F),l()()(),r(41,"div")(42,"mat-form-field",15)(43,"mat-label"),c(44,"\u6A13\u5C64(\u53EF\u8907\u9078)"),l(),r(45,"mat-select",22),M(46,xi,4,6,"mat-option",21,F),l()()(),r(48,"div")(49,"mat-button-toggle-group",23),g("change",function(){return t.messageForm.controls.shift.updateValueAndValidity()}),M(50,Di,4,6,"mat-button-toggle",21,F),l()()()(),r(52,"div",24)(53,"div",25),M(54,Ti,20,2,"form",26,F),l()(),r(56,"div",27)(57,"div",28)(58,"button",29),g("click",function(){return t.addSecondary()}),c(59," \u65B0\u589E\u4EA4\u73ED\u8A0A\u606F "),l()(),_(60,"mat-divider"),r(61,"div")(62,"mat-dialog-actions",30)(63,"button",31),c(64," \u53D6\u6D88 "),l(),r(65,"button",32),x(66,ki,1,0)(67,Ei,1,0),l()()()()()()()()),e&2){let i=Y(23),o=Y(31);s(10),D(t.isSubmitting()?10:-1),s(4),m("formGroup",t.messageForm),s(7),m("matDatepicker",i),s(3),m("for",i),s(5),m("matTimepicker",o),s(3),m("for",o),s(7),S(t.availableEmployees()),s(7),S(t.availableLocations()),s(4),S(t.availableShifts()),s(4),S(t.secondary.controls),s(4),m("disabled",t.isSubmitting()),s(5),m("disabled",t.isSubmitting()),s(2),m("disabled",t.messageForm.invalid||t.isSubmitting()),s(),D(t.isSubmitting()?66:67)}},dependencies:[qa,Ue,$a,qe,$e,re,ie,un,st,oe,Je,ye,an,en,Vn,Wt,An,Zt,ae,Ya,Ke,te,Ye,Qa,gn,Dn,xn,ot,se,J,Pa,Ha,dt,ne,Ze,We,le,K,Nn,Jt,Et,wt,q],styles:[".first-row[_ngcontent-%COMP%], .second-row[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.secondary-input-combined[_ngcontent-%COMP%]{max-height:28vh;overflow-y:auto;overflow-x:hidden}.secondary-input-combined[_ngcontent-%COMP%]   .secondary-add[_ngcontent-%COMP%]{margin:8px}.secondary-input-combined[_ngcontent-%COMP%]   .secondary-input-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;justify-content:center}.modal-backdrop[_ngcontent-%COMP%]{display:flex;flex-direction:column}.dialog-content[_ngcontent-%COMP%]{padding-top:0}.combined-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:0;align-items:center}.metadata-rows[_ngcontent-%COMP%]{position:sticky;top:0;width:100%;z-index:1000;background-color:#fff;border:12px white solid;border-left:16px white solid;margin-left:-8px}.footer-row[_ngcontent-%COMP%]{margin-top:8px;display:flex;flex-direction:column;gap:8px;width:100%;position:sticky;bottom:0;z-index:1000;background-color:#fff;border:12px white solid;border-left:16px white solid;margin-left:-8px}.secondary-input[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:95%;background-color:#f0f0f0;border-radius:12px;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.secondary-input[_ngcontent-%COMP%]   .combined-input[_ngcontent-%COMP%]{flex:2;margin:8px 4px 8px 8px;display:flex;align-items:center}.secondary-input[_ngcontent-%COMP%]   .body-input[_ngcontent-%COMP%]{flex:5;margin:8px 8px 8px 4px}.secondary-input[_ngcontent-%COMP%]   .body-input[_ngcontent-%COMP%]   .body-input-field[_ngcontent-%COMP%]{width:100%}.dialog-header[_ngcontent-%COMP%]{position:sticky;display:flex;justify-content:space-evenly;align-items:stretch;width:100%;padding:0}.dialog-header[_ngcontent-%COMP%]   .header-label-container[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center}.dialog-header[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}.dialog-header[_ngcontent-%COMP%]   .close-button-container[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:flex-end;align-items:flex-start}.dialog-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{background-color:#dc143c!important;border-radius:10%;top:3%;right:2%}.msg-delete[_ngcontent-%COMP%]{display:flex;align-items:center}.msg-delete[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]{border-radius:10%}"]})};var xe=class a{handoverApi=d(ve);filterStateService=d(et);authService=d(Ga);pagingState=Ht({source:()=>this.filterStateService.state(),computation:(n,e)=>({pageIndex:0,pageSize:e?.value.pageSize??10})});apiParams=y(()=>{let n=this.pagingState(),e=this.filterStateService.state();return{pageIndex:n.pageIndex,pageSize:n.pageSize,startTime:e.startTime,endTime:e.endTime,messageTypeIds:e.messageTypeIds,locationIds:e.locationIds,shiftIds:e.shiftIds,creatorIds:e.creatorIds,serviceUserIds:e.serviceUserIds,keywords:e.keywords}});messageSource=rn({params:()=>({data:this.apiParams(),status:this.authService.isAuthenticated()}),stream:({params:n})=>this.handoverApi.apiV3HandoverFilteredSecondaryMessageGet(Lt(n.data.startTime),Lt(n.data.endTime),n.data.messageTypeIds,n.data.shiftIds,n.data.creatorIds,n.data.locationIds,n.data.serviceUserIds,n.data.keywords,n.data.pageIndex,n.data.pageSize)});stableResponse=Ht({source:()=>({data:this.messageSource.value(),status:this.messageSource.status()}),computation:(n,e)=>n.status==="loading"&&e?.value?e.value:n.data});messages=y(()=>this.stableResponse()?.data_rows??[]);length=y(()=>this.stableResponse()?.data_count??0);isLoading=y(()=>this.messageSource.isLoading());currentPageIndex=y(()=>this.pagingState().pageIndex);currentPageSize=y(()=>this.pagingState().pageSize);updatePage(n,e){this.pagingState.update(t=>ta(ea({},t),{pageIndex:n,pageSize:e}))}tableRefresh(){this.messageSource.reload()}static \u0275fac=function(e){return new(e||a)};static \u0275prov=ce({token:a,factory:a.\u0275fac,providedIn:"root"})};var De=class a{constructor(n){this.sanitizer=n}transform(n,e){if(!n||!e||e.length===0)return n;let t=[...e].sort((B,z)=>z.length-B.length),i=n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),o=t.map(B=>B.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")).filter(B=>B.trim()!=="");if(o.length===0)return i;let p=new RegExp(`(${o.join("|")})`,"gi"),R=i.replace(p,'<mark class="custom-highlight">$1</mark>');return this.sanitizer.bypassSecurityTrustHtml(R)}static \u0275fac=function(e){return new(e||a)(Pe(ya,16))};static \u0275pipe=sa({name:"highlight",type:a,pure:!0})};var Ce=class a{translate=d(La);operationService=d(Na);supportedLocalization=f([]);currentLang=nn(this.translate.onLangChange.pipe(aa(n=>n.lang)),{initialValue:this.translate.getCurrentLang()||this.translate.getFallbackLang()||"en"});dateLocalization=y(()=>{switch(this.currentLang()){case"zh":return"zh-Hant";case"en":return"us";default:return"vi"}});constructor(){this.operationService.apiV3OperationsSupportedLocalizationGet().subscribe(n=>{this.supportedLocalization.set(n.data_rows)})}changeLanguage(n){this.translate.use(n)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=ce({token:a,factory:a.\u0275fac,providedIn:"root"})};var Fi=["scrollContainer"],Oi=()=>["loadingProgress"],Ri=()=>[5,10,20],Ai=()=>({default:"\u4EA4\u73ED\u6642\u9593"}),Vi=()=>({weekday:"long"}),Pi=()=>({default:"\u4EA4\u73ED\u540C\u5DE5"}),Hi=()=>({default:"\u8A0A\u606F\u985E\u5225"}),Ni=()=>({default:"\u8A0A\u606F\u5167\u5BB9"});function Bi(a,n){a&1&&(r(0,"th",16),c(1),b(2,"translate"),l()),a&2&&(s(),h(" ",P(2,1,"UI.HANDOVER.HEADERS.timestamp",T(4,Ai))," "))}function Li(a,n){if(a&1&&(r(0,"td",17),c(1),l()),a&2){let e=n.$implicit,t=u();s(),h(" ",t.toDatetime(t.asDataRow(e).timestamp).toLocaleString(t.localization.dateLocalization())+" "+t.toDatetime(t.asDataRow(e).timestamp).toLocaleDateString(t.localization.dateLocalization(),T(1,Vi))," ")}}function Gi(a,n){a&1&&(r(0,"th",16),c(1),b(2,"translate"),l()),a&2&&(s(),h(" ",P(2,1,"UI.HANDOVER.HEADERS.employee",T(4,Pi))," "))}function zi(a,n){if(a&1&&(r(0,"td",17),c(1),l()),a&2){let e=n.$implicit,t=u();s(),V(t.asDataRow(e).creator_name)}}function ji(a,n){a&1&&(r(0,"th",16),c(1),b(2,"translate"),l()),a&2&&(s(),h(" ",P(2,1,"UI.HANDOVER.HEADERS.message_type",T(4,Hi))," "))}function Ui(a,n){if(a&1&&(r(0,"td",17),c(1),b(2,"translate"),l()),a&2){let e=n.$implicit,t=u();s(),h(" ",k(2,1,"HANDOVER_MESSAGE.MESSAGETYPE."+t.asDataRow(e).message_type_name)," ")}}function $i(a,n){a&1&&(r(0,"th",16),c(1),b(2,"translate"),l()),a&2&&(s(),h(" ",P(2,1,"UI.HANDOVER.HEADERS.message_body",T(4,Ni))," "))}function qi(a,n){if(a&1&&(r(0,"td",17),_(1,"span",18),b(2,"highlight"),l()),a&2){let e=n.$implicit,t=u();s(),m("innerHTML",P(2,1,t.asDataRow(e).message_body,t.highlightText()),Ae)}}function Xi(a,n){a&1&&_(0,"mat-progress-bar",20)}function Ki(a,n){if(a&1&&(r(0,"th",19),x(1,Xi,1,0,"mat-progress-bar",20),l()),a&2){let e=u();L("colspan",e.displayedColumns.length),s(),D(e.dataService.isLoading()?1:-1)}}function Yi(a,n){a&1&&_(0,"tr",21)}function Qi(a,n){a&1&&_(0,"tr",22)}function Wi(a,n){a&1&&_(0,"tr",23)}var Ft=class a{dataService=d(xe);localization=d(Ce);highlightText=f([]);displayedColumns=["timestamp","creator","messageType","messageBody"];scrollContainer;asDataRow(n){return n}pageChanged(n){this.dataService.updatePage(n.pageIndex,n.pageSize),this.scrollContainer&&this.scrollContainer.nativeElement.scrollTo({top:0,behavior:"smooth"})}toDatetime(n){return new Date(n)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["app-secondary-message-table-v2"]],viewQuery:function(e,t){if(e&1&&he(Fi,5),e&2){let i;pe(i=ue())&&(t.scrollContainer=i.first)}},inputs:{highlightText:"highlightText"},decls:22,vars:14,consts:[["scrollContainer",""],["paginator",""],[1,"mat-elevation-z2","table-container"],["mat-table","","aria-label","Elements",1,"full-width-table",3,"dataSource"],["matColumnDef","timestamp"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","creator"],["matColumnDef","messageType"],["matColumnDef","messageBody"],["matColumnDef","loadingProgress"],["mat-header-cell","","class","progress-cell",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-header-row","","class","progress-row",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page","showFirstLastButtons","",1,"sticky-paginator",3,"page","length","pageSize","pageIndex","pageSizeOptions","disabled"],["mat-header-cell",""],["mat-cell",""],[1,"line-text",3,"innerHTML"],["mat-header-cell","",1,"progress-cell"],["mode","indeterminate"],["mat-header-row",""],["mat-header-row","",1,"progress-row"],["mat-row",""]],template:function(e,t){e&1&&(r(0,"div",2,0)(2,"table",3),j(3,4),A(4,Bi,3,5,"th",5)(5,Li,2,2,"td",6),U(),j(6,7),A(7,Gi,3,5,"th",5)(8,zi,2,1,"td",6),U(),j(9,8),A(10,ji,3,5,"th",5)(11,Ui,3,3,"td",6),U(),j(12,9),A(13,$i,3,5,"th",5)(14,qi,3,4,"td",6),U(),j(15,10),A(16,Ki,2,2,"th",11),U(),A(17,Yi,1,0,"tr",12)(18,Qi,1,0,"tr",13)(19,Wi,1,0,"tr",14),l(),r(20,"mat-paginator",15,1),g("page",function(o){return t.pageChanged(o)}),l()()),e&2&&(s(2),Q("table-stale",t.dataService.isLoading()),m("dataSource",t.dataService.messages()),s(15),m("matHeaderRowDef",t.displayedColumns)("matHeaderRowDefSticky",!0),s(),m("matHeaderRowDef",T(12,Oi)),s(),m("matRowDefColumns",t.displayedColumns),s(),m("length",t.dataService.length())("pageSize",t.dataService.currentPageSize())("pageIndex",t.dataService.currentPageIndex())("pageSizeOptions",T(13,Ri))("disabled",t.dataService.isLoading()))},dependencies:[yt,ct,pt,bt,ut,mt,_t,gt,ft,ht,vt,St,Mt,xt,ee,wt,q,De],styles:[".mat-column-timestamp[_ngcontent-%COMP%]{width:9%}.mat-column-creator[_ngcontent-%COMP%]{width:7%}.mat-column-messageType[_ngcontent-%COMP%]{width:8%}.table-container[_ngcontent-%COMP%]{transition:opacity .2s ease-in-out;max-height:90vh;overflow:auto;position:relative}.table-stale[_ngcontent-%COMP%]{opacity:.6;pointer-events:none}.mat-mdc-header-row[_ngcontent-%COMP%]:not(.progress-row){height:56px!important}.progress-row.mat-mdc-header-row[_ngcontent-%COMP%]{height:4px!important;min-height:4px!important}.progress-row[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{position:sticky!important;top:56px!important;z-index:101!important;background-color:#fff!important;padding:0!important;height:4px!important;line-height:0;border-bottom:1px solid #e0e0e0}.progress-row[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{height:4px;display:block;width:100%;transition:opacity .15s linear}.progress-hidden[_ngcontent-%COMP%]{opacity:0!important;pointer-events:none}.sticky-paginator[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:102;border-top:1px solid #e0e0e0;background-color:#fff!important}"]})};var Zi=["scrollContainer"],Ji=()=>[5,10,20],er=()=>({default:"\u4EA4\u73ED\u6642\u9593"}),tr=()=>({weekday:"long"}),ar=()=>({default:"\u4EA4\u73ED\u540C\u5DE5"}),nr=()=>({default:"\u73ED\u5225"}),Gn=a=>({default:a}),ir=()=>({default:"\u5730\u9EDE"});function rr(a,n){a&1&&(r(0,"th",12),c(1),b(2,"translate"),l()),a&2&&(s(),h(" ",P(2,1,"UI.HANDOVER.HEADERS.timestamp",T(4,er))," "))}function or(a,n){if(a&1&&(r(0,"td",13),c(1),l()),a&2){let e=n.$implicit,t=u();s(),h(" ",t.toDatetime(t.asDataRow(e).timestamp).toLocaleString(t.localization.dateLocalization())+" "+t.toDatetime(t.asDataRow(e).timestamp).toLocaleDateString(t.localization.dateLocalization(),T(1,tr))," ")}}function lr(a,n){a&1&&(r(0,"th",12),c(1),b(2,"translate"),l()),a&2&&(s(),h(" ",P(2,1,"UI.HANDOVER.HEADERS.employee",T(4,ar))," "))}function sr(a,n){if(a&1&&(r(0,"td",13),c(1),l()),a&2){let e=n.$implicit,t=u();s(),V(t.asDataRow(e).creator_name)}}function dr(a,n){a&1&&(r(0,"th",12),c(1),b(2,"translate"),l()),a&2&&(s(),h(" ",P(2,1,"UI.HANDOVER.HEADERS.shift",T(4,nr))," "))}function cr(a,n){if(a&1&&(r(0,"td",13),c(1),b(2,"translate"),l()),a&2){let e=n.$implicit,t=u();s(),h(" ",P(2,1,"HANDOVER_MESSAGE.SHIFTS."+t.asDataRow(e).shift_name,Pt(4,Gn,t.asDataRow(e).shift_name))," ")}}function mr(a,n){a&1&&(r(0,"th",12),c(1),b(2,"translate"),l()),a&2&&(s(),h(" ",P(2,1,"UI.HANDOVER.HEADERS.location",T(4,ir))," "))}function pr(a,n){if(a&1&&(c(0),b(1,"translate")),a&2){let e=n.$implicit;h(" ",P(1,1,"HANDOVER_MESSAGE.FLOORS."+e,Pt(4,Gn,e)),", ")}}function ur(a,n){if(a&1&&(r(0,"td",13),M(1,pr,2,6,null,null,F),l()),a&2){let e=n.$implicit,t=u();s(),S(t.asDataRow(e).location_names)}}function gr(a,n){a&1&&_(0,"tr",14)}function fr(a,n){if(a&1){let e=O();r(0,"tr",15),g("click",function(){let i=w(e).index,o=u();return I(o.rowSelected(i))}),l()}if(a&2){let e=n.index,t=u();we("background-color",e==t.dataService.selectedPageIndex()?"#cfe2f3":"transparent")}}var Ot=class a{dataService=d(Me);localization=d(Ce);highlightText=f([]);rowClicked=new H;displayedColumns=["timestamp","creator","shift","floors"];scrollContainer;asDataRow(n){return n}pageChanged(n){this.dataService.updatePage(n.pageIndex,n.pageSize),this.scrollContainer&&this.scrollContainer.nativeElement.scrollTo({top:0,behavior:"smooth"})}rowSelected(n){this.dataService.selectIndex(n),this.rowClicked.emit()}toDatetime(n){return new Date(n)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["app-handover-message-table-v2"]],viewQuery:function(e,t){if(e&1&&he(Zi,5),e&2){let i;pe(i=ue())&&(t.scrollContainer=i.first)}},inputs:{highlightText:"highlightText"},outputs:{rowClicked:"rowClicked"},decls:18,vars:9,consts:[["paginator",""],[1,"mat-elevation-z2"],["mat-table","","aria-label","Elements",1,"full-width-table",3,"dataSource"],["matColumnDef","timestamp"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","creator"],["matColumnDef","shift"],["matColumnDef","floors"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","mat-row",3,"background-color","click",4,"matRowDef","matRowDefColumns"],["aria-label","Select page","showFirstLastButtons","",1,"sticky-paginator",3,"page","length","pageSize","pageIndex","pageSizeOptions","disabled"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",1,"mat-row",3,"click"]],template:function(e,t){e&1&&(r(0,"div",1)(1,"table",2),j(2,3),A(3,rr,3,5,"th",4)(4,or,2,2,"td",5),U(),j(5,6),A(6,lr,3,5,"th",4)(7,sr,2,1,"td",5),U(),j(8,7),A(9,dr,3,5,"th",4)(10,cr,3,6,"td",5),U(),j(11,8),A(12,mr,3,5,"th",4)(13,ur,3,0,"td",5),U(),A(14,gr,1,0,"tr",9)(15,fr,1,2,"tr",10),l(),r(16,"mat-paginator",11,0),g("page",function(o){return t.pageChanged(o)}),l()()),e&2&&(s(),m("dataSource",t.dataService.messages()),s(13),m("matHeaderRowDef",t.displayedColumns),s(),m("matRowDefColumns",t.displayedColumns),s(),m("length",t.dataService.length())("pageSize",t.dataService.currentPageSize())("pageIndex",t.dataService.currentPageIndex())("pageSizeOptions",T(8,Ji))("disabled",t.dataService.isLoading()))},dependencies:[yt,ct,pt,bt,ut,mt,_t,gt,ft,ht,vt,St,Mt,xt,ee,q],styles:[".full-width-table[_ngcontent-%COMP%]{width:100%}.mat-mdc-row[_ngcontent-%COMP%]:hover{background-color:#e0ffff!important;cursor:pointer}.mat-column-timestamp[_ngcontent-%COMP%], .mat-column-creator[_ngcontent-%COMP%], .mat-column-shift[_ngcontent-%COMP%]{width:25%}"]})};var br=()=>({weekday:"long"});function _r(a,n){if(a&1&&(c(0),b(1,"translate")),a&2){let e=n.$implicit;h(" ",k(1,1,"HANDOVER_MESSAGE.FLOORS."+e),", ")}}function hr(a,n){if(a&1&&(r(0,"mat-icon",6),c(1),b(2,"translate"),l(),r(3,"mat-list-item",7)(4,"div",8),_(5,"span",9),b(6,"highlight"),l()()),a&2){let e=n.$implicit,t=u();s(),h(" ",k(2,2,"HANDOVER_MESSAGE.ICONS."+e.message_type_name)," "),s(4),m("innerHTML",P(6,4,e.message_body,t.dataService.selectedUserNames()),Ae)}}var Rt=class a{dialogData=d(ja);dataService=d(Me);messageData=this.dataService.detailMessage;mainMessage=y(()=>this.dataService.detailMessage()[0]);secondaryMessages=y(()=>this.dataService.detailMessage()[1]?.secondary_messages);constructor(){this.messageData()[0]?.location_names}toDatetime(n){return new Date(n)}toMainMessage(n){return n??{ID:-1,creator_id:-1,creator_name:"",location_ids:[],location_names:[],message_type_ids:[],message_type_names:[],shift_id:-1,shift_name:"",timestamp:""}}prevRow(){this.dataService.prevIndex()}nextRow(){this.dataService.nextIndex()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["app-handover-details-dialog-v2"]],decls:24,vars:5,consts:[[1,"modal-backdrop"],["matListItemTitle",""],["matListItemLine",""],["align","end"],["matFab","",1,"dialog-buttons",3,"click","disabled"],["matFab","","cdkFocusInitial","",1,"dialog-buttons",3,"mat-dialog-close"],[1,"line-icon"],[1,"line-container"],[1,"custom-icon-container"],[1,"line-text",3,"innerHTML"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"mat-list")(2,"mat-list-item")(3,"span",1),c(4),l(),r(5,"span",2),c(6),l(),r(7,"span",2),M(8,_r,2,3,null,null,F),l()()(),r(10,"mat-dialog-content")(11,"mat-list"),M(12,hr,7,7,null,null,F),l()(),r(14,"mat-dialog-actions",3)(15,"button",4),g("click",function(){return t.prevRow()}),r(16,"mat-icon"),c(17,"keyboard_arrow_left"),l()(),r(18,"button",4),g("click",function(){return t.nextRow()}),r(19,"mat-icon"),c(20,"keyboard_arrow_right"),l()(),r(21,"button",5)(22,"mat-icon"),c(23,"close"),l()()()()),e&2&&(s(4),V(t.toDatetime(t.toMainMessage(t.mainMessage()).timestamp).toLocaleString("zh-Hant")+" "+t.toDatetime(t.toMainMessage(t.mainMessage()).timestamp).toLocaleDateString("zh-Hant",T(4,br))),s(2),h("\u4EA4\u73ED\u540C\u5DE5\uFF1A",t.toMainMessage(t.mainMessage()).creator_name),s(2),S(t.toMainMessage(t.mainMessage()).location_names),s(4),S(t.secondaryMessages()),s(3),m("disabled",!t.dataService.hasPrevRow()),s(3),m("disabled",!t.dataService.hasNextRow()))},dependencies:[$e,J,je,K,dt,kn,En,Tn,Cn,ee,qe,Ue,De,q],styles:[".modal-backdrop[_ngcontent-%COMP%]{border-radius:10px!important}.modal-backdrop[_ngcontent-%COMP%]   .line-container[_ngcontent-%COMP%]{height:auto!important;min-height:48px;display:flex;background-color:#d3d3d3;border-radius:12px;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;padding:24px}.modal-backdrop[_ngcontent-%COMP%]   .message-dialog-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column}.modal-backdrop[_ngcontent-%COMP%]   .line-icon[_ngcontent-%COMP%]{vertical-align:bottom}.modal-backdrop[_ngcontent-%COMP%]   .line-text[_ngcontent-%COMP%]{text-wrap:wrap;white-space:pre-wrap}.modal-backdrop[_ngcontent-%COMP%]   .dialog-buttons[_ngcontent-%COMP%]{border-radius:10%}"]})};function vr(a,n){if(a&1){let e=O();r(0,"mat-chip-row",4),g("removed",function(){let i=w(e).$implicit,o=u();return I(o.removeKeyword(i))}),c(1),r(2,"button",5)(3,"mat-icon"),c(4,"cancel"),l()()()}if(a&2){let e=n.$implicit;s(),h(" ",e," ")}}var At=class a{label="\u7BE9\u9078";idTag="Default";selectionChanged=new H;keywords=f([]);formControl=new ge(["angular"]);removeKeyword(n){this.keywords.update(e=>{let t=e.indexOf(n);return t<0?e:(e.splice(t,1),[...e])}),this.selectionChanged.emit([this.idTag,this.keywords()])}add(n){let e=(n.value||"").trim();e&&this.keywords.update(t=>[...t,e]),n.chipInput.clear(),this.selectionChanged.emit([this.idTag,this.keywords()])}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["app-search-bar-filter"]],inputs:{label:"label",idTag:"idTag"},outputs:{selectionChanged:"selectionChanged"},decls:8,vars:2,consts:[["chipGrid",""],[1,"example-form-field"],["aria-label","Enter keywords",3,"formControl"],["placeholder","\u65B0\u589E\u95DC\u9375\u5B57...",3,"matChipInputTokenEnd","matChipInputFor"],[3,"removed"],["matChipRemove",""]],template:function(e,t){if(e&1&&(r(0,"mat-form-field",1)(1,"mat-label"),c(2,"\u95DC\u9375\u5B57\u641C\u5C0B"),l(),r(3,"mat-chip-grid",2,0),M(5,vr,5,1,"mat-chip-row",null,da),l(),r(7,"input",3),g("matChipInputTokenEnd",function(o){return t.add(o)}),l()()),e&2){let i=Y(4);s(3),m("formControl",t.formControl),s(2),S(t.keywords()),s(2),m("matChipInputFor",i)}},dependencies:[J,oe,re,ie,rt,it,on,at,nt,ae,te,ne,Qe,le,K],encapsulation:2})};function yr(a,n){if(a&1){let e=O();r(0,"app-multi-select-filter",15),g("selection_changed",function(i){w(e);let o=u(3);return I(o.on_selection_change(i))}),l()}if(a&2){let e=u(2).$implicit,t=u();m("id_tag",e.id_tag)("label",e.label)("translate_config",e.translate_config)("available_options",t.multiFilterSignals[e.id_tag])}}function Mr(a,n){if(a&1){let e=O();r(0,"app-multi-select-filter",16),g("selection_changed",function(i){w(e);let o=u(3);return I(o.on_selection_change(i))}),l()}if(a&2){let e=u(2).$implicit,t=u();m("id_tag",e.id_tag)("label",e.label)("available_options",t.multiFilterSignals[e.id_tag])}}function Sr(a,n){if(a&1&&x(0,yr,1,4,"app-multi-select-filter",13)(1,Mr,1,3,"app-multi-select-filter",14),a&2){let e=u().$implicit;D(e.translate_config!=null?0:1)}}function xr(a,n){if(a&1){let e=O();r(0,"app-date-filter",17),g("selection_changed",function(i){w(e);let o=u(2);return I(o.on_date_selection_change(i))}),l()}if(a&2){let e=u().$implicit;m("id_tag",e.id_tag)("label",e.label)}}function Dr(a,n){if(a&1){let e=O();r(0,"app-search-bar-filter",18),g("selectionChanged",function(i){w(e);let o=u(2);return I(o.onKeywordChange(i))}),l()}if(a&2){let e=u().$implicit;m("idTag",e.id_tag)("label",e.label)}}function Cr(a,n){if(a&1&&x(0,Sr,2,1)(1,xr,1,2,"app-date-filter",11)(2,Dr,1,2,"app-search-bar-filter",12),a&2){let e=n.$implicit;D(e.type_config!=null&&e.type_config.type=="multi"?0:e.type_config!=null&&e.type_config.type=="date"?1:2)}}var zn=class a{handoverService=d(ve);serviceUserService=d(Ba);dialogService=d(Ua);handoverDataService=d(Me);secondaryDataService=d(xe);filterStateService=d(et);currentUserSerivce=d(tt);highlightText=y(()=>{let n=[];for(let e of this.filterStateService.state().serviceUserIds??[])if(n.push(this.current_service_user_list[e]),this.current_service_user_nicknames[e]!=null)for(let t of this.current_service_user_nicknames[e])n.push(t);for(let e of this.filterStateService.state().keywords)n.push(e);return n});current_service_user_list={};current_service_user_nicknames=[];multiFilterSignals={MESSAGETYPE:f([]),SERVICEUSER:f([]),SHIFTS:f([]),FLOORS:f([]),EMPLOYEE:f([])};filter_config=f([{id_tag:"DATE",label:"\u7BE9\u9078\u65E5\u671F",type_config:{type:"date"}},{id_tag:"MESSAGETYPE",label:"\u7BE9\u9078\u8A0A\u606F\u985E\u5225",type_config:{type:"multi"},translate_config:{prefix:"HANDOVER_MESSAGE.MESSAGETYPE"}},{id_tag:"SERVICEUSER",label:"\u7BE9\u9078\u670D\u52D9\u4F7F\u7528\u8005",type_config:{type:"multi"}},{id_tag:"SHIFTS",label:"\u7BE9\u9078\u73ED\u5225",type_config:{type:"multi"},translate_config:{prefix:"HANDOVER_MESSAGE.SHIFTS"}},{id_tag:"FLOORS",label:"\u7BE9\u9078\u6A13\u5C64",type_config:{type:"multi"},translate_config:{prefix:"HANDOVER_MESSAGE.FLOORS"}},{id_tag:"EMPLOYEE",label:"\u7BE9\u9078\u4EA4\u73ED\u8005",type_config:{type:"multi"}},{id_tag:"KEYWORDS",label:"\u7BE9\u9078\u95DC\u9375\u5B57",type_config:{type:"keyword"}}]);ngOnInit(){let n=new Date(Date.now());n.setHours(0,0,0,0);let e=new Date(Date.now()-864e5);e.setHours(0,0,0,0),this.filterStateService.patchDateFilter(e,n,"DATE"),this.refreshFilterOptions(),this.loadServiceUserData()}loadServiceUserData(){this.handoverService.apiV3HandoverFilterOptionGet("SERVICEUSER").subscribe(n=>{let e={};for(let t of n.data_rows)e[t.ID]=t.name;this.current_service_user_list=e}),this.serviceUserService.apiV3ServiceuserFlatServiceUserNicknamesGet().subscribe(n=>{let e={};for(let t of n.data_rows)e[t.service_user_id]==null&&(e[t.service_user_id]=[]),e[t.service_user_id].push(t.nickname);this.current_service_user_nicknames=e})}on_selection_change([n,e]){this.filterStateService.patchSelectFilters(e,n)}on_date_selection_change([n,e,t]){this.filterStateService.patchDateFilter(e,t,n)}onKeywordChange([n,e]){this.filterStateService.patchKeywordFilter(e,n)}summonNewMessageDialog(){this.dialogService.open(It,{width:"750px",maxWidth:"90vw",height:"auto",maxHeight:"85vh"}).afterClosed().subscribe(()=>{this.refreshTable()})}refreshFilterOptions(){for(let n of this.filter_config())n.type_config.type=="multi"&&this.handoverService.apiV3HandoverFilterOptionGet(n.id_tag).subscribe(e=>{this.multiFilterSignals[n.id_tag].set(e.data_rows)})}refreshTable(){this.loadServiceUserData(),this.handoverDataService.tableRefresh(),this.secondaryDataService.tableRefresh(),this.refreshFilterOptions()}summnonDetailDialog(){this.dialogService.open(Rt,{data:f([]),width:"750px",maxWidth:"90vw",height:"auto",maxHeight:"85vh"}).afterClosed().subscribe(()=>{this.handoverDataService.deselectIndex()})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["app-handover-message-page"]],decls:22,vars:2,consts:[[1,"filter-parent"],["label","\u55AE\u4E00\u4EA4\u73ED\u8A0A\u606F"],[1,"secondary-table"],[3,"highlightText"],["label","\u96C6\u5408\u4EA4\u73ED\u8A0A\u606F"],[1,"primary-table"],[3,"rowClicked","highlightText"],[1,"button-container"],[1,"add-button-container"],["matFab","","extended","","color","primary",1,"fixed-button",3,"click"],[1,"refresh-button-container"],[3,"id_tag","label"],[",","",",","",3,"idTag","label"],[",","",3,"id_tag","label","translate_config","available_options"],[3,"id_tag","label","available_options"],[",","",3,"selection_changed","id_tag","label","translate_config","available_options"],[3,"selection_changed","id_tag","label","available_options"],[3,"selection_changed","id_tag","label"],[",","",",","",3,"selectionChanged","idTag","label"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"app-handover-message-filter"),M(2,Cr,3,1,null,null,F),l()(),r(4,"mat-tab-group")(5,"mat-tab",1)(6,"div",2),_(7,"app-secondary-message-table-v2",3),l()(),r(8,"mat-tab",4)(9,"div",5)(10,"app-handover-message-table-v2",6),g("rowClicked",function(){return t.summnonDetailDialog()}),l()()()(),r(11,"div",7)(12,"div",8)(13,"button",9),g("click",function(){return t.summonNewMessageDialog()}),r(14,"mat-icon"),c(15,"add"),l(),c(16," \u65B0\u589E\u4EA4\u73ED\u7D00\u9304 "),l()(),r(17,"div",10)(18,"button",9),g("click",function(){return t.refreshTable()}),r(19,"mat-icon"),c(20,"refresh"),l(),c(21," \u91CD\u65B0\u6574\u7406 "),l()()()),e&2&&(s(2),S(t.filter_config()),s(5),m("highlightText",t.highlightText),s(3),m("highlightText",t.highlightText))},dependencies:[le,K,J,je,Sn,yn,Mn,Dt,Ct,Tt,Ft,Ot,At],styles:[".button-container[_ngcontent-%COMP%]{position:fixed;bottom:1%;width:98%;z-index:100;display:flex;gap:16px;pointer-events:none}.button-container[_ngcontent-%COMP%]   .add-button-container[_ngcontent-%COMP%], .button-container[_ngcontent-%COMP%]   .refresh-button-container[_ngcontent-%COMP%]{pointer-events:auto}"]})};export{zn as HandoverMessagePage};
