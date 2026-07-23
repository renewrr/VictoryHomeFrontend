import{a as Se,b as Dt,c as Te}from"./chunk-AOG26BNC.js";import{A as bi,B as vi,C as xi,D as Ot,E as zt,F as $t,G as Ht,H as Gt,I as jt,J as Qt,K as Kt,L as Jt,M as Yt,N as Xt,O as Wt,P as Zt,Q as en,a as Rt,b as Bt,c as Ut,d as Ft,e as At,f as Pt,h as Nt,i as gi,j as Vt,k as Lt,l as Ie,o as qt,p as _i,z as fi}from"./chunk-UBKQE7SV.js";import{e as ki,f as yi}from"./chunk-GJIWY5JZ.js";import{a as pt,c as ui,d as gt,e as _t,f as hi,g as ft,h as bt}from"./chunk-THKG7UBC.js";import{$ as St,H as ht,I as vt,J as Z,K as xt,L as Ee,O as ee,P as kt,T as yt,U as wt,W as Ct,X as Mt,Y as pi,Z as Et,_ as te,ba as ne,da as Tt,ga as ie,ha as ae,ma as oe,na as z}from"./chunk-3ZGQMDZ3.js";import{a as It}from"./chunk-U2OFGS6C.js";import{a as $,b as H}from"./chunk-OM3YM3AB.js";import{L as lt,Q as st,S as dt,T as mt,V as ut,W as mi,X as W,Y as O,h as di,j as ot,z as rt}from"./chunk-CF3DPFIZ.js";import{$a as F,$b as tt,Ab as Xe,Bb as p,Db as l,Eb as We,Fb as Ze,Hb as we,Ib as pe,Ja as h,Jb as ge,Nb as L,Oa as oi,Pa as Je,Pb as Q,Qb as Ce,Qc as si,Rb as u,Sb as et,Sc as ct,Tb as R,Va as B,Wa as Ye,Y as He,Zb as ci,_ as Ge,_b as Me,aa as je,c as w,ca as x,d as Ta,ga as _,ha as f,ia as Qe,ib as de,ic as li,ja as ni,jb as I,kb as D,lb as me,mc as nt,nb as ue,oa as X,ob as he,pa as ii,pb as g,qb as c,rb as s,sb as k,ta as ai,uc as it,va as ye,vb as ri,wb as P,wc as A,xb as N,xc as at,ya as Ke,zb as E}from"./chunk-GYQO6MRE.js";var Mi=w((cl,Ci)=>{"use strict";Ci.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}});var re=w(fe=>{"use strict";var Tn,xo=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];fe.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};fe.getSymbolTotalCodewords=function(t){return xo[t]};fe.getBCHDigit=function(i){let t=0;for(;i!==0;)t++,i>>>=1;return t};fe.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Tn=t};fe.isKanjiModeEnabled=function(){return typeof Tn<"u"};fe.toSJIS=function(t){return Tn(t)}});var ln=w(V=>{"use strict";V.L={bit:1};V.M={bit:0};V.Q={bit:3};V.H={bit:2};function ko(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return V.L;case"m":case"medium":return V.M;case"q":case"quartile":return V.Q;case"h":case"high":return V.H;default:throw new Error("Unknown EC Level: "+i)}}V.isValid=function(t){return t&&typeof t.bit<"u"&&t.bit>=0&&t.bit<4};V.from=function(t,e){if(V.isValid(t))return t;try{return ko(t)}catch{return e}}});var Ti=w((dl,Si)=>{"use strict";function Ei(){this.buffer=[],this.length=0}Ei.prototype={get:function(i){let t=Math.floor(i/8);return(this.buffer[t]>>>7-i%8&1)===1},put:function(i,t){for(let e=0;e<t;e++)this.putBit((i>>>t-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(i){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),i&&(this.buffer[t]|=128>>>this.length%8),this.length++}};Si.exports=Ei});var Di=w((ml,Ii)=>{"use strict";function Pe(i){if(!i||i<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=i,this.data=new Uint8Array(i*i),this.reservedBit=new Uint8Array(i*i)}Pe.prototype.set=function(i,t,e,n){let a=i*this.size+t;this.data[a]=e,n&&(this.reservedBit[a]=!0)};Pe.prototype.get=function(i,t){return this.data[i*this.size+t]};Pe.prototype.xor=function(i,t,e){this.data[i*this.size+t]^=e};Pe.prototype.isReserved=function(i,t){return this.reservedBit[i*this.size+t]};Ii.exports=Pe});var Ri=w(sn=>{"use strict";var yo=re().getSymbolSize;sn.getRowColCoords=function(t){if(t===1)return[];let e=Math.floor(t/7)+2,n=yo(t),a=n===145?26:Math.ceil((n-13)/(2*e-2))*2,o=[n-7];for(let r=1;r<e-1;r++)o[r]=o[r-1]-a;return o.push(6),o.reverse()};sn.getPositions=function(t){let e=[],n=sn.getRowColCoords(t),a=n.length;for(let o=0;o<a;o++)for(let r=0;r<a;r++)o===0&&r===0||o===0&&r===a-1||o===a-1&&r===0||e.push([n[o],n[r]]);return e}});var Fi=w(Ui=>{"use strict";var wo=re().getSymbolSize,Bi=7;Ui.getPositions=function(t){let e=wo(t);return[[0,0],[e-Bi,0],[0,e-Bi]]}});var Ai=w(C=>{"use strict";C.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var be={N1:3,N2:3,N3:40,N4:10};C.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7};C.from=function(t){return C.isValid(t)?parseInt(t,10):void 0};C.getPenaltyN1=function(t){let e=t.size,n=0,a=0,o=0,r=null,d=null;for(let m=0;m<e;m++){a=o=0,r=d=null;for(let b=0;b<e;b++){let v=t.get(m,b);v===r?a++:(a>=5&&(n+=be.N1+(a-5)),r=v,a=1),v=t.get(b,m),v===d?o++:(o>=5&&(n+=be.N1+(o-5)),d=v,o=1)}a>=5&&(n+=be.N1+(a-5)),o>=5&&(n+=be.N1+(o-5))}return n};C.getPenaltyN2=function(t){let e=t.size,n=0;for(let a=0;a<e-1;a++)for(let o=0;o<e-1;o++){let r=t.get(a,o)+t.get(a,o+1)+t.get(a+1,o)+t.get(a+1,o+1);(r===4||r===0)&&n++}return n*be.N2};C.getPenaltyN3=function(t){let e=t.size,n=0,a=0,o=0;for(let r=0;r<e;r++){a=o=0;for(let d=0;d<e;d++)a=a<<1&2047|t.get(r,d),d>=10&&(a===1488||a===93)&&n++,o=o<<1&2047|t.get(d,r),d>=10&&(o===1488||o===93)&&n++}return n*be.N3};C.getPenaltyN4=function(t){let e=0,n=t.data.length;for(let o=0;o<n;o++)e+=t.data[o];return Math.abs(Math.ceil(e*100/n/5)-10)*be.N4};function Co(i,t,e){switch(i){case C.Patterns.PATTERN000:return(t+e)%2===0;case C.Patterns.PATTERN001:return t%2===0;case C.Patterns.PATTERN010:return e%3===0;case C.Patterns.PATTERN011:return(t+e)%3===0;case C.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(e/3))%2===0;case C.Patterns.PATTERN101:return t*e%2+t*e%3===0;case C.Patterns.PATTERN110:return(t*e%2+t*e%3)%2===0;case C.Patterns.PATTERN111:return(t*e%3+(t+e)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}C.applyMask=function(t,e){let n=e.size;for(let a=0;a<n;a++)for(let o=0;o<n;o++)e.isReserved(o,a)||e.xor(o,a,Co(t,o,a))};C.getBestMask=function(t,e){let n=Object.keys(C.Patterns).length,a=0,o=1/0;for(let r=0;r<n;r++){e(r),C.applyMask(r,t);let d=C.getPenaltyN1(t)+C.getPenaltyN2(t)+C.getPenaltyN3(t)+C.getPenaltyN4(t);C.applyMask(r,t),d<o&&(o=d,a=r)}return a}});var Dn=w(In=>{"use strict";var ce=ln(),dn=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],mn=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];In.getBlocksCount=function(t,e){switch(e){case ce.L:return dn[(t-1)*4+0];case ce.M:return dn[(t-1)*4+1];case ce.Q:return dn[(t-1)*4+2];case ce.H:return dn[(t-1)*4+3];default:return}};In.getTotalCodewordsCount=function(t,e){switch(e){case ce.L:return mn[(t-1)*4+0];case ce.M:return mn[(t-1)*4+1];case ce.Q:return mn[(t-1)*4+2];case ce.H:return mn[(t-1)*4+3];default:return}}});var Pi=w(hn=>{"use strict";var Ne=new Uint8Array(512),un=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)Ne[e]=t,un[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)Ne[e]=Ne[e-255]})();hn.log=function(t){if(t<1)throw new Error("log("+t+")");return un[t]};hn.exp=function(t){return Ne[t]};hn.mul=function(t,e){return t===0||e===0?0:Ne[un[t]+un[e]]}});var Ni=w(Ve=>{"use strict";var Rn=Pi();Ve.mul=function(t,e){let n=new Uint8Array(t.length+e.length-1);for(let a=0;a<t.length;a++)for(let o=0;o<e.length;o++)n[a+o]^=Rn.mul(t[a],e[o]);return n};Ve.mod=function(t,e){let n=new Uint8Array(t);for(;n.length-e.length>=0;){let a=n[0];for(let r=0;r<e.length;r++)n[r]^=Rn.mul(e[r],a);let o=0;for(;o<n.length&&n[o]===0;)o++;n=n.slice(o)}return n};Ve.generateECPolynomial=function(t){let e=new Uint8Array([1]);for(let n=0;n<t;n++)e=Ve.mul(e,new Uint8Array([1,Rn.exp(n)]));return e}});var qi=w((bl,Li)=>{"use strict";var Vi=Ni();function Bn(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}Bn.prototype.initialize=function(t){this.degree=t,this.genPoly=Vi.generateECPolynomial(this.degree)};Bn.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");let e=new Uint8Array(t.length+this.degree);e.set(t);let n=Vi.mod(e,this.genPoly),a=this.degree-n.length;if(a>0){let o=new Uint8Array(this.degree);return o.set(n,a),o}return n};Li.exports=Bn});var Un=w(Oi=>{"use strict";Oi.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}});var Fn=w(K=>{"use strict";var zi="[0-9]+",Mo="[A-Z $%*+\\-./:]+",Le="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Le=Le.replace(/u/g,"\\u");var Eo="(?:(?![A-Z0-9 $%*+\\-./:]|"+Le+`)(?:.|[\r
]))+`;K.KANJI=new RegExp(Le,"g");K.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");K.BYTE=new RegExp(Eo,"g");K.NUMERIC=new RegExp(zi,"g");K.ALPHANUMERIC=new RegExp(Mo,"g");var So=new RegExp("^"+Le+"$"),To=new RegExp("^"+zi+"$"),Io=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");K.testKanji=function(t){return So.test(t)};K.testNumeric=function(t){return To.test(t)};K.testAlphanumeric=function(t){return Io.test(t)}});var le=w(S=>{"use strict";var Do=Un(),An=Fn();S.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};S.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};S.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};S.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};S.MIXED={bit:-1};S.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!Do.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]};S.getBestModeForData=function(t){return An.testNumeric(t)?S.NUMERIC:An.testAlphanumeric(t)?S.ALPHANUMERIC:An.testKanji(t)?S.KANJI:S.BYTE};S.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")};S.isValid=function(t){return t&&t.bit&&t.ccBits};function Ro(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return S.NUMERIC;case"alphanumeric":return S.ALPHANUMERIC;case"kanji":return S.KANJI;case"byte":return S.BYTE;default:throw new Error("Unknown mode: "+i)}}S.from=function(t,e){if(S.isValid(t))return t;try{return Ro(t)}catch{return e}}});var Qi=w(ve=>{"use strict";var pn=re(),Bo=Dn(),$i=ln(),se=le(),Pn=Un(),Gi=7973,Hi=pn.getBCHDigit(Gi);function Uo(i,t,e){for(let n=1;n<=40;n++)if(t<=ve.getCapacity(n,e,i))return n}function ji(i,t){return se.getCharCountIndicator(i,t)+4}function Fo(i,t){let e=0;return i.forEach(function(n){let a=ji(n.mode,t);e+=a+n.getBitsLength()}),e}function Ao(i,t){for(let e=1;e<=40;e++)if(Fo(i,e)<=ve.getCapacity(e,t,se.MIXED))return e}ve.from=function(t,e){return Pn.isValid(t)?parseInt(t,10):e};ve.getCapacity=function(t,e,n){if(!Pn.isValid(t))throw new Error("Invalid QR Code version");typeof n>"u"&&(n=se.BYTE);let a=pn.getSymbolTotalCodewords(t),o=Bo.getTotalCodewordsCount(t,e),r=(a-o)*8;if(n===se.MIXED)return r;let d=r-ji(n,t);switch(n){case se.NUMERIC:return Math.floor(d/10*3);case se.ALPHANUMERIC:return Math.floor(d/11*2);case se.KANJI:return Math.floor(d/13);case se.BYTE:default:return Math.floor(d/8)}};ve.getBestVersionForData=function(t,e){let n,a=$i.from(e,$i.M);if(Array.isArray(t)){if(t.length>1)return Ao(t,a);if(t.length===0)return 1;n=t[0]}else n=t;return Uo(n.mode,n.getLength(),a)};ve.getEncodedBits=function(t){if(!Pn.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;pn.getBCHDigit(e)-Hi>=0;)e^=Gi<<pn.getBCHDigit(e)-Hi;return t<<12|e}});var Xi=w(Yi=>{"use strict";var Nn=re(),Ji=1335,Po=21522,Ki=Nn.getBCHDigit(Ji);Yi.getEncodedBits=function(t,e){let n=t.bit<<3|e,a=n<<10;for(;Nn.getBCHDigit(a)-Ki>=0;)a^=Ji<<Nn.getBCHDigit(a)-Ki;return(n<<10|a)^Po}});var Zi=w((Cl,Wi)=>{"use strict";var No=le();function De(i){this.mode=No.NUMERIC,this.data=i.toString()}De.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};De.prototype.getLength=function(){return this.data.length};De.prototype.getBitsLength=function(){return De.getBitsLength(this.data.length)};De.prototype.write=function(t){let e,n,a;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),a=parseInt(n,10),t.put(a,10);let o=this.data.length-e;o>0&&(n=this.data.substr(e),a=parseInt(n,10),t.put(a,o*3+1))};Wi.exports=De});var ta=w((Ml,ea)=>{"use strict";var Vo=le(),Vn=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Re(i){this.mode=Vo.ALPHANUMERIC,this.data=i}Re.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Re.prototype.getLength=function(){return this.data.length};Re.prototype.getBitsLength=function(){return Re.getBitsLength(this.data.length)};Re.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=Vn.indexOf(this.data[e])*45;n+=Vn.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(Vn.indexOf(this.data[e]),6)};ea.exports=Re});var ia=w((El,na)=>{"use strict";var Lo=le();function Be(i){this.mode=Lo.BYTE,typeof i=="string"?this.data=new TextEncoder().encode(i):this.data=new Uint8Array(i)}Be.getBitsLength=function(t){return t*8};Be.prototype.getLength=function(){return this.data.length};Be.prototype.getBitsLength=function(){return Be.getBitsLength(this.data.length)};Be.prototype.write=function(i){for(let t=0,e=this.data.length;t<e;t++)i.put(this.data[t],8)};na.exports=Be});var oa=w((Sl,aa)=>{"use strict";var qo=le(),Oo=re();function Ue(i){this.mode=qo.KANJI,this.data=i}Ue.getBitsLength=function(t){return t*13};Ue.prototype.getLength=function(){return this.data.length};Ue.prototype.getBitsLength=function(){return Ue.getBitsLength(this.data.length)};Ue.prototype.write=function(i){let t;for(t=0;t<this.data.length;t++){let e=Oo.toSJIS(this.data[t]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),i.put(e,13)}};aa.exports=Ue});var ra=w((Tl,Ln)=>{"use strict";var qe={single_source_shortest_paths:function(i,t,e){var n={},a={};a[t]=0;var o=qe.PriorityQueue.make();o.push(t,0);for(var r,d,m,b,v,T,M,q,J;!o.empty();){r=o.pop(),d=r.value,b=r.cost,v=i[d]||{};for(m in v)v.hasOwnProperty(m)&&(T=v[m],M=b+T,q=a[m],J=typeof a[m]>"u",(J||q>M)&&(a[m]=M,o.push(m,M),n[m]=d))}if(typeof e<"u"&&typeof a[e]>"u"){var Y=["Could not find a path from ",t," to ",e,"."].join("");throw new Error(Y)}return n},extract_shortest_path_from_predecessor_list:function(i,t){for(var e=[],n=t,a;n;)e.push(n),a=i[n],n=i[n];return e.reverse(),e},find_path:function(i,t,e){var n=qe.single_source_shortest_paths(i,t,e);return qe.extract_shortest_path_from_predecessor_list(n,e)},PriorityQueue:{make:function(i){var t=qe.PriorityQueue,e={},n;i=i||{};for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e.queue=[],e.sorter=i.sorter||t.default_sorter,e},default_sorter:function(i,t){return i.cost-t.cost},push:function(i,t){var e={value:i,cost:t};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};typeof Ln<"u"&&(Ln.exports=qe)});var pa=w(Fe=>{"use strict";var y=le(),sa=Zi(),da=ta(),ma=ia(),ua=oa(),Oe=Fn(),gn=re(),zo=ra();function ca(i){return unescape(encodeURIComponent(i)).length}function ze(i,t,e){let n=[],a;for(;(a=i.exec(e))!==null;)n.push({data:a[0],index:a.index,mode:t,length:a[0].length});return n}function ha(i){let t=ze(Oe.NUMERIC,y.NUMERIC,i),e=ze(Oe.ALPHANUMERIC,y.ALPHANUMERIC,i),n,a;return gn.isKanjiModeEnabled()?(n=ze(Oe.BYTE,y.BYTE,i),a=ze(Oe.KANJI,y.KANJI,i)):(n=ze(Oe.BYTE_KANJI,y.BYTE,i),a=[]),t.concat(e,n,a).sort(function(r,d){return r.index-d.index}).map(function(r){return{data:r.data,mode:r.mode,length:r.length}})}function qn(i,t){switch(t){case y.NUMERIC:return sa.getBitsLength(i);case y.ALPHANUMERIC:return da.getBitsLength(i);case y.KANJI:return ua.getBitsLength(i);case y.BYTE:return ma.getBitsLength(i)}}function $o(i){return i.reduce(function(t,e){let n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}function Ho(i){let t=[];for(let e=0;e<i.length;e++){let n=i[e];switch(n.mode){case y.NUMERIC:t.push([n,{data:n.data,mode:y.ALPHANUMERIC,length:n.length},{data:n.data,mode:y.BYTE,length:n.length}]);break;case y.ALPHANUMERIC:t.push([n,{data:n.data,mode:y.BYTE,length:n.length}]);break;case y.KANJI:t.push([n,{data:n.data,mode:y.BYTE,length:ca(n.data)}]);break;case y.BYTE:t.push([{data:n.data,mode:y.BYTE,length:ca(n.data)}])}}return t}function Go(i,t){let e={},n={start:{}},a=["start"];for(let o=0;o<i.length;o++){let r=i[o],d=[];for(let m=0;m<r.length;m++){let b=r[m],v=""+o+m;d.push(v),e[v]={node:b,lastCount:0},n[v]={};for(let T=0;T<a.length;T++){let M=a[T];e[M]&&e[M].node.mode===b.mode?(n[M][v]=qn(e[M].lastCount+b.length,b.mode)-qn(e[M].lastCount,b.mode),e[M].lastCount+=b.length):(e[M]&&(e[M].lastCount=b.length),n[M][v]=qn(b.length,b.mode)+4+y.getCharCountIndicator(b.mode,t))}}a=d}for(let o=0;o<a.length;o++)n[a[o]].end=0;return{map:n,table:e}}function la(i,t){let e,n=y.getBestModeForData(i);if(e=y.from(t,n),e!==y.BYTE&&e.bit<n.bit)throw new Error('"'+i+'" cannot be encoded with mode '+y.toString(e)+`.
 Suggested mode is: `+y.toString(n));switch(e===y.KANJI&&!gn.isKanjiModeEnabled()&&(e=y.BYTE),e){case y.NUMERIC:return new sa(i);case y.ALPHANUMERIC:return new da(i);case y.KANJI:return new ua(i);case y.BYTE:return new ma(i)}}Fe.fromArray=function(t){return t.reduce(function(e,n){return typeof n=="string"?e.push(la(n,null)):n.data&&e.push(la(n.data,n.mode)),e},[])};Fe.fromString=function(t,e){let n=ha(t,gn.isKanjiModeEnabled()),a=Ho(n),o=Go(a,e),r=zo.find_path(o.map,"start","end"),d=[];for(let m=1;m<r.length-1;m++)d.push(o.table[r[m]].node);return Fe.fromArray($o(d))};Fe.rawSplit=function(t){return Fe.fromArray(ha(t,gn.isKanjiModeEnabled()))}});var _a=w(ga=>{"use strict";var fn=re(),On=ln(),jo=Ti(),Qo=Di(),Ko=Ri(),Jo=Fi(),Hn=Ai(),Gn=Dn(),Yo=qi(),_n=Qi(),Xo=Xi(),Wo=le(),zn=pa();function Zo(i,t){let e=i.size,n=Jo.getPositions(t);for(let a=0;a<n.length;a++){let o=n[a][0],r=n[a][1];for(let d=-1;d<=7;d++)if(!(o+d<=-1||e<=o+d))for(let m=-1;m<=7;m++)r+m<=-1||e<=r+m||(d>=0&&d<=6&&(m===0||m===6)||m>=0&&m<=6&&(d===0||d===6)||d>=2&&d<=4&&m>=2&&m<=4?i.set(o+d,r+m,!0,!0):i.set(o+d,r+m,!1,!0))}}function er(i){let t=i.size;for(let e=8;e<t-8;e++){let n=e%2===0;i.set(e,6,n,!0),i.set(6,e,n,!0)}}function tr(i,t){let e=Ko.getPositions(t);for(let n=0;n<e.length;n++){let a=e[n][0],o=e[n][1];for(let r=-2;r<=2;r++)for(let d=-2;d<=2;d++)r===-2||r===2||d===-2||d===2||r===0&&d===0?i.set(a+r,o+d,!0,!0):i.set(a+r,o+d,!1,!0)}}function nr(i,t){let e=i.size,n=_n.getEncodedBits(t),a,o,r;for(let d=0;d<18;d++)a=Math.floor(d/3),o=d%3+e-8-3,r=(n>>d&1)===1,i.set(a,o,r,!0),i.set(o,a,r,!0)}function $n(i,t,e){let n=i.size,a=Xo.getEncodedBits(t,e),o,r;for(o=0;o<15;o++)r=(a>>o&1)===1,o<6?i.set(o,8,r,!0):o<8?i.set(o+1,8,r,!0):i.set(n-15+o,8,r,!0),o<8?i.set(8,n-o-1,r,!0):o<9?i.set(8,15-o-1+1,r,!0):i.set(8,15-o-1,r,!0);i.set(n-8,8,1,!0)}function ir(i,t){let e=i.size,n=-1,a=e-1,o=7,r=0;for(let d=e-1;d>0;d-=2)for(d===6&&d--;;){for(let m=0;m<2;m++)if(!i.isReserved(a,d-m)){let b=!1;r<t.length&&(b=(t[r]>>>o&1)===1),i.set(a,d-m,b),o--,o===-1&&(r++,o=7)}if(a+=n,a<0||e<=a){a-=n,n=-n;break}}}function ar(i,t,e){let n=new jo;e.forEach(function(m){n.put(m.mode.bit,4),n.put(m.getLength(),Wo.getCharCountIndicator(m.mode,i)),m.write(n)});let a=fn.getSymbolTotalCodewords(i),o=Gn.getTotalCodewordsCount(i,t),r=(a-o)*8;for(n.getLengthInBits()+4<=r&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);let d=(r-n.getLengthInBits())/8;for(let m=0;m<d;m++)n.put(m%2?17:236,8);return or(n,i,t)}function or(i,t,e){let n=fn.getSymbolTotalCodewords(t),a=Gn.getTotalCodewordsCount(t,e),o=n-a,r=Gn.getBlocksCount(t,e),d=n%r,m=r-d,b=Math.floor(n/r),v=Math.floor(o/r),T=v+1,M=b-v,q=new Yo(M),J=0,Y=new Array(r),ei=new Array(r),kn=0,Sa=new Uint8Array(i.buffer);for(let ke=0;ke<r;ke++){let wn=ke<m?v:T;Y[ke]=Sa.slice(J,J+wn),ei[ke]=q.encode(Y[ke]),J+=wn,kn=Math.max(kn,wn)}let yn=new Uint8Array(n),ti=0,G,j;for(G=0;G<kn;G++)for(j=0;j<r;j++)G<Y[j].length&&(yn[ti++]=Y[j][G]);for(G=0;G<M;G++)for(j=0;j<r;j++)yn[ti++]=ei[j][G];return yn}function rr(i,t,e,n){let a;if(Array.isArray(i))a=zn.fromArray(i);else if(typeof i=="string"){let b=t;if(!b){let v=zn.rawSplit(i);b=_n.getBestVersionForData(v,e)}a=zn.fromString(i,b||40)}else throw new Error("Invalid data");let o=_n.getBestVersionForData(a,e);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=o;else if(t<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);let r=ar(t,e,a),d=fn.getSymbolSize(t),m=new Qo(d);return Zo(m,t),er(m),tr(m,t),$n(m,e,0),t>=7&&nr(m,t),ir(m,r),isNaN(n)&&(n=Hn.getBestMask(m,$n.bind(null,m,e))),Hn.applyMask(n,m),$n(m,e,n),{modules:m,version:t,errorCorrectionLevel:e,maskPattern:n,segments:a}}ga.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let n=On.M,a,o;return typeof e<"u"&&(n=On.from(e.errorCorrectionLevel,On.M),a=_n.from(e.version),o=Hn.from(e.maskPattern),e.toSJISFunc&&fn.setToSJISFunction(e.toSJISFunc)),rr(t,a,n,o)}});var jn=w(xe=>{"use strict";function fa(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let t=i.slice().replace("#","").split("");if(t.length<3||t.length===5||t.length>8)throw new Error("Invalid hex color: "+i);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(n){return[n,n]}))),t.length===6&&t.push("F","F");let e=parseInt(t.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:e&255,hex:"#"+t.slice(0,6).join("")}}xe.getOptions=function(t){t||(t={}),t.color||(t.color={});let e=typeof t.margin>"u"||t.margin===null||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,a=t.scale||4;return{width:n,scale:n?4:a,margin:e,color:{dark:fa(t.color.dark||"#000000ff"),light:fa(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}};xe.getScale=function(t,e){return e.width&&e.width>=t+e.margin*2?e.width/(t+e.margin*2):e.scale};xe.getImageWidth=function(t,e){let n=xe.getScale(t,e);return Math.floor((t+e.margin*2)*n)};xe.qrToImageData=function(t,e,n){let a=e.modules.size,o=e.modules.data,r=xe.getScale(a,n),d=Math.floor((a+n.margin*2)*r),m=n.margin*r,b=[n.color.light,n.color.dark];for(let v=0;v<d;v++)for(let T=0;T<d;T++){let M=(v*d+T)*4,q=n.color.light;if(v>=m&&T>=m&&v<d-m&&T<d-m){let J=Math.floor((v-m)/r),Y=Math.floor((T-m)/r);q=b[o[J*a+Y]?1:0]}t[M++]=q.r,t[M++]=q.g,t[M++]=q.b,t[M]=q.a}}});var ba=w(bn=>{"use strict";var Qn=jn();function cr(i,t,e){i.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=e,t.width=e,t.style.height=e+"px",t.style.width=e+"px"}function lr(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}bn.render=function(t,e,n){let a=n,o=e;typeof a>"u"&&(!e||!e.getContext)&&(a=e,e=void 0),e||(o=lr()),a=Qn.getOptions(a);let r=Qn.getImageWidth(t.modules.size,a),d=o.getContext("2d"),m=d.createImageData(r,r);return Qn.qrToImageData(m.data,t,a),cr(d,o,r),d.putImageData(m,0,0),o};bn.renderToDataURL=function(t,e,n){let a=n;typeof a>"u"&&(!e||!e.getContext)&&(a=e,e=void 0),a||(a={});let o=bn.render(t,e,a),r=a.type||"image/png",d=a.rendererOpts||{};return o.toDataURL(r,d.quality)}});var ka=w(xa=>{"use strict";var sr=jn();function va(i,t){let e=i.a/255,n=t+'="'+i.hex+'"';return e<1?n+" "+t+'-opacity="'+e.toFixed(2).slice(1)+'"':n}function Kn(i,t,e){let n=i+t;return typeof e<"u"&&(n+=" "+e),n}function dr(i,t,e){let n="",a=0,o=!1,r=0;for(let d=0;d<i.length;d++){let m=Math.floor(d%t),b=Math.floor(d/t);!m&&!o&&(o=!0),i[d]?(r++,d>0&&m>0&&i[d-1]||(n+=o?Kn("M",m+e,.5+b+e):Kn("m",a,0),a=0,o=!1),m+1<t&&i[d+1]||(n+=Kn("h",r),r=0)):a++}return n}xa.render=function(t,e,n){let a=sr.getOptions(e),o=t.modules.size,r=t.modules.data,d=o+a.margin*2,m=a.color.light.a?"<path "+va(a.color.light,"fill")+' d="M0 0h'+d+"v"+d+'H0z"/>':"",b="<path "+va(a.color.dark,"stroke")+' d="'+dr(r,o,a.margin)+'"/>',v='viewBox="0 0 '+d+" "+d+'"',M='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+v+' shape-rendering="crispEdges">'+m+b+`</svg>
