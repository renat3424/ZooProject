(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="159",br={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sp=0,tu=1,Mp=2,cf=1,Ep=2,Kn=3,xi=0,Kt=1,wn=2,pi=0,Jr=1,nu=2,iu=3,ru=4,bp=5,Bi=100,Tp=101,wp=102,su=103,au=104,Ap=200,Cp=201,Rp=202,Pp=203,wl=204,Al=205,Lp=206,Dp=207,Up=208,Ip=209,Op=210,Np=211,Fp=212,Bp=213,zp=214,kp=0,Hp=1,Gp=2,to=3,Vp=4,Wp=5,Xp=6,Yp=7,lc=0,qp=1,jp=2,mi=0,$p=1,Kp=2,Zp=3,Jp=4,Qp=5,uf=300,ss=301,as=302,no=303,Cl=304,xo=306,Rl=1e3,ln=1001,Pl=1002,Pt=1003,ou=1004,Io=1005,Dt=1006,em=1007,os=1008,_i=1009,tm=1010,nm=1011,cc=1012,hf=1013,ui=1014,Cn=1015,ei=1016,ff=1017,df=1018,Gi=1020,im=1021,An=1023,rm=1024,sm=1025,Vi=1026,ls=1027,am=1028,pf=1029,om=1030,mf=1031,_f=1033,Oo=33776,No=33777,Fo=33778,Bo=33779,lu=35840,cu=35841,uu=35842,hu=35843,gf=36196,fu=37492,du=37496,pu=37808,mu=37809,_u=37810,gu=37811,vu=37812,xu=37813,yu=37814,Su=37815,Mu=37816,Eu=37817,bu=37818,Tu=37819,wu=37820,Au=37821,zo=36492,Cu=36494,Ru=36495,lm=36283,Pu=36284,Lu=36285,Du=36286,vf=3e3,Wi=3001,cm=3200,um=3201,uc=0,hm=1,vn="",Lt="srgb",Bn="srgb-linear",hc="display-p3",yo="display-p3-linear",io="linear",st="srgb",ro="rec709",so="p3",wr=7680,Uu=519,fm=512,dm=513,pm=514,xf=515,mm=516,_m=517,gm=518,vm=519,Iu=35044,Ou="300 es",Ll=1035,ti=2e3,ao=2001;class ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nu=1234567;const Os=Math.PI/180,Xs=180/Math.PI;function rr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function fc(r,e){return(r%e+e)%e}function xm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ym(r,e,t){return r!==e?(t-r)/(e-r):0}function Ns(r,e,t){return(1-t)*r+t*e}function Sm(r,e,t,n){return Ns(r,e,1-Math.exp(-t*n))}function Mm(r,e=1){return e-Math.abs(fc(r,e*2)-e)}function Em(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function bm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Tm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function wm(r,e){return r+Math.random()*(e-r)}function Am(r){return r*(.5-Math.random())}function Cm(r){r!==void 0&&(Nu=r);let e=Nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rm(r){return r*Os}function Pm(r){return r*Xs}function Dl(r){return(r&r-1)===0&&r!==0}function Lm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function oo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Dm(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Um={DEG2RAD:Os,RAD2DEG:Xs,generateUUID:rr,clamp:St,euclideanModulo:fc,mapLinear:xm,inverseLerp:ym,lerp:Ns,damp:Sm,pingpong:Mm,smoothstep:Em,smootherstep:bm,randInt:Tm,randFloat:wm,randFloatSpread:Am,seededRandom:Cm,degToRad:Rm,radToDeg:Pm,isPowerOfTwo:Dl,ceilPowerOfTwo:Lm,floorPowerOfTwo:oo,setQuaternionFromProperEuler:Dm,normalize:Vt,denormalize:Wr};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,s,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],S=i[1],x=i[4],y=i[7],M=i[2],w=i[5],b=i[8];return s[0]=a*_+o*S+l*M,s[3]=a*m+o*x+l*w,s[6]=a*d+o*y+l*b,s[1]=c*_+u*S+h*M,s[4]=c*m+u*x+h*w,s[7]=c*d+u*y+h*b,s[2]=f*_+p*S+g*M,s[5]=f*m+p*x+g*w,s[8]=f*d+p*y+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ko.makeScale(e,t)),this}rotate(e){return this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new qe;function yf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ys(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Im(){const r=Ys("canvas");return r.style.display="block",r}const Fu={};function Fs(r){r in Fu||(Fu[r]=!0,console.warn(r))}const Bu=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zu=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ya={[Bn]:{transfer:io,primaries:ro,toReference:r=>r,fromReference:r=>r},[Lt]:{transfer:st,primaries:ro,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[yo]:{transfer:io,primaries:so,toReference:r=>r.applyMatrix3(zu),fromReference:r=>r.applyMatrix3(Bu)},[hc]:{transfer:st,primaries:so,toReference:r=>r.convertSRGBToLinear().applyMatrix3(zu),fromReference:r=>r.applyMatrix3(Bu).convertLinearToSRGB()}},Om=new Set([Bn,yo]),Je={enabled:!0,_workingColorSpace:Bn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Om.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ya[e].toReference,i=ya[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ya[r].primaries},getTransfer:function(r){return r===vn?io:ya[r].transfer}};function Qr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ho(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ar;class Sf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=Ys("canvas")),Ar.width=e.width,Ar.height=e.height;const n=Ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Qr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qr(t[n]/255)*255):t[n]=Qr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nm=0;class Mf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Go(i[a].image)):s.push(Go(i[a]))}else s=Go(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Go(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fm=0;class qt extends ir{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=ln,i=ln,s=Dt,a=os,o=An,l=_i,c=qt.DEFAULT_ANISOTROPY,u=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=rr(),this.name="",this.source=new Mf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Wi?Lt:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rl:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rl:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?Wi:vf}set encoding(e){Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wi?Lt:vn}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=uf;qt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,M=(d+1)/2,w=(u+f)/4,b=(h+_)/4,C=(g+m)/4;return x>y&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=b/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=C/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=b/s,i=C/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bm extends ir{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Fs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wi?Lt:vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Bm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ef extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zm extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*_,S=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const M=Math.sqrt(x),w=Math.atan2(M,d*S);m=Math.sin(m*w)/M,o=Math.sin(o*w)/M}const y=o*S;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+_*y,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new U,ku=new Ji;class sa{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),Ma.subVectors(this.max,Es),Cr.subVectors(e.a,Es),Rr.subVectors(e.b,Es),Pr.subVectors(e.c,Es),ri.subVectors(Rr,Cr),si.subVectors(Pr,Rr),Pi.subVectors(Cr,Pr);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Pi.z,Pi.y,ri.z,0,-ri.x,si.z,0,-si.x,Pi.z,0,-Pi.x,-ri.y,ri.x,0,-si.y,si.x,0,-Pi.y,Pi.x,0];return!Wo(t,Cr,Rr,Pr,Ma)||(t=[1,0,0,0,1,0,0,0,1],!Wo(t,Cr,Rr,Pr,Ma))?!1:(Ea.crossVectors(ri,si),t=[Ea.x,Ea.y,Ea.z],Wo(t,Cr,Rr,Pr,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,Sa=new sa,Cr=new U,Rr=new U,Pr=new U,ri=new U,si=new U,Pi=new U,Es=new U,Ma=new U,Ea=new U,Li=new U;function Wo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Li.fromArray(r,s);const o=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const km=new sa,bs=new U,Xo=new U;class dc{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):km.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(bs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(Xo)),this.expandByPoint(bs.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new U,Yo=new U,ba=new U,ai=new U,qo=new U,Ta=new U,jo=new U;class bf{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Yo.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Yo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ba),o=ai.dot(this.direction),l=-ai.dot(ba),c=ai.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Yo).addScaledVector(ba,f),p}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,s){qo.subVectors(t,e),Ta.subVectors(n,e),jo.crossVectors(qo,Ta);let a=this.direction.dot(jo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,e);const l=o*this.direction.dot(Ta.crossVectors(ai,Ta));if(l<0)return null;const c=o*this.direction.dot(qo.cross(ai));if(c<0||l+c>a)return null;const u=-o*ai.dot(jo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,i,s,a,o,l,c,u,h,f,p,g,_,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,p,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hm,e,Gm)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),oi.crossVectors(n,rn),oi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),oi.crossVectors(n,rn)),oi.normalize(),wa.crossVectors(rn,oi),i[0]=oi.x,i[4]=wa.x,i[8]=rn.x,i[1]=oi.y,i[5]=wa.y,i[9]=rn.y,i[2]=oi.z,i[6]=wa.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],S=n[3],x=n[7],y=n[11],M=n[15],w=i[0],b=i[4],C=i[8],v=i[12],T=i[1],O=i[5],N=i[9],k=i[13],P=i[2],F=i[6],B=i[10],H=i[14],ne=i[3],Z=i[7],j=i[11],re=i[15];return s[0]=a*w+o*T+l*P+c*ne,s[4]=a*b+o*O+l*F+c*Z,s[8]=a*C+o*N+l*B+c*j,s[12]=a*v+o*k+l*H+c*re,s[1]=u*w+h*T+f*P+p*ne,s[5]=u*b+h*O+f*F+p*Z,s[9]=u*C+h*N+f*B+p*j,s[13]=u*v+h*k+f*H+p*re,s[2]=g*w+_*T+m*P+d*ne,s[6]=g*b+_*O+m*F+d*Z,s[10]=g*C+_*N+m*B+d*j,s[14]=g*v+_*k+m*H+d*re,s[3]=S*w+x*T+y*P+M*ne,s[7]=S*b+x*O+y*F+M*Z,s[11]=S*C+x*N+y*B+M*j,s[15]=S*v+x*k+y*H+M*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*p-n*l*p)+_*(+t*l*p-t*c*f+s*a*f-i*a*p+i*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+d*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],S=h*m*c-_*f*c+_*l*p-o*m*p-h*l*d+o*f*d,x=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,y=u*_*c-g*h*c+g*o*p-a*_*p-u*o*d+a*h*d,M=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,w=t*S+n*x+i*y+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=S*b,e[1]=(_*f*s-h*m*s-_*i*p+n*m*p+h*i*d-n*f*d)*b,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*d+n*l*d)*b,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*p-n*l*p)*b,e[4]=x*b,e[5]=(u*m*s-g*f*s+g*i*p-t*m*p-u*i*d+t*f*d)*b,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*d-t*l*d)*b,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*p+t*l*p)*b,e[8]=y*b,e[9]=(g*h*s-u*_*s-g*n*p+t*_*p+u*n*d-t*h*d)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*d+t*o*d)*b,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*b,e[12]=M*b,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*b,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*b,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,_=a*u,m=a*h,d=o*h,S=l*c,x=l*u,y=l*h,M=n.x,w=n.y,b=n.z;return i[0]=(1-(_+d))*M,i[1]=(p+y)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(p-y)*w,i[5]=(1-(f+d))*w,i[6]=(m+S)*w,i[7]=0,i[8]=(g+x)*b,i[9]=(m-S)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Lr.set(i[0],i[1],i[2]).length();const a=Lr.set(i[4],i[5],i[6]).length(),o=Lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const c=1/s,u=1/a,h=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=ti){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(o===ti)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ao)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ti){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*c,p=(n+i)*u;let g,_;if(o===ti)g=(a+s)*h,_=-2*h;else if(o===ao)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Lr=new U,En=new gt,Hm=new U(0,0,0),Gm=new U(1,1,1),oi=new U,wa=new U,rn=new U,Hu=new gt,Gu=new Ji;class So{constructor(e=0,t=0,n=0,i=So.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}So.DEFAULT_ORDER="XYZ";class Tf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vm=0;const Vu=new U,Dr=new Ji,Yn=new gt,Aa=new U,Ts=new U,Wm=new U,Xm=new Ji,Wu=new U(1,0,0),Xu=new U(0,1,0),Yu=new U(0,0,1),Ym={type:"added"},qm={type:"removed"};class Bt extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new U,t=new So,n=new Ji,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new qe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return Vu.copy(e).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Aa.copy(e):Aa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ts,Aa,this.up):Yn.lookAt(Aa,Ts,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),Dr.setFromRotationMatrix(Yn),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ym)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,Wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Bt.DEFAULT_UP=new U(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new U,qn=new U,$o=new U,jn=new U,Ur=new U,Ir=new U,qu=new U,Ko=new U,Zo=new U,Jo=new U;let Ca=!1;class Tn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){bn.subVectors(i,t),qn.subVectors(n,t),$o.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(qn),l=bn.dot($o),c=qn.dot(qn),u=qn.dot($o),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn),jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,t,n,i,s,a,o,l){return Ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ca=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,jn),l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),qn.subVectors(e,t),bn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),bn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ca=!0),Tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ur.subVectors(i,n),Ir.subVectors(s,n),Ko.subVectors(e,n);const l=Ur.dot(Ko),c=Ir.dot(Ko);if(l<=0&&c<=0)return t.copy(n);Zo.subVectors(e,i);const u=Ur.dot(Zo),h=Ir.dot(Zo);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ur,a);Jo.subVectors(e,s);const p=Ur.dot(Jo),g=Ir.dot(Jo);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ir,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return qu.subVectors(s,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(qu,o);const d=1/(m+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(Ur,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function Qo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let Ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=fc(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Qo(a,s,e+1/3),this.g=Qo(a,s,e),this.b=Qo(a,s,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=wf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Je.fromWorkingColorSpace(Ot.copy(this),e),Math.round(St(Ot.r*255,0,255))*65536+Math.round(St(Ot.g*255,0,255))*256+Math.round(St(Ot.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,s=Ot.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Lt){Je.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Ra);const n=Ns(li.h,Ra.h,t),i=Ns(li.s,Ra.s,t),s=Ns(li.l,Ra.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ot=new Ke;Ke.NAMES=wf;let jm=0;class ms extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Jr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Al,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pc extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qn=$m();function $m(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Km(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=St(r,-65504,65504),Qn.floatView[0]=r;const e=Qn.uint32View[0],t=e>>23&511;return Qn.baseTable[t]+((e&8388607)>>Qn.shiftTable[t])}function Zm(r){const e=r>>10;return Qn.uint32View[0]=Qn.mantissaTable[Qn.offsetTable[e]+(r&1023)]+Qn.exponentTable[e],Qn.floatView[0]}const Pa={toHalfFloat:Km,fromHalfFloat:Zm},vt=new U,La=new ue;class Nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Iu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),i=Vt(i,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iu&&(e.usage=this.usage),e}}class Af extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cf extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jt extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jm=0;const mn=new gt,el=new Bt,Or=new U,sn=new sa,ws=new sa,wt=new U;class kn extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yf(e)?Cf:Af)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(sn.min,ws.min),sn.expandByPoint(wt),wt.addVectors(sn.max,ws.max),sn.expandByPoint(wt)):(sn.expandByPoint(ws.min),sn.expandByPoint(ws.max))}sn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(Or.fromBufferAttribute(e,c),wt.add(Or)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new U,u[T]=new U;const h=new U,f=new U,p=new U,g=new ue,_=new ue,m=new ue,d=new U,S=new U;function x(T,O,N){h.fromArray(i,T*3),f.fromArray(i,O*3),p.fromArray(i,N*3),g.fromArray(a,T*2),_.fromArray(a,O*2),m.fromArray(a,N*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const k=1/(_.x*m.y-m.x*_.y);isFinite(k)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(k),S.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(k),c[T].add(d),c[O].add(d),c[N].add(d),u[T].add(S),u[O].add(S),u[N].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,O=y.length;T<O;++T){const N=y[T],k=N.start,P=N.count;for(let F=k,B=k+P;F<B;F+=3)x(n[F+0],n[F+1],n[F+2])}const M=new U,w=new U,b=new U,C=new U;function v(T){b.fromArray(s,T*3),C.copy(b);const O=c[T];M.copy(O),M.sub(b.multiplyScalar(b.dot(O))).normalize(),w.crossVectors(C,O);const k=w.dot(u[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=k}for(let T=0,O=y.length;T<O;++T){const N=y[T],k=N.start,P=N.count;for(let F=k,B=k+P;F<B;F+=3)v(n[F+0]),v(n[F+1]),v(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Nn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ju=new gt,Di=new bf,Da=new dc,$u=new U,Nr=new U,Fr=new U,Br=new U,tl=new U,Ua=new U,Ia=new ue,Oa=new ue,Na=new ue,Ku=new U,Zu=new U,Ju=new U,Fa=new U,Ba=new U;class $e extends Bt{constructor(e=new kn,t=new pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(tl.fromBufferAttribute(h,e),a?Ua.addScaledVector(tl,u):Ua.addScaledVector(tl.sub(t),u))}t.add(Ua)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Di.copy(e.ray).recast(e.near),!(Da.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Da,$u)===null||Di.origin.distanceToSquared($u)>(e.far-e.near)**2))&&(ju.copy(s).invert(),Di.copy(e.ray).applyMatrix4(ju),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,M=x;y<M;y+=3){const w=o.getX(y),b=o.getX(y+1),C=o.getX(y+2);i=za(this,d,e,n,c,u,h,w,b,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);i=za(this,a,e,n,c,u,h,S,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,M=x;y<M;y+=3){const w=y,b=y+1,C=y+2;i=za(this,d,e,n,c,u,h,w,b,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=m,x=m+1,y=m+2;i=za(this,a,e,n,c,u,h,S,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Qm(r,e,t,n,i,s,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===xi,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:r}}function za(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Nr),r.getVertexPosition(l,Fr),r.getVertexPosition(c,Br);const u=Qm(r,e,t,n,Nr,Fr,Br,Fa);if(u){i&&(Ia.fromBufferAttribute(i,o),Oa.fromBufferAttribute(i,l),Na.fromBufferAttribute(i,c),u.uv=Tn.getInterpolation(Fa,Nr,Fr,Br,Ia,Oa,Na,new ue)),s&&(Ia.fromBufferAttribute(s,o),Oa.fromBufferAttribute(s,l),Na.fromBufferAttribute(s,c),u.uv1=Tn.getInterpolation(Fa,Nr,Fr,Br,Ia,Oa,Na,new ue),u.uv2=u.uv1),a&&(Ku.fromBufferAttribute(a,o),Zu.fromBufferAttribute(a,l),Ju.fromBufferAttribute(a,c),u.normal=Tn.getInterpolation(Fa,Nr,Fr,Br,Ku,Zu,Ju,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};Tn.getNormal(Nr,Fr,Br,h.normal),u.face=h}return u}class _s extends kn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function g(_,m,d,S,x,y,M,w,b,C,v){const T=y/b,O=M/C,N=y/2,k=M/2,P=w/2,F=b+1,B=C+1;let H=0,ne=0;const Z=new U;for(let j=0;j<B;j++){const re=j*O-k;for(let ie=0;ie<F;ie++){const Y=ie*T-N;Z[_]=Y*S,Z[m]=re*x,Z[d]=P,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[d]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(ie/b),h.push(1-j/C),H+=1}}for(let j=0;j<C;j++)for(let re=0;re<b;re++){const ie=f+re+F*j,Y=f+re+F*(j+1),J=f+(re+1)+F*(j+1),me=f+(re+1)+F*j;l.push(ie,Y,me),l.push(Y,J,me),ne+=6}o.addGroup(p,ne,v),p+=ne,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(r){const e={};for(let t=0;t<r.length;t++){const n=cs(r[t]);for(const i in n)e[i]=n[i]}return e}function e_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Rf(r){return r.getRenderTarget()===null?r.outputColorSpace:Je.workingColorSpace}const t_={clone:cs,merge:Wt};var n_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=e_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pf extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends Pf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=-90,kr=1;class r_ extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new on(zr,kr,e,t);i.layers=this.layers,this.add(i);const s=new on(zr,kr,e,t);s.layers=this.layers,this.add(s);const a=new on(zr,kr,e,t);a.layers=this.layers,this.add(a);const o=new on(zr,kr,e,t);o.layers=this.layers,this.add(o);const l=new on(zr,kr,e,t);l.layers=this.layers,this.add(l);const c=new on(zr,kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lf extends qt{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s_ extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Fs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wi?Lt:vn),this.texture=new Lf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _s(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:pi});s.uniforms.tEquirect.value=t;const a=new $e(i,s),o=t.minFilter;return t.minFilter===os&&(t.minFilter=Dt),new r_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const nl=new U,a_=new U,o_=new qe;class ci{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=nl.subVectors(n,t).cross(a_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(nl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||o_.getNormalMatrix(e),i=this.coplanarPoint(nl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new dc,ka=new U;class mc{constructor(e=new ci,t=new ci,n=new ci,i=new ci,s=new ci,a=new ci){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],S=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,m-p,y-d).normalize(),n[1].setComponents(l+s,f+c,m+p,y+d).normalize(),n[2].setComponents(l+a,f+u,m+g,y+S).normalize(),n[3].setComponents(l-a,f-u,m-g,y-S).normalize(),n[4].setComponents(l-o,f-h,m-_,y-x).normalize(),t===ti)n[5].setComponents(l+o,f+h,m+_,y+x).normalize();else if(t===ao)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ka.x=i.normal.x>0?e.max.x:e.min.x,ka.y=i.normal.y>0?e.max.y:e.min.y,ka.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Df(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function l_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,h){const f=u.array,p=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),p.count===-1&&g.length===0&&r.bufferSubData(h,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const d=g[_];t?r.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):r.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(t?r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class aa extends kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const S=d*f-a;for(let x=0;x<c;x++){const y=x*h-s;g.push(y,-S,0),_.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const x=S+c*d,y=S+c*(d+1),M=S+1+c*(d+1),w=S+1+c*d;p.push(x,y,w),p.push(y,M,w)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}var c_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,h_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,p_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,__=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,x_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,M_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,D_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,U_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,I_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",k_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,H_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Z_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,J_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ng=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,k0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:c_,alphahash_pars_fragment:u_,alphamap_fragment:h_,alphamap_pars_fragment:f_,alphatest_fragment:d_,alphatest_pars_fragment:p_,aomap_fragment:m_,aomap_pars_fragment:__,batching_pars_vertex:g_,batching_vertex:v_,begin_vertex:x_,beginnormal_vertex:y_,bsdfs:S_,iridescence_fragment:M_,bumpmap_pars_fragment:E_,clipping_planes_fragment:b_,clipping_planes_pars_fragment:T_,clipping_planes_pars_vertex:w_,clipping_planes_vertex:A_,color_fragment:C_,color_pars_fragment:R_,color_pars_vertex:P_,color_vertex:L_,common:D_,cube_uv_reflection_fragment:U_,defaultnormal_vertex:I_,displacementmap_pars_vertex:O_,displacementmap_vertex:N_,emissivemap_fragment:F_,emissivemap_pars_fragment:B_,colorspace_fragment:z_,colorspace_pars_fragment:k_,envmap_fragment:H_,envmap_common_pars_fragment:G_,envmap_pars_fragment:V_,envmap_pars_vertex:W_,envmap_physical_pars_fragment:ng,envmap_vertex:X_,fog_vertex:Y_,fog_pars_vertex:q_,fog_fragment:j_,fog_pars_fragment:$_,gradientmap_pars_fragment:K_,lightmap_fragment:Z_,lightmap_pars_fragment:J_,lights_lambert_fragment:Q_,lights_lambert_pars_fragment:eg,lights_pars_begin:tg,lights_toon_fragment:ig,lights_toon_pars_fragment:rg,lights_phong_fragment:sg,lights_phong_pars_fragment:ag,lights_physical_fragment:og,lights_physical_pars_fragment:lg,lights_fragment_begin:cg,lights_fragment_maps:ug,lights_fragment_end:hg,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:pg,logdepthbuf_vertex:mg,map_fragment:_g,map_pars_fragment:gg,map_particle_fragment:vg,map_particle_pars_fragment:xg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:Sg,morphcolor_vertex:Mg,morphnormal_vertex:Eg,morphtarget_pars_vertex:bg,morphtarget_vertex:Tg,normal_fragment_begin:wg,normal_fragment_maps:Ag,normal_pars_fragment:Cg,normal_pars_vertex:Rg,normal_vertex:Pg,normalmap_pars_fragment:Lg,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Ig,iridescence_pars_fragment:Og,opaque_fragment:Ng,packing:Fg,premultiplied_alpha_fragment:Bg,project_vertex:zg,dithering_fragment:kg,dithering_pars_fragment:Hg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:Yg,shadowmask_pars_fragment:qg,skinbase_vertex:jg,skinning_pars_vertex:$g,skinning_vertex:Kg,skinnormal_vertex:Zg,specularmap_fragment:Jg,specularmap_pars_fragment:Qg,tonemapping_fragment:e0,tonemapping_pars_fragment:t0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:r0,uv_pars_vertex:s0,uv_vertex:a0,worldpos_vertex:o0,background_vert:l0,background_frag:c0,backgroundCube_vert:u0,backgroundCube_frag:h0,cube_vert:f0,cube_frag:d0,depth_vert:p0,depth_frag:m0,distanceRGBA_vert:_0,distanceRGBA_frag:g0,equirect_vert:v0,equirect_frag:x0,linedashed_vert:y0,linedashed_frag:S0,meshbasic_vert:M0,meshbasic_frag:E0,meshlambert_vert:b0,meshlambert_frag:T0,meshmatcap_vert:w0,meshmatcap_frag:A0,meshnormal_vert:C0,meshnormal_frag:R0,meshphong_vert:P0,meshphong_frag:L0,meshphysical_vert:D0,meshphysical_frag:U0,meshtoon_vert:I0,meshtoon_frag:O0,points_vert:N0,points_frag:F0,shadow_vert:B0,shadow_frag:z0,sprite_vert:k0,sprite_frag:H0},ge={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Un={basic:{uniforms:Wt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Wt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Wt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Wt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Wt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Wt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Wt([ge.points,ge.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Wt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Wt([ge.common,ge.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Wt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Wt([ge.sprite,ge.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Wt([ge.common,ge.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Wt([ge.lights,ge.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Un.physical={uniforms:Wt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ha={r:0,b:0,g:0};function G0(r,e,t,n,i,s,a){const o=new Ke(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let S=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),S=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===xo)?(u===void 0&&(u=new $e(new _s(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:cs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Je.getTransfer(x.colorSpace)!==st,(h!==x||f!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new $e(new aa(2,2),new Qi({name:"BackgroundMaterial",uniforms:cs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(Ha,Rf(r)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function V0(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(P,F,B,H,ne){let Z=!1;if(a){const j=_(H,B,F);c!==j&&(c=j,p(c.object)),Z=d(P,H,B,ne),Z&&S(P,H,B,ne)}else{const j=F.wireframe===!0;(c.geometry!==H.id||c.program!==B.id||c.wireframe!==j)&&(c.geometry=H.id,c.program=B.id,c.wireframe=j,Z=!0)}ne!==null&&t.update(ne,r.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,C(P,F,B,H),ne!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,F,B){const H=B.wireframe===!0;let ne=o[P.id];ne===void 0&&(ne={},o[P.id]=ne);let Z=ne[F.id];Z===void 0&&(Z={},ne[F.id]=Z);let j=Z[H];return j===void 0&&(j=m(f()),Z[H]=j),j}function m(P){const F=[],B=[],H=[];for(let ne=0;ne<i;ne++)F[ne]=0,B[ne]=0,H[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:H,object:P,attributes:{},index:null}}function d(P,F,B,H){const ne=c.attributes,Z=F.attributes;let j=0;const re=B.getAttributes();for(const ie in re)if(re[ie].location>=0){const J=ne[ie];let me=Z[ie];if(me===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(me=P.instanceColor)),J===void 0||J.attribute!==me||me&&J.data!==me.data)return!0;j++}return c.attributesNum!==j||c.index!==H}function S(P,F,B,H){const ne={},Z=F.attributes;let j=0;const re=B.getAttributes();for(const ie in re)if(re[ie].location>=0){let J=Z[ie];J===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const me={};me.attribute=J,J&&J.data&&(me.data=J.data),ne[ie]=me,j++}c.attributes=ne,c.attributesNum=j,c.index=H}function x(){const P=c.newAttributes;for(let F=0,B=P.length;F<B;F++)P[F]=0}function y(P){M(P,0)}function M(P,F){const B=c.newAttributes,H=c.enabledAttributes,ne=c.attributeDivisors;B[P]=1,H[P]===0&&(r.enableVertexAttribArray(P),H[P]=1),ne[P]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),ne[P]=F)}function w(){const P=c.newAttributes,F=c.enabledAttributes;for(let B=0,H=F.length;B<H;B++)F[B]!==P[B]&&(r.disableVertexAttribArray(B),F[B]=0)}function b(P,F,B,H,ne,Z,j){j===!0?r.vertexAttribIPointer(P,F,B,ne,Z):r.vertexAttribPointer(P,F,B,H,ne,Z)}function C(P,F,B,H){if(n.isWebGL2===!1&&(P.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const ne=H.attributes,Z=B.getAttributes(),j=F.defaultAttributeValues;for(const re in Z){const ie=Z[re];if(ie.location>=0){let Y=ne[re];if(Y===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const J=Y.normalized,me=Y.itemSize,we=t.get(Y);if(we===void 0)continue;const Me=we.buffer,Oe=we.type,Be=we.bytesPerElement,Ae=n.isWebGL2===!0&&(Oe===r.INT||Oe===r.UNSIGNED_INT||Y.gpuType===hf);if(Y.isInterleavedBufferAttribute){const Ue=Y.data,L=Ue.stride,pe=Y.offset;if(Ue.isInstancedInterleavedBuffer){for(let K=0;K<ie.locationSize;K++)M(ie.location+K,Ue.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let K=0;K<ie.locationSize;K++)y(ie.location+K);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let K=0;K<ie.locationSize;K++)b(ie.location+K,me/ie.locationSize,Oe,J,L*Be,(pe+me/ie.locationSize*K)*Be,Ae)}else{if(Y.isInstancedBufferAttribute){for(let Ue=0;Ue<ie.locationSize;Ue++)M(ie.location+Ue,Y.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ue=0;Ue<ie.locationSize;Ue++)y(ie.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let Ue=0;Ue<ie.locationSize;Ue++)b(ie.location+Ue,me/ie.locationSize,Oe,J,me*Be,me/ie.locationSize*Ue*Be,Ae)}}else if(j!==void 0){const J=j[re];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(ie.location,J);break;case 3:r.vertexAttrib3fv(ie.location,J);break;case 4:r.vertexAttrib4fv(ie.location,J);break;default:r.vertexAttrib1fv(ie.location,J)}}}}w()}function v(){N();for(const P in o){const F=o[P];for(const B in F){const H=F[B];for(const ne in H)g(H[ne].object),delete H[ne];delete F[B]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;const F=o[P.id];for(const B in F){const H=F[B];for(const ne in H)g(H[ne].object),delete H[ne];delete F[B]}delete o[P.id]}function O(P){for(const F in o){const B=o[F];if(B[P.id]===void 0)continue;const H=B[P.id];for(const ne in H)g(H[ne].object),delete H[ne];delete B[P.id]}}function N(){k(),u=!0,c!==l&&(c=l,p(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:k,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function W0(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}function o(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let p,g;if(i)p=r,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function X0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=a||e.has("OES_texture_float"),M=x&&y,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:w}}function Y0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ci,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,x=S*4;let y=d.clippingState||null;l.value=y,y=u(g,f,x,p);for(let M=0;M!==x;++M)y[M]=t[M];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==_;++x,y+=4)a.copy(h[x]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function q0(r){let e=new WeakMap;function t(a,o){return o===no?a.mapping=ss:o===Cl&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===no||o===Cl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new s_(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Uf extends Pf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qr=4,Qu=[.125,.215,.35,.446,.526,.582],zi=20,il=new Uf,eh=new Ke;let rl=null,sl=0,al=0;const Ni=(1+Math.sqrt(5))/2,Hr=1/Ni,th=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ni,Hr),new U(0,Ni,-Hr),new U(Hr,0,Ni),new U(-Hr,0,Ni),new U(Ni,Hr,0),new U(-Ni,Hr,0)];class nh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){rl=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,sl,al),e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:ei,format:An,colorSpace:Bn,depthBuffer:!1},i=ih(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j0(s)),this._blurMaterial=$0(s,e,t)}return i}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,n,i){const o=new on(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(eh),u.toneMapping=mi,u.autoClear=!1;const p=new pc({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new $e(new _s,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(eh),_=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;Ga(i,S*x,d>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ss||e.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,il)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=th[(i-1)%th.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $e(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):zi;m>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const d=[];let S=0;for(let b=0;b<zi;++b){const C=b/_,v=Math.exp(-C*C/2);d.push(v),b===0?S+=v:b<m&&(S+=2*v)}for(let b=0;b<d.length;b++)d[b]=d[b]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],M=3*y*(i>x-qr?i-x+qr:0),w=4*(this._cubeSize-y);Ga(t,M,w,3*y,2*y),l.setRenderTarget(t),l.render(h,il)}}function j0(r){const e=[],t=[],n=[];let i=r;const s=r-qr+1+Qu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-qr?l=Qu[a-r+qr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,S=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,C=w>2?0:-1,v=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];S.set(v,_*g*w),x.set(f,m*g*w);const T=[w,w,w,w,w,w];y.set(T,d*g*w)}const M=new kn;M.setAttribute("position",new Nn(S,_)),M.setAttribute("uv",new Nn(x,m)),M.setAttribute("faceIndex",new Nn(y,d)),e.push(M),i>qr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ih(r,e,t){const n=new Zi(r,e,t);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ga(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $0(r,e,t){const n=new Float32Array(zi),i=new U(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function rh(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function sh(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function K0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===no||l===Cl,u=l===ss||l===as;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new nh(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new nh(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Z0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function J0(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let x=0,y=S.length;x<y;x+=3){const M=S[x+0],w=S[x+1],b=S[x+2];f.push(M,w,w,b,b,M)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,y=S.length/3-1;x<y;x+=3){const M=x+0,w=x+1,b=x+2;f.push(M,w,w,b,b,M)}}else return;const m=new(yf(f)?Cf:Af)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Q0(r,e,t,n){const i=n.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,g){r.drawElements(s,g,o,p*l),t.update(g,s,1)}function h(p,g,_){if(_===0)return;let m,d;if(i)m=r,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,g,o,p*l,_),t.update(g,s,_)}function f(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(s,g,0,o,p,0,_);let d=0;for(let S=0;S<_;S++)d+=g[S];t.update(d,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function ev(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tv(r,e){return r[0]-e[0]}function nv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function iv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new at,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let F=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),y===!0&&(v=2),M===!0&&(v=3);let T=u.attributes.position.count*v,O=1;T>e.maxTextureSize&&(O=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const N=new Float32Array(T*O*4*_),k=new Ef(N,T,O,_);k.type=Cn,k.needsUpdate=!0;const P=v*4;for(let B=0;B<_;B++){const H=w[B],ne=b[B],Z=C[B],j=T*O*4*B;for(let re=0;re<H.count;re++){const ie=re*P;x===!0&&(a.fromBufferAttribute(H,re),N[j+ie+0]=a.x,N[j+ie+1]=a.y,N[j+ie+2]=a.z,N[j+ie+3]=0),y===!0&&(a.fromBufferAttribute(ne,re),N[j+ie+4]=a.x,N[j+ie+5]=a.y,N[j+ie+6]=a.z,N[j+ie+7]=0),M===!0&&(a.fromBufferAttribute(Z,re),N[j+ie+8]=a.x,N[j+ie+9]=a.y,N[j+ie+10]=a.z,N[j+ie+11]=Z.itemSize===4?a.w:1)}}m={count:_,texture:k,size:new ue(T,O)},s.set(u,m),u.addEventListener("dispose",F)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const S=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<g;y++){const M=_[y];M[0]=y,M[1]=f[y]}_.sort(nv);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(tv);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const M=o[y],w=M[0],b=M[1];w!==Number.MAX_SAFE_INTEGER&&b?(m&&u.getAttribute("morphTarget"+y)!==m[w]&&u.setAttribute("morphTarget"+y,m[w]),d&&u.getAttribute("morphNormal"+y)!==d[w]&&u.setAttribute("morphNormal"+y,d[w]),i[y]=b,S+=b):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const x=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function rv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class If extends qt{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Vi,u!==Vi&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vi&&(n=ui),n===void 0&&u===ls&&(n=Gi),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Of=new qt,Nf=new If(1,1);Nf.compareFunction=xf;const Ff=new Ef,Bf=new zm,zf=new Lf,ah=[],oh=[],lh=new Float32Array(16),ch=new Float32Array(9),uh=new Float32Array(4);function gs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ah[i];if(s===void 0&&(s=new Float32Array(i),ah[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Et(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Mo(r,e){let t=oh[e];t===void 0&&(t=new Int32Array(e),oh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2fv(this.addr,e),Et(t,e)}}function ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;r.uniform3fv(this.addr,e),Et(t,e)}}function lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4fv(this.addr,e),Et(t,e)}}function cv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;uh.set(n),r.uniformMatrix2fv(this.addr,!1,uh),Et(t,n)}}function uv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;ch.set(n),r.uniformMatrix3fv(this.addr,!1,ch),Et(t,n)}}function hv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;lh.set(n),r.uniformMatrix4fv(this.addr,!1,lh),Et(t,n)}}function fv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2iv(this.addr,e),Et(t,e)}}function pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3iv(this.addr,e),Et(t,e)}}function mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4iv(this.addr,e),Et(t,e)}}function _v(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2uiv(this.addr,e),Et(t,e)}}function vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3uiv(this.addr,e),Et(t,e)}}function xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4uiv(this.addr,e),Et(t,e)}}function yv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Nf:Of;t.setTexture2D(e||s,i)}function Sv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bf,i)}function Mv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||zf,i)}function Ev(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ff,i)}function bv(r){switch(r){case 5126:return sv;case 35664:return av;case 35665:return ov;case 35666:return lv;case 35674:return cv;case 35675:return uv;case 35676:return hv;case 5124:case 35670:return fv;case 35667:case 35671:return dv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return _v;case 36294:return gv;case 36295:return vv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Ev}}function Tv(r,e){r.uniform1fv(this.addr,e)}function wv(r,e){const t=gs(e,this.size,2);r.uniform2fv(this.addr,t)}function Av(r,e){const t=gs(e,this.size,3);r.uniform3fv(this.addr,t)}function Cv(r,e){const t=gs(e,this.size,4);r.uniform4fv(this.addr,t)}function Rv(r,e){const t=gs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Pv(r,e){const t=gs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Lv(r,e){const t=gs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Dv(r,e){r.uniform1iv(this.addr,e)}function Uv(r,e){r.uniform2iv(this.addr,e)}function Iv(r,e){r.uniform3iv(this.addr,e)}function Ov(r,e){r.uniform4iv(this.addr,e)}function Nv(r,e){r.uniform1uiv(this.addr,e)}function Fv(r,e){r.uniform2uiv(this.addr,e)}function Bv(r,e){r.uniform3uiv(this.addr,e)}function zv(r,e){r.uniform4uiv(this.addr,e)}function kv(r,e,t){const n=this.cache,i=e.length,s=Mo(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Of,s[a])}function Hv(r,e,t){const n=this.cache,i=e.length,s=Mo(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Bf,s[a])}function Gv(r,e,t){const n=this.cache,i=e.length,s=Mo(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||zf,s[a])}function Vv(r,e,t){const n=this.cache,i=e.length,s=Mo(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ff,s[a])}function Wv(r){switch(r){case 5126:return Tv;case 35664:return wv;case 35665:return Av;case 35666:return Cv;case 35674:return Rv;case 35675:return Pv;case 35676:return Lv;case 5124:case 35670:return Dv;case 35667:case 35671:return Uv;case 35668:case 35672:return Iv;case 35669:case 35673:return Ov;case 5125:return Nv;case 36294:return Fv;case 36295:return Bv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Vv}}class Xv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bv(t.type)}}class Yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wv(t.type)}}class qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function hh(r,e){r.seq.push(e),r.map[e.id]=e}function jv(r,e,t){const n=r.name,i=n.length;for(ol.lastIndex=0;;){const s=ol.exec(n),a=ol.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){hh(t,c===void 0?new Xv(o,r,e):new Yv(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new qv(o),hh(t,h)),t=h}}}class Ka{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);jv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function fh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const $v=37297;let Kv=0;function Zv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Jv(r){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(r);let n;switch(e===t?n="":e===so&&t===ro?n="LinearDisplayP3ToLinearSRGB":e===ro&&t===so&&(n="LinearSRGBToLinearDisplayP3"),r){case Bn:case yo:return[n,"LinearTransferOETF"];case Lt:case hc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function dh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Zv(r.getShaderSource(e),a)}else return i}function Qv(r,e){const t=Jv(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ex(r,e){let t;switch(e){case $p:t="Linear";break;case Kp:t="Reinhard";break;case Zp:t="OptimizedCineon";break;case Jp:t="ACESFilmic";break;case Qp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tx(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function nx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ix(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ls(r){return r!==""}function ph(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(r){return r.replace(rx,ax)}const sx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ax(r,e){let t=Ge[e];if(t===void 0){const n=sx.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}const ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(r){return r.replace(ox,lx)}function lx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===cf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ep?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function ux(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ss:case as:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function fx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case lc:e="ENVMAP_BLENDING_MULTIPLY";break;case qp:e="ENVMAP_BLENDING_MIX";break;case jp:e="ENVMAP_BLENDING_ADD";break}return e}function dx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function px(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=cx(t),c=ux(t),u=hx(t),h=fx(t),f=dx(t),p=t.isWebGL2?"":tx(t),g=nx(s),_=i.createProgram();let m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),d.length>0&&(d+=`
`)):(m=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),d=[p,gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==mi?ex("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Qv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),a=Ul(a),a=ph(a,t),a=mh(a,t),o=Ul(o),o=ph(o,t),o=mh(o,t),a=_h(a),o=_h(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=S+m+a,y=S+d+o,M=fh(i,i.VERTEX_SHADER,x),w=fh(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(O){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(M).trim(),P=i.getShaderInfoLog(w).trim();let F=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,w);else{const H=dh(i,M,"vertex"),ne=dh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+H+`
`+ne)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||P==="")&&(B=!1);B&&(O.diagnostics={runnable:F,programLog:N,vertexShader:{log:k,prefix:m},fragmentShader:{log:P,prefix:d}})}i.deleteShader(M),i.deleteShader(w),C=new Ka(i,_),v=ix(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,$v)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}let mx=0;class _x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gx(e),t.set(e,n)),n}}class gx{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}}function vx(r,e,t,n,i,s,a){const o=new Tf,l=new _x,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,T,O,N,k){const P=N.fog,F=k.geometry,B=v.isMeshStandardMaterial?N.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),ne=H&&H.mapping===xo?H.image.height:null,Z=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,re=j!==void 0?j.length:0;let ie=0;F.morphAttributes.position!==void 0&&(ie=1),F.morphAttributes.normal!==void 0&&(ie=2),F.morphAttributes.color!==void 0&&(ie=3);let Y,J,me,we;if(Z){const Ht=Un[Z];Y=Ht.vertexShader,J=Ht.fragmentShader}else Y=v.vertexShader,J=v.fragmentShader,l.update(v),me=l.getVertexShaderID(v),we=l.getFragmentShaderID(v);const Me=r.getRenderTarget(),Oe=k.isInstancedMesh===!0,Be=k.isBatchedMesh===!0,Ae=!!v.map,Ue=!!v.matcap,L=!!H,pe=!!v.aoMap,K=!!v.lightMap,he=!!v.bumpMap,te=!!v.normalMap,Ce=!!v.displacementMap,xe=!!v.emissiveMap,ye=!!v.metalnessMap,Ie=!!v.roughnessMap,je=v.anisotropy>0,rt=v.clearcoat>0,R=v.iridescence>0,E=v.sheen>0,V=v.transmission>0,oe=je&&!!v.anisotropyMap,se=rt&&!!v.clearcoatMap,le=rt&&!!v.clearcoatNormalMap,Te=rt&&!!v.clearcoatRoughnessMap,fe=R&&!!v.iridescenceMap,ve=R&&!!v.iridescenceThicknessMap,D=E&&!!v.sheenColorMap,de=E&&!!v.sheenRoughnessMap,ee=!!v.specularMap,Ne=!!v.specularColorMap,Re=!!v.specularIntensityMap,De=V&&!!v.transmissionMap,be=V&&!!v.thicknessMap,Ee=!!v.gradientMap,We=!!v.alphaMap,I=v.alphaTest>0,_e=!!v.alphaHash,ae=!!v.extensions,$=!!F.attributes.uv1,ce=!!F.attributes.uv2,Le=!!F.attributes.uv3;let Xe=mi;return v.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Xe=r.toneMapping),{isWebGL2:u,shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:J,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:we,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Be,instancing:Oe,instancingColor:Oe&&k.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Bn,map:Ae,matcap:Ue,envMap:L,envMapMode:L&&H.mapping,envMapCubeUVHeight:ne,aoMap:pe,lightMap:K,bumpMap:he,normalMap:te,displacementMap:f&&Ce,emissiveMap:xe,normalMapObjectSpace:te&&v.normalMapType===hm,normalMapTangentSpace:te&&v.normalMapType===uc,metalnessMap:ye,roughnessMap:Ie,anisotropy:je,anisotropyMap:oe,clearcoat:rt,clearcoatMap:se,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,iridescence:R,iridescenceMap:fe,iridescenceThicknessMap:ve,sheen:E,sheenColorMap:D,sheenRoughnessMap:de,specularMap:ee,specularColorMap:Ne,specularIntensityMap:Re,transmission:V,transmissionMap:De,thicknessMap:be,gradientMap:Ee,opaque:v.transparent===!1&&v.blending===Jr,alphaMap:We,alphaTest:I,alphaHash:_e,combine:v.combine,mapUv:Ae&&_(v.map.channel),aoMapUv:pe&&_(v.aoMap.channel),lightMapUv:K&&_(v.lightMap.channel),bumpMapUv:he&&_(v.bumpMap.channel),normalMapUv:te&&_(v.normalMap.channel),displacementMapUv:Ce&&_(v.displacementMap.channel),emissiveMapUv:xe&&_(v.emissiveMap.channel),metalnessMapUv:ye&&_(v.metalnessMap.channel),roughnessMapUv:Ie&&_(v.roughnessMap.channel),anisotropyMapUv:oe&&_(v.anisotropyMap.channel),clearcoatMapUv:se&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:D&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(v.sheenRoughnessMap.channel),specularMapUv:ee&&_(v.specularMap.channel),specularColorMapUv:Ne&&_(v.specularColorMap.channel),specularIntensityMapUv:Re&&_(v.specularIntensityMap.channel),transmissionMapUv:De&&_(v.transmissionMap.channel),thicknessMapUv:be&&_(v.thicknessMap.channel),alphaMapUv:We&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(te||je),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:$,vertexUv2s:ce,vertexUv3s:Le,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(Ae||We),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wn,flipSided:v.side===Kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ae&&v.extensions.derivatives===!0,extensionFragDepth:ae&&v.extensions.fragDepth===!0,extensionDrawBuffers:ae&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)T.push(O),T.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(S(T,v),x(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function S(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function x(v,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function y(v){const T=g[v.type];let O;if(T){const N=Un[T];O=t_.clone(N.uniforms)}else O=v.uniforms;return O}function M(v,T){let O;for(let N=0,k=c.length;N<k;N++){const P=c[N];if(P.cacheKey===T){O=P,++O.usedTimes;break}}return O===void 0&&(O=new px(r,T,v,s),c.push(O)),O}function w(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),v.destroy()}}function b(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:M,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:C}}function xx(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function yx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function xh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,p,g,_,m){let d=r[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function o(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||yx),n.length>1&&n.sort(f||vh),i.length>1&&i.sort(f||vh)}function u(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Sx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new xh,r.set(n,[a])):i>=s.length?(a=new xh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Mx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ke};break;case"SpotLight":t={position:new U,direction:new U,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function Ex(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let bx=0;function Tx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function wx(r,e){const t=new Mx,n=Ex(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const s=new U,a=new gt,o=new gt;function l(u,h){let f=0,p=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,m=0,d=0,S=0,x=0,y=0,M=0,w=0,b=0,C=0,v=0;u.sort(Tx);const T=h===!0?Math.PI:1;for(let N=0,k=u.length;N<k;N++){const P=u[N],F=P.color,B=P.intensity,H=P.distance,ne=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*B*T,p+=F.g*B*T,g+=F.b*B*T;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],B);v++}else if(P.isDirectionalLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const j=P.shadow,re=n.get(P);re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,i.directionalShadow[_]=re,i.directionalShadowMap[_]=ne,i.directionalShadowMatrix[_]=P.shadow.matrix,y++}i.directional[_]=Z,_++}else if(P.isSpotLight){const Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(F).multiplyScalar(B*T),Z.distance=H,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[d]=Z;const j=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,j.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[d]=j.matrix,P.castShadow){const re=n.get(P);re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,i.spotShadow[d]=re,i.spotShadowMap[d]=ne,w++}d++}else if(P.isRectAreaLight){const Z=t.get(P);Z.color.copy(F).multiplyScalar(B),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=Z,S++}else if(P.isPointLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*T),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const j=P.shadow,re=n.get(P);re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,re.shadowCameraNear=j.camera.near,re.shadowCameraFar=j.camera.far,i.pointShadow[m]=re,i.pointShadowMap[m]=ne,i.pointShadowMatrix[m]=P.shadow.matrix,M++}i.point[m]=Z,m++}else if(P.isHemisphereLight){const Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(B*T),Z.groundColor.copy(P.groundColor).multiplyScalar(B*T),i.hemi[x]=Z,x++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==_||O.pointLength!==m||O.spotLength!==d||O.rectAreaLength!==S||O.hemiLength!==x||O.numDirectionalShadows!==y||O.numPointShadows!==M||O.numSpotShadows!==w||O.numSpotMaps!==b||O.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=S,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=v,O.directionalLength=_,O.pointLength=m,O.spotLength=d,O.rectAreaLength=S,O.hemiLength=x,O.numDirectionalShadows=y,O.numPointShadows=M,O.numSpotShadows=w,O.numSpotMaps=b,O.numLightProbes=v,i.version=bx++)}function c(u,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const y=u[S];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),f++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),o.identity(),a.copy(y.matrixWorld),a.premultiply(d),o.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function yh(r,e){const t=new wx(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ax(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new yh(r,e),t.set(s,[l])):a>=o.length?(l=new yh(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Cx extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rx extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dx(r,e,t){let n=new mc;const i=new ue,s=new ue,a=new at,o=new Cx({depthPacking:um}),l=new Rx,c={},u=t.maxTextureSize,h={[xi]:Kt,[Kt]:xi,[wn]:wn},f=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Px,fragmentShader:Lx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $e(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cf;let d=this.type;this.render=function(M,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const C=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),O=r.state;O.setBlending(pi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=d!==Kn&&this.type===Kn,k=d===Kn&&this.type!==Kn;for(let P=0,F=M.length;P<F;P++){const B=M[P],H=B.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ne=H.getFrameExtents();if(i.multiply(ne),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,H.mapSize.y=s.y)),H.map===null||N===!0||k===!0){const j=this.type!==Kn?{minFilter:Pt,magFilter:Pt}:{};H.map!==null&&H.map.dispose(),H.map=new Zi(i.x,i.y,j),H.map.texture.name=B.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const Z=H.getViewportCount();for(let j=0;j<Z;j++){const re=H.getViewport(j);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),O.viewport(a),H.updateMatrices(B,j),n=H.getFrustum(),y(w,b,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===Kn&&S(H,b),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(C,v,T)};function S(M,w){const b=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Zi(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(w,null,b,f,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(w,null,b,p,_,null)}function x(M,w,b,C){let v=null;const T=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)v=T;else if(v=b.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=v.uuid,N=w.uuid;let k=c[O];k===void 0&&(k={},c[O]=k);let P=k[N];P===void 0&&(P=v.clone(),k[N]=P),v=P}if(v.visible=w.visible,v.wireframe=w.wireframe,C===Kn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=r.properties.get(v);O.light=b}return v}function y(M,w,b,C,v){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===Kn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const N=e.update(M),k=M.material;if(Array.isArray(k)){const P=N.groups;for(let F=0,B=P.length;F<B;F++){const H=P[F],ne=k[H.materialIndex];if(ne&&ne.visible){const Z=x(M,ne,C,v);M.onBeforeShadow(r,M,w,b,N,Z,H),r.renderBufferDirect(b,null,N,Z,M,H),M.onAfterShadow(r,M,w,b,N,Z,H)}}}else if(k.visible){const P=x(M,k,C,v);M.onBeforeShadow(r,M,w,b,N,P,null),r.renderBufferDirect(b,null,N,P,M,null),M.onAfterShadow(r,M,w,b,N,P,null)}}const O=M.children;for(let N=0,k=O.length;N<k;N++)y(O[N],w,b,C,v)}}function Ux(r,e,t){const n=t.isWebGL2;function i(){let I=!1;const _e=new at;let ae=null;const $=new at(0,0,0,0);return{setMask:function(ce){ae!==ce&&!I&&(r.colorMask(ce,ce,ce,ce),ae=ce)},setLocked:function(ce){I=ce},setClear:function(ce,Le,Xe,bt,Ht){Ht===!0&&(ce*=bt,Le*=bt,Xe*=bt),_e.set(ce,Le,Xe,bt),$.equals(_e)===!1&&(r.clearColor(ce,Le,Xe,bt),$.copy(_e))},reset:function(){I=!1,ae=null,$.set(-1,0,0,0)}}}function s(){let I=!1,_e=null,ae=null,$=null;return{setTest:function(ce){ce?Be(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(ce){_e!==ce&&!I&&(r.depthMask(ce),_e=ce)},setFunc:function(ce){if(ae!==ce){switch(ce){case kp:r.depthFunc(r.NEVER);break;case Hp:r.depthFunc(r.ALWAYS);break;case Gp:r.depthFunc(r.LESS);break;case to:r.depthFunc(r.LEQUAL);break;case Vp:r.depthFunc(r.EQUAL);break;case Wp:r.depthFunc(r.GEQUAL);break;case Xp:r.depthFunc(r.GREATER);break;case Yp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=ce}},setLocked:function(ce){I=ce},setClear:function(ce){$!==ce&&(r.clearDepth(ce),$=ce)},reset:function(){I=!1,_e=null,ae=null,$=null}}}function a(){let I=!1,_e=null,ae=null,$=null,ce=null,Le=null,Xe=null,bt=null,Ht=null;return{setTest:function(nt){I||(nt?Be(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(nt){_e!==nt&&!I&&(r.stencilMask(nt),_e=nt)},setFunc:function(nt,Gt,Ln){(ae!==nt||$!==Gt||ce!==Ln)&&(r.stencilFunc(nt,Gt,Ln),ae=nt,$=Gt,ce=Ln)},setOp:function(nt,Gt,Ln){(Le!==nt||Xe!==Gt||bt!==Ln)&&(r.stencilOp(nt,Gt,Ln),Le=nt,Xe=Gt,bt=Ln)},setLocked:function(nt){I=nt},setClear:function(nt){Ht!==nt&&(r.clearStencil(nt),Ht=nt)},reset:function(){I=!1,_e=null,ae=null,$=null,ce=null,Le=null,Xe=null,bt=null,Ht=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,S=null,x=null,y=null,M=null,w=null,b=null,C=null,v=new Ke(0,0,0),T=0,O=!1,N=null,k=null,P=null,F=null,B=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,Z=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),ne=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ne=Z>=2);let re=null,ie={};const Y=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),me=new at().fromArray(Y),we=new at().fromArray(J);function Me(I,_e,ae,$){const ce=new Uint8Array(4),Le=r.createTexture();r.bindTexture(I,Le),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<ae;Xe++)n&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(_e,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(_e+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return Le}const Oe={};Oe[r.TEXTURE_2D]=Me(r.TEXTURE_2D,r.TEXTURE_2D,1),Oe[r.TEXTURE_CUBE_MAP]=Me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Oe[r.TEXTURE_2D_ARRAY]=Me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Oe[r.TEXTURE_3D]=Me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Be(r.DEPTH_TEST),l.setFunc(to),xe(!1),ye(tu),Be(r.CULL_FACE),te(pi);function Be(I){f[I]!==!0&&(r.enable(I),f[I]=!0)}function Ae(I){f[I]!==!1&&(r.disable(I),f[I]=!1)}function Ue(I,_e){return p[I]!==_e?(r.bindFramebuffer(I,_e),p[I]=_e,n&&(I===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=_e),I===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=_e)),!0):!1}function L(I,_e){let ae=_,$=!1;if(I)if(ae=g.get(_e),ae===void 0&&(ae=[],g.set(_e,ae)),I.isWebGLMultipleRenderTargets){const ce=I.texture;if(ae.length!==ce.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,Xe=ce.length;Le<Xe;Le++)ae[Le]=r.COLOR_ATTACHMENT0+Le;ae.length=ce.length,$=!0}}else ae[0]!==r.COLOR_ATTACHMENT0&&(ae[0]=r.COLOR_ATTACHMENT0,$=!0);else ae[0]!==r.BACK&&(ae[0]=r.BACK,$=!0);$&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function pe(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const K={[Bi]:r.FUNC_ADD,[Tp]:r.FUNC_SUBTRACT,[wp]:r.FUNC_REVERSE_SUBTRACT};if(n)K[su]=r.MIN,K[au]=r.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(K[su]=I.MIN_EXT,K[au]=I.MAX_EXT)}const he={[Ap]:r.ZERO,[Cp]:r.ONE,[Rp]:r.SRC_COLOR,[wl]:r.SRC_ALPHA,[Op]:r.SRC_ALPHA_SATURATE,[Up]:r.DST_COLOR,[Lp]:r.DST_ALPHA,[Pp]:r.ONE_MINUS_SRC_COLOR,[Al]:r.ONE_MINUS_SRC_ALPHA,[Ip]:r.ONE_MINUS_DST_COLOR,[Dp]:r.ONE_MINUS_DST_ALPHA,[Np]:r.CONSTANT_COLOR,[Fp]:r.ONE_MINUS_CONSTANT_COLOR,[Bp]:r.CONSTANT_ALPHA,[zp]:r.ONE_MINUS_CONSTANT_ALPHA};function te(I,_e,ae,$,ce,Le,Xe,bt,Ht,nt){if(I===pi){d===!0&&(Ae(r.BLEND),d=!1);return}if(d===!1&&(Be(r.BLEND),d=!0),I!==bp){if(I!==S||nt!==O){if((x!==Bi||w!==Bi)&&(r.blendEquation(r.FUNC_ADD),x=Bi,w=Bi),nt)switch(I){case Jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nu:r.blendFunc(r.ONE,r.ONE);break;case iu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ru:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case iu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ru:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,M=null,b=null,C=null,v.set(0,0,0),T=0,S=I,O=nt}return}ce=ce||_e,Le=Le||ae,Xe=Xe||$,(_e!==x||ce!==w)&&(r.blendEquationSeparate(K[_e],K[ce]),x=_e,w=ce),(ae!==y||$!==M||Le!==b||Xe!==C)&&(r.blendFuncSeparate(he[ae],he[$],he[Le],he[Xe]),y=ae,M=$,b=Le,C=Xe),(bt.equals(v)===!1||Ht!==T)&&(r.blendColor(bt.r,bt.g,bt.b,Ht),v.copy(bt),T=Ht),S=I,O=!1}function Ce(I,_e){I.side===wn?Ae(r.CULL_FACE):Be(r.CULL_FACE);let ae=I.side===Kt;_e&&(ae=!ae),xe(ae),I.blending===Jr&&I.transparent===!1?te(pi):te(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const $=I.stencilWrite;c.setTest($),$&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),je(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Be(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function xe(I){N!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),N=I)}function ye(I){I!==Sp?(Be(r.CULL_FACE),I!==k&&(I===tu?r.cullFace(r.BACK):I===Mp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),k=I}function Ie(I){I!==P&&(ne&&r.lineWidth(I),P=I)}function je(I,_e,ae){I?(Be(r.POLYGON_OFFSET_FILL),(F!==_e||B!==ae)&&(r.polygonOffset(_e,ae),F=_e,B=ae)):Ae(r.POLYGON_OFFSET_FILL)}function rt(I){I?Be(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function R(I){I===void 0&&(I=r.TEXTURE0+H-1),re!==I&&(r.activeTexture(I),re=I)}function E(I,_e,ae){ae===void 0&&(re===null?ae=r.TEXTURE0+H-1:ae=re);let $=ie[ae];$===void 0&&($={type:void 0,texture:void 0},ie[ae]=$),($.type!==I||$.texture!==_e)&&(re!==ae&&(r.activeTexture(ae),re=ae),r.bindTexture(I,_e||Oe[I]),$.type=I,$.texture=_e)}function V(){const I=ie[re];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function oe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){me.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),me.copy(I))}function De(I){we.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),we.copy(I))}function be(I,_e){let ae=h.get(_e);ae===void 0&&(ae=new WeakMap,h.set(_e,ae));let $=ae.get(I);$===void 0&&($=r.getUniformBlockIndex(_e,I.name),ae.set(I,$))}function Ee(I,_e){const $=h.get(_e).get(I);u.get(_e)!==$&&(r.uniformBlockBinding(_e,$,I.__bindingPointIndex),u.set(_e,$))}function We(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},re=null,ie={},p={},g=new WeakMap,_=[],m=null,d=!1,S=null,x=null,y=null,M=null,w=null,b=null,C=null,v=new Ke(0,0,0),T=0,O=!1,N=null,k=null,P=null,F=null,B=null,me.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Be,disable:Ae,bindFramebuffer:Ue,drawBuffers:L,useProgram:pe,setBlending:te,setMaterial:Ce,setFlipSided:xe,setCullFace:ye,setLineWidth:Ie,setPolygonOffset:je,setScissorTest:rt,activeTexture:R,bindTexture:E,unbindTexture:V,compressedTexImage2D:oe,compressedTexImage3D:se,texImage2D:ee,texImage3D:Ne,updateUBOMapping:be,uniformBlockBinding:Ee,texStorage2D:D,texStorage3D:de,texSubImage2D:le,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Re,viewport:De,reset:We}}function Ix(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,E){return d?new OffscreenCanvas(R,E):Ys("canvas")}function x(R,E,V,oe){let se=1;if((R.width>oe||R.height>oe)&&(se=oe/Math.max(R.width,R.height)),se<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const le=E?oo:Math.floor,Te=le(se*R.width),fe=le(se*R.height);_===void 0&&(_=S(Te,fe));const ve=V?S(Te,fe):_;return ve.width=Te,ve.height=fe,ve.getContext("2d").drawImage(R,0,0,Te,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Te+"x"+fe+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return Dl(R.width)&&Dl(R.height)}function M(R){return o?!1:R.wrapS!==ln||R.wrapT!==ln||R.minFilter!==Pt&&R.minFilter!==Dt}function w(R,E){return R.generateMipmaps&&E&&R.minFilter!==Pt&&R.minFilter!==Dt}function b(R){r.generateMipmap(R)}function C(R,E,V,oe,se=!1){if(o===!1)return E;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=E;if(E===r.RED&&(V===r.FLOAT&&(le=r.R32F),V===r.HALF_FLOAT&&(le=r.R16F),V===r.UNSIGNED_BYTE&&(le=r.R8)),E===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(le=r.R8UI),V===r.UNSIGNED_SHORT&&(le=r.R16UI),V===r.UNSIGNED_INT&&(le=r.R32UI),V===r.BYTE&&(le=r.R8I),V===r.SHORT&&(le=r.R16I),V===r.INT&&(le=r.R32I)),E===r.RG&&(V===r.FLOAT&&(le=r.RG32F),V===r.HALF_FLOAT&&(le=r.RG16F),V===r.UNSIGNED_BYTE&&(le=r.RG8)),E===r.RGBA){const Te=se?io:Je.getTransfer(oe);V===r.FLOAT&&(le=r.RGBA32F),V===r.HALF_FLOAT&&(le=r.RGBA16F),V===r.UNSIGNED_BYTE&&(le=Te===st?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(le=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(le=r.RGB5_A1)}return(le===r.R16F||le===r.R32F||le===r.RG16F||le===r.RG32F||le===r.RGBA16F||le===r.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function v(R,E,V){return w(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==Pt&&R.minFilter!==Dt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function T(R){return R===Pt||R===ou||R===Io?r.NEAREST:r.LINEAR}function O(R){const E=R.target;E.removeEventListener("dispose",O),k(E),E.isVideoTexture&&g.delete(E)}function N(R){const E=R.target;E.removeEventListener("dispose",N),F(E)}function k(R){const E=n.get(R);if(E.__webglInit===void 0)return;const V=R.source,oe=m.get(V);if(oe){const se=oe[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&P(R),Object.keys(oe).length===0&&m.delete(V)}n.remove(R)}function P(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const V=R.source,oe=m.get(V);delete oe[E.__cacheKey],a.memory.textures--}function F(R){const E=R.texture,V=n.get(R),oe=n.get(E);if(oe.__webglTexture!==void 0&&(r.deleteTexture(oe.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(V.__webglFramebuffer[se]))for(let le=0;le<V.__webglFramebuffer[se].length;le++)r.deleteFramebuffer(V.__webglFramebuffer[se][le]);else r.deleteFramebuffer(V.__webglFramebuffer[se]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[se])}else{if(Array.isArray(V.__webglFramebuffer))for(let se=0;se<V.__webglFramebuffer.length;se++)r.deleteFramebuffer(V.__webglFramebuffer[se]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let se=0;se<V.__webglColorRenderbuffer.length;se++)V.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[se]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let se=0,le=E.length;se<le;se++){const Te=n.get(E[se]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(E[se])}n.remove(E),n.remove(R)}let B=0;function H(){B=0}function ne(){const R=B;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),B+=1,R}function Z(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function j(R,E){const V=n.get(R);if(R.isVideoTexture&&je(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const oe=R.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(V,R,E);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+E)}function re(R,E){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Be(V,R,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+E)}function ie(R,E){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Be(V,R,E);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+E)}function Y(R,E){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Ae(V,R,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+E)}const J={[Rl]:r.REPEAT,[ln]:r.CLAMP_TO_EDGE,[Pl]:r.MIRRORED_REPEAT},me={[Pt]:r.NEAREST,[ou]:r.NEAREST_MIPMAP_NEAREST,[Io]:r.NEAREST_MIPMAP_LINEAR,[Dt]:r.LINEAR,[em]:r.LINEAR_MIPMAP_NEAREST,[os]:r.LINEAR_MIPMAP_LINEAR},we={[fm]:r.NEVER,[vm]:r.ALWAYS,[dm]:r.LESS,[xf]:r.LEQUAL,[pm]:r.EQUAL,[gm]:r.GEQUAL,[mm]:r.GREATER,[_m]:r.NOTEQUAL};function Me(R,E,V){if(V?(r.texParameteri(R,r.TEXTURE_WRAP_S,J[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,J[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,J[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,me[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,me[E.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==ln||E.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,T(E.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==Pt&&E.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,we[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Pt||E.minFilter!==Io&&E.minFilter!==os||E.type===Cn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ei&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(R,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Oe(R,E){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",O));const oe=E.source;let se=m.get(oe);se===void 0&&(se={},m.set(oe,se));const le=Z(E);if(le!==R.__cacheKey){se[le]===void 0&&(se[le]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),se[le].usedTimes++;const Te=se[R.__cacheKey];Te!==void 0&&(se[R.__cacheKey].usedTimes--,Te.usedTimes===0&&P(E)),R.__cacheKey=le,R.__webglTexture=se[le].texture}return V}function Be(R,E,V){let oe=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=r.TEXTURE_3D);const se=Oe(R,E),le=E.source;t.bindTexture(oe,R.__webglTexture,r.TEXTURE0+V);const Te=n.get(le);if(le.version!==Te.__version||se===!0){t.activeTexture(r.TEXTURE0+V);const fe=Je.getPrimaries(Je.workingColorSpace),ve=E.colorSpace===vn?null:Je.getPrimaries(E.colorSpace),D=E.colorSpace===vn||fe===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const de=M(E)&&y(E.image)===!1;let ee=x(E.image,de,!1,u);ee=rt(E,ee);const Ne=y(ee)||o,Re=s.convert(E.format,E.colorSpace);let De=s.convert(E.type),be=C(E.internalFormat,Re,De,E.colorSpace,E.isVideoTexture);Me(oe,E,Ne);let Ee;const We=E.mipmaps,I=o&&E.isVideoTexture!==!0&&be!==gf,_e=Te.__version===void 0||se===!0,ae=v(E,ee,Ne);if(E.isDepthTexture)be=r.DEPTH_COMPONENT,o?E.type===Cn?be=r.DEPTH_COMPONENT32F:E.type===ui?be=r.DEPTH_COMPONENT24:E.type===Gi?be=r.DEPTH24_STENCIL8:be=r.DEPTH_COMPONENT16:E.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Vi&&be===r.DEPTH_COMPONENT&&E.type!==cc&&E.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ui,De=s.convert(E.type)),E.format===ls&&be===r.DEPTH_COMPONENT&&(be=r.DEPTH_STENCIL,E.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Gi,De=s.convert(E.type))),_e&&(I?t.texStorage2D(r.TEXTURE_2D,1,be,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,be,ee.width,ee.height,0,Re,De,null));else if(E.isDataTexture)if(We.length>0&&Ne){I&&_e&&t.texStorage2D(r.TEXTURE_2D,ae,be,We[0].width,We[0].height);for(let $=0,ce=We.length;$<ce;$++)Ee=We[$],I?t.texSubImage2D(r.TEXTURE_2D,$,0,0,Ee.width,Ee.height,Re,De,Ee.data):t.texImage2D(r.TEXTURE_2D,$,be,Ee.width,Ee.height,0,Re,De,Ee.data);E.generateMipmaps=!1}else I?(_e&&t.texStorage2D(r.TEXTURE_2D,ae,be,ee.width,ee.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,Re,De,ee.data)):t.texImage2D(r.TEXTURE_2D,0,be,ee.width,ee.height,0,Re,De,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){I&&_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,be,We[0].width,We[0].height,ee.depth);for(let $=0,ce=We.length;$<ce;$++)Ee=We[$],E.format!==An?Re!==null?I?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Ee.width,Ee.height,ee.depth,Re,Ee.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,be,Ee.width,Ee.height,ee.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Ee.width,Ee.height,ee.depth,Re,De,Ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,be,Ee.width,Ee.height,ee.depth,0,Re,De,Ee.data)}else{I&&_e&&t.texStorage2D(r.TEXTURE_2D,ae,be,We[0].width,We[0].height);for(let $=0,ce=We.length;$<ce;$++)Ee=We[$],E.format!==An?Re!==null?I?t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,Ee.width,Ee.height,Re,Ee.data):t.compressedTexImage2D(r.TEXTURE_2D,$,be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(r.TEXTURE_2D,$,0,0,Ee.width,Ee.height,Re,De,Ee.data):t.texImage2D(r.TEXTURE_2D,$,be,Ee.width,Ee.height,0,Re,De,Ee.data)}else if(E.isDataArrayTexture)I?(_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,be,ee.width,ee.height,ee.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Re,De,ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,ee.width,ee.height,ee.depth,0,Re,De,ee.data);else if(E.isData3DTexture)I?(_e&&t.texStorage3D(r.TEXTURE_3D,ae,be,ee.width,ee.height,ee.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Re,De,ee.data)):t.texImage3D(r.TEXTURE_3D,0,be,ee.width,ee.height,ee.depth,0,Re,De,ee.data);else if(E.isFramebufferTexture){if(_e)if(I)t.texStorage2D(r.TEXTURE_2D,ae,be,ee.width,ee.height);else{let $=ee.width,ce=ee.height;for(let Le=0;Le<ae;Le++)t.texImage2D(r.TEXTURE_2D,Le,be,$,ce,0,Re,De,null),$>>=1,ce>>=1}}else if(We.length>0&&Ne){I&&_e&&t.texStorage2D(r.TEXTURE_2D,ae,be,We[0].width,We[0].height);for(let $=0,ce=We.length;$<ce;$++)Ee=We[$],I?t.texSubImage2D(r.TEXTURE_2D,$,0,0,Re,De,Ee):t.texImage2D(r.TEXTURE_2D,$,be,Re,De,Ee);E.generateMipmaps=!1}else I?(_e&&t.texStorage2D(r.TEXTURE_2D,ae,be,ee.width,ee.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,De,ee)):t.texImage2D(r.TEXTURE_2D,0,be,Re,De,ee);w(E,Ne)&&b(oe),Te.__version=le.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ae(R,E,V){if(E.image.length!==6)return;const oe=Oe(R,E),se=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+V);const le=n.get(se);if(se.version!==le.__version||oe===!0){t.activeTexture(r.TEXTURE0+V);const Te=Je.getPrimaries(Je.workingColorSpace),fe=E.colorSpace===vn?null:Je.getPrimaries(E.colorSpace),ve=E.colorSpace===vn||Te===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const D=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let $=0;$<6;$++)!D&&!de?ee[$]=x(E.image[$],!1,!0,c):ee[$]=de?E.image[$].image:E.image[$],ee[$]=rt(E,ee[$]);const Ne=ee[0],Re=y(Ne)||o,De=s.convert(E.format,E.colorSpace),be=s.convert(E.type),Ee=C(E.internalFormat,De,be,E.colorSpace),We=o&&E.isVideoTexture!==!0,I=le.__version===void 0||oe===!0;let _e=v(E,Ne,Re);Me(r.TEXTURE_CUBE_MAP,E,Re);let ae;if(D){We&&I&&t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,Ee,Ne.width,Ne.height);for(let $=0;$<6;$++){ae=ee[$].mipmaps;for(let ce=0;ce<ae.length;ce++){const Le=ae[ce];E.format!==An?De!==null?We?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,Le.width,Le.height,De,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,Ee,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,Le.width,Le.height,De,be,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,Ee,Le.width,Le.height,0,De,be,Le.data)}}}else{ae=E.mipmaps,We&&I&&(ae.length>0&&_e++,t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,Ee,ee[0].width,ee[0].height));for(let $=0;$<6;$++)if(de){We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ee[$].width,ee[$].height,De,be,ee[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ee,ee[$].width,ee[$].height,0,De,be,ee[$].data);for(let ce=0;ce<ae.length;ce++){const Xe=ae[ce].image[$].image;We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Xe.width,Xe.height,De,be,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,Ee,Xe.width,Xe.height,0,De,be,Xe.data)}}else{We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,De,be,ee[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ee,De,be,ee[$]);for(let ce=0;ce<ae.length;ce++){const Le=ae[ce];We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,De,be,Le.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,Ee,De,be,Le.image[$])}}}w(E,Re)&&b(r.TEXTURE_CUBE_MAP),le.__version=se.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ue(R,E,V,oe,se,le){const Te=s.convert(V.format,V.colorSpace),fe=s.convert(V.type),ve=C(V.internalFormat,Te,fe,V.colorSpace);if(!n.get(E).__hasExternalTextures){const de=Math.max(1,E.width>>le),ee=Math.max(1,E.height>>le);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,le,ve,de,ee,E.depth,0,Te,fe,null):t.texImage2D(se,le,ve,de,ee,0,Te,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ie(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,se,n.get(V).__webglTexture,0,ye(E)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,se,n.get(V).__webglTexture,le),t.bindFramebuffer(r.FRAMEBUFFER,null)}function L(R,E,V){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let oe=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(V||Ie(E)){const se=E.depthTexture;se&&se.isDepthTexture&&(se.type===Cn?oe=r.DEPTH_COMPONENT32F:se.type===ui&&(oe=r.DEPTH_COMPONENT24));const le=ye(E);Ie(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,oe,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,le,oe,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,oe,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const oe=ye(E);V&&Ie(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,E.width,E.height):Ie(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const oe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let se=0;se<oe.length;se++){const le=oe[se],Te=s.convert(le.format,le.colorSpace),fe=s.convert(le.type),ve=C(le.internalFormat,Te,fe,le.colorSpace),D=ye(E);V&&Ie(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,D,ve,E.width,E.height):Ie(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D,ve,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ve,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const oe=n.get(E.depthTexture).__webglTexture,se=ye(E);if(E.depthTexture.format===Vi)Ie(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(E.depthTexture.format===ls)Ie(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function K(R){const E=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,R)}else if(V){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]=r.createRenderbuffer(),L(E.__webglDepthbuffer[oe],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),L(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function he(R,E,V){const oe=n.get(R);E!==void 0&&Ue(oe.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&K(R)}function te(R){const E=R.texture,V=n.get(R),oe=n.get(E);R.addEventListener("dispose",N),R.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=E.version,a.memory.textures++);const se=R.isWebGLCubeRenderTarget===!0,le=R.isWebGLMultipleRenderTargets===!0,Te=y(R)||o;if(se){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let ve=0;ve<E.mipmaps.length;ve++)V.__webglFramebuffer[fe][ve]=r.createFramebuffer()}else V.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)V.__webglFramebuffer[fe]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(le)if(i.drawBuffers){const fe=R.texture;for(let ve=0,D=fe.length;ve<D;ve++){const de=n.get(fe[ve]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ie(R)===!1){const fe=le?E:[E];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ve=0;ve<fe.length;ve++){const D=fe[ve];V.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[ve]);const de=s.convert(D.format,D.colorSpace),ee=s.convert(D.type),Ne=C(D.internalFormat,de,ee,D.colorSpace,R.isXRRenderTarget===!0),Re=ye(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,Ne,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,V.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),L(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),Me(r.TEXTURE_CUBE_MAP,E,Te);for(let fe=0;fe<6;fe++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)Ue(V.__webglFramebuffer[fe][ve],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Ue(V.__webglFramebuffer[fe],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);w(E,Te)&&b(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const fe=R.texture;for(let ve=0,D=fe.length;ve<D;ve++){const de=fe[ve],ee=n.get(de);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),Me(r.TEXTURE_2D,de,Te),Ue(V.__webglFramebuffer,R,de,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,0),w(de,Te)&&b(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?fe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,oe.__webglTexture),Me(fe,E,Te),o&&E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)Ue(V.__webglFramebuffer[ve],R,E,r.COLOR_ATTACHMENT0,fe,ve);else Ue(V.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,fe,0);w(E,Te)&&b(fe),t.unbindTexture()}R.depthBuffer&&K(R)}function Ce(R){const E=y(R)||o,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let oe=0,se=V.length;oe<se;oe++){const le=V[oe];if(w(le,E)){const Te=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,fe=n.get(le).__webglTexture;t.bindTexture(Te,fe),b(Te),t.unbindTexture()}}}function xe(R){if(o&&R.samples>0&&Ie(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,oe=R.height;let se=r.COLOR_BUFFER_BIT;const le=[],Te=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=n.get(R),ve=R.isWebGLMultipleRenderTargets===!0;if(ve)for(let D=0;D<E.length;D++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let D=0;D<E.length;D++){le.push(r.COLOR_ATTACHMENT0+D),R.depthBuffer&&le.push(Te);const de=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(de===!1&&(R.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),ve&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[D]),de===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Te]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Te])),ve){const ee=n.get(E[D]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,V,oe,0,0,V,oe,se,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let D=0;D<E.length;D++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,fe.__webglColorRenderbuffer[D]);const de=n.get(E[D]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,de,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function ye(R){return Math.min(h,R.samples)}function Ie(R){const E=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function je(R){const E=a.render.frame;g.get(R)!==E&&(g.set(R,E),R.update())}function rt(R,E){const V=R.colorSpace,oe=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ll||V!==Bn&&V!==vn&&(Je.getTransfer(V)===st?o===!1?e.has("EXT_sRGB")===!0&&oe===An?(R.format=Ll,R.minFilter=Dt,R.generateMipmaps=!1):E=Sf.sRGBToLinear(E):(oe!==An||se!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=ne,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=re,this.setTexture3D=ie,this.setTextureCube=Y,this.rebindTextures=he,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ie}function Ox(r,e,t){const n=t.isWebGL2;function i(s,a=vn){let o;const l=Je.getTransfer(a);if(s===_i)return r.UNSIGNED_BYTE;if(s===ff)return r.UNSIGNED_SHORT_4_4_4_4;if(s===df)return r.UNSIGNED_SHORT_5_5_5_1;if(s===tm)return r.BYTE;if(s===nm)return r.SHORT;if(s===cc)return r.UNSIGNED_SHORT;if(s===hf)return r.INT;if(s===ui)return r.UNSIGNED_INT;if(s===Cn)return r.FLOAT;if(s===ei)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===im)return r.ALPHA;if(s===An)return r.RGBA;if(s===rm)return r.LUMINANCE;if(s===sm)return r.LUMINANCE_ALPHA;if(s===Vi)return r.DEPTH_COMPONENT;if(s===ls)return r.DEPTH_STENCIL;if(s===Ll)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===am)return r.RED;if(s===pf)return r.RED_INTEGER;if(s===om)return r.RG;if(s===mf)return r.RG_INTEGER;if(s===_f)return r.RGBA_INTEGER;if(s===Oo||s===No||s===Fo||s===Bo)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Oo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Oo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===No)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lu||s===cu||s===uu||s===hu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===lu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===uu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===fu||s===du)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===fu)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===du)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pu||s===mu||s===_u||s===gu||s===vu||s===xu||s===yu||s===Su||s===Mu||s===Eu||s===bu||s===Tu||s===wu||s===Au)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===pu)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mu)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_u)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gu)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vu)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xu)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yu)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Su)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mu)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Eu)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bu)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tu)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wu)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Au)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zo||s===Cu||s===Ru)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===zo)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ru)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lm||s===Pu||s===Lu||s===Du)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===zo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Pu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Du)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gi?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Nx extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $t extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fx={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Bx extends ir{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const S=[],x=[],y=new ue;let M=null;const w=new on;w.layers.enable(1),w.viewport=new at;const b=new on;b.layers.enable(2),b.viewport=new at;const C=[w,b],v=new Nx;v.layers.enable(1),v.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=S[Y];return J===void 0&&(J=new ll,S[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=S[Y];return J===void 0&&(J=new ll,S[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=S[Y];return J===void 0&&(J=new ll,S[Y]=J),J.getHandSpace()};function N(Y){const J=x.indexOf(Y.inputSource);if(J===-1)return;const me=S[J];me!==void 0&&(me.update(Y.inputSource,Y.frame,c||a),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",P);for(let Y=0;Y<S.length;Y++){const J=x[Y];J!==null&&(x[Y]=null,S[Y].disconnect(J))}T=null,O=null,e.setRenderTarget(m),p=null,f=null,h=null,i=null,d=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",k),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Zi(p.framebufferWidth,p.framebufferHeight,{format:An,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,me=null,we=null;_.depth&&(we=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?ls:Vi,me=_.stencil?Gi:ui);const Me={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Me),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Zi(f.textureWidth,f.textureHeight,{format:An,type:_i,depthTexture:new If(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Oe=e.properties.get(d);Oe.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(Y){for(let J=0;J<Y.removed.length;J++){const me=Y.removed[J],we=x.indexOf(me);we>=0&&(x[we]=null,S[we].disconnect(me))}for(let J=0;J<Y.added.length;J++){const me=Y.added[J];let we=x.indexOf(me);if(we===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=x.length){x.push(me),we=Oe;break}else if(x[Oe]===null){x[Oe]=me,we=Oe;break}if(we===-1)break}const Me=S[we];Me&&Me.connect(me)}}const F=new U,B=new U;function H(Y,J,me){F.setFromMatrixPosition(J.matrixWorld),B.setFromMatrixPosition(me.matrixWorld);const we=F.distanceTo(B),Me=J.projectionMatrix.elements,Oe=me.projectionMatrix.elements,Be=Me[14]/(Me[10]-1),Ae=Me[14]/(Me[10]+1),Ue=(Me[9]+1)/Me[5],L=(Me[9]-1)/Me[5],pe=(Me[8]-1)/Me[0],K=(Oe[8]+1)/Oe[0],he=Be*pe,te=Be*K,Ce=we/(-pe+K),xe=Ce*-pe;J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xe),Y.translateZ(Ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const ye=Be+Ce,Ie=Ae+Ce,je=he-xe,rt=te+(we-xe),R=Ue*Ae/Ie*ye,E=L*Ae/Ie*ye;Y.projectionMatrix.makePerspective(je,rt,R,E,ye,Ie),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ne(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;v.near=b.near=w.near=Y.near,v.far=b.far=w.far=Y.far,(T!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,O=v.far);const J=Y.parent,me=v.cameras;ne(v,J);for(let we=0;we<me.length;we++)ne(me[we],J);me.length===2?H(v,w,b):v.projectionMatrix.copy(w.projectionMatrix),Z(Y,v,J)};function Z(Y,J,me){me===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let j=null;function re(Y,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let we=!1;me.length!==v.cameras.length&&(v.cameras.length=0,we=!0);for(let Me=0;Me<me.length;Me++){const Oe=me[Me];let Be=null;if(p!==null)Be=p.getViewport(Oe);else{const Ue=h.getViewSubImage(f,Oe);Be=Ue.viewport,Me===0&&(e.setRenderTargetTextures(d,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(d))}let Ae=C[Me];Ae===void 0&&(Ae=new on,Ae.layers.enable(Me),Ae.viewport=new at,C[Me]=Ae),Ae.matrix.fromArray(Oe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Oe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Be.x,Be.y,Be.width,Be.height),Me===0&&(v.matrix.copy(Ae.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),we===!0&&v.cameras.push(Ae)}}for(let me=0;me<S.length;me++){const we=x[me],Me=S[me];we!==null&&Me!==void 0&&Me.update(we,J,c||a)}j&&j(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ie=new Df;ie.setAnimationLoop(re),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}}function zx(r,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Rf(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,S,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,S,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=e.get(d).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Kt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kx(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){const y=x.program;n.uniformBlockBinding(S,y)}function c(S,x){let y=i[S.id];y===void 0&&(g(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(S,M);const w=e.render.frame;s[S.id]!==w&&(f(S),s[S.id]=w)}function u(S){const x=h();S.__bindingPointIndex=x;const y=r.createBuffer(),M=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,M,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],y=S.uniforms,M=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,b=y.length;w<b;w++){const C=y[w];if(p(C,w,M)===!0){const v=C.__offset,T=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let N=0;N<T.length;N++){const k=T[N],P=_(k);typeof k=="number"?(C.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,v+O,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=k.elements[0],C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=k.elements[0],C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=k.elements[0]):(k.toArray(C.__data,O),O+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,v,C.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(S,x,y){const M=S.value;if(y[x]===void 0){if(typeof M=="number")y[x]=M;else{const w=Array.isArray(M)?M:[M],b=[];for(let C=0;C<w.length;C++)b.push(w[C].clone());y[x]=b}return!0}else if(typeof M=="number"){if(y[x]!==M)return y[x]=M,!0}else{const w=Array.isArray(y[x])?y[x]:[y[x]],b=Array.isArray(M)?M:[M];for(let C=0;C<w.length;C++){const v=w[C];if(v.equals(b[C])===!1)return v.copy(b[C]),!0}}return!1}function g(S){const x=S.uniforms;let y=0;const M=16;let w=0;for(let b=0,C=x.length;b<C;b++){const v=x[b],T={boundary:0,storage:0},O=Array.isArray(v.value)?v.value:[v.value];for(let N=0,k=O.length;N<k;N++){const P=O[N],F=_(P);T.boundary+=F.boundary,T.storage+=F.storage}if(v.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=y,b>0){w=y%M;const N=M-w;w!==0&&N-T.boundary<0&&(y+=M-w,v.__offset=y)}y+=T.storage}return w=y%M,w>0&&(y+=M-w),S.__size=y,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}class kf{constructor(e={}){const{canvas:t=Im(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const x=this;let y=!1,M=0,w=0,b=null,C=-1,v=null;const T=new at,O=new at;let N=null;const k=new Ke(0);let P=0,F=t.width,B=t.height,H=1,ne=null,Z=null;const j=new at(0,0,F,B),re=new at(0,0,F,B);let ie=!1;const Y=new mc;let J=!1,me=!1,we=null;const Me=new gt,Oe=new ue,Be=new U,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return b===null?H:1}let L=n;function pe(A,z){for(let X=0;X<A.length;X++){const q=A[X],W=t.getContext(q,z);if(W!==null)return W}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",_e,!1),L===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),L=pe(z,A),L===null)throw pe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,he,te,Ce,xe,ye,Ie,je,rt,R,E,V,oe,se,le,Te,fe,ve,D,de,ee,Ne,Re,De;function be(){K=new Z0(L),he=new X0(L,K,e),K.init(he),Ne=new Ox(L,K,he),te=new Ux(L,K,he),Ce=new ev(L),xe=new xx,ye=new Ix(L,K,te,xe,he,Ne,Ce),Ie=new q0(x),je=new K0(x),rt=new l_(L,he),Re=new V0(L,K,rt,he),R=new J0(L,rt,Ce,Re),E=new rv(L,R,rt,Ce),D=new iv(L,he,ye),Te=new Y0(xe),V=new vx(x,Ie,je,K,he,Re,Te),oe=new zx(x,xe),se=new Sx,le=new Ax(K,he),ve=new G0(x,Ie,je,te,E,f,l),fe=new Dx(x,E,he),De=new kx(L,Ce,he,te),de=new W0(L,K,Ce,he),ee=new Q0(L,K,Ce,he),Ce.programs=V.programs,x.capabilities=he,x.extensions=K,x.properties=xe,x.renderLists=se,x.shadowMap=fe,x.state=te,x.info=Ce}be();const Ee=new Bx(x,L);this.xr=Ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(F,B,!1))},this.getSize=function(A){return A.set(F,B)},this.setSize=function(A,z,X=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,B=z,t.width=Math.floor(A*H),t.height=Math.floor(z*H),X===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(F*H,B*H).floor()},this.setDrawingBufferSize=function(A,z,X){F=A,B=z,H=X,t.width=Math.floor(A*X),t.height=Math.floor(z*X),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,z,X,q){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,z,X,q),te.viewport(T.copy(j).multiplyScalar(H).floor())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,z,X,q){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,z,X,q),te.scissor(O.copy(re).multiplyScalar(H).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(A){te.setScissorTest(ie=A)},this.setOpaqueSort=function(A){ne=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(A=!0,z=!0,X=!0){let q=0;if(A){let W=!1;if(b!==null){const Se=b.texture.format;W=Se===_f||Se===mf||Se===pf}if(W){const Se=b.texture.type,Pe=Se===_i||Se===ui||Se===cc||Se===Gi||Se===ff||Se===df,Fe=ve.getClearColor(),ze=ve.getClearAlpha(),Ve=Fe.r,ke=Fe.g,He=Fe.b;Pe?(p[0]=Ve,p[1]=ke,p[2]=He,p[3]=ze,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=Ve,g[1]=ke,g[2]=He,g[3]=ze,L.clearBufferiv(L.COLOR,0,g))}else q|=L.COLOR_BUFFER_BIT}z&&(q|=L.DEPTH_BUFFER_BIT),X&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),se.dispose(),le.dispose(),xe.dispose(),Ie.dispose(),je.dispose(),E.dispose(),Re.dispose(),De.dispose(),V.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ht),Ee.removeEventListener("sessionend",nt),we&&(we.dispose(),we=null),Gt.stop()};function We(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Ce.autoReset,z=fe.enabled,X=fe.autoUpdate,q=fe.needsUpdate,W=fe.type;be(),Ce.autoReset=A,fe.enabled=z,fe.autoUpdate=X,fe.needsUpdate=q,fe.type=W}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const z=A.target;z.removeEventListener("dispose",ae),$(z)}function $(A){ce(A),xe.remove(A)}function ce(A){const z=xe.get(A).programs;z!==void 0&&(z.forEach(function(X){V.releaseProgram(X)}),A.isShaderMaterial&&V.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,X,q,W,Se){z===null&&(z=Ae);const Pe=W.isMesh&&W.matrixWorld.determinant()<0,Fe=gp(A,z,X,q,W);te.setMaterial(q,Pe);let ze=X.index,Ve=1;if(q.wireframe===!0){if(ze=R.getWireframeAttribute(X),ze===void 0)return;Ve=2}const ke=X.drawRange,He=X.attributes.position;let mt=ke.start*Ve,nn=(ke.start+ke.count)*Ve;Se!==null&&(mt=Math.max(mt,Se.start*Ve),nn=Math.min(nn,(Se.start+Se.count)*Ve)),ze!==null?(mt=Math.max(mt,0),nn=Math.min(nn,ze.count)):He!=null&&(mt=Math.max(mt,0),nn=Math.min(nn,He.count));const Tt=nn-mt;if(Tt<0||Tt===1/0)return;Re.setup(W,q,Fe,X,ze);let Vn,lt=de;if(ze!==null&&(Vn=rt.get(ze),lt=ee,lt.setIndex(Vn)),W.isMesh)q.wireframe===!0?(te.setLineWidth(q.wireframeLinewidth*Ue()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if(W.isLine){let Ye=q.linewidth;Ye===void 0&&(Ye=1),te.setLineWidth(Ye*Ue()),W.isLineSegments?lt.setMode(L.LINES):W.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else W.isPoints?lt.setMode(L.POINTS):W.isSprite&&lt.setMode(L.TRIANGLES);if(W.isBatchedMesh)lt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)lt.renderInstances(mt,Tt,W.count);else if(X.isInstancedBufferGeometry){const Ye=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Po=Math.min(X.instanceCount,Ye);lt.renderInstances(mt,Tt,Po)}else lt.render(mt,Tt)};function Le(A,z,X){A.transparent===!0&&A.side===wn&&A.forceSinglePass===!1?(A.side=Kt,A.needsUpdate=!0,xa(A,z,X),A.side=xi,A.needsUpdate=!0,xa(A,z,X),A.side=wn):xa(A,z,X)}this.compile=function(A,z,X=null){X===null&&(X=A),m=le.get(X),m.init(),S.push(m),X.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),A!==X&&A.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(x._useLegacyLights);const q=new Set;return A.traverse(function(W){const Se=W.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Fe=Se[Pe];Le(Fe,X,W),q.add(Fe)}else Le(Se,X,W),q.add(Se)}),S.pop(),m=null,q},this.compileAsync=function(A,z,X=null){const q=this.compile(A,z,X);return new Promise(W=>{function Se(){if(q.forEach(function(Pe){xe.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){W(A);return}setTimeout(Se,10)}K.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Xe=null;function bt(A){Xe&&Xe(A)}function Ht(){Gt.stop()}function nt(){Gt.start()}const Gt=new Df;Gt.setAnimationLoop(bt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(A){Xe=A,Ee.setAnimationLoop(A),A===null?Gt.stop():Gt.start()},Ee.addEventListener("sessionstart",Ht),Ee.addEventListener("sessionend",nt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(z),z=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,z,b),m=le.get(A,S.length),m.init(),S.push(m),Me.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(Me),me=this.localClippingEnabled,J=Te.init(this.clippingPlanes,me),_=se.get(A,d.length),_.init(),d.push(_),Ln(A,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(ne,Z),this.info.render.frame++,J===!0&&Te.beginShadows();const X=m.state.shadowsArray;if(fe.render(X,A,z),J===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(_,A),m.setupLights(x._useLegacyLights),z.isArrayCamera){const q=z.cameras;for(let W=0,Se=q.length;W<Se;W++){const Pe=q[W];$c(_,A,Pe,Pe.viewport)}}else $c(_,A,z);b!==null&&(ye.updateMultisampleRenderTarget(b),ye.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(x,A,z),Re.resetDefaultState(),C=-1,v=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Ln(A,z,X,q){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){q&&Be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const Pe=E.update(A),Fe=A.material;Fe.visible&&_.push(A,Pe,Fe,X,Be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Pe=E.update(A),Fe=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Be.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Be.copy(Pe.boundingSphere.center)),Be.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Fe)){const ze=Pe.groups;for(let Ve=0,ke=ze.length;Ve<ke;Ve++){const He=ze[Ve],mt=Fe[He.materialIndex];mt&&mt.visible&&_.push(A,Pe,mt,X,Be.z,He)}}else Fe.visible&&_.push(A,Pe,Fe,X,Be.z,null)}}const Se=A.children;for(let Pe=0,Fe=Se.length;Pe<Fe;Pe++)Ln(Se[Pe],z,X,q)}function $c(A,z,X,q){const W=A.opaque,Se=A.transmissive,Pe=A.transparent;m.setupLightsView(X),J===!0&&Te.setGlobalState(x.clippingPlanes,X),Se.length>0&&_p(W,Se,z,X),q&&te.viewport(T.copy(q)),W.length>0&&va(W,z,X),Se.length>0&&va(Se,z,X),Pe.length>0&&va(Pe,z,X),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function _p(A,z,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Se=he.isWebGL2;we===null&&(we=new Zi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?ei:_i,minFilter:os,samples:Se?4:0})),x.getDrawingBufferSize(Oe),Se?we.setSize(Oe.x,Oe.y):we.setSize(oo(Oe.x),oo(Oe.y));const Pe=x.getRenderTarget();x.setRenderTarget(we),x.getClearColor(k),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Fe=x.toneMapping;x.toneMapping=mi,va(A,X,q),ye.updateMultisampleRenderTarget(we),ye.updateRenderTargetMipmap(we);let ze=!1;for(let Ve=0,ke=z.length;Ve<ke;Ve++){const He=z[Ve],mt=He.object,nn=He.geometry,Tt=He.material,Vn=He.group;if(Tt.side===wn&&mt.layers.test(q.layers)){const lt=Tt.side;Tt.side=Kt,Tt.needsUpdate=!0,Kc(mt,X,q,nn,Tt,Vn),Tt.side=lt,Tt.needsUpdate=!0,ze=!0}}ze===!0&&(ye.updateMultisampleRenderTarget(we),ye.updateRenderTargetMipmap(we)),x.setRenderTarget(Pe),x.setClearColor(k,P),x.toneMapping=Fe}function va(A,z,X){const q=z.isScene===!0?z.overrideMaterial:null;for(let W=0,Se=A.length;W<Se;W++){const Pe=A[W],Fe=Pe.object,ze=Pe.geometry,Ve=q===null?Pe.material:q,ke=Pe.group;Fe.layers.test(X.layers)&&Kc(Fe,z,X,ze,Ve,ke)}}function Kc(A,z,X,q,W,Se){A.onBeforeRender(x,z,X,q,W,Se),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(x,z,X,q,A,Se),W.transparent===!0&&W.side===wn&&W.forceSinglePass===!1?(W.side=Kt,W.needsUpdate=!0,x.renderBufferDirect(X,z,q,W,A,Se),W.side=xi,W.needsUpdate=!0,x.renderBufferDirect(X,z,q,W,A,Se),W.side=wn):x.renderBufferDirect(X,z,q,W,A,Se),A.onAfterRender(x,z,X,q,W,Se)}function xa(A,z,X){z.isScene!==!0&&(z=Ae);const q=xe.get(A),W=m.state.lights,Se=m.state.shadowsArray,Pe=W.state.version,Fe=V.getParameters(A,W.state,Se,z,X),ze=V.getProgramCacheKey(Fe);let Ve=q.programs;q.environment=A.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(A.isMeshStandardMaterial?je:Ie).get(A.envMap||q.environment),Ve===void 0&&(A.addEventListener("dispose",ae),Ve=new Map,q.programs=Ve);let ke=Ve.get(ze);if(ke!==void 0){if(q.currentProgram===ke&&q.lightsStateVersion===Pe)return Jc(A,Fe),ke}else Fe.uniforms=V.getUniforms(A),A.onBuild(X,Fe,x),A.onBeforeCompile(Fe,x),ke=V.acquireProgram(Fe,ze),Ve.set(ze,ke),q.uniforms=Fe.uniforms;const He=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Te.uniform),Jc(A,Fe),q.needsLights=xp(A),q.lightsStateVersion=Pe,q.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.directionalShadowMap.value=W.state.directionalShadowMap,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotShadowMap.value=W.state.spotShadowMap,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMap.value=W.state.pointShadowMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=ke,q.uniformsList=null,ke}function Zc(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Ka.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Jc(A,z){const X=xe.get(A);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function gp(A,z,X,q,W){z.isScene!==!0&&(z=Ae),ye.resetTextureUnits();const Se=z.fog,Pe=q.isMeshStandardMaterial?z.environment:null,Fe=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Bn,ze=(q.isMeshStandardMaterial?je:Ie).get(q.envMap||Pe),Ve=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!X.morphAttributes.position,mt=!!X.morphAttributes.normal,nn=!!X.morphAttributes.color;let Tt=mi;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const Vn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,lt=Vn!==void 0?Vn.length:0,Ye=xe.get(q),Po=m.state.lights;if(J===!0&&(me===!0||A!==v)){const pn=A===v&&q.id===C;Te.setState(q,A,pn)}let ft=!1;q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Po.state.version||Ye.outputColorSpace!==Fe||W.isBatchedMesh&&Ye.batching===!1||!W.isBatchedMesh&&Ye.batching===!0||W.isInstancedMesh&&Ye.instancing===!1||!W.isInstancedMesh&&Ye.instancing===!0||W.isSkinnedMesh&&Ye.skinning===!1||!W.isSkinnedMesh&&Ye.skinning===!0||W.isInstancedMesh&&Ye.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ye.instancingColor===!1&&W.instanceColor!==null||Ye.envMap!==ze||q.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Te.numPlanes||Ye.numIntersection!==Te.numIntersection)||Ye.vertexAlphas!==Ve||Ye.vertexTangents!==ke||Ye.morphTargets!==He||Ye.morphNormals!==mt||Ye.morphColors!==nn||Ye.toneMapping!==Tt||he.isWebGL2===!0&&Ye.morphTargetsCount!==lt)&&(ft=!0):(ft=!0,Ye.__version=q.version);let Ci=Ye.currentProgram;ft===!0&&(Ci=xa(q,z,W));let Qc=!1,Ms=!1,Lo=!1;const Ut=Ci.getUniforms(),Ri=Ye.uniforms;if(te.useProgram(Ci.program)&&(Qc=!0,Ms=!0,Lo=!0),q.id!==C&&(C=q.id,Ms=!0),Qc||v!==A){Ut.setValue(L,"projectionMatrix",A.projectionMatrix),Ut.setValue(L,"viewMatrix",A.matrixWorldInverse);const pn=Ut.map.cameraPosition;pn!==void 0&&pn.setValue(L,Be.setFromMatrixPosition(A.matrixWorld)),he.logarithmicDepthBuffer&&Ut.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ut.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,Ms=!0,Lo=!0)}if(W.isSkinnedMesh){Ut.setOptional(L,W,"bindMatrix"),Ut.setOptional(L,W,"bindMatrixInverse");const pn=W.skeleton;pn&&(he.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Ut.setValue(L,"boneTexture",pn.boneTexture,ye)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Ut.setOptional(L,W,"batchingTexture"),Ut.setValue(L,"batchingTexture",W._matricesTexture,ye));const Do=X.morphAttributes;if((Do.position!==void 0||Do.normal!==void 0||Do.color!==void 0&&he.isWebGL2===!0)&&D.update(W,X,Ci),(Ms||Ye.receiveShadow!==W.receiveShadow)&&(Ye.receiveShadow=W.receiveShadow,Ut.setValue(L,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ri.envMap.value=ze,Ri.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Ms&&(Ut.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&vp(Ri,Lo),Se&&q.fog===!0&&oe.refreshFogUniforms(Ri,Se),oe.refreshMaterialUniforms(Ri,q,H,B,we),Ka.upload(L,Zc(Ye),Ri,ye)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ka.upload(L,Zc(Ye),Ri,ye),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ut.setValue(L,"center",W.center),Ut.setValue(L,"modelViewMatrix",W.modelViewMatrix),Ut.setValue(L,"normalMatrix",W.normalMatrix),Ut.setValue(L,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const pn=q.uniformsGroups;for(let Uo=0,yp=pn.length;Uo<yp;Uo++)if(he.isWebGL2){const eu=pn[Uo];De.update(eu,Ci),De.bind(eu,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function vp(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function xp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,z,X){xe.get(A.texture).__webglTexture=z,xe.get(A.depthTexture).__webglTexture=X;const q=xe.get(A);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const X=xe.get(A);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,X=0){b=A,M=z,w=X;let q=!0,W=null,Se=!1,Pe=!1;if(A){const ze=xe.get(A);ze.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(L.FRAMEBUFFER,null),q=!1):ze.__webglFramebuffer===void 0?ye.setupRenderTarget(A):ze.__hasExternalTextures&&ye.rebindTextures(A,xe.get(A.texture).__webglTexture,xe.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Pe=!0);const ke=xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[z])?W=ke[z][X]:W=ke[z],Se=!0):he.isWebGL2&&A.samples>0&&ye.useMultisampledRTT(A)===!1?W=xe.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?W=ke[X]:W=ke,T.copy(A.viewport),O.copy(A.scissor),N=A.scissorTest}else T.copy(j).multiplyScalar(H).floor(),O.copy(re).multiplyScalar(H).floor(),N=ie;if(te.bindFramebuffer(L.FRAMEBUFFER,W)&&he.drawBuffers&&q&&te.drawBuffers(A,W),te.viewport(T),te.scissor(O),te.setScissorTest(N),Se){const ze=xe.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,ze.__webglTexture,X)}else if(Pe){const ze=xe.get(A.texture),Ve=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ze.__webglTexture,X||0,Ve)}C=-1},this.readRenderTargetPixels=function(A,z,X,q,W,Se,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){te.bindFramebuffer(L.FRAMEBUFFER,Fe);try{const ze=A.texture,Ve=ze.format,ke=ze.type;if(Ve!==An&&Ne.convert(Ve)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ke===ei&&(K.has("EXT_color_buffer_half_float")||he.isWebGL2&&K.has("EXT_color_buffer_float"));if(ke!==_i&&Ne.convert(ke)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Cn&&(he.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-q&&X>=0&&X<=A.height-W&&L.readPixels(z,X,q,W,Ne.convert(Ve),Ne.convert(ke),Se)}finally{const ze=b!==null?xe.get(b).__webglFramebuffer:null;te.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(A,z,X=0){const q=Math.pow(2,-X),W=Math.floor(z.image.width*q),Se=Math.floor(z.image.height*q);ye.setTexture2D(z,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,A.x,A.y,W,Se),te.unbindTexture()},this.copyTextureToTexture=function(A,z,X,q=0){const W=z.image.width,Se=z.image.height,Pe=Ne.convert(X.format),Fe=Ne.convert(X.type);ye.setTexture2D(X,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,X.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,q,A.x,A.y,W,Se,Pe,Fe,z.image.data):z.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,q,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Pe,z.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,q,A.x,A.y,Pe,Fe,z.image),q===0&&X.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(A,z,X,q,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=A.max.x-A.min.x+1,Pe=A.max.y-A.min.y+1,Fe=A.max.z-A.min.z+1,ze=Ne.convert(q.format),Ve=Ne.convert(q.type);let ke;if(q.isData3DTexture)ye.setTexture3D(q,0),ke=L.TEXTURE_3D;else if(q.isDataArrayTexture)ye.setTexture2DArray(q,0),ke=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);const He=L.getParameter(L.UNPACK_ROW_LENGTH),mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),nn=L.getParameter(L.UNPACK_SKIP_PIXELS),Tt=L.getParameter(L.UNPACK_SKIP_ROWS),Vn=L.getParameter(L.UNPACK_SKIP_IMAGES),lt=X.isCompressedTexture?X.mipmaps[0]:X.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,A.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,A.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?L.texSubImage3D(ke,W,z.x,z.y,z.z,Se,Pe,Fe,ze,Ve,lt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(ke,W,z.x,z.y,z.z,Se,Pe,Fe,ze,lt.data)):L.texSubImage3D(ke,W,z.x,z.y,z.z,Se,Pe,Fe,ze,Ve,lt),L.pixelStorei(L.UNPACK_ROW_LENGTH,He),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Vn),W===0&&q.generateMipmaps&&L.generateMipmap(ke),te.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ye.setTextureCube(A,0):A.isData3DTexture?ye.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ye.setTexture2DArray(A,0):ye.setTexture2D(A,0),te.unbindTexture()},this.resetState=function(){M=0,w=0,b=null,te.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hc?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===yo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?Wi:vf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wi?Lt:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Hx extends kf{}Hx.prototype.isWebGL1Renderer=!0;class Gx extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Vx extends qt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Pt,u=Pt,h,f){super(null,a,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],f=n[i+1]-u,p=(a-u)/f;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new ue:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,i=[],s=[],a=[],o=new U,l=new gt;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(St(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(St(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gc extends Hn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new ue,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Wx extends gc{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,p*=u,i(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Va=new U,cl=new vc,ul=new vc,hl=new vc;class Xx extends Hn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Va.subVectors(i[0],i[1]).add(i[0]),c=Va);const h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Va.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Va),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),cl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),ul.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),hl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ul.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),hl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(cl.calc(l),ul.calc(l),hl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sh(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function Yx(r,e){const t=1-r;return t*t*e}function qx(r,e){return 2*(1-r)*r*e}function jx(r,e){return r*r*e}function Bs(r,e,t,n){return Yx(r,e)+qx(r,t)+jx(r,n)}function $x(r,e){const t=1-r;return t*t*t*e}function Kx(r,e){const t=1-r;return 3*t*t*r*e}function Zx(r,e){return 3*(1-r)*r*r*e}function Jx(r,e){return r*r*r*e}function zs(r,e,t,n,i){return $x(r,e)+Kx(r,t)+Zx(r,n)+Jx(r,i)}class Hf extends Hn{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(zs(e,i.x,s.x,a.x,o.x),zs(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qx extends Hn{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(zs(e,i.x,s.x,a.x,o.x),zs(e,i.y,s.y,a.y,o.y),zs(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gf extends Hn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ey extends Hn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vf extends Hn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Bs(e,i.x,s.x,a.x),Bs(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ty extends Hn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Bs(e,i.x,s.x,a.x),Bs(e,i.y,s.y,a.y),Bs(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wf extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Sh(o,l.x,c.x,u.x,h.x),Sh(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ue().fromArray(i))}return this}}var Il=Object.freeze({__proto__:null,ArcCurve:Wx,CatmullRomCurve3:Xx,CubicBezierCurve:Hf,CubicBezierCurve3:Qx,EllipseCurve:gc,LineCurve:Gf,LineCurve3:ey,QuadraticBezierCurve:Vf,QuadraticBezierCurve3:ty,SplineCurve:Wf});class ny extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Il[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Il[i.type]().fromJSON(i))}return this}}class Ol extends ny{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Gf(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Vf(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Hf(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Wf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new gc(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ot extends kn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(p,2));function S(){const y=new U,M=new U;let w=0;const b=(t-e)/n;for(let C=0;C<=s;C++){const v=[],T=C/s,O=T*(t-e)+e;for(let N=0;N<=i;N++){const k=N/i,P=k*l+o,F=Math.sin(P),B=Math.cos(P);M.x=O*F,M.y=-T*n+m,M.z=O*B,h.push(M.x,M.y,M.z),y.set(F,b,B).normalize(),f.push(y.x,y.y,y.z),p.push(k,1-T),v.push(g++)}_.push(v)}for(let C=0;C<i;C++)for(let v=0;v<s;v++){const T=_[v][C],O=_[v+1][C],N=_[v+1][C+1],k=_[v][C+1];u.push(T,O,k),u.push(O,N,k),w+=6}c.addGroup(d,w,0),d+=w}function x(y){const M=g,w=new ue,b=new U;let C=0;const v=y===!0?e:t,T=y===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,m*T,0),f.push(0,T,0),p.push(.5,.5),g++;const O=g;for(let N=0;N<=i;N++){const P=N/i*l+o,F=Math.cos(P),B=Math.sin(P);b.x=v*B,b.y=m*T,b.z=v*F,h.push(b.x,b.y,b.z),f.push(0,T,0),w.x=F*.5+.5,w.y=B*.5*T+.5,p.push(w.x,w.y),g++}for(let N=0;N<i;N++){const k=M+N,P=O+N;y===!0?u.push(P,P+1,k):u.push(P+1,P,k),C+=3}c.addGroup(d,C,y===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ot(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Za extends Ol{constructor(e){super(e),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ol().fromJSON(i))}return this}}const iy={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Xf(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,p;if(n&&(s=ly(r,e,s,t)),r.length>80*t){o=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)h=r[g],f=r[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return qs(s,a,t,o,l,p,0),a}};function Xf(r,e,t,n,i){let s,a;if(i===xy(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Mh(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Mh(s,r[s],r[s+1],a);return a&&Eo(a,a.next)&&($s(a),a=a.next),a}function er(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Eo(t,t.next)||ut(t.prev,t,t.next)===0)){if($s(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qs(r,e,t,n,i,s,a){if(!r)return;!a&&s&&dy(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?sy(r,n,i,s):ry(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),$s(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=ay(er(r),e,t),qs(r,e,t,n,i,s,2)):a===2&&oy(r,e,t,n,i,s):qs(er(r),e,t,n,i,s,1);break}}}function ry(r){const e=r.prev,t=r,n=r.next;if(ut(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=i<s?i<a?i:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&jr(i,o,s,l,a,c,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sy(r,e,t,n){const i=r.prev,s=r,a=r.next;if(ut(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,h=s.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=Nl(p,g,e,t,n),S=Nl(_,m,e,t,n);let x=r.prevZ,y=r.nextZ;for(;x&&x.z>=d&&y&&y.z<=S;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&jr(o,u,l,h,c,f,x.x,x.y)&&ut(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&jr(o,u,l,h,c,f,y.x,y.y)&&ut(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&jr(o,u,l,h,c,f,x.x,x.y)&&ut(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=S;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&jr(o,u,l,h,c,f,y.x,y.y)&&ut(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ay(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Eo(i,s)&&Yf(i,n,n.next,s)&&js(i,s)&&js(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),$s(n),$s(n.next),n=r=s),n=n.next}while(n!==r);return er(n)}function oy(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_y(a,o)){let l=qf(a,o);a=er(a,a.next),l=er(l,l.next),qs(a,e,t,n,i,s,0),qs(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function ly(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Xf(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(my(c));for(i.sort(cy),s=0;s<i.length;s++)t=uy(i[s],t);return t}function cy(r,e){return r.x-e.x}function uy(r,e){const t=hy(r,e);if(!t)return e;const n=qf(t,r);return er(n,n.next),er(t,t.next)}function hy(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&jr(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),js(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&fy(i,t)))&&(i=t,u=h)),t=t.next;while(t!==o);return i}function fy(r,e){return ut(r.prev,r,e.prev)<0&&ut(e.next,r,r.next)<0}function dy(r,e,t,n){let i=r;do i.z===0&&(i.z=Nl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,py(i)}function py(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function Nl(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function my(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function jr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function _y(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!gy(r,e)&&(js(r,e)&&js(e,r)&&vy(r,e)&&(ut(r.prev,r,e.prev)||ut(r,e.prev,e))||Eo(r,e)&&ut(r.prev,r,r.next)>0&&ut(e.prev,e,e.next)>0)}function ut(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Eo(r,e){return r.x===e.x&&r.y===e.y}function Yf(r,e,t,n){const i=Xa(ut(r,e,t)),s=Xa(ut(r,e,n)),a=Xa(ut(t,n,r)),o=Xa(ut(t,n,e));return!!(i!==s&&a!==o||i===0&&Wa(r,t,e)||s===0&&Wa(r,n,e)||a===0&&Wa(t,r,n)||o===0&&Wa(t,e,n))}function Wa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Xa(r){return r>0?1:r<0?-1:0}function gy(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Yf(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function js(r,e){return ut(r.prev,r,r.next)<0?ut(r,e,r.next)>=0&&ut(r,r.prev,e)>=0:ut(r,e,r.prev)<0||ut(r,r.next,e)<0}function vy(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function qf(r,e){const t=new Fl(r.i,r.x,r.y),n=new Fl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Mh(r,e,t,n){const i=new Fl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $s(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Fl(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xy(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class es{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return es.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Eh(e),bh(n,e);let a=e.length;t.forEach(Eh);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,bh(n,t[l]);const o=iy.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Eh(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function bh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class xc extends kn{constructor(e=new Za([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new jt(i,3)),this.setAttribute("uv",new jt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:yy;let x,y=!1,M,w,b,C;d&&(x=d.getSpacedPoints(u),y=!0,f=!1,M=d.computeFrenetFrames(u,!1),w=new U,b=new U,C=new U),f||(m=0,p=0,g=0,_=0);const v=o.extractPoints(c);let T=v.shape;const O=v.holes;if(!es.isClockWise(T)){T=T.reverse();for(let L=0,pe=O.length;L<pe;L++){const K=O[L];es.isClockWise(K)&&(O[L]=K.reverse())}}const k=es.triangulateShape(T,O),P=T;for(let L=0,pe=O.length;L<pe;L++){const K=O[L];T=T.concat(K)}function F(L,pe,K){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(pe,K)}const B=T.length,H=k.length;function ne(L,pe,K){let he,te,Ce;const xe=L.x-pe.x,ye=L.y-pe.y,Ie=K.x-L.x,je=K.y-L.y,rt=xe*xe+ye*ye,R=xe*je-ye*Ie;if(Math.abs(R)>Number.EPSILON){const E=Math.sqrt(rt),V=Math.sqrt(Ie*Ie+je*je),oe=pe.x-ye/E,se=pe.y+xe/E,le=K.x-je/V,Te=K.y+Ie/V,fe=((le-oe)*je-(Te-se)*Ie)/(xe*je-ye*Ie);he=oe+xe*fe-L.x,te=se+ye*fe-L.y;const ve=he*he+te*te;if(ve<=2)return new ue(he,te);Ce=Math.sqrt(ve/2)}else{let E=!1;xe>Number.EPSILON?Ie>Number.EPSILON&&(E=!0):xe<-Number.EPSILON?Ie<-Number.EPSILON&&(E=!0):Math.sign(ye)===Math.sign(je)&&(E=!0),E?(he=-ye,te=xe,Ce=Math.sqrt(rt)):(he=xe,te=ye,Ce=Math.sqrt(rt/2))}return new ue(he/Ce,te/Ce)}const Z=[];for(let L=0,pe=P.length,K=pe-1,he=L+1;L<pe;L++,K++,he++)K===pe&&(K=0),he===pe&&(he=0),Z[L]=ne(P[L],P[K],P[he]);const j=[];let re,ie=Z.concat();for(let L=0,pe=O.length;L<pe;L++){const K=O[L];re=[];for(let he=0,te=K.length,Ce=te-1,xe=he+1;he<te;he++,Ce++,xe++)Ce===te&&(Ce=0),xe===te&&(xe=0),re[he]=ne(K[he],K[Ce],K[xe]);j.push(re),ie=ie.concat(re)}for(let L=0;L<m;L++){const pe=L/m,K=p*Math.cos(pe*Math.PI/2),he=g*Math.sin(pe*Math.PI/2)+_;for(let te=0,Ce=P.length;te<Ce;te++){const xe=F(P[te],Z[te],he);Me(xe.x,xe.y,-K)}for(let te=0,Ce=O.length;te<Ce;te++){const xe=O[te];re=j[te];for(let ye=0,Ie=xe.length;ye<Ie;ye++){const je=F(xe[ye],re[ye],he);Me(je.x,je.y,-K)}}}const Y=g+_;for(let L=0;L<B;L++){const pe=f?F(T[L],ie[L],Y):T[L];y?(b.copy(M.normals[0]).multiplyScalar(pe.x),w.copy(M.binormals[0]).multiplyScalar(pe.y),C.copy(x[0]).add(b).add(w),Me(C.x,C.y,C.z)):Me(pe.x,pe.y,0)}for(let L=1;L<=u;L++)for(let pe=0;pe<B;pe++){const K=f?F(T[pe],ie[pe],Y):T[pe];y?(b.copy(M.normals[L]).multiplyScalar(K.x),w.copy(M.binormals[L]).multiplyScalar(K.y),C.copy(x[L]).add(b).add(w),Me(C.x,C.y,C.z)):Me(K.x,K.y,h/u*L)}for(let L=m-1;L>=0;L--){const pe=L/m,K=p*Math.cos(pe*Math.PI/2),he=g*Math.sin(pe*Math.PI/2)+_;for(let te=0,Ce=P.length;te<Ce;te++){const xe=F(P[te],Z[te],he);Me(xe.x,xe.y,h+K)}for(let te=0,Ce=O.length;te<Ce;te++){const xe=O[te];re=j[te];for(let ye=0,Ie=xe.length;ye<Ie;ye++){const je=F(xe[ye],re[ye],he);y?Me(je.x,je.y+x[u-1].y,x[u-1].x+K):Me(je.x,je.y,h+K)}}}J(),me();function J(){const L=i.length/3;if(f){let pe=0,K=B*pe;for(let he=0;he<H;he++){const te=k[he];Oe(te[2]+K,te[1]+K,te[0]+K)}pe=u+m*2,K=B*pe;for(let he=0;he<H;he++){const te=k[he];Oe(te[0]+K,te[1]+K,te[2]+K)}}else{for(let pe=0;pe<H;pe++){const K=k[pe];Oe(K[2],K[1],K[0])}for(let pe=0;pe<H;pe++){const K=k[pe];Oe(K[0]+B*u,K[1]+B*u,K[2]+B*u)}}n.addGroup(L,i.length/3-L,0)}function me(){const L=i.length/3;let pe=0;we(P,pe),pe+=P.length;for(let K=0,he=O.length;K<he;K++){const te=O[K];we(te,pe),pe+=te.length}n.addGroup(L,i.length/3-L,1)}function we(L,pe){let K=L.length;for(;--K>=0;){const he=K;let te=K-1;te<0&&(te=L.length-1);for(let Ce=0,xe=u+m*2;Ce<xe;Ce++){const ye=B*Ce,Ie=B*(Ce+1),je=pe+he+ye,rt=pe+te+ye,R=pe+te+Ie,E=pe+he+Ie;Be(je,rt,R,E)}}}function Me(L,pe,K){l.push(L),l.push(pe),l.push(K)}function Oe(L,pe,K){Ae(L),Ae(pe),Ae(K);const he=i.length/3,te=S.generateTopUV(n,i,he-3,he-2,he-1);Ue(te[0]),Ue(te[1]),Ue(te[2])}function Be(L,pe,K,he){Ae(L),Ae(pe),Ae(he),Ae(pe),Ae(K),Ae(he);const te=i.length/3,Ce=S.generateSideWallUV(n,i,te-6,te-3,te-2,te-1);Ue(Ce[0]),Ue(Ce[1]),Ue(Ce[3]),Ue(Ce[1]),Ue(Ce[2]),Ue(Ce[3])}function Ae(L){i.push(l[L*3+0]),i.push(l[L*3+1]),i.push(l[L*3+2])}function Ue(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sy(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Il[i.type]().fromJSON(i)),new xc(n,e.options)}}const yy={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ue(s,a),new ue(o,l),new ue(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],p=e[i*3+1],g=e[i*3+2],_=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-h),new ue(f,1-g),new ue(_,1-d)]:[new ue(o,1-l),new ue(u,1-h),new ue(p,1-g),new ue(m,1-d)]}};function Sy(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class oa extends kn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new U,f=new U,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const S=[],x=d/n;let y=0;d===0&&a===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const w=M/t;h.x=-e*Math.cos(i+w*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(i+w*s)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+y,1-x),S.push(c++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){const x=u[d][S+1],y=u[d][S],M=u[d+1][S],w=u[d+1][S+1];(d!==0||a>0)&&p.push(x,y,w),(d!==n-1||l<Math.PI)&&p.push(y,M,w)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tt extends ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Th extends ms{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const lo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class My{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Ey=new My;class vs{constructor(e){this.manager=e!==void 0?e:Ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class by extends Error{constructor(e,t){super(e),this.response=t}}class jf extends vs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=lo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=$n[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){S();function S(){h.read().then(({done:x,value:y})=>{if(x)d.close();else{_+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let w=0,b=u.length;w<b;w++){const C=u[w];C.onProgress&&C.onProgress(M)}d.enqueue(y),S()}})}}});return new Response(m)}else throw new by(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{lo.add(e,c);const u=$n[e];delete $n[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=$n[e];if(u===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ty extends vs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=lo.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ys("img");function l(){u(),lo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class wy extends vs{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Vx,o=new jf(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:ln,a.wrapT=c.wrapT!==void 0?c.wrapT:ln,a.magFilter=c.magFilter!==void 0?c.magFilter:Dt,a.minFilter=c.minFilter!==void 0?c.minFilter:Dt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=os),c.mipmapCount===1&&(a.minFilter=Dt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class la extends vs{constructor(e){super(e)}load(e,t,n,i){const s=new qt,a=new Ty(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class $f extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fl=new gt,wh=new U,Ah=new U;class Kf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mc,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(wh),Ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ah),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ch=new gt,As=new U,dl=new U;class Ay extends Kf{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),As.setFromMatrixPosition(e.matrixWorld),n.position.copy(As),dl.copy(n.position),dl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dl),n.updateMatrixWorld(),i.makeTranslation(-As.x,-As.y,-As.z),Ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch)}}class Zf extends $f{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ay}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Cy extends Kf{constructor(){super(new Uf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ry extends $f{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Cy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rh(){return(typeof performance>"u"?Date:performance).now()}class Ph{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Py{constructor(){this.type="ShapePath",this.color=new Ke,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ol,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const S=[];for(let x=0,y=d.length;x<y;x++){const M=d[x],w=new Za;w.curves=M.curves,S.push(w)}return S}function n(d,S){const x=S.length;let y=!1;for(let M=x-1,w=0;w<x;M=w++){let b=S[M],C=S[w],v=C.x-b.x,T=C.y-b.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(b=S[w],v=-v,C=S[M],T=-T),d.y<b.y||d.y>C.y)continue;if(d.y===b.y){if(d.x===b.x)return!0}else{const O=T*(d.x-b.x)-v*(d.y-b.y);if(O===0)return!0;if(O<0)continue;y=!y}}else{if(d.y!==b.y)continue;if(C.x<=d.x&&d.x<=b.x||b.x<=d.x&&d.x<=C.x)return!0}}return y}const i=es.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new Za,l.curves=o.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],g=0,_;f[g]=void 0,p[g]=[];for(let d=0,S=s.length;d<S;d++)o=s[d],_=o.getPoints(),a=i(_),a=e?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new Za,p:_},f[g].s.curves=o.curves,u&&g++,p[g]=[]):p[g].push({h:o,p:_[0]});if(!f[0])return t(s);if(f.length>1){let d=!1,S=0;for(let x=0,y=f.length;x<y;x++)h[x]=[];for(let x=0,y=f.length;x<y;x++){const M=p[x];for(let w=0;w<M.length;w++){const b=M[w];let C=!0;for(let v=0;v<f.length;v++)n(b.p,f[v].p)&&(x!==v&&S++,C?(C=!1,h[v].push(b)):d=!0);C&&h[x].push(b)}}S>0&&d===!1&&(p=h)}let m;for(let d=0,S=f.length;d<S;d++){l=f[d].s,c.push(l),m=p[d];for(let x=0,y=m.length;x<y;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);class Ly extends vs{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new jf(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=s.parse(JSON.parse(o));t&&t(l)},n,i)}parse(e){return new Dy(e)}}class Dy{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=Uy(e,t,this.data);for(let s=0,a=i.length;s<a;s++)n.push(...i[s].toShapes());return n}}function Uy(r,e,t){const n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)o=0,l-=s;else{const h=Iy(u,i,o,l,t);o+=h.offsetX,a.push(h.path)}}return a}function Iy(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const a=new Py;let o,l,c,u,h,f,p,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=_.length;m<d;)switch(_[m++]){case"m":o=_[m++]*e+t,l=_[m++]*e+n,a.moveTo(o,l);break;case"l":o=_[m++]*e+t,l=_[m++]*e+n,a.lineTo(o,l);break;case"q":c=_[m++]*e+t,u=_[m++]*e+n,h=_[m++]*e+t,f=_[m++]*e+n,a.quadraticCurveTo(h,f,c,u);break;case"b":c=_[m++]*e+t,u=_[m++]*e+n,h=_[m++]*e+t,f=_[m++]*e+n,p=_[m++]*e+t,g=_[m++]*e+n,a.bezierCurveTo(h,f,p,g,c,u);break}}return{offsetX:s.ha*e,path:a}}class Oy extends xc{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}function Zn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Jf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},us={duration:.5,overwrite:!1,delay:0},Sc,zt,dt,xn=1e8,et=1/xn,Bl=Math.PI*2,Ny=Bl/4,Fy=0,Qf=Math.sqrt,By=Math.cos,zy=Math.sin,Rt=function(e){return typeof e=="string"},pt=function(e){return typeof e=="function"},ni=function(e){return typeof e=="number"},Mc=function(e){return typeof e>"u"},zn=function(e){return typeof e=="object"},Zt=function(e){return e!==!1},Ec=function(){return typeof window<"u"},Ya=function(e){return pt(e)||Rt(e)},ed=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,zl=/(?:-?\.?\d|\.)+/gi,td=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nd=/[+-]=-?[.\d]+/,id=/[^,'"\[\]\s]+/gi,ky=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ct,gn,kl,bc,fn={},co={},rd,sd=function(e){return(co=tr(e,fn))&&tn},Tc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ks=function(e,t){return!t&&console.warn(e)},ad=function(e,t){return e&&(fn[e]=t)&&co&&(co[e]=t)||fn},Zs=function(){return 0},Hy={suppressEvents:!0,isStart:!0,kill:!1},Ja={suppressEvents:!0,kill:!1},Gy={suppressEvents:!0},wc={},gi=[],Hl={},od,an={},ml={},Lh=30,Qa=[],Ac="",Cc=function(e){var t=e[0],n,i;if(zn(t)||pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Qa.length;i--&&!Qa[i].targetTest(t););n=Qa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ld(e[i],n)))||e.splice(i,1);return e},Xi=function(e){return e._gsap||Cc(yn(e))[0]._gsap},ld=function(e,t,n){return(n=e[t])&&pt(n)?e[t]():Mc(n)&&e.getAttribute&&e.getAttribute(t)||n},Jt=function(e,t){return(e=e.split(",")).forEach(t)||e},_t=function(e){return Math.round(e*1e5)/1e5||0},At=function(e){return Math.round(e*1e7)/1e7||0},ts=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Vy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},uo=function(){var e=gi.length,t=gi.slice(0),n,i;for(Hl={},gi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},cd=function(e,t,n,i){gi.length&&!zt&&uo(),e.render(t,n,i||zt&&t<0&&(e._initted||e._startAt)),gi.length&&!zt&&uo()},ud=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(id).length<2?t:Rt(e)?e.trim():e},hd=function(e){return e},Sn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},tr=function(e,t){for(var n in t)e[n]=t[n];return e},Dh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=zn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ho=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ks=function(e){var t=e.parent||ct,n=e.keyframes?Wy(kt(e.keyframes)):Sn;if(Zt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Xy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},fd=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},bo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},yi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Yi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Yy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gl=function(e,t,n,i){return e._startAt&&(zt?e._startAt.revert(Ja):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},qy=function r(e){return!e||e._ts&&r(e.parent)},Uh=function(e){return e._repeat?hs(e._tTime,e=e.duration()+e._rDelay)*e:0},hs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},fo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},To=function(e){return e._end=At(e._start+(e._tDur/Math.abs(e._ts||e._rts||et)||0))},wo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=At(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),To(e),n._dirty||Yi(n,e)),e},dd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=fo(e.rawTime(),t),(!t._dur||ca(0,t.totalDuration(),n)-t._tTime>et)&&t.render(n,!0)),Yi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-et}},In=function(e,t,n,i){return t.parent&&yi(t),t._start=At((ni(n)?n:n||e!==ct?_n(e,n,t):e._time)+t._delay),t._end=At(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),fd(e,t,"_first","_last",e._sort?"_start":0),Vl(t)||(e._recent=t),i||dd(e,t),e._ts<0&&wo(e,e._tTime),e},pd=function(e,t){return(fn.ScrollTrigger||Tc("scrollTrigger",t))&&fn.ScrollTrigger.create(t,e)},md=function(e,t,n,i,s){if(Pc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&od!==cn.frame)return gi.push(e),e._lazy=[s,i],1},jy=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Vl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},$y=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&jy(e)&&!(!e._initted&&Vl(e))||(e._ts<0||e._dp._ts<0)&&!Vl(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=ca(0,e._tDur,t),u=hs(l,o),e._yoyo&&u&1&&(a=1-a),u!==hs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||zt||i||e._zTime===et||!t&&e._zTime){if(!e._initted&&md(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?et:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Gl(e,t,n,!0),e._onUpdate&&!n&&un(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&yi(e,1),!n&&!zt&&(un(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ky=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},fs=function(e,t,n,i){var s=e._repeat,a=At(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:At(a*(s+1)+e._rDelay*s):a,o>0&&!i&&wo(e,e._tTime=e._tDur*o),e.parent&&To(e),n||Yi(e.parent,e),e},Ih=function(e){return e instanceof Xt?Yi(e):fs(e,e._dur)},Zy={_start:0,endTime:Zs,totalDuration:Zs},_n=function r(e,t,n){var i=e.labels,s=e._recent||Zy,a=e.duration()>=xn?s.endTime(!1):e._dur,o,l,c;return Rt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(kt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Hs=function(e,t,n){var i=ni(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Zt(l.vars.inherit)&&l.parent;a.immediateRender=Zt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new xt(t[0],a,t[s+1])},Ei=function(e,t){return e||e===0?t(e):t},ca=function(e,t,n){return n<e?e:n>t?t:n},Nt=function(e,t){return!Rt(e)||!(t=ky.exec(e))?"":t[1]},Jy=function(e,t,n){return Ei(n,function(i){return ca(e,t,i)})},Wl=[].slice,_d=function(e,t){return e&&zn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zn(e[0]))&&!e.nodeType&&e!==gn},Qy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Rt(i)&&!t||_d(i,1)?(s=n).push.apply(s,yn(i)):n.push(i)})||n},yn=function(e,t,n){return dt&&!t&&dt.selector?dt.selector(e):Rt(e)&&!n&&(kl||!ds())?Wl.call((t||bc).querySelectorAll(e),0):kt(e)?Qy(e,n):_d(e)?Wl.call(e,0):e?[e]:[]},Xl=function(e){return e=yn(e)[0]||Ks("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yn(t,n.querySelectorAll?n:n===e?Ks("Invalid scope")||bc.createElement("div"):e)}},gd=function(e){return e.sort(function(){return .5-Math.random()})},vd=function(e){if(pt(e))return e;var t=zn(e)?e:{each:e},n=qi(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Rt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,p,g){var _=(g||t).length,m=a[_],d,S,x,y,M,w,b,C,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,xn])[1],!v){for(b=-xn;b<(b=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=a[_]=[],d=l?Math.min(v,_)*u-.5:i%v,S=v===xn?0:l?_*h/v-.5:i/v|0,b=0,C=xn,w=0;w<_;w++)x=w%v-d,y=S-(w/v|0),m[w]=M=c?Math.abs(c==="y"?y:x):Qf(x*x+y*y),M>b&&(b=M),M<C&&(C=M);i==="random"&&gd(m),m.max=b-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Nt(t.amount||t.each)||0,n=n&&_<0?Cd(n):n}return _=(m[f]-m.min)/m.max||0,At(m.b+(n?n(_):_)*m.v)+m.u}},Yl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=At(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ni(n)?0:Nt(n))}},xd=function(e,t){var n=kt(e),i,s;return!n&&zn(e)&&(i=n=e.radius||xn,e.values?(e=yn(e.values),(s=!ni(e[0]))&&(i*=i)):e=Yl(e.increment)),Ei(t,n?pt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=xn,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-o,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||ni(a)?u:u+Nt(a)}:Yl(e))},yd=function(e,t,n,i){return Ei(kt(e)?!t:n===!0?!!(n=0):!i,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},eS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},tS=function(e,t){return function(n){return e(parseFloat(n))+(t||Nt(n))}},nS=function(e,t,n){return Md(e,t,0,1,n)},Sd=function(e,t,n){return Ei(n,function(i){return e[~~t(i)]})},iS=function r(e,t,n){var i=t-e;return kt(e)?Sd(e,r(0,e.length),t):Ei(n,function(s){return(i+(s-e)%i)%i+e})},rS=function r(e,t,n){var i=t-e,s=i*2;return kt(e)?Sd(e,r(0,e.length-1),t):Ei(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Js=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?id:zl),n+=e.substr(t,i-t)+yd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Md=function(e,t,n,i,s){var a=t-e,o=i-n;return Ei(s,function(l){return n+((l-e)/a*o||0)})},sS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Rt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=tr(kt(e)?[]:{},e));if(!u){for(l in t)Rc.call(o,e,l,"get",t[l]);s=function(g){return Uc(g,o)||(a?e.p:e)}}}return Ei(n,s)},Oh=function(e,t,n){var i=e.labels,s=xn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},un=function(e,t,n){var i=e.vars,s=i[t],a=dt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&gi.length&&uo(),o&&(dt=o),u=l?s.apply(c,l):s.call(c),dt=a,u},Ds=function(e){return yi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zt),e.progress()<1&&un(e,"onInterrupt"),e},Kr,Ed=[],bd=function(e){if(Ec()&&e){e=!e.name&&e.default||e;var t=e.name,n=pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Zs,render:Uc,add:Rc,kill:SS,modifier:yS,rawVars:0},a={targetTest:0,get:0,getSetter:Dc,aliases:{},register:0};if(ds(),e!==i){if(an[t])return;Sn(i,Sn(ho(e,s),a)),tr(i.prototype,tr(s,ho(e,a))),an[i.prop=t]=i,e.targetTest&&(Qa.push(i),wc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ad(t,i),e.register&&e.register(tn,i,Qt)}else e&&Ed.push(e)},Qe=255,Us={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},_l=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qe+.5|0},Td=function(e,t,n){var i=e?ni(e)?[e>>16,e>>8&Qe,e&Qe]:0:Us.black,s,a,o,l,c,u,h,f,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Us[e])i=Us[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(zl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=_l(l+1/3,s,a),i[1]=_l(l,s,a),i[2]=_l(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(td),n&&i.length<4&&(i[3]=1),i}else i=e.match(zl)||Us.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Qe,a=i[1]/Qe,o=i[2]/Qe,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},wd=function(e){var t=[],n=[],i=-1;return e.split(vi).forEach(function(s){var a=s.match($r)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Nh=function(e,t,n){var i="",s=(e+i).match(vi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Td(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=wd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(vi,"1").split($r),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(vi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},vi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Us)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),aS=/hsl[a]?\(/,Ad=function(e){var t=e.join(" "),n;if(vi.lastIndex=0,vi.test(t))return n=aS.test(t),e[1]=Nh(e[1],n),e[0]=Nh(e[0],n,wd(e[1])),!0},Qs,cn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,p,g=function _(m){var d=r()-i,S=m===!0,x,y,M,w;if(d>e&&(n+=d-t),i+=d,M=i-n,x=M-a,(x>0||S)&&(w=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,a+=x+(x>=s?4:s-x),y=1),S||(l=c(_)),y)for(p=0;p<o.length;p++)o[p](M,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){rd&&(!kl&&Ec()&&(gn=kl=window,bc=gn.document||{},fn.gsap=tn,(gn.gsapVersions||(gn.gsapVersions=[])).push(tn.version),sd(co||gn.GreenSockGlobals||!gn.gsap&&gn||{}),u=gn.requestAnimationFrame,Ed.forEach(bd)),l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Qs=1,g(2))},sleep:function(){(u?gn.cancelAnimationFrame:clearTimeout)(l),Qs=0,c=Zs},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,d,S){var x=d?function(y,M,w,b){m(y,M,w,b),h.remove(x)}:m;return h.remove(m),o[S?"unshift":"push"](x),ds(),x},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h}(),ds=function(){return!Qs&&cn.wake()},Ze={},oS=/^[\d.\-M][\d.\-,\s]/,lS=/["']/g,cS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(lS,"").trim():+c,i=l.substr(o+1).trim();return t},uS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},hS=function(e){var t=(e+"").split("("),n=Ze[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[cS(t[1])]:uS(e).split(",").map(ud)):Ze._CE&&oS.test(e)?Ze._CE("",e):n},Cd=function(e){return function(t){return 1-e(1-t)}},Rd=function r(e,t){for(var n=e._first,i;n;)n instanceof Xt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},qi=function(e,t){return e&&(pt(e)?e:Ze[e]||hS(e))||t},sr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Jt(e,function(o){Ze[o]=fn[o]=s,Ze[a=o.toLowerCase()]=n;for(var l in s)Ze[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ze[o+"."+l]=s[l]}),s},Pd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},gl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Bl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*zy((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Pd(o);return s=Bl/s,l.config=function(c,u){return r(e,c,u)},l},vl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Pd(n);return i.config=function(s){return r(e,s)},i};Jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;sr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;sr("Elastic",gl("in"),gl("out"),gl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};sr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);sr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});sr("Circ",function(r){return-(Qf(1-r*r)-1)});sr("Sine",function(r){return r===1?1:-By(r*Ny)+1});sr("Back",vl("in"),vl("out"),vl());Ze.SteppedEase=Ze.steps=fn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-et;return function(o){return((i*ca(0,a,o)|0)+s)*n}}};us.ease=Ze["quad.out"];Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ac+=r+","+r+"Params,"});var Ld=function(e,t){this.id=Fy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ld,this.set=t?t.getSetter:Dc},ea=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,fs(this,+t.duration,1,1),this.data=t.data,dt&&(this._ctx=dt,dt.data.push(this)),Qs||cn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,fs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ds(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wo(this,n),!s._dp||s.parent||dd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&In(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===et||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),cd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Uh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Uh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?hs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?fo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-et?0:this._rts,this.totalTime(ca(-Math.abs(this._delay),this._tDur,s),i!==!1),To(this),Yy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ds(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==et&&(this._tTime-=et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&In(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Gy);var i=zt;return zt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),zt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ih(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ih(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(_n(this,n),Zt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-et)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=pt(n)?n:hd,o=function(){var c=i.then;i.then=null,pt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ds(this)},r}();Sn(ea.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-et,_prom:0,_ps:!1,_rts:1});var Xt=function(r){Jf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Zt(n.sortChildren),ct&&In(n.parent||ct,Zn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&pd(Zn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Hs(0,arguments,this),this},t.from=function(i,s,a){return Hs(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Hs(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ks(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xt(i,s,_n(this,a),1),this},t.call=function(i,s,a){return In(this,xt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new xt(i,a,_n(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ks(a).immediateRender=Zt(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ks(o).immediateRender=Zt(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:At(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,_,m,d,S,x,y,M,w,b;if(this!==ct&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,y=this._start,x=this._ts,d=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=At(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),M=hs(this._tTime,m),!o&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),w&&_&1&&(f=c-f,b=1),_!==M&&!this._lock){var C=w&&M&1,v=C===(w&&_&1);if(_<M&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(b?0:At(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&un(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Rd(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Ky(this,At(o),At(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!_&&(un(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){S=0,g&&(u+=this._zTime=-et);break}}p=g}else{p=this._last;for(var T=i<0?i:f;p;){if(g=p._prev,(p._act||T<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,a||zt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){S=0,g&&(u+=this._zTime=T?-et:et);break}}p=g}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-et)._zTime=f>=o?1:-1,this._ts))return this._start=y,To(this),this.render(i,s,a);this._onUpdate&&!s&&un(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&yi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(un(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ni(s)||(s=_n(this,s,i)),!(i instanceof ea)){if(kt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Rt(i))return this.addLabel(i,s);if(pt(i))i=xt.delayedCall(0,i);else return this}return this!==i?In(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-xn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof xt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Rt(i)?this.removeLabel(i):pt(i)?this.killTweensOf(i):(bo(this,i),i===this._recent&&(this._recent=this._last),Yi(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=At(cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=_n(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=xt.delayedCall(0,s||Zs,a);return o.data="isPause",this._hasPause=1,In(this,o,_n(this,i))},t.removePause=function(i){var s=this._first;for(i=_n(this,i);s;)s._start===i&&s.data==="isPause"&&yi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)hi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=yn(i),l=this._first,c=ni(s),u;l;)l instanceof xt?Vy(l._targets,o)&&(c?(!hi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=_n(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=xt.to(a,Sn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||et,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&fs(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Sn({startAt:{time:_n(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Oh(this,_n(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Oh(this,_n(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+et)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Yi(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yi(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=xn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,In(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;fs(a,a===ct&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ct._ts&&(cd(ct,fo(i,ct)),od=cn.frame),cn.frame>=Lh){Lh+=hn.autoSleep||120;var s=ct._first;if((!s||!s._ts)&&hn.autoSleep&&cn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||cn.sleep()}}},e}(ea);Sn(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});var fS=function(e,t,n,i,s,a,o){var l=new Qt(this._pt,e,t,0,1,Fd,null,s),c=0,u=0,h,f,p,g,_,m,d,S;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Js(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(pl)||[];h=pl.exec(i);)g=h[0],_=i.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ts(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=pl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(nd.test(i)||d)&&(l.e=0),this._pt=l,l},Rc=function(e,t,n,i,s,a,o,l,c,u){pt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:pt(h)?c?e[t.indexOf("set")||!pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=pt(h)?c?gS:Od:Lc,g;if(Rt(i)&&(~i.indexOf("random(")&&(i=Js(i)),i.charAt(1)==="="&&(g=ts(f,i)+(Nt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||ql)return!isNaN(f*i)&&i!==""?(g=new Qt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?xS:Nd,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Tc(t,i),fS.call(this,e,t,f,i,p,l||hn.stringFilter,c))},dS=function(e,t,n,i,s){if(pt(e)&&(e=Gs(e,s,t,n,i)),!zn(e)||e.style&&e.nodeType||kt(e)||ed(e))return Rt(e)?Gs(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Gs(e[o],s,t,n,i);return a},Dd=function(e,t,n,i,s,a){var o,l,c,u;if(an[e]&&(o=new an[e]).init(s,o.rawVars?t[e]:dS(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Qt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Kr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},hi,ql,Pc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,p=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,d=e.parent,S=d&&d.data==="nested"?d.vars.targets:m,x=e._overwrite==="auto"&&!Sc,y=e.timeline,M,w,b,C,v,T,O,N,k,P,F,B,H;if(y&&(!f||!s)&&(s="none"),e._ease=qi(s,us.ease),e._yEase=h?Cd(qi(h===!0?s:h,us.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(N=m[0]?Xi(m[0]).harness:0,B=N&&i[N.prop],M=ho(i,wc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!p?_.render(-1,!0):_.revert(u&&g?Ja:Hy),_._lazy=0),a){if(yi(e._startAt=xt.set(m,Sn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&Zt(l),startAt:null,delay:0,onUpdate:c&&function(){return un(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt||!o&&!p)&&e._startAt.revert(Ja),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),b=Sn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Zt(l),immediateRender:o,stagger:0,parent:d},M),B&&(b[N.prop]=B),yi(e._startAt=xt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt?e._startAt.revert(Ja):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,et,et);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Zt(l)||l&&!g,w=0;w<m.length;w++){if(v=m[w],O=v._gsap||Cc(m)[w]._gsap,e._ptLookup[w]=P={},Hl[O.id]&&gi.length&&uo(),F=S===m?w:S.indexOf(v),N&&(k=new N).init(v,B||M,e,F,S)!==!1&&(e._pt=C=new Qt(e._pt,v,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(ne){P[ne]=C}),k.priority&&(T=1)),!N||B)for(b in M)an[b]&&(k=Dd(b,M,e,F,v,S))?k.priority&&(T=1):P[b]=C=Rc.call(e,v,b,"get",M[b],F,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(v,e._op[w]),x&&e._pt&&(hi=e,ct.killTweensOf(v,P,e.globalTime(t)),H=!e.parent,hi=0),e._pt&&l&&(Hl[O.id]=1)}T&&Bd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,f&&t<=0&&y.render(xn,!0,!0)},pS=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,p;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(u=f[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ql=1,e.vars[t]="+=0",Pc(e,o),ql=0,l?Ks(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=_t(n)+Nt(h.e)),h.b&&(h.b=u.s+Nt(h.b))},mS=function(e,t){var n=e[0]?Xi(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=tr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},_S=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(kt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Gs=function(e,t,n,i,s){return pt(e)?e.call(t,n,i,s):Rt(e)&&~e.indexOf("random(")?Js(e):e},Ud=Ac+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Id={};Jt(Ud+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Id[r]=1});var xt=function(r){Jf(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ks(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,S=i.parent||ct,x=(kt(n)||ed(n)?ni(n[0]):"length"in i)?[n]:yn(n),y,M,w,b,C,v,T,O;if(o._targets=x.length?Cc(x):Ks("GSAP target "+n+" not found. https://gsap.com",!hn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||Ya(c)||Ya(u)){if(i=o.vars,y=o.timeline=new Xt({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:x}),y.kill(),y.parent=y._dp=Zn(o),y._start=0,f||Ya(c)||Ya(u)){if(b=x.length,T=f&&vd(f),zn(f))for(C in f)~Ud.indexOf(C)&&(O||(O={}),O[C]=f[C]);for(M=0;M<b;M++)w=ho(i,Id),w.stagger=0,d&&(w.yoyoEase=d),O&&tr(w,O),v=x[M],w.duration=+Gs(c,Zn(o),M,v,x),w.delay=(+Gs(u,Zn(o),M,v,x)||0)-o._delay,!f&&b===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),y.to(v,w,T?T(M,v,x):0),y._ease=Ze.none;y.duration()?c=u=0:o.timeline=0}else if(g){ks(Sn(y.vars.defaults,{ease:"none"})),y._ease=qi(g.ease||i.ease||"none");var N=0,k,P,F;if(kt(g))g.forEach(function(B){return y.to(x,B,">")}),y.duration();else{w={};for(C in g)C==="ease"||C==="easeEach"||_S(C,g[C],w,g.easeEach);for(C in w)for(k=w[C].sort(function(B,H){return B.t-H.t}),N=0,M=0;M<k.length;M++)P=k[M],F={ease:P.e,duration:(P.t-(M?k[M-1].t:0))/100*c},F[C]=P.v,y.to(x,F,N),N+=F.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return p===!0&&!Sc&&(hi=Zn(o),ct.killTweensOf(x),hi=0),In(S,Zn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===At(S._time)&&Zt(h)&&qy(Zn(o))&&S.data!=="nested")&&(o._tTime=-et,o.render(Math.max(0,-u)||0)),m&&pd(Zn(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-et&&!u?l:i<et?0:i,f,p,g,_,m,d,S,x,y;if(!c)$y(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=At(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===At(h/_)&&(f=c,g--),f>c&&(f=c)),d=this._yoyo&&g&1,d&&(y=this._yEase,f=c-f),m=hs(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&Rd(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&this._time!==c&&this._initted&&(this._lock=a=1,this.render(At(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(md(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!s&&!g&&(un(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;x&&x.render(i<0?i:!f&&d?-et:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Gl(this,i,s,a),un(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&un(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Gl(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&yi(this,1),!s&&!(u&&!o)&&(h||o||d)&&(un(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Qs||cn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Pc(this,c),u=this._ease(c/this._dur),pS(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(wo(this,0),this.parent||fd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ds(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,hi&&hi.vars.overwrite!==!0)._first||Ds(this),this.parent&&a!==this.timeline.totalDuration()&&fs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?yn(i):o,c=this._ptLookup,u=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&Xy(o,l))return s==="all"&&(this._pt=0),Ds(this);for(h=this._op=this._op||[],s!=="all"&&(Rt(s)&&(_={},Jt(s,function(S){return _[S]=1}),s=_),s=mS(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&bo(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Ds(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Hs(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Hs(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return ct.killTweensOf(i,s,a)},e}(ea);Sn(xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jt("staggerTo,staggerFrom,staggerFromTo",function(r){xt[r]=function(){var e=new Xt,t=Wl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Lc=function(e,t,n){return e[t]=n},Od=function(e,t,n){return e[t](n)},gS=function(e,t,n,i){return e[t](i.fp,n)},vS=function(e,t,n){return e.setAttribute(t,n)},Dc=function(e,t){return pt(e[t])?Od:Mc(e[t])&&e.setAttribute?vS:Lc},Nd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},xS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Fd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Uc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},yS=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},SS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?bo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},MS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Bd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Qt=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Nd,this.d=l||this,this.set=c||Lc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=MS,this.m=n,this.mt=s,this.tween=i},r}();Jt(Ac+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return wc[r]=1});fn.TweenMax=fn.TweenLite=xt;fn.TimelineLite=fn.TimelineMax=Xt;ct=new Xt({sortChildren:!1,defaults:us,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hn.stringFilter=Ad;var ji=[],eo={},ES=[],Fh=0,bS=0,xl=function(e){return(eo[e]||ES).map(function(t){return t()})},jl=function(){var e=Date.now(),t=[];e-Fh>2&&(xl("matchMediaInit"),ji.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=gn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),xl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Fh=e,xl("matchMedia"))},zd=function(){function r(t,n){this.selector=n&&Xl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=bS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){pt(n)&&(s=i,i=n,n=pt);var a=this,o=function(){var c=dt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Xl(s)),dt=a,h=i.apply(a,arguments),pt(h)&&a._r.push(h),dt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===pt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=dt;dt=null,n(this),dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof xt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Xt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof xt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ji.length;a--;)ji[a].id===this.id&&ji.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),TS=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){zn(n)||(n={matches:n});var a=new zd(0,s||this.scope),o=a.conditions={},l,c,u;dt&&!a.selector&&(a.selector=dt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=gn.matchMedia(n[c]),l&&(ji.indexOf(a)<0&&ji.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(jl):l.addEventListener("change",jl)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),po={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return bd(i)})},timeline:function(e){return new Xt(e)},getTweensOf:function(e,t){return ct.getTweensOf(e,t)},getProperty:function(e,t,n,i){Rt(e)&&(e=yn(e)[0]);var s=Xi(e||{}).get,a=n?hd:ud;return n==="native"&&(n=""),e&&(t?a((an[t]&&an[t].get||s)(e,t,n,i)):function(o,l,c){return a((an[o]&&an[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=yn(e),e.length>1){var i=e.map(function(u){return tn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=an[t],o=Xi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Kr._pt=0,h.init(e,n?u+n:u,Kr,0,[e]),h.render(1,h),Kr._pt&&Uc(1,Kr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=tn.to(e,tr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qi(e.ease,us.ease)),Dh(us,e||{})},config:function(e){return Dh(hn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!an[o]&&!fn[o]&&Ks(t+" effect requires "+o+" plugin.")}),ml[t]=function(o,l,c){return n(yn(o),Sn(l||{},s),c)},a&&(Xt.prototype[t]=function(o,l,c){return this.add(ml[t](o,zn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ze[e]=qi(t)},parseEase:function(e,t){return arguments.length?qi(e,t):Ze},getById:function(e){return ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Xt(e),i,s;for(n.smoothChildTiming=Zt(e.smoothChildTiming),ct.remove(n),n._dp=0,n._time=n._tTime=ct._time,i=ct._first;i;)s=i._next,(t||!(!i._dur&&i instanceof xt&&i.vars.onComplete===i._targets[0]))&&In(n,i,i._start-i._delay),i=s;return In(ct,n,0),n},context:function(e,t){return e?new zd(e,t):dt},matchMedia:function(e){return new TS(e)},matchMediaRefresh:function(){return ji.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||jl()},addEventListener:function(e,t){var n=eo[e]||(eo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=eo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:iS,wrapYoyo:rS,distribute:vd,random:yd,snap:xd,normalize:nS,getUnit:Nt,clamp:Jy,splitColor:Td,toArray:yn,selector:Xl,mapRange:Md,pipe:eS,unitize:tS,interpolate:sS,shuffle:gd},install:sd,effects:ml,ticker:cn,updateRoot:Xt.updateRoot,plugins:an,globalTimeline:ct,core:{PropTween:Qt,globals:ad,Tween:xt,Timeline:Xt,Animation:ea,getCache:Xi,_removeLinkedListItem:bo,reverting:function(){return zt},context:function(e){return e&&dt&&(dt.data.push(e),e._ctx=dt),dt},suppressOverwrites:function(e){return Sc=e}}};Jt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return po[r]=xt[r]});cn.add(Xt.updateRoot);Kr=po.to({},{duration:0});var wS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},AS=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=wS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},yl=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Rt(s)&&(l={},Jt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}AS(o,s)}}}},tn=po.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},yl("roundProps",Yl),yl("modifiers"),yl("snap",xd))||po;xt.version=Xt.version=tn.version="3.12.4";rd=1;Ec()&&ds();Ze.Power0;Ze.Power1;Ze.Power2;Ze.Power3;Ze.Power4;Ze.Linear;Ze.Quad;Ze.Cubic;Ze.Quart;Ze.Quint;Ze.Strong;Ze.Elastic;Ze.Back;Ze.SteppedEase;Ze.Bounce;Ze.Sine;Ze.Expo;Ze.Circ;/*!
 * CSSPlugin 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bh,fi,ns,Ic,ki,zh,Oc,CS=function(){return typeof window<"u"},ii={},Fi=180/Math.PI,is=Math.PI/180,Gr=Math.atan2,kh=1e8,Nc=/([A-Z])/g,RS=/(left|right|width|margin|padding|x)/i,PS=/[\s,\(]\S/,On={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$l=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},LS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},DS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},US=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},kd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Hd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},IS=function(e,t,n){return e.style[t]=n},OS=function(e,t,n){return e.style.setProperty(t,n)},NS=function(e,t,n){return e._gsap[t]=n},FS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},BS=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},zS=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},ht="transform",en=ht+"Origin",kS=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in ii&&s){if(this.tfm=this.tfm||{},e!=="transform")e=On[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Jn(i,o)}):this.tfm[e]=a.x?a[e]:Jn(i,e),e===en&&(this.tfm.zOrigin=a.zOrigin);else return On.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(ht)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(en,t,"")),e=ht}(s||t)&&this.props.push(e,t,s[e])},Gd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},HS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Nc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Oc(),(!s||!s.isStart)&&!n[ht]&&(Gd(n),i.zOrigin&&n[en]&&(n[en]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Vd=function(e,t){var n={target:e,props:[],revert:HS,save:kS};return e._gsap||tn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Wd,Kl=function(e,t){var n=fi.createElementNS?fi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fi.createElement(e);return n&&n.style?n:fi.createElement(e)},Fn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Nc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ps(t)||t,1)||""},Hh="O,Moz,ms,Ms,Webkit".split(","),ps=function(e,t,n){var i=t||ki,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Hh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Hh[a]:"")+e},Zl=function(){CS()&&window.document&&(Bh=window,fi=Bh.document,ns=fi.documentElement,ki=Kl("div")||{style:{}},Kl("div"),ht=ps(ht),en=ht+"Origin",ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wd=!!ps("perspective"),Oc=tn.core.reverting,Ic=1)},Sl=function r(e){var t=Kl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(ns.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ns.removeChild(t),this.style.cssText=s,a},Gh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Xd=function(e){var t;try{t=e.getBBox()}catch{t=Sl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Sl||(t=Sl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Gh(e,["x","cx","x1"])||0,y:+Gh(e,["y","cy","y1"])||0,width:0,height:0}:t},Yd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Xd(e))},nr=function(e,t){if(t){var n=e.style,i;t in ii&&t!==en&&(t=ht),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Nc,"-$1").toLowerCase())):n.removeAttribute(t)}},di=function(e,t,n,i,s,a){var o=new Qt(e._pt,t,n,0,1,a?Hd:kd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Vh={deg:1,rad:1,turn:1},GS={grid:1,flex:1},Si=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ki.style,l=RS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,_,m,d;if(i===a||!s||Vh[i]||Vh[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),d=e.getCTM&&Yd(e),(p||a==="%")&&(ii[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[u],_t(p?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===fi||!_.appendChild)&&(_=fi.body),m=_._gsap,m&&p&&m.width&&l&&m.time===cn.time&&!m.uncache)return _t(s/m.width*h);if(p&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,g=e[u],S?e.style[t]=S:nr(e,t)}else(p||a==="%")&&!GS[Fn(_,"display")]&&(o.position=Fn(e,"position")),_===e&&(o.position="static"),_.appendChild(ki),g=ki[u],_.removeChild(ki),o.position="absolute";return l&&p&&(m=Xi(_),m.time=cn.time,m.width=_[u]),_t(f?g*s/h:g&&s?h/g*s:0)},Jn=function(e,t,n,i){var s;return Ic||Zl(),t in On&&t!=="transform"&&(t=On[t],~t.indexOf(",")&&(t=t.split(",")[0])),ii[t]&&t!=="transform"?(s=na(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:_o(Fn(e,en))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=mo[t]&&mo[t](e,t,n)||Fn(e,t)||ld(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Si(e,t,s,n)+n:s},VS=function(e,t,n,i){if(!n||n==="none"){var s=ps(t,e,1),a=s&&Fn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Fn(e,"borderTopColor"))}var o=new Qt(this._pt,e.style,t,0,1,Fd),l=0,c=0,u,h,f,p,g,_,m,d,S,x,y,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Fn(e,t)||i,_?e.style[t]=_:nr(e,t)),u=[n,i],Ad(u),n=u[0],i=u[1],f=n.match($r)||[],M=i.match($r)||[],M.length){for(;h=$r.exec(i);)m=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=ts(p,m)+y),d=parseFloat(m),x=m.substr((d+"").length),l=$r.lastIndex-x.length,x||(x=x||hn.units[t]||y,l===i.length&&(i+=x,o.e+=x)),y!==x&&(p=Si(e,t,_,x)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Hd:kd;return nd.test(i)&&(o.e=0),this._pt=o,o},Wh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},WS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Wh[n]||n,t[1]=Wh[i]||i,t.join(" ")},XS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ii[o]&&(l=1,o=o==="transformOrigin"?en:ht),nr(n,o);l&&(nr(n,ht),a&&(a.svg&&n.removeAttribute("transform"),na(n,1),a.uncache=1,Gd(i)))}},mo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Qt(e._pt,t,n,0,0,XS);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ta=[1,0,0,1,0,0],qd={},jd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xh=function(e){var t=Fn(e,ht);return jd(t)?ta:t.substr(7).match(td).map(_t)},Fc=function(e,t){var n=e._gsap||Xi(e),i=e.style,s=Xh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ta:s):(s===ta&&!e.offsetParent&&e!==ns&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,ns.appendChild(e)),s=Xh(e),l?i.display=l:nr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ns.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Jl=function(e,t,n,i,s,a){var o=e._gsap,l=s||Fc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],S=l[5],x=t.split(" "),y=parseFloat(x[0])||0,M=parseFloat(x[1])||0,w,b,C,v;n?l!==ta&&(b=p*m-g*_)&&(C=y*(m/b)+M*(-_/b)+(_*S-m*d)/b,v=y*(-g/b)+M*(p/b)-(p*S-g*d)/b,y=C,M=v):(w=Xd(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),M=w.y+(~(x[1]||x[0]).indexOf("%")?M/100*w.height:M)),i||i!==!1&&o.smooth?(d=y-c,S=M-u,o.xOffset=h+(d*p+S*_)-d,o.yOffset=f+(d*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[en]="0px 0px",a&&(di(a,o,"xOrigin",c,y),di(a,o,"yOrigin",u,M),di(a,o,"xOffset",h,o.xOffset),di(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},na=function(e,t){var n=e._gsap||new Ld(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Fn(e,en)||"0",u,h,f,p,g,_,m,d,S,x,y,M,w,b,C,v,T,O,N,k,P,F,B,H,ne,Z,j,re,ie,Y,J,me;return u=h=f=_=m=d=S=x=y=0,p=g=1,n.svg=!!(e.getCTM&&Yd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ht]!=="none"?l[ht]:"")),i.scale=i.rotate=i.translate="none"),b=Fc(e,n.svg),n.svg&&(n.uncache?(ne=e.getBBox(),c=n.xOrigin-ne.x+"px "+(n.yOrigin-ne.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Jl(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,b)),M=n.xOrigin||0,w=n.yOrigin||0,b!==ta&&(O=b[0],N=b[1],k=b[2],P=b[3],u=F=b[4],h=B=b[5],b.length===6?(p=Math.sqrt(O*O+N*N),g=Math.sqrt(P*P+k*k),_=O||N?Gr(N,O)*Fi:0,S=k||P?Gr(k,P)*Fi+_:0,S&&(g*=Math.abs(Math.cos(S*is))),n.svg&&(u-=M-(M*O+w*k),h-=w-(M*N+w*P))):(me=b[6],Y=b[7],j=b[8],re=b[9],ie=b[10],J=b[11],u=b[12],h=b[13],f=b[14],C=Gr(me,ie),m=C*Fi,C&&(v=Math.cos(-C),T=Math.sin(-C),H=F*v+j*T,ne=B*v+re*T,Z=me*v+ie*T,j=F*-T+j*v,re=B*-T+re*v,ie=me*-T+ie*v,J=Y*-T+J*v,F=H,B=ne,me=Z),C=Gr(-k,ie),d=C*Fi,C&&(v=Math.cos(-C),T=Math.sin(-C),H=O*v-j*T,ne=N*v-re*T,Z=k*v-ie*T,J=P*T+J*v,O=H,N=ne,k=Z),C=Gr(N,O),_=C*Fi,C&&(v=Math.cos(C),T=Math.sin(C),H=O*v+N*T,ne=F*v+B*T,N=N*v-O*T,B=B*v-F*T,O=H,F=ne),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=_t(Math.sqrt(O*O+N*N+k*k)),g=_t(Math.sqrt(B*B+me*me)),C=Gr(F,B),S=Math.abs(C)>2e-4?C*Fi:0,y=J?1/(J<0?-J:J):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!jd(Fn(e,ht)),H&&e.setAttribute("transform",H))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(p*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=_t(p),n.scaleY=_t(g),n.rotation=_t(_)+o,n.rotationX=_t(m)+o,n.rotationY=_t(d)+o,n.skewX=S+o,n.skewY=x+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[en]=_o(c)),n.xOffset=n.yOffset=0,n.force3D=hn.force3D,n.renderTransform=n.svg?qS:Wd?$d:YS,n.uncache=0,n},_o=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ml=function(e,t,n){var i=Nt(t);return _t(parseFloat(t)+parseFloat(Si(e,"x",n+"px",i)))+i},YS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$d(e,t)},Ii="0deg",Cs="0px",Oi=") ",$d=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,S=n.target,x=n.zOrigin,y="",M=d==="auto"&&e&&e!==1||d===!0;if(x&&(h!==Ii||u!==Ii)){var w=parseFloat(u)*is,b=Math.sin(w),C=Math.cos(w),v;w=parseFloat(h)*is,v=Math.cos(w),a=Ml(S,a,b*v*-x),o=Ml(S,o,-Math.sin(w)*-x),l=Ml(S,l,C*v*-x+x)}m!==Cs&&(y+="perspective("+m+Oi),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(M||a!==Cs||o!==Cs||l!==Cs)&&(y+=l!==Cs||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Oi),c!==Ii&&(y+="rotate("+c+Oi),u!==Ii&&(y+="rotateY("+u+Oi),h!==Ii&&(y+="rotateX("+h+Oi),(f!==Ii||p!==Ii)&&(y+="skew("+f+", "+p+Oi),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Oi),S.style[ht]=y||"translate(0, 0)"},qS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,S=n.forceCSS,x=parseFloat(a),y=parseFloat(o),M,w,b,C,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=is,c*=is,M=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=is,v=Math.tan(c-u),v=Math.sqrt(1+v*v),b*=v,C*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),M*=v,w*=v)),M=_t(M),w=_t(w),b=_t(b),C=_t(C)):(M=h,C=f,w=b=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=Si(p,"x",a,"px"),y=Si(p,"y",o,"px")),(g||_||m||d)&&(x=_t(x+g-(g*M+_*b)+m),y=_t(y+_-(g*w+_*C)+d)),(i||s)&&(v=p.getBBox(),x=_t(x+i/100*v.width),y=_t(y+s/100*v.height)),v="matrix("+M+","+w+","+b+","+C+","+x+","+y+")",p.setAttribute("transform",v),S&&(p.style[ht]=v)},jS=function(e,t,n,i,s){var a=360,o=Rt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Fi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*kh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*kh)%a-~~(c/a)*a)),e._pt=f=new Qt(e._pt,t,n,i,c,LS),f.e=u,f.u="deg",e._props.push(n),f},Yh=function(e,t){for(var n in t)e[n]=t[n];return e},$S=function(e,t,n){var i=Yh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ht]=t,o=na(n,1),nr(n,ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ht],a[ht]=t,o=na(n,1),a[ht]=c);for(l in ii)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=Nt(c),g=Nt(u),h=p!==g?Si(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Qt(e._pt,o,l,h,f-h,$l),e._pt.u=g||0,e._props.push(l));Yh(o,i)};Jt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});mo[e>1?"border"+r:r]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(g){return Jn(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,h)}});var Kd={name:"css",register:Zl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,p,g,_,m,d,S,x,y,M,w,b,C;Ic||Zl(),this.styles=this.styles||Vd(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(an[_]&&Dd(_,t,n,i,e,s)))){if(p=typeof u,g=mo[_],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Js(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",vi.lastIndex=0,vi.test(c)||(m=Nt(c),d=Nt(u)),d?m!==d&&(c=Si(e,_,c,d)+d):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Rt(c)&&~c.indexOf("random(")&&(c=Js(c)),Nt(c+"")||c==="auto"||(c+=hn.units[_]||Nt(Jn(e,_))||""),(c+"").charAt(1)==="="&&(c=Jn(e,_))):c=Jn(e,_),f=parseFloat(c),S=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in On&&(_==="autoAlpha"&&(f===1&&Jn(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,o.visibility),di(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=On[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in ii,x){if(this.styles.save(_),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||na(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Qt(this._pt,o,ht,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new Qt(this._pt,M,"scaleY",M.scaleY,(S?ts(M.scaleY,S+h):h)-M.scaleY||0,$l),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(en,0,o[en]),u=WS(u),M.svg?Jl(e,u,0,w,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==M.zOrigin&&di(this,M,"zOrigin",M.zOrigin,d),di(this,o,_,_o(c),_o(u)));continue}else if(_==="svgOrigin"){Jl(e,u,1,w,0,this);continue}else if(_ in qd){jS(this,M,_,f,S?ts(f,S+u):u);continue}else if(_==="smoothOrigin"){di(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){$S(this,u,e);continue}}else _ in o||(_=ps(_)||_);if(x||(h||h===0)&&(f||f===0)&&!PS.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),d=Nt(u)||(_ in hn.units?hn.units[_]:m),m!==d&&(f=Si(e,_,c,d)),this._pt=new Qt(this._pt,x?M:o,_,f,(S?ts(f,S+h):h)-f,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?US:$l),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=DS);else if(_ in o)VS.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){Tc(_,u);continue}x||(_ in o?C.push(_,0,o[_]):C.push(_,1,c||e[_])),a.push(_)}}b&&Bd(this)},render:function(e,t){if(t.tween._time||!Oc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Jn,aliases:On,getSetter:function(e,t,n){var i=On[t];return i&&i.indexOf(",")<0&&(t=i),t in ii&&t!==en&&(e._gsap.x||Jn(e,"x"))?n&&zh===n?t==="scale"?FS:NS:(zh=n||{})&&(t==="scale"?BS:zS):e.style&&!Mc(e.style[t])?IS:~t.indexOf("-")?OS:Dc(e,t)},core:{_removeProperty:nr,_getMatrix:Fc}};tn.utils.checkPrefix=ps;tn.core.getStyleSaver=Vd;(function(r,e,t,n){var i=Jt(r+","+e+","+t,function(s){ii[s]=1});Jt(e,function(s){hn.units[s]="deg",qd[s]=1}),On[i[13]]=r+","+e,Jt(n,function(s){var a=s.split(":");On[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){hn.units[r]="px"});tn.registerPlugin(Kd);var rs=tn.registerPlugin(Kd)||tn;rs.core.Tween;class KS extends wy{constructor(e){super(e),this.type=ei}parse(e){const a=function(C,v){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},u=`
`,h=function(C,v,T){v=v||1024;let N=C.pos,k=-1,P=0,F="",B=String.fromCharCode.apply(null,new Uint16Array(C.subarray(N,N+128)));for(;0>(k=B.indexOf(u))&&P<v&&N<C.byteLength;)F+=B,P+=B.length,N+=128,B+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(N,N+128)));return-1<k?(T!==!1&&(C.pos+=P+k+1),F+B.slice(0,k)):!1},f=function(C){const v=/^#\?(\S+)/,T=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let F,B;for((C.pos>=C.byteLength||!(F=h(C)))&&a(1,"no header found"),(B=F.match(v))||a(3,"bad initial token"),P.valid|=1,P.programtype=B[1],P.string+=F+`
`;F=h(C),F!==!1;){if(P.string+=F+`
`,F.charAt(0)==="#"){P.comments+=F+`
`;continue}if((B=F.match(T))&&(P.gamma=parseFloat(B[1])),(B=F.match(O))&&(P.exposure=parseFloat(B[1])),(B=F.match(N))&&(P.valid|=2,P.format=B[1]),(B=F.match(k))&&(P.valid|=4,P.height=parseInt(B[1],10),P.width=parseInt(B[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},p=function(C,v,T){const O=v;if(O<8||O>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);O!==(C[2]<<8|C[3])&&a(3,"wrong scanline width");const N=new Uint8Array(4*v*T);N.length||a(4,"unable to allocate buffer space");let k=0,P=0;const F=4*O,B=new Uint8Array(4),H=new Uint8Array(F);let ne=T;for(;ne>0&&P<C.byteLength;){P+4>C.byteLength&&a(1),B[0]=C[P++],B[1]=C[P++],B[2]=C[P++],B[3]=C[P++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=O)&&a(3,"bad rgbe scanline format");let Z=0,j;for(;Z<F&&P<C.byteLength;){j=C[P++];const ie=j>128;if(ie&&(j-=128),(j===0||Z+j>F)&&a(3,"bad scanline data"),ie){const Y=C[P++];for(let J=0;J<j;J++)H[Z++]=Y}else H.set(C.subarray(P,P+j),Z),Z+=j,P+=j}const re=O;for(let ie=0;ie<re;ie++){let Y=0;N[k]=H[ie+Y],Y+=O,N[k+1]=H[ie+Y],Y+=O,N[k+2]=H[ie+Y],Y+=O,N[k+3]=H[ie+Y],k+=4}ne--}return N},g=function(C,v,T,O){const N=C[v+3],k=Math.pow(2,N-128)/255;T[O+0]=C[v+0]*k,T[O+1]=C[v+1]*k,T[O+2]=C[v+2]*k,T[O+3]=1},_=function(C,v,T,O){const N=C[v+3],k=Math.pow(2,N-128)/255;T[O+0]=Pa.toHalfFloat(Math.min(C[v+0]*k,65504)),T[O+1]=Pa.toHalfFloat(Math.min(C[v+1]*k,65504)),T[O+2]=Pa.toHalfFloat(Math.min(C[v+2]*k,65504)),T[O+3]=Pa.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const d=f(m),S=d.width,x=d.height,y=p(m.subarray(m.pos),S,x);let M,w,b;switch(this.type){case Cn:b=y.length/4;const C=new Float32Array(b*4);for(let T=0;T<b;T++)g(y,T*4,C,T*4);M=C,w=Cn;break;case ei:b=y.length/4;const v=new Uint16Array(b*4);for(let T=0;T<b;T++)_(y,T*4,v,T*4);M=v,w=ei;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:S,height:x,data:M,header:d.string,gamma:d.gamma,exposure:d.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){switch(a.type){case Cn:case ei:a.colorSpace=Bn,a.minFilter=Dt,a.magFilter=Dt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,i)}}const qh={type:"change"},El={type:"start"},jh={type:"end"},qa=new bf,$h=new ci,ZS=Math.cos(70*Um.DEG2RAD);class JS extends ir{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:br.ROTATE,MIDDLE:br.DOLLY,RIGHT:br.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",E),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(qh),n.update(),s=i.NONE},this.update=function(){const D=new U,de=new Ji().setFromUnitVectors(e.up,new U(0,1,0)),ee=de.clone().invert(),Ne=new U,Re=new Ji,De=new U,be=2*Math.PI;return function(We=null){const I=n.object.position;D.copy(I).sub(n.target),D.applyQuaternion(de),o.setFromVector3(D),n.autoRotate&&s===i.NONE&&O(v(We)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let _e=n.minAzimuthAngle,ae=n.maxAzimuthAngle;isFinite(_e)&&isFinite(ae)&&(_e<-Math.PI?_e+=be:_e>Math.PI&&(_e-=be),ae<-Math.PI?ae+=be:ae>Math.PI&&(ae-=be),_e<=ae?o.theta=Math.max(_e,Math.min(ae,o.theta)):o.theta=o.theta>(_e+ae)/2?Math.max(_e,o.theta):Math.min(ae,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=Z(o.radius):o.radius=Z(o.radius*c),D.setFromSpherical(o),D.applyQuaternion(ee),I.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let $=!1;if(n.zoomToCursor&&w){let ce=null;if(n.object.isPerspectiveCamera){const Le=D.length();ce=Z(Le*c);const Xe=Le-ce;n.object.position.addScaledVector(y,Xe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Le=new U(M.x,M.y,0);Le.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),$=!0;const Xe=new U(M.x,M.y,0);Xe.unproject(n.object),n.object.position.sub(Xe).add(Le),n.object.updateMatrixWorld(),ce=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ce!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ce).add(n.object.position):(qa.origin.copy(n.object.position),qa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(qa.direction))<ZS?e.lookAt(n.target):($h.setFromNormalAndCoplanarPoint(n.object.up,n.target),qa.intersectPlane($h,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),$=!0);return c=1,w=!1,$||Ne.distanceToSquared(n.object.position)>a||8*(1-Re.dot(n.object.quaternion))>a||De.distanceToSquared(n.target)>0?(n.dispatchEvent(qh),Ne.copy(n.object.position),Re.copy(n.object.quaternion),De.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",se),n.domElement.removeEventListener("pointerdown",xe),n.domElement.removeEventListener("pointercancel",Ie),n.domElement.removeEventListener("wheel",R),n.domElement.removeEventListener("pointermove",ye),n.domElement.removeEventListener("pointerup",Ie),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Ph,l=new Ph;let c=1;const u=new U,h=new ue,f=new ue,p=new ue,g=new ue,_=new ue,m=new ue,d=new ue,S=new ue,x=new ue,y=new U,M=new ue;let w=!1;const b=[],C={};function v(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function O(D){l.theta-=D}function N(D){l.phi-=D}const k=function(){const D=new U;return function(ee,Ne){D.setFromMatrixColumn(Ne,0),D.multiplyScalar(-ee),u.add(D)}}(),P=function(){const D=new U;return function(ee,Ne){n.screenSpacePanning===!0?D.setFromMatrixColumn(Ne,1):(D.setFromMatrixColumn(Ne,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(ee),u.add(D)}}(),F=function(){const D=new U;return function(ee,Ne){const Re=n.domElement;if(n.object.isPerspectiveCamera){const De=n.object.position;D.copy(De).sub(n.target);let be=D.length();be*=Math.tan(n.object.fov/2*Math.PI/180),k(2*ee*be/Re.clientHeight,n.object.matrix),P(2*Ne*be/Re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(ee*(n.object.right-n.object.left)/n.object.zoom/Re.clientWidth,n.object.matrix),P(Ne*(n.object.top-n.object.bottom)/n.object.zoom/Re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function B(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(D){if(!n.zoomToCursor)return;w=!0;const de=n.domElement.getBoundingClientRect(),ee=D.clientX-de.left,Ne=D.clientY-de.top,Re=de.width,De=de.height;M.x=ee/Re*2-1,M.y=-(Ne/De)*2+1,y.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function j(D){h.set(D.clientX,D.clientY)}function re(D){ne(D),d.set(D.clientX,D.clientY)}function ie(D){g.set(D.clientX,D.clientY)}function Y(D){f.set(D.clientX,D.clientY),p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const de=n.domElement;O(2*Math.PI*p.x/de.clientHeight),N(2*Math.PI*p.y/de.clientHeight),h.copy(f),n.update()}function J(D){S.set(D.clientX,D.clientY),x.subVectors(S,d),x.y>0?B(T()):x.y<0&&H(T()),d.copy(S),n.update()}function me(D){_.set(D.clientX,D.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(_),n.update()}function we(D){ne(D),D.deltaY<0?H(T()):D.deltaY>0&&B(T()),n.update()}function Me(D){let de=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),de=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),de=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),de=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),de=!0;break}de&&(D.preventDefault(),n.update())}function Oe(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),de=.5*(b[0].pageY+b[1].pageY);h.set(D,de)}}function Be(){if(b.length===1)g.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),de=.5*(b[0].pageY+b[1].pageY);g.set(D,de)}}function Ae(){const D=b[0].pageX-b[1].pageX,de=b[0].pageY-b[1].pageY,ee=Math.sqrt(D*D+de*de);d.set(0,ee)}function Ue(){n.enableZoom&&Ae(),n.enablePan&&Be()}function L(){n.enableZoom&&Ae(),n.enableRotate&&Oe()}function pe(D){if(b.length==1)f.set(D.pageX,D.pageY);else{const ee=ve(D),Ne=.5*(D.pageX+ee.x),Re=.5*(D.pageY+ee.y);f.set(Ne,Re)}p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const de=n.domElement;O(2*Math.PI*p.x/de.clientHeight),N(2*Math.PI*p.y/de.clientHeight),h.copy(f)}function K(D){if(b.length===1)_.set(D.pageX,D.pageY);else{const de=ve(D),ee=.5*(D.pageX+de.x),Ne=.5*(D.pageY+de.y);_.set(ee,Ne)}m.subVectors(_,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(_)}function he(D){const de=ve(D),ee=D.pageX-de.x,Ne=D.pageY-de.y,Re=Math.sqrt(ee*ee+Ne*Ne);S.set(0,Re),x.set(0,Math.pow(S.y/d.y,n.zoomSpeed)),B(x.y),d.copy(S)}function te(D){n.enableZoom&&he(D),n.enablePan&&K(D)}function Ce(D){n.enableZoom&&he(D),n.enableRotate&&pe(D)}function xe(D){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",ye),n.domElement.addEventListener("pointerup",Ie)),le(D),D.pointerType==="touch"?V(D):je(D))}function ye(D){n.enabled!==!1&&(D.pointerType==="touch"?oe(D):rt(D))}function Ie(D){Te(D),b.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",ye),n.domElement.removeEventListener("pointerup",Ie)),n.dispatchEvent(jh),s=i.NONE}function je(D){let de;switch(D.button){case 0:de=n.mouseButtons.LEFT;break;case 1:de=n.mouseButtons.MIDDLE;break;case 2:de=n.mouseButtons.RIGHT;break;default:de=-1}switch(de){case br.DOLLY:if(n.enableZoom===!1)return;re(D),s=i.DOLLY;break;case br.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;ie(D),s=i.PAN}else{if(n.enableRotate===!1)return;j(D),s=i.ROTATE}break;case br.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;j(D),s=i.ROTATE}else{if(n.enablePan===!1)return;ie(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(El)}function rt(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Y(D);break;case i.DOLLY:if(n.enableZoom===!1)return;J(D);break;case i.PAN:if(n.enablePan===!1)return;me(D);break}}function R(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(El),we(D),n.dispatchEvent(jh))}function E(D){n.enabled===!1||n.enablePan===!1||Me(D)}function V(D){switch(fe(D),b.length){case 1:switch(n.touches.ONE){case Tr.ROTATE:if(n.enableRotate===!1)return;Oe(),s=i.TOUCH_ROTATE;break;case Tr.PAN:if(n.enablePan===!1)return;Be(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Tr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ue(),s=i.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;L(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(El)}function oe(D){switch(fe(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;pe(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;K(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;te(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ce(D),n.update();break;default:s=i.NONE}}function se(D){n.enabled!==!1&&D.preventDefault()}function le(D){b.push(D)}function Te(D){delete C[D.pointerId];for(let de=0;de<b.length;de++)if(b[de].pointerId==D.pointerId){b.splice(de,1);return}}function fe(D){let de=C[D.pointerId];de===void 0&&(de=new ue,C[D.pointerId]=de),de.set(D.pageX,D.pageY)}function ve(D){const de=D.pointerId===b[0].pointerId?b[1]:b[0];return C[de.pointerId]}n.domElement.addEventListener("contextmenu",se),n.domElement.addEventListener("pointerdown",xe),n.domElement.addEventListener("pointercancel",Ie),n.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}const ar="./assets/giraffe-xgoLGSLl.jpg",or=new la,Bc=new $e(new ot(5,5,20),new tt({map:or.load(ar)})),lr=new $e(new ot(1,1,25),new tt({map:or.load(ar)})),cr=new $e(new ot(1,1,25),new tt({map:or.load(ar)})),ur=new $e(new ot(1,1,25),new tt({map:or.load(ar)})),hr=new $e(new ot(1,1,25),new tt({map:or.load(ar)})),zc=new $e(new ot(2,3,30),new tt({map:or.load(ar)})),ua=new $e(new ot(3,2,10),new tt({map:or.load(ar)}));Bc.castShadow=!0;ua.castShadow=!0;lr.castShadow=!0;cr.castShadow=!0;ur.castShadow=!0;hr.castShadow=!0;zc.castShadow=!0;lr.geometry.translate(0,-12.5,0);cr.geometry.translate(0,-12.5,0);ur.geometry.translate(0,-12.5,0);hr.geometry.translate(0,-12.5,0);const xs=new $t,Ft=new $t,QS=new yc;Ft.add(Bc);Ft.add(lr);Ft.add(cr);Ft.add(ur);Ft.add(hr);zc.position.y=33;ua.position.y=48;ua.position.x=3;xs.add(zc);xs.add(ua);Ft.add(xs);ua.rotateZ(Math.PI/2);xs.position.y=-18;xs.position.x=7;lr.position.x=8;lr.position.y=0;lr.position.z=5;cr.position.x=-8;cr.position.y=0;cr.position.z=5;ur.position.x=8;ur.position.y=0;ur.position.z=-5;hr.position.x=-8;hr.position.y=0;hr.position.z=-5;Bc.rotateZ(Math.PI/2);const eM=r=>{const e=QS.getElapsedTime();lr.rotation.z=.2*Math.sin(2*e*r),cr.rotation.z=-.2*Math.sin(2*e*r),ur.rotation.z=-.2*Math.sin(2*e*r),hr.rotation.z=.2*Math.sin(2*e*r),xs.rotation.z=.02*Math.sin(2*e*r)},Zd="./assets/hippo-q9XRb4Zu.jpg",Jd=new la,kc=new $e(new _s(15,40,20),new tt({map:Jd.load(Zd)})),fr=new $e(new ot(4,4,5),new tt({color:12302777})),dr=new $e(new ot(4,4,5),new tt({color:12302777})),pr=new $e(new ot(4,4,5),new tt({color:12302777})),mr=new $e(new ot(4,4,5),new tt({color:12302777})),Hc=new $e(new ot(2,3,2),new tt({color:12302777})),ha=new $e(new ot(10,7,20),new tt({map:Jd.load(Zd)}));kc.castShadow=!0;ha.castShadow=!0;fr.castShadow=!0;dr.castShadow=!0;pr.castShadow=!0;mr.castShadow=!0;Hc.castShadow=!0;fr.geometry.translate(0,-2.5,0);dr.geometry.translate(0,-2.5,0);pr.geometry.translate(0,-2.5,0);mr.geometry.translate(0,-2.5,0);const ys=new $t,Yt=new $t,tM=new yc;Yt.add(kc);Yt.add(fr);Yt.add(dr);Yt.add(pr);Yt.add(mr);Hc.position.y=17;ha.position.y=22;ha.position.x=17;ys.add(Hc);ys.add(ha);Yt.add(ys);ha.rotateZ(Math.PI/2);ys.position.y=-18;ys.position.x=7;fr.position.x=15;fr.position.y=-7;fr.position.z=7;dr.position.x=-15;dr.position.y=-7;dr.position.z=7;pr.position.x=15;pr.position.y=-7;pr.position.z=-7;mr.position.x=-15;mr.position.y=-7;mr.position.z=-7;kc.rotateZ(Math.PI/2);const nM=r=>{const e=tM.getElapsedTime();fr.rotation.z=.2*Math.sin(2*e*r),dr.rotation.z=-.2*Math.sin(2*e*r),pr.rotation.z=-.2*Math.sin(2*e*r),mr.rotation.z=.2*Math.sin(2*e*r),ys.rotation.z=.02*Math.sin(2*e*r)},iM="./assets/dress-QRraHEPU.jpg",rM=new la,Qd=new $e(new ot(3,5,13),new tt({map:rM.load(iM)})),fa=new $e(new ot(1,.6,5),new tt({color:14139262})),da=new $e(new ot(1,.6,5),new tt({color:14139262})),bi=new $e(new ot(1,.4,7),new tt({color:14139262})),Ti=new $e(new ot(1,.4,7),new tt({color:14139262})),Ss=new $e(new oa(5),new tt({color:14139262}));Qd.castShadow=!0;Ss.castShadow=!0;fa.castShadow=!0;da.castShadow=!0;bi.castShadow=!0;Ti.castShadow=!0;bi.geometry.translate(0,-2.5,0);Ti.geometry.translate(0,-2.5,0);const dn=new $t,sM=new yc;dn.add(Qd);dn.add(fa);dn.add(da);dn.add(bi);dn.add(Ti);dn.add(Ss);Ss.position.y=22;Ss.position.x=17;fa.position.x=3;fa.position.y=-8;fa.position.z=0;da.position.x=-3;da.position.y=-8;da.position.z=0;bi.rotateZ(Math.PI/2);bi.position.x=3;bi.position.y=4.5;bi.position.z=0;Ti.rotateZ(-Math.PI/2);Ti.position.x=-3;Ti.position.y=4.5;Ti.position.z=0;Ss.position.x=0;Ss.position.y=10;const aM=()=>{const r=sM.getElapsedTime();bi.rotation.z=Math.PI/2-.3*Math.sin(5*r),Ti.rotation.z=-Math.PI/2-.3*Math.sin(5*r)},ep="./assets/wood--6T2QFK5.jpg",oM="./assets/leaves-fpfGAgQ1.jpg",lM="./assets/tree-cY7Vkxk8.jpg",Ao=new la;let Hi=new $t,tp=new $e(new ot(1.5,1.5,20),new tt({map:Ao.load(ep)})),pa=new $e(new ot(1,1,7),new tt({map:Ao.load(ep)}));pa.rotateX(Math.PI/2);let Gc=pa.clone();pa.position.y=7;Gc.position.y=-7;tp.castShadow=!0;pa.castShadow=!0;Gc.castShadow=!0;Hi.add(tp);Hi.add(pa);Hi.add(Gc);function cM(r,e,t,n){Hi.position.x=e,Hi.position.y=t,Hi.position.z=n;let i=new $t,s=Hi.clone();i.add(s);let a;for(a=0;a<r-1;++a)s=s.clone(),s.position.z+=7,i.add(s);return i}const np=new $e(new ot(3,3,70),new tt({map:Ao.load(lM)})),Vc=new $e(new oa(20),new tt({map:Ao.load(oM)})),Gn=new $t;Gn.add(np);Gn.add(Vc);np.castShadow=!0;Vc.castShadow=!0;Vc.position.y=35;const uM=new $e(new ot(1,1,30),new tt({color:0})),ip=new $e(new oa(5),new pc({color:16768804})),_r=new $t;_r.add(uM);_r.add(ip);ip.position.y=10;function hM(r){if(r&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function Zr(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),a=r.a,o=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=r.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+a+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+a+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var Kh=Array.prototype.forEach,Rs=Array.prototype.slice,Q={BREAK:{},extend:function(e){return this.each(Rs.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},defaults:function(e){return this.each(Rs.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},compose:function(){var e=Rs.call(arguments);return function(){for(var t=Rs.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(Kh&&e.forEach&&e.forEach===Kh)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var a in e)if(t.call(n,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,a=arguments;function o(){i=null,n||e.apply(s,a)}var l=n||!i;clearTimeout(i),i=setTimeout(o,t),l&&e.apply(s,a)}},toArray:function(e){return e.toArray?e.toArray():Rs.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},fM=[{litmus:Q.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Zr},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Zr},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Zr},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Zr}}},{litmus:Q.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:Q.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:Q.isObject,conversions:{RGBA_OBJ:{read:function(e){return Q.isNumber(e.r)&&Q.isNumber(e.g)&&Q.isNumber(e.b)&&Q.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return Q.isNumber(e.r)&&Q.isNumber(e.g)&&Q.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return Q.isNumber(e.h)&&Q.isNumber(e.s)&&Q.isNumber(e.v)&&Q.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return Q.isNumber(e.h)&&Q.isNumber(e.s)&&Q.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Ps=void 0,ja=void 0,Ql=function(){ja=!1;var e=arguments.length>1?Q.toArray(arguments):arguments[0];return Q.each(fM,function(t){if(t.litmus(e))return Q.each(t.conversions,function(n,i){if(Ps=n.read(e),ja===!1&&Ps!==!1)return ja=Ps,Ps.conversionName=i,Ps.conversion=n,Q.BREAK}),Q.BREAK}),ja},Zh=void 0,go={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),a=n*(1-t),o=n*(1-s*t),l=n*(1-(1-s)*t),c=[[n,l,a],[o,n,a],[a,n,l],[a,o,n],[l,a,n],[n,a,o]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),a=s-i,o=void 0,l=void 0;if(s!==0)l=a/s;else return{h:NaN,s:0,v:0};return e===s?o=(t-n)/a:t===s?o=2+(n-e)/a:o=4+(e-t)/a,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Zh=t*8)|e&~(255<<Zh)}},dM=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Rn=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Pn=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),Mi=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var a=i.get;return a===void 0?void 0:a.call(n)}},wi=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},Ai=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},Ct=function(){function r(){if(Rn(this,r),this.__state=Ql.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Pn(r,[{key:"toString",value:function(){return Zr(this)}},{key:"toHexString",value:function(){return Zr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function Wc(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Ct.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(Ct.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Xc(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Ct.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(Ct.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}Ct.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=go.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")Q.extend(r.__state,go.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};Ct.recalculateHSV=function(r){var e=go.rgb_to_hsv(r.r,r.g,r.b);Q.extend(r.__state,{s:e.s,v:e.v}),Q.isNaN(e.h)?Q.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};Ct.COMPONENTS=["r","g","b","h","s","v","hex","a"];Wc(Ct.prototype,"r",2);Wc(Ct.prototype,"g",1);Wc(Ct.prototype,"b",0);Xc(Ct.prototype,"h");Xc(Ct.prototype,"s");Xc(Ct.prototype,"v");Object.defineProperty(Ct.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Ct.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=go.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var gr=function(){function r(e,t){Rn(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Pn(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),pM={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},rp={};Q.each(pM,function(r,e){Q.each(r,function(t){rp[t]=e})});var mM=/(\d+(\.\d+)?)px/;function Dn(r){if(r==="0"||Q.isUndefined(r))return 0;var e=r.match(mM);return Q.isNull(e)?0:parseFloat(e[1])}var G={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;Q.isUndefined(s)&&(s=!0),Q.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},a=rp[t];if(!a)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;o.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;Q.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}Q.defaults(o,i),e.dispatchEvent(o)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),G},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),G},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return G},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return G},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Dn(t["border-left-width"])+Dn(t["border-right-width"])+Dn(t["padding-left"])+Dn(t["padding-right"])+Dn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Dn(t["border-top-width"])+Dn(t["border-bottom-width"])+Dn(t["padding-top"])+Dn(t["padding-bottom"])+Dn(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},sp=function(r){wi(e,r);function e(t,n){Rn(this,e);var i=Ai(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function a(){s.setValue(!s.__prev)}return G.bind(i.__checkbox,"change",a,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Pn(e,[{key:"setValue",value:function(n){var i=Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(gr),_M=function(r){wi(e,r);function e(t,n,i){Rn(this,e);var s=Ai(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i,o=s;if(s.__select=document.createElement("select"),Q.isArray(a)){var l={};Q.each(a,function(c){l[c]=c}),a=l}return Q.each(a,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),o.__select.appendChild(h)}),s.updateDisplay(),G.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),s.domElement.appendChild(s.__select),s}return Pn(e,[{key:"setValue",value:function(n){var i=Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return G.isActive(this.__select)?this:(this.__select.value=this.getValue(),Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(gr),gM=function(r){wi(e,r);function e(t,n){Rn(this,e);var i=Ai(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function a(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),G.bind(i.__input,"keyup",a),G.bind(i.__input,"change",a),G.bind(i.__input,"blur",o),G.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Pn(e,[{key:"updateDisplay",value:function(){return G.isActive(this.__input)||(this.__input.value=this.getValue()),Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(gr);function Jh(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var ap=function(r){wi(e,r);function e(t,n,i){Rn(this,e);var s=Ai(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i||{};return s.__min=a.min,s.__max=a.max,s.__step=a.step,Q.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Jh(s.__impliedStep),s}return Pn(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Jh(n),this}}]),e}(gr);function vM(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var vo=function(r){wi(e,r);function e(t,n,i){Rn(this,e);var s=Ai(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var a=s,o=void 0;function l(){var g=parseFloat(a.__input.value);Q.isNaN(g)||a.setValue(g)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){c()}function h(g){var _=o-g.clientY;a.setValue(a.getValue()+_*a.__impliedStep),o=g.clientY}function f(){G.unbind(window,"mousemove",h),G.unbind(window,"mouseup",f),c()}function p(g){G.bind(window,"mousemove",h),G.bind(window,"mouseup",f),o=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),G.bind(s.__input,"change",l),G.bind(s.__input,"blur",u),G.bind(s.__input,"mousedown",p),G.bind(s.__input,"keydown",function(g){g.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Pn(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():vM(this.getValue(),this.__precision),Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ap);function Qh(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var ec=function(r){wi(e,r);function e(t,n,i,s,a){Rn(this,e);var o=Ai(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:a})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),G.bind(o.__background,"mousedown",c),G.bind(o.__background,"touchstart",f),G.addClass(o.__background,"slider"),G.addClass(o.__foreground,"slider-fg");function c(_){document.activeElement.blur(),G.bind(window,"mousemove",u),G.bind(window,"mouseup",h),u(_)}function u(_){_.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(Qh(_.clientX,m.left,m.right,l.__min,l.__max)),!1}function h(){G.unbind(window,"mousemove",u),G.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(_){_.touches.length===1&&(G.bind(window,"touchmove",p),G.bind(window,"touchend",g),p(_))}function p(_){var m=_.touches[0].clientX,d=l.__background.getBoundingClientRect();l.setValue(Qh(m,d.left,d.right,l.__min,l.__max))}function g(){G.unbind(window,"touchmove",p),G.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Pn(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ap),op=function(r){wi(e,r);function e(t,n,i){Rn(this,e);var s=Ai(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,G.bind(s.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),G.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Pn(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(gr),tc=function(r){wi(e,r);function e(t,n){Rn(this,e);var i=Ai(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new Ct(i.getValue()),i.__temp=new Ct(0);var s=i;i.domElement=document.createElement("div"),G.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",G.bind(i.__input,"keydown",function(_){_.keyCode===13&&h.call(this)}),G.bind(i.__input,"blur",h),G.bind(i.__selector,"mousedown",function(){G.addClass(this,"drag").bind(window,"mouseup",function(){G.removeClass(s.__selector,"drag")})}),G.bind(i.__selector,"touchstart",function(){G.addClass(this,"drag").bind(window,"touchend",function(){G.removeClass(s.__selector,"drag")})});var a=document.createElement("div");Q.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Q.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Q.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Q.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Q.extend(a.style,{width:"100%",height:"100%",background:"none"}),ef(a,"top","rgba(0,0,0,0)","#000"),Q.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),yM(i.__hue_field),Q.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),G.bind(i.__saturation_field,"mousedown",o),G.bind(i.__saturation_field,"touchstart",o),G.bind(i.__field_knob,"mousedown",o),G.bind(i.__field_knob,"touchstart",o),G.bind(i.__hue_field,"mousedown",l),G.bind(i.__hue_field,"touchstart",l);function o(_){p(_),G.bind(window,"mousemove",p),G.bind(window,"touchmove",p),G.bind(window,"mouseup",c),G.bind(window,"touchend",c)}function l(_){g(_),G.bind(window,"mousemove",g),G.bind(window,"touchmove",g),G.bind(window,"mouseup",u),G.bind(window,"touchend",u)}function c(){G.unbind(window,"mousemove",p),G.unbind(window,"touchmove",p),G.unbind(window,"mouseup",c),G.unbind(window,"touchend",c),f()}function u(){G.unbind(window,"mousemove",g),G.unbind(window,"touchmove",g),G.unbind(window,"mouseup",u),G.unbind(window,"touchend",u),f()}function h(){var _=Ql(this.value);_!==!1?(s.__color.__state=_,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function f(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(a),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function p(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),d=_.touches&&_.touches[0]||_,S=d.clientX,x=d.clientY,y=(S-m.left)/(m.right-m.left),M=1-(x-m.top)/(m.bottom-m.top);return M>1?M=1:M<0&&(M=0),y>1?y=1:y<0&&(y=0),s.__color.v=M,s.__color.s=y,s.setValue(s.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=s.__hue_field.getBoundingClientRect(),d=_.touches&&_.touches[0]||_,S=d.clientY,x=1-(S-m.top)/(m.bottom-m.top);return x>1?x=1:x<0&&(x=0),s.__color.h=x*360,s.setValue(s.__color.toOriginal()),!1}return i}return Pn(e,[{key:"updateDisplay",value:function(){var n=Ql(this.getValue());if(n!==!1){var i=!1;Q.each(Ct.COMPONENTS,function(o){if(!Q.isUndefined(n[o])&&!Q.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return i=!0,{}},this),i&&Q.extend(this.__color.__state,n)}Q.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,a=255-s;Q.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,ef(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Q.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(gr),xM=["-moz-","-o-","-webkit-","-ms-",""];function ef(r,e,t,n){r.style.background="",Q.each(xM,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function yM(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var SM={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},MM=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,EM=function(e,t){var n=e[t];return Q.isArray(arguments[2])||Q.isObject(arguments[2])?new _M(e,t,arguments[2]):Q.isNumber(n)?Q.isNumber(arguments[2])&&Q.isNumber(arguments[3])?Q.isNumber(arguments[4])?new ec(e,t,arguments[2],arguments[3],arguments[4]):new ec(e,t,arguments[2],arguments[3]):Q.isNumber(arguments[4])?new vo(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new vo(e,t,{min:arguments[2],max:arguments[3]}):Q.isString(n)?new gM(e,t):Q.isFunction(n)?new op(e,t,""):Q.isBoolean(n)?new sp(e,t):null};function bM(r){setTimeout(r,1e3/60)}var TM=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||bM,wM=function(){function r(){Rn(this,r),this.backgroundElement=document.createElement("div"),Q.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),G.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Q.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;G.bind(this.backgroundElement,"click",function(){e.hide()})}return Pn(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Q.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",G.unbind(t.domElement,"webkitTransitionEnd",i),G.unbind(t.domElement,"transitionend",i),G.unbind(t.domElement,"oTransitionEnd",i)};G.bind(this.domElement,"webkitTransitionEnd",n),G.bind(this.domElement,"transitionend",n),G.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-G.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-G.getHeight(this.domElement)/2+"px"}}]),r}(),AM=hM(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);SM.inject(AM);var tf="dg",nf=72,rf=20,ia="Default",Is=function(){try{return!!window.localStorage}catch{return!1}}(),Vs=void 0,sf=!0,Xr=void 0,bl=!1,lp=[],it=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),G.addClass(this.domElement,tf),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=Q.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=Q.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),Q.isUndefined(n.load)?n.load={preset:ia}:n.preset&&(n.load.preset=n.preset),Q.isUndefined(n.parent)&&n.hideable&&lp.push(this),n.resizable=Q.isUndefined(n.parent)&&n.resizable,n.autoPlace&&Q.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Is&&localStorage.getItem(Yr(this,"isLocal"))==="true",s=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,LM(this),t.revert()}},width:{get:function(){return n.width},set:function(f){n.width=f,rc(t,f)}},name:{get:function(){return n.name},set:function(f){n.name=f,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(f){n.closed=f,n.closed?G.addClass(t.__ul,r.CLASS_CLOSED):G.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(f){Is&&(i=f,f?G.bind(window,"unload",s):G.unbind(window,"unload",s),localStorage.setItem(Yr(t,"isLocal"),f))}}}),Q.isUndefined(n.parent)){if(this.closed=n.closed||!1,G.addClass(this.domElement,r.CLASS_MAIN),G.makeSelectable(this.domElement,!1),Is&&i){t.useLocalStorage=!0;var o=localStorage.getItem(Yr(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,G.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(G.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(G.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),G.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);G.addClass(l,"controller-name"),a=Yc(t,l);var c=function(f){return f.preventDefault(),t.closed=!t.closed,!1};G.addClass(this.__ul,r.CLASS_CLOSED),G.addClass(a,"title"),G.bind(a,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(Q.isUndefined(n.parent)&&(sf&&(Xr=document.createElement("div"),G.addClass(Xr,tf),G.addClass(Xr,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Xr),sf=!1),Xr.appendChild(this.domElement),G.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||rc(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},G.bind(window,"resize",this.__resizeHandler),G.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),G.bind(this.__ul,"transitionend",this.__resizeHandler),G.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&PM(this),s=function(){Is&&localStorage.getItem(Yr(t,"isLocal"))==="true"&&localStorage.setItem(Yr(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,Q.defer(function(){h.width-=1})}n.parent||u()};it.toggleHide=function(){bl=!bl,Q.each(lp,function(r){r.domElement.style.display=bl?"none":""})};it.CLASS_AUTO_PLACE="a";it.CLASS_AUTO_PLACE_CONTAINER="ac";it.CLASS_MAIN="main";it.CLASS_CONTROLLER_ROW="cr";it.CLASS_TOO_TALL="taller-than-window";it.CLASS_CLOSED="closed";it.CLASS_CLOSE_BUTTON="close-button";it.CLASS_CLOSE_TOP="close-top";it.CLASS_CLOSE_BOTTOM="close-bottom";it.CLASS_DRAG="drag";it.DEFAULT_WIDTH=245;it.TEXT_CLOSED="Close Controls";it.TEXT_OPEN="Open Controls";it._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===nf||r.keyCode===nf)&&it.toggleHide()};G.bind(window,"keydown",it._keydownHandler,!1);Q.extend(it.prototype,{add:function(e,t){return Ws(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Ws(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;Q.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Xr.removeChild(this.domElement);var e=this;Q.each(this.__folders,function(t){e.removeFolder(t)}),G.unbind(window,"keydown",it._keydownHandler,!1),af(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new it(t);this.__folders[e]=n;var i=Yc(this,n.domElement);return G.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],af(e);var t=this;Q.each(e.__folders,function(n){e.removeFolder(n)}),Q.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=G.getOffset(e.__ul).top,n=0;Q.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=G.getHeight(i))}),window.innerHeight-t-rf<n?(G.addClass(e.domElement,it.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-rf+"px"):(G.removeClass(e.domElement,it.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Q.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:Q.debounce(function(){this.onResize()},50),remember:function(){if(Q.isUndefined(Vs)&&(Vs=new wM,Vs.domElement.innerHTML=MM),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Q.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&RM(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&rc(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=$a(this)),e.folders={},Q.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=$a(this),nc(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[ia]=$a(this,!0)),this.load.remembered[e]=$a(this),this.preset=e,ic(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){Q.each(this.__controllers,function(t){this.getRoot().load.remembered?cp(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),Q.each(this.__folders,function(t){t.revert(t)}),e||nc(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&up(this.__listening)},updateDisplay:function(){Q.each(this.__controllers,function(e){e.updateDisplay()}),Q.each(this.__folders,function(e){e.updateDisplay()})}});function Yc(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function af(r){G.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&G.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function nc(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function CM(r,e,t){if(t.__li=e,t.__gui=r,Q.extend(t,{options:function(a){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),Ws(r,t.object,t.property,{before:o,factoryArgs:[Q.toArray(arguments)]})}if(Q.isArray(a)||Q.isObject(a)){var l=t.__li.nextElementSibling;return t.remove(),Ws(r,t.object,t.property,{before:l,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof ec){var n=new vo(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});Q.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var a=t[s],o=n[s];t[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),a.apply(t,l)}}),G.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof vo){var i=function(a){if(Q.isNumber(t.__min)&&Q.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Ws(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(o),l&&c.listen(),c}return a};t.min=Q.compose(i,t.min),t.max=Q.compose(i,t.max)}else t instanceof sp?(G.bind(e,"click",function(){G.fakeEvent(t.__checkbox,"click")}),G.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof op?(G.bind(e,"click",function(){G.fakeEvent(t.__button,"click")}),G.bind(e,"mouseover",function(){G.addClass(t.__button,"hover")}),G.bind(e,"mouseout",function(){G.removeClass(t.__button,"hover")})):t instanceof tc&&(G.addClass(e,"color"),t.updateDisplay=Q.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=Q.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&nc(r.getRoot(),!0),s},t.setValue)}function cp(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,a=void 0;if(s[r.preset])a=s[r.preset];else if(s[ia])a=s[ia];else return;if(a[n]&&a[n][e.property]!==void 0){var o=a[n][e.property];e.initialValue=o,e.setValue(o)}}}}function Ws(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new tc(e,t);else{var s=[e,t].concat(n.factoryArgs);i=EM.apply(r,s)}n.before instanceof gr&&(n.before=n.before.__li),cp(r,i),G.addClass(i.domElement,"c");var a=document.createElement("span");G.addClass(a,"property-name"),a.innerHTML=i.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(i.domElement);var l=Yc(r,o,n.before);return G.addClass(l,it.CLASS_CONTROLLER_ROW),i instanceof tc?G.addClass(l,"color"):G.addClass(l,dM(i.getValue())),CM(r,l,i),r.__controllers.push(i),i}function Yr(r,e){return document.location.href+"."+e}function ic(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function of(r,e){e.style.display=r.useLocalStorage?"block":"none"}function RM(r){var e=r.__save_row=document.createElement("li");G.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),G.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",G.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",G.addClass(n,"button"),G.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",G.addClass(i,"button"),G.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",G.addClass(s,"button"),G.addClass(s,"revert");var a=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?Q.each(r.load.remembered,function(h,f){ic(r,f,f===r.preset)}):ic(r,ia,!1),G.bind(a,"change",function(){for(var h=0;h<r.__preset_select.length;h++)r.__preset_select[h].innerHTML=r.__preset_select[h].value;r.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),Is){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Yr(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),of(r,o),G.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,of(r,o)})}var u=document.getElementById("dg-new-constructor");G.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Vs.hide()}),G.bind(t,"click",function(){u.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Vs.show(),u.focus(),u.select()}),G.bind(n,"click",function(){r.save()}),G.bind(i,"click",function(){var h=prompt("Enter a new preset name.");h&&r.saveAs(h)}),G.bind(s,"click",function(){r.revert()})}function PM(r){var e=void 0;r.__resize_handle=document.createElement("div"),Q.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){G.removeClass(r.__closeButton,it.CLASS_DRAG),G.unbind(window,"mousemove",t),G.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,G.addClass(r.__closeButton,it.CLASS_DRAG),G.bind(window,"mousemove",t),G.bind(window,"mouseup",n),!1}G.bind(r.__resize_handle,"mousedown",i),G.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function rc(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function $a(r,e){var t={};return Q.each(r.__rememberedObjects,function(n,i){var s={},a=r.__rememberedObjectIndecesToControllers[i];Q.each(a,function(o,l){s[l]=e?o.initialValue:o.getValue()}),t[i]=s}),t}function LM(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function up(r){r.length!==0&&TM.call(window,function(){up(r)}),Q.each(r,function(e){e.updateDisplay()})}var DM=it;const UM="./assets/asphalt-yVE6a_oq.jpg",IM="./assets/grass-FdqvOQvA.jpg",hp=new la,OM=new KS,yt=new Gx,ra=new on(75,window.innerWidth/window.innerHeight,.1,1e3),NM=new Ly;NM.load("./src/fonts/LoveDays_Regular.json",function(r){const e=new Oy("ZOO",{font:r,size:30,height:15}),t=[new Th({color:16737792}),new Th({color:255})],n=new $e(e,t);n.position.y+=10,n.position.x+=100,n.position.z-=50,n.rotateY(Math.PI/2),yt.add(n)});OM.load("./src/delta_2_4k.hdr",function(r){r.mapping=no,yt.background=r});const vr=new kf;vr.setSize(window.innerWidth,window.innerHeight);vr.setClearColor(16777215);vr.shadowMap.enabled=!0;document.body.appendChild(vr.domElement);const fp=new JS(ra,vr.domElement);ra.position.z=300;fp.update();window.addEventListener("resize",zM,!1);var Vr=document.documentElement,Tl=!1;function FM(){Vr.requestFullscreen?Vr.requestFullscreen():Vr.webkitRequestFullscreen?Vr.webkitRequestFullscreen():Vr.msRequestFullscreen&&Vr.msRequestFullscreen()}function BM(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}document.addEventListener("dblclick",r=>{Tl?(BM(),Tl=!1):(FM(),Tl=!0)},!1);function zM(){ra.aspect=window.innerWidth/window.innerHeight,ra.updateProjectionMatrix(),vr.setSize(window.innerWidth,window.innerHeight)}const qc=new $e(new aa(150,200),new tt({map:hp.load(IM),side:wn})),Co=new $e(new aa(40,200),new tt({map:hp.load(UM),side:wn}));qc.rotateX(Math.PI/2);qc.receiveShadow=!0;Co.rotateX(Math.PI/2);Co.position.x=95;Co.receiveShadow=!0;const jc=new $t;jc.add(qc);jc.add(Co);yt.add(jc);let Ro=_r.clone();Ro.position.x=80;Ro.position.z=40;Ro.position.y=15;_r.position.x=80;_r.position.z=-40;_r.position.y=15;yt.add(cM(30,75,10,-100));yt.add(_r);yt.add(Ro);dn.position.x=90;dn.position.z=10;dn.position.y=10;dn.rotateY(Math.PI/2);yt.add(dn);Yt.position.x=50;Yt.position.z=-70;Yt.position.y=11;Yt.rotateY(-Math.PI/2);yt.add(Yt);const ma=Ft.clone();Ft.position.x=10;Ft.position.z=70;Ft.position.y=23;Ft.rotateY(Math.PI/2);yt.add(Ft);ma.position.x=-40;ma.position.z=70;ma.position.y=23;ma.rotateY(5*Math.PI/4);yt.add(ma);const xr=Gn.clone(),yr=Gn.clone(),Sr=Gn.clone(),Mr=Gn.clone();Gn.position.x=-65;Gn.position.z=90;Gn.position.y=35;xr.scale.x=2;xr.scale.z=2;xr.position.x=-65;xr.position.z=-90;xr.position.y=35;yt.add(Gn);yt.add(xr);yr.scale.x=3;yr.scale.z=3;yr.scale.y=3;yr.position.x=-65;yr.position.z=0;yr.position.y=105;Sr.scale.x=.5;Sr.scale.z=.5;Sr.scale.y=.5;Sr.position.x=65;Sr.position.z=-90;Sr.position.y=17.5;Mr.scale.x=.8;Mr.scale.z=.8;Mr.scale.y=.8;Mr.position.x=65;Mr.position.z=90;Mr.position.y=27;yt.add(xr);yt.add(yr);yt.add(Sr);yt.add(Mr);const Er=new Ry(16777215,1);yt.add(Er);Er.position.set(0,700,0);Er.shadow.camera.scale.x=50;Er.shadow.camera.scale.y=50;Er.shadow.camera.scale.z=50;Er.castShadow=!0;const $i=new Zf(16777215,1500,100,2);yt.add($i);$i.position.set(80,25,40);$i.castShadow=!0;const Ki=new Zf(16777215,1500,100,2);yt.add(Ki);Ki.position.set(80,25,-40);Ki.castShadow=!0;let sc=1,ac=1;const dp=rs.timeline({repeat:-1});dp.to(Ft.position,{z:-70,duration:15}).to(Ft.rotation,{y:-Math.PI/2,duration:.5}).to(Ft.position,{z:70,duration:15}).to(Ft.rotation,{y:Math.PI/2,duration:.5});const pp=rs.timeline({repeat:-1});pp.to(Yt.position,{z:70,duration:20}).to(Yt.rotation,{y:Math.PI/2,duration:.5}).to(Yt.position,{z:-70,duration:20}).to(Yt.rotation,{y:-Math.PI/2,duration:.5});const _a=new DM,ga={intensity:1,intensityPoint1:1500,intensityPoint2:1500,speedGiraffe:1,speedHipo:1};_a.add(ga,"intensity",0,3).onChange(function(r){Er.intensity=r});_a.add(ga,"intensityPoint1",0,3e3).onChange(function(r){$i.intensity=r});_a.add(ga,"intensityPoint2",0,3e3).onChange(function(r){Ki.intensity=r});_a.add(ga,"speedGiraffe",0,3).onChange(function(r){sc=r,dp.timeScale(sc)});_a.add(ga,"speedHipo",0,3).onChange(function(r){ac=r,pp.timeScale(ac)});var lf=rs.timeline().to(dn.position,{y:15,duration:.4,ease:rs.easeOut}).to(dn.position,{y:10,duration:.2,ease:rs.easeIn});document.addEventListener("keyup",r=>{r.code==="Space"?lf.isActive()||lf.restart():r.code==="KeyA"?$i.intensity>0?$i.intensity=0:$i.intensity=1500:r.code==="KeyS"&&(Ki.intensity>0?Ki.intensity=0:Ki.intensity=1500)});function mp(){requestAnimationFrame(mp),eM(sc),nM(ac),aM(),fp.update(),vr.render(yt,ra)}mp();
