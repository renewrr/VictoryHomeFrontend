import{c as an,h as un}from"./chunk-W6ARN4IS.js";import{a as rn,c as sn}from"./chunk-AOG26BNC.js";import{f as cn}from"./chunk-GJIWY5JZ.js";import{b as ge,c as _}from"./chunk-IIUSXNR5.js";import{a as Yt,c as Xt,e as Gt,f as Wt,g as Qt,h as Kt}from"./chunk-THKG7UBC.js";import{B as Pt,C as Lt,D as jt,E as Vt,F as Ut,G as zt,J as qt,O as Zt,T as Jt,_ as $t,ba as en,ga as tn,h as Tt,ha as _e,k as Dt,ma as nn,na as on,q as kt,r as St,u as It,y as Rt}from"./chunk-3ZGQMDZ3.js";import"./chunk-ANDMQGP2.js";import{c as dt,d as pt,e as S,g as ht,h as ft,i as gt}from"./chunk-FZJT2LNK.js";import"./chunk-U2OFGS6C.js";import{a as ln,b as mn}from"./chunk-OM3YM3AB.js";import{L as Ie,Q as At,S as Ft,T as Et,U as Ot,V as Bt,W as Nt,Y as fe,a as _t,b as bt,e as vt,h as Se,j as Mt,w as yt,y as Ct,z as wt}from"./chunk-CF3DPFIZ.js";import{$b as O,A as Be,Ab as et,Bb as p,C as ee,Cb as tt,D as Ne,Db as M,Eb as K,F as f,Fb as T,Gb as ue,Hb as nt,I as He,Ib as D,Ja as d,Jb as k,La as Xe,Lc as lt,Ma as Ge,Mc as mt,Nb as it,Nc as ct,Oa as We,Oc as ut,Pb as q,Qa as Qe,Qb as de,R as te,Ra as Ke,Rb as c,Rc as xt,S as X,Sc as he,T as Le,Tb as E,Tc as Ht,V as je,Va as g,Wa as se,Wb as ot,Xa as W,Xb as at,Yb as rt,Z as ne,_ as ie,_a as qe,_b as st,a as I,aa as G,ab as Ze,b as Ee,bc as B,ca as o,dc as N,e as J,eb as Je,ga as y,ha as C,i as $,ia as Ve,ib as Q,jb as le,ka as oe,kb as me,la as ae,n as Oe,oa as re,p as v,pa as Ue,pb as F,q as R,qb as l,rb as m,sa as ze,sb as w,ta as P,tb as ke,u as h,ub as $e,uc as pe,wc as H,ya as A,za as Ye,zb as ce}from"./chunk-GYQO6MRE.js";var be=class i{dialogRef=o(Yt);verificationCode=P("");onVerify(){this.dialogRef.close(this.verificationCode())}onCancel(){this.dialogRef.close(null)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["app-two-factor-dialog"]],decls:14,vars:2,consts:[["mat-dialog-title",""],["appearance","outline",1,"full-width"],["matInput","","maxLength","6","placeholder","000000","autocomplete","one-time-code",3,"ngModelChange","ngModel"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","","color","primary",3,"click","disabled"]],template:function(e,t){e&1&&(l(0,"h2",0),c(1,"\u5B89\u5168\u6027\u9A57\u8B49"),m(),l(2,"mat-dialog-content")(3,"p"),c(4,"\u8ACB\u8F38\u5165authenticator app\u4E2D\u4E4B\u516D\u4F4D\u6578\u9A57\u8B49\u78BC"),m(),l(5,"mat-form-field",1)(6,"mat-label"),c(7,"\u4E8C\u6B21\u9A57\u8B49\u78BC"),m(),l(8,"input",2),rt("ngModelChange",function(a){return at(t.verificationCode,a)||(t.verificationCode=a),a}),m()()(),l(9,"mat-dialog-actions",3)(10,"button",4),p("click",function(){return t.onCancel()}),c(11,"\u53D6\u6D88"),m(),l(12,"button",5),p("click",function(){return t.onVerify()}),c(13," \u9A57\u8B49 "),m()()),e&2&&(d(8),ot("ngModel",t.verificationCode),d(4),F("disabled",t.verificationCode().length!==6))},dependencies:[Kt,Gt,Qt,Wt,_e,tn,en,on,nn,fe,Bt,$t,qt,Zt,Jt],encapsulation:2})};var j=class i{dialog=o(Xt);authSystemService=o(Ht);authService=o(_);promptFor2Fa(){return this.dialog.open(be,{disableClose:!0,width:"400px"}).afterClosed().pipe(X(e=>e?this.authSystemService.apiV3AuthTwoFactorStepUpPost(e):R(()=>new Error("2FA_CANCELLED"))),je(e=>{this.authService.update2FaStatus(!0)}),h(()=>!0),f(e=>R(()=>e)))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})};var pn=(i,r)=>(o(an).fetchNicknames().pipe(h(()=>!0),f(()=>v(!1))),!0);var hn=(i,r)=>(o(rn).fetchData().pipe(h(()=>!0),f(()=>v(!1))).subscribe(),o(sn).fetchData().pipe(h(()=>!0),f(()=>v(!1))).subscribe(),!0);var x=async(i,r)=>{let e=o(_),t=o(S);return e.isAuthenticated()?!0:t.createUrlTree(["login/"],{queryParams:{returnUrl:r.url}})},fn=(i,r)=>{let e=o(_),t=o(S),n=o(j),a=o(ge);return e.isManagementPrivilege()?e.is2FaVerified()?!0:n.promptFor2Fa().pipe(h(()=>!0),f(()=>(a.msgSnack("\u4E8C\u6B21\u9A57\u8B49\u5931\u6557"),v(t.createUrlTree(["/"],{queryParams:{returnUrl:r.url}}))))):(a.msgSnack("\u7121\u4F7F\u7528\u6B64\u529F\u80FD\u4E4B\u6B0A\u9650"),t.createUrlTree(["/"],{queryParams:{returnUrl:r.url}}))},gn=[{path:"",pathMatch:"full",loadComponent(){return import("./chunk-4GWYIRCY.js").then(i=>i.MainPage)},canActivate:[x],data:{reuse:!0}},{path:"login",pathMatch:"full",loadComponent(){return import("./chunk-CYTTFDOY.js").then(i=>i.LoginPage)},data:{reuse:!1}},{path:"handover",pathMatch:"full",loadComponent(){return import("./chunk-URORR7PX.js").then(i=>i.HandoverMessagePage)},canActivate:[x],data:{reuse:!0},resolve:{handoverResolver:pn}},{path:"management",pathMatch:"full",loadComponent(){return import("./chunk-47ZVXDNN.js").then(i=>i.ManagementPage)},canActivate:[x,fn],data:{reuse:!0},resolve:{managementResolver:hn}},{path:"buildingManagement",loadComponent(){return import("./chunk-6PHETHVP.js").then(i=>i.BuildingManagementPage)},canActivate:[x,fn],data:{reuse:!0},children:[{path:"",loadComponent:()=>import("./chunk-25H3KC6S.js").then(i=>i.BuildingView),canActivate:[x],data:{reuse:!0}},{path:"building/:buildingId",loadComponent:()=>import("./chunk-OTOSDEJU.js").then(i=>i.BuildingDetails),canActivate:[x],data:{reuse:!0}},{path:"building/:buildingId/floor/:floorId",loadComponent:()=>import("./chunk-XIWX4XSL.js").then(i=>i.FloorDetails),canActivate:[x],data:{reuse:!0}},{path:"building/:buildingId/floor/:floorId/room/:roomId",loadComponent:()=>import("./chunk-QL657Q55.js").then(i=>i.RoomDetails),canActivate:[x],data:{reuse:!0}}]}];var u=!1,_n=(i,r)=>{let e=o(S),t=o(ge),n=o(_),a=o(j);return r(i).pipe(f(s=>{if(console.log(s),u)return Oe;switch(s.status){case 401:u=!0,s.error.message=="LOGIN_FAILED"&&t.msgSnack("\u767B\u5165\u8A0A\u606F\u932F\u8AA4"),s.error.msg=="Token has been revoked"&&t.msgSnack("\u767B\u5165\u5DF2\u904E\u671F\uFF0C\u8ACB\u91CD\u65B0\u767B\u5165"),e.navigate(["/login"]).then(()=>{u=!1},()=>{u=!1}),n.forcedLogout();break;case 403:s.error.message=="TWO_FACTOR_STEP_UP_CHALLENGE_FAILED"?(u=!0,t.msgSnack("\u4E8C\u6B21\u9A57\u8B49\u5931\u6557"),e.navigate(["/"]).then(()=>{u=!1},()=>{u=!1})):s.error.message=="No required privilege, contact management for more info."?(u=!0,t.msgSnack("\u7121\u6B0A\u9650\u4F7F\u7528\u6B64\u529F\u80FD"),e.navigate(["/"]).then(()=>{u=!1},()=>{u=!1})):s.error.message=="NO_ACCOUNT_IN_RECORD"?(u=!0,t.msgSnack("\u67E5\u7121\u767B\u5165\u8CC7\u8A0A"),e.navigate(["/login"]).then(()=>{u=!1},()=>{u=!1}),n.logout()):s.error.message=="Step-up authentication required. Please complete the 2FA challenge."&&a.promptFor2Fa().subscribe(b=>{if(b){let z=i.clone({});return r(z)}return R(()=>s)});break;default:u=!0,t.msgSnack("\u672A\u77E5\u932F\u8AA4"),e.navigate(["/"]).then(()=>{u=!1},()=>{u=!1});break}return R(()=>s)}))};var ve=class i{handlers=new Map;shouldDetach(r){return r.data.reuse===!0}store(r,e){if(e&&r.data.reuse===!0){let t=this.getRouteKey(r);this.handlers.set(t,e)}}shouldAttach(r){let e=this.getRouteKey(r);return r.data.reuse===!0&&this.handlers.has(e)}retrieve(r){let e=this.getRouteKey(r);return r.data.reuse===!0?this.handlers.get(e)??null:null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}getRouteKey(r){return r.routeConfig}static \u0275fac=function(e){return new(e||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac})};var bn=(i,r)=>{if(i.url.includes("/api")){let e=i.clone({withCredentials:!0});return r(e)}return r(i)};var Me=class{handle(r){return r.interpolateParams&&typeof r.interpolateParams=="object"&&"default"in r.interpolateParams?r.interpolateParams.default:r.key}};var vn={providers:[ze(),ht(gn,ft(),gt()),{provide:pt,useClass:ve},ct(ut([_n,bn])),zt({loader:{provide:jt,useFactory:i=>new Re(i,["./i18n"]),deps:[mt]},fallbackLang:"en",missingTranslationHandler:{provide:Lt,useClass:Me}}),Je(()=>o(_).bootstrapAuthSession())]},Re=class{constructor(r,e){this.http=r;this.folders=e}getTranslation(r){let e=this.folders.map(t=>this.http.get(`${t}/${r}.json`));return Be(e).pipe(h(t=>t.reduce((n,a)=>I(I({},n),a),{})))}};var kn=["*",[["mat-toolbar-row"]]],Sn=["*","mat-toolbar-row"],In=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=W({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Mn=(()=>{class i{_elementRef=o(A);_platform=o(vt);_document=o(ae);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,n,a){if(t&1&&ue(a,In,5),t&2){let s;D(s=k())&&(n._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(de(n.color?"mat-"+n.color:""),q("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Sn,decls:2,vars:0,template:function(t,n){t&1&&(K(kn),T(0),T(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var yn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=se({type:i});static \u0275inj=ie({imports:[he]})}return i})();var Bn=["mat-menu-item",""],Nn=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Hn=["mat-icon, [matMenuItemIcon]","*"];function Ln(i,r){i&1&&(Ve(),l(0,"svg",2),w(1,"polygon",3),m())}var jn=["*"];function Vn(i,r){if(i&1){let e=ce();ke(0,"div",0),tt("click",function(){y(e);let n=M();return C(n.closed.emit("click"))})("animationstart",function(n){y(e);let a=M();return C(a._onAnimationStart(n.animationName))})("animationend",function(n){y(e);let a=M();return C(a._onAnimationDone(n.animationName))})("animationcancel",function(n){y(e);let a=M();return C(a._onAnimationDone(n.animationName))}),ke(1,"div",1),T(2),$e()()}if(i&2){let e=M();de(e._classList),q("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),et("id",e.panelId),Q("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Ae=new G("MAT_MENU_PANEL"),Z=(()=>{class i{_elementRef=o(A);_document=o(ae);_focusMonitor=o(Se);_parentMenu=o(Ae,{optional:!0});_changeDetectorRef=o(pe);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new $;_focused=new $;_highlighted=!1;_triggersSubmenu=!1;constructor(){o(Mt).load(Ft),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&p("click",function(s){return n._checkDisabled(s)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(Q("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),q("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",H],disableRipple:[2,"disableRipple","disableRipple",H]},exportAs:["matMenuItem"],attrs:Bn,ngContentSelectors:Hn,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(K(Nn),T(0),l(1,"span",0),T(2,1),m(),w(3,"div",1),le(4,Ln,2,0,":svg:svg",2)),t&2&&(d(3),F("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),d(),me(n._triggersSubmenu?4:-1))},dependencies:[At],encapsulation:2,changeDetection:0})}return i})();var Un=new G("MatMenuContent");var zn=new G("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Pe="_mat-menu-enter",ye="_mat-menu-exit",U=(()=>{class i{_elementRef=o(A);_changeDetectorRef=o(pe);_injector=o(oe);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ie();_allItems;_directDescendantItems=new Ye;_classList={};_panelAnimationState="void";_animationDone=new $;_isAnimating=P(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=I({},this._classList);t&&t.length&&t.split(" ").forEach(a=>{n[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new re;close=this.closed;panelId=o(wt).getId("mat-menu-panel-");constructor(){let e=o(zn);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ct(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(te(this._directDescendantItems),X(e=>ee(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),a=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[a]&&!n[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(te(this._directDescendantItems),X(t=>ee(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:yt(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Xe(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Ee(I({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===ye;(t||e===Pe)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Pe||e===ye)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ye),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Pe:ye)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(te(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,a){if(t&1&&ue(a,Un,5)(a,Z,5)(a,Z,4),t&2){let s;D(s=k())&&(n.lazyContent=s.first),D(s=k())&&(n._allItems=s),D(s=k())&&(n.items=s)}},viewQuery:function(t,n){if(t&1&&nt(Ge,5),t&2){let a;D(a=k())&&(n.templateRef=a.first)}},hostVars:3,hostBindings:function(t,n){t&2&&Q("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",H],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:H(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[st([{provide:Ae,useExisting:i}])],ngContentSelectors:jn,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(K(),Ze(0,Vn,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Yn=new G("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=o(oe);return()=>kt(i)}});var V=new WeakMap,Xn=(()=>{class i{_canHaveBackdrop;_element=o(A);_viewContainerRef=o(Ke);_menuItemInstance=o(Z,{optional:!0,self:!0});_dir=o(xt,{optional:!0});_focusMonitor=o(Se);_ngZone=o(Ue);_injector=o(oe);_scrollStrategy=o(Yn);_changeDetectorRef=o(pe);_animationsDisabled=Ie();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=J.EMPTY;_menuCloseSubscription=J.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=o(Ae,{optional:!0});this._parentMaterialMenu=t instanceof U?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&V.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=V.get(t);V.set(t,this),n&&n!==this&&n._closeMenu();let a=this._createOverlay(t),s=a.getConfig(),b=s.positionStrategy;this._setPosition(t,b),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof U&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Le(t.close)).subscribe(()=>{b.withLockedPosition(!1).reapplyLastPosition(),b.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof U&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(He(1)).subscribe(()=>{t.detach(),V.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&V.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Rt(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof U&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new St({positionStrategy:It(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX==="start"?"after":"before",s=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(a,s)})})}_setPosition(e,t){let[n,a]=e.xPosition==="before"?["end","start"]:["start","end"],[s,b]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[z,xe]=[s,b],[Te,De]=[n,a],Y=0;if(this._triggersSubmenu()){if(De=n=e.xPosition==="before"?"start":"end",a=Te=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Fe=this._parentMaterialMenu.items.first;this._parentInnerPadding=Fe?Fe._getHostElement().offsetTop:0}Y=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(z=s==="top"?"bottom":"top",xe=b==="top"?"bottom":"top");t.withPositions([{originX:n,originY:z,overlayX:Te,overlayY:s,offsetY:Y},{originX:a,originY:z,overlayX:De,overlayY:s,offsetY:Y},{originX:n,originY:xe,overlayX:Te,overlayY:b,offsetY:-Y},{originX:a,originY:xe,overlayX:De,overlayY:b,offsetY:-Y}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:v(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ne(s=>this._menuOpen&&s!==this._menuItemInstance)):v();return ee(e,n,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Dt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return V.get(e)===this}_triggerIsAriaDisabled(){return H(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Qe()};static \u0275dir=W({type:i})}return i})(),xn=(()=>{class i extends Xn{_cleanupTouchstart;_hoverSubscription=J.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new re;onMenuOpen=this.menuOpened;menuClosed=new re;onMenuClose=this.menuClosed;constructor(){super(!0);let e=o(We);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{bt(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){_t(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=W({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&p("click",function(s){return n._handleClick(s)})("mousedown",function(s){return n._handleMousedown(s)})("keydown",function(s){return n._handleKeydown(s)}),t&2&&Q("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[qe]})}return i})();var Tn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=se({type:i});static \u0275inj=ie({imports:[Ot,Pt,he,Tt]})}return i})();var Wn=()=>({default:"\u4E3B\u9801\u9762"}),Qn=()=>({default:"\u4EA4\u73ED\u7CFB\u7D71"}),Kn=()=>({default:"\u767B\u51FA"}),qn=()=>({default:"\u4EBA\u54E1\u7BA1\u7406\u7CFB\u7D71"}),Zn=()=>({default:"\u5834\u57DF\u7BA1\u7406\u7CFB\u7D71"});function Jn(i,r){if(i&1){let e=ce();l(0,"button",3),p("click",function(){y(e);let n=M();return C(n.management_page())}),c(1),B(2,"translate"),m(),l(3,"button",3),p("click",function(){y(e);let n=M();return C(n.buildingManagement())}),c(4),B(5,"translate"),m()}i&2&&(d(),E(" ",N(2,2,"UI.NAVIGATION.personnel",O(8,qn))," "),d(3),E(" ",N(5,5,"UI.NAVIGATION.operation",O(9,Zn))," "))}var Ce=class i{authService=o(_);router=o(S);logout(){this.authService.logout()}handover(){this.router.navigateByUrl("/handover")}mainPage(){this.router.navigateByUrl("/")}management_page(){this.router.navigateByUrl("/management")}buildingManagement(){this.router.navigateByUrl("/buildingManagement")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["app-main-toolbar"]],decls:25,vars:17,consts:[["pagemenu","matMenu"],[1,"toolbar"],["matIconButton","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["matFab","","extended","",3,"click"],[1,"example-spacer"],["matIconButton","",1,"logout-button"],[3,"click"]],template:function(e,t){if(e&1&&(l(0,"header")(1,"mat-toolbar",1)(2,"button",2)(3,"mat-icon"),c(4,"menu"),m()(),l(5,"mat-menu",null,0)(7,"button",3),p("click",function(){return t.mainPage()}),c(8),B(9,"translate"),m(),l(10,"button",3),p("click",function(){return t.handover()}),c(11),B(12,"translate"),m(),le(13,Jn,6,10),l(14,"button",3),p("click",function(){return t.logout()}),c(15),B(16,"translate"),m()(),l(17,"a",4),p("click",function(){return t.mainPage()}),l(18,"mat-icon"),c(19,"home"),m(),c(20," \u52DD\u5229\u4E4B\u5BB6\u4E8B\u52D9\u7CFB\u7D71 "),m(),w(21,"span",5),l(22,"button",6)(23,"mat-icon",7),p("click",function(){return t.logout()}),c(24,"logout"),m()()()()),e&2){let n=it(6);d(2),F("matMenuTriggerFor",n),d(6),E(" ",N(9,5,"UI.NAVIGATION.main",O(14,Wn))," "),d(3),E(" ",N(12,8,"UI.NAVIGATION.handover",O(15,Qn))," "),d(2),me(t.authService.isManagementPrivilege()?13:-1),d(2),E(" ",N(16,11,"UI.NAVIGATION.logout",O(16,Kn))," ")}},dependencies:[yn,Mn,fe,Et,Nt,mn,ln,Tn,U,Z,xn,cn,un,_e,Ut],styles:["header[_ngcontent-%COMP%]{display:flex;padding-inline:16px;padding-block:8px;color:#0ff;align-items:center;justify-content:space-between}span[_ngcontent-%COMP%]{font-size:clamp(1rem,2.5vw,2rem)}.toolbar[_ngcontent-%COMP%]{background-color:#add8e6;border-radius:15px;display:flex;flex-direction:row;min-height:8vmin;max-height:8vmin}.logout-button[_ngcontent-%COMP%]{margin-left:auto}"]})};var we=class i{title=P("vhome_mis");translate=o(Vt);ngOnInit(){this.translate.addLangs(["en","zh","vi"]),this.translate.setFallbackLang("en"),this.translate.use("zh")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["app-root"]],decls:3,vars:0,template:function(e,t){e&1&&(w(0,"app-main-toolbar"),l(1,"main"),w(2,"router-outlet"),m())},dependencies:[dt,Ce],styles:["main[_ngcontent-%COMP%]{padding:16px}"]})};lt(we,vn).catch(i=>console.error(i));
