import{c as H}from"./chunk-IIUSXNR5.js";import{$ as te,J as $,L as E,O as K,P as Z,Q as J,S as M,U as X,W as Y,X as ee,_ as re,ba as ne,ca as ie,ga as ae,ha as oe,ma as se,na as ce}from"./chunk-3ZGQMDZ3.js";import{b as z,e as j}from"./chunk-FZJT2LNK.js";import{K as q,V as U,Y as Q}from"./chunk-CF3DPFIZ.js";import{$a as B,Bb as v,Db as A,Hb as D,Hc as G,Ib as N,Ja as a,Jb as T,Nb as O,Ob as b,Pb as V,Qb as R,Rb as d,Va as u,aa as x,ca as p,ec as I,ia as C,ib as g,ja as F,jb as _,kb as f,oc as W,pb as c,pc as k,qb as o,rb as i,sb as m,ta as w,xc as y,ya as L,yb as h}from"./chunk-GYQO6MRE.js";var ue=["determinateSpinner"];function ge(t,s){if(t&1&&(C(),o(0,"svg",11),m(1,"circle",12),i()),t&2){let e=A();g("viewBox",e._viewBox()),a(),b("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),g("r",e._circleRadius())}}var _e=new x("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:le})}),le=100,fe=10,de=(()=>{class t{_elementRef=p(L);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=p(_e),r=q(),n=this._elementRef.nativeElement;this._noopAnimations=r==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=n.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&r==="reduced-motion"&&n.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=le;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-fe)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=u({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(r,n){if(r&1&&D(ue,5),r&2){let l;N(l=T())&&(n._determinateCircle=l.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(r,n){r&2&&(g("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",n.mode==="determinate"?n.value:null)("mode",n.mode),R("mat-"+n.color),b("width",n.diameter,"px")("height",n.diameter,"px")("--mat-progress-spinner-size",n.diameter+"px")("--mat-progress-spinner-active-indicator-width",n.diameter+"px"),V("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate",n.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",y],diameter:[2,"diameter","diameter",y],strokeWidth:[2,"strokeWidth","strokeWidth",y]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(r,n){if(r&1&&(B(0,ge,2,8,"ng-template",null,0,I),o(2,"div",2,1),C(),o(4,"svg",3),m(5,"circle",4),i()(),F(),o(6,"div",5)(7,"div",6)(8,"div",7),h(9,8),i(),o(10,"div",9),h(11,8),i(),o(12,"div",10),h(13,8),i()()()),r&2){let l=O(1);a(4),g("viewBox",n._viewBox()),a(),b("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),g("r",n._circleRadius()),a(4),c("ngTemplateOutlet",l),a(2),c("ngTemplateOutlet",l),a(2),c("ngTemplateOutlet",l)}},dependencies:[G],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function ve(t,s){t&1&&(o(0,"mat-error"),d(1,"\u8ACB\u8F38\u5165\u5E33\u865F"),i())}function be(t,s){t&1&&(o(0,"mat-error"),d(1,"\u8ACB\u8F38\u5165\u5BC6\u78BC"),i())}function ye(t,s){t&1&&(o(0,"mat-error"),d(1,"\u8ACB\u8F38\u5165\u9A57\u8B49\u78BC"),i())}function Me(t,s){t&1&&m(0,"mat-spinner",7),t&2&&c("diameter",20)}function Se(t,s){t&1&&(o(0,"span"),d(1,"\u767B\u5165"),i())}var P=class{isErrorState(s,e){let r=e&&e.submitted;return!!(s&&s.invalid&&(s.dirty||s.touched||r))}},S=class t{isLoading=k(!1);errorMessage=k(null);matcher=new P;loginSubmit=W();loginForm=new J({account:new M("",{nonNullable:!0,validators:[E.required]}),password:new M("",{nonNullable:!0,validators:[E.required]}),totp:new M("")});onSubmit(){if(this.loginForm.valid){let s=this.loginForm.getRawValue();this.loginSubmit.emit(this.loginForm.getRawValue())}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=u({type:t,selectors:[["app-login-panel-v2"]],inputs:{isLoading:[1,"isLoading"],errorMessage:[1,"errorMessage"]},outputs:{loginSubmit:"loginSubmit"},decls:20,vars:9,consts:[[1,"panel"],[1,"login-form",3,"formGroup"],["appearance","outline",1,"login-full-width"],["matInput","","formControlName","account","placeholder","Ex. vh00",3,"errorStateMatcher"],["type","password","matInput","","formControlName","password","placeholder","8\u5B57\u5143\u4EE5\u4E0A\u82F1\u6587\u6578\u5B57",3,"errorStateMatcher"],["matInput","","formControlName","totp","placeholder","Authenticator app \u4E2D 6\u5B57\u6578\u5B57",3,"errorStateMatcher"],["matButton","filled",1,"login-button",3,"click","disabled"],["color","accent",1,"login-spinner",3,"diameter"]],template:function(e,r){e&1&&(o(0,"div",0)(1,"form",1)(2,"mat-form-field",2)(3,"mat-label"),d(4,"\u5E33\u865F"),i(),m(5,"input",3),_(6,ve,2,0,"mat-error"),i(),o(7,"mat-form-field",2)(8,"mat-label"),d(9,"\u5BC6\u78BC"),i(),m(10,"input",4),_(11,be,2,0,"mat-error"),i(),o(12,"mat-form-field",2)(13,"mat-label"),d(14,"\u5169\u6B65\u9A5F\u9A57\u8B49"),i(),m(15,"input",5),_(16,ye,2,0,"mat-error"),i(),o(17,"button",6),v("click",function(){return r.onSubmit()}),_(18,Me,1,1,"mat-spinner",7)(19,Se,2,0,"span"),i()()()),e&2&&(a(),c("formGroup",r.loginForm),a(4),c("errorStateMatcher",r.matcher),a(),f(r.loginForm.hasError("required")?6:-1),a(4),c("errorStateMatcher",r.matcher),a(),f(r.loginForm.hasError("required")?11:-1),a(4),c("errorStateMatcher",r.matcher),a(),f(r.loginForm.hasError("required")?16:-1),a(),c("disabled",r.loginForm.invalid),a(),f(r.isLoading()?18:19))},dependencies:[re,X,$,K,Z,oe,ae,ne,ie,ce,se,te,ee,Y,Q,U,de],styles:[".panel[_ngcontent-%COMP%]{height:70%;gap:30px}.login-form[_ngcontent-%COMP%], .login-full-width[_ngcontent-%COMP%], .login-button[_ngcontent-%COMP%]{width:100%}"]})};var pe=class t{router=p(j);route=p(z);authService=p(H);errorMessage=w(null);isLoading=w(!1);onLoginAttempt(s){this.isLoading.set(!0),this.errorMessage.set(null),this.authService.login(s).subscribe({next:()=>{this.isLoading.set(!1);let e=this.route.snapshot.queryParams.returnUrl||"/";console.log("LOGIN SUCCESS",e),this.router.navigateByUrl(e)},error:e=>{throw this.isLoading.set(!1),this.errorMessage.set(e.error?.message||"Invalid credentials."),e}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=u({type:t,selectors:[["app-login-page"]],decls:4,vars:2,consts:[[1,"login-page"],[1,"main-panel"],["src","vhome_logo.png",1,"vhome-logo"],[3,"loginSubmit","isLoading","errorMessage"]],template:function(e,r){e&1&&(o(0,"div",0)(1,"div",1),m(2,"img",2),o(3,"app-login-panel-v2",3),v("loginSubmit",function(l){return r.onLoginAttempt(l)}),i()()()),e&2&&(a(3),c("isLoading",r.isLoading())("errorMessage",r.errorMessage()))},dependencies:[S],styles:['.login-page[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.login-page[_ngcontent-%COMP%]:before{content:"";background-image:url(/view.jpg);background-size:cover;position:absolute;inset:0;opacity:.4;z-index:-1}.main-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:35vmin;min-height:35vmin;max-height:70vmin;padding-inline:16px;padding-block:8px;background-color:#fff;color:#fff;align-items:center;justify-content:space-between;border-radius:30px}.vhome-logo[_ngcontent-%COMP%]{border-radius:4px;padding:5px;width:40vmin;justify-content:center}']})};export{pe as LoginPage};
