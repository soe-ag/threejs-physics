(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const as="148",Hn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eo=0,_s=1,Ao=2,ka=1,Ga=2,Ai=3,zn=0,Ye=1,os=2,zi=3,Mn=0,li=1,ys=2,ws=3,bs=4,To=5,ai=100,Co=101,Lo=102,Ms=103,Ss=104,Po=200,Ro=201,Do=202,Io=203,Ha=204,qa=205,Fo=206,Bo=207,zo=208,No=209,Oo=210,Uo=0,Vo=1,Wo=2,Zr=3,ko=4,Go=5,Ho=6,qo=7,Xa=0,Xo=1,Yo=2,mn=0,$o=1,jo=2,Zo=3,Ko=4,Jo=5,Ya=300,hi=301,ui=302,Kr=303,Jr=304,lr=306,Qr=1e3,Ke=1001,ts=1002,Re=1003,Es=1004,fr=1005,qe=1006,Qo=1007,Ci=1008,Nn=1009,tl=1010,el=1011,$a=1012,nl=1013,Dn=1014,In=1015,Li=1016,il=1017,rl=1018,ci=1020,sl=1021,al=1022,Je=1023,ol=1024,ll=1025,Fn=1026,di=1027,cl=1028,hl=1029,ul=1030,dl=1031,fl=1033,pr=33776,mr=33777,gr=33778,vr=33779,As=35840,Ts=35841,Cs=35842,Ls=35843,pl=36196,Ps=37492,Rs=37496,Ds=37808,Is=37809,Fs=37810,Bs=37811,zs=37812,Ns=37813,Os=37814,Us=37815,Vs=37816,Ws=37817,ks=37818,Gs=37819,Hs=37820,qs=37821,Xs=36492,On=3e3,he=3001,ml=3200,gl=3201,ja=0,vl=1,en="srgb",Pi="srgb-linear",xr=7680,xl=519,Ys=35044,$s="300 es",es=1035;class Gn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const i=a.indexOf(e);i!==-1&&a.splice(i,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let i=0,r=a.length;i<r;i++)a[i].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_r=Math.PI/180,js=180/Math.PI;function Ii(){const d=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[d&255]+Te[d>>8&255]+Te[d>>16&255]+Te[d>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ie(d,t,e){return Math.max(t,Math.min(e,d))}function _l(d,t){return(d%t+t)%t}function yr(d,t,e){return(1-e)*d+e*t}function Zs(d){return(d&d-1)===0&&d!==0}function ns(d){return Math.pow(2,Math.floor(Math.log(d)/Math.LN2))}function Ni(d,t){switch(t.constructor){case Float32Array:return d;case Uint16Array:return d/65535;case Uint8Array:return d/255;case Int16Array:return Math.max(d/32767,-1);case Int8Array:return Math.max(d/127,-1);default:throw new Error("Invalid component type.")}}function Ue(d,t){switch(t.constructor){case Float32Array:return d;case Uint16Array:return Math.round(d*65535);case Uint8Array:return Math.round(d*255);case Int16Array:return Math.round(d*32767);case Int8Array:return Math.round(d*127);default:throw new Error("Invalid component type.")}}class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),i=this.x-t.x,r=this.y-t.y;return this.x=i*n-r*a+t.x,this.y=i*a+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,a,i,r,s,c,u){const l=this.elements;return l[0]=t,l[1]=a,l[2]=s,l[3]=e,l[4]=i,l[5]=c,l[6]=n,l[7]=r,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,i=this.elements,r=n[0],s=n[3],c=n[6],u=n[1],l=n[4],o=n[7],h=n[2],p=n[5],g=n[8],m=a[0],f=a[3],v=a[6],x=a[1],_=a[4],y=a[7],w=a[2],R=a[5],H=a[8];return i[0]=r*m+s*x+c*w,i[3]=r*f+s*_+c*R,i[6]=r*v+s*y+c*H,i[1]=u*m+l*x+o*w,i[4]=u*f+l*_+o*R,i[7]=u*v+l*y+o*H,i[2]=h*m+p*x+g*w,i[5]=h*f+p*_+g*R,i[8]=h*v+p*y+g*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],i=t[3],r=t[4],s=t[5],c=t[6],u=t[7],l=t[8];return e*r*l-e*s*u-n*i*l+n*s*c+a*i*u-a*r*c}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],i=t[3],r=t[4],s=t[5],c=t[6],u=t[7],l=t[8],o=l*r-s*u,h=s*c-l*i,p=u*i-r*c,g=e*o+n*h+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=o*m,t[1]=(a*u-l*n)*m,t[2]=(s*n-a*r)*m,t[3]=h*m,t[4]=(l*e-a*c)*m,t[5]=(a*i-s*e)*m,t[6]=p*m,t[7]=(n*c-u*e)*m,t[8]=(r*e-n*i)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,i,r,s){const c=Math.cos(i),u=Math.sin(i);return this.set(n*c,n*u,-n*(c*r+u*s)+r+t,-a*u,a*c,-a*(-u*r+c*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(wr.makeScale(t,e)),this}rotate(t){return this.premultiply(wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(wr.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new ke;function Za(d){for(let t=d.length-1;t>=0;--t)if(d[t]>=65535)return!0;return!1}function Ri(d){return document.createElementNS("http://www.w3.org/1999/xhtml",d)}function Bn(d){return d<.04045?d*.0773993808:Math.pow(d*.9478672986+.0521327014,2.4)}function sr(d){return d<.0031308?d*12.92:1.055*Math.pow(d,.41666)-.055}const br={[en]:{[Pi]:Bn},[Pi]:{[en]:sr}},Le={legacyMode:!0,get workingColorSpace(){return Pi},set workingColorSpace(d){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(d,t,e){if(this.legacyMode||t===e||!t||!e)return d;if(br[t]&&br[t][e]!==void 0){const n=br[t][e];return d.r=n(d.r),d.g=n(d.g),d.b=n(d.b),d}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(d,t){return this.convert(d,this.workingColorSpace,t)},toWorkingColorSpace:function(d,t){return this.convert(d,t,this.workingColorSpace)}},Ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_e={r:0,g:0,b:0},$e={h:0,s:0,l:0},Oi={h:0,s:0,l:0};function Mr(d,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?d+(t-d)*6*e:e<1/2?t:e<2/3?d+(t-d)*6*(2/3-e):d}function Ui(d,t){return t.r=d.r,t.g=d.g,t.b=d.b,t}class oe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=Le.workingColorSpace){if(t=_l(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=Mr(r,i,t+1/3),this.g=Mr(r,i,t),this.b=Mr(r,i,t-1/3)}return Le.toWorkingColorSpace(this,a),this}setStyle(t,e=en){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let i;const r=a[1],s=a[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,Le.toWorkingColorSpace(this,e),n(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,Le.toWorkingColorSpace(this,e),n(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(i[1])/360,u=parseFloat(i[2])/100,l=parseFloat(i[3])/100;return n(i[4]),this.setHSL(c,u,l,e)}break}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=a[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,Le.toWorkingColorSpace(this,e),this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,Le.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=en){const n=Ka[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Le.fromWorkingColorSpace(Ui(this,_e),t),Ie(_e.r*255,0,255)<<16^Ie(_e.g*255,0,255)<<8^Ie(_e.b*255,0,255)<<0}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(Ui(this,_e),e);const n=_e.r,a=_e.g,i=_e.b,r=Math.max(n,a,i),s=Math.min(n,a,i);let c,u;const l=(s+r)/2;if(s===r)c=0,u=0;else{const o=r-s;switch(u=l<=.5?o/(r+s):o/(2-r-s),r){case n:c=(a-i)/o+(a<i?6:0);break;case a:c=(i-n)/o+2;break;case i:c=(n-a)/o+4;break}c/=6}return t.h=c,t.s=u,t.l=l,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(Ui(this,_e),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=en){return Le.fromWorkingColorSpace(Ui(this,_e),t),t!==en?`color(${t} ${_e.r} ${_e.g} ${_e.b})`:`rgb(${_e.r*255|0},${_e.g*255|0},${_e.b*255|0})`}offsetHSL(t,e,n){return this.getHSL($e),$e.h+=t,$e.s+=e,$e.l+=n,this.setHSL($e.h,$e.s,$e.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($e),t.getHSL(Oi);const n=yr($e.h,Oi.h,e),a=yr($e.s,Oi.s,e),i=yr($e.l,Oi.l,e);return this.setHSL(n,a,i),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}oe.NAMES=Ka;let Xn;class Ja{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xn===void 0&&(Xn=Ri("canvas")),Xn.width=t.width,Xn.height=t.height;const n=Xn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ri("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),i=a.data;for(let r=0;r<i.length;r++)i[r]=Bn(i[r]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Qa{constructor(t=null){this.isSource=!0,this.uuid=Ii(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let i;if(Array.isArray(a)){i=[];for(let r=0,s=a.length;r<s;r++)a[r].isDataTexture?i.push(Sr(a[r].image)):i.push(Sr(a[r]))}else i=Sr(a);n.url=i}return e||(t.images[this.uuid]=n),n}}function Sr(d){return typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap?Ja.getDataURL(d):d.data?{data:Array.from(d.data),width:d.width,height:d.height,type:d.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yl=0;class Be extends Gn{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=Ke,a=Ke,i=qe,r=Ci,s=Je,c=Nn,u=Be.DEFAULT_ANISOTROPY,l=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=Ii(),this.name="",this.source=new Qa(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=a,this.magFilter=i,this.minFilter=r,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ya)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qr:t.x=t.x-Math.floor(t.x);break;case Ke:t.x=t.x<0?0:1;break;case ts:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qr:t.y=t.y-Math.floor(t.y);break;case Ke:t.y=t.y<0?0:1;break;case ts:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Ya;Be.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,a=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,i=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a+r[12]*i,this.y=r[1]*e+r[5]*n+r[9]*a+r[13]*i,this.z=r[2]*e+r[6]*n+r[10]*a+r[14]*i,this.w=r[3]*e+r[7]*n+r[11]*a+r[15]*i,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,i;const c=t.elements,u=c[0],l=c[4],o=c[8],h=c[1],p=c[5],g=c[9],m=c[2],f=c[6],v=c[10];if(Math.abs(l-h)<.01&&Math.abs(o-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(l+h)<.1&&Math.abs(o+m)<.1&&Math.abs(g+f)<.1&&Math.abs(u+p+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(u+1)/2,y=(p+1)/2,w=(v+1)/2,R=(l+h)/4,H=(o+m)/4,b=(g+f)/4;return _>y&&_>w?_<.01?(n=0,a=.707106781,i=.707106781):(n=Math.sqrt(_),a=R/n,i=H/n):y>w?y<.01?(n=.707106781,a=0,i=.707106781):(a=Math.sqrt(y),n=R/a,i=b/a):w<.01?(n=.707106781,a=.707106781,i=0):(i=Math.sqrt(w),n=H/i,a=b/i),this.set(n,a,i,e),this}let x=Math.sqrt((f-g)*(f-g)+(o-m)*(o-m)+(h-l)*(h-l));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(o-m)/x,this.z=(h-l)/x,this.w=Math.acos((u+p+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Un extends Gn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const a={width:t,height:e,depth:1};this.texture=new Be(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class to extends Be{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Re,this.minFilter=Re,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wl extends Be{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Re,this.minFilter=Re,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,i,r,s){let c=n[a+0],u=n[a+1],l=n[a+2],o=n[a+3];const h=i[r+0],p=i[r+1],g=i[r+2],m=i[r+3];if(s===0){t[e+0]=c,t[e+1]=u,t[e+2]=l,t[e+3]=o;return}if(s===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=m;return}if(o!==m||c!==h||u!==p||l!==g){let f=1-s;const v=c*h+u*p+l*g+o*m,x=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const w=Math.sqrt(_),R=Math.atan2(w,v*x);f=Math.sin(f*R)/w,s=Math.sin(s*R)/w}const y=s*x;if(c=c*f+h*y,u=u*f+p*y,l=l*f+g*y,o=o*f+m*y,f===1-s){const w=1/Math.sqrt(c*c+u*u+l*l+o*o);c*=w,u*=w,l*=w,o*=w}}t[e]=c,t[e+1]=u,t[e+2]=l,t[e+3]=o}static multiplyQuaternionsFlat(t,e,n,a,i,r){const s=n[a],c=n[a+1],u=n[a+2],l=n[a+3],o=i[r],h=i[r+1],p=i[r+2],g=i[r+3];return t[e]=s*g+l*o+c*p-u*h,t[e+1]=c*g+l*h+u*o-s*p,t[e+2]=u*g+l*p+s*h-c*o,t[e+3]=l*g-s*o-c*h-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,a=t._y,i=t._z,r=t._order,s=Math.cos,c=Math.sin,u=s(n/2),l=s(a/2),o=s(i/2),h=c(n/2),p=c(a/2),g=c(i/2);switch(r){case"XYZ":this._x=h*l*o+u*p*g,this._y=u*p*o-h*l*g,this._z=u*l*g+h*p*o,this._w=u*l*o-h*p*g;break;case"YXZ":this._x=h*l*o+u*p*g,this._y=u*p*o-h*l*g,this._z=u*l*g-h*p*o,this._w=u*l*o+h*p*g;break;case"ZXY":this._x=h*l*o-u*p*g,this._y=u*p*o+h*l*g,this._z=u*l*g+h*p*o,this._w=u*l*o-h*p*g;break;case"ZYX":this._x=h*l*o-u*p*g,this._y=u*p*o+h*l*g,this._z=u*l*g-h*p*o,this._w=u*l*o+h*p*g;break;case"YZX":this._x=h*l*o+u*p*g,this._y=u*p*o+h*l*g,this._z=u*l*g-h*p*o,this._w=u*l*o-h*p*g;break;case"XZY":this._x=h*l*o-u*p*g,this._y=u*p*o-h*l*g,this._z=u*l*g+h*p*o,this._w=u*l*o+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],i=e[8],r=e[1],s=e[5],c=e[9],u=e[2],l=e[6],o=e[10],h=n+s+o;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(l-c)*p,this._y=(i-u)*p,this._z=(r-a)*p}else if(n>s&&n>o){const p=2*Math.sqrt(1+n-s-o);this._w=(l-c)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(i+u)/p}else if(s>o){const p=2*Math.sqrt(1+s-n-o);this._w=(i-u)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(c+l)/p}else{const p=2*Math.sqrt(1+o-n-s);this._w=(r-a)/p,this._x=(i+u)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,i=t._z,r=t._w,s=e._x,c=e._y,u=e._z,l=e._w;return this._x=n*l+r*s+a*u-i*c,this._y=a*l+r*c+i*s-n*u,this._z=i*l+r*u+n*c-a*s,this._w=r*l-n*s-a*c-i*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,i=this._z,r=this._w;let s=r*t._w+n*t._x+a*t._y+i*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=r,this._x=n,this._y=a,this._z=i,this;const c=1-s*s;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*a+e*this._y,this._z=p*i+e*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),l=Math.atan2(u,s),o=Math.sin((1-e)*l)/u,h=Math.sin(e*l)/u;return this._w=r*o+this._w*h,this._x=n*o+this._x*h,this._y=a*o+this._y*h,this._z=i*o+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),a=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(e*Math.cos(a),n*Math.sin(i),n*Math.cos(i),e*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,e=0,n=0){et.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ks.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ks.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6]*a,this.y=i[1]*e+i[4]*n+i[7]*a,this.z=i[2]*e+i[5]*n+i[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,i=t.elements,r=1/(i[3]*e+i[7]*n+i[11]*a+i[15]);return this.x=(i[0]*e+i[4]*n+i[8]*a+i[12])*r,this.y=(i[1]*e+i[5]*n+i[9]*a+i[13])*r,this.z=(i[2]*e+i[6]*n+i[10]*a+i[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,i=t.x,r=t.y,s=t.z,c=t.w,u=c*e+r*a-s*n,l=c*n+s*e-i*a,o=c*a+i*n-r*e,h=-i*e-r*n-s*a;return this.x=u*c+h*-i+l*-s-o*-r,this.y=l*c+h*-r+o*-i-u*-s,this.z=o*c+h*-s+u*-r-l*-i,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*a,this.y=i[1]*e+i[5]*n+i[9]*a,this.z=i[2]*e+i[6]*n+i[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,i=t.z,r=e.x,s=e.y,c=e.z;return this.x=a*c-i*s,this.y=i*r-n*c,this.z=n*s-a*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Er.copy(this).projectOnVector(t),this.sub(Er)}reflect(t){return this.sub(Er.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Er=new et,Ks=new Vn;class Fi{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,a=1/0,i=-1/0,r=-1/0,s=-1/0;for(let c=0,u=t.length;c<u;c+=3){const l=t[c],o=t[c+1],h=t[c+2];l<e&&(e=l),o<n&&(n=o),h<a&&(a=h),l>i&&(i=l),o>r&&(r=o),h>s&&(s=h)}return this.min.set(e,n,a),this.max.set(i,r,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,a=1/0,i=-1/0,r=-1/0,s=-1/0;for(let c=0,u=t.count;c<u;c++){const l=t.getX(c),o=t.getY(c),h=t.getZ(c);l<e&&(e=l),o<n&&(n=o),h<a&&(a=h),l>i&&(i=l),o>r&&(r=o),h>s&&(s=h)}return this.min.set(e,n,a),this.max.set(i,r,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const i=n.attributes.position;for(let r=0,s=i.count;r<s;r++)An.fromBufferAttribute(i,r).applyMatrix4(t.matrixWorld),this.expandByPoint(An)}else n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox),Ar.applyMatrix4(t.matrixWorld),this.union(Ar);const a=t.children;for(let i=0,r=a.length;i<r;i++)this.expandByObject(a[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_i),Vi.subVectors(this.max,_i),Yn.subVectors(t.a,_i),$n.subVectors(t.b,_i),jn.subVectors(t.c,_i),xn.subVectors($n,Yn),_n.subVectors(jn,$n),Tn.subVectors(Yn,jn);let e=[0,-xn.z,xn.y,0,-_n.z,_n.y,0,-Tn.z,Tn.y,xn.z,0,-xn.x,_n.z,0,-_n.x,Tn.z,0,-Tn.x,-xn.y,xn.x,0,-_n.y,_n.x,0,-Tn.y,Tn.x,0];return!Tr(e,Yn,$n,jn,Vi)||(e=[1,0,0,0,1,0,0,0,1],!Tr(e,Yn,$n,jn,Vi))?!1:(Wi.crossVectors(xn,_n),e=[Wi.x,Wi.y,Wi.z],Tr(e,Yn,$n,jn,Vi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return An.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(An).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new et,new et,new et,new et,new et,new et,new et,new et],An=new et,Ar=new Fi,Yn=new et,$n=new et,jn=new et,xn=new et,_n=new et,Tn=new et,_i=new et,Vi=new et,Wi=new et,Cn=new et;function Tr(d,t,e,n,a){for(let i=0,r=d.length-3;i<=r;i+=3){Cn.fromArray(d,i);const s=a.x*Math.abs(Cn.x)+a.y*Math.abs(Cn.y)+a.z*Math.abs(Cn.z),c=t.dot(Cn),u=e.dot(Cn),l=n.dot(Cn);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>s)return!1}return!0}const bl=new Fi,yi=new et,Cr=new et;class cr{constructor(t=new et,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bl.setFromPoints(t).getCenter(n);let a=0;for(let i=0,r=t.length;i<r;i++)a=Math.max(a,n.distanceToSquared(t[i]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(yi,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(Cr)),this.expandByPoint(yi.copy(t.center).sub(Cr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new et,Lr=new et,ki=new et,yn=new et,Pr=new et,Gi=new et,Rr=new et;class eo{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.direction).multiplyScalar(e).add(this.origin),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){Lr.copy(t).add(e).multiplyScalar(.5),ki.copy(e).sub(t).normalize(),yn.copy(this.origin).sub(Lr);const i=t.distanceTo(e)*.5,r=-this.direction.dot(ki),s=yn.dot(this.direction),c=-yn.dot(ki),u=yn.lengthSq(),l=Math.abs(1-r*r);let o,h,p,g;if(l>0)if(o=r*c-s,h=r*s-c,g=i*l,o>=0)if(h>=-g)if(h<=g){const m=1/l;o*=m,h*=m,p=o*(o+r*h+2*s)+h*(r*o+h+2*c)+u}else h=i,o=Math.max(0,-(r*h+s)),p=-o*o+h*(h+2*c)+u;else h=-i,o=Math.max(0,-(r*h+s)),p=-o*o+h*(h+2*c)+u;else h<=-g?(o=Math.max(0,-(-r*i+s)),h=o>0?-i:Math.min(Math.max(-i,-c),i),p=-o*o+h*(h+2*c)+u):h<=g?(o=0,h=Math.min(Math.max(-i,-c),i),p=h*(h+2*c)+u):(o=Math.max(0,-(r*i+s)),h=o>0?i:Math.min(Math.max(-i,-c),i),p=-o*o+h*(h+2*c)+u);else h=r>0?-i:i,o=Math.max(0,-(r*h+s)),p=-o*o+h*(h+2*c)+u;return n&&n.copy(this.direction).multiplyScalar(o).add(this.origin),a&&a.copy(ki).multiplyScalar(h).add(Lr),p}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),a=hn.dot(hn)-n*n,i=t.radius*t.radius;if(a>i)return null;const r=Math.sqrt(i-a),s=n-r,c=n+r;return s<0&&c<0?null:s<0?this.at(c,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,i,r,s,c;const u=1/this.direction.x,l=1/this.direction.y,o=1/this.direction.z,h=this.origin;return u>=0?(n=(t.min.x-h.x)*u,a=(t.max.x-h.x)*u):(n=(t.max.x-h.x)*u,a=(t.min.x-h.x)*u),l>=0?(i=(t.min.y-h.y)*l,r=(t.max.y-h.y)*l):(i=(t.max.y-h.y)*l,r=(t.min.y-h.y)*l),n>r||i>a||((i>n||isNaN(n))&&(n=i),(r<a||isNaN(a))&&(a=r),o>=0?(s=(t.min.z-h.z)*o,c=(t.max.z-h.z)*o):(s=(t.max.z-h.z)*o,c=(t.min.z-h.z)*o),n>c||s>a)||((s>n||n!==n)&&(n=s),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,a,i){Pr.subVectors(e,t),Gi.subVectors(n,t),Rr.crossVectors(Pr,Gi);let r=this.direction.dot(Rr),s;if(r>0){if(a)return null;s=1}else if(r<0)s=-1,r=-r;else return null;yn.subVectors(this.origin,t);const c=s*this.direction.dot(Gi.crossVectors(yn,Gi));if(c<0)return null;const u=s*this.direction.dot(Pr.cross(yn));if(u<0||c+u>r)return null;const l=-s*yn.dot(Rr);return l<0?null:this.at(l/r,i)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,a,i,r,s,c,u,l,o,h,p,g,m,f){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=a,v[1]=i,v[5]=r,v[9]=s,v[13]=c,v[2]=u,v[6]=l,v[10]=o,v[14]=h,v[3]=p,v[7]=g,v[11]=m,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/Zn.setFromMatrixColumn(t,0).length(),i=1/Zn.setFromMatrixColumn(t,1).length(),r=1/Zn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*i,e[5]=n[5]*i,e[6]=n[6]*i,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,i=t.z,r=Math.cos(n),s=Math.sin(n),c=Math.cos(a),u=Math.sin(a),l=Math.cos(i),o=Math.sin(i);if(t.order==="XYZ"){const h=r*l,p=r*o,g=s*l,m=s*o;e[0]=c*l,e[4]=-c*o,e[8]=u,e[1]=p+g*u,e[5]=h-m*u,e[9]=-s*c,e[2]=m-h*u,e[6]=g+p*u,e[10]=r*c}else if(t.order==="YXZ"){const h=c*l,p=c*o,g=u*l,m=u*o;e[0]=h+m*s,e[4]=g*s-p,e[8]=r*u,e[1]=r*o,e[5]=r*l,e[9]=-s,e[2]=p*s-g,e[6]=m+h*s,e[10]=r*c}else if(t.order==="ZXY"){const h=c*l,p=c*o,g=u*l,m=u*o;e[0]=h-m*s,e[4]=-r*o,e[8]=g+p*s,e[1]=p+g*s,e[5]=r*l,e[9]=m-h*s,e[2]=-r*u,e[6]=s,e[10]=r*c}else if(t.order==="ZYX"){const h=r*l,p=r*o,g=s*l,m=s*o;e[0]=c*l,e[4]=g*u-p,e[8]=h*u+m,e[1]=c*o,e[5]=m*u+h,e[9]=p*u-g,e[2]=-u,e[6]=s*c,e[10]=r*c}else if(t.order==="YZX"){const h=r*c,p=r*u,g=s*c,m=s*u;e[0]=c*l,e[4]=m-h*o,e[8]=g*o+p,e[1]=o,e[5]=r*l,e[9]=-s*l,e[2]=-u*l,e[6]=p*o+g,e[10]=h-m*o}else if(t.order==="XZY"){const h=r*c,p=r*u,g=s*c,m=s*u;e[0]=c*l,e[4]=-o,e[8]=u*l,e[1]=h*o+m,e[5]=r*l,e[9]=p*o-g,e[2]=g*o-p,e[6]=s*l,e[10]=m*o+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ml,t,Sl)}lookAt(t,e,n){const a=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),wn.crossVectors(n,Ve),wn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),wn.crossVectors(n,Ve)),wn.normalize(),Hi.crossVectors(Ve,wn),a[0]=wn.x,a[4]=Hi.x,a[8]=Ve.x,a[1]=wn.y,a[5]=Hi.y,a[9]=Ve.y,a[2]=wn.z,a[6]=Hi.z,a[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,i=this.elements,r=n[0],s=n[4],c=n[8],u=n[12],l=n[1],o=n[5],h=n[9],p=n[13],g=n[2],m=n[6],f=n[10],v=n[14],x=n[3],_=n[7],y=n[11],w=n[15],R=a[0],H=a[4],b=a[8],T=a[12],L=a[1],D=a[5],q=a[9],F=a[13],V=a[2],Y=a[6],it=a[10],G=a[14],z=a[3],J=a[7],$=a[11],A=a[15];return i[0]=r*R+s*L+c*V+u*z,i[4]=r*H+s*D+c*Y+u*J,i[8]=r*b+s*q+c*it+u*$,i[12]=r*T+s*F+c*G+u*A,i[1]=l*R+o*L+h*V+p*z,i[5]=l*H+o*D+h*Y+p*J,i[9]=l*b+o*q+h*it+p*$,i[13]=l*T+o*F+h*G+p*A,i[2]=g*R+m*L+f*V+v*z,i[6]=g*H+m*D+f*Y+v*J,i[10]=g*b+m*q+f*it+v*$,i[14]=g*T+m*F+f*G+v*A,i[3]=x*R+_*L+y*V+w*z,i[7]=x*H+_*D+y*Y+w*J,i[11]=x*b+_*q+y*it+w*$,i[15]=x*T+_*F+y*G+w*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],i=t[12],r=t[1],s=t[5],c=t[9],u=t[13],l=t[2],o=t[6],h=t[10],p=t[14],g=t[3],m=t[7],f=t[11],v=t[15];return g*(+i*c*o-a*u*o-i*s*h+n*u*h+a*s*p-n*c*p)+m*(+e*c*p-e*u*h+i*r*h-a*r*p+a*u*l-i*c*l)+f*(+e*u*o-e*s*p-i*r*o+n*r*p+i*s*l-n*u*l)+v*(-a*s*l-e*c*o+e*s*h+a*r*o-n*r*h+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],i=t[3],r=t[4],s=t[5],c=t[6],u=t[7],l=t[8],o=t[9],h=t[10],p=t[11],g=t[12],m=t[13],f=t[14],v=t[15],x=o*f*u-m*h*u+m*c*p-s*f*p-o*c*v+s*h*v,_=g*h*u-l*f*u-g*c*p+r*f*p+l*c*v-r*h*v,y=l*m*u-g*o*u+g*s*p-r*m*p-l*s*v+r*o*v,w=g*o*c-l*m*c-g*s*h+r*m*h+l*s*f-r*o*f,R=e*x+n*_+a*y+i*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/R;return t[0]=x*H,t[1]=(m*h*i-o*f*i-m*a*p+n*f*p+o*a*v-n*h*v)*H,t[2]=(s*f*i-m*c*i+m*a*u-n*f*u-s*a*v+n*c*v)*H,t[3]=(o*c*i-s*h*i-o*a*u+n*h*u+s*a*p-n*c*p)*H,t[4]=_*H,t[5]=(l*f*i-g*h*i+g*a*p-e*f*p-l*a*v+e*h*v)*H,t[6]=(g*c*i-r*f*i-g*a*u+e*f*u+r*a*v-e*c*v)*H,t[7]=(r*h*i-l*c*i+l*a*u-e*h*u-r*a*p+e*c*p)*H,t[8]=y*H,t[9]=(g*o*i-l*m*i-g*n*p+e*m*p+l*n*v-e*o*v)*H,t[10]=(r*m*i-g*s*i+g*n*u-e*m*u-r*n*v+e*s*v)*H,t[11]=(l*s*i-r*o*i-l*n*u+e*o*u+r*n*p-e*s*p)*H,t[12]=w*H,t[13]=(l*m*a-g*o*a+g*n*h-e*m*h-l*n*f+e*o*f)*H,t[14]=(g*s*a-r*m*a-g*n*c+e*m*c+r*n*f-e*s*f)*H,t[15]=(r*o*a-l*s*a+l*n*c-e*o*c-r*n*h+e*s*h)*H,this}scale(t){const e=this.elements,n=t.x,a=t.y,i=t.z;return e[0]*=n,e[4]*=a,e[8]*=i,e[1]*=n,e[5]*=a,e[9]*=i,e[2]*=n,e[6]*=a,e[10]*=i,e[3]*=n,e[7]*=a,e[11]*=i,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),i=1-n,r=t.x,s=t.y,c=t.z,u=i*r,l=i*s;return this.set(u*r+n,u*s-a*c,u*c+a*s,0,u*s+a*c,l*s+n,l*c-a*r,0,u*c-a*s,l*c+a*r,i*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,i,r){return this.set(1,n,i,0,t,1,r,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,i=e._x,r=e._y,s=e._z,c=e._w,u=i+i,l=r+r,o=s+s,h=i*u,p=i*l,g=i*o,m=r*l,f=r*o,v=s*o,x=c*u,_=c*l,y=c*o,w=n.x,R=n.y,H=n.z;return a[0]=(1-(m+v))*w,a[1]=(p+y)*w,a[2]=(g-_)*w,a[3]=0,a[4]=(p-y)*R,a[5]=(1-(h+v))*R,a[6]=(f+x)*R,a[7]=0,a[8]=(g+_)*H,a[9]=(f-x)*H,a[10]=(1-(h+m))*H,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let i=Zn.set(a[0],a[1],a[2]).length();const r=Zn.set(a[4],a[5],a[6]).length(),s=Zn.set(a[8],a[9],a[10]).length();this.determinant()<0&&(i=-i),t.x=a[12],t.y=a[13],t.z=a[14],je.copy(this);const u=1/i,l=1/r,o=1/s;return je.elements[0]*=u,je.elements[1]*=u,je.elements[2]*=u,je.elements[4]*=l,je.elements[5]*=l,je.elements[6]*=l,je.elements[8]*=o,je.elements[9]*=o,je.elements[10]*=o,e.setFromRotationMatrix(je),n.x=i,n.y=r,n.z=s,this}makePerspective(t,e,n,a,i,r){const s=this.elements,c=2*i/(e-t),u=2*i/(n-a),l=(e+t)/(e-t),o=(n+a)/(n-a),h=-(r+i)/(r-i),p=-2*r*i/(r-i);return s[0]=c,s[4]=0,s[8]=l,s[12]=0,s[1]=0,s[5]=u,s[9]=o,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,a,i,r){const s=this.elements,c=1/(e-t),u=1/(n-a),l=1/(r-i),o=(e+t)*c,h=(n+a)*u,p=(r+i)*l;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-o,s[1]=0,s[5]=2*u,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*l,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zn=new et,je=new ve,Ml=new et(0,0,0),Sl=new et(1,1,1),wn=new et,Hi=new et,Ve=new et,Js=new ve,Qs=new Vn;class Bi{constructor(t=0,e=0,n=0,a=Bi.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,i=a[0],r=a[4],s=a[8],c=a[1],u=a[5],l=a[9],o=a[2],h=a[6],p=a[10];switch(e){case"XYZ":this._y=Math.asin(Ie(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-r,i)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-o,i),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-o,p),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-o,i)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,i)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Js.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Js,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qs.setFromEuler(this),this.setFromQuaternion(Qs,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Bi.DefaultOrder="XYZ";Bi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class no{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let El=0;const ta=new et,Kn=new Vn,un=new ve,qi=new et,wi=new et,Al=new et,Tl=new Vn,ea=new et(1,0,0),na=new et(0,1,0),ia=new et(0,0,1),Cl={type:"added"},ra={type:"removed"};class Ee extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:El++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DefaultUp.clone();const t=new et,e=new Bi,n=new Vn,a=new et(1,1,1);function i(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(i),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ve},normalMatrix:{value:new ke}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ee.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ee.DefaultMatrixWorldAutoUpdate,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(ea,t)}rotateY(t){return this.rotateOnAxis(na,t)}rotateZ(t){return this.rotateOnAxis(ia,t)}translateOnAxis(t,e){return ta.copy(t).applyQuaternion(this.quaternion),this.position.add(ta.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ea,t)}translateY(t){return this.translateOnAxis(na,t)}translateZ(t){return this.translateOnAxis(ia,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qi.copy(t):qi.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(wi,qi,this.up):un.lookAt(qi,wi,this.up),this.quaternion.setFromRotationMatrix(un),a&&(un.extractRotation(a.matrixWorld),Kn.setFromRotationMatrix(un),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Cl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ra)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ra)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let a=0,i=this.children.length;a<i;a++){const r=this.children[a].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,t,Al),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Tl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++){const i=e[n];(i.matrixWorldAutoUpdate===!0||t===!0)&&i.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const a=this.children;for(let i=0,r=a.length;i<r;i++){const s=a[i];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function i(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=i(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const o=c[u];i(t.shapes,o)}else i(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,u=this.material.length;c<u;c++)s.push(i(t.materials,this.material[c]));a.material=s}else a.material=i(t.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];a.animations.push(i(t.animations,c))}}if(e){const s=r(t.geometries),c=r(t.materials),u=r(t.textures),l=r(t.images),o=r(t.shapes),h=r(t.skeletons),p=r(t.animations),g=r(t.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),o.length>0&&(n.shapes=o),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=a,n;function r(s){const c=[];for(const u in s){const l=s[u];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}Ee.DefaultUp=new et(0,1,0);Ee.DefaultMatrixAutoUpdate=!0;Ee.DefaultMatrixWorldAutoUpdate=!0;const Ze=new et,dn=new et,Dr=new et,fn=new et,Jn=new et,Qn=new et,sa=new et,Ir=new et,Fr=new et,Br=new et;class pn{constructor(t=new et,e=new et,n=new et){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),Ze.subVectors(t,e),a.cross(Ze);const i=a.lengthSq();return i>0?a.multiplyScalar(1/Math.sqrt(i)):a.set(0,0,0)}static getBarycoord(t,e,n,a,i){Ze.subVectors(a,e),dn.subVectors(n,e),Dr.subVectors(t,e);const r=Ze.dot(Ze),s=Ze.dot(dn),c=Ze.dot(Dr),u=dn.dot(dn),l=dn.dot(Dr),o=r*u-s*s;if(o===0)return i.set(-2,-1,-1);const h=1/o,p=(u*c-s*l)*h,g=(r*l-s*c)*h;return i.set(1-p-g,g,p)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(t,e,n,a,i,r,s,c){return this.getBarycoord(t,e,n,a,fn),c.set(0,0),c.addScaledVector(i,fn.x),c.addScaledVector(r,fn.y),c.addScaledVector(s,fn.z),c}static isFrontFacing(t,e,n,a){return Ze.subVectors(n,e),dn.subVectors(t,e),Ze.cross(dn).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ze.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,a,i){return pn.getUV(t,this.a,this.b,this.c,e,n,a,i)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,i=this.c;let r,s;Jn.subVectors(a,n),Qn.subVectors(i,n),Ir.subVectors(t,n);const c=Jn.dot(Ir),u=Qn.dot(Ir);if(c<=0&&u<=0)return e.copy(n);Fr.subVectors(t,a);const l=Jn.dot(Fr),o=Qn.dot(Fr);if(l>=0&&o<=l)return e.copy(a);const h=c*o-l*u;if(h<=0&&c>=0&&l<=0)return r=c/(c-l),e.copy(n).addScaledVector(Jn,r);Br.subVectors(t,i);const p=Jn.dot(Br),g=Qn.dot(Br);if(g>=0&&p<=g)return e.copy(i);const m=p*u-c*g;if(m<=0&&u>=0&&g<=0)return s=u/(u-g),e.copy(n).addScaledVector(Qn,s);const f=l*g-p*o;if(f<=0&&o-l>=0&&p-g>=0)return sa.subVectors(i,a),s=(o-l)/(o-l+(p-g)),e.copy(a).addScaledVector(sa,s);const v=1/(f+m+h);return r=m*v,s=h*v,e.copy(n).addScaledVector(Jn,r).addScaledVector(Qn,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Ll=0;class mi extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=li,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ha,this.blendDst=qa,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const a=this[e];if(a===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(i){const r=[];for(const s in i){const c=i[s];delete c.metadata,r.push(c)}return r}if(e){const i=a(t.textures),r=a(t.images);i.length>0&&(n.textures=i),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let i=0;i!==a;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class io extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new et,Xi=new te;class sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ys,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,i=this.itemSize;a<i;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xi.fromBufferAttribute(this,e),Xi.applyMatrix3(t),this.setXY(e,Xi.x,Xi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),a=Ue(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),a=Ue(a,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=i,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ys&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ro extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class so extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ze extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pl=0;const He=new ve,zr=new Ee,ti=new et,We=new Fi,bi=new Fi,Me=new et;class on extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Za(t)?so:ro)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new ke().getNormalMatrix(t);n.applyNormalMatrix(i),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(t){const e=[];for(let n=0,a=t.length;n<a;n++){const i=t[n];e.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new ze(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const i=e[n];We.setFromBufferAttribute(i),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new et,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];bi.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(We.min,bi.min),We.expandByPoint(Me),Me.addVectors(We.max,bi.max),We.expandByPoint(Me)):(We.expandByPoint(bi.min),We.expandByPoint(bi.max))}We.getCenter(n);let a=0;for(let i=0,r=t.count;i<r;i++)Me.fromBufferAttribute(t,i),a=Math.max(a,n.distanceToSquared(Me));if(e)for(let i=0,r=e.length;i<r;i++){const s=e[i],c=this.morphTargetsRelative;for(let u=0,l=s.count;u<l;u++)Me.fromBufferAttribute(s,u),c&&(ti.fromBufferAttribute(t,u),Me.add(ti)),a=Math.max(a,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,a=e.position.array,i=e.normal.array,r=e.uv.array,s=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,u=[],l=[];for(let L=0;L<s;L++)u[L]=new et,l[L]=new et;const o=new et,h=new et,p=new et,g=new te,m=new te,f=new te,v=new et,x=new et;function _(L,D,q){o.fromArray(a,L*3),h.fromArray(a,D*3),p.fromArray(a,q*3),g.fromArray(r,L*2),m.fromArray(r,D*2),f.fromArray(r,q*2),h.sub(o),p.sub(o),m.sub(g),f.sub(g);const F=1/(m.x*f.y-f.x*m.y);isFinite(F)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(F),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-f.x).multiplyScalar(F),u[L].add(v),u[D].add(v),u[q].add(v),l[L].add(x),l[D].add(x),l[q].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let L=0,D=y.length;L<D;++L){const q=y[L],F=q.start,V=q.count;for(let Y=F,it=F+V;Y<it;Y+=3)_(n[Y+0],n[Y+1],n[Y+2])}const w=new et,R=new et,H=new et,b=new et;function T(L){H.fromArray(i,L*3),b.copy(H);const D=u[L];w.copy(D),w.sub(H.multiplyScalar(H.dot(D))).normalize(),R.crossVectors(b,D);const F=R.dot(l[L])<0?-1:1;c[L*4]=w.x,c[L*4+1]=w.y,c[L*4+2]=w.z,c[L*4+3]=F}for(let L=0,D=y.length;L<D;++L){const q=y[L],F=q.start,V=q.count;for(let Y=F,it=F+V;Y<it;Y+=3)T(n[Y+0]),T(n[Y+1]),T(n[Y+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const a=new et,i=new et,r=new et,s=new et,c=new et,u=new et,l=new et,o=new et;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),m=t.getX(h+1),f=t.getX(h+2);a.fromBufferAttribute(e,g),i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,f),l.subVectors(r,i),o.subVectors(a,i),l.cross(o),s.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),u.fromBufferAttribute(n,f),s.add(l),c.add(l),u.add(l),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(f,u.x,u.y,u.z)}else for(let h=0,p=e.count;h<p;h+=3)a.fromBufferAttribute(e,h+0),i.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),l.subVectors(r,i),o.subVectors(a,i),l.cross(o),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(s,c){const u=s.array,l=s.itemSize,o=s.normalized,h=new u.constructor(c.length*l);let p=0,g=0;for(let m=0,f=c.length;m<f;m++){s.isInterleavedBufferAttribute?p=c[m]*s.data.stride+s.offset:p=c[m]*l;for(let v=0;v<l;v++)h[g++]=u[p++]}return new sn(h,l,o)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new on,n=this.index.array,a=this.attributes;for(const s in a){const c=a[s],u=t(c,n);e.setAttribute(s,u)}const i=this.morphAttributes;for(const s in i){const c=[],u=i[s];for(let l=0,o=u.length;l<o;l++){const h=u[l],p=t(h,n);c.push(p)}e.morphAttributes[s]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let s=0,c=r.length;s<c;s++){const u=r[s];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const a={};let i=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let o=0,h=u.length;o<h;o++){const p=u[o];l.push(p.toJSON(t.data))}l.length>0&&(a[c]=l,i=!0)}i&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const u in a){const l=a[u];this.setAttribute(u,l.clone(e))}const i=t.morphAttributes;for(const u in i){const l=[],o=i[u];for(let h=0,p=o.length;h<p;h++)l.push(o[h].clone(e));this.morphAttributes[u]=l}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let u=0,l=r.length;u<l;u++){const o=r[u];this.addGroup(o.start,o.count,o.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const aa=new ve,ei=new eo,Nr=new cr,Mi=new et,Si=new et,Ei=new et,Or=new et,Yi=new et,$i=new te,ji=new te,Zi=new te,Ur=new et,Ki=new et;class Qe extends Ee{constructor(t=new on,e=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=a.length;i<r;i++){const s=a[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,i=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const s=this.morphTargetInfluences;if(i&&s){Yi.set(0,0,0);for(let c=0,u=i.length;c<u;c++){const l=s[c],o=i[c];l!==0&&(Or.fromBufferAttribute(o,t),r?Yi.addScaledVector(Or,l):Yi.addScaledVector(Or.sub(e),l))}e.add(Yi)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,a=this.material,i=this.matrixWorld;if(a===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),t.ray.intersectsSphere(Nr)===!1)||(aa.copy(i).invert(),ei.copy(t.ray).applyMatrix4(aa),n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1))return;let r;const s=n.index,c=n.attributes.position,u=n.attributes.uv,l=n.attributes.uv2,o=n.groups,h=n.drawRange;if(s!==null)if(Array.isArray(a))for(let p=0,g=o.length;p<g;p++){const m=o[p],f=a[m.materialIndex],v=Math.max(m.start,h.start),x=Math.min(s.count,Math.min(m.start+m.count,h.start+h.count));for(let _=v,y=x;_<y;_+=3){const w=s.getX(_),R=s.getX(_+1),H=s.getX(_+2);r=Ji(this,f,t,ei,u,l,w,R,H),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const p=Math.max(0,h.start),g=Math.min(s.count,h.start+h.count);for(let m=p,f=g;m<f;m+=3){const v=s.getX(m),x=s.getX(m+1),_=s.getX(m+2);r=Ji(this,a,t,ei,u,l,v,x,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,g=o.length;p<g;p++){const m=o[p],f=a[m.materialIndex],v=Math.max(m.start,h.start),x=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let _=v,y=x;_<y;_+=3){const w=_,R=_+1,H=_+2;r=Ji(this,f,t,ei,u,l,w,R,H),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const p=Math.max(0,h.start),g=Math.min(c.count,h.start+h.count);for(let m=p,f=g;m<f;m+=3){const v=m,x=m+1,_=m+2;r=Ji(this,a,t,ei,u,l,v,x,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Rl(d,t,e,n,a,i,r,s){let c;if(t.side===Ye?c=n.intersectTriangle(r,i,a,!0,s):c=n.intersectTriangle(a,i,r,t.side===zn,s),c===null)return null;Ki.copy(s),Ki.applyMatrix4(d.matrixWorld);const u=e.ray.origin.distanceTo(Ki);return u<e.near||u>e.far?null:{distance:u,point:Ki.clone(),object:d}}function Ji(d,t,e,n,a,i,r,s,c){d.getVertexPosition(r,Mi),d.getVertexPosition(s,Si),d.getVertexPosition(c,Ei);const u=Rl(d,t,e,n,Mi,Si,Ei,Ur);if(u){a&&($i.fromBufferAttribute(a,r),ji.fromBufferAttribute(a,s),Zi.fromBufferAttribute(a,c),u.uv=pn.getUV(Ur,Mi,Si,Ei,$i,ji,Zi,new te)),i&&($i.fromBufferAttribute(i,r),ji.fromBufferAttribute(i,s),Zi.fromBufferAttribute(i,c),u.uv2=pn.getUV(Ur,Mi,Si,Ei,$i,ji,Zi,new te));const l={a:r,b:s,c,normal:new et,materialIndex:0};pn.getNormal(Mi,Si,Ei,l.normal),u.face=l}return u}class gi extends on{constructor(t=1,e=1,n=1,a=1,i=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:i,depthSegments:r};const s=this;a=Math.floor(a),i=Math.floor(i),r=Math.floor(r);const c=[],u=[],l=[],o=[];let h=0,p=0;g("z","y","x",-1,-1,n,e,t,r,i,0),g("z","y","x",1,-1,n,e,-t,r,i,1),g("x","z","y",1,1,t,n,e,a,r,2),g("x","z","y",1,-1,t,n,-e,a,r,3),g("x","y","z",1,-1,t,e,n,a,i,4),g("x","y","z",-1,-1,t,e,-n,a,i,5),this.setIndex(c),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(o,2));function g(m,f,v,x,_,y,w,R,H,b,T){const L=y/H,D=w/b,q=y/2,F=w/2,V=R/2,Y=H+1,it=b+1;let G=0,z=0;const J=new et;for(let $=0;$<it;$++){const A=$*D-F;for(let O=0;O<Y;O++){const P=O*L-q;J[m]=P*x,J[f]=A*_,J[v]=V,u.push(J.x,J.y,J.z),J[m]=0,J[f]=0,J[v]=R>0?1:-1,l.push(J.x,J.y,J.z),o.push(O/H),o.push(1-$/b),G+=1}}for(let $=0;$<b;$++)for(let A=0;A<H;A++){const O=h+A+Y*$,P=h+A+Y*($+1),C=h+(A+1)+Y*($+1),E=h+(A+1)+Y*$;c.push(O,P,E),c.push(P,C,E),z+=6}s.addGroup(p,z,T),p+=z,h+=G}}static fromJSON(t){return new gi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fi(d){const t={};for(const e in d){t[e]={};for(const n in d[e]){const a=d[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function Pe(d){const t={};for(let e=0;e<d.length;e++){const n=fi(d[e]);for(const a in n)t[a]=n[a]}return t}function Dl(d){const t=[];for(let e=0;e<d.length;e++)t.push(d[e].clone());return t}function ao(d){return d.getRenderTarget()===null&&d.outputEncoding===he?en:Pi}const Il={clone:fi,merge:Pe};var Fl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fl,this.fragmentShader=Bl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fi(t.uniforms),this.uniformsGroups=Dl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?e.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[a]={type:"m4",value:r.toArray()}:e.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class oo extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xe extends oo{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,a,i,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=i,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,i=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,u=r.fullHeight;i+=r.offsetX*a/c,e-=r.offsetY*n/u,a*=r.width/c,n*=r.height/u}const s=this.filmOffset;s!==0&&(i+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+a,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class zl extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const a=new Xe(ni,ii,t,e);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(1,0,0),this.add(a);const i=new Xe(ni,ii,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(-1,0,0),this.add(i);const r=new Xe(ni,ii,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const s=new Xe(ni,ii,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const c=new Xe(ni,ii,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const u=new Xe(ni,ii,t,e);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[a,i,r,s,c,u]=this.children,l=t.getRenderTarget(),o=t.toneMapping,h=t.xr.enabled;t.toneMapping=mn,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,a),t.setRenderTarget(n,1),t.render(e,i),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,u),t.setRenderTarget(l),t.toneMapping=o,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class ls extends Be{constructor(t,e,n,a,i,r,s,c,u,l){t=t!==void 0?t:[],e=e!==void 0?e:hi,super(t,e,n,a,i,r,s,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nl extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];this.texture=new ls(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new gi(5,5,5),i=new Wn({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Mn});i.uniforms.tEquirect.value=e;const r=new Qe(a,i),s=e.minFilter;return e.minFilter===Ci&&(e.minFilter=qe),new zl(1,10,this).update(t,r),e.minFilter=s,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,a){const i=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,a);t.setRenderTarget(i)}}const Vr=new et,Ol=new et,Ul=new ke;class Ln{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=Vr.subVectors(n,e).cross(Ol.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Vr),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const i=-(t.start.dot(this.normal)+this.constant)/a;return i<0||i>1?null:e.copy(n).multiplyScalar(i).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ul.getNormalMatrix(t),a=this.coplanarPoint(Vr).applyMatrix4(t),i=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(i),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new cr,Qi=new et;class cs{constructor(t=new Ln,e=new Ln,n=new Ln,a=new Ln,i=new Ln,r=new Ln){this.planes=[t,e,n,a,i,r]}set(t,e,n,a,i,r){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(a),s[4].copy(i),s[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,a=n[0],i=n[1],r=n[2],s=n[3],c=n[4],u=n[5],l=n[6],o=n[7],h=n[8],p=n[9],g=n[10],m=n[11],f=n[12],v=n[13],x=n[14],_=n[15];return e[0].setComponents(s-a,o-c,m-h,_-f).normalize(),e[1].setComponents(s+a,o+c,m+h,_+f).normalize(),e[2].setComponents(s+i,o+u,m+p,_+v).normalize(),e[3].setComponents(s-i,o-u,m-p,_-v).normalize(),e[4].setComponents(s-r,o-l,m-g,_-x).normalize(),e[5].setComponents(s+r,o+l,m+g,_+x).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let i=0;i<6;i++)if(e[i].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(Qi.x=a.normal.x>0?t.max.x:t.min.x,Qi.y=a.normal.y>0?t.max.y:t.min.y,Qi.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Qi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lo(){let d=null,t=!1,e=null,n=null;function a(i,r){e(i,r),n=d.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=d.requestAnimationFrame(a),t=!0)},stop:function(){d.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(i){e=i},setContext:function(i){d=i}}}function Vl(d,t){const e=t.isWebGL2,n=new WeakMap;function a(u,l){const o=u.array,h=u.usage,p=d.createBuffer();d.bindBuffer(l,p),d.bufferData(l,o,h),u.onUploadCallback();let g;if(o instanceof Float32Array)g=5126;else if(o instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(o instanceof Int16Array)g=5122;else if(o instanceof Uint32Array)g=5125;else if(o instanceof Int32Array)g=5124;else if(o instanceof Int8Array)g=5120;else if(o instanceof Uint8Array)g=5121;else if(o instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:p,type:g,bytesPerElement:o.BYTES_PER_ELEMENT,version:u.version}}function i(u,l,o){const h=l.array,p=l.updateRange;d.bindBuffer(o,u),p.count===-1?d.bufferSubData(o,0,h):(e?d.bufferSubData(o,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):d.bufferSubData(o,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),l.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const l=n.get(u);l&&(d.deleteBuffer(l.buffer),n.delete(u))}function c(u,l){if(u.isGLBufferAttribute){const h=n.get(u);(!h||h.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const o=n.get(u);o===void 0?n.set(u,a(u,l)):o.version<u.version&&(i(o.buffer,u,l),o.version=u.version)}return{get:r,remove:s,update:c}}class hr extends on{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const i=t/2,r=e/2,s=Math.floor(n),c=Math.floor(a),u=s+1,l=c+1,o=t/s,h=e/c,p=[],g=[],m=[],f=[];for(let v=0;v<l;v++){const x=v*h-r;for(let _=0;_<u;_++){const y=_*o-i;g.push(y,-x,0),m.push(0,0,1),f.push(_/s),f.push(1-v/c)}}for(let v=0;v<c;v++)for(let x=0;x<s;x++){const _=x+u*v,y=x+u*(v+1),w=x+1+u*(v+1),R=x+1+u*v;p.push(_,y,R),p.push(y,w,R)}this.setIndex(p),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(m,3)),this.setAttribute("uv",new ze(f,2))}static fromJSON(t){return new hr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ql=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yl="vec3 transformed = vec3( position );",$l=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Zl=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Kl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ql=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ec=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ic=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ac=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,oc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,uc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fc="gl_FragColor = linearToOutputTexel( gl_FragColor );",pc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mc=`#ifdef USE_ENVMAP
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
#endif`,gc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vc=`#ifdef USE_ENVMAP
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
#endif`,xc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_c=`#ifdef USE_ENVMAP
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
#endif`,yc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sc=`#ifdef USE_GRADIENTMAP
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
}`,Ec=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ac=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Pc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Rc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ic=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,zc=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Nc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Oc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$c=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kc=`#ifdef USE_MORPHNORMALS
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
#endif`,Jc=`#ifdef USE_MORPHTARGETS
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
#endif`,Qc=`#ifdef USE_MORPHTARGETS
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
#endif`,th=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,eh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ih=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ah=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,oh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ch=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,dh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ph=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_h=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,wh=`float getShadowMask() {
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
}`,bh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Sh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eh=`#ifdef USE_SKINNING
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
#endif`,Ah=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Th=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ch=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ph=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Rh=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Dh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ih=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Fh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Bh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,zh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Nh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Oh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vh=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kh=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,Gh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,Xh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,$h=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,tu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,nu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,ru=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,su=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,au=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,ou=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,lu=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,hu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,du=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,pu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vu=`uniform float rotation;
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
}`,xu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qt={alphamap_fragment:Wl,alphamap_pars_fragment:kl,alphatest_fragment:Gl,alphatest_pars_fragment:Hl,aomap_fragment:ql,aomap_pars_fragment:Xl,begin_vertex:Yl,beginnormal_vertex:$l,bsdfs:jl,iridescence_fragment:Zl,bumpmap_pars_fragment:Kl,clipping_planes_fragment:Jl,clipping_planes_pars_fragment:Ql,clipping_planes_pars_vertex:tc,clipping_planes_vertex:ec,color_fragment:nc,color_pars_fragment:ic,color_pars_vertex:rc,color_vertex:sc,common:ac,cube_uv_reflection_fragment:oc,defaultnormal_vertex:lc,displacementmap_pars_vertex:cc,displacementmap_vertex:hc,emissivemap_fragment:uc,emissivemap_pars_fragment:dc,encodings_fragment:fc,encodings_pars_fragment:pc,envmap_fragment:mc,envmap_common_pars_fragment:gc,envmap_pars_fragment:vc,envmap_pars_vertex:xc,envmap_physical_pars_fragment:Pc,envmap_vertex:_c,fog_vertex:yc,fog_pars_vertex:wc,fog_fragment:bc,fog_pars_fragment:Mc,gradientmap_pars_fragment:Sc,lightmap_fragment:Ec,lightmap_pars_fragment:Ac,lights_lambert_fragment:Tc,lights_lambert_pars_fragment:Cc,lights_pars_begin:Lc,lights_toon_fragment:Rc,lights_toon_pars_fragment:Dc,lights_phong_fragment:Ic,lights_phong_pars_fragment:Fc,lights_physical_fragment:Bc,lights_physical_pars_fragment:zc,lights_fragment_begin:Nc,lights_fragment_maps:Oc,lights_fragment_end:Uc,logdepthbuf_fragment:Vc,logdepthbuf_pars_fragment:Wc,logdepthbuf_pars_vertex:kc,logdepthbuf_vertex:Gc,map_fragment:Hc,map_pars_fragment:qc,map_particle_fragment:Xc,map_particle_pars_fragment:Yc,metalnessmap_fragment:$c,metalnessmap_pars_fragment:jc,morphcolor_vertex:Zc,morphnormal_vertex:Kc,morphtarget_pars_vertex:Jc,morphtarget_vertex:Qc,normal_fragment_begin:th,normal_fragment_maps:eh,normal_pars_fragment:nh,normal_pars_vertex:ih,normal_vertex:rh,normalmap_pars_fragment:sh,clearcoat_normal_fragment_begin:ah,clearcoat_normal_fragment_maps:oh,clearcoat_pars_fragment:lh,iridescence_pars_fragment:ch,output_fragment:hh,packing:uh,premultiplied_alpha_fragment:dh,project_vertex:fh,dithering_fragment:ph,dithering_pars_fragment:mh,roughnessmap_fragment:gh,roughnessmap_pars_fragment:vh,shadowmap_pars_fragment:xh,shadowmap_pars_vertex:_h,shadowmap_vertex:yh,shadowmask_pars_fragment:wh,skinbase_vertex:bh,skinning_pars_vertex:Mh,skinning_vertex:Sh,skinnormal_vertex:Eh,specularmap_fragment:Ah,specularmap_pars_fragment:Th,tonemapping_fragment:Ch,tonemapping_pars_fragment:Lh,transmission_fragment:Ph,transmission_pars_fragment:Rh,uv_pars_fragment:Dh,uv_pars_vertex:Ih,uv_vertex:Fh,uv2_pars_fragment:Bh,uv2_pars_vertex:zh,uv2_vertex:Nh,worldpos_vertex:Oh,background_vert:Uh,background_frag:Vh,backgroundCube_vert:Wh,backgroundCube_frag:kh,cube_vert:Gh,cube_frag:Hh,depth_vert:qh,depth_frag:Xh,distanceRGBA_vert:Yh,distanceRGBA_frag:$h,equirect_vert:jh,equirect_frag:Zh,linedashed_vert:Kh,linedashed_frag:Jh,meshbasic_vert:Qh,meshbasic_frag:tu,meshlambert_vert:eu,meshlambert_frag:nu,meshmatcap_vert:iu,meshmatcap_frag:ru,meshnormal_vert:su,meshnormal_frag:au,meshphong_vert:ou,meshphong_frag:lu,meshphysical_vert:cu,meshphysical_frag:hu,meshtoon_vert:uu,meshtoon_frag:du,points_vert:fu,points_frag:pu,shadow_vert:mu,shadow_frag:gu,sprite_vert:vu,sprite_frag:xu},It={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ke},uv2Transform:{value:new ke},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ke}}},nn={basic:{uniforms:Pe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Pe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new oe(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Pe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Pe([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Pe([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new oe(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Pe([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Pe([It.points,It.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Pe([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Pe([It.common,It.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Pe([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Pe([It.sprite,It.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Pe([It.common,It.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Pe([It.lights,It.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};nn.physical={uniforms:Pe([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const tr={r:0,b:0,g:0};function _u(d,t,e,n,a,i,r){const s=new oe(0);let c=i===!0?0:1,u,l,o=null,h=0,p=null;function g(f,v){let x=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_));const y=d.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(_=null),_===null?m(s,c):_&&_.isColor&&(m(_,1),x=!0),(d.autoClear||x)&&d.clear(d.autoClearColor,d.autoClearDepth,d.autoClearStencil),_&&(_.isCubeTexture||_.mapping===lr)?(l===void 0&&(l=new Qe(new gi(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:fi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,H,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=_.encoding!==he,(o!==_||h!==_.version||p!==d.toneMapping)&&(l.material.needsUpdate=!0,o=_,h=_.version,p=d.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Qe(new hr(2,2),new Wn({name:"BackgroundMaterial",uniforms:fi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=_.encoding!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(o!==_||h!==_.version||p!==d.toneMapping)&&(u.material.needsUpdate=!0,o=_,h=_.version,p=d.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null))}function m(f,v){f.getRGB(tr,ao(d)),n.buffers.color.setClear(tr.r,tr.g,tr.b,v,r)}return{getClearColor:function(){return s},setClearColor:function(f,v=1){s.set(f),c=v,m(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,m(s,c)},render:g}}function yu(d,t,e,n){const a=d.getParameter(34921),i=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||i!==null,s={},c=f(null);let u=c,l=!1;function o(V,Y,it,G,z){let J=!1;if(r){const $=m(G,it,Y);u!==$&&(u=$,p(u.object)),J=v(V,G,it,z),J&&x(V,G,it,z)}else{const $=Y.wireframe===!0;(u.geometry!==G.id||u.program!==it.id||u.wireframe!==$)&&(u.geometry=G.id,u.program=it.id,u.wireframe=$,J=!0)}z!==null&&e.update(z,34963),(J||l)&&(l=!1,b(V,Y,it,G),z!==null&&d.bindBuffer(34963,e.get(z).buffer))}function h(){return n.isWebGL2?d.createVertexArray():i.createVertexArrayOES()}function p(V){return n.isWebGL2?d.bindVertexArray(V):i.bindVertexArrayOES(V)}function g(V){return n.isWebGL2?d.deleteVertexArray(V):i.deleteVertexArrayOES(V)}function m(V,Y,it){const G=it.wireframe===!0;let z=s[V.id];z===void 0&&(z={},s[V.id]=z);let J=z[Y.id];J===void 0&&(J={},z[Y.id]=J);let $=J[G];return $===void 0&&($=f(h()),J[G]=$),$}function f(V){const Y=[],it=[],G=[];for(let z=0;z<a;z++)Y[z]=0,it[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:it,attributeDivisors:G,object:V,attributes:{},index:null}}function v(V,Y,it,G){const z=u.attributes,J=Y.attributes;let $=0;const A=it.getAttributes();for(const O in A)if(A[O].location>=0){const C=z[O];let E=J[O];if(E===void 0&&(O==="instanceMatrix"&&V.instanceMatrix&&(E=V.instanceMatrix),O==="instanceColor"&&V.instanceColor&&(E=V.instanceColor)),C===void 0||C.attribute!==E||E&&C.data!==E.data)return!0;$++}return u.attributesNum!==$||u.index!==G}function x(V,Y,it,G){const z={},J=Y.attributes;let $=0;const A=it.getAttributes();for(const O in A)if(A[O].location>=0){let C=J[O];C===void 0&&(O==="instanceMatrix"&&V.instanceMatrix&&(C=V.instanceMatrix),O==="instanceColor"&&V.instanceColor&&(C=V.instanceColor));const E={};E.attribute=C,C&&C.data&&(E.data=C.data),z[O]=E,$++}u.attributes=z,u.attributesNum=$,u.index=G}function _(){const V=u.newAttributes;for(let Y=0,it=V.length;Y<it;Y++)V[Y]=0}function y(V){w(V,0)}function w(V,Y){const it=u.newAttributes,G=u.enabledAttributes,z=u.attributeDivisors;it[V]=1,G[V]===0&&(d.enableVertexAttribArray(V),G[V]=1),z[V]!==Y&&((n.isWebGL2?d:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,Y),z[V]=Y)}function R(){const V=u.newAttributes,Y=u.enabledAttributes;for(let it=0,G=Y.length;it<G;it++)Y[it]!==V[it]&&(d.disableVertexAttribArray(it),Y[it]=0)}function H(V,Y,it,G,z,J){n.isWebGL2===!0&&(it===5124||it===5125)?d.vertexAttribIPointer(V,Y,it,z,J):d.vertexAttribPointer(V,Y,it,G,z,J)}function b(V,Y,it,G){if(n.isWebGL2===!1&&(V.isInstancedMesh||G.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const z=G.attributes,J=it.getAttributes(),$=Y.defaultAttributeValues;for(const A in J){const O=J[A];if(O.location>=0){let P=z[A];if(P===void 0&&(A==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),A==="instanceColor"&&V.instanceColor&&(P=V.instanceColor)),P!==void 0){const C=P.normalized,E=P.itemSize,N=e.get(P);if(N===void 0)continue;const rt=N.buffer,Q=N.type,X=N.bytesPerElement;if(P.isInterleavedBufferAttribute){const K=P.data,ht=K.stride,Mt=P.offset;if(K.isInstancedInterleavedBuffer){for(let mt=0;mt<O.locationSize;mt++)w(O.location+mt,K.meshPerAttribute);V.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let mt=0;mt<O.locationSize;mt++)y(O.location+mt);d.bindBuffer(34962,rt);for(let mt=0;mt<O.locationSize;mt++)H(O.location+mt,E/O.locationSize,Q,C,ht*X,(Mt+E/O.locationSize*mt)*X)}else{if(P.isInstancedBufferAttribute){for(let K=0;K<O.locationSize;K++)w(O.location+K,P.meshPerAttribute);V.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let K=0;K<O.locationSize;K++)y(O.location+K);d.bindBuffer(34962,rt);for(let K=0;K<O.locationSize;K++)H(O.location+K,E/O.locationSize,Q,C,E*X,E/O.locationSize*K*X)}}else if($!==void 0){const C=$[A];if(C!==void 0)switch(C.length){case 2:d.vertexAttrib2fv(O.location,C);break;case 3:d.vertexAttrib3fv(O.location,C);break;case 4:d.vertexAttrib4fv(O.location,C);break;default:d.vertexAttrib1fv(O.location,C)}}}}R()}function T(){q();for(const V in s){const Y=s[V];for(const it in Y){const G=Y[it];for(const z in G)g(G[z].object),delete G[z];delete Y[it]}delete s[V]}}function L(V){if(s[V.id]===void 0)return;const Y=s[V.id];for(const it in Y){const G=Y[it];for(const z in G)g(G[z].object),delete G[z];delete Y[it]}delete s[V.id]}function D(V){for(const Y in s){const it=s[Y];if(it[V.id]===void 0)continue;const G=it[V.id];for(const z in G)g(G[z].object),delete G[z];delete it[V.id]}}function q(){F(),l=!0,u!==c&&(u=c,p(u.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:o,reset:q,resetDefaultState:F,dispose:T,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:y,disableUnusedAttributes:R}}function wu(d,t,e,n){const a=n.isWebGL2;let i;function r(u){i=u}function s(u,l){d.drawArrays(i,u,l),e.update(l,i,1)}function c(u,l,o){if(o===0)return;let h,p;if(a)h=d,p="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](i,u,l,o),e.update(l,i,o)}this.setMode=r,this.render=s,this.renderInstances=c}function bu(d,t,e){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");n=d.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(H){if(H==="highp"){if(d.getShaderPrecisionFormat(35633,36338).precision>0&&d.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";H="mediump"}return H==="mediump"&&d.getShaderPrecisionFormat(35633,36337).precision>0&&d.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&d instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&d instanceof WebGL2ComputeRenderingContext;let s=e.precision!==void 0?e.precision:"highp";const c=i(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const u=r||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,o=d.getParameter(34930),h=d.getParameter(35660),p=d.getParameter(3379),g=d.getParameter(34076),m=d.getParameter(34921),f=d.getParameter(36347),v=d.getParameter(36348),x=d.getParameter(36349),_=h>0,y=r||t.has("OES_texture_float"),w=_&&y,R=r?d.getParameter(36183):0;return{isWebGL2:r,drawBuffers:u,getMaxAnisotropy:a,getMaxPrecision:i,precision:s,logarithmicDepthBuffer:l,maxTextures:o,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:R}}function Mu(d){const t=this;let e=null,n=0,a=!1,i=!1;const r=new Ln,s=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(o,h,p){const g=o.length!==0||h||n!==0||a;return a=h,e=l(o,p,0),n=o.length,g},this.beginShadows=function(){i=!0,l(null)},this.endShadows=function(){i=!1,u()},this.setState=function(o,h,p){const g=o.clippingPlanes,m=o.clipIntersection,f=o.clipShadows,v=d.get(o);if(!a||g===null||g.length===0||i&&!f)i?l(null):u();else{const x=i?0:n,_=x*4;let y=v.clippingState||null;c.value=y,y=l(g,h,_,p);for(let w=0;w!==_;++w)y[w]=e[w];v.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(o,h,p,g){const m=o!==null?o.length:0;let f=null;if(m!==0){if(f=c.value,g!==!0||f===null){const v=p+m*4,x=h.matrixWorldInverse;s.getNormalMatrix(x),(f===null||f.length<v)&&(f=new Float32Array(v));for(let _=0,y=p;_!==m;++_,y+=4)r.copy(o[_]).applyMatrix4(x,s),r.normal.toArray(f,y),f[y+3]=r.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,f}}function Su(d){let t=new WeakMap;function e(r,s){return s===Kr?r.mapping=hi:s===Jr&&(r.mapping=ui),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const s=r.mapping;if(s===Kr||s===Jr)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const u=new Nl(c.height/2);return u.fromEquirectangularTexture(d,r),t.set(r,u),r.addEventListener("dispose",a),e(u.texture,r.mapping)}else return null}}return r}function a(r){const s=r.target;s.removeEventListener("dispose",a);const c=t.get(s);c!==void 0&&(t.delete(s),c.dispose())}function i(){t=new WeakMap}return{get:n,dispose:i}}class co extends oo{constructor(t=-1,e=1,n=1,a=-1,i=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=i,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,i,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=i,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let i=n-t,r=n+t,s=a+e,c=a-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=u*this.view.offsetX,r=i+u*this.view.width,s-=l*this.view.offsetY,c=s-l*this.view.height}this.projectionMatrix.makeOrthographic(i,r,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const oi=4,oa=[.125,.215,.35,.446,.526,.582],Rn=20,Wr=new co,la=new oe;let kr=null;const Pn=(1+Math.sqrt(5))/2,si=1/Pn,ca=[new et(1,1,1),new et(-1,1,1),new et(1,1,-1),new et(-1,1,-1),new et(0,Pn,si),new et(0,Pn,-si),new et(si,0,Pn),new et(-si,0,Pn),new et(Pn,si,0),new et(-Pn,si,0)];class ha{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){kr=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(t,n,a,i),e>0&&this._blur(i,0,0,e),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=da(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr),t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:Li,format:Je,encoding:On,depthBuffer:!1},a=ua(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ua(t,e,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eu(i)),this._blurMaterial=Au(i,t,e)}return a}_compileMaterial(t){const e=new Qe(this._lodPlanes[0],t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,a){const s=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,o=l.autoClear,h=l.toneMapping;l.getClearColor(la),l.toneMapping=mn,l.autoClear=!1;const p=new io({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new Qe(new gi,p);let m=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,m=!0):(p.color.copy(la),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(s.up.set(0,c[v],0),s.lookAt(u[v],0,0)):x===1?(s.up.set(0,0,c[v]),s.lookAt(0,u[v],0)):(s.up.set(0,c[v],0),s.lookAt(0,0,u[v]));const _=this._cubeSize;er(a,x*_,v>2?_:0,_,_),l.setRenderTarget(a),m&&l.render(g,s),l.render(t,s)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=h,l.autoClear=o,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===hi||t.mapping===ui;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=da());const i=a?this._cubemapMaterial:this._equirectMaterial,r=new Qe(this._lodPlanes[0],i),s=i.uniforms;s.envMap.value=t;const c=this._cubeSize;er(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const i=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=ca[(a-1)%ca.length];this._blur(t,a-1,a,i,r)}e.autoClear=n}_blur(t,e,n,a,i){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,a,"latitudinal",i),this._halfBlur(r,t,n,n,a,"longitudinal",i)}_halfBlur(t,e,n,a,i,r,s){const c=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,o=new Qe(this._lodPlanes[a],u),h=u.uniforms,p=this._sizeLods[n]-1,g=isFinite(i)?Math.PI/(2*p):2*Math.PI/(2*Rn-1),m=i/g,f=isFinite(i)?1+Math.floor(l*m):Rn;f>Rn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Rn}`);const v=[];let x=0;for(let H=0;H<Rn;++H){const b=H/m,T=Math.exp(-b*b/2);v.push(T),H===0?x+=T:H<f&&(x+=2*T)}for(let H=0;H<v.length;H++)v[H]=v[H]/x;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=v,h.latitudinal.value=r==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const y=this._sizeLods[a],w=3*y*(a>_-oi?a-_+oi:0),R=4*(this._cubeSize-y);er(e,w,R,3*y,2*y),c.setRenderTarget(e),c.render(o,Wr)}}function Eu(d){const t=[],e=[],n=[];let a=d;const i=d-oi+1+oa.length;for(let r=0;r<i;r++){const s=Math.pow(2,a);e.push(s);let c=1/s;r>d-oi?c=oa[r-d+oi-1]:r===0&&(c=0),n.push(c);const u=1/(s-2),l=-u,o=1+u,h=[l,l,o,l,o,o,l,l,o,o,l,o],p=6,g=6,m=3,f=2,v=1,x=new Float32Array(m*g*p),_=new Float32Array(f*g*p),y=new Float32Array(v*g*p);for(let R=0;R<p;R++){const H=R%3*2/3-1,b=R>2?0:-1,T=[H,b,0,H+2/3,b,0,H+2/3,b+1,0,H,b,0,H+2/3,b+1,0,H,b+1,0];x.set(T,m*g*R),_.set(h,f*g*R);const L=[R,R,R,R,R,R];y.set(L,v*g*R)}const w=new on;w.setAttribute("position",new sn(x,m)),w.setAttribute("uv",new sn(_,f)),w.setAttribute("faceIndex",new sn(y,v)),t.push(w),a>oi&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ua(d,t,e){const n=new Un(d,t,e);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(d,t,e,n,a){d.viewport.set(t,e,n,a),d.scissor.set(t,e,n,a)}function Au(d,t,e){const n=new Float32Array(Rn),a=new et(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${d}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hs(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function da(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hs(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function fa(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function hs(){return`

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
	`}function Tu(d){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const c=s.mapping,u=c===Kr||c===Jr,l=c===hi||c===ui;if(u||l)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let o=t.get(s);return e===null&&(e=new ha(d)),o=u?e.fromEquirectangular(s,o):e.fromCubemap(s,o),t.set(s,o),o.texture}else{if(t.has(s))return t.get(s).texture;{const o=s.image;if(u&&o&&o.height>0||l&&o&&a(o)){e===null&&(e=new ha(d));const h=u?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,h),s.addEventListener("dispose",i),h.texture}else return null}}}return s}function a(s){let c=0;const u=6;for(let l=0;l<u;l++)s[l]!==void 0&&c++;return c===u}function i(s){const c=s.target;c.removeEventListener("dispose",i);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Cu(d){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=d.getExtension("WEBGL_depth_texture")||d.getExtension("MOZ_WEBGL_depth_texture")||d.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=d.getExtension("EXT_texture_filter_anisotropic")||d.getExtension("MOZ_EXT_texture_filter_anisotropic")||d.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=d.getExtension("WEBGL_compressed_texture_s3tc")||d.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||d.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=d.getExtension("WEBGL_compressed_texture_pvrtc")||d.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=d.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const a=e(n);return a===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Lu(d,t,e,n){const a={},i=new WeakMap;function r(o){const h=o.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete a[h.id];const p=i.get(h);p&&(t.remove(p),i.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function s(o,h){return a[h.id]===!0||(h.addEventListener("dispose",r),a[h.id]=!0,e.memory.geometries++),h}function c(o){const h=o.attributes;for(const g in h)t.update(h[g],34962);const p=o.morphAttributes;for(const g in p){const m=p[g];for(let f=0,v=m.length;f<v;f++)t.update(m[f],34962)}}function u(o){const h=[],p=o.index,g=o.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let _=0,y=x.length;_<y;_+=3){const w=x[_+0],R=x[_+1],H=x[_+2];h.push(w,R,R,H,H,w)}}else{const x=g.array;m=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const w=_+0,R=_+1,H=_+2;h.push(w,R,R,H,H,w)}}const f=new(Za(h)?so:ro)(h,1);f.version=m;const v=i.get(o);v&&t.remove(v),i.set(o,f)}function l(o){const h=i.get(o);if(h){const p=o.index;p!==null&&h.version<p.version&&u(o)}else u(o);return i.get(o)}return{get:s,update:c,getWireframeAttribute:l}}function Pu(d,t,e,n){const a=n.isWebGL2;let i;function r(h){i=h}let s,c;function u(h){s=h.type,c=h.bytesPerElement}function l(h,p){d.drawElements(i,p,s,h*c),e.update(p,i,1)}function o(h,p,g){if(g===0)return;let m,f;if(a)m=d,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](i,p,s,h*c,g),e.update(p,i,g)}this.setMode=r,this.setIndex=u,this.render=l,this.renderInstances=o}function Ru(d){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,r,s){switch(e.calls++,r){case 4:e.triangles+=s*(i/3);break;case 1:e.lines+=s*(i/2);break;case 3:e.lines+=s*(i-1);break;case 2:e.lines+=s*i;break;case 0:e.points+=s*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function Du(d,t){return d[0]-t[0]}function Iu(d,t){return Math.abs(t[1])-Math.abs(d[1])}function Fu(d,t,e){const n={},a=new Float32Array(8),i=new WeakMap,r=new Se,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function c(u,l,o,h){const p=u.morphTargetInfluences;if(t.isWebGL2===!0){const m=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=m!==void 0?m.length:0;let v=i.get(l);if(v===void 0||v.count!==f){let it=function(){V.dispose(),i.delete(l),l.removeEventListener("dispose",it)};var g=it;v!==void 0&&v.texture.dispose();const y=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,R=l.morphAttributes.color!==void 0,H=l.morphAttributes.position||[],b=l.morphAttributes.normal||[],T=l.morphAttributes.color||[];let L=0;y===!0&&(L=1),w===!0&&(L=2),R===!0&&(L=3);let D=l.attributes.position.count*L,q=1;D>t.maxTextureSize&&(q=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const F=new Float32Array(D*q*4*f),V=new to(F,D,q,f);V.type=In,V.needsUpdate=!0;const Y=L*4;for(let G=0;G<f;G++){const z=H[G],J=b[G],$=T[G],A=D*q*4*G;for(let O=0;O<z.count;O++){const P=O*Y;y===!0&&(r.fromBufferAttribute(z,O),F[A+P+0]=r.x,F[A+P+1]=r.y,F[A+P+2]=r.z,F[A+P+3]=0),w===!0&&(r.fromBufferAttribute(J,O),F[A+P+4]=r.x,F[A+P+5]=r.y,F[A+P+6]=r.z,F[A+P+7]=0),R===!0&&(r.fromBufferAttribute($,O),F[A+P+8]=r.x,F[A+P+9]=r.y,F[A+P+10]=r.z,F[A+P+11]=$.itemSize===4?r.w:1)}}v={count:f,texture:V,size:new te(D,q)},i.set(l,v),l.addEventListener("dispose",it)}let x=0;for(let y=0;y<p.length;y++)x+=p[y];const _=l.morphTargetsRelative?1:1-x;h.getUniforms().setValue(d,"morphTargetBaseInfluence",_),h.getUniforms().setValue(d,"morphTargetInfluences",p),h.getUniforms().setValue(d,"morphTargetsTexture",v.texture,e),h.getUniforms().setValue(d,"morphTargetsTextureSize",v.size)}else{const m=p===void 0?0:p.length;let f=n[l.id];if(f===void 0||f.length!==m){f=[];for(let w=0;w<m;w++)f[w]=[w,0];n[l.id]=f}for(let w=0;w<m;w++){const R=f[w];R[0]=w,R[1]=p[w]}f.sort(Iu);for(let w=0;w<8;w++)w<m&&f[w][1]?(s[w][0]=f[w][0],s[w][1]=f[w][1]):(s[w][0]=Number.MAX_SAFE_INTEGER,s[w][1]=0);s.sort(Du);const v=l.morphAttributes.position,x=l.morphAttributes.normal;let _=0;for(let w=0;w<8;w++){const R=s[w],H=R[0],b=R[1];H!==Number.MAX_SAFE_INTEGER&&b?(v&&l.getAttribute("morphTarget"+w)!==v[H]&&l.setAttribute("morphTarget"+w,v[H]),x&&l.getAttribute("morphNormal"+w)!==x[H]&&l.setAttribute("morphNormal"+w,x[H]),a[w]=b,_+=b):(v&&l.hasAttribute("morphTarget"+w)===!0&&l.deleteAttribute("morphTarget"+w),x&&l.hasAttribute("morphNormal"+w)===!0&&l.deleteAttribute("morphNormal"+w),a[w]=0)}const y=l.morphTargetsRelative?1:1-_;h.getUniforms().setValue(d,"morphTargetBaseInfluence",y),h.getUniforms().setValue(d,"morphTargetInfluences",a)}}return{update:c}}function Bu(d,t,e,n){let a=new WeakMap;function i(c){const u=n.render.frame,l=c.geometry,o=t.get(c,l);return a.get(o)!==u&&(t.update(o),a.set(o,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),o}function r(){a=new WeakMap}function s(c){const u=c.target;u.removeEventListener("dispose",s),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:i,dispose:r}}const ho=new Be,uo=new to,fo=new wl,po=new ls,pa=[],ma=[],ga=new Float32Array(16),va=new Float32Array(9),xa=new Float32Array(4);function vi(d,t,e){const n=d[0];if(n<=0||n>0)return d;const a=t*e;let i=pa[a];if(i===void 0&&(i=new Float32Array(a),pa[a]=i),t!==0){n.toArray(i,0);for(let r=1,s=0;r!==t;++r)s+=e,d[r].toArray(i,s)}return i}function ye(d,t){if(d.length!==t.length)return!1;for(let e=0,n=d.length;e<n;e++)if(d[e]!==t[e])return!1;return!0}function we(d,t){for(let e=0,n=t.length;e<n;e++)d[e]=t[e]}function ur(d,t){let e=ma[t];e===void 0&&(e=new Int32Array(t),ma[t]=e);for(let n=0;n!==t;++n)e[n]=d.allocateTextureUnit();return e}function zu(d,t){const e=this.cache;e[0]!==t&&(d.uniform1f(this.addr,t),e[0]=t)}function Nu(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(d.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;d.uniform2fv(this.addr,t),we(e,t)}}function Ou(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(d.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(d.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;d.uniform3fv(this.addr,t),we(e,t)}}function Uu(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(d.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;d.uniform4fv(this.addr,t),we(e,t)}}function Vu(d,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;d.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(ye(e,n))return;xa.set(n),d.uniformMatrix2fv(this.addr,!1,xa),we(e,n)}}function Wu(d,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;d.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(ye(e,n))return;va.set(n),d.uniformMatrix3fv(this.addr,!1,va),we(e,n)}}function ku(d,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;d.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(ye(e,n))return;ga.set(n),d.uniformMatrix4fv(this.addr,!1,ga),we(e,n)}}function Gu(d,t){const e=this.cache;e[0]!==t&&(d.uniform1i(this.addr,t),e[0]=t)}function Hu(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(d.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;d.uniform2iv(this.addr,t),we(e,t)}}function qu(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(d.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;d.uniform3iv(this.addr,t),we(e,t)}}function Xu(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(d.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;d.uniform4iv(this.addr,t),we(e,t)}}function Yu(d,t){const e=this.cache;e[0]!==t&&(d.uniform1ui(this.addr,t),e[0]=t)}function $u(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(d.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;d.uniform2uiv(this.addr,t),we(e,t)}}function ju(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(d.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;d.uniform3uiv(this.addr,t),we(e,t)}}function Zu(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(d.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;d.uniform4uiv(this.addr,t),we(e,t)}}function Ku(d,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(d.uniform1i(this.addr,a),n[0]=a),e.setTexture2D(t||ho,a)}function Ju(d,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(d.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||fo,a)}function Qu(d,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(d.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||po,a)}function td(d,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(d.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||uo,a)}function ed(d){switch(d){case 5126:return zu;case 35664:return Nu;case 35665:return Ou;case 35666:return Uu;case 35674:return Vu;case 35675:return Wu;case 35676:return ku;case 5124:case 35670:return Gu;case 35667:case 35671:return Hu;case 35668:case 35672:return qu;case 35669:case 35673:return Xu;case 5125:return Yu;case 36294:return $u;case 36295:return ju;case 36296:return Zu;case 35678:case 36198:case 36298:case 36306:case 35682:return Ku;case 35679:case 36299:case 36307:return Ju;case 35680:case 36300:case 36308:case 36293:return Qu;case 36289:case 36303:case 36311:case 36292:return td}}function nd(d,t){d.uniform1fv(this.addr,t)}function id(d,t){const e=vi(t,this.size,2);d.uniform2fv(this.addr,e)}function rd(d,t){const e=vi(t,this.size,3);d.uniform3fv(this.addr,e)}function sd(d,t){const e=vi(t,this.size,4);d.uniform4fv(this.addr,e)}function ad(d,t){const e=vi(t,this.size,4);d.uniformMatrix2fv(this.addr,!1,e)}function od(d,t){const e=vi(t,this.size,9);d.uniformMatrix3fv(this.addr,!1,e)}function ld(d,t){const e=vi(t,this.size,16);d.uniformMatrix4fv(this.addr,!1,e)}function cd(d,t){d.uniform1iv(this.addr,t)}function hd(d,t){d.uniform2iv(this.addr,t)}function ud(d,t){d.uniform3iv(this.addr,t)}function dd(d,t){d.uniform4iv(this.addr,t)}function fd(d,t){d.uniform1uiv(this.addr,t)}function pd(d,t){d.uniform2uiv(this.addr,t)}function md(d,t){d.uniform3uiv(this.addr,t)}function gd(d,t){d.uniform4uiv(this.addr,t)}function vd(d,t,e){const n=this.cache,a=t.length,i=ur(e,a);ye(n,i)||(d.uniform1iv(this.addr,i),we(n,i));for(let r=0;r!==a;++r)e.setTexture2D(t[r]||ho,i[r])}function xd(d,t,e){const n=this.cache,a=t.length,i=ur(e,a);ye(n,i)||(d.uniform1iv(this.addr,i),we(n,i));for(let r=0;r!==a;++r)e.setTexture3D(t[r]||fo,i[r])}function _d(d,t,e){const n=this.cache,a=t.length,i=ur(e,a);ye(n,i)||(d.uniform1iv(this.addr,i),we(n,i));for(let r=0;r!==a;++r)e.setTextureCube(t[r]||po,i[r])}function yd(d,t,e){const n=this.cache,a=t.length,i=ur(e,a);ye(n,i)||(d.uniform1iv(this.addr,i),we(n,i));for(let r=0;r!==a;++r)e.setTexture2DArray(t[r]||uo,i[r])}function wd(d){switch(d){case 5126:return nd;case 35664:return id;case 35665:return rd;case 35666:return sd;case 35674:return ad;case 35675:return od;case 35676:return ld;case 5124:case 35670:return cd;case 35667:case 35671:return hd;case 35668:case 35672:return ud;case 35669:case 35673:return dd;case 5125:return fd;case 36294:return pd;case 36295:return md;case 36296:return gd;case 35678:case 36198:case 36298:case 36306:case 35682:return vd;case 35679:case 36299:case 36307:return xd;case 35680:case 36300:case 36308:case 36293:return _d;case 36289:case 36303:case 36311:case 36292:return yd}}class bd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=ed(e.type)}}class Md{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=wd(e.type)}}class Sd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let i=0,r=a.length;i!==r;++i){const s=a[i];s.setValue(t,e[s.id],n)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function _a(d,t){d.seq.push(t),d.map[t.id]=t}function Ed(d,t,e){const n=d.name,a=n.length;for(Gr.lastIndex=0;;){const i=Gr.exec(n),r=Gr.lastIndex;let s=i[1];const c=i[2]==="]",u=i[3];if(c&&(s=s|0),u===void 0||u==="["&&r+2===a){_a(e,u===void 0?new bd(s,d,t):new Md(s,d,t));break}else{let o=e.map[s];o===void 0&&(o=new Sd(s),_a(e,o)),e=o}}}class ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let a=0;a<n;++a){const i=t.getActiveUniform(e,a),r=t.getUniformLocation(e,i.name);Ed(i,r,this)}}setValue(t,e,n,a){const i=this.map[e];i!==void 0&&i.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let i=0,r=e.length;i!==r;++i){const s=e[i],c=n[s.id];c.needsUpdate!==!1&&s.setValue(t,c.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,i=t.length;a!==i;++a){const r=t[a];r.id in e&&n.push(r)}return n}}function ya(d,t,e){const n=d.createShader(t);return d.shaderSource(n,e),d.compileShader(n),n}let Ad=0;function Td(d,t){const e=d.split(`
`),n=[],a=Math.max(t-6,0),i=Math.min(t+6,e.length);for(let r=a;r<i;r++){const s=r+1;n.push(`${s===t?">":" "} ${s}: ${e[r]}`)}return n.join(`
`)}function Cd(d){switch(d){case On:return["Linear","( value )"];case he:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",d),["Linear","( value )"]}}function wa(d,t,e){const n=d.getShaderParameter(t,35713),a=d.getShaderInfoLog(t).trim();if(n&&a==="")return"";const i=/ERROR: 0:(\d+)/.exec(a);if(i){const r=parseInt(i[1]);return e.toUpperCase()+`

`+a+`

`+Td(d.getShaderSource(t),r)}else return a}function Ld(d,t){const e=Cd(t);return"vec4 "+d+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Pd(d,t){let e;switch(t){case $o:e="Linear";break;case jo:e="Reinhard";break;case Zo:e="OptimizedCineon";break;case Ko:e="ACESFilmic";break;case Jo:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+d+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Rd(d){return[d.extensionDerivatives||d.envMapCubeUVHeight||d.bumpMap||d.tangentSpaceNormalMap||d.clearcoatNormalMap||d.flatShading||d.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(d.extensionFragDepth||d.logarithmicDepthBuffer)&&d.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",d.extensionDrawBuffers&&d.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(d.extensionShaderTextureLOD||d.envMap||d.transmission)&&d.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function Dd(d){const t=[];for(const e in d){const n=d[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Id(d,t){const e={},n=d.getProgramParameter(t,35721);for(let a=0;a<n;a++){const i=d.getActiveAttrib(t,a),r=i.name;let s=1;i.type===35674&&(s=2),i.type===35675&&(s=3),i.type===35676&&(s=4),e[r]={type:i.type,location:d.getAttribLocation(t,r),locationSize:s}}return e}function Ti(d){return d!==""}function ba(d,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return d.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ma(d,t){return d.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fd=/^[ \t]*#include +<([\w\d./]+)>/gm;function is(d){return d.replace(Fd,Bd)}function Bd(d,t){const e=Qt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return is(e)}const zd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sa(d){return d.replace(zd,Nd)}function Nd(d,t,e,n){let a="";for(let i=parseInt(t);i<parseInt(e);i++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return a}function Ea(d){let t="precision "+d.precision+` float;
precision `+d.precision+" int;";return d.precision==="highp"?t+=`
#define HIGH_PRECISION`:d.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:d.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Od(d){let t="SHADOWMAP_TYPE_BASIC";return d.shadowMapType===ka?t="SHADOWMAP_TYPE_PCF":d.shadowMapType===Ga?t="SHADOWMAP_TYPE_PCF_SOFT":d.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function Ud(d){let t="ENVMAP_TYPE_CUBE";if(d.envMap)switch(d.envMapMode){case hi:case ui:t="ENVMAP_TYPE_CUBE";break;case lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vd(d){let t="ENVMAP_MODE_REFLECTION";if(d.envMap)switch(d.envMapMode){case ui:t="ENVMAP_MODE_REFRACTION";break}return t}function Wd(d){let t="ENVMAP_BLENDING_NONE";if(d.envMap)switch(d.combine){case Xa:t="ENVMAP_BLENDING_MULTIPLY";break;case Xo:t="ENVMAP_BLENDING_MIX";break;case Yo:t="ENVMAP_BLENDING_ADD";break}return t}function kd(d){const t=d.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gd(d,t,e,n){const a=d.getContext(),i=e.defines;let r=e.vertexShader,s=e.fragmentShader;const c=Od(e),u=Ud(e),l=Vd(e),o=Wd(e),h=kd(e),p=e.isWebGL2?"":Rd(e),g=Dd(i),m=a.createProgram();let f,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(Ti).join(`
`),f.length>0&&(f+=`
`),v=[p,g].filter(Ti).join(`
`),v.length>0&&(v+=`
`)):(f=[Ea(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),v=[p,Ea(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",e.envMap?"#define "+o:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==mn?Pd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.encodings_pars_fragment,Ld("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ti).join(`
`)),r=is(r),r=ba(r,e),r=Ma(r,e),s=is(s),s=ba(s,e),s=Ma(s,e),r=Sa(r),s=Sa(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",e.glslVersion===$s?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$s?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=x+f+r,y=x+v+s,w=ya(a,35633,_),R=ya(a,35632,y);if(a.attachShader(m,w),a.attachShader(m,R),e.index0AttributeName!==void 0?a.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m),d.debug.checkShaderErrors){const T=a.getProgramInfoLog(m).trim(),L=a.getShaderInfoLog(w).trim(),D=a.getShaderInfoLog(R).trim();let q=!0,F=!0;if(a.getProgramParameter(m,35714)===!1){q=!1;const V=wa(a,w,"vertex"),Y=wa(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,35715)+`

Program Info Log: `+T+`
`+V+`
`+Y)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(L===""||D==="")&&(F=!1);F&&(this.diagnostics={runnable:q,programLog:T,vertexShader:{log:L,prefix:f},fragmentShader:{log:D,prefix:v}})}a.deleteShader(w),a.deleteShader(R);let H;this.getUniforms=function(){return H===void 0&&(H=new ar(a,m)),H};let b;return this.getAttributes=function(){return b===void 0&&(b=Id(a,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=Ad++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=R,this}let Hd=0;class qd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),i=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xd(t),e.set(t,n)),n}}class Xd{constructor(t){this.id=Hd++,this.code=t,this.usedTimes=0}}function Yd(d,t,e,n,a,i,r){const s=new no,c=new qd,u=[],l=a.isWebGL2,o=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,T,L,D,q){const F=D.fog,V=q.geometry,Y=b.isMeshStandardMaterial?D.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||Y),G=it&&it.mapping===lr?it.image.height:null,z=g[b.type];b.precision!==null&&(p=a.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const J=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$=J!==void 0?J.length:0;let A=0;V.morphAttributes.position!==void 0&&(A=1),V.morphAttributes.normal!==void 0&&(A=2),V.morphAttributes.color!==void 0&&(A=3);let O,P,C,E;if(z){const ht=nn[z];O=ht.vertexShader,P=ht.fragmentShader}else O=b.vertexShader,P=b.fragmentShader,c.update(b),C=c.getVertexShaderID(b),E=c.getFragmentShaderID(b);const N=d.getRenderTarget(),rt=b.alphaTest>0,Q=b.clearcoat>0,X=b.iridescence>0;return{isWebGL2:l,shaderID:z,shaderName:b.type,vertexShader:O,fragmentShader:P,defines:b.defines,customVertexShaderID:C,customFragmentShaderID:E,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:N===null?d.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:On,map:!!b.map,matcap:!!b.matcap,envMap:!!it,envMapMode:it&&it.mapping,envMapCubeUVHeight:G,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===vl,tangentSpaceNormalMap:b.normalMapType===ja,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===he,clearcoat:Q,clearcoatMap:Q&&!!b.clearcoatMap,clearcoatRoughnessMap:Q&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:Q&&!!b.clearcoatNormalMap,iridescence:X,iridescenceMap:X&&!!b.iridescenceMap,iridescenceThicknessMap:X&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===li,alphaMap:!!b.alphaMap,alphaTest:rt,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!V.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!F,useFog:b.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:o,skinning:q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:A,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:d.shadowMap.enabled&&L.length>0,shadowMapType:d.shadowMap.type,toneMapping:b.toneMapped?d.toneMapping:mn,physicallyCorrectLights:d.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===os,flipSided:b.side===Ye,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)T.push(L),T.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(v(T,b),x(T,b),T.push(d.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function v(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function x(b,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.map&&s.enable(4),T.matcap&&s.enable(5),T.envMap&&s.enable(6),T.lightMap&&s.enable(7),T.aoMap&&s.enable(8),T.emissiveMap&&s.enable(9),T.bumpMap&&s.enable(10),T.normalMap&&s.enable(11),T.objectSpaceNormalMap&&s.enable(12),T.tangentSpaceNormalMap&&s.enable(13),T.clearcoat&&s.enable(14),T.clearcoatMap&&s.enable(15),T.clearcoatRoughnessMap&&s.enable(16),T.clearcoatNormalMap&&s.enable(17),T.iridescence&&s.enable(18),T.iridescenceMap&&s.enable(19),T.iridescenceThicknessMap&&s.enable(20),T.displacementMap&&s.enable(21),T.specularMap&&s.enable(22),T.roughnessMap&&s.enable(23),T.metalnessMap&&s.enable(24),T.gradientMap&&s.enable(25),T.alphaMap&&s.enable(26),T.alphaTest&&s.enable(27),T.vertexColors&&s.enable(28),T.vertexAlphas&&s.enable(29),T.vertexUvs&&s.enable(30),T.vertexTangents&&s.enable(31),T.uvsVertexOnly&&s.enable(32),b.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.physicallyCorrectLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.specularIntensityMap&&s.enable(15),T.specularColorMap&&s.enable(16),T.transmission&&s.enable(17),T.transmissionMap&&s.enable(18),T.thicknessMap&&s.enable(19),T.sheen&&s.enable(20),T.sheenColorMap&&s.enable(21),T.sheenRoughnessMap&&s.enable(22),T.decodeVideoTexture&&s.enable(23),T.opaque&&s.enable(24),b.push(s.mask)}function _(b){const T=g[b.type];let L;if(T){const D=nn[T];L=Il.clone(D.uniforms)}else L=b.uniforms;return L}function y(b,T){let L;for(let D=0,q=u.length;D<q;D++){const F=u[D];if(F.cacheKey===T){L=F,++L.usedTimes;break}}return L===void 0&&(L=new Gd(d,T,b,i),u.push(L)),L}function w(b){if(--b.usedTimes===0){const T=u.indexOf(b);u[T]=u[u.length-1],u.pop(),b.destroy()}}function R(b){c.remove(b)}function H(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:y,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:H}}function $d(){let d=new WeakMap;function t(i){let r=d.get(i);return r===void 0&&(r={},d.set(i,r)),r}function e(i){d.delete(i)}function n(i,r,s){d.get(i)[r]=s}function a(){d=new WeakMap}return{get:t,remove:e,update:n,dispose:a}}function jd(d,t){return d.groupOrder!==t.groupOrder?d.groupOrder-t.groupOrder:d.renderOrder!==t.renderOrder?d.renderOrder-t.renderOrder:d.material.id!==t.material.id?d.material.id-t.material.id:d.z!==t.z?d.z-t.z:d.id-t.id}function Aa(d,t){return d.groupOrder!==t.groupOrder?d.groupOrder-t.groupOrder:d.renderOrder!==t.renderOrder?d.renderOrder-t.renderOrder:d.z!==t.z?t.z-d.z:d.id-t.id}function Ta(){const d=[];let t=0;const e=[],n=[],a=[];function i(){t=0,e.length=0,n.length=0,a.length=0}function r(o,h,p,g,m,f){let v=d[t];return v===void 0?(v={id:o.id,object:o,geometry:h,material:p,groupOrder:g,renderOrder:o.renderOrder,z:m,group:f},d[t]=v):(v.id=o.id,v.object=o,v.geometry=h,v.material=p,v.groupOrder=g,v.renderOrder=o.renderOrder,v.z=m,v.group=f),t++,v}function s(o,h,p,g,m,f){const v=r(o,h,p,g,m,f);p.transmission>0?n.push(v):p.transparent===!0?a.push(v):e.push(v)}function c(o,h,p,g,m,f){const v=r(o,h,p,g,m,f);p.transmission>0?n.unshift(v):p.transparent===!0?a.unshift(v):e.unshift(v)}function u(o,h){e.length>1&&e.sort(o||jd),n.length>1&&n.sort(h||Aa),a.length>1&&a.sort(h||Aa)}function l(){for(let o=t,h=d.length;o<h;o++){const p=d[o];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:a,init:i,push:s,unshift:c,finish:l,sort:u}}function Zd(){let d=new WeakMap;function t(n,a){const i=d.get(n);let r;return i===void 0?(r=new Ta,d.set(n,[r])):a>=i.length?(r=new Ta,i.push(r)):r=i[a],r}function e(){d=new WeakMap}return{get:t,dispose:e}}function Kd(){const d={};return{get:function(t){if(d[t.id]!==void 0)return d[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new et,color:new oe};break;case"SpotLight":e={position:new et,direction:new et,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new et,halfWidth:new et,halfHeight:new et};break}return d[t.id]=e,e}}}function Jd(){const d={};return{get:function(t){if(d[t.id]!==void 0)return d[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return d[t.id]=e,e}}}let Qd=0;function tf(d,t){return(t.castShadow?2:0)-(d.castShadow?2:0)+(t.map?1:0)-(d.map?1:0)}function ef(d,t){const e=new Kd,n=Jd(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)a.probe.push(new et);const i=new et,r=new ve,s=new ve;function c(l,o){let h=0,p=0,g=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let m=0,f=0,v=0,x=0,_=0,y=0,w=0,R=0,H=0,b=0;l.sort(tf);const T=o!==!0?Math.PI:1;for(let D=0,q=l.length;D<q;D++){const F=l[D],V=F.color,Y=F.intensity,it=F.distance,G=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=V.r*Y*T,p+=V.g*Y*T,g+=V.b*Y*T;else if(F.isLightProbe)for(let z=0;z<9;z++)a.probe[z].addScaledVector(F.sh.coefficients[z],Y);else if(F.isDirectionalLight){const z=e.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity*T),F.castShadow){const J=F.shadow,$=n.get(F);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,a.directionalShadow[m]=$,a.directionalShadowMap[m]=G,a.directionalShadowMatrix[m]=F.shadow.matrix,y++}a.directional[m]=z,m++}else if(F.isSpotLight){const z=e.get(F);z.position.setFromMatrixPosition(F.matrixWorld),z.color.copy(V).multiplyScalar(Y*T),z.distance=it,z.coneCos=Math.cos(F.angle),z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),z.decay=F.decay,a.spot[v]=z;const J=F.shadow;if(F.map&&(a.spotLightMap[H]=F.map,H++,J.updateMatrices(F),F.castShadow&&b++),a.spotLightMatrix[v]=J.matrix,F.castShadow){const $=n.get(F);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,a.spotShadow[v]=$,a.spotShadowMap[v]=G,R++}v++}else if(F.isRectAreaLight){const z=e.get(F);z.color.copy(V).multiplyScalar(Y),z.halfWidth.set(F.width*.5,0,0),z.halfHeight.set(0,F.height*.5,0),a.rectArea[x]=z,x++}else if(F.isPointLight){const z=e.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity*T),z.distance=F.distance,z.decay=F.decay,F.castShadow){const J=F.shadow,$=n.get(F);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,$.shadowCameraNear=J.camera.near,$.shadowCameraFar=J.camera.far,a.pointShadow[f]=$,a.pointShadowMap[f]=G,a.pointShadowMatrix[f]=F.shadow.matrix,w++}a.point[f]=z,f++}else if(F.isHemisphereLight){const z=e.get(F);z.skyColor.copy(F.color).multiplyScalar(Y*T),z.groundColor.copy(F.groundColor).multiplyScalar(Y*T),a.hemi[_]=z,_++}}x>0&&(t.isWebGL2||d.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=It.LTC_FLOAT_1,a.rectAreaLTC2=It.LTC_FLOAT_2):d.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=It.LTC_HALF_1,a.rectAreaLTC2=It.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=h,a.ambient[1]=p,a.ambient[2]=g;const L=a.hash;(L.directionalLength!==m||L.pointLength!==f||L.spotLength!==v||L.rectAreaLength!==x||L.hemiLength!==_||L.numDirectionalShadows!==y||L.numPointShadows!==w||L.numSpotShadows!==R||L.numSpotMaps!==H)&&(a.directional.length=m,a.spot.length=v,a.rectArea.length=x,a.point.length=f,a.hemi.length=_,a.directionalShadow.length=y,a.directionalShadowMap.length=y,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=y,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=R+H-b,a.spotLightMap.length=H,a.numSpotLightShadowsWithMaps=b,L.directionalLength=m,L.pointLength=f,L.spotLength=v,L.rectAreaLength=x,L.hemiLength=_,L.numDirectionalShadows=y,L.numPointShadows=w,L.numSpotShadows=R,L.numSpotMaps=H,a.version=Qd++)}function u(l,o){let h=0,p=0,g=0,m=0,f=0;const v=o.matrixWorldInverse;for(let x=0,_=l.length;x<_;x++){const y=l[x];if(y.isDirectionalLight){const w=a.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(v),h++}else if(y.isSpotLight){const w=a.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(v),g++}else if(y.isRectAreaLight){const w=a.rectArea[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(v),s.identity(),r.copy(y.matrixWorld),r.premultiply(v),s.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),m++}else if(y.isPointLight){const w=a.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(v),p++}else if(y.isHemisphereLight){const w=a.hemi[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(v),f++}}}return{setup:c,setupView:u,state:a}}function Ca(d,t){const e=new ef(d,t),n=[],a=[];function i(){n.length=0,a.length=0}function r(o){n.push(o)}function s(o){a.push(o)}function c(o){e.setup(n,o)}function u(o){e.setupView(n,o)}return{init:i,state:{lightsArray:n,shadowsArray:a,lights:e},setupLights:c,setupLightsView:u,pushLight:r,pushShadow:s}}function nf(d,t){let e=new WeakMap;function n(i,r=0){const s=e.get(i);let c;return s===void 0?(c=new Ca(d,t),e.set(i,[c])):r>=s.length?(c=new Ca(d,t),s.push(c)):c=s[r],c}function a(){e=new WeakMap}return{get:n,dispose:a}}class rf extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sf extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new et,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const af=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,of=`uniform sampler2D shadow_pass;
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
}`;function lf(d,t,e){let n=new cs;const a=new te,i=new te,r=new Se,s=new rf({depthPacking:gl}),c=new sf,u={},l=e.maxTextureSize,o={0:Ye,1:zn,2:os},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:af,fragmentShader:of}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Qe(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka,this.render=function(y,w,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const H=d.getRenderTarget(),b=d.getActiveCubeFace(),T=d.getActiveMipmapLevel(),L=d.state;L.setBlending(Mn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let D=0,q=y.length;D<q;D++){const F=y[D],V=F.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const Y=V.getFrameExtents();if(a.multiply(Y),i.copy(V.mapSize),(a.x>l||a.y>l)&&(a.x>l&&(i.x=Math.floor(l/Y.x),a.x=i.x*Y.x,V.mapSize.x=i.x),a.y>l&&(i.y=Math.floor(l/Y.y),a.y=i.y*Y.y,V.mapSize.y=i.y)),V.map===null){const G=this.type!==Ai?{minFilter:Re,magFilter:Re}:{};V.map=new Un(a.x,a.y,G),V.map.texture.name=F.name+".shadowMap",V.camera.updateProjectionMatrix()}d.setRenderTarget(V.map),d.clear();const it=V.getViewportCount();for(let G=0;G<it;G++){const z=V.getViewport(G);r.set(i.x*z.x,i.y*z.y,i.x*z.z,i.y*z.w),L.viewport(r),V.updateMatrices(F,G),n=V.getFrustum(),_(w,R,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===Ai&&v(V,R),V.needsUpdate=!1}f.needsUpdate=!1,d.setRenderTarget(H,b,T)};function v(y,w){const R=t.update(m);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Un(a.x,a.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,d.setRenderTarget(y.mapPass),d.clear(),d.renderBufferDirect(w,null,R,h,m,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,d.setRenderTarget(y.map),d.clear(),d.renderBufferDirect(w,null,R,p,m,null)}function x(y,w,R,H,b,T){let L=null;const D=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)L=D;else if(L=R.isPointLight===!0?c:s,d.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const q=L.uuid,F=w.uuid;let V=u[q];V===void 0&&(V={},u[q]=V);let Y=V[F];Y===void 0&&(Y=L.clone(),V[F]=Y),L=Y}return L.visible=w.visible,L.wireframe=w.wireframe,T===Ai?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:o[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,R.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(R.matrixWorld),L.nearDistance=H,L.farDistance=b),L}function _(y,w,R,H,b){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===Ai)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const D=t.update(y),q=y.material;if(Array.isArray(q)){const F=D.groups;for(let V=0,Y=F.length;V<Y;V++){const it=F[V],G=q[it.materialIndex];if(G&&G.visible){const z=x(y,G,H,R.near,R.far,b);d.renderBufferDirect(R,null,D,z,y,it)}}}else if(q.visible){const F=x(y,q,H,R.near,R.far,b);d.renderBufferDirect(R,null,D,F,y,null)}}const L=y.children;for(let D=0,q=L.length;D<q;D++)_(L[D],w,R,H,b)}}function cf(d,t,e){const n=e.isWebGL2;function a(){let j=!1;const at=new Se;let bt=null;const Ct=new Se(0,0,0,0);return{setMask:function(Ut){bt!==Ut&&!j&&(d.colorMask(Ut,Ut,Ut,Ut),bt=Ut)},setLocked:function(Ut){j=Ut},setClear:function(Ut,ee,le,de,De){De===!0&&(Ut*=de,ee*=de,le*=de),at.set(Ut,ee,le,de),Ct.equals(at)===!1&&(d.clearColor(Ut,ee,le,de),Ct.copy(at))},reset:function(){j=!1,bt=null,Ct.set(-1,0,0,0)}}}function i(){let j=!1,at=null,bt=null,Ct=null;return{setTest:function(Ut){Ut?rt(2929):Q(2929)},setMask:function(Ut){at!==Ut&&!j&&(d.depthMask(Ut),at=Ut)},setFunc:function(Ut){if(bt!==Ut){switch(Ut){case Uo:d.depthFunc(512);break;case Vo:d.depthFunc(519);break;case Wo:d.depthFunc(513);break;case Zr:d.depthFunc(515);break;case ko:d.depthFunc(514);break;case Go:d.depthFunc(518);break;case Ho:d.depthFunc(516);break;case qo:d.depthFunc(517);break;default:d.depthFunc(515)}bt=Ut}},setLocked:function(Ut){j=Ut},setClear:function(Ut){Ct!==Ut&&(d.clearDepth(Ut),Ct=Ut)},reset:function(){j=!1,at=null,bt=null,Ct=null}}}function r(){let j=!1,at=null,bt=null,Ct=null,Ut=null,ee=null,le=null,de=null,De=null;return{setTest:function(Kt){j||(Kt?rt(2960):Q(2960))},setMask:function(Kt){at!==Kt&&!j&&(d.stencilMask(Kt),at=Kt)},setFunc:function(Kt,st,ot){(bt!==Kt||Ct!==st||Ut!==ot)&&(d.stencilFunc(Kt,st,ot),bt=Kt,Ct=st,Ut=ot)},setOp:function(Kt,st,ot){(ee!==Kt||le!==st||de!==ot)&&(d.stencilOp(Kt,st,ot),ee=Kt,le=st,de=ot)},setLocked:function(Kt){j=Kt},setClear:function(Kt){De!==Kt&&(d.clearStencil(Kt),De=Kt)},reset:function(){j=!1,at=null,bt=null,Ct=null,Ut=null,ee=null,le=null,de=null,De=null}}}const s=new a,c=new i,u=new r,l=new WeakMap,o=new WeakMap;let h={},p={},g=new WeakMap,m=[],f=null,v=!1,x=null,_=null,y=null,w=null,R=null,H=null,b=null,T=!1,L=null,D=null,q=null,F=null,V=null;const Y=d.getParameter(35661);let it=!1,G=0;const z=d.getParameter(7938);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),it=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),it=G>=2);let J=null,$={};const A=d.getParameter(3088),O=d.getParameter(2978),P=new Se().fromArray(A),C=new Se().fromArray(O);function E(j,at,bt){const Ct=new Uint8Array(4),Ut=d.createTexture();d.bindTexture(j,Ut),d.texParameteri(j,10241,9728),d.texParameteri(j,10240,9728);for(let ee=0;ee<bt;ee++)d.texImage2D(at+ee,0,6408,1,1,0,6408,5121,Ct);return Ut}const N={};N[3553]=E(3553,3553,1),N[34067]=E(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),u.setClear(0),rt(2929),c.setFunc(Zr),vt(!1),Ht(_s),rt(2884),St(Mn);function rt(j){h[j]!==!0&&(d.enable(j),h[j]=!0)}function Q(j){h[j]!==!1&&(d.disable(j),h[j]=!1)}function X(j,at){return p[j]!==at?(d.bindFramebuffer(j,at),p[j]=at,n&&(j===36009&&(p[36160]=at),j===36160&&(p[36009]=at)),!0):!1}function K(j,at){let bt=m,Ct=!1;if(j)if(bt=g.get(at),bt===void 0&&(bt=[],g.set(at,bt)),j.isWebGLMultipleRenderTargets){const Ut=j.texture;if(bt.length!==Ut.length||bt[0]!==36064){for(let ee=0,le=Ut.length;ee<le;ee++)bt[ee]=36064+ee;bt.length=Ut.length,Ct=!0}}else bt[0]!==36064&&(bt[0]=36064,Ct=!0);else bt[0]!==1029&&(bt[0]=1029,Ct=!0);Ct&&(e.isWebGL2?d.drawBuffers(bt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(bt))}function ht(j){return f!==j?(d.useProgram(j),f=j,!0):!1}const Mt={[ai]:32774,[Co]:32778,[Lo]:32779};if(n)Mt[Ms]=32775,Mt[Ss]=32776;else{const j=t.get("EXT_blend_minmax");j!==null&&(Mt[Ms]=j.MIN_EXT,Mt[Ss]=j.MAX_EXT)}const mt={[Po]:0,[Ro]:1,[Do]:768,[Ha]:770,[Oo]:776,[zo]:774,[Fo]:772,[Io]:769,[qa]:771,[No]:775,[Bo]:773};function St(j,at,bt,Ct,Ut,ee,le,de){if(j===Mn){v===!0&&(Q(3042),v=!1);return}if(v===!1&&(rt(3042),v=!0),j!==To){if(j!==x||de!==T){if((_!==ai||R!==ai)&&(d.blendEquation(32774),_=ai,R=ai),de)switch(j){case li:d.blendFuncSeparate(1,771,1,771);break;case ys:d.blendFunc(1,1);break;case ws:d.blendFuncSeparate(0,769,0,1);break;case bs:d.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case li:d.blendFuncSeparate(770,771,1,771);break;case ys:d.blendFunc(770,1);break;case ws:d.blendFuncSeparate(0,769,0,1);break;case bs:d.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}y=null,w=null,H=null,b=null,x=j,T=de}return}Ut=Ut||at,ee=ee||bt,le=le||Ct,(at!==_||Ut!==R)&&(d.blendEquationSeparate(Mt[at],Mt[Ut]),_=at,R=Ut),(bt!==y||Ct!==w||ee!==H||le!==b)&&(d.blendFuncSeparate(mt[bt],mt[Ct],mt[ee],mt[le]),y=bt,w=Ct,H=ee,b=le),x=j,T=!1}function ct(j,at){j.side===os?Q(2884):rt(2884);let bt=j.side===Ye;at&&(bt=!bt),vt(bt),j.blending===li&&j.transparent===!1?St(Mn):St(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),s.setMask(j.colorWrite);const Ct=j.stencilWrite;u.setTest(Ct),Ct&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Wt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?rt(32926):Q(32926)}function vt(j){L!==j&&(j?d.frontFace(2304):d.frontFace(2305),L=j)}function Ht(j){j!==Eo?(rt(2884),j!==D&&(j===_s?d.cullFace(1029):j===Ao?d.cullFace(1028):d.cullFace(1032))):Q(2884),D=j}function Bt(j){j!==q&&(it&&d.lineWidth(j),q=j)}function Wt(j,at,bt){j?(rt(32823),(F!==at||V!==bt)&&(d.polygonOffset(at,bt),F=at,V=bt)):Q(32823)}function Lt(j){j?rt(3089):Q(3089)}function Xt(j){j===void 0&&(j=33984+Y-1),J!==j&&(d.activeTexture(j),J=j)}function I(j,at,bt){bt===void 0&&(J===null?bt=33984+Y-1:bt=J);let Ct=$[bt];Ct===void 0&&(Ct={type:void 0,texture:void 0},$[bt]=Ct),(Ct.type!==j||Ct.texture!==at)&&(J!==bt&&(d.activeTexture(bt),J=bt),d.bindTexture(j,at||N[j]),Ct.type=j,Ct.texture=at)}function S(){const j=$[J];j!==void 0&&j.type!==void 0&&(d.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function nt(){try{d.compressedTexImage2D.apply(d,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ft(){try{d.compressedTexImage3D.apply(d,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xt(){try{d.texSubImage2D.apply(d,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _t(){try{d.texSubImage3D.apply(d,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Nt(){try{d.compressedTexSubImage2D.apply(d,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function W(){try{d.compressedTexSubImage3D.apply(d,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function tt(){try{d.texStorage2D.apply(d,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Rt(){try{d.texStorage3D.apply(d,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ft(){try{d.texImage2D.apply(d,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Tt(){try{d.texImage3D.apply(d,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function zt(j){P.equals(j)===!1&&(d.scissor(j.x,j.y,j.z,j.w),P.copy(j))}function Ot(j){C.equals(j)===!1&&(d.viewport(j.x,j.y,j.z,j.w),C.copy(j))}function Zt(j,at){let bt=o.get(at);bt===void 0&&(bt=new WeakMap,o.set(at,bt));let Ct=bt.get(j);Ct===void 0&&(Ct=d.getUniformBlockIndex(at,j.name),bt.set(j,Ct))}function $t(j,at){const Ct=o.get(at).get(j);l.get(at)!==Ct&&(d.uniformBlockBinding(at,Ct,j.__bindingPointIndex),l.set(at,Ct))}function Jt(){d.disable(3042),d.disable(2884),d.disable(2929),d.disable(32823),d.disable(3089),d.disable(2960),d.disable(32926),d.blendEquation(32774),d.blendFunc(1,0),d.blendFuncSeparate(1,0,1,0),d.colorMask(!0,!0,!0,!0),d.clearColor(0,0,0,0),d.depthMask(!0),d.depthFunc(513),d.clearDepth(1),d.stencilMask(4294967295),d.stencilFunc(519,0,4294967295),d.stencilOp(7680,7680,7680),d.clearStencil(0),d.cullFace(1029),d.frontFace(2305),d.polygonOffset(0,0),d.activeTexture(33984),d.bindFramebuffer(36160,null),n===!0&&(d.bindFramebuffer(36009,null),d.bindFramebuffer(36008,null)),d.useProgram(null),d.lineWidth(1),d.scissor(0,0,d.canvas.width,d.canvas.height),d.viewport(0,0,d.canvas.width,d.canvas.height),h={},J=null,$={},p={},g=new WeakMap,m=[],f=null,v=!1,x=null,_=null,y=null,w=null,R=null,H=null,b=null,T=!1,L=null,D=null,q=null,F=null,V=null,P.set(0,0,d.canvas.width,d.canvas.height),C.set(0,0,d.canvas.width,d.canvas.height),s.reset(),c.reset(),u.reset()}return{buffers:{color:s,depth:c,stencil:u},enable:rt,disable:Q,bindFramebuffer:X,drawBuffers:K,useProgram:ht,setBlending:St,setMaterial:ct,setFlipSided:vt,setCullFace:Ht,setLineWidth:Bt,setPolygonOffset:Wt,setScissorTest:Lt,activeTexture:Xt,bindTexture:I,unbindTexture:S,compressedTexImage2D:nt,compressedTexImage3D:ft,texImage2D:Ft,texImage3D:Tt,updateUBOMapping:Zt,uniformBlockBinding:$t,texStorage2D:tt,texStorage3D:Rt,texSubImage2D:xt,texSubImage3D:_t,compressedTexSubImage2D:Nt,compressedTexSubImage3D:W,scissor:zt,viewport:Ot,reset:Jt}}function hf(d,t,e,n,a,i,r){const s=a.isWebGL2,c=a.maxTextures,u=a.maxCubemapSize,l=a.maxTextureSize,o=a.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,S){return v?new OffscreenCanvas(I,S):Ri("canvas")}function _(I,S,nt,ft){let xt=1;if((I.width>ft||I.height>ft)&&(xt=ft/Math.max(I.width,I.height)),xt<1||S===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const _t=S?ns:Math.floor,Nt=_t(xt*I.width),W=_t(xt*I.height);m===void 0&&(m=x(Nt,W));const tt=nt?x(Nt,W):m;return tt.width=Nt,tt.height=W,tt.getContext("2d").drawImage(I,0,0,Nt,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Nt+"x"+W+")."),tt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function y(I){return Zs(I.width)&&Zs(I.height)}function w(I){return s?!1:I.wrapS!==Ke||I.wrapT!==Ke||I.minFilter!==Re&&I.minFilter!==qe}function R(I,S){return I.generateMipmaps&&S&&I.minFilter!==Re&&I.minFilter!==qe}function H(I){d.generateMipmap(I)}function b(I,S,nt,ft,xt=!1){if(s===!1)return S;if(I!==null){if(d[I]!==void 0)return d[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _t=S;return S===6403&&(nt===5126&&(_t=33326),nt===5131&&(_t=33325),nt===5121&&(_t=33321)),S===33319&&(nt===5126&&(_t=33328),nt===5131&&(_t=33327),nt===5121&&(_t=33323)),S===6408&&(nt===5126&&(_t=34836),nt===5131&&(_t=34842),nt===5121&&(_t=ft===he&&xt===!1?35907:32856),nt===32819&&(_t=32854),nt===32820&&(_t=32855)),(_t===33325||_t===33326||_t===33327||_t===33328||_t===34842||_t===34836)&&t.get("EXT_color_buffer_float"),_t}function T(I,S,nt){return R(I,nt)===!0||I.isFramebufferTexture&&I.minFilter!==Re&&I.minFilter!==qe?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function L(I){return I===Re||I===Es||I===fr?9728:9729}function D(I){const S=I.target;S.removeEventListener("dispose",D),F(S),S.isVideoTexture&&g.delete(S)}function q(I){const S=I.target;S.removeEventListener("dispose",q),Y(S)}function F(I){const S=n.get(I);if(S.__webglInit===void 0)return;const nt=I.source,ft=f.get(nt);if(ft){const xt=ft[S.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&V(I),Object.keys(ft).length===0&&f.delete(nt)}n.remove(I)}function V(I){const S=n.get(I);d.deleteTexture(S.__webglTexture);const nt=I.source,ft=f.get(nt);delete ft[S.__cacheKey],r.memory.textures--}function Y(I){const S=I.texture,nt=n.get(I),ft=n.get(S);if(ft.__webglTexture!==void 0&&(d.deleteTexture(ft.__webglTexture),r.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++)d.deleteFramebuffer(nt.__webglFramebuffer[xt]),nt.__webglDepthbuffer&&d.deleteRenderbuffer(nt.__webglDepthbuffer[xt]);else{if(d.deleteFramebuffer(nt.__webglFramebuffer),nt.__webglDepthbuffer&&d.deleteRenderbuffer(nt.__webglDepthbuffer),nt.__webglMultisampledFramebuffer&&d.deleteFramebuffer(nt.__webglMultisampledFramebuffer),nt.__webglColorRenderbuffer)for(let xt=0;xt<nt.__webglColorRenderbuffer.length;xt++)nt.__webglColorRenderbuffer[xt]&&d.deleteRenderbuffer(nt.__webglColorRenderbuffer[xt]);nt.__webglDepthRenderbuffer&&d.deleteRenderbuffer(nt.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let xt=0,_t=S.length;xt<_t;xt++){const Nt=n.get(S[xt]);Nt.__webglTexture&&(d.deleteTexture(Nt.__webglTexture),r.memory.textures--),n.remove(S[xt])}n.remove(S),n.remove(I)}let it=0;function G(){it=0}function z(){const I=it;return I>=c&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+c),it+=1,I}function J(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.encoding),S.join()}function $(I,S){const nt=n.get(I);if(I.isVideoTexture&&Lt(I),I.isRenderTargetTexture===!1&&I.version>0&&nt.__version!==I.version){const ft=I.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(nt,I,S);return}}e.bindTexture(3553,nt.__webglTexture,33984+S)}function A(I,S){const nt=n.get(I);if(I.version>0&&nt.__version!==I.version){Q(nt,I,S);return}e.bindTexture(35866,nt.__webglTexture,33984+S)}function O(I,S){const nt=n.get(I);if(I.version>0&&nt.__version!==I.version){Q(nt,I,S);return}e.bindTexture(32879,nt.__webglTexture,33984+S)}function P(I,S){const nt=n.get(I);if(I.version>0&&nt.__version!==I.version){X(nt,I,S);return}e.bindTexture(34067,nt.__webglTexture,33984+S)}const C={[Qr]:10497,[Ke]:33071,[ts]:33648},E={[Re]:9728,[Es]:9984,[fr]:9986,[qe]:9729,[Qo]:9985,[Ci]:9987};function N(I,S,nt){if(nt?(d.texParameteri(I,10242,C[S.wrapS]),d.texParameteri(I,10243,C[S.wrapT]),(I===32879||I===35866)&&d.texParameteri(I,32882,C[S.wrapR]),d.texParameteri(I,10240,E[S.magFilter]),d.texParameteri(I,10241,E[S.minFilter])):(d.texParameteri(I,10242,33071),d.texParameteri(I,10243,33071),(I===32879||I===35866)&&d.texParameteri(I,32882,33071),(S.wrapS!==Ke||S.wrapT!==Ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),d.texParameteri(I,10240,L(S.magFilter)),d.texParameteri(I,10241,L(S.minFilter)),S.minFilter!==Re&&S.minFilter!==qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const ft=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Re||S.minFilter!==fr&&S.minFilter!==Ci||S.type===In&&t.has("OES_texture_float_linear")===!1||s===!1&&S.type===Li&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(d.texParameterf(I,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function rt(I,S){let nt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",D));const ft=S.source;let xt=f.get(ft);xt===void 0&&(xt={},f.set(ft,xt));const _t=J(S);if(_t!==I.__cacheKey){xt[_t]===void 0&&(xt[_t]={texture:d.createTexture(),usedTimes:0},r.memory.textures++,nt=!0),xt[_t].usedTimes++;const Nt=xt[I.__cacheKey];Nt!==void 0&&(xt[I.__cacheKey].usedTimes--,Nt.usedTimes===0&&V(S)),I.__cacheKey=_t,I.__webglTexture=xt[_t].texture}return nt}function Q(I,S,nt){let ft=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ft=35866),S.isData3DTexture&&(ft=32879);const xt=rt(I,S),_t=S.source;e.bindTexture(ft,I.__webglTexture,33984+nt);const Nt=n.get(_t);if(_t.version!==Nt.__version||xt===!0){e.activeTexture(33984+nt),d.pixelStorei(37440,S.flipY),d.pixelStorei(37441,S.premultiplyAlpha),d.pixelStorei(3317,S.unpackAlignment),d.pixelStorei(37443,0);const W=w(S)&&y(S.image)===!1;let tt=_(S.image,W,!1,l);tt=Xt(S,tt);const Rt=y(tt)||s,Ft=i.convert(S.format,S.encoding);let Tt=i.convert(S.type),zt=b(S.internalFormat,Ft,Tt,S.encoding,S.isVideoTexture);N(ft,S,Rt);let Ot;const Zt=S.mipmaps,$t=s&&S.isVideoTexture!==!0,Jt=Nt.__version===void 0||xt===!0,j=T(S,tt,Rt);if(S.isDepthTexture)zt=6402,s?S.type===In?zt=36012:S.type===Dn?zt=33190:S.type===ci?zt=35056:zt=33189:S.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Fn&&zt===6402&&S.type!==$a&&S.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Dn,Tt=i.convert(S.type)),S.format===di&&zt===6402&&(zt=34041,S.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ci,Tt=i.convert(S.type))),Jt&&($t?e.texStorage2D(3553,1,zt,tt.width,tt.height):e.texImage2D(3553,0,zt,tt.width,tt.height,0,Ft,Tt,null));else if(S.isDataTexture)if(Zt.length>0&&Rt){$t&&Jt&&e.texStorage2D(3553,j,zt,Zt[0].width,Zt[0].height);for(let at=0,bt=Zt.length;at<bt;at++)Ot=Zt[at],$t?e.texSubImage2D(3553,at,0,0,Ot.width,Ot.height,Ft,Tt,Ot.data):e.texImage2D(3553,at,zt,Ot.width,Ot.height,0,Ft,Tt,Ot.data);S.generateMipmaps=!1}else $t?(Jt&&e.texStorage2D(3553,j,zt,tt.width,tt.height),e.texSubImage2D(3553,0,0,0,tt.width,tt.height,Ft,Tt,tt.data)):e.texImage2D(3553,0,zt,tt.width,tt.height,0,Ft,Tt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$t&&Jt&&e.texStorage3D(35866,j,zt,Zt[0].width,Zt[0].height,tt.depth);for(let at=0,bt=Zt.length;at<bt;at++)Ot=Zt[at],S.format!==Je?Ft!==null?$t?e.compressedTexSubImage3D(35866,at,0,0,0,Ot.width,Ot.height,tt.depth,Ft,Ot.data,0,0):e.compressedTexImage3D(35866,at,zt,Ot.width,Ot.height,tt.depth,0,Ot.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(35866,at,0,0,0,Ot.width,Ot.height,tt.depth,Ft,Tt,Ot.data):e.texImage3D(35866,at,zt,Ot.width,Ot.height,tt.depth,0,Ft,Tt,Ot.data)}else{$t&&Jt&&e.texStorage2D(3553,j,zt,Zt[0].width,Zt[0].height);for(let at=0,bt=Zt.length;at<bt;at++)Ot=Zt[at],S.format!==Je?Ft!==null?$t?e.compressedTexSubImage2D(3553,at,0,0,Ot.width,Ot.height,Ft,Ot.data):e.compressedTexImage2D(3553,at,zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(3553,at,0,0,Ot.width,Ot.height,Ft,Tt,Ot.data):e.texImage2D(3553,at,zt,Ot.width,Ot.height,0,Ft,Tt,Ot.data)}else if(S.isDataArrayTexture)$t?(Jt&&e.texStorage3D(35866,j,zt,tt.width,tt.height,tt.depth),e.texSubImage3D(35866,0,0,0,0,tt.width,tt.height,tt.depth,Ft,Tt,tt.data)):e.texImage3D(35866,0,zt,tt.width,tt.height,tt.depth,0,Ft,Tt,tt.data);else if(S.isData3DTexture)$t?(Jt&&e.texStorage3D(32879,j,zt,tt.width,tt.height,tt.depth),e.texSubImage3D(32879,0,0,0,0,tt.width,tt.height,tt.depth,Ft,Tt,tt.data)):e.texImage3D(32879,0,zt,tt.width,tt.height,tt.depth,0,Ft,Tt,tt.data);else if(S.isFramebufferTexture){if(Jt)if($t)e.texStorage2D(3553,j,zt,tt.width,tt.height);else{let at=tt.width,bt=tt.height;for(let Ct=0;Ct<j;Ct++)e.texImage2D(3553,Ct,zt,at,bt,0,Ft,Tt,null),at>>=1,bt>>=1}}else if(Zt.length>0&&Rt){$t&&Jt&&e.texStorage2D(3553,j,zt,Zt[0].width,Zt[0].height);for(let at=0,bt=Zt.length;at<bt;at++)Ot=Zt[at],$t?e.texSubImage2D(3553,at,0,0,Ft,Tt,Ot):e.texImage2D(3553,at,zt,Ft,Tt,Ot);S.generateMipmaps=!1}else $t?(Jt&&e.texStorage2D(3553,j,zt,tt.width,tt.height),e.texSubImage2D(3553,0,0,0,Ft,Tt,tt)):e.texImage2D(3553,0,zt,Ft,Tt,tt);R(S,Rt)&&H(ft),Nt.__version=_t.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function X(I,S,nt){if(S.image.length!==6)return;const ft=rt(I,S),xt=S.source;e.bindTexture(34067,I.__webglTexture,33984+nt);const _t=n.get(xt);if(xt.version!==_t.__version||ft===!0){e.activeTexture(33984+nt),d.pixelStorei(37440,S.flipY),d.pixelStorei(37441,S.premultiplyAlpha),d.pixelStorei(3317,S.unpackAlignment),d.pixelStorei(37443,0);const Nt=S.isCompressedTexture||S.image[0].isCompressedTexture,W=S.image[0]&&S.image[0].isDataTexture,tt=[];for(let at=0;at<6;at++)!Nt&&!W?tt[at]=_(S.image[at],!1,!0,u):tt[at]=W?S.image[at].image:S.image[at],tt[at]=Xt(S,tt[at]);const Rt=tt[0],Ft=y(Rt)||s,Tt=i.convert(S.format,S.encoding),zt=i.convert(S.type),Ot=b(S.internalFormat,Tt,zt,S.encoding),Zt=s&&S.isVideoTexture!==!0,$t=_t.__version===void 0||ft===!0;let Jt=T(S,Rt,Ft);N(34067,S,Ft);let j;if(Nt){Zt&&$t&&e.texStorage2D(34067,Jt,Ot,Rt.width,Rt.height);for(let at=0;at<6;at++){j=tt[at].mipmaps;for(let bt=0;bt<j.length;bt++){const Ct=j[bt];S.format!==Je?Tt!==null?Zt?e.compressedTexSubImage2D(34069+at,bt,0,0,Ct.width,Ct.height,Tt,Ct.data):e.compressedTexImage2D(34069+at,bt,Ot,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?e.texSubImage2D(34069+at,bt,0,0,Ct.width,Ct.height,Tt,zt,Ct.data):e.texImage2D(34069+at,bt,Ot,Ct.width,Ct.height,0,Tt,zt,Ct.data)}}}else{j=S.mipmaps,Zt&&$t&&(j.length>0&&Jt++,e.texStorage2D(34067,Jt,Ot,tt[0].width,tt[0].height));for(let at=0;at<6;at++)if(W){Zt?e.texSubImage2D(34069+at,0,0,0,tt[at].width,tt[at].height,Tt,zt,tt[at].data):e.texImage2D(34069+at,0,Ot,tt[at].width,tt[at].height,0,Tt,zt,tt[at].data);for(let bt=0;bt<j.length;bt++){const Ut=j[bt].image[at].image;Zt?e.texSubImage2D(34069+at,bt+1,0,0,Ut.width,Ut.height,Tt,zt,Ut.data):e.texImage2D(34069+at,bt+1,Ot,Ut.width,Ut.height,0,Tt,zt,Ut.data)}}else{Zt?e.texSubImage2D(34069+at,0,0,0,Tt,zt,tt[at]):e.texImage2D(34069+at,0,Ot,Tt,zt,tt[at]);for(let bt=0;bt<j.length;bt++){const Ct=j[bt];Zt?e.texSubImage2D(34069+at,bt+1,0,0,Tt,zt,Ct.image[at]):e.texImage2D(34069+at,bt+1,Ot,Tt,zt,Ct.image[at])}}}R(S,Ft)&&H(34067),_t.__version=xt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function K(I,S,nt,ft,xt){const _t=i.convert(nt.format,nt.encoding),Nt=i.convert(nt.type),W=b(nt.internalFormat,_t,Nt,nt.encoding);n.get(S).__hasExternalTextures||(xt===32879||xt===35866?e.texImage3D(xt,0,W,S.width,S.height,S.depth,0,_t,Nt,null):e.texImage2D(xt,0,W,S.width,S.height,0,_t,Nt,null)),e.bindFramebuffer(36160,I),Wt(S)?h.framebufferTexture2DMultisampleEXT(36160,ft,xt,n.get(nt).__webglTexture,0,Bt(S)):(xt===3553||xt>=34069&&xt<=34074)&&d.framebufferTexture2D(36160,ft,xt,n.get(nt).__webglTexture,0),e.bindFramebuffer(36160,null)}function ht(I,S,nt){if(d.bindRenderbuffer(36161,I),S.depthBuffer&&!S.stencilBuffer){let ft=33189;if(nt||Wt(S)){const xt=S.depthTexture;xt&&xt.isDepthTexture&&(xt.type===In?ft=36012:xt.type===Dn&&(ft=33190));const _t=Bt(S);Wt(S)?h.renderbufferStorageMultisampleEXT(36161,_t,ft,S.width,S.height):d.renderbufferStorageMultisample(36161,_t,ft,S.width,S.height)}else d.renderbufferStorage(36161,ft,S.width,S.height);d.framebufferRenderbuffer(36160,36096,36161,I)}else if(S.depthBuffer&&S.stencilBuffer){const ft=Bt(S);nt&&Wt(S)===!1?d.renderbufferStorageMultisample(36161,ft,35056,S.width,S.height):Wt(S)?h.renderbufferStorageMultisampleEXT(36161,ft,35056,S.width,S.height):d.renderbufferStorage(36161,34041,S.width,S.height),d.framebufferRenderbuffer(36160,33306,36161,I)}else{const ft=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let xt=0;xt<ft.length;xt++){const _t=ft[xt],Nt=i.convert(_t.format,_t.encoding),W=i.convert(_t.type),tt=b(_t.internalFormat,Nt,W,_t.encoding),Rt=Bt(S);nt&&Wt(S)===!1?d.renderbufferStorageMultisample(36161,Rt,tt,S.width,S.height):Wt(S)?h.renderbufferStorageMultisampleEXT(36161,Rt,tt,S.width,S.height):d.renderbufferStorage(36161,tt,S.width,S.height)}}d.bindRenderbuffer(36161,null)}function Mt(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const ft=n.get(S.depthTexture).__webglTexture,xt=Bt(S);if(S.depthTexture.format===Fn)Wt(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ft,0,xt):d.framebufferTexture2D(36160,36096,3553,ft,0);else if(S.depthTexture.format===di)Wt(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ft,0,xt):d.framebufferTexture2D(36160,33306,3553,ft,0);else throw new Error("Unknown depthTexture format")}function mt(I){const S=n.get(I),nt=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Mt(S.__webglFramebuffer,I)}else if(nt){S.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)e.bindFramebuffer(36160,S.__webglFramebuffer[ft]),S.__webglDepthbuffer[ft]=d.createRenderbuffer(),ht(S.__webglDepthbuffer[ft],I,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=d.createRenderbuffer(),ht(S.__webglDepthbuffer,I,!1);e.bindFramebuffer(36160,null)}function St(I,S,nt){const ft=n.get(I);S!==void 0&&K(ft.__webglFramebuffer,I,I.texture,36064,3553),nt!==void 0&&mt(I)}function ct(I){const S=I.texture,nt=n.get(I),ft=n.get(S);I.addEventListener("dispose",q),I.isWebGLMultipleRenderTargets!==!0&&(ft.__webglTexture===void 0&&(ft.__webglTexture=d.createTexture()),ft.__version=S.version,r.memory.textures++);const xt=I.isWebGLCubeRenderTarget===!0,_t=I.isWebGLMultipleRenderTargets===!0,Nt=y(I)||s;if(xt){nt.__webglFramebuffer=[];for(let W=0;W<6;W++)nt.__webglFramebuffer[W]=d.createFramebuffer()}else{if(nt.__webglFramebuffer=d.createFramebuffer(),_t)if(a.drawBuffers){const W=I.texture;for(let tt=0,Rt=W.length;tt<Rt;tt++){const Ft=n.get(W[tt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=d.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&I.samples>0&&Wt(I)===!1){const W=_t?S:[S];nt.__webglMultisampledFramebuffer=d.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,nt.__webglMultisampledFramebuffer);for(let tt=0;tt<W.length;tt++){const Rt=W[tt];nt.__webglColorRenderbuffer[tt]=d.createRenderbuffer(),d.bindRenderbuffer(36161,nt.__webglColorRenderbuffer[tt]);const Ft=i.convert(Rt.format,Rt.encoding),Tt=i.convert(Rt.type),zt=b(Rt.internalFormat,Ft,Tt,Rt.encoding,I.isXRRenderTarget===!0),Ot=Bt(I);d.renderbufferStorageMultisample(36161,Ot,zt,I.width,I.height),d.framebufferRenderbuffer(36160,36064+tt,36161,nt.__webglColorRenderbuffer[tt])}d.bindRenderbuffer(36161,null),I.depthBuffer&&(nt.__webglDepthRenderbuffer=d.createRenderbuffer(),ht(nt.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(36160,null)}}if(xt){e.bindTexture(34067,ft.__webglTexture),N(34067,S,Nt);for(let W=0;W<6;W++)K(nt.__webglFramebuffer[W],I,S,36064,34069+W);R(S,Nt)&&H(34067),e.unbindTexture()}else if(_t){const W=I.texture;for(let tt=0,Rt=W.length;tt<Rt;tt++){const Ft=W[tt],Tt=n.get(Ft);e.bindTexture(3553,Tt.__webglTexture),N(3553,Ft,Nt),K(nt.__webglFramebuffer,I,Ft,36064+tt,3553),R(Ft,Nt)&&H(3553)}e.unbindTexture()}else{let W=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(s?W=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(W,ft.__webglTexture),N(W,S,Nt),K(nt.__webglFramebuffer,I,S,36064,W),R(S,Nt)&&H(W),e.unbindTexture()}I.depthBuffer&&mt(I)}function vt(I){const S=y(I)||s,nt=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ft=0,xt=nt.length;ft<xt;ft++){const _t=nt[ft];if(R(_t,S)){const Nt=I.isWebGLCubeRenderTarget?34067:3553,W=n.get(_t).__webglTexture;e.bindTexture(Nt,W),H(Nt),e.unbindTexture()}}}function Ht(I){if(s&&I.samples>0&&Wt(I)===!1){const S=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],nt=I.width,ft=I.height;let xt=16384;const _t=[],Nt=I.stencilBuffer?33306:36096,W=n.get(I),tt=I.isWebGLMultipleRenderTargets===!0;if(tt)for(let Rt=0;Rt<S.length;Rt++)e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),d.framebufferRenderbuffer(36160,36064+Rt,36161,null),e.bindFramebuffer(36160,W.__webglFramebuffer),d.framebufferTexture2D(36009,36064+Rt,3553,null,0);e.bindFramebuffer(36008,W.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,W.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){_t.push(36064+Rt),I.depthBuffer&&_t.push(Nt);const Ft=W.__ignoreDepthValues!==void 0?W.__ignoreDepthValues:!1;if(Ft===!1&&(I.depthBuffer&&(xt|=256),I.stencilBuffer&&(xt|=1024)),tt&&d.framebufferRenderbuffer(36008,36064,36161,W.__webglColorRenderbuffer[Rt]),Ft===!0&&(d.invalidateFramebuffer(36008,[Nt]),d.invalidateFramebuffer(36009,[Nt])),tt){const Tt=n.get(S[Rt]).__webglTexture;d.framebufferTexture2D(36009,36064,3553,Tt,0)}d.blitFramebuffer(0,0,nt,ft,0,0,nt,ft,xt,9728),p&&d.invalidateFramebuffer(36008,_t)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),tt)for(let Rt=0;Rt<S.length;Rt++){e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),d.framebufferRenderbuffer(36160,36064+Rt,36161,W.__webglColorRenderbuffer[Rt]);const Ft=n.get(S[Rt]).__webglTexture;e.bindFramebuffer(36160,W.__webglFramebuffer),d.framebufferTexture2D(36009,36064+Rt,3553,Ft,0)}e.bindFramebuffer(36009,W.__webglMultisampledFramebuffer)}}function Bt(I){return Math.min(o,I.samples)}function Wt(I){const S=n.get(I);return s&&I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Lt(I){const S=r.render.frame;g.get(I)!==S&&(g.set(I,S),I.update())}function Xt(I,S){const nt=I.encoding,ft=I.format,xt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===es||nt!==On&&(nt===he?s===!1?t.has("EXT_sRGB")===!0&&ft===Je?(I.format=es,I.minFilter=qe,I.generateMipmaps=!1):S=Ja.sRGBToLinear(S):(ft!==Je||xt!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",nt)),S}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=A,this.setTexture3D=O,this.setTextureCube=P,this.rebindTextures=St,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Wt}function uf(d,t,e){const n=e.isWebGL2;function a(i,r=null){let s;if(i===Nn)return 5121;if(i===il)return 32819;if(i===rl)return 32820;if(i===tl)return 5120;if(i===el)return 5122;if(i===$a)return 5123;if(i===nl)return 5124;if(i===Dn)return 5125;if(i===In)return 5126;if(i===Li)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===sl)return 6406;if(i===Je)return 6408;if(i===ol)return 6409;if(i===ll)return 6410;if(i===Fn)return 6402;if(i===di)return 34041;if(i===al)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(i===es)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(i===cl)return 6403;if(i===hl)return 36244;if(i===ul)return 33319;if(i===dl)return 33320;if(i===fl)return 36249;if(i===pr||i===mr||i===gr||i===vr)if(r===he)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===As||i===Ts||i===Cs||i===Ls)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===As)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ts)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ls)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Ps||i===Rs)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ps)return r===he?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rs)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ds||i===Is||i===Fs||i===Bs||i===zs||i===Ns||i===Os||i===Us||i===Vs||i===Ws||i===ks||i===Gs||i===Hs||i===qs)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ds)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Is)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fs)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bs)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zs)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ns)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Os)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Us)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vs)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ws)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ks)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gs)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hs)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qs)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xs)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Xs)return r===he?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return i===ci?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):d[i]!==void 0?d[i]:null}return{convert:a}}class df extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class nr extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ff={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,i=null,r=null;const s=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){r=!0;for(const m of t.hand.values()){const f=e.getJointPose(m,n),v=this._getHandJoint(u,m);f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const l=u.joints["index-finger-tip"],o=u.joints["thumb-tip"],h=l.position.distanceTo(o.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(i=e.getPose(t.gripSpace,n),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&i!==null&&(a=i),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ff)))}return s!==null&&(s.visible=a!==null),c!==null&&(c.visible=i!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new nr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class pf extends Be{constructor(t,e,n,a,i,r,s,c,u,l){if(l=l!==void 0?l:Fn,l!==Fn&&l!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Fn&&(n=Dn),n===void 0&&l===di&&(n=ci),super(null,a,i,r,s,c,l,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:Re,this.minFilter=c!==void 0?c:Re,this.flipY=!1,this.generateMipmaps=!1}}class mf extends Gn{constructor(t,e){super();const n=this;let a=null,i=1,r=null,s="local-floor",c=null,u=null,l=null,o=null,h=null,p=null;const g=e.getContextAttributes();let m=null,f=null;const v=[],x=[],_=new Set,y=new Map,w=new Xe;w.layers.enable(1),w.viewport=new Se;const R=new Xe;R.layers.enable(2),R.viewport=new Se;const H=[w,R],b=new df;b.layers.enable(1),b.layers.enable(2);let T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let O=v[A];return O===void 0&&(O=new Hr,v[A]=O),O.getTargetRaySpace()},this.getControllerGrip=function(A){let O=v[A];return O===void 0&&(O=new Hr,v[A]=O),O.getGripSpace()},this.getHand=function(A){let O=v[A];return O===void 0&&(O=new Hr,v[A]=O),O.getHandSpace()};function D(A){const O=x.indexOf(A.inputSource);if(O===-1)return;const P=v[O];P!==void 0&&P.dispatchEvent({type:A.type,data:A.inputSource})}function q(){a.removeEventListener("select",D),a.removeEventListener("selectstart",D),a.removeEventListener("selectend",D),a.removeEventListener("squeeze",D),a.removeEventListener("squeezestart",D),a.removeEventListener("squeezeend",D),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",F);for(let A=0;A<v.length;A++){const O=x[A];O!==null&&(x[A]=null,v[A].disconnect(O))}T=null,L=null,t.setRenderTarget(m),h=null,o=null,l=null,a=null,f=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){i=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){s=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(A){c=A},this.getBaseLayer=function(){return o!==null?o:h},this.getBinding=function(){return l},this.getFrame=function(){return p},this.getSession=function(){return a},this.setSession=async function(A){if(a=A,a!==null){if(m=t.getRenderTarget(),a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",q),a.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await e.makeXRCompatible(),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const O={antialias:a.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:i};h=new XRWebGLLayer(a,e,O),a.updateRenderState({baseLayer:h}),f=new Un(h.framebufferWidth,h.framebufferHeight,{format:Je,type:Nn,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let O=null,P=null,C=null;g.depth&&(C=g.stencil?35056:33190,O=g.stencil?di:Fn,P=g.stencil?ci:Dn);const E={colorFormat:32856,depthFormat:C,scaleFactor:i};l=new XRWebGLBinding(a,e),o=l.createProjectionLayer(E),a.updateRenderState({layers:[o]}),f=new Un(o.textureWidth,o.textureHeight,{format:Je,type:Nn,depthTexture:new pf(o.textureWidth,o.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const N=t.properties.get(f);N.__ignoreDepthValues=o.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),c=null,r=await a.requestReferenceSpace(s),$.setContext(a),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(A){for(let O=0;O<A.removed.length;O++){const P=A.removed[O],C=x.indexOf(P);C>=0&&(x[C]=null,v[C].disconnect(P))}for(let O=0;O<A.added.length;O++){const P=A.added[O];let C=x.indexOf(P);if(C===-1){for(let N=0;N<v.length;N++)if(N>=x.length){x.push(P),C=N;break}else if(x[N]===null){x[N]=P,C=N;break}if(C===-1)break}const E=v[C];E&&E.connect(P)}}const V=new et,Y=new et;function it(A,O,P){V.setFromMatrixPosition(O.matrixWorld),Y.setFromMatrixPosition(P.matrixWorld);const C=V.distanceTo(Y),E=O.projectionMatrix.elements,N=P.projectionMatrix.elements,rt=E[14]/(E[10]-1),Q=E[14]/(E[10]+1),X=(E[9]+1)/E[5],K=(E[9]-1)/E[5],ht=(E[8]-1)/E[0],Mt=(N[8]+1)/N[0],mt=rt*ht,St=rt*Mt,ct=C/(-ht+Mt),vt=ct*-ht;O.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(vt),A.translateZ(ct),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const Ht=rt+ct,Bt=Q+ct,Wt=mt-vt,Lt=St+(C-vt),Xt=X*Q/Bt*Ht,I=K*Q/Bt*Ht;A.projectionMatrix.makePerspective(Wt,Lt,Xt,I,Ht,Bt)}function G(A,O){O===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(O.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(a===null)return;b.near=R.near=w.near=A.near,b.far=R.far=w.far=A.far,(T!==b.near||L!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,L=b.far);const O=A.parent,P=b.cameras;G(b,O);for(let E=0;E<P.length;E++)G(P[E],O);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),A.matrix.copy(b.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale);const C=A.children;for(let E=0,N=C.length;E<N;E++)C[E].updateMatrixWorld(!0);P.length===2?it(b,w,R):b.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(o!==null)return o.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(A){o!==null&&(o.fixedFoveation=A),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=A)},this.getPlanes=function(){return _};let z=null;function J(A,O){if(u=O.getViewerPose(c||r),p=O,u!==null){const P=u.views;h!==null&&(t.setRenderTargetFramebuffer(f,h.framebuffer),t.setRenderTarget(f));let C=!1;P.length!==b.cameras.length&&(b.cameras.length=0,C=!0);for(let E=0;E<P.length;E++){const N=P[E];let rt=null;if(h!==null)rt=h.getViewport(N);else{const X=l.getViewSubImage(o,N);rt=X.viewport,E===0&&(t.setRenderTargetTextures(f,X.colorTexture,o.ignoreDepthValues?void 0:X.depthStencilTexture),t.setRenderTarget(f))}let Q=H[E];Q===void 0&&(Q=new Xe,Q.layers.enable(E),Q.viewport=new Se,H[E]=Q),Q.matrix.fromArray(N.transform.matrix),Q.projectionMatrix.fromArray(N.projectionMatrix),Q.viewport.set(rt.x,rt.y,rt.width,rt.height),E===0&&b.matrix.copy(Q.matrix),C===!0&&b.cameras.push(Q)}}for(let P=0;P<v.length;P++){const C=x[P],E=v[P];C!==null&&E!==void 0&&E.update(C,O,c||r)}if(z&&z(A,O),O.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:O.detectedPlanes});let P=null;for(const C of _)O.detectedPlanes.has(C)||(P===null&&(P=[]),P.push(C));if(P!==null)for(const C of P)_.delete(C),y.delete(C),n.dispatchEvent({type:"planeremoved",data:C});for(const C of O.detectedPlanes)if(!_.has(C))_.add(C),y.set(C,O.lastChangedTime),n.dispatchEvent({type:"planeadded",data:C});else{const E=y.get(C);C.lastChangedTime>E&&(y.set(C,C.lastChangedTime),n.dispatchEvent({type:"planechanged",data:C}))}}p=null}const $=new lo;$.setAnimationLoop(J),this.setAnimationLoop=function(A){z=A},this.dispose=function(){}}}function gf(d,t){function e(m,f){f.color.getRGB(m.fogColor.value,ao(d)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,v,x,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),l(m,f)):f.isMeshPhongMaterial?(a(m,f),u(m,f)):f.isMeshStandardMaterial?(a(m,f),o(m,f),f.isMeshPhysicalMaterial&&h(m,f,_)):f.isMeshMatcapMaterial?(a(m,f),p(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),g(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(i(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?s(m,f,v,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Ye&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Ye&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=d.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let x;f.map?x=f.map:f.specularMap?x=f.specularMap:f.displacementMap?x=f.displacementMap:f.normalMap?x=f.normalMap:f.bumpMap?x=f.bumpMap:f.roughnessMap?x=f.roughnessMap:f.metalnessMap?x=f.metalnessMap:f.alphaMap?x=f.alphaMap:f.emissiveMap?x=f.emissiveMap:f.clearcoatMap?x=f.clearcoatMap:f.clearcoatNormalMap?x=f.clearcoatNormalMap:f.clearcoatRoughnessMap?x=f.clearcoatRoughnessMap:f.iridescenceMap?x=f.iridescenceMap:f.iridescenceThicknessMap?x=f.iridescenceThicknessMap:f.specularIntensityMap?x=f.specularIntensityMap:f.specularColorMap?x=f.specularColorMap:f.transmissionMap?x=f.transmissionMap:f.thicknessMap?x=f.thicknessMap:f.sheenColorMap?x=f.sheenColorMap:f.sheenRoughnessMap&&(x=f.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let _;f.aoMap?_=f.aoMap:f.lightMap&&(_=f.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uv2Transform.value.copy(_.matrix))}function i(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function s(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function l(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function o(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ye&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function vf(d,t,e,n){let a={},i={},r=[];const s=e.isWebGL2?d.getParameter(35375):0;function c(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function u(x,_){let y=a[x.id];y===void 0&&(g(x),y=l(x),a[x.id]=y,x.addEventListener("dispose",f));const w=_.program;n.updateUBOMapping(x,w);const R=t.render.frame;i[x.id]!==R&&(h(x),i[x.id]=R)}function l(x){const _=o();x.__bindingPointIndex=_;const y=d.createBuffer(),w=x.__size,R=x.usage;return d.bindBuffer(35345,y),d.bufferData(35345,w,R),d.bindBuffer(35345,null),d.bindBufferBase(35345,_,y),y}function o(){for(let x=0;x<s;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=a[x.id],y=x.uniforms,w=x.__cache;d.bindBuffer(35345,_);for(let R=0,H=y.length;R<H;R++){const b=y[R];if(p(b,R,w)===!0){const T=b.__offset,L=Array.isArray(b.value)?b.value:[b.value];let D=0;for(let q=0;q<L.length;q++){const F=L[q],V=m(F);typeof F=="number"?(b.__data[0]=F,d.bufferSubData(35345,T+D,b.__data)):F.isMatrix3?(b.__data[0]=F.elements[0],b.__data[1]=F.elements[1],b.__data[2]=F.elements[2],b.__data[3]=F.elements[0],b.__data[4]=F.elements[3],b.__data[5]=F.elements[4],b.__data[6]=F.elements[5],b.__data[7]=F.elements[0],b.__data[8]=F.elements[6],b.__data[9]=F.elements[7],b.__data[10]=F.elements[8],b.__data[11]=F.elements[0]):(F.toArray(b.__data,D),D+=V.storage/Float32Array.BYTES_PER_ELEMENT)}d.bufferSubData(35345,T,b.__data)}}d.bindBuffer(35345,null)}function p(x,_,y){const w=x.value;if(y[_]===void 0){if(typeof w=="number")y[_]=w;else{const R=Array.isArray(w)?w:[w],H=[];for(let b=0;b<R.length;b++)H.push(R[b].clone());y[_]=H}return!0}else if(typeof w=="number"){if(y[_]!==w)return y[_]=w,!0}else{const R=Array.isArray(y[_])?y[_]:[y[_]],H=Array.isArray(w)?w:[w];for(let b=0;b<R.length;b++){const T=R[b];if(T.equals(H[b])===!1)return T.copy(H[b]),!0}}return!1}function g(x){const _=x.uniforms;let y=0;const w=16;let R=0;for(let H=0,b=_.length;H<b;H++){const T=_[H],L={boundary:0,storage:0},D=Array.isArray(T.value)?T.value:[T.value];for(let q=0,F=D.length;q<F;q++){const V=D[q],Y=m(V);L.boundary+=Y.boundary,L.storage+=Y.storage}if(T.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,H>0){R=y%w;const q=w-R;R!==0&&q-L.boundary<0&&(y+=w-R,T.__offset=y)}y+=L.storage}return R=y%w,R>0&&(y+=w-R),x.__size=y,x.__cache={},this}function m(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function f(x){const _=x.target;_.removeEventListener("dispose",f);const y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),d.deleteBuffer(a[_.id]),delete a[_.id],delete i[_.id]}function v(){for(const x in a)d.deleteBuffer(a[x]);r=[],a={},i={}}return{bind:c,update:u,dispose:v}}function xf(){const d=Ri("canvas");return d.style.display="block",d}function mo(d={}){this.isWebGLRenderer=!0;const t=d.canvas!==void 0?d.canvas:xf(),e=d.context!==void 0?d.context:null,n=d.depth!==void 0?d.depth:!0,a=d.stencil!==void 0?d.stencil:!0,i=d.antialias!==void 0?d.antialias:!1,r=d.premultipliedAlpha!==void 0?d.premultipliedAlpha:!0,s=d.preserveDrawingBuffer!==void 0?d.preserveDrawingBuffer:!1,c=d.powerPreference!==void 0?d.powerPreference:"default",u=d.failIfMajorPerformanceCaveat!==void 0?d.failIfMajorPerformanceCaveat:!1;let l;e!==null?l=e.getContextAttributes().alpha:l=d.alpha!==void 0?d.alpha:!1;let o=null,h=null;const p=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=On,this.physicallyCorrectLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;const m=this;let f=!1,v=0,x=0,_=null,y=-1,w=null;const R=new Se,H=new Se;let b=null,T=t.width,L=t.height,D=1,q=null,F=null;const V=new Se(0,0,T,L),Y=new Se(0,0,T,L);let it=!1;const G=new cs;let z=!1,J=!1,$=null;const A=new ve,O=new te,P=new et,C={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function E(){return _===null?D:1}let N=e;function rt(M,k){for(let B=0;B<M.length;B++){const U=M[B],Z=t.getContext(U,k);if(Z!==null)return Z}return null}try{const M={alpha:!0,depth:n,stencil:a,antialias:i,premultipliedAlpha:r,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${as}`),t.addEventListener("webglcontextlost",zt,!1),t.addEventListener("webglcontextrestored",Ot,!1),t.addEventListener("webglcontextcreationerror",Zt,!1),N===null){const k=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&k.shift(),N=rt(k,M),N===null)throw rt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Q,X,K,ht,Mt,mt,St,ct,vt,Ht,Bt,Wt,Lt,Xt,I,S,nt,ft,xt,_t,Nt,W,tt,Rt;function Ft(){Q=new Cu(N),X=new bu(N,Q,d),Q.init(X),W=new uf(N,Q,X),K=new cf(N,Q,X),ht=new Ru,Mt=new $d,mt=new hf(N,Q,K,Mt,X,W,ht),St=new Su(m),ct=new Tu(m),vt=new Vl(N,X),tt=new yu(N,Q,vt,X),Ht=new Lu(N,vt,ht,tt),Bt=new Bu(N,Ht,vt,ht),xt=new Fu(N,X,mt),S=new Mu(Mt),Wt=new Yd(m,St,ct,Q,X,tt,S),Lt=new gf(m,Mt),Xt=new Zd,I=new nf(Q,X),ft=new _u(m,St,ct,K,Bt,l,r),nt=new lf(m,Bt,X),Rt=new vf(N,ht,X,K),_t=new wu(N,Q,ht,X),Nt=new Pu(N,Q,ht,X),ht.programs=Wt.programs,m.capabilities=X,m.extensions=Q,m.properties=Mt,m.renderLists=Xt,m.shadowMap=nt,m.state=K,m.info=ht}Ft();const Tt=new mf(m,N);this.xr=Tt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(M){M!==void 0&&(D=M,this.setSize(T,L,!1))},this.getSize=function(M){return M.set(T,L)},this.setSize=function(M,k,B){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=M,L=k,t.width=Math.floor(M*D),t.height=Math.floor(k*D),B!==!1&&(t.style.width=M+"px",t.style.height=k+"px"),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(T*D,L*D).floor()},this.setDrawingBufferSize=function(M,k,B){T=M,L=k,D=B,t.width=Math.floor(M*B),t.height=Math.floor(k*B),this.setViewport(0,0,M,k)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(V)},this.setViewport=function(M,k,B,U){M.isVector4?V.set(M.x,M.y,M.z,M.w):V.set(M,k,B,U),K.viewport(R.copy(V).multiplyScalar(D).floor())},this.getScissor=function(M){return M.copy(Y)},this.setScissor=function(M,k,B,U){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,k,B,U),K.scissor(H.copy(Y).multiplyScalar(D).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(M){K.setScissorTest(it=M)},this.setOpaqueSort=function(M){q=M},this.setTransparentSort=function(M){F=M},this.getClearColor=function(M){return M.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(M=!0,k=!0,B=!0){let U=0;M&&(U|=16384),k&&(U|=256),B&&(U|=1024),N.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",zt,!1),t.removeEventListener("webglcontextrestored",Ot,!1),t.removeEventListener("webglcontextcreationerror",Zt,!1),Xt.dispose(),I.dispose(),Mt.dispose(),St.dispose(),ct.dispose(),Bt.dispose(),tt.dispose(),Rt.dispose(),Wt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Ct),Tt.removeEventListener("sessionend",Ut),$&&($.dispose(),$=null),ee.stop()};function zt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const M=ht.autoReset,k=nt.enabled,B=nt.autoUpdate,U=nt.needsUpdate,Z=nt.type;Ft(),ht.autoReset=M,nt.enabled=k,nt.autoUpdate=B,nt.needsUpdate=U,nt.type=Z}function Zt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $t(M){const k=M.target;k.removeEventListener("dispose",$t),Jt(k)}function Jt(M){j(M),Mt.remove(M)}function j(M){const k=Mt.get(M).programs;k!==void 0&&(k.forEach(function(B){Wt.releaseProgram(B)}),M.isShaderMaterial&&Wt.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,B,U,Z,pt){k===null&&(k=C);const dt=Z.isMesh&&Z.matrixWorld.determinant()<0,ut=wt(M,k,B,U,Z);K.setMaterial(U,dt);let gt=B.index,Et=1;U.wireframe===!0&&(gt=Ht.getWireframeAttribute(B),Et=2);const Pt=B.drawRange,lt=B.attributes.position;let Vt=Pt.start*Et,Gt=(Pt.start+Pt.count)*Et;pt!==null&&(Vt=Math.max(Vt,pt.start*Et),Gt=Math.min(Gt,(pt.start+pt.count)*Et)),gt!==null?(Vt=Math.max(Vt,0),Gt=Math.min(Gt,gt.count)):lt!=null&&(Vt=Math.max(Vt,0),Gt=Math.min(Gt,lt.count));const ne=Gt-Vt;if(ne<0||ne===1/0)return;tt.setup(Z,U,ut,B,gt);let Yt,kt=_t;if(gt!==null&&(Yt=vt.get(gt),kt=Nt,kt.setIndex(Yt)),Z.isMesh)U.wireframe===!0?(K.setLineWidth(U.wireframeLinewidth*E()),kt.setMode(1)):kt.setMode(4);else if(Z.isLine){let At=U.linewidth;At===void 0&&(At=1),K.setLineWidth(At*E()),Z.isLineSegments?kt.setMode(1):Z.isLineLoop?kt.setMode(2):kt.setMode(3)}else Z.isPoints?kt.setMode(0):Z.isSprite&&kt.setMode(4);if(Z.isInstancedMesh)kt.renderInstances(Vt,ne,Z.count);else if(B.isInstancedBufferGeometry){const At=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ae=Math.min(B.instanceCount,At);kt.renderInstances(Vt,ne,Ae)}else kt.render(Vt,ne)},this.compile=function(M,k){function B(U,Z,pt){U.transparent===!0&&U.side===zi?(U.side=Ye,U.needsUpdate=!0,ot(U,Z,pt),U.side=zn,U.needsUpdate=!0,ot(U,Z,pt),U.side=zi):ot(U,Z,pt)}h=I.get(M),h.init(),g.push(h),M.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights(m.physicallyCorrectLights),M.traverse(function(U){const Z=U.material;if(Z)if(Array.isArray(Z))for(let pt=0;pt<Z.length;pt++){const dt=Z[pt];B(dt,M,U)}else B(Z,M,U)}),g.pop(),h=null};let at=null;function bt(M){at&&at(M)}function Ct(){ee.stop()}function Ut(){ee.start()}const ee=new lo;ee.setAnimationLoop(bt),typeof self<"u"&&ee.setContext(self),this.setAnimationLoop=function(M){at=M,Tt.setAnimationLoop(M),M===null?ee.stop():ee.start()},Tt.addEventListener("sessionstart",Ct),Tt.addEventListener("sessionend",Ut),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(k),k=Tt.getCamera()),M.isScene===!0&&M.onBeforeRender(m,M,k,_),h=I.get(M,g.length),h.init(),g.push(h),A.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G.setFromProjectionMatrix(A),J=this.localClippingEnabled,z=S.init(this.clippingPlanes,J,k),o=Xt.get(M,p.length),o.init(),p.push(o),le(M,k,0,m.sortObjects),o.finish(),m.sortObjects===!0&&o.sort(q,F),z===!0&&S.beginShadows();const B=h.state.shadowsArray;if(nt.render(B,M,k),z===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ft.render(o,M),h.setupLights(m.physicallyCorrectLights),k.isArrayCamera){const U=k.cameras;for(let Z=0,pt=U.length;Z<pt;Z++){const dt=U[Z];de(o,M,dt,dt.viewport)}}else de(o,M,k);_!==null&&(mt.updateMultisampleRenderTarget(_),mt.updateRenderTargetMipmap(_)),M.isScene===!0&&M.onAfterRender(m,M,k),tt.resetDefaultState(),y=-1,w=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?o=p[p.length-1]:o=null};function le(M,k,B,U){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||G.intersectsSprite(M)){U&&P.setFromMatrixPosition(M.matrixWorld).applyMatrix4(A);const dt=Bt.update(M),ut=M.material;ut.visible&&o.push(M,dt,ut,B,P.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==ht.render.frame&&(M.skeleton.update(),M.skeleton.frame=ht.render.frame),!M.frustumCulled||G.intersectsObject(M))){U&&P.setFromMatrixPosition(M.matrixWorld).applyMatrix4(A);const dt=Bt.update(M),ut=M.material;if(Array.isArray(ut)){const gt=dt.groups;for(let Et=0,Pt=gt.length;Et<Pt;Et++){const lt=gt[Et],Vt=ut[lt.materialIndex];Vt&&Vt.visible&&o.push(M,dt,Vt,B,P.z,lt)}}else ut.visible&&o.push(M,dt,ut,B,P.z,null)}}const pt=M.children;for(let dt=0,ut=pt.length;dt<ut;dt++)le(pt[dt],k,B,U)}function de(M,k,B,U){const Z=M.opaque,pt=M.transmissive,dt=M.transparent;h.setupLightsView(B),pt.length>0&&De(Z,k,B),U&&K.viewport(R.copy(U)),Z.length>0&&Kt(Z,k,B),pt.length>0&&Kt(pt,k,B),dt.length>0&&Kt(dt,k,B),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function De(M,k,B){const U=X.isWebGL2;$===null&&($=new Un(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Li:Nn,minFilter:Ci,samples:U&&i===!0?4:0})),m.getDrawingBufferSize(O),U?$.setSize(O.x,O.y):$.setSize(ns(O.x),ns(O.y));const Z=m.getRenderTarget();m.setRenderTarget($),m.clear();const pt=m.toneMapping;m.toneMapping=mn,Kt(M,k,B),m.toneMapping=pt,mt.updateMultisampleRenderTarget($),mt.updateRenderTargetMipmap($),m.setRenderTarget(Z)}function Kt(M,k,B){const U=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,pt=M.length;Z<pt;Z++){const dt=M[Z],ut=dt.object,gt=dt.geometry,Et=U===null?dt.material:U,Pt=dt.group;ut.layers.test(B.layers)&&st(ut,k,B,gt,Et,Pt)}}function st(M,k,B,U,Z,pt){M.onBeforeRender(m,k,B,U,Z,pt),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Z.onBeforeRender(m,k,B,U,M,pt),Z.transparent===!0&&Z.side===zi?(Z.side=Ye,Z.needsUpdate=!0,m.renderBufferDirect(B,k,U,Z,M,pt),Z.side=zn,Z.needsUpdate=!0,m.renderBufferDirect(B,k,U,Z,M,pt),Z.side=zi):m.renderBufferDirect(B,k,U,Z,M,pt),M.onAfterRender(m,k,B,U,Z,pt)}function ot(M,k,B){k.isScene!==!0&&(k=C);const U=Mt.get(M),Z=h.state.lights,pt=h.state.shadowsArray,dt=Z.state.version,ut=Wt.getParameters(M,Z.state,pt,k,B),gt=Wt.getProgramCacheKey(ut);let Et=U.programs;U.environment=M.isMeshStandardMaterial?k.environment:null,U.fog=k.fog,U.envMap=(M.isMeshStandardMaterial?ct:St).get(M.envMap||U.environment),Et===void 0&&(M.addEventListener("dispose",$t),Et=new Map,U.programs=Et);let Pt=Et.get(gt);if(Pt!==void 0){if(U.currentProgram===Pt&&U.lightsStateVersion===dt)return yt(M,ut),Pt}else ut.uniforms=Wt.getUniforms(M),M.onBuild(B,ut,m),M.onBeforeCompile(ut,m),Pt=Wt.acquireProgram(ut,gt),Et.set(gt,Pt),U.uniforms=ut.uniforms;const lt=U.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(lt.clippingPlanes=S.uniform),yt(M,ut),U.needsLights=Dt(M),U.lightsStateVersion=dt,U.needsLights&&(lt.ambientLightColor.value=Z.state.ambient,lt.lightProbe.value=Z.state.probe,lt.directionalLights.value=Z.state.directional,lt.directionalLightShadows.value=Z.state.directionalShadow,lt.spotLights.value=Z.state.spot,lt.spotLightShadows.value=Z.state.spotShadow,lt.rectAreaLights.value=Z.state.rectArea,lt.ltc_1.value=Z.state.rectAreaLTC1,lt.ltc_2.value=Z.state.rectAreaLTC2,lt.pointLights.value=Z.state.point,lt.pointLightShadows.value=Z.state.pointShadow,lt.hemisphereLights.value=Z.state.hemi,lt.directionalShadowMap.value=Z.state.directionalShadowMap,lt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,lt.spotShadowMap.value=Z.state.spotShadowMap,lt.spotLightMatrix.value=Z.state.spotLightMatrix,lt.spotLightMap.value=Z.state.spotLightMap,lt.pointShadowMap.value=Z.state.pointShadowMap,lt.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Vt=Pt.getUniforms(),Gt=ar.seqWithValue(Vt.seq,lt);return U.currentProgram=Pt,U.uniformsList=Gt,Pt}function yt(M,k){const B=Mt.get(M);B.outputEncoding=k.outputEncoding,B.instancing=k.instancing,B.skinning=k.skinning,B.morphTargets=k.morphTargets,B.morphNormals=k.morphNormals,B.morphColors=k.morphColors,B.morphTargetsCount=k.morphTargetsCount,B.numClippingPlanes=k.numClippingPlanes,B.numIntersection=k.numClipIntersection,B.vertexAlphas=k.vertexAlphas,B.vertexTangents=k.vertexTangents,B.toneMapping=k.toneMapping}function wt(M,k,B,U,Z){k.isScene!==!0&&(k=C),mt.resetTextureUnits();const pt=k.fog,dt=U.isMeshStandardMaterial?k.environment:null,ut=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:On,gt=(U.isMeshStandardMaterial?ct:St).get(U.envMap||dt),Et=U.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!U.normalMap&&!!B.attributes.tangent,lt=!!B.morphAttributes.position,Vt=!!B.morphAttributes.normal,Gt=!!B.morphAttributes.color,ne=U.toneMapped?m.toneMapping:mn,Yt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,kt=Yt!==void 0?Yt.length:0,At=Mt.get(U),Ae=h.state.lights;if(z===!0&&(J===!0||M!==w)){const ae=M===w&&U.id===y;S.setState(U,M,ae)}let re=!1;U.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ae.state.version||At.outputEncoding!==ut||Z.isInstancedMesh&&At.instancing===!1||!Z.isInstancedMesh&&At.instancing===!0||Z.isSkinnedMesh&&At.skinning===!1||!Z.isSkinnedMesh&&At.skinning===!0||At.envMap!==gt||U.fog===!0&&At.fog!==pt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==S.numPlanes||At.numIntersection!==S.numIntersection)||At.vertexAlphas!==Et||At.vertexTangents!==Pt||At.morphTargets!==lt||At.morphNormals!==Vt||At.morphColors!==Gt||At.toneMapping!==ne||X.isWebGL2===!0&&At.morphTargetsCount!==kt)&&(re=!0):(re=!0,At.__version=U.version);let fe=At.currentProgram;re===!0&&(fe=ot(U,k,Z));let Ge=!1,pe=!1,se=!1;const ce=fe.getUniforms(),ie=At.uniforms;if(K.useProgram(fe.program)&&(Ge=!0,pe=!0,se=!0),U.id!==y&&(y=U.id,pe=!0),Ge||w!==M){if(ce.setValue(N,"projectionMatrix",M.projectionMatrix),X.logarithmicDepthBuffer&&ce.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),w!==M&&(w=M,pe=!0,se=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const ae=ce.map.cameraPosition;ae!==void 0&&ae.setValue(N,P.setFromMatrixPosition(M.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ce.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Z.isSkinnedMesh)&&ce.setValue(N,"viewMatrix",M.matrixWorldInverse)}if(Z.isSkinnedMesh){ce.setOptional(N,Z,"bindMatrix"),ce.setOptional(N,Z,"bindMatrixInverse");const ae=Z.skeleton;ae&&(X.floatVertexTextures?(ae.boneTexture===null&&ae.computeBoneTexture(),ce.setValue(N,"boneTexture",ae.boneTexture,mt),ce.setValue(N,"boneTextureSize",ae.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ne=B.morphAttributes;if((Ne.position!==void 0||Ne.normal!==void 0||Ne.color!==void 0&&X.isWebGL2===!0)&&xt.update(Z,B,U,fe),(pe||At.receiveShadow!==Z.receiveShadow)&&(At.receiveShadow=Z.receiveShadow,ce.setValue(N,"receiveShadow",Z.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(ie.envMap.value=gt,ie.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),pe&&(ce.setValue(N,"toneMappingExposure",m.toneMappingExposure),At.needsLights&&qt(ie,se),pt&&U.fog===!0&&Lt.refreshFogUniforms(ie,pt),Lt.refreshMaterialUniforms(ie,U,D,L,$),ar.upload(N,At.uniformsList,ie,mt)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ar.upload(N,At.uniformsList,ie,mt),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ce.setValue(N,"center",Z.center),ce.setValue(N,"modelViewMatrix",Z.modelViewMatrix),ce.setValue(N,"normalMatrix",Z.normalMatrix),ce.setValue(N,"modelMatrix",Z.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const ae=U.uniformsGroups;for(let me=0,xe=ae.length;me<xe;me++)if(X.isWebGL2){const Ce=ae[me];Rt.update(Ce,fe),Rt.bind(Ce,fe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fe}function qt(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function Dt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(M,k,B){Mt.get(M.texture).__webglTexture=k,Mt.get(M.depthTexture).__webglTexture=B;const U=Mt.get(M);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=B===void 0,U.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,k){const B=Mt.get(M);B.__webglFramebuffer=k,B.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(M,k=0,B=0){_=M,v=k,x=B;let U=!0,Z=null,pt=!1,dt=!1;if(M){const gt=Mt.get(M);gt.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(36160,null),U=!1):gt.__webglFramebuffer===void 0?mt.setupRenderTarget(M):gt.__hasExternalTextures&&mt.rebindTextures(M,Mt.get(M.texture).__webglTexture,Mt.get(M.depthTexture).__webglTexture);const Et=M.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(dt=!0);const Pt=Mt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Z=Pt[k],pt=!0):X.isWebGL2&&M.samples>0&&mt.useMultisampledRTT(M)===!1?Z=Mt.get(M).__webglMultisampledFramebuffer:Z=Pt,R.copy(M.viewport),H.copy(M.scissor),b=M.scissorTest}else R.copy(V).multiplyScalar(D).floor(),H.copy(Y).multiplyScalar(D).floor(),b=it;if(K.bindFramebuffer(36160,Z)&&X.drawBuffers&&U&&K.drawBuffers(M,Z),K.viewport(R),K.scissor(H),K.setScissorTest(b),pt){const gt=Mt.get(M.texture);N.framebufferTexture2D(36160,36064,34069+k,gt.__webglTexture,B)}else if(dt){const gt=Mt.get(M.texture),Et=k||0;N.framebufferTextureLayer(36160,36064,gt.__webglTexture,B||0,Et)}y=-1},this.readRenderTargetPixels=function(M,k,B,U,Z,pt,dt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=Mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(ut=ut[dt]),ut){K.bindFramebuffer(36160,ut);try{const gt=M.texture,Et=gt.format,Pt=gt.type;if(Et!==Je&&W.convert(Et)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=Pt===Li&&(Q.has("EXT_color_buffer_half_float")||X.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Pt!==Nn&&W.convert(Pt)!==N.getParameter(35738)&&!(Pt===In&&(X.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-U&&B>=0&&B<=M.height-Z&&N.readPixels(k,B,U,Z,W.convert(Et),W.convert(Pt),pt)}finally{const gt=_!==null?Mt.get(_).__webglFramebuffer:null;K.bindFramebuffer(36160,gt)}}},this.copyFramebufferToTexture=function(M,k,B=0){const U=Math.pow(2,-B),Z=Math.floor(k.image.width*U),pt=Math.floor(k.image.height*U);mt.setTexture2D(k,0),N.copyTexSubImage2D(3553,B,0,0,M.x,M.y,Z,pt),K.unbindTexture()},this.copyTextureToTexture=function(M,k,B,U=0){const Z=k.image.width,pt=k.image.height,dt=W.convert(B.format),ut=W.convert(B.type);mt.setTexture2D(B,0),N.pixelStorei(37440,B.flipY),N.pixelStorei(37441,B.premultiplyAlpha),N.pixelStorei(3317,B.unpackAlignment),k.isDataTexture?N.texSubImage2D(3553,U,M.x,M.y,Z,pt,dt,ut,k.image.data):k.isCompressedTexture?N.compressedTexSubImage2D(3553,U,M.x,M.y,k.mipmaps[0].width,k.mipmaps[0].height,dt,k.mipmaps[0].data):N.texSubImage2D(3553,U,M.x,M.y,dt,ut,k.image),U===0&&B.generateMipmaps&&N.generateMipmap(3553),K.unbindTexture()},this.copyTextureToTexture3D=function(M,k,B,U,Z=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=M.max.x-M.min.x+1,dt=M.max.y-M.min.y+1,ut=M.max.z-M.min.z+1,gt=W.convert(U.format),Et=W.convert(U.type);let Pt;if(U.isData3DTexture)mt.setTexture3D(U,0),Pt=32879;else if(U.isDataArrayTexture)mt.setTexture2DArray(U,0),Pt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,U.flipY),N.pixelStorei(37441,U.premultiplyAlpha),N.pixelStorei(3317,U.unpackAlignment);const lt=N.getParameter(3314),Vt=N.getParameter(32878),Gt=N.getParameter(3316),ne=N.getParameter(3315),Yt=N.getParameter(32877),kt=B.isCompressedTexture?B.mipmaps[0]:B.image;N.pixelStorei(3314,kt.width),N.pixelStorei(32878,kt.height),N.pixelStorei(3316,M.min.x),N.pixelStorei(3315,M.min.y),N.pixelStorei(32877,M.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(Pt,Z,k.x,k.y,k.z,pt,dt,ut,gt,Et,kt.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Pt,Z,k.x,k.y,k.z,pt,dt,ut,gt,kt.data)):N.texSubImage3D(Pt,Z,k.x,k.y,k.z,pt,dt,ut,gt,Et,kt),N.pixelStorei(3314,lt),N.pixelStorei(32878,Vt),N.pixelStorei(3316,Gt),N.pixelStorei(3315,ne),N.pixelStorei(32877,Yt),Z===0&&U.generateMipmaps&&N.generateMipmap(Pt),K.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?mt.setTextureCube(M,0):M.isData3DTexture?mt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?mt.setTexture2DArray(M,0):mt.setTexture2D(M,0),K.unbindTexture()},this.resetState=function(){v=0,x=0,_=null,K.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class _f extends mo{}_f.prototype.isWebGL1Renderer=!0;class yf extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class go extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const La=new et,Pa=new et,Ra=new ve,qr=new eo,ir=new cr;class wf extends Ee{constructor(t=new on,e=new go){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let a=1,i=e.count;a<i;a++)La.fromBufferAttribute(e,a-1),Pa.fromBufferAttribute(e,a),n[a]=n[a-1],n[a]+=La.distanceTo(Pa);t.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,a=this.matrixWorld,i=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(a),ir.radius+=i,t.ray.intersectsSphere(ir)===!1)return;Ra.copy(a).invert(),qr.copy(t.ray).applyMatrix4(Ra);const s=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,u=new et,l=new et,o=new et,h=new et,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const v=Math.max(0,r.start),x=Math.min(g.count,r.start+r.count);for(let _=v,y=x-1;_<y;_+=p){const w=g.getX(_),R=g.getX(_+1);if(u.fromBufferAttribute(f,w),l.fromBufferAttribute(f,R),qr.distanceSqToSegment(u,l,h,o)>c)continue;h.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(h);b<t.near||b>t.far||e.push({distance:b,point:o.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,r.start),x=Math.min(f.count,r.start+r.count);for(let _=v,y=x-1;_<y;_+=p){if(u.fromBufferAttribute(f,_),l.fromBufferAttribute(f,_+1),qr.distanceSqToSegment(u,l,h,o)>c)continue;h.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(h);R<t.near||R>t.far||e.push({distance:R,point:o.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=a.length;i<r;i++){const s=a[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}const Da=new et,Ia=new et;class bf extends wf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let a=0,i=e.count;a<i;a+=2)Da.fromBufferAttribute(e,a),Ia.fromBufferAttribute(e,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Da.distanceTo(Ia);t.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class us extends on{constructor(t=1,e=32,n=16,a=0,i=Math.PI*2,r=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:a,phiLength:i,thetaStart:r,thetaLength:s},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+s,Math.PI);let u=0;const l=[],o=new et,h=new et,p=[],g=[],m=[],f=[];for(let v=0;v<=n;v++){const x=[],_=v/n;let y=0;v==0&&r==0?y=.5/e:v==n&&c==Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){const R=w/e;o.x=-t*Math.cos(a+R*i)*Math.sin(r+_*s),o.y=t*Math.cos(r+_*s),o.z=t*Math.sin(a+R*i)*Math.sin(r+_*s),g.push(o.x,o.y,o.z),h.copy(o).normalize(),m.push(h.x,h.y,h.z),f.push(R+y,1-_),x.push(u++)}l.push(x)}for(let v=0;v<n;v++)for(let x=0;x<e;x++){const _=l[v][x+1],y=l[v][x],w=l[v+1][x],R=l[v+1][x+1];(v!==0||r>0)&&p.push(_,y,R),(v!==n-1||c<Math.PI)&&p.push(y,w,R)}this.setIndex(p),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(m,3)),this.setAttribute("uv",new ze(f,2))}static fromJSON(t){return new us(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ds extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Fa={enabled:!1,files:{},add:function(d,t){this.enabled!==!1&&(this.files[d]=t)},get:function(d){if(this.enabled!==!1)return this.files[d]},remove:function(d){delete this.files[d]},clear:function(){this.files={}}};class Mf{constructor(t,e,n){const a=this;let i=!1,r=0,s=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){s++,i===!1&&a.onStart!==void 0&&a.onStart(l,r,s),i=!0},this.itemEnd=function(l){r++,a.onProgress!==void 0&&a.onProgress(l,r,s),r===s&&(i=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(l){a.onError!==void 0&&a.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,o){return u.push(l,o),this},this.removeHandler=function(l){const o=u.indexOf(l);return o!==-1&&u.splice(o,2),this},this.getHandler=function(l){for(let o=0,h=u.length;o<h;o+=2){const p=u[o],g=u[o+1];if(p.global&&(p.lastIndex=0),p.test(l))return g}return null}}}const Sf=new Mf;class fs{constructor(t){this.manager=t!==void 0?t:Sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(a,i){n.load(t,a,e,i)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class vo extends fs{constructor(t){super(t)}load(t,e,n,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const i=this,r=Fa.get(t);if(r!==void 0)return i.manager.itemStart(t),setTimeout(function(){e&&e(r),i.manager.itemEnd(t)},0),r;const s=Ri("img");function c(){l(),Fa.add(t,this),e&&e(this),i.manager.itemEnd(t)}function u(o){l(),a&&a(o),i.manager.itemError(t),i.manager.itemEnd(t)}function l(){s.removeEventListener("load",c,!1),s.removeEventListener("error",u,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),i.manager.itemStart(t),s.src=t,s}}class Ef extends fs{constructor(t){super(t)}load(t,e,n,a){const i=new ls,r=new vo(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let s=0;function c(u){r.load(t[u],function(l){i.images[u]=l,s++,s===6&&(i.needsUpdate=!0,e&&e(i))},void 0,a)}for(let u=0;u<t.length;++u)c(u);return i}}class Af extends fs{constructor(t){super(t)}load(t,e,n,a){const i=new Be,r=new vo(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(s){i.image=s,i.needsUpdate=!0,e!==void 0&&e(i)},n,a),i}}class xo extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Xr=new ve,Ba=new et,za=new et;class Tf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ba.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ba),za.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(za),e.updateMatrixWorld(),Xr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Cf extends Tf{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lf extends xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DefaultUp),this.updateMatrix(),this.target=new Ee,this.shadow=new Cf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Pf extends xo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Na(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Na();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Na(){return(typeof performance>"u"?Date:performance).now()}class Oa{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Df extends bf{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new on;a.setAttribute("position",new ze(e,3)),a.setAttribute("color",new ze(n,3));const i=new go({vertexColors:!0,toneMapped:!1});super(a,i),this.type="AxesHelper"}setColors(t,e,n){const a=new oe,i=this.geometry.attributes.color.array;return a.set(t),a.toArray(i,0),a.toArray(i,3),a.set(e),a.toArray(i,6),a.toArray(i,9),a.set(n),a.toArray(i,12),a.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:as}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=as);const Ua={type:"change"},Yr={type:"start"},Va={type:"end"};class If extends Gn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:qn.ROTATE,TWO:qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(W){W.addEventListener("keydown",Xt),this._domElementKeyEvents=W},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ua),n.update(),i=a.NONE},this.update=function(){const W=new et,tt=new Vn().setFromUnitVectors(t.up,new et(0,1,0)),Rt=tt.clone().invert(),Ft=new et,Tt=new Vn,zt=2*Math.PI;return function(){const Zt=n.object.position;W.copy(Zt).sub(n.target),W.applyQuaternion(tt),s.setFromVector3(W),n.autoRotate&&i===a.NONE&&T(H()),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let $t=n.minAzimuthAngle,Jt=n.maxAzimuthAngle;return isFinite($t)&&isFinite(Jt)&&($t<-Math.PI?$t+=zt:$t>Math.PI&&($t-=zt),Jt<-Math.PI?Jt+=zt:Jt>Math.PI&&(Jt-=zt),$t<=Jt?s.theta=Math.max($t,Math.min(Jt,s.theta)):s.theta=s.theta>($t+Jt)/2?Math.max($t,s.theta):Math.min(Jt,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=u,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),W.setFromSpherical(s),W.applyQuaternion(Rt),Zt.copy(n.target).add(W),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),l.set(0,0,0)),u=1,o||Ft.distanceToSquared(n.object.position)>r||8*(1-Tt.dot(n.object.quaternion))>r?(n.dispatchEvent(Ua),Ft.copy(n.object.position),Tt.copy(n.object.quaternion),o=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",nt),n.domElement.removeEventListener("pointerdown",St),n.domElement.removeEventListener("pointercancel",Ht),n.domElement.removeEventListener("wheel",Lt),n.domElement.removeEventListener("pointermove",ct),n.domElement.removeEventListener("pointerup",vt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Xt)};const n=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=a.NONE;const r=1e-6,s=new Oa,c=new Oa;let u=1;const l=new et;let o=!1;const h=new te,p=new te,g=new te,m=new te,f=new te,v=new te,x=new te,_=new te,y=new te,w=[],R={};function H(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function T(W){c.theta-=W}function L(W){c.phi-=W}const D=function(){const W=new et;return function(Rt,Ft){W.setFromMatrixColumn(Ft,0),W.multiplyScalar(-Rt),l.add(W)}}(),q=function(){const W=new et;return function(Rt,Ft){n.screenSpacePanning===!0?W.setFromMatrixColumn(Ft,1):(W.setFromMatrixColumn(Ft,0),W.crossVectors(n.object.up,W)),W.multiplyScalar(Rt),l.add(W)}}(),F=function(){const W=new et;return function(Rt,Ft){const Tt=n.domElement;if(n.object.isPerspectiveCamera){const zt=n.object.position;W.copy(zt).sub(n.target);let Ot=W.length();Ot*=Math.tan(n.object.fov/2*Math.PI/180),D(2*Rt*Ot/Tt.clientHeight,n.object.matrix),q(2*Ft*Ot/Tt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(Rt*(n.object.right-n.object.left)/n.object.zoom/Tt.clientWidth,n.object.matrix),q(Ft*(n.object.top-n.object.bottom)/n.object.zoom/Tt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(W){n.object.isPerspectiveCamera?u/=W:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*W)),n.object.updateProjectionMatrix(),o=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(W){n.object.isPerspectiveCamera?u*=W:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/W)),n.object.updateProjectionMatrix(),o=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function it(W){h.set(W.clientX,W.clientY)}function G(W){x.set(W.clientX,W.clientY)}function z(W){m.set(W.clientX,W.clientY)}function J(W){p.set(W.clientX,W.clientY),g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const tt=n.domElement;T(2*Math.PI*g.x/tt.clientHeight),L(2*Math.PI*g.y/tt.clientHeight),h.copy(p),n.update()}function $(W){_.set(W.clientX,W.clientY),y.subVectors(_,x),y.y>0?V(b()):y.y<0&&Y(b()),x.copy(_),n.update()}function A(W){f.set(W.clientX,W.clientY),v.subVectors(f,m).multiplyScalar(n.panSpeed),F(v.x,v.y),m.copy(f),n.update()}function O(W){W.deltaY<0?Y(b()):W.deltaY>0&&V(b()),n.update()}function P(W){let tt=!1;switch(W.code){case n.keys.UP:W.ctrlKey||W.metaKey||W.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),tt=!0;break;case n.keys.BOTTOM:W.ctrlKey||W.metaKey||W.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),tt=!0;break;case n.keys.LEFT:W.ctrlKey||W.metaKey||W.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),tt=!0;break;case n.keys.RIGHT:W.ctrlKey||W.metaKey||W.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),tt=!0;break}tt&&(W.preventDefault(),n.update())}function C(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const W=.5*(w[0].pageX+w[1].pageX),tt=.5*(w[0].pageY+w[1].pageY);h.set(W,tt)}}function E(){if(w.length===1)m.set(w[0].pageX,w[0].pageY);else{const W=.5*(w[0].pageX+w[1].pageX),tt=.5*(w[0].pageY+w[1].pageY);m.set(W,tt)}}function N(){const W=w[0].pageX-w[1].pageX,tt=w[0].pageY-w[1].pageY,Rt=Math.sqrt(W*W+tt*tt);x.set(0,Rt)}function rt(){n.enableZoom&&N(),n.enablePan&&E()}function Q(){n.enableZoom&&N(),n.enableRotate&&C()}function X(W){if(w.length==1)p.set(W.pageX,W.pageY);else{const Rt=Nt(W),Ft=.5*(W.pageX+Rt.x),Tt=.5*(W.pageY+Rt.y);p.set(Ft,Tt)}g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const tt=n.domElement;T(2*Math.PI*g.x/tt.clientHeight),L(2*Math.PI*g.y/tt.clientHeight),h.copy(p)}function K(W){if(w.length===1)f.set(W.pageX,W.pageY);else{const tt=Nt(W),Rt=.5*(W.pageX+tt.x),Ft=.5*(W.pageY+tt.y);f.set(Rt,Ft)}v.subVectors(f,m).multiplyScalar(n.panSpeed),F(v.x,v.y),m.copy(f)}function ht(W){const tt=Nt(W),Rt=W.pageX-tt.x,Ft=W.pageY-tt.y,Tt=Math.sqrt(Rt*Rt+Ft*Ft);_.set(0,Tt),y.set(0,Math.pow(_.y/x.y,n.zoomSpeed)),V(y.y),x.copy(_)}function Mt(W){n.enableZoom&&ht(W),n.enablePan&&K(W)}function mt(W){n.enableZoom&&ht(W),n.enableRotate&&X(W)}function St(W){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(W.pointerId),n.domElement.addEventListener("pointermove",ct),n.domElement.addEventListener("pointerup",vt)),ft(W),W.pointerType==="touch"?I(W):Bt(W))}function ct(W){n.enabled!==!1&&(W.pointerType==="touch"?S(W):Wt(W))}function vt(W){xt(W),w.length===0&&(n.domElement.releasePointerCapture(W.pointerId),n.domElement.removeEventListener("pointermove",ct),n.domElement.removeEventListener("pointerup",vt)),n.dispatchEvent(Va),i=a.NONE}function Ht(W){xt(W)}function Bt(W){let tt;switch(W.button){case 0:tt=n.mouseButtons.LEFT;break;case 1:tt=n.mouseButtons.MIDDLE;break;case 2:tt=n.mouseButtons.RIGHT;break;default:tt=-1}switch(tt){case Hn.DOLLY:if(n.enableZoom===!1)return;G(W),i=a.DOLLY;break;case Hn.ROTATE:if(W.ctrlKey||W.metaKey||W.shiftKey){if(n.enablePan===!1)return;z(W),i=a.PAN}else{if(n.enableRotate===!1)return;it(W),i=a.ROTATE}break;case Hn.PAN:if(W.ctrlKey||W.metaKey||W.shiftKey){if(n.enableRotate===!1)return;it(W),i=a.ROTATE}else{if(n.enablePan===!1)return;z(W),i=a.PAN}break;default:i=a.NONE}i!==a.NONE&&n.dispatchEvent(Yr)}function Wt(W){switch(i){case a.ROTATE:if(n.enableRotate===!1)return;J(W);break;case a.DOLLY:if(n.enableZoom===!1)return;$(W);break;case a.PAN:if(n.enablePan===!1)return;A(W);break}}function Lt(W){n.enabled===!1||n.enableZoom===!1||i!==a.NONE||(W.preventDefault(),n.dispatchEvent(Yr),O(W),n.dispatchEvent(Va))}function Xt(W){n.enabled===!1||n.enablePan===!1||P(W)}function I(W){switch(_t(W),w.length){case 1:switch(n.touches.ONE){case qn.ROTATE:if(n.enableRotate===!1)return;C(),i=a.TOUCH_ROTATE;break;case qn.PAN:if(n.enablePan===!1)return;E(),i=a.TOUCH_PAN;break;default:i=a.NONE}break;case 2:switch(n.touches.TWO){case qn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;rt(),i=a.TOUCH_DOLLY_PAN;break;case qn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(),i=a.TOUCH_DOLLY_ROTATE;break;default:i=a.NONE}break;default:i=a.NONE}i!==a.NONE&&n.dispatchEvent(Yr)}function S(W){switch(_t(W),i){case a.TOUCH_ROTATE:if(n.enableRotate===!1)return;X(W),n.update();break;case a.TOUCH_PAN:if(n.enablePan===!1)return;K(W),n.update();break;case a.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Mt(W),n.update();break;case a.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(W),n.update();break;default:i=a.NONE}}function nt(W){n.enabled!==!1&&W.preventDefault()}function ft(W){w.push(W)}function xt(W){delete R[W.pointerId];for(let tt=0;tt<w.length;tt++)if(w[tt].pointerId==W.pointerId){w.splice(tt,1);return}}function _t(W){let tt=R[W.pointerId];tt===void 0&&(tt=new te,R[W.pointerId]=tt),tt.set(W.pageX,W.pageY)}function Nt(W){const tt=W.pointerId===w[0].pointerId?w[1]:w[0];return R[tt.pointerId]}n.domElement.addEventListener("contextmenu",nt),n.domElement.addEventListener("pointerdown",St),n.domElement.addEventListener("pointercancel",Ht),n.domElement.addEventListener("wheel",Lt,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class an{constructor(t,e,n,a,i="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),an.nextNameID=an.nextNameID||0,this.$name.id=`lil-gui-name-${++an.nextNameID}`,this.$widget=document.createElement(i),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ff extends an{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function rs(d){let t,e;return(t=d.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=d.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=d.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Bf={isPrimitive:!0,match:d=>typeof d=="string",fromHexString:rs,toHexString:rs},Di={isPrimitive:!0,match:d=>typeof d=="number",fromHexString:d=>parseInt(d.substring(1),16),toHexString:d=>"#"+d.toString(16).padStart(6,0)},zf={isPrimitive:!1,match:Array.isArray,fromHexString(d,t,e=1){const n=Di.fromHexString(d);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([d,t,e],n=1){n=255/n;const a=d*n<<16^t*n<<8^e*n<<0;return Di.toHexString(a)}},Nf={isPrimitive:!1,match:d=>Object(d)===d,fromHexString(d,t,e=1){const n=Di.fromHexString(d);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:d,g:t,b:e},n=1){n=255/n;const a=d*n<<16^t*n<<8^e*n<<0;return Di.toHexString(a)}},Of=[Bf,Di,zf,Nf];function Uf(d){return Of.find(t=>t.match(d))}class Vf extends an{constructor(t,e,n,a){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Uf(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const i=rs(this.$text.value);i&&this._setValueFromHexString(i)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class $r extends an{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Wf extends an{constructor(t,e,n,a,i,r){super(t,e,n,"number"),this._initInput(),this.min(a),this.max(i);const s=r!==void 0;this.step(s?r:this._getImplicitStep(),s),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},e=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},n=v=>{v.code==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),e(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),e(this._step*this._arrowKeyMultiplier(v)*-1))},a=v=>{this._inputFocused&&(v.preventDefault(),e(this._step*this._normalizeMouseWheel(v)))};let i=!1,r,s,c,u,l;const o=5,h=v=>{r=v.clientX,s=c=v.clientY,i=!0,u=this.getValue(),l=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=v=>{if(i){const x=v.clientX-r,_=v.clientY-s;Math.abs(_)>o?(v.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>o&&g()}if(!i){const x=v.clientY-c;l-=x*this._step*this._arrowKeyMultiplier(v),u+l>this._max?l=this._max-u:u+l<this._min&&(l=this._min-u),this._snapClampSetValue(u+l)}c=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",a,{passive:!1}),this.$input.addEventListener("mousedown",h),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(v,x,_,y,w)=>(v-x)/(_-x)*(w-y)+y,e=v=>{const x=this.$slider.getBoundingClientRect();let _=t(v,x.left,x.right,this._min,this._max);this._snapClampSetValue(_)},n=v=>{this._setDraggingStyle(!0),e(v.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",i)},a=v=>{e(v.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",i)};let r=!1,s,c;const u=v=>{v.preventDefault(),this._setDraggingStyle(!0),e(v.touches[0].clientX),r=!1},l=v=>{v.touches.length>1||(this._hasScrollBar?(s=v.touches[0].clientX,c=v.touches[0].clientY,r=!0):u(v),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",h))},o=v=>{if(r){const x=v.touches[0].clientX-s,_=v.touches[0].clientY-c;Math.abs(x)>Math.abs(_)?u(v):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",h))}else v.preventDefault(),e(v.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",h)},p=this._callOnFinishChange.bind(this),g=400;let m;const f=v=>{if(Math.abs(v.deltaX)<Math.abs(v.deltaY)&&this._hasScrollBar)return;v.preventDefault();const _=this._normalizeMouseWheel(v)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(m),m=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",l,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class kf extends an{constructor(t,e,n,a){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(a)?a:Object.values(a),this._names=Array.isArray(a)?a:Object.keys(a),this._names.forEach(i=>{const r=document.createElement("option");r.innerHTML=i,this.$select.appendChild(r)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class Gf extends an{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Hf=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function qf(d){const t=document.createElement("style");t.innerHTML=d;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Wa=!1;class ps{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:a,title:i="Controls",injectStyles:r=!0,touchStyles:s=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),s&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Wa&&r&&(qf(Hf),Wa=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(t,e,n,a,i){if(Object(n)===n)return new kf(this,t,e,n);const r=t[e];switch(typeof r){case"number":return new Wf(this,t,e,n,a,i);case"boolean":return new Ff(this,t,e);case"string":return new Gf(this,t,e);case"function":return new $r(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,r)}addColor(t,e,n=1){return new Vf(this,t,e,n)}addFolder(t){return new ps({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof $r||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof $r)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=i=>{i.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const a=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function rr(d){throw new Error('Could not dynamically require "'+d+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ss={},Xf={get exports(){return ss},set exports(d){ss=d}};(function(d,t){(function(e){d.exports=e()})(function(){return function e(n,a,i){function r(u,l){if(!a[u]){if(!n[u]){var o=typeof rr=="function"&&rr;if(!l&&o)return o(u,!0);if(s)return s(u,!0);throw new Error("Cannot find module '"+u+"'")}var h=a[u]={exports:{}};n[u][0].call(h.exports,function(p){var g=n[u][1][p];return r(g||p)},h,h.exports,e,n,a,i)}return a[u].exports}for(var s=typeof rr=="function"&&rr,c=0;c<i.length;c++)r(i[c]);return r}({1:[function(e,n,a){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,a){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,a){var i=e("../math/Vec3");e("../utils/Utils"),n.exports=r;function r(u){u=u||{},this.lowerBound=new i,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new i,u.upperBound&&this.upperBound.copy(u.upperBound)}var s=new i;r.prototype.setFromPoints=function(u,l,o,h){var p=this.lowerBound,g=this.upperBound,m=o;p.copy(u[0]),m&&m.vmult(p,p),g.copy(p);for(var f=1;f<u.length;f++){var v=u[f];m&&(m.vmult(v,s),v=s),v.x>g.x&&(g.x=v.x),v.x<p.x&&(p.x=v.x),v.y>g.y&&(g.y=v.y),v.y<p.y&&(p.y=v.y),v.z>g.z&&(g.z=v.z),v.z<p.z&&(p.z=v.z)}return l&&(l.vadd(p,p),l.vadd(g,g)),h&&(p.x-=h,p.y-=h,p.z-=h,g.x+=h,g.y+=h,g.z+=h),this},r.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},r.prototype.clone=function(){return new r().copy(this)},r.prototype.extend=function(u){var l=u.lowerBound.x;this.lowerBound.x>l&&(this.lowerBound.x=l);var o=u.upperBound.x;this.upperBound.x<o&&(this.upperBound.x=o);var l=u.lowerBound.y;this.lowerBound.y>l&&(this.lowerBound.y=l);var o=u.upperBound.y;this.upperBound.y<o&&(this.upperBound.y=o);var l=u.lowerBound.z;this.lowerBound.z>l&&(this.lowerBound.z=l);var o=u.upperBound.z;this.upperBound.z<o&&(this.upperBound.z=o)},r.prototype.overlaps=function(u){var l=this.lowerBound,o=this.upperBound,h=u.lowerBound,p=u.upperBound;return(h.x<=o.x&&o.x<=p.x||l.x<=p.x&&p.x<=o.x)&&(h.y<=o.y&&o.y<=p.y||l.y<=p.y&&p.y<=o.y)&&(h.z<=o.z&&o.z<=p.z||l.z<=p.z&&p.z<=o.z)},r.prototype.contains=function(u){var l=this.lowerBound,o=this.upperBound,h=u.lowerBound,p=u.upperBound;return l.x<=h.x&&o.x>=p.x&&l.y<=h.y&&o.y>=p.y&&l.z<=h.z&&o.z>=p.z},r.prototype.getCorners=function(u,l,o,h,p,g,m,f){var v=this.lowerBound,x=this.upperBound;u.copy(v),l.set(x.x,v.y,v.z),o.set(x.x,x.y,v.z),h.set(v.x,x.y,x.z),p.set(x.x,v.y,v.z),g.set(v.x,x.y,v.z),m.set(v.x,v.y,x.z),f.copy(x)};var c=[new i,new i,new i,new i,new i,new i,new i,new i];r.prototype.toLocalFrame=function(u,l){var o=c,h=o[0],p=o[1],g=o[2],m=o[3],f=o[4],v=o[5],x=o[6],_=o[7];this.getCorners(h,p,g,m,f,v,x,_);for(var y=0;y!==8;y++){var w=o[y];u.pointToLocal(w,w)}return l.setFromPoints(o)},r.prototype.toWorldFrame=function(u,l){var o=c,h=o[0],p=o[1],g=o[2],m=o[3],f=o[4],v=o[5],x=o[6],_=o[7];this.getCorners(h,p,g,m,f,v,x,_);for(var y=0;y!==8;y++){var w=o[y];u.pointToWorld(w,w)}return l.setFromPoints(o)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,a){n.exports=i;function i(){this.matrix=[]}i.prototype.get=function(r,s){if(r=r.index,s=s.index,s>r){var c=s;s=r,r=c}return this.matrix[(r*(r+1)>>1)+s-1]},i.prototype.set=function(r,s,c){if(r=r.index,s=s.index,s>r){var u=s;s=r,r=u}this.matrix[(r*(r+1)>>1)+s-1]=c?1:0},i.prototype.reset=function(){for(var r=0,s=this.matrix.length;r!==s;r++)this.matrix[r]=0},i.prototype.setNumObjects=function(r){this.matrix.length=r*(r-1)>>1}},{}],5:[function(e,n,a){var i=e("../objects/Body"),r=e("../math/Vec3"),s=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(m,f,v){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=i.STATIC|i.KINEMATIC;c.prototype.needBroadphaseCollision=function(m,f){return!(!(m.collisionFilterGroup&f.collisionFilterMask)||!(f.collisionFilterGroup&m.collisionFilterMask)||(m.type&u||m.sleepState===i.SLEEPING)&&(f.type&u||f.sleepState===i.SLEEPING))},c.prototype.intersectionTest=function(m,f,v,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(m,f,v,x):this.doBoundingSphereBroadphase(m,f,v,x)};var l=new r;new r,new s,new r,c.prototype.doBoundingSphereBroadphase=function(m,f,v,x){var _=l;f.position.vsub(m.position,_);var y=Math.pow(m.boundingRadius+f.boundingRadius,2),w=_.norm2();w<y&&(v.push(m),x.push(f))},c.prototype.doBoundingBoxBroadphase=function(m,f,v,x){m.aabbNeedsUpdate&&m.computeAABB(),f.aabbNeedsUpdate&&f.computeAABB(),m.aabb.overlaps(f.aabb)&&(v.push(m),x.push(f))};var o={keys:[]},h=[],p=[];c.prototype.makePairsUnique=function(m,f){for(var v=o,x=h,_=p,y=m.length,w=0;w!==y;w++)x[w]=m[w],_[w]=f[w];m.length=0,f.length=0;for(var w=0;w!==y;w++){var R=x[w].id,H=_[w].id,b=R<H?R+","+H:H+","+R;v[b]=w,v.keys.push(b)}for(var w=0;w!==v.keys.length;w++){var b=v.keys.pop(),T=v[b];m.push(x[T]),f.push(_[T]),delete v[b]}},c.prototype.setWorld=function(m){};var g=new r;c.boundingSphereCheck=function(m,f){var v=g;return m.position.vsub(f.position,v),Math.pow(m.shape.boundingSphereRadius+f.shape.boundingSphereRadius,2)>v.norm2()},c.prototype.aabbQuery=function(m,f,v){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,a){n.exports=c;var i=e("./Broadphase"),r=e("../math/Vec3"),s=e("../shapes/Shape");function c(l,o,h,p,g){i.apply(this),this.nx=h||10,this.ny=p||10,this.nz=g||10,this.aabbMin=l||new r(100,100,100),this.aabbMax=o||new r(-100,-100,-100);var m=this.nx*this.ny*this.nz;if(m<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=m,this.binLengths.length=m;for(var f=0;f<m;f++)this.bins[f]=[],this.binLengths[f]=0}c.prototype=new i,c.prototype.constructor=c;var u=new r;new r,c.prototype.collisionPairs=function(l,o,h){var p=l.numObjects(),g=l.bodies,rt=this.aabbMax,N=this.aabbMin,m=this.nx,f=this.ny,v=this.nz,x=f*v,_=v,y=1,w=rt.x,R=rt.y,H=rt.z,b=N.x,T=N.y,L=N.z,D=m/(w-b),q=f/(R-T),F=v/(H-L),V=(w-b)/m,Y=(R-T)/f,it=(H-L)/v,G=Math.sqrt(V*V+Y*Y+it*it)*.5,z=s.types,J=z.SPHERE,$=z.PLANE;z.BOX,z.COMPOUND,z.CONVEXPOLYHEDRON;for(var A=this.bins,O=this.binLengths,P=this.bins.length,C=0;C!==P;C++)O[C]=0;var E=Math.ceil,N=Math.min,rt=Math.max;function Q(tt,Rt,Ft,Tt,zt,Ot,Zt){var $t=(tt-b)*D|0,Jt=(Rt-T)*q|0,j=(Ft-L)*F|0,at=E((Tt-b)*D),bt=E((zt-T)*q),Ct=E((Ot-L)*F);$t<0?$t=0:$t>=m&&($t=m-1),Jt<0?Jt=0:Jt>=f&&(Jt=f-1),j<0?j=0:j>=v&&(j=v-1),at<0?at=0:at>=m&&(at=m-1),bt<0?bt=0:bt>=f&&(bt=f-1),Ct<0?Ct=0:Ct>=v&&(Ct=v-1),$t*=x,Jt*=_,j*=y,at*=x,bt*=_,Ct*=y;for(var Ut=$t;Ut<=at;Ut+=x)for(var ee=Jt;ee<=bt;ee+=_)for(var le=j;le<=Ct;le+=y){var de=Ut+ee+le;A[de][O[de]++]=Zt}}for(var C=0;C!==p;C++){var X=g[C],K=X.shape;switch(K.type){case J:var ht=X.position.x,Mt=X.position.y,mt=X.position.z,St=K.radius;Q(ht-St,Mt-St,mt-St,ht+St,Mt+St,mt+St,X);break;case $:K.worldNormalNeedsUpdate&&K.computeWorldNormal(X.quaternion);var ct=K.worldNormal,vt=b+V*.5-X.position.x,Ht=T+Y*.5-X.position.y,Bt=L+it*.5-X.position.z,Wt=u;Wt.set(vt,Ht,Bt);for(var Lt=0,Xt=0;Lt!==m;Lt++,Xt+=x,Wt.y=Ht,Wt.x+=V)for(var I=0,S=0;I!==f;I++,S+=_,Wt.z=Bt,Wt.y+=Y)for(var nt=0,ft=0;nt!==v;nt++,ft+=y,Wt.z+=it)if(Wt.dot(ct)<G){var xt=Xt+S+ft;A[xt][O[xt]++]=X}break;default:X.aabbNeedsUpdate&&X.computeAABB(),Q(X.aabb.lowerBound.x,X.aabb.lowerBound.y,X.aabb.lowerBound.z,X.aabb.upperBound.x,X.aabb.upperBound.y,X.aabb.upperBound.z,X);break}}for(var C=0;C!==P;C++){var _t=O[C];if(_t>1)for(var Nt=A[C],Lt=0;Lt!==_t;Lt++)for(var X=Nt[Lt],I=0;I!==Lt;I++){var W=Nt[I];this.needBroadphaseCollision(X,W)&&this.intersectionTest(X,W,o,h)}}this.makePairsUnique(o,h)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,a){n.exports=s;var i=e("./Broadphase"),r=e("./AABB");function s(){i.apply(this)}s.prototype=new i,s.prototype.constructor=s,s.prototype.collisionPairs=function(c,u,l){var o=c.bodies,h=o.length,p,g,m,f;for(p=0;p!==h;p++)for(g=0;g!==p;g++)m=o[p],f=o[g],this.needBroadphaseCollision(m,f)&&this.intersectionTest(m,f,u,l)},new r,s.prototype.aabbQuery=function(c,u,l){l=l||[];for(var o=0;o<c.bodies.length;o++){var h=c.bodies[o];h.aabbNeedsUpdate&&h.computeAABB(),h.aabb.overlaps(u)&&l.push(h)}return l}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,a){n.exports=i;function i(){this.matrix={}}i.prototype.get=function(r,s){if(r=r.id,s=s.id,s>r){var c=s;s=r,r=c}return r+"-"+s in this.matrix},i.prototype.set=function(r,s,c){if(r=r.id,s=s.id,s>r){var u=s;s=r,r=u}c?this.matrix[r+"-"+s]=!0:delete this.matrix[r+"-"+s]},i.prototype.reset=function(){this.matrix={}},i.prototype.setNumObjects=function(r){}},{}],9:[function(e,n,a){n.exports=o;var i=e("../math/Vec3"),r=e("../math/Quaternion"),s=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),u=e("../shapes/Shape"),l=e("../collision/AABB");function o(P,C){this.from=P?P.clone():new i,this.to=C?C.clone():new i,this._direction=new i,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=o.ANY,this.result=new c,this.hasHit=!1,this.callback=function(E){}}o.prototype.constructor=o,o.CLOSEST=1,o.ANY=2,o.ALL=4;var h=new l,p=[];o.prototype.intersectWorld=function(P,C){return this.mode=C.mode||o.ANY,this.result=C.result||new c,this.skipBackfaces=!!C.skipBackfaces,this.collisionFilterMask=typeof C.collisionFilterMask<"u"?C.collisionFilterMask:-1,this.collisionFilterGroup=typeof C.collisionFilterGroup<"u"?C.collisionFilterGroup:-1,C.from&&this.from.copy(C.from),C.to&&this.to.copy(C.to),this.callback=C.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(h),p.length=0,P.broadphase.aabbQuery(P,h,p),this.intersectBodies(p),this.hasHit};var g=new i,m=new i;o.pointInTriangle=f;function f(P,C,E,N){N.vsub(C,$),E.vsub(C,g),P.vsub(C,m);var rt=$.dot($),Q=$.dot(g),X=$.dot(m),K=g.dot(g),ht=g.dot(m),Mt,mt;return(Mt=K*X-Q*ht)>=0&&(mt=rt*ht-Q*X)>=0&&Mt+mt<rt*K-Q*Q}var v=new i,x=new r;o.prototype.intersectBody=function(P,C){C&&(this.result=C,this._updateDirection());var E=this.checkCollisionResponse;if(!(E&&!P.collisionResponse)&&!(!(this.collisionFilterGroup&P.collisionFilterMask)||!(P.collisionFilterGroup&this.collisionFilterMask)))for(var N=v,rt=x,Q=0,X=P.shapes.length;Q<X;Q++){var K=P.shapes[Q];if(!(E&&!K.collisionResponse)&&(P.quaternion.mult(P.shapeOrientations[Q],rt),P.quaternion.vmult(P.shapeOffsets[Q],N),N.vadd(P.position,N),this.intersectShape(K,rt,N,P),this.result._shouldStop))break}},o.prototype.intersectBodies=function(P,C){C&&(this.result=C,this._updateDirection());for(var E=0,N=P.length;!this.result._shouldStop&&E<N;E++)this.intersectBody(P[E])},o.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},o.prototype.intersectShape=function(P,C,E,N){var rt=this.from,Q=O(rt,this._direction,E);if(!(Q>P.boundingSphereRadius)){var X=this[P.type];X&&X.call(this,P,C,E,N)}},new i,new i;var _=new i,y=new i,w=new i,R=new i;new i,new c,o.prototype.intersectBox=function(P,C,E,N){return this.intersectConvex(P.convexPolyhedronRepresentation,C,E,N)},o.prototype[u.types.BOX]=o.prototype.intersectBox,o.prototype.intersectPlane=function(P,C,E,N){var rt=this.from,Q=this.to,X=this._direction,K=new i(0,0,1);C.vmult(K,K);var ht=new i;rt.vsub(E,ht);var Mt=ht.dot(K);Q.vsub(E,ht);var mt=ht.dot(K);if(!(Mt*mt>0)&&!(rt.distanceTo(Q)<Mt)){var St=K.dot(X);if(!(Math.abs(St)<this.precision)){var ct=new i,vt=new i,Ht=new i;rt.vsub(E,ct);var Bt=-K.dot(ct)/St;X.scale(Bt,vt),rt.vadd(vt,Ht),this.reportIntersection(K,Ht,P,N,-1)}}},o.prototype[u.types.PLANE]=o.prototype.intersectPlane,o.prototype.getAABB=function(P){var C=this.to,E=this.from;P.lowerBound.x=Math.min(C.x,E.x),P.lowerBound.y=Math.min(C.y,E.y),P.lowerBound.z=Math.min(C.z,E.z),P.upperBound.x=Math.max(C.x,E.x),P.upperBound.y=Math.max(C.y,E.y),P.upperBound.z=Math.max(C.z,E.z)};var H={faceList:[0]};o.prototype.intersectHeightfield=function(P,C,E,N){P.data,P.elementSize;var rt=new i,Q=new o(this.from,this.to);s.pointToLocalFrame(E,C,Q.from,Q.from),s.pointToLocalFrame(E,C,Q.to,Q.to);var X=[],K=null,ht=null,Mt=null,mt=null,St=P.getIndexOfPosition(Q.from.x,Q.from.y,X,!1);if(St&&(K=X[0],ht=X[1],Mt=X[0],mt=X[1]),St=P.getIndexOfPosition(Q.to.x,Q.to.y,X,!1),St&&((K===null||X[0]<K)&&(K=X[0]),(Mt===null||X[0]>Mt)&&(Mt=X[0]),(ht===null||X[1]<ht)&&(ht=X[1]),(mt===null||X[1]>mt)&&(mt=X[1])),K!==null){var ct=[];P.getRectMinMax(K,ht,Mt,mt,ct),ct[0],ct[1];for(var vt=K;vt<=Mt;vt++)for(var Ht=ht;Ht<=mt;Ht++){if(this.result._shouldStop||(P.getConvexTrianglePillar(vt,Ht,!1),s.pointToWorldFrame(E,C,P.pillarOffset,rt),this.intersectConvex(P.pillarConvex,C,rt,N,H),this.result._shouldStop))return;P.getConvexTrianglePillar(vt,Ht,!0),s.pointToWorldFrame(E,C,P.pillarOffset,rt),this.intersectConvex(P.pillarConvex,C,rt,N,H)}}},o.prototype[u.types.HEIGHTFIELD]=o.prototype.intersectHeightfield;var b=new i,T=new i;o.prototype.intersectSphere=function(P,C,E,N){var rt=this.from,Q=this.to,X=P.radius,K=Math.pow(Q.x-rt.x,2)+Math.pow(Q.y-rt.y,2)+Math.pow(Q.z-rt.z,2),ht=2*((Q.x-rt.x)*(rt.x-E.x)+(Q.y-rt.y)*(rt.y-E.y)+(Q.z-rt.z)*(rt.z-E.z)),Mt=Math.pow(rt.x-E.x,2)+Math.pow(rt.y-E.y,2)+Math.pow(rt.z-E.z,2)-Math.pow(X,2),mt=Math.pow(ht,2)-4*K*Mt,St=b,ct=T;if(!(mt<0))if(mt===0)rt.lerp(Q,mt,St),St.vsub(E,ct),ct.normalize(),this.reportIntersection(ct,St,P,N,-1);else{var vt=(-ht-Math.sqrt(mt))/(2*K),Ht=(-ht+Math.sqrt(mt))/(2*K);if(vt>=0&&vt<=1&&(rt.lerp(Q,vt,St),St.vsub(E,ct),ct.normalize(),this.reportIntersection(ct,St,P,N,-1)),this.result._shouldStop)return;Ht>=0&&Ht<=1&&(rt.lerp(Q,Ht,St),St.vsub(E,ct),ct.normalize(),this.reportIntersection(ct,St,P,N,-1))}},o.prototype[u.types.SPHERE]=o.prototype.intersectSphere;var L=new i;new i,new i;var D=new i;o.prototype.intersectConvex=function(C,E,N,rt,Q){for(var X=L,K=D,ht=Q&&Q.faceList||null,Mt=C.faces,mt=C.vertices,St=C.faceNormals,ct=this._direction,vt=this.from,Ht=this.to,Bt=vt.distanceTo(Ht),Wt=ht?ht.length:Mt.length,Lt=this.result,Xt=0;!Lt._shouldStop&&Xt<Wt;Xt++){var I=ht?ht[Xt]:Xt,S=Mt[I],nt=St[I],ft=E,xt=N;K.copy(mt[S[0]]),ft.vmult(K,K),K.vadd(xt,K),K.vsub(vt,K),ft.vmult(nt,X);var _t=ct.dot(X);if(!(Math.abs(_t)<this.precision)){var Nt=X.dot(K)/_t;if(!(Nt<0)){ct.mult(Nt,_),_.vadd(vt,_),y.copy(mt[S[0]]),ft.vmult(y,y),xt.vadd(y,y);for(var W=1;!Lt._shouldStop&&W<S.length-1;W++){w.copy(mt[S[W]]),R.copy(mt[S[W+1]]),ft.vmult(w,w),ft.vmult(R,R),xt.vadd(w,w),xt.vadd(R,R);var tt=_.distanceTo(vt);!(f(_,y,w,R)||f(_,w,y,R))||tt>Bt||this.reportIntersection(X,_,C,rt,I)}}}}},o.prototype[u.types.CONVEXPOLYHEDRON]=o.prototype.intersectConvex;var q=new i,F=new i,V=new i,Y=new i,it=new i,G=new i;new l;var z=[],J=new s;o.prototype.intersectTrimesh=function(C,E,N,rt,Q){var X=q,K=z,ht=J,Mt=D,mt=F,St=V,ct=Y,vt=G,Ht=it;Q&&Q.faceList;var Bt=C.indices;C.vertices,C.faceNormals;var Wt=this.from,Lt=this.to,Xt=this._direction;ht.position.copy(N),ht.quaternion.copy(E),s.vectorToLocalFrame(N,E,Xt,mt),s.pointToLocalFrame(N,E,Wt,St),s.pointToLocalFrame(N,E,Lt,ct);var I=St.distanceSquared(ct);C.tree.rayQuery(this,ht,K);for(var S=0,nt=K.length;!this.result._shouldStop&&S!==nt;S++){var ft=K[S];C.getNormal(ft,X),C.getVertex(Bt[ft*3],y),y.vsub(St,Mt);var xt=mt.dot(X),_t=X.dot(Mt)/xt;if(!(_t<0)){mt.scale(_t,_),_.vadd(St,_),C.getVertex(Bt[ft*3+1],w),C.getVertex(Bt[ft*3+2],R);var Nt=_.distanceSquared(St);!(f(_,w,y,R)||f(_,y,w,R))||Nt>I||(s.vectorToWorldFrame(E,X,Ht),s.pointToWorldFrame(N,E,_,vt),this.reportIntersection(Ht,vt,C,rt,ft))}}K.length=0},o.prototype[u.types.TRIMESH]=o.prototype.intersectTrimesh,o.prototype.reportIntersection=function(P,C,E,N,rt){var Q=this.from,X=this.to,K=Q.distanceTo(C),ht=this.result;if(!(this.skipBackfaces&&P.dot(this._direction)>0))switch(ht.hitFaceIndex=typeof rt<"u"?rt:-1,this.mode){case o.ALL:this.hasHit=!0,ht.set(Q,X,P,C,E,N,K),ht.hasHit=!0,this.callback(ht);break;case o.CLOSEST:(K<ht.distance||!ht.hasHit)&&(this.hasHit=!0,ht.hasHit=!0,ht.set(Q,X,P,C,E,N,K));break;case o.ANY:this.hasHit=!0,ht.hasHit=!0,ht.set(Q,X,P,C,E,N,K),ht._shouldStop=!0;break}};var $=new i,A=new i;function O(P,C,E){E.vsub(P,$);var N=$.dot(C);C.mult(N,A),A.vadd(P,A);var rt=E.distanceTo(A);return rt}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,a){var i=e("../math/Vec3");n.exports=r;function r(){this.rayFromWorld=new i,this.rayToWorld=new i,this.hitNormalWorld=new i,this.hitPointWorld=new i,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}r.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},r.prototype.abort=function(){this._shouldStop=!0},r.prototype.set=function(s,c,u,l,o,h,p){this.rayFromWorld.copy(s),this.rayToWorld.copy(c),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(l),this.shape=o,this.body=h,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,a){e("../shapes/Shape");var i=e("../collision/Broadphase");n.exports=r;function r(s){i.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(u){c.push(u.body)},this._removeBodyHandler=function(u){var l=c.indexOf(u.body);l!==-1&&c.splice(l,1)},s&&this.setWorld(s)}r.prototype=new i,r.prototype.setWorld=function(s){this.axisList.length=0;for(var c=0;c<s.bodies.length;c++)this.axisList.push(s.bodies[c]);s.removeEventListener("addBody",this._addBodyHandler),s.removeEventListener("removeBody",this._removeBodyHandler),s.addEventListener("addBody",this._addBodyHandler),s.addEventListener("removeBody",this._removeBodyHandler),this.world=s,this.dirty=!0},r.insertionSortX=function(s){for(var c=1,u=s.length;c<u;c++){for(var l=s[c],o=c-1;o>=0&&!(s[o].aabb.lowerBound.x<=l.aabb.lowerBound.x);o--)s[o+1]=s[o];s[o+1]=l}return s},r.insertionSortY=function(s){for(var c=1,u=s.length;c<u;c++){for(var l=s[c],o=c-1;o>=0&&!(s[o].aabb.lowerBound.y<=l.aabb.lowerBound.y);o--)s[o+1]=s[o];s[o+1]=l}return s},r.insertionSortZ=function(s){for(var c=1,u=s.length;c<u;c++){for(var l=s[c],o=c-1;o>=0&&!(s[o].aabb.lowerBound.z<=l.aabb.lowerBound.z);o--)s[o+1]=s[o];s[o+1]=l}return s},r.prototype.collisionPairs=function(s,c,u){var l=this.axisList,o=l.length,h=this.axisIndex,p,g;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==o;p++){var m=l[p];for(g=p+1;g<o;g++){var f=l[g];if(this.needBroadphaseCollision(m,f)){if(!r.checkBounds(m,f,h))break;this.intersectionTest(m,f,c,u)}}}},r.prototype.sortList=function(){for(var s=this.axisList,c=this.axisIndex,u=s.length,l=0;l!==u;l++){var o=s[l];o.aabbNeedsUpdate&&o.computeAABB()}c===0?r.insertionSortX(s):c===1?r.insertionSortY(s):c===2&&r.insertionSortZ(s)},r.checkBounds=function(s,c,u){var l,o;u===0?(l=s.position.x,o=c.position.x):u===1?(l=s.position.y,o=c.position.y):u===2&&(l=s.position.z,o=c.position.z);var h=s.boundingRadius,p=c.boundingRadius,g=l+h,m=o-p;return m<g},r.prototype.autoDetectAxis=function(){for(var s=0,c=0,u=0,l=0,o=0,h=0,p=this.axisList,g=p.length,m=1/g,f=0;f!==g;f++){var v=p[f],x=v.position.x;s+=x,c+=x*x;var _=v.position.y;u+=_,l+=_*_;var y=v.position.z;o+=y,h+=y*y}var w=c-s*s*m,R=l-u*u*m,H=h-o*o*m;w>R?w>H?this.axisIndex=0:this.axisIndex=2:R>H?this.axisIndex=1:this.axisIndex=2},r.prototype.aabbQuery=function(s,c,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var l=this.axisIndex,o="x";l===1&&(o="y"),l===2&&(o="z");var h=this.axisList;c.lowerBound[o],c.upperBound[o];for(var p=0;p<h.length;p++){var g=h[p];g.aabbNeedsUpdate&&g.computeAABB(),g.aabb.overlaps(c)&&u.push(g)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,a){n.exports=u,e("./Constraint");var i=e("./PointToPointConstraint"),r=e("../equations/ConeEquation"),s=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(l,o,h){h=h||{};var p=typeof h.maxForce<"u"?h.maxForce:1e6,g=h.pivotA?h.pivotA.clone():new c,m=h.pivotB?h.pivotB.clone():new c;this.axisA=h.axisA?h.axisA.clone():new c,this.axisB=h.axisB?h.axisB.clone():new c,i.call(this,l,g,o,m,p),this.collideConnected=!!h.collideConnected,this.angle=typeof h.angle<"u"?h.angle:0;var f=this.coneEquation=new r(l,o,h),v=this.twistEquation=new s(l,o,h);this.twistAngle=typeof h.twistAngle<"u"?h.twistAngle:0,f.maxForce=0,f.minForce=-p,v.maxForce=0,v.minForce=-p,this.equations.push(f,v)}u.prototype=new i,u.constructor=u,new c,new c,u.prototype.update=function(){var l=this.bodyA,o=this.bodyB,h=this.coneEquation,p=this.twistEquation;i.prototype.update.call(this),l.vectorToWorldFrame(this.axisA,h.axisA),o.vectorToWorldFrame(this.axisB,h.axisB),this.axisA.tangents(p.axisA,p.axisA),l.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),o.vectorToWorldFrame(p.axisB,p.axisB),h.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,a){n.exports=r;var i=e("../utils/Utils");function r(s,c,u){u=i.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=s,this.bodyB=c,this.id=r.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(s&&s.wakeUp(),c&&c.wakeUp())}r.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},r.prototype.enable=function(){for(var s=this.equations,c=0;c<s.length;c++)s[c].enabled=!0},r.prototype.disable=function(){for(var s=this.equations,c=0;c<s.length;c++)s[c].enabled=!1},r.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,a){n.exports=s;var i=e("./Constraint"),r=e("../equations/ContactEquation");function s(c,u,l,o){i.call(this,c,u),typeof l>"u"&&(l=c.position.distanceTo(u.position)),typeof o>"u"&&(o=1e6),this.distance=l;var h=this.distanceEquation=new r(c,u);this.equations.push(h),h.minForce=-o,h.maxForce=o}s.prototype=new i,s.prototype.update=function(){var c=this.bodyA,u=this.bodyB,l=this.distanceEquation,o=this.distance*.5,h=l.ni;u.position.vsub(c.position,h),h.normalize(),h.mult(o,l.ri),h.mult(-o,l.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,a){n.exports=u,e("./Constraint");var i=e("./PointToPointConstraint"),r=e("../equations/RotationalEquation"),s=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(h,p,g){g=g||{};var m=typeof g.maxForce<"u"?g.maxForce:1e6,f=g.pivotA?g.pivotA.clone():new c,v=g.pivotB?g.pivotB.clone():new c;i.call(this,h,f,p,v,m);var x=this.axisA=g.axisA?g.axisA.clone():new c(1,0,0);x.normalize();var _=this.axisB=g.axisB?g.axisB.clone():new c(1,0,0);_.normalize();var y=this.rotationalEquation1=new r(h,p,g),w=this.rotationalEquation2=new r(h,p,g),R=this.motorEquation=new s(h,p,m);R.enabled=!1,this.equations.push(y,w,R)}u.prototype=new i,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(h){this.motorEquation.targetVelocity=h},u.prototype.setMotorMaxForce=function(h){this.motorEquation.maxForce=h,this.motorEquation.minForce=-h};var l=new c,o=new c;u.prototype.update=function(){var h=this.bodyA,p=this.bodyB,g=this.motorEquation,m=this.rotationalEquation1,f=this.rotationalEquation2,v=l,x=o,_=this.axisA,y=this.axisB;i.prototype.update.call(this),h.quaternion.vmult(_,v),p.quaternion.vmult(y,x),v.tangents(m.axisA,f.axisA),m.axisB.copy(x),f.axisB.copy(x),this.motorEquation.enabled&&(h.quaternion.vmult(this.axisA,g.axisA),p.quaternion.vmult(this.axisB,g.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,a){n.exports=c,e("./Constraint");var i=e("./PointToPointConstraint"),r=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var s=e("../math/Vec3");function c(u,l,o){o=o||{};var h=typeof o.maxForce<"u"?o.maxForce:1e6,p=new s,g=new s,m=new s;u.position.vadd(l.position,m),m.scale(.5,m),l.pointToLocalFrame(m,g),u.pointToLocalFrame(m,p),i.call(this,u,p,l,g,h);var f=this.rotationalEquation1=new r(u,l,o),v=this.rotationalEquation2=new r(u,l,o),x=this.rotationalEquation3=new r(u,l,o);this.equations.push(f,v,x)}c.prototype=new i,c.constructor=c,new s,new s,c.prototype.update=function(){var u=this.bodyA,l=this.bodyB;this.motorEquation;var o=this.rotationalEquation1,h=this.rotationalEquation2,p=this.rotationalEquation3;i.prototype.update.call(this),u.vectorToWorldFrame(s.UNIT_X,o.axisA),l.vectorToWorldFrame(s.UNIT_Y,o.axisB),u.vectorToWorldFrame(s.UNIT_Y,h.axisA),l.vectorToWorldFrame(s.UNIT_Z,h.axisB),u.vectorToWorldFrame(s.UNIT_Z,p.axisA),l.vectorToWorldFrame(s.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,a){n.exports=c;var i=e("./Constraint"),r=e("../equations/ContactEquation"),s=e("../math/Vec3");function c(u,l,o,h,p){i.call(this,u,o),p=typeof p<"u"?p:1e6,this.pivotA=l?l.clone():new s,this.pivotB=h?h.clone():new s;var g=this.equationX=new r(u,o),m=this.equationY=new r(u,o),f=this.equationZ=new r(u,o);this.equations.push(g,m,f),g.minForce=m.minForce=f.minForce=-p,g.maxForce=m.maxForce=f.maxForce=p,g.ni.set(1,0,0),m.ni.set(0,1,0),f.ni.set(0,0,1)}c.prototype=new i,c.prototype.update=function(){var u=this.bodyA,l=this.bodyB,o=this.equationX,h=this.equationY,p=this.equationZ;u.quaternion.vmult(this.pivotA,o.ri),l.quaternion.vmult(this.pivotB,o.rj),h.ri.copy(o.ri),h.rj.copy(o.rj),p.ri.copy(o.ri),p.rj.copy(o.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,a){n.exports=s;var i=e("../math/Vec3");e("../math/Mat3");var r=e("./Equation");function s(l,o,h){h=h||{};var p=typeof h.maxForce<"u"?h.maxForce:1e6;r.call(this,l,o,-p,p),this.axisA=h.axisA?h.axisA.clone():new i(1,0,0),this.axisB=h.axisB?h.axisB.clone():new i(0,1,0),this.angle=typeof h.angle<"u"?h.angle:0}s.prototype=new r,s.prototype.constructor=s;var c=new i,u=new i;s.prototype.computeB=function(l){var o=this.a,h=this.b,p=this.axisA,g=this.axisB,m=c,f=u,v=this.jacobianElementA,x=this.jacobianElementB;p.cross(g,m),g.cross(p,f),v.rotational.copy(f),x.rotational.copy(m);var _=Math.cos(this.angle)-p.dot(g),y=this.computeGW(),w=this.computeGiMf(),R=-_*o-y*h-l*w;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,a){n.exports=s;var i=e("./Equation"),r=e("../math/Vec3");e("../math/Mat3");function s(f,v,x){x=typeof x<"u"?x:1e6,i.call(this,f,v,0,x),this.restitution=0,this.ri=new r,this.rj=new r,this.ni=new r}s.prototype=new i,s.prototype.constructor=s;var c=new r,u=new r,l=new r;s.prototype.computeB=function(f){var v=this.a,x=this.b,_=this.bi,y=this.bj,w=this.ri,R=this.rj,H=c,b=u,T=_.velocity,L=_.angularVelocity;_.force,_.torque;var D=y.velocity,q=y.angularVelocity;y.force,y.torque;var F=l,V=this.jacobianElementA,Y=this.jacobianElementB,it=this.ni;w.cross(it,H),R.cross(it,b),it.negate(V.spatial),H.negate(V.rotational),Y.spatial.copy(it),Y.rotational.copy(b),F.copy(y.position),F.vadd(R,F),F.vsub(_.position,F),F.vsub(w,F);var G=it.dot(F),z=this.restitution+1,J=z*D.dot(it)-z*T.dot(it)+q.dot(b)-L.dot(H),$=this.computeGiMf(),A=-G*v-J*x-f*$;return A};var o=new r,h=new r,p=new r,g=new r,m=new r;s.prototype.getImpactVelocityAlongNormal=function(){var f=o,v=h,x=p,_=g,y=m;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,_),this.bi.getVelocityAtWorldPoint(x,f),this.bj.getVelocityAtWorldPoint(_,v),f.vsub(v,y),this.ni.dot(y)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,a){n.exports=s;var i=e("../math/JacobianElement"),r=e("../math/Vec3");function s(m,f,v,x){this.id=s.id++,this.minForce=typeof v>"u"?-1e6:v,this.maxForce=typeof x>"u"?1e6:x,this.bi=m,this.bj=f,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new i,this.jacobianElementB=new i,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}s.prototype.constructor=s,s.id=0,s.prototype.setSpookParams=function(m,f,v){var x=f,_=m,y=v;this.a=4/(y*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(y*y*_*(1+4*x))},s.prototype.computeB=function(m,f,v){var x=this.computeGW(),_=this.computeGq(),y=this.computeGiMf();return-_*m-x*f-y*v},s.prototype.computeGq=function(){var m=this.jacobianElementA,f=this.jacobianElementB,v=this.bi,x=this.bj,_=v.position,y=x.position;return m.spatial.dot(_)+f.spatial.dot(y)};var c=new r;s.prototype.computeGW=function(){var m=this.jacobianElementA,f=this.jacobianElementB,v=this.bi,x=this.bj,_=v.velocity,y=x.velocity,w=v.angularVelocity||c,R=x.angularVelocity||c;return m.multiplyVectors(_,w)+f.multiplyVectors(y,R)},s.prototype.computeGWlambda=function(){var m=this.jacobianElementA,f=this.jacobianElementB,v=this.bi,x=this.bj,_=v.vlambda,y=x.vlambda,w=v.wlambda||c,R=x.wlambda||c;return m.multiplyVectors(_,w)+f.multiplyVectors(y,R)};var u=new r,l=new r,o=new r,h=new r;s.prototype.computeGiMf=function(){var m=this.jacobianElementA,f=this.jacobianElementB,v=this.bi,x=this.bj,_=v.force,y=v.torque,w=x.force,R=x.torque,H=v.invMassSolve,b=x.invMassSolve;return v.invInertiaWorldSolve?v.invInertiaWorldSolve.vmult(y,o):o.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(R,h):h.set(0,0,0),_.mult(H,u),w.mult(b,l),m.multiplyVectors(u,o)+f.multiplyVectors(l,h)};var p=new r;s.prototype.computeGiMGt=function(){var m=this.jacobianElementA,f=this.jacobianElementB,v=this.bi,x=this.bj,_=v.invMassSolve,y=x.invMassSolve,w=v.invInertiaWorldSolve,R=x.invInertiaWorldSolve,H=_+y;return w&&(w.vmult(m.rotational,p),H+=p.dot(m.rotational)),R&&(R.vmult(f.rotational,p),H+=p.dot(f.rotational)),H};var g=new r;new r,new r,new r,new r,new r,s.prototype.addToWlambda=function(m){var f=this.jacobianElementA,v=this.jacobianElementB,x=this.bi,_=this.bj,y=g;f.spatial.mult(x.invMassSolve*m,y),x.vlambda.vadd(y,x.vlambda),v.spatial.mult(_.invMassSolve*m,y),_.vlambda.vadd(y,_.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(f.rotational,y),y.mult(m,y),x.wlambda.vadd(y,x.wlambda)),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(v.rotational,y),y.mult(m,y),_.wlambda.vadd(y,_.wlambda))},s.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,a){n.exports=s;var i=e("./Equation"),r=e("../math/Vec3");e("../math/Mat3");function s(l,o,h){i.call(this,l,o,-h,h),this.ri=new r,this.rj=new r,this.t=new r}s.prototype=new i,s.prototype.constructor=s;var c=new r,u=new r;s.prototype.computeB=function(l){this.a;var o=this.b;this.bi,this.bj;var h=this.ri,p=this.rj,g=c,m=u,f=this.t;h.cross(f,g),p.cross(f,m);var v=this.jacobianElementA,x=this.jacobianElementB;f.negate(v.spatial),g.negate(v.rotational),x.spatial.copy(f),x.rotational.copy(m);var _=this.computeGW(),y=this.computeGiMf(),w=-_*o-l*y;return w}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,a){n.exports=s;var i=e("../math/Vec3");e("../math/Mat3");var r=e("./Equation");function s(l,o,h){h=h||{};var p=typeof h.maxForce<"u"?h.maxForce:1e6;r.call(this,l,o,-p,p),this.axisA=h.axisA?h.axisA.clone():new i(1,0,0),this.axisB=h.axisB?h.axisB.clone():new i(0,1,0),this.maxAngle=Math.PI/2}s.prototype=new r,s.prototype.constructor=s;var c=new i,u=new i;s.prototype.computeB=function(l){var o=this.a,h=this.b,p=this.axisA,g=this.axisB,m=c,f=u,v=this.jacobianElementA,x=this.jacobianElementB;p.cross(g,m),g.cross(p,f),v.rotational.copy(f),x.rotational.copy(m);var _=Math.cos(this.maxAngle)-p.dot(g),y=this.computeGW(),w=this.computeGiMf(),R=-_*o-y*h-l*w;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,a){n.exports=s;var i=e("../math/Vec3");e("../math/Mat3");var r=e("./Equation");function s(c,u,l){l=typeof l<"u"?l:1e6,r.call(this,c,u,-l,l),this.axisA=new i,this.axisB=new i,this.targetVelocity=0}s.prototype=new r,s.prototype.constructor=s,s.prototype.computeB=function(c){this.a;var u=this.b;this.bi,this.bj;var l=this.axisA,o=this.axisB,h=this.jacobianElementA,p=this.jacobianElementB;h.rotational.copy(l),o.negate(p.rotational);var g=this.computeGW()-this.targetVelocity,m=this.computeGiMf(),f=-g*u-c*m;return f}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,a){var i=e("../utils/Utils");n.exports=r;function r(s,c,u){u=i.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=r.idCounter++,this.materials=[s,c],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}r.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,a){n.exports=i;function i(r){var s="";r=r||{},typeof r=="string"?(s=r,r={}):typeof r=="object"&&(s=""),this.name=s,this.id=i.idCounter++,this.friction=typeof r.friction<"u"?r.friction:-1,this.restitution=typeof r.restitution<"u"?r.restitution:-1}i.idCounter=0},{}],26:[function(e,n,a){n.exports=r;var i=e("./Vec3");function r(){this.spatial=new i,this.rotational=new i}r.prototype.multiplyElement=function(s){return s.spatial.dot(this.spatial)+s.rotational.dot(this.rotational)},r.prototype.multiplyVectors=function(s,c){return s.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,a){n.exports=r;var i=e("./Vec3");function r(s){s?this.elements=s:this.elements=[0,0,0,0,0,0,0,0,0]}r.prototype.identity=function(){var s=this.elements;s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=1,s[5]=0,s[6]=0,s[7]=0,s[8]=1},r.prototype.setZero=function(){var s=this.elements;s[0]=0,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=0,s[6]=0,s[7]=0,s[8]=0},r.prototype.setTrace=function(s){var c=this.elements;c[0]=s.x,c[4]=s.y,c[8]=s.z},r.prototype.getTrace=function(c){var c=c||new i,u=this.elements;c.x=u[0],c.y=u[4],c.z=u[8]},r.prototype.vmult=function(s,c){c=c||new i;var u=this.elements,l=s.x,o=s.y,h=s.z;return c.x=u[0]*l+u[1]*o+u[2]*h,c.y=u[3]*l+u[4]*o+u[5]*h,c.z=u[6]*l+u[7]*o+u[8]*h,c},r.prototype.smult=function(s){for(var c=0;c<this.elements.length;c++)this.elements[c]*=s},r.prototype.mmult=function(s,c){for(var u=c||new r,l=0;l<3;l++)for(var o=0;o<3;o++){for(var h=0,p=0;p<3;p++)h+=s.elements[l+p*3]*this.elements[p+o*3];u.elements[l+o*3]=h}return u},r.prototype.scale=function(s,c){c=c||new r;for(var u=this.elements,l=c.elements,o=0;o!==3;o++)l[3*o+0]=s.x*u[3*o+0],l[3*o+1]=s.y*u[3*o+1],l[3*o+2]=s.z*u[3*o+2];return c},r.prototype.solve=function(s,c){c=c||new i;for(var u=3,l=4,o=[],h=0;h<u*l;h++)o.push(0);var h,p;for(h=0;h<3;h++)for(p=0;p<3;p++)o[h+l*p]=this.elements[h+3*p];o[3+4*0]=s.x,o[3+4*1]=s.y,o[3+4*2]=s.z;var g=3,m=g,f,v=4,x;do{if(h=m-g,o[h+l*h]===0){for(p=h+1;p<m;p++)if(o[h+l*p]!==0){f=v;do x=v-f,o[x+l*h]+=o[x+l*p];while(--f);break}}if(o[h+l*h]!==0)for(p=h+1;p<m;p++){var _=o[h+l*p]/o[h+l*h];f=v;do x=v-f,o[x+l*p]=x<=h?0:o[x+l*p]-o[x+l*h]*_;while(--f)}}while(--g);if(c.z=o[2*l+3]/o[2*l+2],c.y=(o[1*l+3]-o[1*l+2]*c.z)/o[1*l+1],c.x=(o[0*l+3]-o[0*l+2]*c.z-o[0*l+1]*c.y)/o[0*l+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+s.toString()+"], A=["+this.toString()+"]";return c},r.prototype.e=function(s,c,u){if(u===void 0)return this.elements[c+3*s];this.elements[c+3*s]=u},r.prototype.copy=function(s){for(var c=0;c<s.elements.length;c++)this.elements[c]=s.elements[c];return this},r.prototype.toString=function(){for(var s="",c=",",u=0;u<9;u++)s+=this.elements[u]+c;return s},r.prototype.reverse=function(s){s=s||new r;for(var c=3,u=6,l=[],o=0;o<c*u;o++)l.push(0);var o,h;for(o=0;o<3;o++)for(h=0;h<3;h++)l[o+u*h]=this.elements[o+3*h];l[3+6*0]=1,l[3+6*1]=0,l[3+6*2]=0,l[4+6*0]=0,l[4+6*1]=1,l[4+6*2]=0,l[5+6*0]=0,l[5+6*1]=0,l[5+6*2]=1;var p=3,g=p,m,f=u,v;do{if(o=g-p,l[o+u*o]===0){for(h=o+1;h<g;h++)if(l[o+u*h]!==0){m=f;do v=f-m,l[v+u*o]+=l[v+u*h];while(--m);break}}if(l[o+u*o]!==0)for(h=o+1;h<g;h++){var x=l[o+u*h]/l[o+u*o];m=f;do v=f-m,l[v+u*h]=v<=o?0:l[v+u*h]-l[v+u*o]*x;while(--m)}}while(--p);o=2;do{h=o-1;do{var x=l[o+u*h]/l[o+u*o];m=u;do v=u-m,l[v+u*h]=l[v+u*h]-l[v+u*o]*x;while(--m)}while(h--)}while(--o);o=2;do{var x=1/l[o+u*o];m=u;do v=u-m,l[v+u*o]=l[v+u*o]*x;while(--m)}while(o--);o=2;do{h=2;do{if(v=l[c+h+u*o],isNaN(v)||v===1/0)throw"Could not reverse! A=["+this.toString()+"]";s.e(o,h,v)}while(h--)}while(o--);return s},r.prototype.setRotationFromQuaternion=function(s){var c=s.x,u=s.y,l=s.z,o=s.w,h=c+c,p=u+u,g=l+l,m=c*h,f=c*p,v=c*g,x=u*p,_=u*g,y=l*g,w=o*h,R=o*p,H=o*g,b=this.elements;return b[3*0+0]=1-(x+y),b[3*0+1]=f-H,b[3*0+2]=v+R,b[3*1+0]=f+H,b[3*1+1]=1-(m+y),b[3*1+2]=_-w,b[3*2+0]=v-R,b[3*2+1]=_+w,b[3*2+2]=1-(m+x),this},r.prototype.transpose=function(s){s=s||new r;for(var c=s.elements,u=this.elements,l=0;l!==3;l++)for(var o=0;o!==3;o++)c[3*l+o]=u[3*o+l];return s}},{"./Vec3":30}],28:[function(e,n,a){n.exports=r;var i=e("./Vec3");function r(h,p,g,m){this.x=h!==void 0?h:0,this.y=p!==void 0?p:0,this.z=g!==void 0?g:0,this.w=m!==void 0?m:1}r.prototype.set=function(h,p,g,m){this.x=h,this.y=p,this.z=g,this.w=m},r.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},r.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},r.prototype.setFromAxisAngle=function(h,p){var g=Math.sin(p*.5);this.x=h.x*g,this.y=h.y*g,this.z=h.z*g,this.w=Math.cos(p*.5)},r.prototype.toAxisAngle=function(h){h=h||new i,this.normalize();var p=2*Math.acos(this.w),g=Math.sqrt(1-this.w*this.w);return g<.001?(h.x=this.x,h.y=this.y,h.z=this.z):(h.x=this.x/g,h.y=this.y/g,h.z=this.z/g),[h,p]};var s=new i,c=new i;r.prototype.setFromVectors=function(h,p){if(h.isAntiparallelTo(p)){var g=s,m=c;h.tangents(g,m),this.setFromAxisAngle(g,Math.PI)}else{var f=h.cross(p);this.x=f.x,this.y=f.y,this.z=f.z,this.w=Math.sqrt(Math.pow(h.norm(),2)*Math.pow(p.norm(),2))+h.dot(p),this.normalize()}};var u=new i,l=new i,o=new i;r.prototype.mult=function(h,p){p=p||new r;var g=this.w,m=u,f=l,v=o;return m.set(this.x,this.y,this.z),f.set(h.x,h.y,h.z),p.w=g*h.w-m.dot(f),m.cross(f,v),p.x=g*f.x+h.w*m.x+v.x,p.y=g*f.y+h.w*m.y+v.y,p.z=g*f.z+h.w*m.z+v.z,p},r.prototype.inverse=function(h){var p=this.x,g=this.y,m=this.z,f=this.w;h=h||new r,this.conjugate(h);var v=1/(p*p+g*g+m*m+f*f);return h.x*=v,h.y*=v,h.z*=v,h.w*=v,h},r.prototype.conjugate=function(h){return h=h||new r,h.x=-this.x,h.y=-this.y,h.z=-this.z,h.w=this.w,h},r.prototype.normalize=function(){var h=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);h===0?(this.x=0,this.y=0,this.z=0,this.w=0):(h=1/h,this.x*=h,this.y*=h,this.z*=h,this.w*=h)},r.prototype.normalizeFast=function(){var h=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;h===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=h,this.y*=h,this.z*=h,this.w*=h)},r.prototype.vmult=function(h,p){p=p||new i;var g=h.x,m=h.y,f=h.z,v=this.x,x=this.y,_=this.z,y=this.w,w=y*g+x*f-_*m,R=y*m+_*g-v*f,H=y*f+v*m-x*g,b=-v*g-x*m-_*f;return p.x=w*y+b*-v+R*-_-H*-x,p.y=R*y+b*-x+H*-v-w*-_,p.z=H*y+b*-_+w*-x-R*-v,p},r.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this.w=h.w,this},r.prototype.toEuler=function(h,p){p=p||"YZX";var g,m,f,v=this.x,x=this.y,_=this.z,y=this.w;switch(p){case"YZX":var w=v*x+_*y;if(w>.499&&(g=2*Math.atan2(v,y),m=Math.PI/2,f=0),w<-.499&&(g=-2*Math.atan2(v,y),m=-Math.PI/2,f=0),isNaN(g)){var R=v*v,H=x*x,b=_*_;g=Math.atan2(2*x*y-2*v*_,1-2*H-2*b),m=Math.asin(2*w),f=Math.atan2(2*v*y-2*x*_,1-2*R-2*b)}break;default:throw new Error("Euler order "+p+" not supported yet.")}h.y=g,h.z=m,h.x=f},r.prototype.setFromEuler=function(h,p,g,m){m=m||"XYZ";var f=Math.cos(h/2),v=Math.cos(p/2),x=Math.cos(g/2),_=Math.sin(h/2),y=Math.sin(p/2),w=Math.sin(g/2);return m==="XYZ"?(this.x=_*v*x+f*y*w,this.y=f*y*x-_*v*w,this.z=f*v*w+_*y*x,this.w=f*v*x-_*y*w):m==="YXZ"?(this.x=_*v*x+f*y*w,this.y=f*y*x-_*v*w,this.z=f*v*w-_*y*x,this.w=f*v*x+_*y*w):m==="ZXY"?(this.x=_*v*x-f*y*w,this.y=f*y*x+_*v*w,this.z=f*v*w+_*y*x,this.w=f*v*x-_*y*w):m==="ZYX"?(this.x=_*v*x-f*y*w,this.y=f*y*x+_*v*w,this.z=f*v*w-_*y*x,this.w=f*v*x+_*y*w):m==="YZX"?(this.x=_*v*x+f*y*w,this.y=f*y*x+_*v*w,this.z=f*v*w-_*y*x,this.w=f*v*x-_*y*w):m==="XZY"&&(this.x=_*v*x-f*y*w,this.y=f*y*x-_*v*w,this.z=f*v*w+_*y*x,this.w=f*v*x+_*y*w),this},r.prototype.clone=function(){return new r(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,a){var i=e("./Vec3"),r=e("./Quaternion");n.exports=s;function s(u){u=u||{},this.position=new i,u.position&&this.position.copy(u.position),this.quaternion=new r,u.quaternion&&this.quaternion.copy(u.quaternion)}var c=new r;s.pointToLocalFrame=function(u,l,o,p){var p=p||new i;return o.vsub(u,p),l.conjugate(c),c.vmult(p,p),p},s.prototype.pointToLocal=function(u,l){return s.pointToLocalFrame(this.position,this.quaternion,u,l)},s.pointToWorldFrame=function(u,l,o,p){var p=p||new i;return l.vmult(o,p),p.vadd(u,p),p},s.prototype.pointToWorld=function(u,l){return s.pointToWorldFrame(this.position,this.quaternion,u,l)},s.prototype.vectorToWorldFrame=function(u,o){var o=o||new i;return this.quaternion.vmult(u,o),o},s.vectorToWorldFrame=function(u,l,o){return u.vmult(l,o),o},s.vectorToLocalFrame=function(u,l,o,p){var p=p||new i;return l.w*=-1,l.vmult(o,p),l.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,a){n.exports=r;var i=e("./Mat3");function r(l,o,h){this.x=l||0,this.y=o||0,this.z=h||0}r.ZERO=new r(0,0,0),r.UNIT_X=new r(1,0,0),r.UNIT_Y=new r(0,1,0),r.UNIT_Z=new r(0,0,1),r.prototype.cross=function(l,o){var h=l.x,p=l.y,g=l.z,m=this.x,f=this.y,v=this.z;return o=o||new r,o.x=f*g-v*p,o.y=v*h-m*g,o.z=m*p-f*h,o},r.prototype.set=function(l,o,h){return this.x=l,this.y=o,this.z=h,this},r.prototype.setZero=function(){this.x=this.y=this.z=0},r.prototype.vadd=function(l,o){if(o)o.x=l.x+this.x,o.y=l.y+this.y,o.z=l.z+this.z;else return new r(this.x+l.x,this.y+l.y,this.z+l.z)},r.prototype.vsub=function(l,o){if(o)o.x=this.x-l.x,o.y=this.y-l.y,o.z=this.z-l.z;else return new r(this.x-l.x,this.y-l.y,this.z-l.z)},r.prototype.crossmat=function(){return new i([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},r.prototype.normalize=function(){var l=this.x,o=this.y,h=this.z,p=Math.sqrt(l*l+o*o+h*h);if(p>0){var g=1/p;this.x*=g,this.y*=g,this.z*=g}else this.x=0,this.y=0,this.z=0;return p},r.prototype.unit=function(l){l=l||new r;var o=this.x,h=this.y,p=this.z,g=Math.sqrt(o*o+h*h+p*p);return g>0?(g=1/g,l.x=o*g,l.y=h*g,l.z=p*g):(l.x=1,l.y=0,l.z=0),l},r.prototype.norm=function(){var l=this.x,o=this.y,h=this.z;return Math.sqrt(l*l+o*o+h*h)},r.prototype.length=r.prototype.norm,r.prototype.norm2=function(){return this.dot(this)},r.prototype.lengthSquared=r.prototype.norm2,r.prototype.distanceTo=function(l){var o=this.x,h=this.y,p=this.z,g=l.x,m=l.y,f=l.z;return Math.sqrt((g-o)*(g-o)+(m-h)*(m-h)+(f-p)*(f-p))},r.prototype.distanceSquared=function(l){var o=this.x,h=this.y,p=this.z,g=l.x,m=l.y,f=l.z;return(g-o)*(g-o)+(m-h)*(m-h)+(f-p)*(f-p)},r.prototype.mult=function(l,o){o=o||new r;var h=this.x,p=this.y,g=this.z;return o.x=l*h,o.y=l*p,o.z=l*g,o},r.prototype.scale=r.prototype.mult,r.prototype.dot=function(l){return this.x*l.x+this.y*l.y+this.z*l.z},r.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},r.prototype.negate=function(l){return l=l||new r,l.x=-this.x,l.y=-this.y,l.z=-this.z,l};var s=new r,c=new r;r.prototype.tangents=function(l,o){var h=this.norm();if(h>0){var p=s,g=1/h;p.set(this.x*g,this.y*g,this.z*g);var m=c;Math.abs(p.x)<.9?(m.set(1,0,0),p.cross(m,l)):(m.set(0,1,0),p.cross(m,l)),p.cross(l,o)}else l.set(1,0,0),o.set(0,1,0)},r.prototype.toString=function(){return this.x+","+this.y+","+this.z},r.prototype.toArray=function(){return[this.x,this.y,this.z]},r.prototype.copy=function(l){return this.x=l.x,this.y=l.y,this.z=l.z,this},r.prototype.lerp=function(l,o,h){var p=this.x,g=this.y,m=this.z;h.x=p+(l.x-p)*o,h.y=g+(l.y-g)*o,h.z=m+(l.z-m)*o},r.prototype.almostEquals=function(l,o){return o===void 0&&(o=1e-6),!(Math.abs(this.x-l.x)>o||Math.abs(this.y-l.y)>o||Math.abs(this.z-l.z)>o)},r.prototype.almostZero=function(l){return l===void 0&&(l=1e-6),!(Math.abs(this.x)>l||Math.abs(this.y)>l||Math.abs(this.z)>l)};var u=new r;r.prototype.isAntiparallelTo=function(l,o){return this.negate(u),u.almostEquals(l,o)},r.prototype.clone=function(){return new r(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,a){n.exports=o;var i=e("../utils/EventTarget");e("../shapes/Shape");var r=e("../math/Vec3"),s=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),l=e("../shapes/Box");function o(D){D=D||{},i.apply(this),this.id=o.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new r,this.collisionFilterGroup=typeof D.collisionFilterGroup=="number"?D.collisionFilterGroup:1,this.collisionFilterMask=typeof D.collisionFilterMask=="number"?D.collisionFilterMask:1,this.collisionResponse=!0,this.position=new r,D.position&&this.position.copy(D.position),this.previousPosition=new r,this.initPosition=new r,this.velocity=new r,D.velocity&&this.velocity.copy(D.velocity),this.initVelocity=new r,this.force=new r;var q=typeof D.mass=="number"?D.mass:0;this.mass=q,this.invMass=q>0?1/q:0,this.material=D.material||null,this.linearDamping=typeof D.linearDamping=="number"?D.linearDamping:.01,this.type=q<=0?o.STATIC:o.DYNAMIC,typeof D.type==typeof o.STATIC&&(this.type=D.type),this.allowSleep=typeof D.allowSleep<"u"?D.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof D.sleepSpeedLimit<"u"?D.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof D.sleepTimeLimit<"u"?D.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new r,this.quaternion=new c,D.quaternion&&this.quaternion.copy(D.quaternion),this.initQuaternion=new c,this.angularVelocity=new r,D.angularVelocity&&this.angularVelocity.copy(D.angularVelocity),this.initAngularVelocity=new r,this.interpolatedPosition=new r,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new r,this.invInertia=new r,this.invInertiaWorld=new s,this.invMassSolve=0,this.invInertiaSolve=new r,this.invInertiaWorldSolve=new s,this.fixedRotation=typeof D.fixedRotation<"u"?D.fixedRotation:!1,this.angularDamping=typeof D.angularDamping<"u"?D.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new r,D.shape&&this.addShape(D.shape),this.updateMassProperties()}o.prototype=new i,o.prototype.constructor=o,o.DYNAMIC=1,o.STATIC=2,o.KINEMATIC=4,o.AWAKE=0,o.SLEEPY=1,o.SLEEPING=2,o.idCounter=0,o.prototype.wakeUp=function(){var D=this.sleepState;this.sleepState=0,D===o.SLEEPING&&this.dispatchEvent({type:"wakeup"})},o.prototype.sleep=function(){this.sleepState=o.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},o.sleepyEvent={type:"sleepy"},o.sleepEvent={type:"sleep"},o.prototype.sleepTick=function(D){if(this.allowSleep){var q=this.sleepState,F=this.velocity.norm2()+this.angularVelocity.norm2(),V=Math.pow(this.sleepSpeedLimit,2);q===o.AWAKE&&F<V?(this.sleepState=o.SLEEPY,this.timeLastSleepy=D,this.dispatchEvent(o.sleepyEvent)):q===o.SLEEPY&&F>V?this.wakeUp():q===o.SLEEPY&&D-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(o.sleepEvent))}},o.prototype.updateSolveMassProperties=function(){this.sleepState===o.SLEEPING||this.type===o.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},o.prototype.pointToLocalFrame=function(D,F){var F=F||new r;return D.vsub(this.position,F),this.quaternion.conjugate().vmult(F,F),F},o.prototype.vectorToLocalFrame=function(D,F){var F=F||new r;return this.quaternion.conjugate().vmult(D,F),F},o.prototype.pointToWorldFrame=function(D,F){var F=F||new r;return this.quaternion.vmult(D,F),F.vadd(this.position,F),F},o.prototype.vectorToWorldFrame=function(D,F){var F=F||new r;return this.quaternion.vmult(D,F),F};var h=new r,p=new c;o.prototype.addShape=function(D,q,F){var V=new r,Y=new c;return q&&V.copy(q),F&&Y.copy(F),this.shapes.push(D),this.shapeOffsets.push(V),this.shapeOrientations.push(Y),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},o.prototype.updateBoundingRadius=function(){for(var D=this.shapes,q=this.shapeOffsets,F=D.length,V=0,Y=0;Y!==F;Y++){var it=D[Y];it.updateBoundingSphereRadius();var G=q[Y].norm(),z=it.boundingSphereRadius;G+z>V&&(V=G+z)}this.boundingRadius=V};var g=new u;o.prototype.computeAABB=function(){for(var D=this.shapes,q=this.shapeOffsets,F=this.shapeOrientations,V=D.length,Y=h,it=p,G=this.quaternion,z=this.aabb,J=g,$=0;$!==V;$++){var A=D[$];F[$].mult(G,it),it.vmult(q[$],Y),Y.vadd(this.position,Y),A.calculateWorldAABB(Y,it,J.lowerBound,J.upperBound),$===0?z.copy(J):z.extend(J)}this.aabbNeedsUpdate=!1};var m=new s,f=new s;new s,o.prototype.updateInertiaWorld=function(D){var q=this.invInertia;if(!(q.x===q.y&&q.y===q.z&&!D)){var F=m,V=f;F.setRotationFromQuaternion(this.quaternion),F.transpose(V),F.scale(q,F),F.mmult(V,this.invInertiaWorld)}};var v=new r,x=new r;o.prototype.applyForce=function(D,q){if(this.type===o.DYNAMIC){var F=v;q.vsub(this.position,F);var V=x;F.cross(D,V),this.force.vadd(D,this.force),this.torque.vadd(V,this.torque)}};var _=new r,y=new r;o.prototype.applyLocalForce=function(D,q){if(this.type===o.DYNAMIC){var F=_,V=y;this.vectorToWorldFrame(D,F),this.pointToWorldFrame(q,V),this.applyForce(F,V)}};var w=new r,R=new r,H=new r;o.prototype.applyImpulse=function(D,q){if(this.type===o.DYNAMIC){var F=w;q.vsub(this.position,F);var V=R;V.copy(D),V.mult(this.invMass,V),this.velocity.vadd(V,this.velocity);var Y=H;F.cross(D,Y),this.invInertiaWorld.vmult(Y,Y),this.angularVelocity.vadd(Y,this.angularVelocity)}};var b=new r,T=new r;o.prototype.applyLocalImpulse=function(D,q){if(this.type===o.DYNAMIC){var F=b,V=T;this.vectorToWorldFrame(D,F),this.pointToWorldFrame(q,V),this.applyImpulse(F,V)}};var L=new r;o.prototype.updateMassProperties=function(){var D=L;this.invMass=this.mass>0?1/this.mass:0;var q=this.inertia,F=this.fixedRotation;this.computeAABB(),D.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),l.calculateInertia(D,this.mass,q),this.invInertia.set(q.x>0&&!F?1/q.x:0,q.y>0&&!F?1/q.y:0,q.z>0&&!F?1/q.z:0),this.updateInertiaWorld(!0)},o.prototype.getVelocityAtWorldPoint=function(D,q){var F=new r;return D.vsub(this.position,F),this.angularVelocity.cross(F,q),this.velocity.vadd(q,q),q}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,a){e("./Body");var i=e("../math/Vec3"),r=e("../math/Quaternion");e("../collision/RaycastResult");var s=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=u;function u(G){this.chassisBody=G.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof G.indexRightAxis<"u"?G.indexRightAxis:1,this.indexForwardAxis=typeof G.indexForwardAxis<"u"?G.indexForwardAxis:0,this.indexUpAxis=typeof G.indexUpAxis<"u"?G.indexUpAxis:2}new i,new i,new i;var l=new i,o=new i,h=new i;new s,u.prototype.addWheel=function(G){G=G||{};var z=new c(G),J=this.wheelInfos.length;return this.wheelInfos.push(z),J},u.prototype.setSteeringValue=function(G,z){var J=this.wheelInfos[z];J.steering=G},new i,u.prototype.applyEngineForce=function(G,z){this.wheelInfos[z].engineForce=G},u.prototype.setBrake=function(G,z){this.wheelInfos[z].brake=G},u.prototype.addToWorld=function(G){this.constraints,G.add(this.chassisBody);var z=this;this.preStepCallback=function(){z.updateVehicle(G.dt)},G.addEventListener("preStep",this.preStepCallback),this.world=G},u.prototype.getVehicleAxisWorld=function(G,z){z.set(G===0?1:0,G===1?1:0,G===2?1:0),this.chassisBody.vectorToWorldFrame(z,z)},u.prototype.updateVehicle=function(G){for(var z=this.wheelInfos,J=z.length,$=this.chassisBody,A=0;A<J;A++)this.updateWheelTransform(A);this.currentVehicleSpeedKmHour=3.6*$.velocity.norm();var O=new i;this.getVehicleAxisWorld(this.indexForwardAxis,O),O.dot($.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var A=0;A<J;A++)this.castRay(z[A]);this.updateSuspension(G);for(var P=new i,C=new i,A=0;A<J;A++){var E=z[A],N=E.suspensionForce;N>E.maxSuspensionForce&&(N=E.maxSuspensionForce),E.raycastResult.hitNormalWorld.scale(N*G,P),E.raycastResult.hitPointWorld.vsub($.position,C),$.applyImpulse(P,E.raycastResult.hitPointWorld)}this.updateFriction(G);var rt=new i,Q=new i,X=new i;for(A=0;A<J;A++){var E=z[A];$.getVelocityAtWorldPoint(E.chassisConnectionPointWorld,X);var K=1;switch(this.indexUpAxis){case 1:K=-1;break}if(E.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,Q);var ht=Q.dot(E.raycastResult.hitNormalWorld);E.raycastResult.hitNormalWorld.scale(ht,rt),Q.vsub(rt,Q);var Mt=Q.dot(X);E.deltaRotation=K*Mt*G/E.radius}(E.sliding||!E.isInContact)&&E.engineForce!==0&&E.useCustomSlidingRotationalSpeed&&(E.deltaRotation=(E.engineForce>0?1:-1)*E.customSlidingRotationalSpeed*G),Math.abs(E.brake)>Math.abs(E.engineForce)&&(E.deltaRotation=0),E.rotation+=E.deltaRotation,E.deltaRotation*=.99}},u.prototype.updateSuspension=function(G){for(var z=this.chassisBody,J=z.mass,$=this.wheelInfos,A=$.length,O=0;O<A;O++){var P=$[O];if(P.isInContact){var C,E=P.suspensionRestLength,N=P.suspensionLength,rt=E-N;C=P.suspensionStiffness*rt*P.clippedInvContactDotSuspension;var Q=P.suspensionRelativeVelocity,X;Q<0?X=P.dampingCompression:X=P.dampingRelaxation,C-=X*Q,P.suspensionForce=C*J,P.suspensionForce<0&&(P.suspensionForce=0)}else P.suspensionForce=0}},u.prototype.removeFromWorld=function(G){this.constraints,G.remove(this.chassisBody),G.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new i,g=new i;u.prototype.castRay=function(G){var z=p,J=g;this.updateWheelTransformWorld(G);var $=this.chassisBody,A=-1,O=G.suspensionRestLength+G.radius;G.directionWorld.scale(O,z);var P=G.chassisConnectionPointWorld;P.vadd(z,J);var C=G.raycastResult;C.reset();var E=$.collisionResponse;$.collisionResponse=!1,this.world.rayTest(P,J,C),$.collisionResponse=E;var N=C.body;if(G.raycastResult.groundObject=0,N){A=C.distance,G.raycastResult.hitNormalWorld=C.hitNormalWorld,G.isInContact=!0;var rt=C.distance;G.suspensionLength=rt-G.radius;var Q=G.suspensionRestLength-G.maxSuspensionTravel,X=G.suspensionRestLength+G.maxSuspensionTravel;G.suspensionLength<Q&&(G.suspensionLength=Q),G.suspensionLength>X&&(G.suspensionLength=X,G.raycastResult.reset());var K=G.raycastResult.hitNormalWorld.dot(G.directionWorld),ht=new i;$.getVelocityAtWorldPoint(G.raycastResult.hitPointWorld,ht);var Mt=G.raycastResult.hitNormalWorld.dot(ht);if(K>=-.1)G.suspensionRelativeVelocity=0,G.clippedInvContactDotSuspension=1/.1;else{var mt=-1/K;G.suspensionRelativeVelocity=Mt*mt,G.clippedInvContactDotSuspension=mt}}else G.suspensionLength=G.suspensionRestLength+0*G.maxSuspensionTravel,G.suspensionRelativeVelocity=0,G.directionWorld.scale(-1,G.raycastResult.hitNormalWorld),G.clippedInvContactDotSuspension=1;return A},u.prototype.updateWheelTransformWorld=function(G){G.isInContact=!1;var z=this.chassisBody;z.pointToWorldFrame(G.chassisConnectionPointLocal,G.chassisConnectionPointWorld),z.vectorToWorldFrame(G.directionLocal,G.directionWorld),z.vectorToWorldFrame(G.axleLocal,G.axleWorld)},u.prototype.updateWheelTransform=function(G){var z=l,J=o,$=h,A=this.wheelInfos[G];this.updateWheelTransformWorld(A),A.directionLocal.scale(-1,z),J.copy(A.axleLocal),z.cross(J,$),$.normalize(),J.normalize();var O=A.steering,P=new r;P.setFromAxisAngle(z,O);var C=new r;C.setFromAxisAngle(J,A.rotation);var E=A.worldTransform.quaternion;this.chassisBody.quaternion.mult(P,E),E.mult(C,E),E.normalize();var N=A.worldTransform.position;N.copy(A.directionWorld),N.scale(A.suspensionLength,N),N.vadd(A.chassisConnectionPointWorld,N)};var m=[new i(1,0,0),new i(0,1,0),new i(0,0,1)];u.prototype.getWheelTransformWorld=function(G){return this.wheelInfos[G].worldTransform};var f=new i,v=[],x=[],_=1;u.prototype.updateFriction=function(G){for(var z=f,J=this.wheelInfos,$=J.length,A=this.chassisBody,O=x,P=v,C=0;C<$;C++){var E=J[C],N=E.raycastResult.body;E.sideImpulse=0,E.forwardImpulse=0,O[C]||(O[C]=new i),P[C]||(P[C]=new i)}for(var C=0;C<$;C++){var E=J[C],N=E.raycastResult.body;if(N){var rt=P[C],Q=this.getWheelTransformWorld(C);Q.vectorToWorldFrame(m[this.indexRightAxis],rt);var X=E.raycastResult.hitNormalWorld,K=rt.dot(X);X.scale(K,z),rt.vsub(z,rt),rt.normalize(),X.cross(rt,O[C]),O[C].normalize(),E.sideImpulse=it(A,E.raycastResult.hitPointWorld,N,E.raycastResult.hitPointWorld,rt),E.sideImpulse*=_}}var ht=1,Mt=.5;this.sliding=!1;for(var C=0;C<$;C++){var E=J[C],N=E.raycastResult.body,mt=0;if(E.slipInfo=1,N){var St=0,ct=E.brake?E.brake:St;mt=H(A,N,E.raycastResult.hitPointWorld,O[C],ct),mt+=E.engineForce*G;var vt=ct/mt;E.slipInfo*=vt}if(E.forwardImpulse=0,E.skidInfo=1,N){E.skidInfo=1;var Ht=E.suspensionForce*G*E.frictionSlip,Bt=Ht,Wt=Ht*Bt;E.forwardImpulse=mt;var Lt=E.forwardImpulse*Mt,Xt=E.sideImpulse*ht,I=Lt*Lt+Xt*Xt;if(E.sliding=!1,I>Wt){this.sliding=!0,E.sliding=!0;var vt=Ht/Math.sqrt(I);E.skidInfo*=vt}}}if(this.sliding)for(var C=0;C<$;C++){var E=J[C];E.sideImpulse!==0&&E.skidInfo<1&&(E.forwardImpulse*=E.skidInfo,E.sideImpulse*=E.skidInfo)}for(var C=0;C<$;C++){var E=J[C],S=new i;if(S.copy(E.raycastResult.hitPointWorld),E.forwardImpulse!==0){var nt=new i;O[C].scale(E.forwardImpulse,nt),A.applyImpulse(nt,S)}if(E.sideImpulse!==0){var N=E.raycastResult.body,ft=new i;ft.copy(E.raycastResult.hitPointWorld);var xt=new i;P[C].scale(E.sideImpulse,xt),A.pointToLocalFrame(S,S),S["xyz"[this.indexUpAxis]]*=E.rollInfluence,A.pointToWorldFrame(S,S),A.applyImpulse(xt,S),xt.scale(-1,xt),N.applyImpulse(xt,ft)}}};var y=new i,w=new i,R=new i;function H(G,z,J,$,A){var O=0,P=J,C=y,E=w,N=R;G.getVelocityAtWorldPoint(P,C),z.getVelocityAtWorldPoint(P,E),C.vsub(E,N);var rt=$.dot(N),Q=q(G,J,$),X=q(z,J,$),K=1,ht=K/(Q+X);return O=-rt*ht,A<O&&(O=A),O<-A&&(O=-A),O}var b=new i,T=new i,L=new i,D=new i;function q(G,z,J){var $=b,A=T,O=L,P=D;return z.vsub(G.position,$),$.cross(J,A),G.invInertiaWorld.vmult(A,P),P.cross($,O),G.invMass+J.dot(O)}var F=new i,V=new i,Y=new i;function it(G,z,J,$,A,K){var P=A.norm2();if(P>1.1)return 0;var C=F,E=V,N=Y;G.getVelocityAtWorldPoint(z,C),J.getVelocityAtWorldPoint($,E),C.vsub(E,N);var rt=A.dot(N),Q=.2,X=1/(G.invMass+J.invMass),K=-Q*rt*X;return K}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,a){var i=e("./Body"),r=e("../shapes/Sphere"),s=e("../shapes/Box"),c=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=l;function l(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new c(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var g=new s(new c(5,2,.5));this.chassisBody=new i(1,g)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}l.prototype.addWheel=function(p){p=p||{};var g=p.body;g||(g=new i(1,new r(1.2))),this.wheelBodies.push(g),this.wheelForces.push(0),new c;var m=typeof p.position<"u"?p.position.clone():new c,f=new c;this.chassisBody.pointToWorldFrame(m,f),g.position.set(f.x,f.y,f.z);var v=typeof p.axis<"u"?p.axis.clone():new c(0,1,0);this.wheelAxes.push(v);var x=new u(this.chassisBody,g,{pivotA:m,axisA:v,pivotB:c.ZERO,axisB:v,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},l.prototype.setSteeringValue=function(p,g){var m=this.wheelAxes[g],f=Math.cos(p),v=Math.sin(p),x=m.x,_=m.y;this.constraints[g].axisA.set(f*x-v*_,v*x+f*_,0)},l.prototype.setMotorSpeed=function(p,g){var m=this.constraints[g];m.enableMotor(),m.motorTargetVelocity=p},l.prototype.disableMotor=function(p){var g=this.constraints[p];g.disableMotor()};var o=new c;l.prototype.setWheelForce=function(p,g){this.wheelForces[g]=p},l.prototype.applyWheelForce=function(p,g){var m=this.wheelAxes[g],f=this.wheelBodies[g],v=f.torque;m.scale(p,o),f.vectorToWorldFrame(o,o),v.vadd(o,v)},l.prototype.addToWorld=function(p){for(var g=this.constraints,m=this.wheelBodies.concat([this.chassisBody]),f=0;f<m.length;f++)p.add(m[f]);for(var f=0;f<g.length;f++)p.addConstraint(g[f]);p.addEventListener("preStep",this._update.bind(this))},l.prototype._update=function(){for(var p=this.wheelForces,g=0;g<p.length;g++)this.applyWheelForce(p[g],g)},l.prototype.removeFromWorld=function(p){for(var g=this.constraints,m=this.wheelBodies.concat([this.chassisBody]),f=0;f<m.length;f++)p.remove(m[f]);for(var f=0;f<g.length;f++)p.removeConstraint(g[f])};var h=new c;l.prototype.getWheelSpeed=function(p){var g=this.wheelAxes[p],m=this.wheelBodies[p],f=m.angularVelocity;return this.chassisBody.vectorToWorldFrame(g,h),f.dot(h)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,a){n.exports=r,e("../shapes/Shape");var i=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function r(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}r.prototype.add=function(g){this.particles.push(g),this.neighbors.length<this.particles.length&&this.neighbors.push([])},r.prototype.remove=function(g){var m=this.particles.indexOf(g);m!==-1&&(this.particles.splice(m,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var s=new i;r.prototype.getNeighbors=function(g,m){for(var f=this.particles.length,v=g.id,x=this.smoothingRadius*this.smoothingRadius,_=s,y=0;y!==f;y++){var w=this.particles[y];w.position.vsub(g.position,_),v!==w.id&&_.norm2()<x&&m.push(w)}};var c=new i,u=new i,l=new i,o=new i,h=new i,p=new i;r.prototype.update=function(){for(var g=this.particles.length,m=c,f=this.speedOfSound,v=this.eps,x=0;x!==g;x++){var _=this.particles[x],y=this.neighbors[x];y.length=0,this.getNeighbors(_,y),y.push(this.particles[x]);for(var w=y.length,R=0,H=0;H!==w;H++){_.position.vsub(y[H].position,m);var b=m.norm(),T=this.w(b);R+=y[H].mass*T}this.densities[x]=R,this.pressures[x]=f*f*(this.densities[x]-this.density)}for(var L=u,D=l,q=o,F=h,V=p,x=0;x!==g;x++){var Y=this.particles[x];L.set(0,0,0),D.set(0,0,0);for(var it,G,y=this.neighbors[x],w=y.length,H=0;H!==w;H++){var z=y[H];Y.position.vsub(z.position,F);var J=F.norm();it=-z.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+v)+this.pressures[H]/(this.densities[H]*this.densities[H]+v)),this.gradw(F,q),q.mult(it,q),L.vadd(q,L),z.velocity.vsub(Y.velocity,V),V.mult(1/(1e-4+this.densities[x]*this.densities[H])*this.viscosity*z.mass,V),G=this.nablaw(J),V.mult(G,V),D.vadd(V,D)}D.mult(Y.mass,D),L.mult(Y.mass,L),Y.force.vadd(D,Y.force),Y.force.vadd(L,Y.force)}},r.prototype.w=function(g){var m=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(m,9))*Math.pow(m*m-g*g,3)},r.prototype.gradw=function(g,m){var f=g.norm(),v=this.smoothingRadius;g.mult(945/(32*Math.PI*Math.pow(v,9))*Math.pow(v*v-f*f,2),m)},r.prototype.nablaw=function(g){var m=this.smoothingRadius,f=945/(32*Math.PI*Math.pow(m,9))*(m*m-g*g)*(7*g*g-3*m*m);return f}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,a){var i=e("../math/Vec3");n.exports=r;function r(x,_,y){y=y||{},this.restLength=typeof y.restLength=="number"?y.restLength:1,this.stiffness=y.stiffness||100,this.damping=y.damping||1,this.bodyA=x,this.bodyB=_,this.localAnchorA=new i,this.localAnchorB=new i,y.localAnchorA&&this.localAnchorA.copy(y.localAnchorA),y.localAnchorB&&this.localAnchorB.copy(y.localAnchorB),y.worldAnchorA&&this.setWorldAnchorA(y.worldAnchorA),y.worldAnchorB&&this.setWorldAnchorB(y.worldAnchorB)}r.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},r.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},r.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},r.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var s=new i,c=new i,u=new i,l=new i,o=new i,h=new i,p=new i,g=new i,m=new i,f=new i,v=new i;r.prototype.applyForce=function(){var x=this.stiffness,_=this.damping,y=this.restLength,w=this.bodyA,R=this.bodyB,H=s,b=c,T=u,L=l,D=v,q=o,F=h,V=p,Y=g,it=m,G=f;this.getWorldAnchorA(q),this.getWorldAnchorB(F),q.vsub(w.position,V),F.vsub(R.position,Y),F.vsub(q,H);var z=H.norm();b.copy(H),b.normalize(),R.velocity.vsub(w.velocity,T),R.angularVelocity.cross(Y,D),T.vadd(D,T),w.angularVelocity.cross(V,D),T.vsub(D,T),b.mult(-x*(z-y)-_*T.dot(b),L),w.force.vsub(L,w.force),R.force.vadd(L,R.force),V.cross(L,it),Y.cross(L,G),w.torque.vsub(it,w.torque),R.torque.vadd(G,R.torque)}},{"../math/Vec3":30}],36:[function(e,n,a){var i=e("../math/Vec3"),r=e("../math/Transform"),s=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=u;function u(h){h=c.defaults(h,{chassisConnectionPointLocal:new i,chassisConnectionPointWorld:new i,directionLocal:new i,directionWorld:new i,axleLocal:new i,axleWorld:new i,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=h.maxSuspensionTravel,this.customSlidingRotationalSpeed=h.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=h.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=h.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=h.chassisConnectionPointWorld.clone(),this.directionLocal=h.directionLocal.clone(),this.directionWorld=h.directionWorld.clone(),this.axleLocal=h.axleLocal.clone(),this.axleWorld=h.axleWorld.clone(),this.suspensionRestLength=h.suspensionRestLength,this.suspensionMaxLength=h.suspensionMaxLength,this.radius=h.radius,this.suspensionStiffness=h.suspensionStiffness,this.dampingCompression=h.dampingCompression,this.dampingRelaxation=h.dampingRelaxation,this.frictionSlip=h.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=h.rollInfluence,this.maxSuspensionForce=h.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=h.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new s,this.worldTransform=new r,this.isInContact=!1}var o=new i,l=new i,o=new i;u.prototype.updateWheel=function(h){var p=this.raycastResult;if(this.isInContact){var g=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(h.position,l),h.getVelocityAtWorldPoint(l,o);var m=p.hitNormalWorld.dot(o);if(g>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var f=-1/g;this.suspensionRelativeVelocity=m*f,this.clippedInvContactDotSuspension=f}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,a){n.exports=c;var i=e("./Shape"),r=e("../math/Vec3"),s=e("./ConvexPolyhedron");function c(o){i.call(this),this.type=i.types.BOX,this.halfExtents=o,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new i,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var o=this.halfExtents.x,h=this.halfExtents.y,p=this.halfExtents.z,g=r,m=[new g(-o,-h,-p),new g(o,-h,-p),new g(o,h,-p),new g(-o,h,-p),new g(-o,-h,p),new g(o,-h,p),new g(o,h,p),new g(-o,h,p)],f=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new g(0,0,1),new g(0,1,0),new g(1,0,0);var v=new s(m,f);this.convexPolyhedronRepresentation=v,v.material=this.material},c.prototype.calculateLocalInertia=function(o,h){return h=h||new r,c.calculateInertia(this.halfExtents,o,h),h},c.calculateInertia=function(o,h,p){var g=o;p.x=1/12*h*(2*g.y*2*g.y+2*g.z*2*g.z),p.y=1/12*h*(2*g.x*2*g.x+2*g.z*2*g.z),p.z=1/12*h*(2*g.y*2*g.y+2*g.x*2*g.x)},c.prototype.getSideNormals=function(o,h){var p=o,g=this.halfExtents;if(p[0].set(g.x,0,0),p[1].set(0,g.y,0),p[2].set(0,0,g.z),p[3].set(-g.x,0,0),p[4].set(0,-g.y,0),p[5].set(0,0,-g.z),h!==void 0)for(var m=0;m!==p.length;m++)h.vmult(p[m],p[m]);return p},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new r;new r,c.prototype.forEachWorldCorner=function(o,h,p){for(var g=this.halfExtents,m=[[g.x,g.y,g.z],[-g.x,g.y,g.z],[-g.x,-g.y,g.z],[-g.x,-g.y,-g.z],[g.x,-g.y,-g.z],[g.x,g.y,-g.z],[-g.x,g.y,-g.z],[g.x,-g.y,g.z]],f=0;f<m.length;f++)u.set(m[f][0],m[f][1],m[f][2]),h.vmult(u,u),o.vadd(u,u),p(u.x,u.y,u.z)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];c.prototype.calculateWorldAABB=function(o,h,p,g){var m=this.halfExtents;l[0].set(m.x,m.y,m.z),l[1].set(-m.x,m.y,m.z),l[2].set(-m.x,-m.y,m.z),l[3].set(-m.x,-m.y,-m.z),l[4].set(m.x,-m.y,-m.z),l[5].set(m.x,m.y,-m.z),l[6].set(-m.x,m.y,-m.z),l[7].set(m.x,-m.y,m.z);var f=l[0];h.vmult(f,f),o.vadd(f,f),g.copy(f),p.copy(f);for(var v=1;v<8;v++){var f=l[v];h.vmult(f,f),o.vadd(f,f);var x=f.x,_=f.y,y=f.z;x>g.x&&(g.x=x),_>g.y&&(g.y=_),y>g.z&&(g.z=y),x<p.x&&(p.x=x),_<p.y&&(p.y=_),y<p.z&&(p.z=y)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,a){n.exports=c;var i=e("./Shape"),r=e("../math/Vec3");e("../math/Quaternion");var s=e("../math/Transform");function c(A,O,P){i.call(this),this.type=i.types.CONVEXPOLYHEDRON,this.vertices=A||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=O||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=P?P.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new i,c.prototype.constructor=c;var u=new r;c.prototype.computeEdges=function(){var A=this.faces,O=this.vertices;O.length;var P=this.uniqueEdges;P.length=0;for(var C=u,E=0;E!==A.length;E++)for(var N=A[E],rt=N.length,Q=0;Q!==rt;Q++){var X=(Q+1)%rt;O[N[Q]].vsub(O[N[X]],C),C.normalize();for(var K=!1,ht=0;ht!==P.length;ht++)if(P[ht].almostEquals(C)||P[ht].almostEquals(C)){K=!0;break}K||P.push(C.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var A=0;A<this.faces.length;A++){for(var O=0;O<this.faces[A].length;O++)if(!this.vertices[this.faces[A][O]])throw new Error("Vertex "+this.faces[A][O]+" not found!");var P=this.faceNormals[A]||new r;this.getFaceNormal(A,P),P.negate(P),this.faceNormals[A]=P;var C=this.vertices[this.faces[A][0]];if(P.dot(C)<0){console.error(".faceNormals["+A+"] = Vec3("+P.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var O=0;O<this.faces[A].length;O++)console.warn(".vertices["+this.faces[A][O]+"] = Vec3("+this.vertices[this.faces[A][O]].toString()+")")}}};var l=new r,o=new r;c.computeNormal=function(A,O,P,C){O.vsub(A,o),P.vsub(O,l),l.cross(o,C),C.isZero()||C.normalize()},c.prototype.getFaceNormal=function(A,O){var P=this.faces[A],C=this.vertices[P[0]],E=this.vertices[P[1]],N=this.vertices[P[2]];return c.computeNormal(C,E,N,O)};var h=new r;c.prototype.clipAgainstHull=function(A,O,P,C,E,N,rt,Q,X){for(var K=h,ht=-1,Mt=-Number.MAX_VALUE,mt=0;mt<P.faces.length;mt++){K.copy(P.faceNormals[mt]),E.vmult(K,K);var St=K.dot(N);St>Mt&&(Mt=St,ht=mt)}for(var ct=[],vt=P.faces[ht],Ht=vt.length,Bt=0;Bt<Ht;Bt++){var Wt=P.vertices[vt[Bt]],Lt=new r;Lt.copy(Wt),E.vmult(Lt,Lt),C.vadd(Lt,Lt),ct.push(Lt)}ht>=0&&this.clipFaceAgainstHull(N,A,O,ct,rt,Q,X)};var p=new r,g=new r,m=new r,f=new r,v=new r,x=new r;c.prototype.findSeparatingAxis=function(A,O,P,C,E,N,rt,Q){var X=p,K=g,ht=m,Mt=f,mt=v,St=x,ct=Number.MAX_VALUE,vt=this;if(vt.uniqueAxes)for(var Bt=0;Bt!==vt.uniqueAxes.length;Bt++){P.vmult(vt.uniqueAxes[Bt],X);var Lt=vt.testSepAxis(X,A,O,P,C,E);if(Lt===!1)return!1;Lt<ct&&(ct=Lt,N.copy(X))}else for(var Ht=rt?rt.length:vt.faces.length,Bt=0;Bt<Ht;Bt++){var Wt=rt?rt[Bt]:Bt;X.copy(vt.faceNormals[Wt]),P.vmult(X,X);var Lt=vt.testSepAxis(X,A,O,P,C,E);if(Lt===!1)return!1;Lt<ct&&(ct=Lt,N.copy(X))}if(A.uniqueAxes)for(var Bt=0;Bt!==A.uniqueAxes.length;Bt++){E.vmult(A.uniqueAxes[Bt],K);var Lt=vt.testSepAxis(K,A,O,P,C,E);if(Lt===!1)return!1;Lt<ct&&(ct=Lt,N.copy(K))}else for(var Xt=Q?Q.length:A.faces.length,Bt=0;Bt<Xt;Bt++){var Wt=Q?Q[Bt]:Bt;K.copy(A.faceNormals[Wt]),E.vmult(K,K);var Lt=vt.testSepAxis(K,A,O,P,C,E);if(Lt===!1)return!1;Lt<ct&&(ct=Lt,N.copy(K))}for(var I=0;I!==vt.uniqueEdges.length;I++){P.vmult(vt.uniqueEdges[I],Mt);for(var S=0;S!==A.uniqueEdges.length;S++)if(E.vmult(A.uniqueEdges[S],mt),Mt.cross(mt,St),!St.almostZero()){St.normalize();var nt=vt.testSepAxis(St,A,O,P,C,E);if(nt===!1)return!1;nt<ct&&(ct=nt,N.copy(St))}}return C.vsub(O,ht),ht.dot(N)>0&&N.negate(N),!0};var _=[],y=[];c.prototype.testSepAxis=function(A,O,P,C,E,N){var rt=this;c.project(rt,A,P,C,_),c.project(O,A,E,N,y);var Q=_[0],X=_[1],K=y[0],ht=y[1],Mt=Q-ht,mt=K-X,St=Mt<mt?Mt:mt;return St};var w=new r,R=new r;c.prototype.calculateLocalInertia=function(A,O){this.computeLocalAABB(w,R);var P=R.x-w.x,C=R.y-w.y,E=R.z-w.z;O.x=1/12*A*(2*C*2*C+2*E*2*E),O.y=1/12*A*(2*P*2*P+2*E*2*E),O.z=1/12*A*(2*C*2*C+2*P*2*P)},c.prototype.getPlaneConstantOfFace=function(A){var O=this.faces[A],P=this.faceNormals[A],C=this.vertices[O[0]],E=-P.dot(C);return E};var H=new r,b=new r,T=new r,L=new r,D=new r,q=new r,F=new r,V=new r;c.prototype.clipFaceAgainstHull=function(A,O,P,C,E,N,rt){for(var Q=H,X=b,K=T,ht=L,Mt=D,mt=q,St=F,ct=V,vt=this,Ht=[],Bt=C,Wt=Ht,Lt=-1,Xt=Number.MAX_VALUE,I=0;I<vt.faces.length;I++){Q.copy(vt.faceNormals[I]),P.vmult(Q,Q);var S=Q.dot(A);S<Xt&&(Xt=S,Lt=I)}if(!(Lt<0)){var nt=vt.faces[Lt];nt.connectedFaces=[];for(var ft=0;ft<vt.faces.length;ft++)for(var xt=0;xt<vt.faces[ft].length;xt++)nt.indexOf(vt.faces[ft][xt])!==-1&&ft!==Lt&&nt.connectedFaces.indexOf(ft)===-1&&nt.connectedFaces.push(ft);Bt.length;for(var _t=nt.length,Nt=0;Nt<_t;Nt++){var W=vt.vertices[nt[Nt]],tt=vt.vertices[nt[(Nt+1)%_t]];W.vsub(tt,X),K.copy(X),P.vmult(K,K),O.vadd(K,K),ht.copy(this.faceNormals[Lt]),P.vmult(ht,ht),O.vadd(ht,ht),K.cross(ht,Mt),Mt.negate(Mt),mt.copy(W),P.vmult(mt,mt),O.vadd(mt,mt),-mt.dot(Mt);var Tt;{var Rt=nt.connectedFaces[Nt];St.copy(this.faceNormals[Rt]);var Ft=this.getPlaneConstantOfFace(Rt);ct.copy(St),P.vmult(ct,ct);var Tt=Ft-ct.dot(O)}for(this.clipFaceAgainstPlane(Bt,Wt,ct,Tt);Bt.length;)Bt.shift();for(;Wt.length;)Bt.push(Wt.shift())}St.copy(this.faceNormals[Lt]);var Ft=this.getPlaneConstantOfFace(Lt);ct.copy(St),P.vmult(ct,ct);for(var Tt=Ft-ct.dot(O),ft=0;ft<Bt.length;ft++){var zt=ct.dot(Bt[ft])+Tt;if(zt<=E&&(console.log("clamped: depth="+zt+" to minDist="+(E+"")),zt=E),zt<=N){var Ot=Bt[ft];if(zt<=0){var Zt={point:Ot,normal:ct,depth:zt};rt.push(Zt)}}}}},c.prototype.clipFaceAgainstPlane=function(A,O,P,C){var E,N,rt=A.length;if(rt<2)return O;var Q=A[A.length-1],X=A[0];E=P.dot(Q)+C;for(var K=0;K<rt;K++){if(X=A[K],N=P.dot(X)+C,E<0)if(N<0){var ht=new r;ht.copy(X),O.push(ht)}else{var ht=new r;Q.lerp(X,E/(E-N),ht),O.push(ht)}else if(N<0){var ht=new r;Q.lerp(X,E/(E-N),ht),O.push(ht),O.push(X)}Q=X,E=N}return O},c.prototype.computeWorldVertices=function(A,O){for(var P=this.vertices.length;this.worldVertices.length<P;)this.worldVertices.push(new r);for(var C=this.vertices,E=this.worldVertices,N=0;N!==P;N++)O.vmult(C[N],E[N]),A.vadd(E[N],E[N]);this.worldVerticesNeedsUpdate=!1},new r,c.prototype.computeLocalAABB=function(A,O){var P=this.vertices.length,C=this.vertices;A.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),O.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var E=0;E<P;E++){var N=C[E];N.x<A.x?A.x=N.x:N.x>O.x&&(O.x=N.x),N.y<A.y?A.y=N.y:N.y>O.y&&(O.y=N.y),N.z<A.z?A.z=N.z:N.z>O.z&&(O.z=N.z)}},c.prototype.computeWorldFaceNormals=function(A){for(var O=this.faceNormals.length;this.worldFaceNormals.length<O;)this.worldFaceNormals.push(new r);for(var P=this.faceNormals,C=this.worldFaceNormals,E=0;E!==O;E++)A.vmult(P[E],C[E]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var A=0,O=this.vertices,P=0,C=O.length;P!==C;P++){var E=O[P].norm2();E>A&&(A=E)}this.boundingSphereRadius=Math.sqrt(A)};var Y=new r;c.prototype.calculateWorldAABB=function(A,O,P,C){for(var E=this.vertices.length,N=this.vertices,rt,Q,X,K,ht,Mt,mt=0;mt<E;mt++){Y.copy(N[mt]),O.vmult(Y,Y),A.vadd(Y,Y);var St=Y;St.x<rt||rt===void 0?rt=St.x:(St.x>K||K===void 0)&&(K=St.x),St.y<Q||Q===void 0?Q=St.y:(St.y>ht||ht===void 0)&&(ht=St.y),St.z<X||X===void 0?X=St.z:(St.z>Mt||Mt===void 0)&&(Mt=St.z)}P.set(rt,Q,X),C.set(K,ht,Mt)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(A){A=A||new r;for(var O=this.vertices.length,P=this.vertices,C=0;C<O;C++)A.vadd(P[C],A);return A.mult(1/O,A),A},c.prototype.transformAllPoints=function(A,O){var P=this.vertices.length,C=this.vertices;if(O){for(var E=0;E<P;E++){var N=C[E];O.vmult(N,N)}for(var E=0;E<this.faceNormals.length;E++){var N=this.faceNormals[E];O.vmult(N,N)}}if(A)for(var E=0;E<P;E++){var N=C[E];N.vadd(A,N)}};var it=new r,G=new r,z=new r;c.prototype.pointIsInside=function(A){var O=this.vertices.length,P=this.vertices,C=this.faces,E=this.faceNormals,N=null,rt=this.faces.length,Q=it;this.getAveragePointLocal(Q);for(var X=0;X<rt;X++){this.faces[X].length;var O=E[X],K=P[C[X][0]],ht=G;A.vsub(K,ht);var Mt=O.dot(ht),mt=z;Q.vsub(K,mt);var St=O.dot(mt);if(Mt<0&&St>0||Mt>0&&St<0)return!1}return N?1:-1},new r;var J=new r,$=new r;c.project=function(A,O,P,C,E){var N=A.vertices.length,rt=J,Q=0,X=0,K=$,ht=A.vertices;K.setZero(),s.vectorToLocalFrame(P,C,O,rt),s.pointToLocalFrame(P,C,K,K);var Mt=K.dot(rt);X=Q=ht[0].dot(rt);for(var mt=1;mt<N;mt++){var St=ht[mt].dot(rt);St>Q&&(Q=St),St<X&&(X=St)}if(X-=Mt,Q-=Mt,X>Q){var ct=X;X=Q,Q=ct}E[0]=Q,E[1]=X}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,a){n.exports=c;var i=e("./Shape"),r=e("../math/Vec3");e("../math/Quaternion");var s=e("./ConvexPolyhedron");function c(u,l,o,h){var p=h,g=[],m=[],f=[],v=[],x=[],_=Math.cos,y=Math.sin;g.push(new r(l*_(0),l*y(0),-o*.5)),v.push(0),g.push(new r(u*_(0),u*y(0),o*.5)),x.push(1);for(var w=0;w<p;w++){var R=2*Math.PI/p*(w+1),H=2*Math.PI/p*(w+.5);w<p-1?(g.push(new r(l*_(R),l*y(R),-o*.5)),v.push(2*w+2),g.push(new r(u*_(R),u*y(R),o*.5)),x.push(2*w+3),f.push([2*w+2,2*w+3,2*w+1,2*w])):f.push([0,1,2*w+1,2*w]),(p%2===1||w<p/2)&&m.push(new r(_(H),y(H),0))}f.push(x),m.push(new r(0,0,1));for(var b=[],w=0;w<v.length;w++)b.push(v[v.length-w-1]);f.push(b),this.type=i.types.CONVEXPOLYHEDRON,s.call(this,g,f,m)}c.prototype=new s},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,a){var i=e("./Shape"),r=e("./ConvexPolyhedron"),s=e("../math/Vec3"),c=e("../utils/Utils");n.exports=u;function u(l,o){o=c.defaults(o,{maxValue:null,minValue:null,elementSize:1}),this.data=l,this.maxValue=o.maxValue,this.minValue=o.minValue,this.elementSize=o.elementSize,o.minValue===null&&this.updateMinValue(),o.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,i.call(this),this.pillarConvex=new r,this.pillarOffset=new s,this.type=i.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new i,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var l=this.data,o=l[0][0],h=0;h!==l.length;h++)for(var p=0;p!==l[h].length;p++){var g=l[h][p];g<o&&(o=g)}this.minValue=o},u.prototype.updateMaxValue=function(){for(var l=this.data,o=l[0][0],h=0;h!==l.length;h++)for(var p=0;p!==l[h].length;p++){var g=l[h][p];g>o&&(o=g)}this.maxValue=o},u.prototype.setHeightValueAtIndex=function(l,o,h){var p=this.data;p[l][o]=h,this.clearCachedConvexTrianglePillar(l,o,!1),l>0&&(this.clearCachedConvexTrianglePillar(l-1,o,!0),this.clearCachedConvexTrianglePillar(l-1,o,!1)),o>0&&(this.clearCachedConvexTrianglePillar(l,o-1,!0),this.clearCachedConvexTrianglePillar(l,o-1,!1)),o>0&&l>0&&this.clearCachedConvexTrianglePillar(l-1,o-1,!0)},u.prototype.getRectMinMax=function(l,o,h,p,g){g=g||[];for(var m=this.data,f=this.minValue,v=l;v<=h;v++)for(var x=o;x<=p;x++){var _=m[v][x];_>f&&(f=_)}g[0]=this.minValue,g[1]=f},u.prototype.getIndexOfPosition=function(l,o,h,p){var g=this.elementSize,m=this.data,f=Math.floor(l/g),v=Math.floor(o/g);return h[0]=f,h[1]=v,p&&(f<0&&(f=0),v<0&&(v=0),f>=m.length-1&&(f=m.length-1),v>=m[0].length-1&&(v=m[0].length-1)),!(f<0||v<0||f>=m.length-1||v>=m[0].length-1)},u.prototype.getHeightAt=function(l,o,h){var p=[];this.getIndexOfPosition(l,o,p,h);var g=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,g),(g[0]+g[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(l,o,h){return l+"_"+o+"_"+(h?1:0)},u.prototype.getCachedConvexTrianglePillar=function(l,o,h){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(l,o,h)]},u.prototype.setCachedConvexTrianglePillar=function(l,o,h,p,g){this._cachedPillars[this.getCacheConvexTrianglePillarKey(l,o,h)]={convex:p,offset:g}},u.prototype.clearCachedConvexTrianglePillar=function(l,o,h){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(l,o,h)]},u.prototype.getConvexTrianglePillar=function(l,o,h){var p=this.pillarConvex,g=this.pillarOffset;if(this.cacheEnabled){var m=this.getCachedConvexTrianglePillar(l,o,h);if(m){this.pillarConvex=m.convex,this.pillarOffset=m.offset;return}p=new r,g=new s,this.pillarConvex=p,this.pillarOffset=g}var m=this.data,f=this.elementSize,v=p.faces;p.vertices.length=6;for(var x=0;x<6;x++)p.vertices[x]||(p.vertices[x]=new s);v.length=5;for(var x=0;x<5;x++)v[x]||(v[x]=[]);var _=p.vertices,y=(Math.min(m[l][o],m[l+1][o],m[l][o+1],m[l+1][o+1])-this.minValue)/2+this.minValue;h?(g.set((l+.75)*f,(o+.75)*f,y),_[0].set(.25*f,.25*f,m[l+1][o+1]-y),_[1].set(-.75*f,.25*f,m[l][o+1]-y),_[2].set(.25*f,-.75*f,m[l+1][o]-y),_[3].set(.25*f,.25*f,-y-1),_[4].set(-.75*f,.25*f,-y-1),_[5].set(.25*f,-.75*f,-y-1),v[0][0]=0,v[0][1]=1,v[0][2]=2,v[1][0]=5,v[1][1]=4,v[1][2]=3,v[2][0]=2,v[2][1]=5,v[2][2]=3,v[2][3]=0,v[3][0]=3,v[3][1]=4,v[3][2]=1,v[3][3]=0,v[4][0]=1,v[4][1]=4,v[4][2]=5,v[4][3]=2):(g.set((l+.25)*f,(o+.25)*f,y),_[0].set(-.25*f,-.25*f,m[l][o]-y),_[1].set(.75*f,-.25*f,m[l+1][o]-y),_[2].set(-.25*f,.75*f,m[l][o+1]-y),_[3].set(-.25*f,-.25*f,-y-1),_[4].set(.75*f,-.25*f,-y-1),_[5].set(-.25*f,.75*f,-y-1),v[0][0]=0,v[0][1]=1,v[0][2]=2,v[1][0]=5,v[1][1]=4,v[1][2]=3,v[2][0]=0,v[2][1]=2,v[2][2]=5,v[2][3]=3,v[3][0]=1,v[3][1]=0,v[3][2]=3,v[3][3]=4,v[4][0]=4,v[4][1]=5,v[4][2]=2,v[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(l,o,h,p,g)},u.prototype.calculateLocalInertia=function(l,o){return o=o||new s,o.set(0,0,0),o},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(l,o,h,p){h.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var l=this.data,o=this.elementSize;this.boundingSphereRadius=new s(l.length*o,l[0].length*o,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,a){n.exports=s;var i=e("./Shape"),r=e("../math/Vec3");function s(){i.call(this),this.type=i.types.PARTICLE}s.prototype=new i,s.prototype.constructor=s,s.prototype.calculateLocalInertia=function(c,u){return u=u||new r,u.set(0,0,0),u},s.prototype.volume=function(){return 0},s.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},s.prototype.calculateWorldAABB=function(c,u,l,o){l.copy(c),o.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,a){n.exports=s;var i=e("./Shape"),r=e("../math/Vec3");function s(){i.call(this),this.type=i.types.PLANE,this.worldNormal=new r,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}s.prototype=new i,s.prototype.constructor=s,s.prototype.computeWorldNormal=function(u){var l=this.worldNormal;l.set(0,0,1),u.vmult(l,l),this.worldNormalNeedsUpdate=!1},s.prototype.calculateLocalInertia=function(u,l){return l=l||new r,l},s.prototype.volume=function(){return Number.MAX_VALUE};var c=new r;s.prototype.calculateWorldAABB=function(u,l,o,h){c.set(0,0,1),l.vmult(c,c);var p=Number.MAX_VALUE;o.set(-p,-p,-p),h.set(p,p,p),c.x===1&&(h.x=u.x),c.y===1&&(h.y=u.y),c.z===1&&(h.z=u.z),c.x===-1&&(o.x=u.x),c.y===-1&&(o.y=u.y),c.z===-1&&(o.z=u.z)},s.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,a){n.exports=i;var i=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function i(){this.id=i.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}i.prototype.constructor=i,i.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},i.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},i.prototype.calculateLocalInertia=function(r,s){throw"calculateLocalInertia() not implemented for shape type "+this.type},i.idCounter=0,i.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,a){n.exports=s;var i=e("./Shape"),r=e("../math/Vec3");function s(c){if(i.call(this),this.radius=c!==void 0?Number(c):1,this.type=i.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}s.prototype=new i,s.prototype.constructor=s,s.prototype.calculateLocalInertia=function(c,u){u=u||new r;var l=2*c*this.radius*this.radius/5;return u.x=l,u.y=l,u.z=l,u},s.prototype.volume=function(){return 4*Math.PI*this.radius/3},s.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},s.prototype.calculateWorldAABB=function(c,u,l,o){for(var h=this.radius,p=["x","y","z"],g=0;g<p.length;g++){var m=p[g];l[m]=c[m]-h,o[m]=c[m]+h}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,a){n.exports=l;var i=e("./Shape"),r=e("../math/Vec3");e("../math/Quaternion");var s=e("../math/Transform"),c=e("../collision/AABB"),u=e("../utils/Octree");function l(b,T){i.call(this),this.type=i.types.TRIMESH,this.vertices=new Float32Array(b),this.indices=new Int16Array(T),this.normals=new Float32Array(T.length),this.aabb=new c,this.edges=null,this.scale=new r(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}l.prototype=new i,l.prototype.constructor=l;var o=new r;l.prototype.updateTree=function(){var b=this.tree;b.reset(),b.aabb.copy(this.aabb);var T=this.scale;b.aabb.lowerBound.x*=1/T.x,b.aabb.lowerBound.y*=1/T.y,b.aabb.lowerBound.z*=1/T.z,b.aabb.upperBound.x*=1/T.x,b.aabb.upperBound.y*=1/T.y,b.aabb.upperBound.z*=1/T.z;for(var L=new c,D=new r,q=new r,F=new r,V=[D,q,F],Y=0;Y<this.indices.length/3;Y++){var it=Y*3;this._getUnscaledVertex(this.indices[it],D),this._getUnscaledVertex(this.indices[it+1],q),this._getUnscaledVertex(this.indices[it+2],F),L.setFromPoints(V),b.insert(L,Y)}b.removeEmptyNodes()};var h=new c;l.prototype.getTrianglesInAABB=function(b,T){h.copy(b);var L=this.scale,D=L.x,q=L.y,F=L.z,V=h.lowerBound,Y=h.upperBound;return V.x/=D,V.y/=q,V.z/=F,Y.x/=D,Y.y/=q,Y.z/=F,this.tree.aabbQuery(h,T)},l.prototype.setScale=function(b){var T=this.scale.x===this.scale.y===this.scale.z,L=b.x===b.y===b.z;T&&L||this.updateNormals(),this.scale.copy(b),this.updateAABB(),this.updateBoundingSphereRadius()},l.prototype.updateNormals=function(){for(var b=o,T=this.normals,L=0;L<this.indices.length/3;L++){var D=L*3,q=this.indices[D],F=this.indices[D+1],V=this.indices[D+2];this.getVertex(q,v),this.getVertex(F,x),this.getVertex(V,_),l.computeNormal(x,v,_,b),T[D]=b.x,T[D+1]=b.y,T[D+2]=b.z}},l.prototype.updateEdges=function(){for(var b={},T=function(it,G){var z=q<F?q+"_"+F:F+"_"+q;b[z]=!0},L=0;L<this.indices.length/3;L++){var D=L*3,q=this.indices[D],F=this.indices[D+1];this.indices[D+2],T(),T(),T()}var V=Object.keys(b);this.edges=new Int16Array(V.length*2);for(var L=0;L<V.length;L++){var Y=V[L].split("_");this.edges[2*L]=parseInt(Y[0],10),this.edges[2*L+1]=parseInt(Y[1],10)}},l.prototype.getEdgeVertex=function(b,T,L){var D=this.edges[b*2+(T?1:0)];this.getVertex(D,L)};var p=new r,g=new r;l.prototype.getEdgeVector=function(b,T){var L=p,D=g;this.getEdgeVertex(b,0,L),this.getEdgeVertex(b,1,D),D.vsub(L,T)};var m=new r,f=new r;l.computeNormal=function(b,T,L,D){T.vsub(b,f),L.vsub(T,m),m.cross(f,D),D.isZero()||D.normalize()};var v=new r,x=new r,_=new r;l.prototype.getVertex=function(b,T){var L=this.scale;return this._getUnscaledVertex(b,T),T.x*=L.x,T.y*=L.y,T.z*=L.z,T},l.prototype._getUnscaledVertex=function(b,T){var L=b*3,D=this.vertices;return T.set(D[L],D[L+1],D[L+2])},l.prototype.getWorldVertex=function(b,T,L,D){return this.getVertex(b,D),s.pointToWorldFrame(T,L,D,D),D},l.prototype.getTriangleVertices=function(b,T,L,D){var q=b*3;this.getVertex(this.indices[q],T),this.getVertex(this.indices[q+1],L),this.getVertex(this.indices[q+2],D)},l.prototype.getNormal=function(b,T){var L=b*3;return T.set(this.normals[L],this.normals[L+1],this.normals[L+2])};var y=new c;l.prototype.calculateLocalInertia=function(b,T){this.computeLocalAABB(y);var L=y.upperBound.x-y.lowerBound.x,D=y.upperBound.y-y.lowerBound.y,q=y.upperBound.z-y.lowerBound.z;return T.set(1/12*b*(2*D*2*D+2*q*2*q),1/12*b*(2*L*2*L+2*q*2*q),1/12*b*(2*D*2*D+2*L*2*L))};var w=new r;l.prototype.computeLocalAABB=function(b){var T=b.lowerBound,L=b.upperBound,D=this.vertices.length;this.vertices;var q=w;this.getVertex(0,q),T.copy(q),L.copy(q);for(var F=0;F!==D;F++)this.getVertex(F,q),q.x<T.x?T.x=q.x:q.x>L.x&&(L.x=q.x),q.y<T.y?T.y=q.y:q.y>L.y&&(L.y=q.y),q.z<T.z?T.z=q.z:q.z>L.z&&(L.z=q.z)},l.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},l.prototype.updateBoundingSphereRadius=function(){for(var b=0,T=this.vertices,L=new r,D=0,q=T.length/3;D!==q;D++){this.getVertex(D,L);var F=L.norm2();F>b&&(b=F)}this.boundingSphereRadius=Math.sqrt(b)},new r;var R=new s,H=new c;l.prototype.calculateWorldAABB=function(b,T,L,D){var q=R,F=H;q.position=b,q.quaternion=T,this.aabb.toWorldFrame(q,F),L.copy(F.lowerBound),D.copy(F.upperBound)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.createTorus=function(b,T,L,D,q){b=b||1,T=T||.5,L=L||8,D=D||6,q=q||Math.PI*2;for(var F=[],V=[],Y=0;Y<=L;Y++)for(var it=0;it<=D;it++){var G=it/D*q,z=Y/L*Math.PI*2,J=(b+T*Math.cos(z))*Math.cos(G),$=(b+T*Math.cos(z))*Math.sin(G),A=T*Math.sin(z);F.push(J,$,A)}for(var Y=1;Y<=L;Y++)for(var it=1;it<=D;it++){var O=(D+1)*Y+it-1,P=(D+1)*(Y-1)+it-1,C=(D+1)*(Y-1)+it,E=(D+1)*Y+it;V.push(O,P,E),V.push(P,C,E)}return new l(F,V)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,a){n.exports=r,e("../math/Vec3"),e("../math/Quaternion");var i=e("./Solver");function r(){i.call(this),this.iterations=10,this.tolerance=1e-7}r.prototype=new i;var s=[],c=[],u=[];r.prototype.solve=function(l,o){var h=0,p=this.iterations,g=this.tolerance*this.tolerance,m=this.equations,f=m.length,v=o.bodies,x=v.length,_=l,y,w,R,H,b,T;if(f!==0)for(var L=0;L!==x;L++)v[L].updateSolveMassProperties();var D=c,q=u,F=s;D.length=f,q.length=f,F.length=f;for(var L=0;L!==f;L++){var V=m[L];F[L]=0,q[L]=V.computeB(_),D[L]=1/V.computeC()}if(f!==0){for(var L=0;L!==x;L++){var Y=v[L],it=Y.vlambda,G=Y.wlambda;it.set(0,0,0),G&&G.set(0,0,0)}for(h=0;h!==p;h++){H=0;for(var z=0;z!==f;z++){var V=m[z];y=q[z],w=D[z],T=F[z],b=V.computeGWlambda(),R=w*(y-b-V.eps*T),T+R<V.minForce?R=V.minForce-T:T+R>V.maxForce&&(R=V.maxForce-T),F[z]+=R,H+=R>0?R:-R,V.addToWlambda(R)}if(H*H<g)break}for(var L=0;L!==x;L++){var Y=v[L],J=Y.velocity,$=Y.angularVelocity;J.vadd(Y.vlambda,J),$&&$.vadd(Y.wlambda,$)}}return h}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,a){n.exports=i;function i(){this.equations=[]}i.prototype.solve=function(r,s){return 0},i.prototype.addEquation=function(r){r.enabled&&this.equations.push(r)},i.prototype.removeEquation=function(r){var s=this.equations,c=s.indexOf(r);c!==-1&&s.splice(c,1)},i.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,a){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var i=e("./Solver"),r=e("../objects/Body");function s(v){for(i.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=v,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}s.prototype=new i;var c=[],u=[],l={bodies:[]},o=r.STATIC;function h(v){for(var x=v.length,_=0;_!==x;_++){var y=v[_];if(!y.visited&&!(y.body.type&o))return y}return!1}var p=[];function g(v,x,_,y){for(p.push(v),v.visited=!0,x(v,_,y);p.length;)for(var w=p.pop(),R;R=h(w.children);)R.visited=!0,x(R,_,y),p.push(R)}function m(v,x,_){x.push(v.body);for(var y=v.eqs.length,w=0;w!==y;w++){var R=v.eqs[w];_.indexOf(R)===-1&&_.push(R)}}s.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},s.prototype.solve=function(v,x){for(var _=c,y=this.nodePool,w=x.bodies,R=this.equations,H=R.length,b=w.length,T=this.subsolver;y.length<b;)y.push(this.createNode());_.length=b;for(var L=0;L<b;L++)_[L]=y[L];for(var L=0;L!==b;L++){var D=_[L];D.body=w[L],D.children.length=0,D.eqs.length=0,D.visited=!1}for(var q=0;q!==H;q++){var F=R[q],L=w.indexOf(F.bi),V=w.indexOf(F.bj),Y=_[L],it=_[V];Y.children.push(it),Y.eqs.push(F),it.children.push(Y),it.eqs.push(F)}var G,z=0,J=u;T.tolerance=this.tolerance,T.iterations=this.iterations;for(var $=l;G=h(_);){J.length=0,$.bodies.length=0,g(G,m,$.bodies,J);var A=J.length;J=J.sort(f);for(var L=0;L!==A;L++)T.addEquation(J[L]);T.solve(v,$),T.removeAllEquations(),z++}return z};function f(v,x){return x.id-v.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,a){var i=function(){};n.exports=i,i.prototype={constructor:i,addEventListener:function(r,s){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[r]===void 0&&(c[r]=[]),c[r].indexOf(s)===-1&&c[r].push(s),this},hasEventListener:function(r,s){if(this._listeners===void 0)return!1;var c=this._listeners;return c[r]!==void 0&&c[r].indexOf(s)!==-1},removeEventListener:function(r,s){if(this._listeners===void 0)return this;var c=this._listeners;if(c[r]===void 0)return this;var u=c[r].indexOf(s);return u!==-1&&c[r].splice(u,1),this},dispatchEvent:function(r){if(this._listeners===void 0)return this;var s=this._listeners,c=s[r.type];if(c!==void 0){r.target=this;for(var u=0,l=c.length;u<l;u++)c[u].call(this,r)}return this}}},{}],50:[function(e,n,a){var i=e("../collision/AABB"),r=e("../math/Vec3");n.exports=c;function s(o){o=o||{},this.root=o.root||null,this.aabb=o.aabb?o.aabb.clone():new i,this.data=[],this.children=[]}function c(o,h){h=h||{},h.root=null,h.aabb=o,s.call(this,h),this.maxDepth=typeof h.maxDepth<"u"?h.maxDepth:8}c.prototype=new s,s.prototype.reset=function(o,h){this.children.length=this.data.length=0},s.prototype.insert=function(o,h,p){var g=this.data;if(p=p||0,!this.aabb.contains(o))return!1;var m=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var f=!1;m.length||(this.subdivide(),f=!0);for(var v=0;v!==8;v++)if(m[v].insert(o,h,p+1))return!0;f&&(m.length=0)}return g.push(h),!0};var u=new r;s.prototype.subdivide=function(){var o=this.aabb,h=o.lowerBound,p=o.upperBound,g=this.children;g.push(new s({aabb:new i({lowerBound:new r(0,0,0)})}),new s({aabb:new i({lowerBound:new r(1,0,0)})}),new s({aabb:new i({lowerBound:new r(1,1,0)})}),new s({aabb:new i({lowerBound:new r(1,1,1)})}),new s({aabb:new i({lowerBound:new r(0,1,1)})}),new s({aabb:new i({lowerBound:new r(0,0,1)})}),new s({aabb:new i({lowerBound:new r(1,0,1)})}),new s({aabb:new i({lowerBound:new r(0,1,0)})})),p.vsub(h,u),u.scale(.5,u);for(var m=this.root||this,f=0;f!==8;f++){var v=g[f];v.root=m;var x=v.aabb.lowerBound;x.x*=u.x,x.y*=u.y,x.z*=u.z,x.vadd(h,x),x.vadd(u,v.aabb.upperBound)}},s.prototype.aabbQuery=function(o,h){this.data,this.children;for(var p=[this];p.length;){var g=p.pop();g.aabb.overlaps(o)&&Array.prototype.push.apply(h,g.data),Array.prototype.push.apply(p,g.children)}return h};var l=new i;s.prototype.rayQuery=function(o,h,p){return o.getAABB(l),l.toLocalFrame(h,l),this.aabbQuery(l,p),p},s.prototype.removeEmptyNodes=function(){for(var o=[this];o.length;){for(var h=o.pop(),p=h.children.length-1;p>=0;p--)h.children[p].data.length||h.children.splice(p,1);Array.prototype.push.apply(o,h.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,a){n.exports=i;function i(){this.objects=[],this.type=Object}i.prototype.release=function(){for(var r=arguments.length,s=0;s!==r;s++)this.objects.push(arguments[s])},i.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},i.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,a){n.exports=i;function i(){this.data={keys:[]}}i.prototype.get=function(r,s){if(r>s){var c=s;s=r,r=c}return this.data[r+"-"+s]},i.prototype.set=function(r,s,c){if(r>s){var u=s;s=r,r=u}var l=r+"-"+s;this.get(r,s)||this.data.keys.push(l),this.data[l]=c},i.prototype.reset=function(){for(var r=this.data,s=r.keys;s.length>0;){var c=s.pop();delete r[c]}}},{}],53:[function(e,n,a){function i(){}n.exports=i,i.defaults=function(r,s){r=r||{};for(var c in s)c in r||(r[c]=s[c]);return r}},{}],54:[function(e,n,a){n.exports=s;var i=e("../math/Vec3"),r=e("./Pool");function s(){r.call(this),this.type=i}s.prototype=new r,s.prototype.constructObject=function(){return new i}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,a){n.exports=g;var i=e("../collision/AABB"),r=e("../shapes/Shape"),s=e("../collision/Ray"),c=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var l=e("../math/Quaternion");e("../solver/Solver");var o=e("../utils/Vec3Pool"),h=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function g(st){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new o,this.world=st,this.currentContactMaterial=null,this.enableFrictionReduction=!1}g.prototype.createContactEquation=function(st,ot,yt,wt,qt,Dt){var M;this.contactPointPool.length?(M=this.contactPointPool.pop(),M.bi=st,M.bj=ot):M=new h(st,ot),M.enabled=st.collisionResponse&&ot.collisionResponse&&yt.collisionResponse&&wt.collisionResponse;var k=this.currentContactMaterial;M.restitution=k.restitution,M.setSpookParams(k.contactEquationStiffness,k.contactEquationRelaxation,this.world.dt);var B=yt.material||st.material,U=wt.material||ot.material;return B&&U&&B.restitution>=0&&U.restitution>=0&&(M.restitution=B.restitution*U.restitution),M.si=qt||yt,M.sj=Dt||wt,M},g.prototype.createFrictionEquationsFromContact=function(st,ot){var yt=st.bi,wt=st.bj,qt=st.si,Dt=st.sj,M=this.world,k=this.currentContactMaterial,B=k.friction,U=qt.material||yt.material,Z=Dt.material||wt.material;if(U&&Z&&U.friction>=0&&Z.friction>=0&&(B=U.friction*Z.friction),B>0){var pt=B*M.gravity.length(),dt=yt.invMass+wt.invMass;dt>0&&(dt=1/dt);var ut=this.frictionEquationPool,gt=ut.length?ut.pop():new p(yt,wt,pt*dt),Et=ut.length?ut.pop():new p(yt,wt,pt*dt);return gt.bi=Et.bi=yt,gt.bj=Et.bj=wt,gt.minForce=Et.minForce=-pt*dt,gt.maxForce=Et.maxForce=pt*dt,gt.ri.copy(st.ri),gt.rj.copy(st.rj),Et.ri.copy(st.ri),Et.rj.copy(st.rj),st.ni.tangents(gt.t,Et.t),gt.setSpookParams(k.frictionEquationStiffness,k.frictionEquationRelaxation,M.dt),Et.setSpookParams(k.frictionEquationStiffness,k.frictionEquationRelaxation,M.dt),gt.enabled=Et.enabled=st.enabled,ot.push(gt,Et),!0}return!1};var m=new c,f=new c,v=new c;g.prototype.createFrictionFromAverage=function(st){var ot=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ot,this.frictionResult)||st===1)){var yt=this.frictionResult[this.frictionResult.length-2],wt=this.frictionResult[this.frictionResult.length-1];m.setZero(),f.setZero(),v.setZero();var qt=ot.bi;ot.bj;for(var Dt=0;Dt!==st;Dt++)ot=this.result[this.result.length-1-Dt],ot.bodyA!==qt?(m.vadd(ot.ni,m),f.vadd(ot.ri,f),v.vadd(ot.rj,v)):(m.vsub(ot.ni,m),f.vadd(ot.rj,f),v.vadd(ot.ri,v));var M=1/st;f.scale(M,yt.ri),v.scale(M,yt.rj),wt.ri.copy(yt.ri),wt.rj.copy(yt.rj),m.normalize(),m.tangents(yt.t,wt.t)}};var x=new c,_=new c,y=new l,w=new l;g.prototype.getContacts=function(st,ot,yt,wt,qt,Dt,M){this.contactPointPool=qt,this.frictionEquationPool=M,this.result=wt,this.frictionResult=Dt;for(var k=y,B=w,U=x,Z=_,pt=0,dt=st.length;pt!==dt;pt++){var ut=st[pt],gt=ot[pt],Et=null;ut.material&&gt.material&&(Et=yt.getContactMaterial(ut.material,gt.material)||null);for(var Pt=0;Pt<ut.shapes.length;Pt++){ut.quaternion.mult(ut.shapeOrientations[Pt],k),ut.quaternion.vmult(ut.shapeOffsets[Pt],U),U.vadd(ut.position,U);for(var lt=ut.shapes[Pt],Vt=0;Vt<gt.shapes.length;Vt++){gt.quaternion.mult(gt.shapeOrientations[Vt],B),gt.quaternion.vmult(gt.shapeOffsets[Vt],Z),Z.vadd(gt.position,Z);var Gt=gt.shapes[Vt];if(!(U.distanceTo(Z)>lt.boundingSphereRadius+Gt.boundingSphereRadius)){var ne=null;lt.material&&Gt.material&&(ne=yt.getContactMaterial(lt.material,Gt.material)||null),this.currentContactMaterial=ne||Et||yt.defaultContactMaterial;var Yt=this[lt.type|Gt.type];Yt&&(lt.type<Gt.type?Yt.call(this,lt,Gt,U,Z,k,B,ut,gt,lt,Gt):Yt.call(this,Gt,lt,Z,U,B,k,gt,ut,lt,Gt))}}}}},g.prototype[r.types.BOX|r.types.BOX]=g.prototype.boxBox=function(st,ot,yt,wt,qt,Dt,M,k){st.convexPolyhedronRepresentation.material=st.material,ot.convexPolyhedronRepresentation.material=ot.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.convexConvex(st.convexPolyhedronRepresentation,ot.convexPolyhedronRepresentation,yt,wt,qt,Dt,M,k,st,ot)},g.prototype[r.types.BOX|r.types.CONVEXPOLYHEDRON]=g.prototype.boxConvex=function(st,ot,yt,wt,qt,Dt,M,k){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexConvex(st.convexPolyhedronRepresentation,ot,yt,wt,qt,Dt,M,k,st,ot)},g.prototype[r.types.BOX|r.types.PARTICLE]=g.prototype.boxParticle=function(st,ot,yt,wt,qt,Dt,M,k){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexParticle(st.convexPolyhedronRepresentation,ot,yt,wt,qt,Dt,M,k,st,ot)},g.prototype[r.types.SPHERE]=g.prototype.sphereSphere=function(st,ot,yt,wt,qt,Dt,M,k){var B=this.createContactEquation(M,k,st,ot);wt.vsub(yt,B.ni),B.ni.normalize(),B.ri.copy(B.ni),B.rj.copy(B.ni),B.ri.mult(st.radius,B.ri),B.rj.mult(-ot.radius,B.rj),B.ri.vadd(yt,B.ri),B.ri.vsub(M.position,B.ri),B.rj.vadd(wt,B.rj),B.rj.vsub(k.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)};var R=new c,H=new c,b=new c;g.prototype[r.types.PLANE|r.types.TRIMESH]=g.prototype.planeTrimesh=function(st,ot,yt,wt,qt,Dt,M,k){var B=new c,U=R;U.set(0,0,1),qt.vmult(U,U);for(var Z=0;Z<ot.vertices.length/3;Z++){ot.getVertex(Z,B);var pt=new c;pt.copy(B),u.pointToWorldFrame(wt,Dt,pt,B);var dt=H;B.vsub(yt,dt);var ut=U.dot(dt);if(ut<=0){var gt=this.createContactEquation(M,k,st,ot);gt.ni.copy(U);var Et=b;U.scale(dt.dot(U),Et),B.vsub(Et,Et),gt.ri.copy(Et),gt.ri.vsub(M.position,gt.ri),gt.rj.copy(B),gt.rj.vsub(k.position,gt.rj),this.result.push(gt),this.createFrictionEquationsFromContact(gt,this.frictionResult)}}};var T=new c,L=new c;new c;var D=new c,q=new c,F=new c,V=new c,Y=new c,it=new c,G=new c,z=new c,J=new c,$=new c,A=new c,O=new i,P=[];g.prototype[r.types.SPHERE|r.types.TRIMESH]=g.prototype.sphereTrimesh=function(st,ot,yt,wt,qt,Dt,M,k){var B=F,U=V,Z=Y,pt=it,dt=G,ut=z,gt=O,Et=q,Pt=L,lt=P;u.pointToLocalFrame(wt,Dt,yt,dt);var Vt=st.radius;gt.lowerBound.set(dt.x-Vt,dt.y-Vt,dt.z-Vt),gt.upperBound.set(dt.x+Vt,dt.y+Vt,dt.z+Vt),ot.getTrianglesInAABB(gt,lt);for(var Gt=D,ne=st.radius*st.radius,Yt=0;Yt<lt.length;Yt++)for(var kt=0;kt<3;kt++)if(ot.getVertex(ot.indices[lt[Yt]*3+kt],Gt),Gt.vsub(dt,Pt),Pt.norm2()<=ne){Et.copy(Gt),u.pointToWorldFrame(wt,Dt,Et,Gt),Gt.vsub(yt,Pt);var At=this.createContactEquation(M,k,st,ot);At.ni.copy(Pt),At.ni.normalize(),At.ri.copy(At.ni),At.ri.scale(st.radius,At.ri),At.ri.vadd(yt,At.ri),At.ri.vsub(M.position,At.ri),At.rj.copy(Gt),At.rj.vsub(k.position,At.rj),this.result.push(At),this.createFrictionEquationsFromContact(At,this.frictionResult)}for(var Yt=0;Yt<lt.length;Yt++)for(var kt=0;kt<3;kt++){ot.getVertex(ot.indices[lt[Yt]*3+kt],B),ot.getVertex(ot.indices[lt[Yt]*3+(kt+1)%3],U),U.vsub(B,Z),dt.vsub(U,ut);var Ae=ut.dot(Z);dt.vsub(B,ut);var re=ut.dot(Z);if(re>0&&Ae<0){dt.vsub(B,ut),pt.copy(Z),pt.normalize(),re=ut.dot(pt),pt.scale(re,ut),ut.vadd(B,ut);var fe=ut.distanceTo(dt);if(fe<st.radius){var At=this.createContactEquation(M,k,st,ot);ut.vsub(dt,At.ni),At.ni.normalize(),At.ni.scale(st.radius,At.ri),u.pointToWorldFrame(wt,Dt,ut,ut),ut.vsub(k.position,At.rj),u.vectorToWorldFrame(Dt,At.ni,At.ni),u.vectorToWorldFrame(Dt,At.ri,At.ri),this.result.push(At),this.createFrictionEquationsFromContact(At,this.frictionResult)}}}for(var Ge=J,pe=$,se=A,ce=T,Yt=0,ie=lt.length;Yt!==ie;Yt++){ot.getTriangleVertices(lt[Yt],Ge,pe,se),ot.getNormal(lt[Yt],ce),dt.vsub(Ge,ut);var fe=ut.dot(ce);if(ce.scale(fe,ut),dt.vsub(ut,ut),fe=ut.distanceTo(dt),s.pointInTriangle(ut,Ge,pe,se)&&fe<st.radius){var At=this.createContactEquation(M,k,st,ot);ut.vsub(dt,At.ni),At.ni.normalize(),At.ni.scale(st.radius,At.ri),u.pointToWorldFrame(wt,Dt,ut,ut),ut.vsub(k.position,At.rj),u.vectorToWorldFrame(Dt,At.ni,At.ni),u.vectorToWorldFrame(Dt,At.ri,At.ri),this.result.push(At),this.createFrictionEquationsFromContact(At,this.frictionResult)}}lt.length=0};var C=new c,E=new c;g.prototype[r.types.SPHERE|r.types.PLANE]=g.prototype.spherePlane=function(st,ot,yt,wt,qt,Dt,M,k){var B=this.createContactEquation(M,k,st,ot);if(B.ni.set(0,0,1),Dt.vmult(B.ni,B.ni),B.ni.negate(B.ni),B.ni.normalize(),B.ni.mult(st.radius,B.ri),yt.vsub(wt,C),B.ni.mult(B.ni.dot(C),E),C.vsub(E,B.rj),-C.dot(B.ni)<=st.radius){var U=B.ri,Z=B.rj;U.vadd(yt,U),U.vsub(M.position,U),Z.vadd(wt,Z),Z.vsub(k.position,Z),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}};var N=new c,rt=new c,Q=new c;function X(st,ot,yt){for(var wt=null,qt=st.length,Dt=0;Dt!==qt;Dt++){var M=st[Dt],k=N;st[(Dt+1)%qt].vsub(M,k);var B=rt;k.cross(ot,B);var U=Q;yt.vsub(M,U);var Z=B.dot(U);if(wt===null||Z>0&&wt===!0||Z<=0&&wt===!1){wt===null&&(wt=Z>0);continue}else return!1}return!0}var K=new c,ht=new c,Mt=new c,mt=new c,St=[new c,new c,new c,new c,new c,new c],ct=new c,vt=new c,Ht=new c,Bt=new c;g.prototype[r.types.SPHERE|r.types.BOX]=g.prototype.sphereBox=function(st,ot,yt,wt,qt,Dt,M,k){var B=this.v3pool,U=St;yt.vsub(wt,K),ot.getSideNormals(U,Dt);for(var Z=st.radius,pt=!1,dt=vt,ut=Ht,gt=Bt,Et=null,Pt=0,lt=0,Vt=0,Gt=null,ne=0,Yt=U.length;ne!==Yt&&pt===!1;ne++){var kt=ht;kt.copy(U[ne]);var At=kt.norm();kt.normalize();var Ae=K.dot(kt);if(Ae<At+Z&&Ae>0){var re=Mt,fe=mt;re.copy(U[(ne+1)%3]),fe.copy(U[(ne+2)%3]);var Ge=re.norm(),pe=fe.norm();re.normalize(),fe.normalize();var se=K.dot(re),ce=K.dot(fe);if(se<Ge&&se>-Ge&&ce<pe&&ce>-pe){var be=Math.abs(Ae-At-Z);(Gt===null||be<Gt)&&(Gt=be,lt=se,Vt=ce,Et=At,dt.copy(kt),ut.copy(re),gt.copy(fe),Pt++)}}}if(Pt){pt=!0;var jt=this.createContactEquation(M,k,st,ot);dt.mult(-Z,jt.ri),jt.ni.copy(dt),jt.ni.negate(jt.ni),dt.mult(Et,dt),ut.mult(lt,ut),dt.vadd(ut,dt),gt.mult(Vt,gt),dt.vadd(gt,jt.rj),jt.ri.vadd(yt,jt.ri),jt.ri.vsub(M.position,jt.ri),jt.rj.vadd(wt,jt.rj),jt.rj.vsub(k.position,jt.rj),this.result.push(jt),this.createFrictionEquationsFromContact(jt,this.frictionResult)}for(var ie=B.get(),Ne=ct,ae=0;ae!==2&&!pt;ae++)for(var me=0;me!==2&&!pt;me++)for(var xe=0;xe!==2&&!pt;xe++)if(ie.set(0,0,0),ae?ie.vadd(U[0],ie):ie.vsub(U[0],ie),me?ie.vadd(U[1],ie):ie.vsub(U[1],ie),xe?ie.vadd(U[2],ie):ie.vsub(U[2],ie),wt.vadd(ie,Ne),Ne.vsub(yt,Ne),Ne.norm2()<Z*Z){pt=!0;var jt=this.createContactEquation(M,k,st,ot);jt.ri.copy(Ne),jt.ri.normalize(),jt.ni.copy(jt.ri),jt.ri.mult(Z,jt.ri),jt.rj.copy(ie),jt.ri.vadd(yt,jt.ri),jt.ri.vsub(M.position,jt.ri),jt.rj.vadd(wt,jt.rj),jt.rj.vsub(k.position,jt.rj),this.result.push(jt),this.createFrictionEquationsFromContact(jt,this.frictionResult)}B.release(ie),ie=null;for(var Ce=B.get(),ln=B.get(),jt=B.get(),Oe=B.get(),be=B.get(),Sn=U.length,ae=0;ae!==Sn&&!pt;ae++)for(var me=0;me!==Sn&&!pt;me++)if(ae%3!==me%3){U[me].cross(U[ae],Ce),Ce.normalize(),U[ae].vadd(U[me],ln),jt.copy(yt),jt.vsub(ln,jt),jt.vsub(wt,jt);var En=jt.dot(Ce);Ce.mult(En,Oe);for(var xe=0;xe===ae%3||xe===me%3;)xe++;be.copy(yt),be.vsub(Oe,be),be.vsub(ln,be),be.vsub(wt,be);var Mo=Math.abs(En),So=be.norm();if(Mo<U[xe].norm()&&So<Z){pt=!0;var ue=this.createContactEquation(M,k,st,ot);ln.vadd(Oe,ue.rj),ue.rj.copy(ue.rj),be.negate(ue.ni),ue.ni.normalize(),ue.ri.copy(ue.rj),ue.ri.vadd(wt,ue.ri),ue.ri.vsub(yt,ue.ri),ue.ri.normalize(),ue.ri.mult(Z,ue.ri),ue.ri.vadd(yt,ue.ri),ue.ri.vsub(M.position,ue.ri),ue.rj.vadd(wt,ue.rj),ue.rj.vsub(k.position,ue.rj),this.result.push(ue),this.createFrictionEquationsFromContact(ue,this.frictionResult)}}B.release(Ce,ln,jt,Oe,be)};var Wt=new c,Lt=new c,Xt=new c,I=new c,S=new c,nt=new c,ft=new c,xt=new c,_t=new c,Nt=new c;g.prototype[r.types.SPHERE|r.types.CONVEXPOLYHEDRON]=g.prototype.sphereConvex=function(st,ot,yt,wt,qt,Dt,M,k){var B=this.v3pool;yt.vsub(wt,Wt);for(var U=ot.faceNormals,Z=ot.faces,pt=ot.vertices,dt=st.radius,ut=0;ut!==pt.length;ut++){var gt=pt[ut],Et=S;Dt.vmult(gt,Et),wt.vadd(Et,Et);var Pt=I;if(Et.vsub(yt,Pt),Pt.norm2()<dt*dt){Vt=!0;var lt=this.createContactEquation(M,k,st,ot);lt.ri.copy(Pt),lt.ri.normalize(),lt.ni.copy(lt.ri),lt.ri.mult(dt,lt.ri),Et.vsub(wt,lt.rj),lt.ri.vadd(yt,lt.ri),lt.ri.vsub(M.position,lt.ri),lt.rj.vadd(wt,lt.rj),lt.rj.vsub(k.position,lt.rj),this.result.push(lt),this.createFrictionEquationsFromContact(lt,this.frictionResult);return}}for(var Vt=!1,ut=0,Gt=Z.length;ut!==Gt&&Vt===!1;ut++){var ne=U[ut],Yt=Z[ut],kt=nt;Dt.vmult(ne,kt);var At=ft;Dt.vmult(pt[Yt[0]],At),At.vadd(wt,At);var Ae=xt;kt.mult(-dt,Ae),yt.vadd(Ae,Ae);var re=_t;Ae.vsub(At,re);var fe=re.dot(kt),Ge=Nt;if(yt.vsub(At,Ge),fe<0&&Ge.dot(kt)>0){for(var pe=[],se=0,ce=Yt.length;se!==ce;se++){var ie=B.get();Dt.vmult(pt[Yt[se]],ie),wt.vadd(ie,ie),pe.push(ie)}if(X(pe,kt,yt)){Vt=!0;var lt=this.createContactEquation(M,k,st,ot);kt.mult(-dt,lt.ri),kt.negate(lt.ni);var Ne=B.get();kt.mult(-fe,Ne);var ae=B.get();kt.mult(-dt,ae),yt.vsub(wt,lt.rj),lt.rj.vadd(ae,lt.rj),lt.rj.vadd(Ne,lt.rj),lt.rj.vadd(wt,lt.rj),lt.rj.vsub(k.position,lt.rj),lt.ri.vadd(yt,lt.ri),lt.ri.vsub(M.position,lt.ri),B.release(Ne),B.release(ae),this.result.push(lt),this.createFrictionEquationsFromContact(lt,this.frictionResult);for(var se=0,me=pe.length;se!==me;se++)B.release(pe[se]);return}else for(var se=0;se!==Yt.length;se++){var xe=B.get(),Ce=B.get();Dt.vmult(pt[Yt[(se+1)%Yt.length]],xe),Dt.vmult(pt[Yt[(se+2)%Yt.length]],Ce),wt.vadd(xe,xe),wt.vadd(Ce,Ce);var ln=Lt;Ce.vsub(xe,ln);var jt=Xt;ln.unit(jt);var Oe=B.get(),be=B.get();yt.vsub(xe,be);var Sn=be.dot(jt);jt.mult(Sn,Oe),Oe.vadd(xe,Oe);var En=B.get();if(Oe.vsub(yt,En),Sn>0&&Sn*Sn<ln.norm2()&&En.norm2()<dt*dt){var lt=this.createContactEquation(M,k,st,ot);Oe.vsub(wt,lt.rj),Oe.vsub(yt,lt.ni),lt.ni.normalize(),lt.ni.mult(dt,lt.ri),lt.rj.vadd(wt,lt.rj),lt.rj.vsub(k.position,lt.rj),lt.ri.vadd(yt,lt.ri),lt.ri.vsub(M.position,lt.ri),this.result.push(lt),this.createFrictionEquationsFromContact(lt,this.frictionResult);for(var se=0,me=pe.length;se!==me;se++)B.release(pe[se]);B.release(xe),B.release(Ce),B.release(Oe),B.release(En),B.release(be);return}B.release(xe),B.release(Ce),B.release(Oe),B.release(En),B.release(be)}for(var se=0,me=pe.length;se!==me;se++)B.release(pe[se])}}},new c,new c,g.prototype[r.types.PLANE|r.types.BOX]=g.prototype.planeBox=function(st,ot,yt,wt,qt,Dt,M,k){ot.convexPolyhedronRepresentation.material=ot.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.planeConvex(st,ot.convexPolyhedronRepresentation,yt,wt,qt,Dt,M,k)};var W=new c,tt=new c,Rt=new c,Ft=new c;g.prototype[r.types.PLANE|r.types.CONVEXPOLYHEDRON]=g.prototype.planeConvex=function(st,ot,yt,wt,qt,Dt,M,k){var B=W,U=tt;U.set(0,0,1),qt.vmult(U,U);for(var Z=0,pt=Rt,dt=0;dt!==ot.vertices.length;dt++){B.copy(ot.vertices[dt]),Dt.vmult(B,B),wt.vadd(B,B),B.vsub(yt,pt);var ut=U.dot(pt);if(ut<=0){var gt=this.createContactEquation(M,k,st,ot),Et=Ft;U.mult(U.dot(pt),Et),B.vsub(Et,Et),Et.vsub(yt,gt.ri),gt.ni.copy(U),B.vsub(wt,gt.rj),gt.ri.vadd(yt,gt.ri),gt.ri.vsub(M.position,gt.ri),gt.rj.vadd(wt,gt.rj),gt.rj.vsub(k.position,gt.rj),this.result.push(gt),Z++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(gt,this.frictionResult)}}this.enableFrictionReduction&&Z&&this.createFrictionFromAverage(Z)};var Tt=new c,zt=new c;g.prototype[r.types.CONVEXPOLYHEDRON]=g.prototype.convexConvex=function(st,ot,yt,wt,qt,Dt,M,k,B,U,Z,pt){var dt=Tt;if(!(yt.distanceTo(wt)>st.boundingSphereRadius+ot.boundingSphereRadius)&&st.findSeparatingAxis(ot,yt,qt,wt,Dt,dt,Z,pt)){var ut=[],gt=zt;st.clipAgainstHull(yt,qt,ot,wt,Dt,dt,-100,100,ut);for(var Et=0,Pt=0;Pt!==ut.length;Pt++){var lt=this.createContactEquation(M,k,st,ot,B,U),Vt=lt.ri,Gt=lt.rj;dt.negate(lt.ni),ut[Pt].normal.negate(gt),gt.mult(ut[Pt].depth,gt),ut[Pt].point.vadd(gt,Vt),Gt.copy(ut[Pt].point),Vt.vsub(yt,Vt),Gt.vsub(wt,Gt),Vt.vadd(yt,Vt),Vt.vsub(M.position,Vt),Gt.vadd(wt,Gt),Gt.vsub(k.position,Gt),this.result.push(lt),Et++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(lt,this.frictionResult)}this.enableFrictionReduction&&Et&&this.createFrictionFromAverage(Et)}};var Ot=new c,Zt=new c,$t=new c;g.prototype[r.types.PLANE|r.types.PARTICLE]=g.prototype.planeParticle=function(st,ot,yt,wt,qt,Dt,M,k){var B=Ot;B.set(0,0,1),M.quaternion.vmult(B,B);var U=Zt;wt.vsub(M.position,U);var Z=B.dot(U);if(Z<=0){var pt=this.createContactEquation(k,M,ot,st);pt.ni.copy(B),pt.ni.negate(pt.ni),pt.ri.set(0,0,0);var dt=$t;B.mult(B.dot(wt),dt),wt.vsub(dt,dt),pt.rj.copy(dt),this.result.push(pt),this.createFrictionEquationsFromContact(pt,this.frictionResult)}};var Jt=new c;g.prototype[r.types.PARTICLE|r.types.SPHERE]=g.prototype.sphereParticle=function(st,ot,yt,wt,qt,Dt,M,k){var B=Jt;B.set(0,0,1),wt.vsub(yt,B);var U=B.norm2();if(U<=st.radius*st.radius){var Z=this.createContactEquation(k,M,ot,st);B.normalize(),Z.rj.copy(B),Z.rj.mult(st.radius,Z.rj),Z.ni.copy(B),Z.ni.negate(Z.ni),Z.ri.set(0,0,0),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}};var j=new l,at=new c;new c;var bt=new c,Ct=new c,Ut=new c;g.prototype[r.types.PARTICLE|r.types.CONVEXPOLYHEDRON]=g.prototype.convexParticle=function(st,ot,yt,wt,qt,Dt,M,k){var B=-1,U=bt,Z=Ut,pt=null,dt=at;if(dt.copy(wt),dt.vsub(yt,dt),qt.conjugate(j),j.vmult(dt,dt),st.pointIsInside(dt)){st.worldVerticesNeedsUpdate&&st.computeWorldVertices(yt,qt),st.worldFaceNormalsNeedsUpdate&&st.computeWorldFaceNormals(qt);for(var ut=0,gt=st.faces.length;ut!==gt;ut++){var Et=[st.worldVertices[st.faces[ut][0]]],Pt=st.worldFaceNormals[ut];wt.vsub(Et[0],Ct);var lt=-Pt.dot(Ct);(pt===null||Math.abs(lt)<Math.abs(pt))&&(pt=lt,B=ut,U.copy(Pt))}if(B!==-1){var Vt=this.createContactEquation(k,M,ot,st);U.mult(pt,Z),Z.vadd(wt,Z),Z.vsub(yt,Z),Vt.rj.copy(Z),U.negate(Vt.ni),Vt.ri.set(0,0,0);var Gt=Vt.ri,ne=Vt.rj;Gt.vadd(wt,Gt),Gt.vsub(k.position,Gt),ne.vadd(yt,ne),ne.vsub(M.position,ne),this.result.push(Vt),this.createFrictionEquationsFromContact(Vt,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},g.prototype[r.types.BOX|r.types.HEIGHTFIELD]=g.prototype.boxHeightfield=function(st,ot,yt,wt,qt,Dt,M,k){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexHeightfield(st.convexPolyhedronRepresentation,ot,yt,wt,qt,Dt,M,k)};var ee=new c,le=new c,de=[0];g.prototype[r.types.CONVEXPOLYHEDRON|r.types.HEIGHTFIELD]=g.prototype.convexHeightfield=function(st,ot,yt,wt,qt,Dt,M,k){var B=ot.data,U=ot.elementSize,Z=st.boundingSphereRadius,pt=le,dt=de,ut=ee;u.pointToLocalFrame(wt,Dt,yt,ut);var gt=Math.floor((ut.x-Z)/U)-1,Et=Math.ceil((ut.x+Z)/U)+1,Pt=Math.floor((ut.y-Z)/U)-1,lt=Math.ceil((ut.y+Z)/U)+1;if(!(Et<0||lt<0||gt>B.length||Pt>B[0].length)){gt<0&&(gt=0),Et<0&&(Et=0),Pt<0&&(Pt=0),lt<0&&(lt=0),gt>=B.length&&(gt=B.length-1),Et>=B.length&&(Et=B.length-1),lt>=B[0].length&&(lt=B[0].length-1),Pt>=B[0].length&&(Pt=B[0].length-1);var Vt=[];ot.getRectMinMax(gt,Pt,Et,lt,Vt);var Gt=Vt[0],ne=Vt[1];if(!(ut.z-Z>ne||ut.z+Z<Gt))for(var Yt=gt;Yt<Et;Yt++)for(var kt=Pt;kt<lt;kt++)ot.getConvexTrianglePillar(Yt,kt,!1),u.pointToWorldFrame(wt,Dt,ot.pillarOffset,pt),yt.distanceTo(pt)<ot.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.convexConvex(st,ot.pillarConvex,yt,pt,qt,Dt,M,k,null,null,dt,null),ot.getConvexTrianglePillar(Yt,kt,!0),u.pointToWorldFrame(wt,Dt,ot.pillarOffset,pt),yt.distanceTo(pt)<ot.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.convexConvex(st,ot.pillarConvex,yt,pt,qt,Dt,M,k,null,null,dt,null)}};var De=new c,Kt=new c;g.prototype[r.types.SPHERE|r.types.HEIGHTFIELD]=g.prototype.sphereHeightfield=function(st,ot,yt,wt,qt,Dt,M,k){var B=ot.data,U=st.radius,Z=ot.elementSize,pt=Kt,dt=De;u.pointToLocalFrame(wt,Dt,yt,dt);var ut=Math.floor((dt.x-U)/Z)-1,gt=Math.ceil((dt.x+U)/Z)+1,Et=Math.floor((dt.y-U)/Z)-1,Pt=Math.ceil((dt.y+U)/Z)+1;if(!(gt<0||Pt<0||ut>B.length||Pt>B[0].length)){ut<0&&(ut=0),gt<0&&(gt=0),Et<0&&(Et=0),Pt<0&&(Pt=0),ut>=B.length&&(ut=B.length-1),gt>=B.length&&(gt=B.length-1),Pt>=B[0].length&&(Pt=B[0].length-1),Et>=B[0].length&&(Et=B[0].length-1);var lt=[];ot.getRectMinMax(ut,Et,gt,Pt,lt);var Vt=lt[0],Gt=lt[1];if(!(dt.z-U>Gt||dt.z+U<Vt))for(var ne=this.result,Yt=ut;Yt<gt;Yt++)for(var kt=Et;kt<Pt;kt++){var At=ne.length;ot.getConvexTrianglePillar(Yt,kt,!1),u.pointToWorldFrame(wt,Dt,ot.pillarOffset,pt),yt.distanceTo(pt)<ot.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.sphereConvex(st,ot.pillarConvex,yt,pt,qt,Dt,M,k),ot.getConvexTrianglePillar(Yt,kt,!0),u.pointToWorldFrame(wt,Dt,ot.pillarOffset,pt),yt.distanceTo(pt)<ot.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.sphereConvex(st,ot.pillarConvex,yt,pt,qt,Dt,M,k);var Ae=ne.length-At;if(Ae>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,a){n.exports=y;var i=e("../shapes/Shape"),r=e("../math/Vec3"),s=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),l=e("../utils/EventTarget"),o=e("../collision/ArrayCollisionMatrix"),h=e("../material/Material"),p=e("../material/ContactMaterial"),g=e("../objects/Body"),m=e("../utils/TupleDictionary"),f=e("../collision/RaycastResult"),v=e("../collision/AABB"),x=e("../collision/Ray"),_=e("../collision/NaiveBroadphase");function y(){l.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new r,this.broadphase=new _,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new o,this.collisionMatrixPrevious=new o,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new m,this.defaultMaterial=new h("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}y.prototype=new l,new v;var w=new x;if(y.prototype.getContactMaterial=function(z,J){return this.contactMaterialTable.get(z.id,J.id)},y.prototype.numObjects=function(){return this.bodies.length},y.prototype.collisionMatrixTick=function(){var z=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=z,this.collisionMatrix.reset()},y.prototype.add=y.prototype.addBody=function(z){this.bodies.indexOf(z)===-1&&(z.index=this.bodies.length,this.bodies.push(z),z.world=this,z.initPosition.copy(z.position),z.initVelocity.copy(z.velocity),z.timeLastSleepy=this.time,z instanceof g&&(z.initAngularVelocity.copy(z.angularVelocity),z.initQuaternion.copy(z.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=z,this.dispatchEvent(this.addBodyEvent))},y.prototype.addConstraint=function(z){this.constraints.push(z)},y.prototype.removeConstraint=function(z){var J=this.constraints.indexOf(z);J!==-1&&this.constraints.splice(J,1)},y.prototype.rayTest=function(z,J,$){$ instanceof f?this.raycastClosest(z,J,{skipBackfaces:!0},$):this.raycastAll(z,J,{skipBackfaces:!0},$)},y.prototype.raycastAll=function(z,J,$,A){return $.mode=x.ALL,$.from=z,$.to=J,$.callback=A,w.intersectWorld(this,$)},y.prototype.raycastAny=function(z,J,$,A){return $.mode=x.ANY,$.from=z,$.to=J,$.result=A,w.intersectWorld(this,$)},y.prototype.raycastClosest=function(z,J,$,A){return $.mode=x.CLOSEST,$.from=z,$.to=J,$.result=A,w.intersectWorld(this,$)},y.prototype.remove=function(z){z.world=null;var J=this.bodies.length-1,$=this.bodies,A=$.indexOf(z);if(A!==-1){$.splice(A,1);for(var O=0;O!==$.length;O++)$[O].index=O;this.collisionMatrix.setNumObjects(J),this.removeBodyEvent.body=z,this.dispatchEvent(this.removeBodyEvent)}},y.prototype.removeBody=y.prototype.remove,y.prototype.addMaterial=function(z){this.materials.push(z)},y.prototype.addContactMaterial=function(z){this.contactmaterials.push(z),this.contactMaterialTable.set(z.materials[0].id,z.materials[1].id,z)},typeof performance>"u"&&(performance={}),!performance.now){var R=Date.now();performance.timing&&performance.timing.navigationStart&&(R=performance.timing.navigationStart),performance.now=function(){return Date.now()-R}}var H=new r;y.prototype.step=function(z,J,$){if($=$||10,J=J||0,J===0)this.internalStep(z),this.time+=z;else{var A=Math.floor((this.time+J)/z)-Math.floor(this.time/z);A=Math.min(A,$);for(var O=performance.now(),P=0;P!==A&&(this.internalStep(z),!(performance.now()-O>z*1e3));P++);this.time+=J;for(var C=this.time%z,E=C/z,N=H,rt=this.bodies,Q=0;Q!==rt.length;Q++){var X=rt[Q];X.type!==g.STATIC&&X.sleepState!==g.SLEEPING?(X.position.vsub(X.previousPosition,N),N.scale(E,N),X.position.vadd(N,X.interpolatedPosition)):(X.interpolatedPosition.copy(X.position),X.interpolatedQuaternion.copy(X.quaternion))}}};var b={type:"postStep"},T={type:"preStep"},L={type:"collide",body:null,contact:null},D=[],q=[],F=[],V=[];new r,new r,new r,new r,new r,new r,new r,new r,new r,new s;var Y=new s,it=new s,G=new r;y.prototype.internalStep=function(z){this.dt=z;var J=this.contacts,$=F,A=V,O=this.numObjects(),P=this.bodies,C=this.solver,E=this.gravity,N=this.doProfiling,rt=this.profile,Q=g.DYNAMIC,X,K=this.constraints,ht=q;E.norm();var Mt=E.x,mt=E.y,St=E.z,ct=0;for(N&&(X=performance.now()),ct=0;ct!==O;ct++){var vt=P[ct];if(vt.type&Q){var Ht=vt.force,Bt=vt.mass;Ht.x+=Bt*Mt,Ht.y+=Bt*mt,Ht.z+=Bt*St}}for(var ct=0,Wt=this.subsystems.length;ct!==Wt;ct++)this.subsystems[ct].update();N&&(X=performance.now()),$.length=0,A.length=0,this.broadphase.collisionPairs(this,$,A),N&&(rt.broadphase=performance.now()-X);var Tt=K.length;for(ct=0;ct!==Tt;ct++){var Lt=K[ct];if(!Lt.collideConnected)for(var Xt=$.length-1;Xt>=0;Xt-=1)(Lt.bodyA===$[Xt]&&Lt.bodyB===A[Xt]||Lt.bodyB===$[Xt]&&Lt.bodyA===A[Xt])&&($.splice(Xt,1),A.splice(Xt,1))}this.collisionMatrixTick(),N&&(X=performance.now());var I=D,S=J.length;for(ct=0;ct!==S;ct++)I.push(J[ct]);J.length=0;var nt=this.frictionEquations.length;for(ct=0;ct!==nt;ct++)ht.push(this.frictionEquations[ct]);this.frictionEquations.length=0,this.narrowphase.getContacts($,A,this,J,I,this.frictionEquations,ht),N&&(rt.narrowphase=performance.now()-X),N&&(X=performance.now());for(var ct=0;ct<this.frictionEquations.length;ct++)C.addEquation(this.frictionEquations[ct]);for(var ft=J.length,xt=0;xt!==ft;xt++){var Lt=J[xt],vt=Lt.bi,_t=Lt.bj;Lt.si,Lt.sj;var Nt;if(vt.material&&_t.material?Nt=this.getContactMaterial(vt.material,_t.material)||this.defaultContactMaterial:Nt=this.defaultContactMaterial,Nt.friction,vt.material&&_t.material&&(vt.material.friction>=0&&_t.material.friction>=0&&vt.material.friction*_t.material.friction,vt.material.restitution>=0&&_t.material.restitution>=0&&(Lt.restitution=vt.material.restitution*_t.material.restitution)),C.addEquation(Lt),vt.allowSleep&&vt.type===g.DYNAMIC&&vt.sleepState===g.SLEEPING&&_t.sleepState===g.AWAKE&&_t.type!==g.STATIC){var W=_t.velocity.norm2()+_t.angularVelocity.norm2(),tt=Math.pow(_t.sleepSpeedLimit,2);W>=tt*2&&(vt._wakeUpAfterNarrowphase=!0)}if(_t.allowSleep&&_t.type===g.DYNAMIC&&_t.sleepState===g.SLEEPING&&vt.sleepState===g.AWAKE&&vt.type!==g.STATIC){var Rt=vt.velocity.norm2()+vt.angularVelocity.norm2(),Ft=Math.pow(vt.sleepSpeedLimit,2);Rt>=Ft*2&&(_t._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(vt,_t,!0),this.collisionMatrixPrevious.get(vt,_t)||(L.body=_t,L.contact=Lt,vt.dispatchEvent(L),L.body=vt,_t.dispatchEvent(L))}for(N&&(rt.makeContactConstraints=performance.now()-X,X=performance.now()),ct=0;ct!==O;ct++){var vt=P[ct];vt._wakeUpAfterNarrowphase&&(vt.wakeUp(),vt._wakeUpAfterNarrowphase=!1)}var Tt=K.length;for(ct=0;ct!==Tt;ct++){var Lt=K[ct];Lt.update();for(var Xt=0,zt=Lt.equations.length;Xt!==zt;Xt++){var Ot=Lt.equations[Xt];C.addEquation(Ot)}}C.solve(z,this),N&&(rt.solve=performance.now()-X),C.removeAllEquations();var Zt=Math.pow;for(ct=0;ct!==O;ct++){var vt=P[ct];if(vt.type&Q){var $t=Zt(1-vt.linearDamping,z),Jt=vt.velocity;Jt.mult($t,Jt);var j=vt.angularVelocity;if(j){var at=Zt(1-vt.angularDamping,z);j.mult(at,j)}}}for(this.dispatchEvent(T),ct=0;ct!==O;ct++){var vt=P[ct];vt.preStep&&vt.preStep.call(vt)}N&&(X=performance.now());var bt=Y,Ct=it,Ut=this.stepnumber,ee=g.DYNAMIC|g.KINEMATIC,le=Ut%(this.quatNormalizeSkip+1)===0,de=this.quatNormalizeFast,De=z*.5;for(i.types.PLANE,i.types.CONVEXPOLYHEDRON,ct=0;ct!==O;ct++){var Kt=P[ct],st=Kt.force,ot=Kt.torque;if(Kt.type&ee&&Kt.sleepState!==g.SLEEPING){var yt=Kt.velocity,wt=Kt.angularVelocity,qt=Kt.position,Dt=Kt.quaternion,M=Kt.invMass,k=Kt.invInertiaWorld;yt.x+=st.x*M*z,yt.y+=st.y*M*z,yt.z+=st.z*M*z,Kt.angularVelocity&&(k.vmult(ot,G),G.mult(z,G),G.vadd(wt,wt)),qt.x+=yt.x*z,qt.y+=yt.y*z,qt.z+=yt.z*z,Kt.angularVelocity&&(bt.set(wt.x,wt.y,wt.z,0),bt.mult(Dt,Ct),Dt.x+=De*Ct.x,Dt.y+=De*Ct.y,Dt.z+=De*Ct.z,Dt.w+=De*Ct.w,le&&(de?Dt.normalizeFast():Dt.normalize())),Kt.aabb&&(Kt.aabbNeedsUpdate=!0),Kt.updateInertiaWorld&&Kt.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,N&&(rt.integrate=performance.now()-X),this.time+=z,this.stepnumber+=1,this.dispatchEvent(b),ct=0;ct!==O;ct++){var vt=P[ct],B=vt.postStep;B&&B.call(vt)}if(this.allowSleep)for(ct=0;ct!==O;ct++)P[ct].sleepTick(this.time)},y.prototype.clearForces=function(){for(var z=this.bodies,J=z.length,$=0;$!==J;$++){var A=z[$];A.force,A.torque,A.force.set(0,0,0),A.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Xf);const Fe=ss,ms=new ps,xi={};xi.createSphere=()=>{Qf(Math.random(.5)*.5,{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})};xi.createBox=()=>{np(Math.random(),Math.random(),Math.random(),{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})};xi.reset=()=>{for(const d of bn)d.body.removeEventListener("collide",gs),tn.removeBody(d.body),gn.remove(d.mesh),console.log(bn.length),bn.splice(0,bn.length),console.log(bn.length)};ms.add(xi,"createSphere");ms.add(xi,"createBox");ms.add(xi,"reset").name("reset the scene");const _o=document.querySelector("canvas.webgl"),gn=new yf,Yf=new Df(1.5);gn.add(Yf);const jr=new Audio("/sounds/hit.mp3"),gs=d=>{d.contact.getImpactVelocityAlongNormal()>1.5&&(jr.volume=Math.random(),jr.currentTime=0,jr.play())};new Af;const $f=new Ef,vs=$f.load(["/textures/environmentMaps/0/px.png","/textures/environmentMaps/0/nx.png","/textures/environmentMaps/0/py.png","/textures/environmentMaps/0/ny.png","/textures/environmentMaps/0/pz.png","/textures/environmentMaps/0/nz.png"]),tn=new Fe.World;tn.broadphase=new Fe.SAPBroadphase(tn);tn.allowSleep=!0;tn.gravity.set(0,-9.82,0);const or=new Fe.Material("default"),yo=new Fe.ContactMaterial(or,or,{friction:.1,restitution:.7});tn.addContactMaterial(yo);tn.defaultContactMaterial=yo;const jf=new Fe.Plane,dr=new Fe.Body;dr.mass=0;dr.addShape(jf);dr.quaternion.setFromAxisAngle(new Fe.Vec3(-1,0,0),Math.PI*.5);tn.addBody(dr);const xs=new Qe(new hr(10,10),new ds({color:"#777777",metalness:.3,roughness:.4,envMap:vs,envMapIntensity:.5}));xs.receiveShadow=!0;xs.rotation.x=-Math.PI*.5;gn.add(xs);const Zf=new Pf(16777215,.7);gn.add(Zf);const vn=new Lf(16777215,.2);vn.castShadow=!0;vn.shadow.mapSize.set(1024,1024);vn.shadow.camera.far=15;vn.shadow.camera.left=-7;vn.shadow.camera.top=7;vn.shadow.camera.right=7;vn.shadow.camera.bottom=-7;vn.position.set(5,5,5);gn.add(vn);const rn={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{rn.width=window.innerWidth,rn.height=window.innerHeight,pi.aspect=rn.width/rn.height,pi.updateProjectionMatrix(),kn.setSize(rn.width,rn.height),kn.setPixelRatio(Math.min(window.devicePixelRatio,2))});const pi=new Xe(75,rn.width/rn.height,.1,100);pi.position.set(-3,3,3);gn.add(pi);const wo=new If(pi,_o);wo.enableDamping=!0;const kn=new mo({canvas:_o});kn.shadowMap.enabled=!0;kn.shadowMap.type=Ga;kn.setSize(rn.width,rn.height);kn.setPixelRatio(Math.min(window.devicePixelRatio,2));const bn=[],Kf=new us(1,20,20),Jf=new ds({metalness:.3,roughness:.4,envMap:vs,envMapIntensity:.5}),Qf=(d,t)=>{const e=new Qe(Kf,Jf);e.scale.set(d,d,d),e.castShadow=!0,e.position.copy(t),gn.add(e);const n=new Fe.Sphere(d),a=new Fe.Body({mass:1,position:new Fe.Vec3(0,3,0),shape:n,material:or});a.position.copy(t),a.addEventListener("collide",gs),tn.addBody(a),bn.push({mesh:e,body:a})},tp=new gi(1,1,1),ep=new ds({metalness:.3,roughness:.4,envMap:vs,envMapIntensity:.5}),np=(d,t,e,n)=>{const a=new Qe(tp,ep);a.scale.set(d,t,e),a.castShadow=!0,a.position.copy(n),gn.add(a);const i=new Fe.Box(new Fe.Vec3(d/2,t/2,e/2)),r=new Fe.Body({mass:1,position:new Fe.Vec3(0,3,0),shape:i,material:or});r.position.copy(n),r.addEventListener("collide",gs),tn.addBody(r),bn.push({mesh:a,body:r})},ip=new Rf,bo=()=>{const d=ip.getElapsedTime();tn.step(1/60,d,3);for(const t of bn)t.mesh.position.copy(t.body.position),t.mesh.quaternion.copy(t.body.quaternion);wo.update(),kn.render(gn,pi),window.requestAnimationFrame(bo)};bo();
//# sourceMappingURL=index-34b7572a.js.map