`;return typeof n=="function"&&n(null,M),M}});var wa=w($e=>{"use strict";var mr=Mi(),Jn=_a(),ya=ba(),ur=ka();function Yn(i,t,e,n,a){let o=[].slice.call(arguments,1),r=o.length,d=typeof o[r-1]=="function";if(!d&&!mr())throw new Error("Callback required as last argument");if(d){if(r<2)throw new Error("Too few arguments provided");r===2?(a=e,e=t,t=n=void 0):r===3&&(t.getContext&&typeof a>"u"?(a=n,n=void 0):(a=n,n=e,e=t,t=void 0))}else{if(r<1)throw new Error("Too few arguments provided");return r===1?(e=t,t=n=void 0):r===2&&!t.getContext&&(n=e,e=t,t=void 0),new Promise(function(m,b){try{let v=Jn.create(e,n);m(i(v,t,n))}catch(v){b(v)}})}try{let m=Jn.create(e,n);a(null,i(m,t,n))}catch(m){a(m)}}$e.create=Jn.create;$e.toCanvas=Yn.bind(null,ya.render);$e.toDataURL=Yn.bind(null,ya.renderToDataURL);$e.toString=Yn.bind(null,function(i,t,e){return ur.render(i,e)})});var Ia=["switch"],Da=["*"];function Ra(i,t){i&1&&(c(0,"span",11),Qe(),c(1,"svg",13),k(2,"path",14),s(),c(3,"svg",15),k(4,"path",16),s()())}var Ba=new je("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),tn=class{source;checked;constructor(t,e){this.source=t,this.checked=e}},Cn=(()=>{class i{_elementRef=x(Ke);_focusMonitor=x(di);_changeDetectorRef=x(it);defaults=x(Ba);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new tn(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=lt();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new X;toggleChange=new X;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){x(ot).load(dt);let e=x(new nt("tabindex"),{optional:!0}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||"accent",this.id=this._uniqueId=x(rt).getId("mat-mdc-slide-toggle-"),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new tn(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=B({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(n,a){if(n&1&&we(Ia,5),n&2){let o;pe(o=ge())&&(a._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(n,a){n&2&&(Xe("id",a.id),de("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Ce(a.color?"mat-"+a.color:""),Q("mat-mdc-slide-toggle-focused",a._focused)("mat-mdc-slide-toggle-checked",a.checked)("_mat-animation-noopable",a._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",A],color:"color",disabled:[2,"disabled","disabled",A],disableRipple:[2,"disableRipple","disableRipple",A],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:at(e)],checked:[2,"checked","checked",A],hideIcon:[2,"hideIcon","hideIcon",A],disabledInteractive:[2,"disabledInteractive","disabledInteractive",A]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Me([{provide:vt,useExisting:He(()=>i),multi:!0},{provide:xt,useExisting:i,multi:!0}]),ye],ngContentSelectors:Da,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(n,a){if(n&1&&(We(),c(0,"div",1)(1,"button",2,0),p("click",function(){return a._handleClick()}),k(3,"div",3)(4,"span",4),c(5,"span",5)(6,"span",6)(7,"span",7),k(8,"span",8),s(),c(9,"span",9),k(10,"span",10),s(),I(11,Ra,5,0,"span",11),s()()(),c(12,"label",12),p("click",function(r){return r.stopPropagation()}),Ze(13),s()()),n&2){let o=L(2);g("labelPosition",a.labelPosition),h(),Q("mdc-switch--selected",a.checked)("mdc-switch--unselected",!a.checked)("mdc-switch--checked",a.checked)("mdc-switch--disabled",a.disabled)("mat-mdc-slide-toggle-disabled-interactive",a.disabledInteractive),g("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex)("disabled",a.disabled&&!a.disabledInteractive),de("id",a.buttonId)("name",a.name)("aria-label",a.ariaLabel)("aria-labelledby",a._getAriaLabelledBy())("aria-describedby",a.ariaDescribedby)("aria-required",a.required||null)("aria-checked",a.checked)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),h(9),g("matRippleTrigger",o)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0),h(),D(a.hideIcon?-1:11),h(),g("for",a.buttonId),de("id",a._labelId)}},dependencies:[st,qt],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return i})(),wi=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Ye({type:i});static \u0275inj=Ge({imports:[Cn,ct]})}return i})();var qa=()=>[5,10,20],Oa=(i,t)=>e=>e.nickname;function za(i,t){i&1&&(c(0,"th",18),u(1,"\u59D3\u540D"),s())}function $a(i,t){if(i&1){let e=E();c(0,"mat-form-field")(1,"mat-label"),u(2,"\u670D\u52D9\u4F7F\u7528\u8005\u540D\u7A31"),s(),c(3,"input",20),p("ngModelChange",function(a){_(e);let o=l().$implicit,r=l();return f(r.serviceUserState.updateRow(r.asRow(o).ID,"name",a))}),s()()}if(i&2){let e=l().$implicit,n=l();h(3),g("ngModel",n.serviceUserState.getBuffer(n.asRow(e)).name)("disabled",n.serviceUserState.getBuffer(n.asRow(e)).deleted)}}function Ha(i,t){if(i&1&&u(0),i&2){let e=l().$implicit,n=l();R(" ",n.asRow(e).name," ")}}function Ga(i,t){if(i&1&&(c(0,"td",19),I(1,$a,4,2,"mat-form-field")(2,Ha,1,1),s()),i&2){let e=t.$implicit,n=l();h(),D(n.serviceUserState.isEditing(n.asRow(e))?1:2)}}function ja(i,t){i&1&&(c(0,"th",18),u(1,"\u4F4F\u5BBF\u623F\u9593"),s())}function Qa(i,t){if(i&1&&(c(0,"mat-option",23),u(1),s()),i&2){let e=t.$implicit;g("value",e),h(),et(e.name)}}function Ka(i,t){if(i&1){let e=E();c(0,"mat-select",22),p("ngModelChange",function(a){_(e);let o=l().$implicit,r=l();return f(r.serviceUserState.updateRow(r.asRow(o).ID,"living_space",a))}),c(1,"mat-select-trigger"),u(2),s(),c(3,"mat-option",23),u(4,"\u975E\u4F4F\u5BBF"),s(),ue(5,Qa,2,2,"mat-option",23,me),s()}if(i&2){let e=l().$implicit,n=l();g("ngModel",n.serviceUserState.getBuffer(n.asRow(e)).living_space)("compareWith",n.activeAreaService.compareLivingSpace)("disabled",n.serviceUserState.getBuffer(n.asRow(e)).deleted),h(2),R(" ",n.getRowName(e)," "),h(),g("value",n.activeAreaService.LIVING_SPACE_CLEAR_OPTION),h(2),he(n.activeAreaService.livingSpaces())}}function Ja(i,t){if(i&1&&u(0),i&2){let e=l().$implicit,n=l();R(" ",n.asRow(e).living_space?n.asRow(e).living_space.name:"\u975E\u4F4F\u5BBF"," ")}}function Ya(i,t){if(i&1&&(c(0,"td",19),I(1,Ka,7,5,"mat-select",21)(2,Ja,1,1),s()),i&2){let e=t.$implicit,n=l();h(),D(n.serviceUserState.isEditing(n.asRow(e))?1:2)}}function Xa(i,t){i&1&&(c(0,"th",18),u(1,"\u66B1\u7A31"),s())}function Wa(i,t){if(i&1){let e=E();c(0,"mat-chip-row",28),p("removed",function(){let a=_(e).$implicit,o=l(2).$implicit,r=l();return f(r.removeNickname(r.asRow(o),a))})("edited",function(a){let o=_(e).$implicit,r=l(2).$implicit,d=l();return f(d.editNickname(d.asRow(r),o,a))}),c(1,"button",29)(2,"mat-icon"),u(3,"edit"),s()(),u(4),c(5,"button",30)(6,"mat-icon"),u(7,"cancel"),s()()()}if(i&2){let e=t.$implicit;g("editable",!0),h(4),R(" ",e.nickname," ")}}function Za(i,t){if(i&1){let e=E();c(0,"mat-form-field")(1,"mat-chip-grid",24,1),ue(3,Wa,8,2,"mat-chip-row",25,me),s(),c(5,"input",26,2),p("matChipInputTokenEnd",function(a){_(e);let o=l().$implicit,r=l();return f(r.addNickname(r.asRow(o),a))}),s(),c(7,"button",27),p("click",function(){_(e);let a=L(6),o=l().$implicit,r=l();return f(r.addNicknameFromButton(r.asRow(o),a))}),c(8,"mat-icon"),u(9,"add"),s()()()}if(i&2){let e=L(2),n=l().$implicit,a=l();h(),g("disabled",a.serviceUserState.getBuffer(a.asRow(n)).deleted),h(2),he(a.serviceUserState.getBuffer(a.asRow(n)).service_user_nicknames),h(2),g("matChipInputFor",e)("matChipInputSeparatorKeyCodes",a.separatorKeysCodes),h(2),g("disabled",a.serviceUserState.getBuffer(a.asRow(n)).deleted)}}function eo(i,t){if(i&1&&u(0),i&2){let e=l().$implicit,n=l();R(" ",n.asRow(e).service_user_nicknames.map(ci(1,Oa,t)).join(",")," ")}}function to(i,t){if(i&1&&(c(0,"td",19),I(1,Za,10,4,"mat-form-field")(2,eo,1,2),s()),i&2){let e=t.$implicit,n=l();h(),D(n.serviceUserState.isEditing(n.asRow(e))?1:2)}}function no(i,t){i&1&&(c(0,"th",18),u(1,"\u5728\u9662"),s())}function io(i,t){if(i&1){let e=E();c(0,"mat-slide-toggle",32),p("ngModelChange",function(a){_(e);let o=l().$implicit,r=l();return f(r.serviceUserState.updateRow(r.asRow(o).ID,"active",a))}),u(1),s()}if(i&2){let e=l().$implicit,n=l();g("ngModel",n.serviceUserState.getBuffer(n.asRow(e)).active)("disabled",n.serviceUserState.getBuffer(n.asRow(e)).deleted),h(),R(" ",n.serviceUserState.getBuffer(n.asRow(e)).active?"\u5728\u9662":"\u975E\u5728\u9662"," ")}}function ao(i,t){if(i&1&&u(0),i&2){let e=l().$implicit,n=l();R(" ",n.asRow(e).active?"\u5728\u9662":"\u975E\u5728\u9662"," ")}}function oo(i,t){if(i&1&&(c(0,"td",19),I(1,io,2,3,"mat-slide-toggle",31)(2,ao,1,1),s()),i&2){let e=t.$implicit,n=l();h(),D(n.serviceUserState.isEditing(n.asRow(e))?1:2)}}function ro(i,t){i&1&&(c(0,"th",18),u(1,"\u7DE8\u8F2F"),s())}function co(i,t){if(i&1){let e=E();c(0,"div",35)(1,"button",37),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.commitEdit(o.asRow(a)))}),c(2,"mat-icon"),u(3,"done_outline"),s()(),c(4,"button",38),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.serviceUserState.updateRow(o.asRow(a).ID,"deleted",!1))}),c(5,"mat-icon"),u(6,"cancel"),s()()()}}function lo(i,t){if(i&1){let e=E();c(0,"div",36)(1,"div",35)(2,"button",39),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.commitEdit(o.asRow(a)))}),c(3,"mat-icon"),u(4,"done_outline"),s()(),c(5,"button",40),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.undoEdit(o.asRow(a)))}),c(6,"mat-icon"),u(7,"undo"),s()(),c(8,"button",38),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.cancelEdit(o.asRow(a)))}),c(9,"mat-icon"),u(10,"cancel"),s()()(),c(11,"div",41)(12,"button",42),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.serviceUserState.updateRow(o.asRow(a).ID,"deleted",!0))}),c(13,"mat-icon"),u(14,"delete"),s()()()()}}function so(i,t){if(i&1&&I(0,co,7,0,"div",35)(1,lo,15,0,"div",36),i&2){let e=l().$implicit,n=l();D(n.serviceUserState.getBuffer(n.asRow(e)).deleted?0:1)}}function mo(i,t){if(i&1){let e=E();c(0,"button",43),p("click",function(){_(e);let a=l().$implicit,o=l();return f(o.editRow(o.asRow(a)))}),c(1,"mat-icon"),u(2,"edit"),s()()}}function uo(i,t){if(i&1&&(c(0,"td",33),I(1,so,2,1)(2,mo,3,0,"button",34),s()),i&2){let e=t.$implicit,n=l();h(),D(n.serviceUserState.editingRows()[n.asRow(e).ID]?1:2)}}function ho(i,t){i&1&&k(0,"tr",44)}function po(i,t){i&1&&k(0,"tr",45)}var nn=class i{serviceUserState=x(Te);activeAreaService=x(Dt);displayedColumns=["name","livingSpace","nickname","activeStatus","editRow"];addOnBlur=!0;separatorKeysCodes=[13,188];pageChanged(t){this.serviceUserState.changePage(t)}asRow(t){return t}editRow(t){this.serviceUserState.startEdit(t)}undoEdit(t){this.serviceUserState.undoEdit(t)}cancelEdit(t){this.serviceUserState.revertEdit(t)}commitEdit(t){this.serviceUserState.commitEdit(t)}addNickname(t,e){this.serviceUserState.addNickname(t,{ID:-1,nickname:e.value,service_user_id:t.ID}),e.chipInput.clear()}addNicknameFromButton(t,e){let n=e.value.trim();n&&this.serviceUserState.addNickname(t,{ID:-1,nickname:n,service_user_id:t.ID}),e.value=""}removeNickname(t,e){this.serviceUserState.removeNickname(t,e)}editNickname(t,e,n){this.serviceUserState.editNickname(t,{ID:e.ID,nickname:n.value,service_user_id:t.ID})}getRowName(t){let e=this.serviceUserState.getBuffer(t);return e.living_space?e.living_space.name:"\u975E\u4F4F\u5BBF"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=B({type:i,selectors:[["app-service-user-management-table"]],decls:23,vars:8,consts:[["paginator",""],["chipGrid",""],["chipInput",""],[1,"backdrop"],[1,"table-panel"],[1,"mat-elevation-z2"],["mat-table","","aria-label","Elements",1,"full-width-table",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","livingSpace"],["matColumnDef","nickname"],["matColumnDef","activeStatus"],["matColumnDef","editRow"],["mat-cell","","class","edit-cell",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","mat-row",4,"matRowDef","matRowDefColumns"],["aria-label","Select page","showFirstLastButtons","",1,"sticky-paginator",3,"page","length","pageSize","pageIndex","pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["matInput","",3,"ngModelChange","ngModel","disabled"],[3,"ngModel","compareWith","disabled"],[3,"ngModelChange","ngModel","compareWith","disabled"],[3,"value"],[3,"disabled"],[3,"editable"],["placeholder","\u65B0\u66B1\u7A31",3,"matChipInputTokenEnd","matChipInputFor","matChipInputSeparatorKeyCodes"],["mat-icon-button","","matSuffix","",3,"click","disabled"],[3,"removed","edited","editable"],["matChipEdit",""],["matChipRemove",""],[3,"ngModel","disabled"],[3,"ngModelChange","ngModel","disabled"],["mat-cell","",1,"edit-cell"],["matMiniFab","",1,"square-mini-fab-edit","edit"],[1,"non-destructive"],[1,"editing-buttons"],["matMiniFab","",1,"square-mini-fab-edit","delete",3,"click"],["matMiniFab","",1,"square-mini-fab-check","cancel",3,"click"],["matMiniFab","",1,"square-mini-fab-edit","done",3,"click"],["matMiniFab","",1,"square-mini-fab-check","undo",3,"click"],[1,"destructive"],["matMiniFab","",1,"square-mini-fab-check","delete",3,"click"],["matMiniFab","",1,"square-mini-fab-edit","edit",3,"click"],["mat-header-row",""],["mat-row","",1,"mat-row"]],template:function(e,n){e&1&&(c(0,"div",3)(1,"div",4)(2,"div",5)(3,"table",6),P(4,7),F(5,za,2,0,"th",8)(6,Ga,3,1,"td",9),N(),P(7,10),F(8,ja,2,0,"th",8)(9,Ya,3,1,"td",9),N(),P(10,11),F(11,Xa,2,0,"th",8)(12,to,3,1,"td",9),N(),P(13,12),F(14,no,2,0,"th",8)(15,oo,3,1,"td",9),N(),P(16,13),F(17,ro,2,0,"th",8)(18,uo,3,1,"td",14),N(),F(19,ho,1,0,"tr",15)(20,po,1,0,"tr",16),s(),c(21,"mat-paginator",17,0),p("page",function(o){return n.pageChanged(o)}),s()()()()),e&2&&(h(3),g("dataSource",n.serviceUserState.serviceUsers()),h(16),g("matHeaderRowDef",n.displayedColumns),h(),g("matRowDefColumns",n.displayedColumns),h(),g("length",n.serviceUserState.length())("pageSize",n.serviceUserState.currentPageSize())("pageIndex",n.serviceUserState.currentPageIndex())("pageSizeOptions",tt(7,qa)))},dependencies:[Xt,Ot,$t,Qt,Ht,zt,Kt,Gt,jt,Jt,Yt,Zt,Wt,en,ht,Ie,ie,ne,Tt,Vt,Lt,Nt,Pt,Rt,Ft,At,Bt,Ut,H,$,O,W,mt,z,oe,ae,te,Z,ee,yt,wi,Cn],styles:[".mat-column-name[_ngcontent-%COMP%], .mat-column-livingSpace[_ngcontent-%COMP%], .mat-column-nickname[_ngcontent-%COMP%], .mat-column-activeStatus[_ngcontent-%COMP%]{width:22%}.non-destructive[_ngcontent-%COMP%]{display:flex;gap:4px}.edit-cell[_ngcontent-%COMP%]{padding:0}.edit-cell[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%]{background-color:green}.edit-cell[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{background-color:#dc143c}.edit-cell[_ngcontent-%COMP%]   .undo[_ngcontent-%COMP%]{background-color:gray}.edit-cell[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{background-color:#add8e6}.editing-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]})};function fo(i,t){if(i&1&&(c(0,"mat-option",24),u(1),s()),i&2){let e=t.$implicit;g("value",e.ID),h(),et(e.name)}}function bo(i,t){if(i&1){let e=E();c(0,"mat-chip-row",31),p("edited",function(a){let o=_(e),r=o.$implicit,d=o.$index,m=l().$implicit,b=l();return f(b.editNickname(r,a,m,d))})("removed",function(){let a=_(e).$index,o=l().$implicit,r=l();return f(r.removeNickname(o,a))}),c(1,"button",32)(2,"mat-icon"),u(3,"edit"),s()(),u(4),c(5,"button",33)(6,"mat-icon"),u(7,"cancel"),s()()()}if(i&2){let e=t.$implicit;g("editable",!0),h(4),R(" ",e.body," ")}}function vo(i,t){if(i&1){let e=E();c(0,"form",11,0)(2,"div",18)(3,"div",19)(4,"div",20)(5,"mat-form-field")(6,"mat-label"),u(7,"\u540D\u7A31"),s(),k(8,"input",21),s()(),c(9,"div",22)(10,"mat-form-field")(11,"mat-label"),u(12,"\u4F4F\u5BBF\u623F\u9593"),s(),c(13,"mat-select",23)(14,"mat-select-trigger"),u(15),s(),c(16,"mat-option",24),u(17,"\u975E\u4F4F\u5BBF"),s(),ue(18,fo,2,2,"mat-option",24,me),s()()(),c(20,"div",25)(21,"mat-form-field")(22,"mat-chip-grid",null,1),ue(24,bo,8,2,"mat-chip-row",26,me),s(),c(26,"input",27,2),p("matChipInputTokenEnd",function(a){let o=_(e).$index,r=l();return f(r.addNickname(o,a))})("blur",function(){let a=_(e).$index,o=L(27),r=l();return f(r.addNicknameFromButton(a,o))}),s(),c(28,"button",28),p("click",function(){let a=_(e).$index,o=L(27),r=l();return f(r.addNicknameFromButton(a,o))}),c(29,"mat-icon"),u(30,"add"),s()()()()(),c(31,"div",29)(32,"button",30),p("click",function(){let a=_(e).$index,o=l();return f(o.removeSecondary(a))}),c(33,"mat-icon"),u(34,"delete"),s()()()()()}if(i&2){let e=t.$implicit,n=L(23),a=l();g("formGroup",e),h(15),R(" ",a.getSpaceName(e.controls.livingSpaceID.value)," "),h(),g("value",-1),h(2),he(a.activeAreaService.livingSpaces()),h(6),he(e.controls.nicknames.value),h(2),g("matChipInputFor",n)("matChipInputSeparatorKeyCodes",a.separatorKeysCodes)}}var cn=class i{constructor(t){this.fb=t}addOnBlur=!0;separatorKeysCodes=[13,188];serviceUserForm;activeAreaService=x(Dt);userService=x(Te);dialogRef=x(pt);eventBus=x(It);ngOnInit(){this.serviceUserForm=this.fb.group({serviceUsers:this.fb.array([])}),this.addSecondary()}get pendingServiceUsers(){return this.serviceUserForm.controls.serviceUsers}addSecondary(){let t=this.fb.group({name:this.fb.control("",{nonNullable:!0,validators:Ee.required}),livingSpaceID:this.fb.control(-1,{validators:Ee.required}),nicknames:this.fb.control([],{nonNullable:!0})});this.pendingServiceUsers.push(t)}removeSecondary(t){this.pendingServiceUsers.controls.splice(t,1),this.pendingServiceUsers.controls.map(e=>e.updateValueAndValidity()),this.serviceUserForm.updateValueAndValidity()}editNickname(t,e,n,a){e.value.trim().length>0?t.body=e.value:this.removeNickname(n,a)}addNickname(t,e){e.value.trim().length>0&&(this.pendingServiceUsers.controls[t].value.nicknames?.push({body:e.value.trim(),id:-1}),e.chipInput.clear())}addNicknameFromButton(t,e){let n=e.value.trim();n.length>0&&this.pendingServiceUsers.controls[t].value.nicknames?.push({body:n,id:-1}),e.value=""}removeNickname(t,e){t.value.nicknames?.splice(e,1),this.pendingServiceUsers.controls.map(n=>n.updateValueAndValidity()),this.serviceUserForm.updateValueAndValidity()}commitAddition(){let t=[];for(let e of this.serviceUserForm.controls.serviceUsers.value)e.livingSpaceID&&e.name&&e.nicknames&&(e.livingSpaceID==-1&&(e.livingSpaceID=null),t.push({name:e.name,living_space_id:e.livingSpaceID,nicknames:e.nicknames?.map(n=>n.body)}));this.userService.addUsers(t).subscribe({next:e=>{console.log("Data received successfully"),this.dialogRef.close()},error:e=>{console.error("An error occurred:",e),this.eventBus.emit("BUILDING_MODIFIED")}})}getSpaceName(t){let e="\u975E\u4F4F\u5BBF";for(let n of this.activeAreaService.livingSpaces())if(n.ID==t){e=n.name;break}return e}static \u0275fac=function(e){return new(e||i)(Je(Et))};static \u0275cmp=B({type:i,selectors:[["app-management-new-service-user-dialog"]],decls:25,vars:1,consts:[["formDirective","ngForm"],["chipGrid",""],["chipInput",""],[1,"modal-backdrop"],["mat-dialog-title","",1,"dialog-header"],[1,"spacer"],[1,"header-label-container"],[1,"close-button-container"],["matMiniFab","","mat-dialog-close","",1,"close-button"],[1,"dialog-content"],[1,"service-user-inputs"],[3,"formGroup"],[1,"footer-row"],[1,"secondary-add"],["mat-raised-button","","color","primary","type","button",3,"click"],["align","center"],["mat-button","","mat-dialog-close","","type","button"],["mat-raised-button","","color","primary","type","submit",3,"click","disabled"],[1,"card-container"],[1,"user-cards"],[1,"user-name"],["matInput","","formControlName","name"],[1,"living-space"],["formControlName","livingSpaceID","required",""],[3,"value"],[1,"nicknames"],[3,"editable"],["placeholder","\u66B1\u7A31",3,"matChipInputTokenEnd","blur","matChipInputFor","matChipInputSeparatorKeyCodes"],["mat-icon-button","","matSuffix","",3,"click"],[1,"msg-delete"],["matMiniFab","",1,"delete-button",3,"click"],[3,"edited","removed","editable"],["matChipEdit",""],["matChipRemove",""]],template:function(e,n){e&1&&(c(0,"div",3)(1,"div",4),k(2,"div",5),c(3,"div",6)(4,"h2"),u(5,"\u65B0\u589E\u670D\u52D9\u4F7F\u7528\u8005"),s()(),c(6,"div",7)(7,"button",8)(8,"mat-icon"),u(9,"close"),s()()()(),c(10,"mat-dialog-content",9)(11,"div",10),ue(12,vo,35,5,"form",11,me),c(14,"div",12)(15,"div",13)(16,"button",14),p("click",function(){return n.addSecondary()}),u(17," \u65B0\u589E\u670D\u52D9\u4F7F\u7528\u8005 "),s()(),k(18,"mat-divider"),c(19,"div")(20,"mat-dialog-actions",15)(21,"button",16),u(22,"\u53D6\u6D88"),s(),c(23,"button",17),p("click",function(){return n.commitAddition()}),u(24," \u9001\u51FA "),s()()()()()()()),e&2&&(h(12),he(n.pendingServiceUsers.controls),h(11),g("disabled",n.serviceUserForm.invalid))},dependencies:[bt,gt,_t,ft,hi,H,$,O,ut,W,mt,ae,ie,ne,Tt,z,oe,te,wt,Z,ee,kt,pi,Ie,Vt,Lt,Nt,gi,St,Mt,Ct,Pt,Rt,Ft,At,Bt,Ut,yi,ki],styles:[".modal-backdrop[_ngcontent-%COMP%]{display:flex;flex-direction:column}.dialog-header[_ngcontent-%COMP%]{position:sticky;display:flex;justify-content:space-evenly;align-items:stretch;width:100%;padding:0}.dialog-header[_ngcontent-%COMP%]   .header-label-container[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center}.dialog-header[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}.dialog-header[_ngcontent-%COMP%]   .close-button-container[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:flex-end;align-items:flex-start}.dialog-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{background-color:#dc143c!important;border-radius:10%;top:3%;right:2%}.dialog-content[_ngcontent-%COMP%]{display:flex}.service-user-inputs[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.card-container[_ngcontent-%COMP%]{display:flex;gap:16px}.msg-delete[_ngcontent-%COMP%]{display:flex;align-items:center}.msg-delete[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]{border-radius:10%}.user-cards[_ngcontent-%COMP%]{display:flex;justify-content:space-between;background-color:#f0f0f0;border-radius:12px;gap:8px;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}"]})};var Ae=Ta(wa(),1),hr=["qrcElement"],Ca=(()=>{class i{allowEmptyString=!1;colorDark="#000000ff";colorLight="#ffffffff";cssClass="qrcode";elementType="canvas";errorCorrectionLevel="M";imageSrc;imageHeight;imageWidth;margin=4;qrdata="";scale=4;version;width=10;alt;ariaLabel;title;qrCodeURL=new X;qrcElement;context=null;centerImage;renderer=x(oi);sanitizer=x(si);async ngOnChanges(){await this.createQRCode()}isValidQrCodeText(e){return this.allowEmptyString===!1?!(typeof e>"u"||e===""||e==="null"||e===null):!(typeof e>"u")}toDataURL(e){return new Promise((n,a)=>{(0,Ae.toDataURL)(this.qrdata,e,(o,r)=>{o?a(o):n(r)})})}toCanvas(e,n){return new Promise((a,o)=>{(0,Ae.toCanvas)(e,this.qrdata,n,r=>{r?o(r):a("success")})})}toSVG(e){return new Promise((n,a)=>{(0,Ae.toString)(this.qrdata,e,(o,r)=>{o?a(o):n(r)})})}renderElement(e){for(let n of this.qrcElement.nativeElement.childNodes)this.renderer.removeChild(this.qrcElement.nativeElement,n);this.renderer.appendChild(this.qrcElement.nativeElement,e)}async createQRCode(){this.version&&this.version>40?(console.warn("[angularx-qrcode] max value for `version` is 40"),this.version=40):this.version&&this.version<1?(console.warn("[angularx-qrcode]`min value for `version` is 1"),this.version=1):this.version!==void 0&&isNaN(this.version)&&(console.warn("[angularx-qrcode] version should be a number, defaulting to auto."),this.version=void 0);try{if(!this.isValidQrCodeText(this.qrdata))throw new Error("[angularx-qrcode] Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour.");this.isValidQrCodeText(this.qrdata)&&this.qrdata===""&&(this.qrdata=" ");let e={color:{dark:this.colorDark,light:this.colorLight},errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,version:this.version,width:this.width},n=this.imageSrc,a=this.imageHeight?+this.imageHeight:40,o=this.imageWidth?+this.imageWidth:40;switch(this.elementType){case"canvas":{let r=this.renderer.createElement("canvas");this.context=r.getContext("2d"),this.toCanvas(r,e).then(()=>{if(this.ariaLabel&&this.renderer.setAttribute(r,"aria-label",`${this.ariaLabel}`),this.title&&this.renderer.setAttribute(r,"title",`${this.title}`),n&&this.context){this.centerImage=new Image(o,a),n!==this.centerImage.src&&(this.centerImage.crossOrigin="anonymous",this.centerImage.src=n),a!==this.centerImage.height&&(this.centerImage.height=a),o!==this.centerImage.width&&(this.centerImage.width=o);let d=this.centerImage;d&&(d.onload=()=>{this.context?.drawImage(d,r.width/2-o/2,r.height/2-a/2,o,a)})}this.renderElement(r),this.emitQRCodeURL(r)}).catch(d=>{console.error("[angularx-qrcode] canvas error:",d)});break}case"svg":{let r=this.renderer.createElement("div");this.toSVG(e).then(d=>{this.renderer.setProperty(r,"innerHTML",d);let m=r.firstChild;this.renderer.setAttribute(m,"height",`${this.width}`),this.renderer.setAttribute(m,"width",`${this.width}`),this.renderElement(m),this.emitQRCodeURL(m)}).catch(d=>{console.error("[angularx-qrcode] svg error:",d)});break}default:{let r=this.renderer.createElement("img");this.toDataURL(e).then(d=>{this.alt&&r.setAttribute("alt",this.alt),this.ariaLabel&&r.setAttribute("aria-label",this.ariaLabel),r.setAttribute("src",d),this.title&&r.setAttribute("title",this.title),this.renderElement(r),this.emitQRCodeURL(r)}).catch(d=>{console.error("[angularx-qrcode] img/url error:",d)})}}}catch(e){console.error("[angularx-qrcode] Error generating QR Code:",e.message)}}convertBase64ImageUrlToBlob(e){let n=e.split(";base64,"),a=n[0].split(":")[1],o=atob(n[1]),r=new Uint8Array(o.length);for(let d=0;d<o.length;++d)r[d]=o.charCodeAt(d);return new Blob([r],{type:a})}emitQRCodeURL(e){let n=e.constructor.name;if(n===SVGSVGElement.name){let m=e.outerHTML,b=new Blob([m],{type:"image/svg+xml"}),v=URL.createObjectURL(b),T=this.sanitizer.bypassSecurityTrustUrl(v);this.qrCodeURL.emit(T);return}let a="";n===HTMLCanvasElement.name&&(a=e.toDataURL("image/png")),n===HTMLImageElement.name&&(a=e.src);let o=this.convertBase64ImageUrlToBlob(a),r=URL.createObjectURL(o),d=this.sanitizer.bypassSecurityTrustUrl(r);this.qrCodeURL.emit(d)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=B({type:i,selectors:[["qrcode"]],viewQuery:function(n,a){if(n&1&&we(hr,7),n&2){let o;pe(o=ge())&&(a.qrcElement=o.first)}},inputs:{allowEmptyString:"allowEmptyString",colorDark:"colorDark",colorLight:"colorLight",cssClass:"cssClass",elementType:"elementType",errorCorrectionLevel:"errorCorrectionLevel",imageSrc:"imageSrc",imageHeight:"imageHeight",imageWidth:"imageWidth",margin:"margin",qrdata:"qrdata",scale:"scale",version:"version",width:"width",alt:"alt",ariaLabel:"ariaLabel",title:"title"},outputs:{qrCodeURL:"qrCodeURL"},features:[ye],decls:2,vars:2,consts:[["qrcElement",""]],template:function(n,a){n&1&&ri(0,"div",null,0),n&2&&Ce(a.cssClass)},encapsulation:2,changeDetection:0})}return i})();var pr=()=>[5,10,20];function gr(i,t){i&1&&(c(0,"th",15),u(1,"\u59D3\u540D"),s())}function _r(i,t){if(i&1){let e=E();c(0,"mat-form-field")(1,"mat-label"),u(2,"\u540C\u5DE5\u540D\u7A31"),s(),c(3,"input",18),p("ngModelChange",function(a){_(e);let o=l().$implicit,r=l();return f(r.employeeService.updateRow(r.asEmployee(o).ID,"name",a))}),s()()}if(i&2){let e=l().$implicit,n=l();h(3),g("ngModel",n.employeeService.getBuffer(n.asEmployee(e)).name)("disabled",n.employeeService.getBuffer(n.asEmployee(e)).deleted)}}function fr(i,t){if(i&1){let e=E();c(0,"div",17)(1,"span"),u(2),s(),c(3,"button",19),p("click",function(){_(e);let a=l().$implicit,o=l();return f(o.forcedLogout(a))}),c(4,"mat-icon"),u(5,"logout"),s()()()}if(i&2){let e=l().$implicit,n=l();h(2),R(" ",n.asEmployee(e).name," ")}}function br(i,t){if(i&1&&(c(0,"td",16),I(1,_r,4,2,"mat-form-field")(2,fr,6,1,"div",17),s()),i&2){let e=t.$implicit,n=l();h(),D(n.employeeService.isEditing(n.asEmployee(e))?1:2)}}function vr(i,t){i&1&&(c(0,"th",15),u(1,"\u96FB\u5B50\u90F5\u4EF6"),s())}function xr(i,t){if(i&1){let e=E();c(0,"mat-form-field")(1,"mat-label"),u(2,"\u96FB\u5B50\u90F5\u4EF6"),s(),c(3,"input",18),p("ngModelChange",function(a){_(e);let o=l().$implicit,r=l();return f(r.employeeService.updateRow(r.asEmployee(o).ID,"company_email",a))}),s()()}if(i&2){let e=l().$implicit,n=l();h(3),g("ngModel",n.employeeService.getBuffer(n.asEmployee(e)).company_email)("disabled",n.employeeService.getBuffer(n.asEmployee(e)).deleted)}}function kr(i,t){if(i&1&&u(0),i&2){let e=l().$implicit,n=l();R(" ",n.asEmployee(e).company_email," ")}}function yr(i,t){if(i&1&&(c(0,"td",16),I(1,xr,4,2,"mat-form-field")(2,kr,1,1),s()),i&2){let e=t.$implicit,n=l();h(),D(n.employeeService.isEditing(n.asEmployee(e))?1:2)}}function wr(i,t){i&1&&(c(0,"th",15),u(1,"\u5E33\u865F"),s())}function Cr(i,t){if(i&1){let e=E();c(0,"mat-form-field")(1,"mat-label"),u(2,"\u5E33\u865F"),s(),c(3,"input",18),p("ngModelChange",function(a){_(e);let o=l().$implicit,r=l();return f(r.employeeService.updateAuth(r.asEmployee(o).ID,"account",a))}),s()()}if(i&2){let e,n=l().$implicit,a=l();h(3),g("ngModel",(e=a.employeeService.getBuffer(a.asEmployee(n)).auth)==null?null:e.account)("disabled",a.employeeService.getBuffer(a.asEmployee(n)).deleted)}}function Mr(i,t){if(i&1&&u(0),i&2){let e,n=l().$implicit,a=l();R(" ",(e=a.asEmployee(n).auth)==null?null:e.account," ")}}function Er(i,t){if(i&1&&(c(0,"td",16),I(1,Cr,4,2,"mat-form-field")(2,Mr,1,1),s()),i&2){let e=t.$implicit,n=l();h(),D(n.employeeService.isEditing(n.asEmployee(e))?1:2)}}function Sr(i,t){i&1&&(c(0,"th",15),u(1,"\u5BC6\u78BC"),s())}function Tr(i,t){if(i&1){let e=E();c(0,"mat-form-field")(1,"mat-label"),u(2,"\u5BC6\u78BC"),s(),c(3,"input",18),p("ngModelChange",function(a){_(e);let o=l().$implicit,r=l();return f(r.employeeService.updateAuth(r.asEmployee(o).ID,"password",a))}),s()()}if(i&2){let e,n=l().$implicit,a=l();h(3),g("ngModel",(e=a.employeeService.getBuffer(a.asEmployee(n)).auth)==null?null:e.password)("disabled",a.employeeService.getBuffer(a.asEmployee(n)).deleted)}}function Ir(i,t){if(i&1&&u(0),i&2){let e,n=l().$implicit,a=l();R(" ",a.hidePassword((e=a.asEmployee(n).auth)==null?null:e.password)," ")}}function Dr(i,t){if(i&1&&(c(0,"td",16),I(1,Tr,4,2,"mat-form-field")(2,Ir,1,1),s()),i&2){let e=t.$implicit,n=l();h(),D(n.employeeService.isEditing(n.asEmployee(e))?1:2)}}function Rr(i,t){i&1&&(c(0,"th",15),u(1,"\u4E8C\u6B21\u9A57\u8B49"),s())}function Br(i,t){if(i&1){let e=E();c(0,"button",23),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.employeeService.updateRow(o.asEmployee(a).ID,"totpStatus",{type:"ADDING"}))}),c(1,"mat-icon"),u(2,"add_circle"),s()()}if(i&2){let e=l(2).$implicit,n=l();g("disabled",n.employeeService.getBuffer(e).deleted)}}function Ur(i,t){}function Fr(i,t){if(i&1){let e=E();c(0,"div",21)(1,"div")(2,"div"),k(3,"qrcode",24),s()(),c(4,"button",19),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.employeeService.removeTotp(a))}),c(5,"mat-icon"),u(6,"cancel"),s()()()}if(i&2){let e=l(2).$implicit,n=l();h(),Q("qrcode-border",n.employeeService.getBuffer(e).deleted),h(),Q("qrcode-icon",n.employeeService.getBuffer(e).deleted),h(),g("qrdata",n.toURI(n.asEmployee(e)))("errorCorrectionLevel","H")}}function Ar(i,t){if(i&1){let e=E();c(0,"div",21)(1,"div",25)(2,"div",26),k(3,"qrcode",24),s()(),c(4,"button",27),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.employeeService.restoreTotp(a))}),c(5,"mat-icon"),u(6,"undo"),s()()()}if(i&2){let e=l(2).$implicit,n=l();h(3),g("qrdata",n.toURI(n.asEmployee(e)))("errorCorrectionLevel","H")}}function Pr(i,t){if(i&1){let e=E();c(0,"div",22)(1,"span"),u(2,"\u78BA\u5B9A\u555F\u7528\u4E8C\u6B21\u9A57\u8B49?"),s(),c(3,"div",28)(4,"button",29),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.employeeService.setupTOTP(o.asEmployee(a)))}),c(5,"mat-icon"),u(6,"done_outline"),s()(),c(7,"button",27),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.employeeService.cancelAddition(a))}),c(8,"mat-icon"),u(9,"cancel"),s()()()()}}function Nr(i,t){if(i&1&&I(0,Br,3,1,"button",20)(1,Ur,0,0)(2,Fr,7,6,"div",21)(3,Ar,7,2,"div",21)(4,Pr,10,0,"div",22),i&2){let e,n=l().$implicit,a=l();D((e=a.employeeService.getBuffer(n).totpStatus.type)==="HIDING"?0:e==="NOAUTH"?1:e==="DISPLAY"?2:e==="DELETING"?3:e==="ADDING"?4:-1)}}function Vr(i,t){if(i&1&&u(0),i&2){let e,n=l().$implicit,a=l();R(" ",a.hidePassword((e=a.asEmployee(n).auth)==null?null:e.totp_secret)," ")}}function Lr(i,t){if(i&1&&(c(0,"td",16),I(1,Nr,5,1)(2,Vr,1,1),s()),i&2){let e,n=t.$implicit,a=l();h(),D(a.employeeService.isEditing(a.asEmployee(n))&&((e=a.employeeService.getBuffer(n).auth)==null?null:e.ID)!=-1?1:2)}}function qr(i,t){i&1&&(c(0,"th",15),u(1,"\u7DE8\u8F2F"),s())}function Or(i,t){if(i&1){let e=E();c(0,"div",32)(1,"button",34),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.employeeService.commitEdit(o.asEmployee(a)))}),c(2,"mat-icon"),u(3,"done_outline"),s()(),c(4,"button",27),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.employeeService.updateRow(o.asEmployee(a).ID,"deleted",!1))}),c(5,"mat-icon"),u(6,"cancel"),s()()()}}function zr(i,t){if(i&1){let e=E();c(0,"div",33)(1,"div",32)(2,"button",29),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.employeeService.commitEdit(o.asEmployee(a)))}),c(3,"mat-icon"),u(4,"done_outline"),s()(),c(5,"button",35),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.employeeService.undoEdit(o.asEmployee(a)))}),c(6,"mat-icon"),u(7,"undo"),s()(),c(8,"button",27),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.employeeService.revertEdit(o.asEmployee(a)))}),c(9,"mat-icon"),u(10,"cancel"),s()()(),c(11,"div",36)(12,"button",19),p("click",function(){_(e);let a=l(2).$implicit,o=l();return f(o.employeeService.updateRow(o.asEmployee(a).ID,"deleted",!0))}),c(13,"mat-icon"),u(14,"delete"),s()()()()}}function $r(i,t){if(i&1&&I(0,Or,7,0,"div",32)(1,zr,15,0,"div",33),i&2){let e=l().$implicit,n=l();D(n.employeeService.getBuffer(n.asEmployee(e)).deleted?0:1)}}function Hr(i,t){if(i&1){let e=E();c(0,"button",37),p("click",function(){_(e);let a=l().$implicit,o=l();return f(o.employeeService.startEdit(o.asEmployee(a)))}),c(1,"mat-icon"),u(2,"edit"),s()()}}function Gr(i,t){if(i&1&&(c(0,"td",30),I(1,$r,2,1)(2,Hr,3,0,"button",31),s()),i&2){let e=t.$implicit,n=l();h(),D(n.employeeService.isEditing(n.asEmployee(e))?1:2)}}function jr(i,t){i&1&&k(0,"tr",38)}function Qr(i,t){i&1&&k(0,"tr",39)}var vn=class i{employeeService=x(Se);employeeData=li(()=>this.employeeService.employeeData());displayedColumns=["name","email","account","password","totp","editRow"];ngOnInit(){}asEmployee(t){return t}pageChanged(t){this.employeeService.changePage(t)}asDateString(t){return new Date(t).toLocaleDateString("zh-Hant")}hidePassword(t){return t?"*".repeat(t.length):""}toURI(t){let e="VictoryHome";return t.auth?.account&&t.auth?.totp_secret?`otpauth://totp/${e}:${t.auth.account}?secret=${t.auth.totp_secret}&issuer=${e}&digits=6&period=30`:""}forcedLogout(t){this.employeeService.forcedLogout(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=B({type:i,selectors:[["app-employee-management-table"]],features:[Me([_i()])],decls:24,vars:8,consts:[["paginator",""],[1,"mat-elevation-z2"],["mat-table","","aria-label","Elements",1,"full-width-table",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["matColumnDef","account"],["matColumnDef","password"],["matColumnDef","totp"],["matColumnDef","editRow"],["mat-cell","","class","edit-cell",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","mat-row",4,"matRowDef","matRowDefColumns"],["aria-label","Select page","showFirstLastButtons","",1,"sticky-paginator",3,"page","length","pageSize","pageIndex","pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"name-cell"],["matInput","",3,"ngModelChange","ngModel","disabled"],["matMiniFab","",1,"square-mini-fab-check","delete",3,"click"],["matMiniFab","",1,"square-mini-fab-check",3,"disabled"],[1,"qrcode-container"],[1,"confirmation-container"],["matMiniFab","",1,"square-mini-fab-check",3,"click","disabled"],[3,"qrdata","errorCorrectionLevel"],[1,"qrcode-border"],[1,"qrcode-icon"],["matMiniFab","",1,"square-mini-fab-check","cancel",3,"click"],[1,"buttons"],["matMiniFab","",1,"square-mini-fab-edit","done",3,"click"],["mat-cell","",1,"edit-cell"],["matMiniFab","",1,"square-mini-fab-edit","edit"],[1,"non-destructive"],[1,"editing-buttons"],["matMiniFab","",1,"square-mini-fab-edit","delete",3,"click"],["matMiniFab","",1,"square-mini-fab-check","undo",3,"click"],[1,"destructive"],["matMiniFab","",1,"square-mini-fab-edit","edit",3,"click"],["mat-header-row",""],["mat-row","",1,"mat-row"]],template:function(e,n){e&1&&(c(0,"div",1)(1,"table",2),P(2,3),F(3,gr,2,0,"th",4)(4,br,3,1,"td",5),N(),P(5,6),F(6,vr,2,0,"th",4)(7,yr,3,1,"td",5),N(),P(8,7),F(9,wr,2,0,"th",4)(10,Er,3,1,"td",5),N(),P(11,8),F(12,Sr,2,0,"th",4)(13,Dr,3,1,"td",5),N(),P(14,9),F(15,Rr,2,0,"th",4)(16,Lr,3,1,"td",5),N(),P(17,10),F(18,qr,2,0,"th",4)(19,Gr,3,1,"td",11),N(),F(20,jr,1,0,"tr",12)(21,Qr,1,0,"tr",13),s(),c(22,"mat-paginator",14,0),p("page",function(o){return n.pageChanged(o)}),s()()),e&2&&(h(),g("dataSource",n.employeeData()),h(19),g("matHeaderRowDef",n.displayedColumns),h(),g("matRowDefColumns",n.displayedColumns),h(),g("length",n.employeeService.length())("pageSize",n.employeeService.currentPageSize())("pageIndex",n.employeeService.currentPageIndex())("pageSizeOptions",tt(7,pr)))},dependencies:[Xt,Ot,$t,Qt,Ht,zt,Kt,Gt,jt,Jt,Yt,Zt,Wt,en,ht,Ie,ie,ne,H,$,O,W,z,oe,te,Z,ee,yt,fi,ae,Ca],styles:[".mat-column-name[_ngcontent-%COMP%]{width:15%}.mat-column-email[_ngcontent-%COMP%]{width:22%}.mat-column-account[_ngcontent-%COMP%], .mat-column-password[_ngcontent-%COMP%]{width:15%}.mat-column-totp[_ngcontent-%COMP%]{width:22%}.non-destructive[_ngcontent-%COMP%]{display:flex;gap:4px}.edit-cell[_ngcontent-%COMP%]{padding:0}.done[_ngcontent-%COMP%]{background-color:green}.delete[_ngcontent-%COMP%]{background-color:#dc143c}.undo[_ngcontent-%COMP%]{background-color:gray}.cancel[_ngcontent-%COMP%]{background-color:#add8e6}.editing-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.qrcode-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.qrcode-container[_ngcontent-%COMP%]   .qrcode-border[_ngcontent-%COMP%]{border:solid red 2px}.qrcode-container[_ngcontent-%COMP%]   .qrcode-border[_ngcontent-%COMP%]   .qrcode-icon[_ngcontent-%COMP%]{opacity:.2;filter:grayscale(100%);pointer-events:none}.confirmation-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px}.confirmation-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;gap:4px}.name-cell[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"]})};var Kr=["input"],Jr=["label"],Yr=["*"],Xn={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Xr=new je("mat-checkbox-default-options",{providedIn:"root",factory:()=>Xn}),U=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(U||{}),Wn=class{source;checked},Zn=(()=>{class i{_elementRef=x(Ke);_changeDetectorRef=x(it);_ngZone=x(ii);_animationsDisabled=lt();_options=x(Xr,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new Wn;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new X;indeterminateChange=new X;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=U.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){x(ot).load(dt);let e=x(new nt("tabindex"),{optional:!0});this._options=this._options||Xn,this.color=this._options.color||Xn.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=x(rt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(U.Indeterminate):this._transitionCheckState(this.checked?U.Checked:U.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=ai(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,a=this._getAnimationTargetElement();if(!(n===e||!a)&&(this._currentAnimationClass&&a.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){a.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{a.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?U.Checked:U.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return"";switch(e){case U.Init:if(n===U.Checked)return this._animationClasses.uncheckedToChecked;if(n==U.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case U.Unchecked:return n===U.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case U.Checked:return n===U.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case U.Indeterminate:return n===U.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=B({type:i,selectors:[["mat-checkbox"]],viewQuery:function(n,a){if(n&1&&we(Kr,5)(Jr,5),n&2){let o;pe(o=ge())&&(a._inputElement=o.first),pe(o=ge())&&(a._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(n,a){n&2&&(Xe("id",a.id),de("tabindex",null)("aria-label",null)("aria-labelledby",null),Ce(a.color?"mat-"+a.color:"mat-accent"),Q("_mat-animation-noopable",a._animationsDisabled)("mdc-checkbox--disabled",a.disabled)("mat-mdc-checkbox-disabled",a.disabled)("mat-mdc-checkbox-checked",a.checked)("mat-mdc-checkbox-disabled-interactive",a.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",A],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",A],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",A],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:at(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",A],checked:[2,"checked","checked",A],disabled:[2,"disabled","disabled",A],indeterminate:[2,"indeterminate","indeterminate",A]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Me([{provide:vt,useExisting:He(()=>i),multi:!0},{provide:xt,useExisting:i,multi:!0}]),ye],ngContentSelectors:Yr,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(n,a){if(n&1&&(We(),c(0,"div",3),p("click",function(r){return a._preventBubblingFromLabel(r)}),c(1,"div",4,0)(3,"div",5),p("click",function(){return a._onTouchTargetClick()}),s(),c(4,"input",6,1),p("blur",function(){return a._onBlur()})("click",function(){return a._onInputClick()})("change",function(r){return a._onInteractionEvent(r)}),s(),k(6,"div",7),c(7,"div",8),Qe(),c(8,"svg",9),k(9,"path",10),s(),ni(),k(10,"div",11),s(),k(11,"div",12),s(),c(12,"label",13,2),Ze(14),s()()),n&2){let o=L(2);g("labelPosition",a.labelPosition),h(4),Q("mdc-checkbox--selected",a.checked),g("checked",a.checked)("indeterminate",a.indeterminate)("disabled",a.disabled&&!a.disabledInteractive)("id",a.inputId)("required",a.required)("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex),de("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby)("aria-describedby",a.ariaDescribedby)("aria-checked",a.indeterminate?"mixed":null)("aria-controls",a.ariaControls)("aria-disabled",a.disabled&&a.disabledInteractive?!0:null)("aria-expanded",a.ariaExpanded)("aria-owns",a.ariaOwns)("name",a.name)("value",a.value),h(7),g("matRippleTrigger",o)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0),h(),g("for",a.inputId)}},dependencies:[st,qt],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),Ma=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Ye({type:i});static \u0275inj=Ge({imports:[Zn,ct]})}return i})();var xn=class i{constructor(t){this.fb=t}employeeForm;employeeService=x(Se);dialogRef=x(pt);ngOnInit(){this.employeeForm=this.fb.group({name:this.fb.control("",{nonNullable:!0,validators:Ee.required}),email:this.fb.control(""),account:this.fb.control(""),password:this.fb.control(""),hasTwoFactor:this.fb.control(!1,{nonNullable:!0,validators:Ee.required})},{validators:this.accountAndPasswordValidator()})}sendData(){this.employeeService.addEmployee(this.employeeForm).subscribe({next:t=>{console.log("Data received successfully"),this.dialogRef.close()},error:t=>{console.error("An error occurred:",t)}})}accountAndPasswordValidator(){return t=>{let e=t.get("account"),n=t.get("password");if(!e||!n)return null;let a=e.value,o=n.value;return!a&&o?{passwordWithoutAccount:!0}:a&&!o?{accountWithoutPassword:!0}:null}}static \u0275fac=function(e){return new(e||i)(Je(Et))};static \u0275cmp=B({type:i,selectors:[["app-management-new-employee-dialog"]],decls:37,vars:2,consts:[["mat-dialog-title","",1,"dialog-header"],[1,"spacer"],[1,"header-label-container"],[1,"close-button-container"],["matMiniFab","","mat-dialog-close","",1,"close-button"],[1,"form-container"],[3,"formGroup"],[1,"first-row"],["matInput","","formControlName","name"],["matInput","","formControlName","email"],[1,"second-row"],["matInput","","formControlName","account"],["matInput","","formControlName","password"],["formControlName","hasTwoFactor"],[1,"button-row"],["align","center"],["mat-button","","mat-dialog-close","","type","button"],["mat-raised-button","","color","primary","type","submit",3,"click","disabled"]],template:function(e,n){e&1&&(c(0,"div",0),k(1,"div",1),c(2,"div",2)(3,"h2"),u(4,"\u65B0\u589E\u540C\u5DE5"),s()(),c(5,"div",3)(6,"button",4)(7,"mat-icon"),u(8,"close"),s()()()(),c(9,"div",5)(10,"form",6)(11,"div",7)(12,"mat-form-field")(13,"mat-label"),u(14,"\u540D\u7A31"),s(),k(15,"input",8),s(),c(16,"mat-form-field")(17,"mat-label"),u(18,"\u96FB\u5B50\u90F5\u4EF6"),s(),k(19,"input",9),s()(),c(20,"div",10)(21,"mat-form-field")(22,"mat-label"),u(23,"\u5E33\u865F"),s(),k(24,"input",11),s(),c(25,"mat-form-field")(26,"mat-label"),u(27,"\u5BC6\u78BC"),s(),k(28,"input",12),s(),c(29,"mat-checkbox",13),u(30,"\u4E8C\u968E\u6BB5\u9A57\u8B49"),s()(),c(31,"div",14)(32,"mat-dialog-actions",15)(33,"button",16),u(34,"\u53D6\u6D88"),s(),c(35,"button",17),p("click",function(){return n.sendData()}),u(36," \u9001\u51FA "),s()()()()()),e&2&&(h(10),g("formGroup",n.employeeForm),h(25),g("disabled",n.employeeForm.invalid))},dependencies:[ae,ie,ne,z,oe,te,wt,Z,ee,kt,St,Mt,Ct,Ma,Zn,bt,gt,_t,ft,H,$,O,ut,W],styles:[".form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.form-container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]{display:flex;padding-left:32px;gap:32px}.dialog-header[_ngcontent-%COMP%]{position:sticky;display:flex;justify-content:space-evenly;align-items:stretch;width:100%;padding:0}.dialog-header[_ngcontent-%COMP%]   .header-label-container[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center}.dialog-header[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}.dialog-header[_ngcontent-%COMP%]   .close-button-container[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:flex-end;align-items:flex-start}.dialog-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{background-color:#dc143c!important;border-radius:10%;top:3%;right:2%}"]})};var Ea=class i{dialogService=x(ui);serviceUser=x(Te);employee=x(Se);eventBus=x(It);summnonNewServiceUserDialog(){this.dialogService.open(cn,{data:[],width:"780px",maxWidth:"90vw",height:"auto",maxHeight:"85vh"}).afterClosed().subscribe(()=>{this.serviceUser.fetchData()})}summnonNewEmployeeDialog(){this.dialogService.open(xn,{data:[],width:"780px",maxWidth:"90vw",height:"auto",maxHeight:"85vh"}).afterClosed().subscribe(()=>{this.employee.fetchData().subscribe()})}refreshServiceUser(){this.eventBus.emit("BUILDING_MODIFIED"),this.serviceUser.fetchData()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=B({type:i,selectors:[["app-management-page"]],decls:27,vars:0,consts:[[1,"management-page"],["backgroundColor","primary","label","\u670D\u52D9\u4F7F\u7528\u8005\u7BA1\u7406"],[1,"add-button-container"],["matFab","","extended","","color","primary",3,"click"],["backgroundColor","black","label","\u4EBA\u54E1\u7BA1\u7406"]],template:function(e,n){e&1&&(c(0,"div",0)(1,"mat-tab-group")(2,"mat-tab",1)(3,"div")(4,"div"),k(5,"app-service-user-management-table"),s(),c(6,"div",2)(7,"button",3),p("click",function(){return n.summnonNewServiceUserDialog()}),c(8,"mat-icon"),u(9,"add"),s(),u(10," \u65B0\u589E\u670D\u52D9\u4F7F\u7528\u8005 "),s(),c(11,"button",3),p("click",function(){return n.refreshServiceUser()}),c(12,"mat-icon"),u(13,"refresh"),s(),u(14," \u91CD\u65B0\u6574\u7406 "),s()()()(),c(15,"mat-tab",4)(16,"div"),k(17,"app-employee-management-table"),s(),c(18,"div",2)(19,"button",3),p("click",function(){return n.summnonNewEmployeeDialog()}),c(20,"mat-icon"),u(21,"add"),s(),u(22," \u65B0\u589E\u540C\u5DE5 "),s(),c(23,"button",3),p("click",function(){return n.employee.fetchData().subscribe()}),c(24,"mat-icon"),u(25,"refresh"),s(),u(26," \u91CD\u65B0\u6574\u7406 "),s()()()()())},dependencies:[xi,bi,vi,nn,vn,z,O,mi,H,$],styles:[".add-button-container[_ngcontent-%COMP%]{display:flex;gap:8px}"]})};export{Ea as ManagementPage};
