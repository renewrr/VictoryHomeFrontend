import{E as gt,j as I,k as ut,l as ht,n as P,r as ft,w as pt,y as _t}from"./chunk-3ZGQMDZ3.js";import{e as rt}from"./chunk-FZJT2LNK.js";import{D as mt,L as F,V as bt,e as ot,o as ct,u as lt,z as dt}from"./chunk-CF3DPFIZ.js";import{$a as $,Bb as w,Db as C,F as z,Hb as at,Ib as D,Ja as p,Jb as E,La as M,Ma as X,Pb as it,Rb as T,T as U,Tb as R,Tc as kt,Uc as vt,V as v,Va as B,Xa as g,Z as m,_a as K,a as l,aa as x,b as V,ca as r,ga as q,ha as H,i as d,ib as J,ic as y,jb as Y,ka as f,kb as tt,la as Z,p as k,pa as Q,qb as A,rb as _,sb as et,t as N,ta as W,u as L,uc as st,ya as G,zb as nt}from"./chunk-GYQO6MRE.js";function wt(a,s){if(a&1){let t=nt();A(0,"div",1)(1,"button",2),w("click",function(){q(t);let n=C();return H(n.action())}),T(2),_()()}if(a&2){let t=C();p(2),R(" ",t.data.action," ")}}var Ct=["label"];function Dt(a,s){}var Et=Math.pow(2,31)-1,b=class{_overlayRef;instance;containerInstance;_afterDismissed=new d;_afterOpened=new d;_onAction=new d;_durationTimeoutId;_dismissedByAction=!1;constructor(s,t){this._overlayRef=t,this.containerInstance=s,s._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(s){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(s,Et))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},yt=new x("MatSnackBarData"),u=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Tt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=g({type:a,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return a})(),Rt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=g({type:a,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return a})(),It=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=g({type:a,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return a})(),Pt=(()=>{class a{snackBarRef=r(b);data=r(yt);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=B({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(A(0,"div",0),T(1),_(),Y(2,wt,3,1,"div",1)),e&2&&(p(),R(" ",n.data.message,`
`),p(),tt(n.hasAction?2:-1))},dependencies:[bt,Tt,Rt,It],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return a})(),O="_mat-snack-bar-enter",j="_mat-snack-bar-exit",Ft=(()=>{class a extends ht{_ngZone=r(Q);_elementRef=r(G);_changeDetectorRef=r(st);_platform=r(ot);_animationsDisabled=F();snackBarConfig=r(u);_document=r(Z);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=r(f);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new d;_onExit=new d;_onEnter=new d;_animationState="void";_live;_label;_role;_liveElementId=r(dt).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===j?this._completeExit():t===O&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?M(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(O)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(O)},200)))}exit(){return this._destroyed?k(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?M(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(j)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(j),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(o=>t.classList.add(o)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,i="mdc-snackbar__label";n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let i=e[n],o=i.getAttribute("aria-owns");this._trackedModals.add(i),o?o.indexOf(t)===-1&&i.setAttribute("aria-owns",o+" "+t):i.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),n=t.querySelector("[aria-live]");if(e&&n){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(i=document.activeElement),e.removeAttribute("aria-hidden"),n.appendChild(e),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=B({type:a,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&at(P,7)(Ct,7),e&2){let i;D(i=E())&&(n._portalOutlet=i.first),D(i=E())&&(n._label=i.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(e,n){e&1&&w("animationend",function(o){return n.onAnimationEnd(o.animationName)})("animationcancel",function(o){return n.onAnimationEnd(o.animationName)}),e&2&&it("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[K],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(A(0,"div",1)(1,"div",2,0)(3,"div",3),$(4,Dt,0,0,"ng-template",4),_(),et(5,"div"),_()()),e&2&&(p(5),J("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[P],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return a})(),Ot=new x("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new u}),St=(()=>{class a{_live=r(lt);_injector=r(f);_breakpointObserver=r(ct);_parentSnackBar=r(a,{optional:!0,skipSelf:!0});_defaultConfig=r(Ot);_animationsDisabled=F();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Pt;snackBarContainerComponent=Ft;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let i=l(l({},this._defaultConfig),n);return i.data={message:t,action:e},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,i=f.create({parent:n||this._injector,providers:[{provide:u,useValue:e}]}),o=new I(this.snackBarContainerComponent,e.viewContainerRef,i),c=t.attach(o);return c.instance.snackBarConfig=e,c.instance}_attach(t,e){let n=l(l(l({},new u),this._defaultConfig),e),i=this._createOverlay(n),o=this._attachSnackBarContainer(i,n),c=new b(o,i);if(t instanceof X){let h=new ut(t,null,{$implicit:n.data,snackBarRef:c});c.instance=o.attachTemplatePortal(h)}else{let h=this._createInjector(n,c),Mt=new I(t,void 0,h),Bt=o.attachComponentPortal(Mt);c.instance=Bt.instance}return this._breakpointObserver.observe(mt.HandsetPortrait).pipe(U(i.detachments())).subscribe(h=>{i.overlayElement.classList.toggle(this.handsetCssClass,h.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(c,n),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new ft;e.direction=t.direction;let n=pt(this._injector),i=t.direction==="rtl",o=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!i||t.horizontalPosition==="end"&&i,c=!o&&t.horizontalPosition!=="center";return o?n.left("0"):c?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,e.disableAnimations=this._animationsDisabled,_t(this._injector,e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return f.create({parent:n||this._injector,providers:[{provide:b,useValue:e},{provide:yt,useValue:t.data}]})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=m({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var S=class a{_snackbar=r(St);msgSnack(s){this._snackbar.open(s,"",{duration:3e3})}static \u0275fac=function(t){return new(t||a)};static \u0275prov=m({token:a,factory:a.\u0275fac,providedIn:"root"})};var xt=class a{authAPi=r(kt);handoverApi=r(vt);translate=r(gt);snackbar=r(S);router=r(rt);_userState=W({isAuthenticated:!1,is2FaVerified:!1,hasManagementPrivilege:!1});isAuthenticated=y(()=>this._userState().isAuthenticated);is2FaVerified=y(()=>this._userState().is2FaVerified);isManagementPrivilege=y(()=>this._userState().hasManagementPrivilege);bootstrapAuthSession(){return N(this.authAPi.apiV3AuthAuthMeGet().pipe(v(s=>{this._userState.set({is2FaVerified:s.is_2fa_verified,isAuthenticated:s.authenticated,hasManagementPrivilege:s.management_privilege})}),L(()=>!0),z(()=>k(!1))))}forcedLogout(){this.resetUser()}login(s){return s.totp?this.authAPi.apiV3AuthLoginWithTotpPost(s.account,s.password,s.totp).pipe(v(t=>{t.status?this._userState.set({is2FaVerified:t.is_2fa_verified,isAuthenticated:t.authenticated,hasManagementPrivilege:t.management_privilege}):(this.snackbar.msgSnack("\u767B\u5165\u5931\u6557"),this.resetUser())})):this.authAPi.apiV3AuthLoginNoTotpPost(s.account,s.password).pipe(v(t=>{t.status?this._userState.set({is2FaVerified:t.is_2fa_verified,isAuthenticated:t.authenticated,hasManagementPrivilege:t.management_privilege}):(this.snackbar.msgSnack("\u767B\u5165\u5931\u6557"),this.resetUser())}))}logout(){this.authAPi.apiV3AuthLogoutPost().subscribe(s=>{this.resetUser(),this.router.navigateByUrl("/login")})}update2FaStatus(s){this._userState.update(t=>V(l({},t),{is2FaVerified:s}))}resetUser(){this.translate.use("zh"),this._userState.set({isAuthenticated:!1,is2FaVerified:!1,hasManagementPrivilege:!1})}static \u0275fac=function(t){return new(t||a)};static \u0275prov=m({token:a,factory:a.\u0275fac,providedIn:"root"})};export{St as a,S as b,xt as c};
