import{A as Y4,B as K4,C as J4,a as P4,b as T4,c as F4,d as D4,e as R2,f as B4,g as E4,h as H4,i as I4,j as R4,k as U2,l as _2,m as U4,n as a2,o as _4,p as O4,q as W4,r as q4,s as G4,t as j4,u as V4,v as $4,z as X4}from"./chunk-Y6B4NFGC.js";import{$ as G,$a as K,Ab as j,Bb as y,Cb as b4,Da as f4,Db as S4,Ga as L,H as i4,Hb as H,Jb as h2,Ka as m2,Kb as N4,Lb as m,Mb as I,Nb as A,Ob as y4,Q as g2,Qa as c2,R as D2,V as E,Vb as M1,Wa as h,Xa as B2,Xb as C2,Ya as E2,Yb as x2,Za as m4,_ as q,_b as w4,a as a4,ab as p4,b as e4,ba as s4,bb as z4,bc as L1,c as l6,cc as k4,d as r6,ec as I2,fa as n4,fc as R,ga as o4,gb as u4,gc as A4,hb as d4,ib as H2,ja as t4,jb as M4,kb as L4,l as l4,lb as v4,mb as P,nb as z,ob as d,pb as N,qb as x,rb as b,sb as p2,tb as g4,ub as h4,vb as C4,wb as s2,xb as x4,z as r4}from"./chunk-ELYB2VHN.js";var J0=l6(c4=>{"use strict";Object.defineProperty(c4,"__esModule",{value:!0});var v2=class c{constructor(e,a){var l,r;this.bornTime=Date.now(),this.hideEventHandler=this.handleHideEvent.bind(this),c.appendCSS(),this.viewID=c.generateViewID();let i=c.getHtml(this.viewID);document.body.appendChild(i),this.view=document.getElementById(this.viewID.toString())||document.createElement("div"),this.setMessage(this.message=e),this.setPosition(this.position=a?.position||c.DEFAULT_POSITION),this.setTheme(a?.theme),this.setIconSrc(a?.iconSrc),this.setStyle(a?.style),this.setActionText(a?.actionText),this.setActionCallback(a?.onAction),this.waitForEvent=(l=a?.waitForEvent)!==null&&l!==void 0?l:!0,this.timeout=(r=a?.timeout)!==null&&r!==void 0?r:c.DEFAULT_HIDING_TIMEOUT,this.isWaitingForHide=!1,this.afterHide=a?.afterHide,this.addHideEventListener(),this.waitForEvent||this.startHidingTimer(this.timeout),this.show()}static appendCSS(){if(document.getElementById("snackbar-style")===null){let e=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.id="snackbar-style",e.appendChild(a),a.appendChild(document.createTextNode(a9))}}static generateViewID(){let e=Math.floor(Math.random()*1e9)+1e8;return document.getElementById(e.toString())===null?e:c.generateViewID()}static getHtml(e){let a=`
            <div class="snackbar" id="${e}">
                <div class="container">
                    <span class='icon'></span>
                    <p class="message"></p>
                    <input type="button" class="actionButton" id="${e}_actionButton" value="">
                </div>
            </div>
        `,l=document.createElement("div");return l.innerHTML=a.trim(),l.firstChild||l}setMessage(e){this.message=e;let a=this.view.getElementsByClassName("message")[0];a.innerHTML=this.message}setPosition(e){this.position=e,this.view.classList.remove("bottom-left"),this.view.classList.remove("bottom-center"),this.view.classList.remove("bottom-right"),this.view.classList.remove("top-left"),this.view.classList.remove("top-center"),this.view.classList.remove("top-right"),this.view.classList.add(e),c.adjustListPositions(this)}setIconSrc(e){if(e===void 0)return;this.iconSrc=e;let a=this.view.getElementsByClassName("icon")[0];a.style.setProperty("display","block"),a.style.setProperty("background-image","url("+this.iconSrc+")")}setTheme(e){e!==void 0&&(this.theme==e,this.view.classList.remove("light"),this.view.classList.remove("dark"),this.view.classList.add(e))}setStyle(e){if(e!==void 0){this.style=e;for(let[a,l]of Object.entries(this.style)){let i=document.getElementById(this.viewID.toString()).getElementsByClassName(a)[0];if(i!==void 0)for(let s of l)i.style.setProperty(s[0],s[1])}}}setActionText(e){if(e===void 0)return;this.actionText=e;let a=this.view.getElementsByClassName("actionButton")[0];a.style.setProperty("display","block"),a.value=this.actionText}setActionCallback(e){this.onAction=e,this.view.getElementsByClassName("actionButton")[0].addEventListener("click",()=>{this.onAction!==void 0&&this.onAction(),this.hide()})}show(){setTimeout(()=>{c.List.push(this),c.adjustListPositions(this)},10)}addHideEventListener(){let e=this;"mousemove mousedown mouseup touchmove click keydown keyup scroll".split(" ").forEach(function(a){window.addEventListener(a,e.hideEventHandler)})}removeHideEventListener(){let e=this;"mousemove mousedown mouseup touchmove click keydown keyup scroll".split(" ").forEach(a=>{window.removeEventListener(a,e.hideEventHandler)})}handleHideEvent(){let e=this.timeout;Date.now()-this.bornTime>this.timeout&&(e=this.timeout/2),this.startHidingTimer(e),this.removeHideEventListener()}startHidingTimer(e){e>0&&!this.isWaitingForHide&&(this.isWaitingForHide=!0,setTimeout(()=>{this.hide()},e))}hide(){let e=this;c.List.filter(r=>r.position===this.position).length>1?(this.view.style.opacity="0",this.position.indexOf("bottom")>=0?this.view.style.marginBottom="-"+(this.getHeight()+5)+"px":this.view.style.marginTop="-"+(this.getHeight()+5)+"px"):this.position.indexOf("bottom")>=0?this.view.style.bottom="-"+(this.getHeight()+15)+"px":this.view.style.top="-"+(this.getHeight()+15)+"px";let l=c.List.indexOf(this);l>-1&&c.List.splice(l,1),c.adjustListPositions(this),setTimeout(function(){e.view.remove(),e.afterHide!==void 0&&e.afterHide()},500)}static adjustListPositions(e){let a=c.List.filter(l=>l.position===e.position);a.forEach(function(l,r){let i=20+(a.length-r-1)*(l.getHeight()+5)+"px";e.position.indexOf("bottom")>=0?(l.view.style.bottom=i,l.view.style.top="unset"):(l.view.style.top=i,l.view.style.bottom="unset")})}getHeight(){return+getComputedStyle(this.view).height.replace("px","")}};c4.default=v2;v2.List=[];v2.DEFAULT_HIDING_TIMEOUT=4e3;v2.DEFAULT_POSITION="bottom-left";var a9=`
.snackbar {
    z-index: 999999995;
    position: fixed;
    transition: top 400ms ease 0s, bottom 400ms ease 0s, margin-top 300ms ease 0s, margin-bottom 300ms ease 0s, opacity 150ms ease 150ms;
  }
  .snackbar > .container {
    box-sizing: border-box;
    max-width: 450px;
    min-height: 46px;
    padding: 9px 20px 10px 20px;
    border-radius: 3px;
    background-color: rgb(58, 58, 58);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
    display: flex;
    color: rgb(250, 250, 250);
    align-items: center;
    gap: 10px;
    transition: all 150ms ease-in-out;
  }
  .snackbar > .container * {
    box-sizing: border-box;
  }
  .snackbar > .container > .icon {
    width: 20px;
    height: 20px;
    margin-left: -3px;
    margin-right: -2px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    display: none;
  }
  .snackbar > .container > .message {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 0.9375rem;
  }
  .snackbar > .container > .actionButton {
    padding: 5px 3px;
    background-color: transparent;
    font-size: 0.9375rem;
    line-height: 0.9375rem;
    color: #F7FF00;
    border: none;
    outline: none;
    cursor: pointer;
    display: none;
  }
  
  .snackbar.bottom-left {
    left: 24px;
    bottom: -60px;
  }
  
  .snackbar.bottom-center {
    left: 50%;
    bottom: -60px;
    transform: translate(-50%, 0);
  }
  
  .snackbar.bottom-right {
    right: 24px;
    bottom: -60px;
  }
  
  .snackbar.top-left {
    left: 24px;
    top: -60px;
  }
  
  .snackbar.top-center {
    left: 50%;
    top: -60px;
    transform: translate(-50%, 0);
  }
  
  .snackbar.top-right {
    right: 24px;
    top: -60px;
  }
  
  .snackbar.light > .container {
    background-color: #fbfbfb;
    color: #555;
  }
  .snackbar.light > .container > .actionButton {
    color: #D60;
  }
  
  @media only screen and (max-width: 500px) {
    .snackbar {
      max-width: calc(100% - 48px);
    }
    .snackbar.top-center,
  .snackbar.bottom-center {
      width: calc(100% - 24px);
      max-width: unset;
      left: 12px;
      transform: translate(0, 0);
      display: flex;
      justify-content: center;
    }
  }
`});var s6=()=>[P4];function n6(c,e){c&1&&C4(0)}function o6(c,e){if(c&1&&K(0,n6,1,0,"ng-container",2),c&2){let a=y();P("ngComponentOutlet",a.largeComponent)}}function t6(c,e){c&1&&(z(0,"p"),m(1,"Plz Wait!!! YOu Component is Being Prepared...."),d())}var b2=class c{largeComponent;constructor(){import("./chunk-MIAA2Z3J.js").then(e=>{this.largeComponent=e.LargeComponent})}static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-home"]],decls:7,vars:0,consts:[[500],[1,"text-center"],[4,"ngComponentOutlet"]],template:function(a,l){a&1&&(z(0,"h2",1),m(1,"This is Home Component"),d(),N(2,"hr"),p4(3,o6,1,1)(4,t6,2,0),u4(5,3,s6,null,4,null,null,0,z4),d4())},dependencies:[R2],encapsulation:2})};var O2=class c{constructor(e){this.routerObj=e}doSomethingAndGoToHome(){console.log("Do Something..."),this.routerObj.navigate(["/home"])}static \u0275fac=function(a){return new(a||c)(c2(U4))};static \u0275cmp=h({type:c,selectors:[["app-aboutus"]],decls:9,vars:0,consts:[[1,"text-center"],["href","home",1,"mx-2"],["routerLink","/home",1,"mx-2"],[1,"mx-2",3,"click"]],template:function(a,l){a&1&&(z(0,"h2",0),m(1,"This is Aboutus Component"),d(),N(2,"hr"),z(3,"a",1),m(4,"Go To Home Page"),d(),z(5,"button",2),m(6,"Go to Home Page"),d(),z(7,"button",3),j("click",function(){return l.doSomethingAndGoToHome()}),m(8,"Do Something & Go to Home Page"),d())},dependencies:[a2],encapsulation:2})};var W2=class c{static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-careers"]],decls:14,vars:0,consts:[[1,"text-center"],[1,"container"],[1,"row"],[1,"col-sm-3"],["routerLink","permanent"],["routerLink","contract"],[1,"col-sm-9"]],template:function(a,l){a&1&&(z(0,"h2",0),m(1,"This is Careers Component"),d(),N(2,"hr"),z(3,"div",1)(4,"div",2)(5,"div",3)(6,"p")(7,"a",4),m(8,"Permanent Jobs"),d()(),z(9,"p")(10,"a",5),m(11,"Contract Jobs"),d()()(),z(12,"div",6),N(13,"router-outlet"),d()()())},dependencies:[_2,a2],encapsulation:2})};var q2=class c{hasChanges=!0;submitForm(e){this.hasChanges=!1,console.log(e)}static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-contactus"]],decls:19,vars:2,consts:[["signupForm","ngForm"],["firstName","ngModel"],[1,"text-center"],[3,"submit"],["name","firstName","ngModel","","required","","minlength","5"],["name","lastName","ngModel",""],["name","email","ngModel",""],["type","reset","value","Clear",1,"btn","btn-danger","ml-5"],["type","submit","value","Submit",1,"btn","btn-primary","mx-2",3,"disabled"]],template:function(a,l){if(a&1){let r=s2();z(0,"h2",2),m(1,"This is ContactUs Component"),d(),N(2,"hr"),z(3,"form",3,0),j("submit",function(){q(r);let s=H(4);return G(l.submitForm(s))}),z(5,"p"),m(6," FirstName: "),N(7,"input",4,1),d(),z(9,"p"),m(10," LastName: "),N(11,"input",5),d(),z(12,"p"),m(13," Email: "),N(14,"input",6),d(),N(15,"input",7)(16,"input",8),d(),z(17,"h1"),m(18),d()}if(a&2){let r=H(4);L(16),P("disabled",r.invalid),L(2),A("HasChanges: ",l.hasChanges)}},dependencies:[K4,$4,W4,q4,G4,X4,Y4,V4,j4],encapsulation:2})};var G2=class c{static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-notfound"]],decls:3,vars:0,consts:[[1,"text-center"]],template:function(a,l){a&1&&(x(0,"h2",0),m(1,"404! The Page you are looking for is not present!!!"),b(),p2(2,"hr"))},encapsulation:2})};var Q4=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}];function N1(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,l=Array(e);a<e;a++)l[a]=c[a];return l}function p6(c){if(Array.isArray(c))return c}function z6(c){if(Array.isArray(c))return N1(c)}function u6(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function Z4(c,e){for(var a=0;a<e.length;a++){var l=e[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,T3(l.key),l)}}function d6(c,e,a){return e&&Z4(c.prototype,e),a&&Z4(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function $2(c,e){var a=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!a){if(Array.isArray(c)||(a=_1(c))||e&&c&&typeof c.length=="number"){a&&(c=a);var l=0,r=function(){};return{s:r,n:function(){return l>=c.length?{done:!0}:{done:!1,value:c[l++]}},e:function(o){throw o},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,s=!0,n=!1;return{s:function(){a=a.call(c)},n:function(){var o=a.next();return s=o.done,o},e:function(o){n=!0,i=o},f:function(){try{s||a.return==null||a.return()}finally{if(n)throw i}}}}function g(c,e,a){return(e=T3(e))in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function M6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function L6(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var l,r,i,s,n=[],o=!0,f=!1;try{if(i=(a=a.call(c)).next,e===0){if(Object(a)!==a)return;o=!1}else for(;!(o=(l=i.call(a)).done)&&(n.push(l.value),n.length!==e);o=!0);}catch(u){f=!0,r=u}finally{try{if(!o&&a.return!=null&&(s=a.return(),Object(s)!==s))return}finally{if(f)throw r}}return n}}function v6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c3(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(c);e&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,l)}return a}function t(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?c3(Object(a),!0).forEach(function(l){g(c,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):c3(Object(a)).forEach(function(l){Object.defineProperty(c,l,Object.getOwnPropertyDescriptor(a,l))})}return c}function Z2(c,e){return p6(c)||L6(c,e)||_1(c,e)||v6()}function $(c){return z6(c)||M6(c)||_1(c)||g6()}function h6(c,e){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var l=a.call(c,e||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(c)}function T3(c){var e=h6(c,"string");return typeof e=="symbol"?e:e+""}function K2(c){"@babel/helpers - typeof";return K2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K2(c)}function _1(c,e){if(c){if(typeof c=="string")return N1(c,e);var a={}.toString.call(c).slice(8,-1);return a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set"?Array.from(c):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?N1(c,e):void 0}}var a3=function(){},O1={},F3={},D3=null,B3={mark:a3,measure:a3};try{typeof window<"u"&&(O1=window),typeof document<"u"&&(F3=document),typeof MutationObserver<"u"&&(D3=MutationObserver),typeof performance<"u"&&(B3=performance)}catch{}var C6=O1.navigator||{},e3=C6.userAgent,l3=e3===void 0?"":e3,l2=O1,w=F3,r3=D3,j2=B3,u9=!!l2.document,Z=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",E3=~l3.indexOf("MSIE")||~l3.indexOf("Trident/"),v1,x6=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,b6=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,H3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},S6={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},I3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],B="classic",k2="duotone",R3="sharp",U3="sharp-duotone",_3="chisel",O3="etch",W3="jelly",q3="jelly-duo",G3="jelly-fill",j3="notdog",V3="notdog-duo",$3="slab",X3="slab-press",Y3="thumbprint",K3="utility",J3="utility-duo",Q3="utility-fill",Z3="whiteboard",N6="Classic",y6="Duotone",w6="Sharp",k6="Sharp Duotone",A6="Chisel",P6="Etch",T6="Jelly",F6="Jelly Duo",D6="Jelly Fill",B6="Notdog",E6="Notdog Duo",H6="Slab",I6="Slab Press",R6="Thumbprint",U6="Utility",_6="Utility Duo",O6="Utility Fill",W6="Whiteboard",c0=[B,k2,R3,U3,_3,O3,W3,q3,G3,j3,V3,$3,X3,Y3,K3,J3,Q3,Z3],d9=(v1={},g(g(g(g(g(g(g(g(g(g(v1,B,N6),k2,y6),R3,w6),U3,k6),_3,A6),O3,P6),W3,T6),q3,F6),G3,D6),j3,B6),g(g(g(g(g(g(g(g(v1,V3,E6),$3,H6),X3,I6),Y3,R6),K3,U6),J3,_6),Q3,O6),Z3,W6)),q6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},G6={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},j6=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),V6={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},a0=["fak","fa-kit","fakd","fa-kit-duotone"],i3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},$6=["kit"],X6="kit",Y6="kit-duotone",K6="Kit",J6="Kit Duotone",M9=g(g({},X6,K6),Y6,J6),Q6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Z6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},c8={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},s3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},g1,V2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},a8=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],e8="classic",l8="duotone",r8="sharp",i8="sharp-duotone",s8="chisel",n8="etch",o8="jelly",t8="jelly-duo",f8="jelly-fill",m8="notdog",p8="notdog-duo",z8="slab",u8="slab-press",d8="thumbprint",M8="utility",L8="utility-duo",v8="utility-fill",g8="whiteboard",h8="Classic",C8="Duotone",x8="Sharp",b8="Sharp Duotone",S8="Chisel",N8="Etch",y8="Jelly",w8="Jelly Duo",k8="Jelly Fill",A8="Notdog",P8="Notdog Duo",T8="Slab",F8="Slab Press",D8="Thumbprint",B8="Utility",E8="Utility Duo",H8="Utility Fill",I8="Whiteboard",L9=(g1={},g(g(g(g(g(g(g(g(g(g(g1,e8,h8),l8,C8),r8,x8),i8,b8),s8,S8),n8,N8),o8,y8),t8,w8),f8,k8),m8,A8),g(g(g(g(g(g(g(g(g1,p8,P8),z8,T8),u8,F8),d8,D8),M8,B8),L8,E8),v8,H8),g8,I8)),R8="kit",U8="kit-duotone",_8="Kit",O8="Kit Duotone",v9=g(g({},R8,_8),U8,O8),W8={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},q8={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},y1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},G8=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],e0=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(a8,G8),j8=["solid","regular","light","thin","duotone","brands","semibold"],l0=[1,2,3,4,5,6,7,8,9,10],V8=l0.concat([11,12,13,14,15,16,17,18,19,20]),$8=["aw","fw","pull-left","pull-right"],X8=[].concat($(Object.keys(q8)),j8,$8,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",V2.GROUP,V2.SWAP_OPACITY,V2.PRIMARY,V2.SECONDARY]).concat(l0.map(function(c){return"".concat(c,"x")})).concat(V8.map(function(c){return"w-".concat(c)})),Y8={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},J="___FONT_AWESOME___",w1=16,r0="fa",i0="svg-inline--fa",o2="data-fa-i2svg",k1="data-fa-pseudo-element",K8="data-fa-pseudo-element-pending",W1="data-prefix",q1="data-icon",n3="fontawesome-i2svg",J8="async",Q8=["HTML","HEAD","STYLE","SCRIPT"],s0=["::before","::after",":before",":after"],n0=(function(){try{return!0}catch{return!1}})();function A2(c){return new Proxy(c,{get:function(a,l){return l in a?a[l]:a[B]}})}var o0=t({},H3);o0[B]=t(t(t(t({},{"fa-duotone":"duotone"}),H3[B]),i3.kit),i3["kit-duotone"]);var Z8=A2(o0),A1=t({},V6);A1[B]=t(t(t(t({},{duotone:"fad"}),A1[B]),s3.kit),s3["kit-duotone"]);var o3=A2(A1),P1=t({},y1);P1[B]=t(t({},P1[B]),c8.kit);var G1=A2(P1),T1=t({},W8);T1[B]=t(t({},T1[B]),Q6.kit);var g9=A2(T1),c5=x6,t0="fa-layers-text",a5=b6,e5=t({},q6),h9=A2(e5),l5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],h1=S6,r5=[].concat($($6),$(X8)),N2=l2.FontAwesomeConfig||{};function i5(c){var e=w.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function s5(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}w&&typeof w.querySelector=="function"&&(t3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],t3.forEach(function(c){var e=Z2(c,2),a=e[0],l=e[1],r=s5(i5(a));r!=null&&(N2[l]=r)}));var t3,f0={styleDefault:"solid",familyDefault:B,cssPrefix:r0,replacementClass:i0,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};N2.familyPrefix&&(N2.cssPrefix=N2.familyPrefix);var d2=t(t({},f0),N2);d2.autoReplaceSvg||(d2.observeMutations=!1);var M={};Object.keys(f0).forEach(function(c){Object.defineProperty(M,c,{enumerable:!0,set:function(a){d2[c]=a,y2.forEach(function(l){return l(M)})},get:function(){return d2[c]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(e){d2.cssPrefix=e,y2.forEach(function(a){return a(M)})},get:function(){return d2.cssPrefix}});l2.FontAwesomeConfig=M;var y2=[];function n5(c){return y2.push(c),function(){y2.splice(y2.indexOf(c),1)}}var e2=w1,X={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function o5(c){if(!(!c||!Z)){var e=w.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=w.head.childNodes,l=null,r=a.length-1;r>-1;r--){var i=a[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(l=i)}return w.head.insertBefore(e,l),c}}var t5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function f3(){for(var c=12,e="";c-- >0;)e+=t5[Math.random()*62|0];return e}function M2(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function j1(c){return c.classList?M2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function m0(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f5(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(m0(c[a]),'" ')},"").trim()}function c1(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function V1(c){return c.size!==X.size||c.x!==X.x||c.y!==X.y||c.rotate!==X.rotate||c.flipX||c.flipY}function m5(c){var e=c.transform,a=c.containerWidth,l=c.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),n="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(i," ").concat(s," ").concat(n)},f={transform:"translate(".concat(l/2*-1," -256)")};return{outer:r,inner:o,path:f}}function p5(c){var e=c.transform,a=c.width,l=a===void 0?w1:a,r=c.height,i=r===void 0?w1:r,s=c.startCentered,n=s===void 0?!1:s,o="";return n&&E3?o+="translate(".concat(e.x/e2-l/2,"em, ").concat(e.y/e2-i/2,"em) "):n?o+="translate(calc(-50% + ".concat(e.x/e2,"em), calc(-50% + ").concat(e.y/e2,"em)) "):o+="translate(".concat(e.x/e2,"em, ").concat(e.y/e2,"em) "),o+="scale(".concat(e.size/e2*(e.flipX?-1:1),", ").concat(e.size/e2*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var z5=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function p0(){var c=r0,e=i0,a=M.cssPrefix,l=M.replacementClass,r=z5;if(a!==c||l!==e){var i=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(a,"-")).replace(s,"--".concat(a,"-")).replace(n,".".concat(l))}return r}var m3=!1;function C1(){M.autoAddCss&&!m3&&(o5(p0()),m3=!0)}var u5={mixout:function(){return{dom:{css:p0,insertCss:C1}}},hooks:function(){return{beforeDOMElementCreation:function(){C1()},beforeI2svg:function(){C1()}}}},Q=l2||{};Q[J]||(Q[J]={});Q[J].styles||(Q[J].styles={});Q[J].hooks||(Q[J].hooks={});Q[J].shims||(Q[J].shims=[]);var V=Q[J],z0=[],u0=function(){w.removeEventListener("DOMContentLoaded",u0),J2=1,z0.map(function(e){return e()})},J2=!1;Z&&(J2=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),J2||w.addEventListener("DOMContentLoaded",u0));function d5(c){Z&&(J2?setTimeout(c,0):z0.push(c))}function P2(c){var e=c.tag,a=c.attributes,l=a===void 0?{}:a,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?m0(c):"<".concat(e," ").concat(f5(l),">").concat(i.map(P2).join(""),"</").concat(e,">")}function p3(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var M5=function(e,a){return function(l,r,i,s){return e.call(a,l,r,i,s)}},x1=function(e,a,l,r){var i=Object.keys(e),s=i.length,n=r!==void 0?M5(a,r):a,o,f,u;for(l===void 0?(o=1,u=e[i[0]]):(o=0,u=l);o<s;o++)f=i[o],u=n(u,e[f],f,e);return u};function d0(c){return $(c).length!==1?null:c.codePointAt(0).toString(16)}function z3(c){return Object.keys(c).reduce(function(e,a){var l=c[a],r=!!l.icon;return r?e[l.iconName]=l.icon:e[a]=l,e},{})}function F1(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=a.skipHooks,r=l===void 0?!1:l,i=z3(e);typeof V.hooks.addPack=="function"&&!r?V.hooks.addPack(c,z3(e)):V.styles[c]=t(t({},V.styles[c]||{}),i),c==="fas"&&F1("fa",e)}var w2=V.styles,L5=V.shims,M0=Object.keys(G1),v5=M0.reduce(function(c,e){return c[e]=Object.keys(G1[e]),c},{}),$1=null,L0={},v0={},g0={},h0={},C0={};function g5(c){return~r5.indexOf(c)}function h5(c,e){var a=e.split("-"),l=a[0],r=a.slice(1).join("-");return l===c&&r!==""&&!g5(r)?r:null}var x0=function(){var e=function(i){return x1(w2,function(s,n,o){return s[o]=x1(n,i,{}),s},{})};L0=e(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2]){var n=i[2].filter(function(o){return typeof o=="number"});n.forEach(function(o){r[o.toString(16)]=s})}return r}),v0=e(function(r,i,s){if(r[s]=s,i[2]){var n=i[2].filter(function(o){return typeof o=="string"});n.forEach(function(o){r[o]=s})}return r}),C0=e(function(r,i,s){var n=i[2];return r[s]=s,n.forEach(function(o){r[o]=s}),r});var a="far"in w2||M.autoFetchSvg,l=x1(L5,function(r,i){var s=i[0],n=i[1],o=i[2];return n==="far"&&!a&&(n="fas"),typeof s=="string"&&(r.names[s]={prefix:n,iconName:o}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:n,iconName:o}),r},{names:{},unicodes:{}});g0=l.names,h0=l.unicodes,$1=a1(M.styleDefault,{family:M.familyDefault})};n5(function(c){$1=a1(c.styleDefault,{family:M.familyDefault})});x0();function X1(c,e){return(L0[c]||{})[e]}function C5(c,e){return(v0[c]||{})[e]}function n2(c,e){return(C0[c]||{})[e]}function b0(c){return g0[c]||{prefix:null,iconName:null}}function x5(c){var e=h0[c],a=X1("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function r2(){return $1}var S0=function(){return{prefix:null,iconName:null,rest:[]}};function b5(c){var e=B,a=M0.reduce(function(l,r){return l[r]="".concat(M.cssPrefix,"-").concat(r),l},{});return c0.forEach(function(l){(c.includes(a[l])||c.some(function(r){return v5[l].includes(r)}))&&(e=l)}),e}function a1(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,l=a===void 0?B:a,r=Z8[l][c];if(l===k2&&!c)return"fad";var i=o3[l][c]||o3[l][r],s=c in V.styles?c:null,n=i||s||null;return n}function S5(c){var e=[],a=null;return c.forEach(function(l){var r=h5(M.cssPrefix,l);r?a=r:l&&e.push(l)}),{iconName:a,rest:e}}function u3(c){return c.sort().filter(function(e,a,l){return l.indexOf(e)===a})}var d3=e0.concat(a0);function e1(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,l=a===void 0?!1:a,r=null,i=u3(c.filter(function(v){return d3.includes(v)})),s=u3(c.filter(function(v){return!d3.includes(v)})),n=i.filter(function(v){return r=v,!I3.includes(v)}),o=Z2(n,1),f=o[0],u=f===void 0?null:f,p=b5(i),C=t(t({},S5(s)),{},{prefix:a1(u,{family:p})});return t(t(t({},C),k5({values:c,family:p,styles:w2,config:M,canonical:C,givenPrefix:r})),N5(l,r,C))}function N5(c,e,a){var l=a.prefix,r=a.iconName;if(c||!l||!r)return{prefix:l,iconName:r};var i=e==="fa"?b0(r):{},s=n2(l,r);return r=i.iconName||s||r,l=i.prefix||l,l==="far"&&!w2.far&&w2.fas&&!M.autoFetchSvg&&(l="fas"),{prefix:l,iconName:r}}var y5=c0.filter(function(c){return c!==B||c!==k2}),w5=Object.keys(y1).filter(function(c){return c!==B}).map(function(c){return Object.keys(y1[c])}).flat();function k5(c){var e=c.values,a=c.family,l=c.canonical,r=c.givenPrefix,i=r===void 0?"":r,s=c.styles,n=s===void 0?{}:s,o=c.config,f=o===void 0?{}:o,u=a===k2,p=e.includes("fa-duotone")||e.includes("fad"),C=f.familyDefault==="duotone",v=l.prefix==="fad"||l.prefix==="fa-duotone";if(!u&&(p||C||v)&&(l.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),!l.prefix&&y5.includes(a)){var k=Object.keys(n).find(function(D){return w5.includes(D)});if(k||f.autoFetchSvg){var S=j6.get(a).defaultShortPrefixId;l.prefix=S,l.iconName=n2(l.prefix,l.iconName)||l.iconName}}return(l.prefix==="fa"||i==="fa")&&(l.prefix=r2()||"fas"),l}var A5=(function(){function c(){u6(this,c),this.definitions={}}return d6(c,[{key:"add",value:function(){for(var a=this,l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(n){a.definitions[n]=t(t({},a.definitions[n]||{}),s[n]),F1(n,s[n]);var o=G1[B][n];o&&F1(o,s[n]),x0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,l){var r=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(r).map(function(i){var s=r[i],n=s.prefix,o=s.iconName,f=s.icon,u=f[2];a[n]||(a[n]={}),u.length>0&&u.forEach(function(p){typeof p=="string"&&(a[n][p]=f)}),a[n][o]=f}),a}}])})(),M3=[],z2={},u2={},P5=Object.keys(u2);function T5(c,e){var a=e.mixoutsTo;return M3=c,z2={},Object.keys(u2).forEach(function(l){P5.indexOf(l)===-1&&delete u2[l]}),M3.forEach(function(l){var r=l.mixout?l.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(a[s]=r[s]),K2(r[s])==="object"&&Object.keys(r[s]).forEach(function(n){a[s]||(a[s]={}),a[s][n]=r[s][n]})}),l.hooks){var i=l.hooks();Object.keys(i).forEach(function(s){z2[s]||(z2[s]=[]),z2[s].push(i[s])})}l.provides&&l.provides(u2)}),a}function D1(c,e){for(var a=arguments.length,l=new Array(a>2?a-2:0),r=2;r<a;r++)l[r-2]=arguments[r];var i=z2[c]||[];return i.forEach(function(s){e=s.apply(null,[e].concat(l))}),e}function t2(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),l=1;l<e;l++)a[l-1]=arguments[l];var r=z2[c]||[];r.forEach(function(i){i.apply(null,a)})}function i2(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return u2[c]?u2[c].apply(null,e):void 0}function B1(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||r2();if(e)return e=n2(a,e)||e,p3(N0.definitions,a,e)||p3(V.styles,a,e)}var N0=new A5,F5=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,t2("noAuto")},D5={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(t2("beforeI2svg",e),i2("pseudoElements2svg",e),i2("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,d5(function(){E5({autoReplaceSvgRoot:a}),t2("watch",e)})}},B5={icon:function(e){if(e===null)return null;if(K2(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:n2(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],l=a1(e[0]);return{prefix:l,iconName:n2(l,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(M.cssPrefix,"-"))>-1||e.match(c5))){var r=e1(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||r2(),iconName:n2(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=r2();return{prefix:i,iconName:n2(i,e)||e}}}},O={noAuto:F5,config:M,dom:D5,parse:B5,library:N0,findIconDefinition:B1,toHtml:P2},E5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,l=a===void 0?w:a;(Object.keys(V.styles).length>0||M.autoFetchSvg)&&Z&&M.autoReplaceSvg&&O.dom.i2svg({node:l})};function l1(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(l){return P2(l)})}}),Object.defineProperty(c,"node",{get:function(){if(Z){var l=w.createElement("div");return l.innerHTML=c.html,l.children}}}),c}function H5(c){var e=c.children,a=c.main,l=c.mask,r=c.attributes,i=c.styles,s=c.transform;if(V1(s)&&a.found&&!l.found){var n=a.width,o=a.height,f={x:n/o/2,y:.5};r.style=c1(t(t({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function I5(c){var e=c.prefix,a=c.iconName,l=c.children,r=c.attributes,i=c.symbol,s=i===!0?"".concat(e,"-").concat(M.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},r),{},{id:s}),children:l}]}]}function R5(c){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(a){return a in c})}function Y1(c){var e=c.icons,a=e.main,l=e.mask,r=c.prefix,i=c.iconName,s=c.transform,n=c.symbol,o=c.maskId,f=c.extra,u=c.watchable,p=u===void 0?!1:u,C=l.found?l:a,v=C.width,k=C.height,S=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(Y){return f.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(f.classes).join(" "),D={children:[],attributes:t(t({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:S,role:f.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(k)})};!R5(f.attributes)&&!f.attributes["aria-hidden"]&&(D.attributes["aria-hidden"]="true"),p&&(D.attributes[o2]="");var T=t(t({},D),{},{prefix:r,iconName:i,main:a,mask:l,maskId:o,transform:s,symbol:n,styles:t({},f.styles)}),_=l.found&&a.found?i2("generateAbstractMask",T)||{children:[],attributes:{}}:i2("generateAbstractIcon",T)||{children:[],attributes:{}},W=_.children,f2=_.attributes;return T.children=W,T.attributes=f2,n?I5(T):H5(T)}function L3(c){var e=c.content,a=c.width,l=c.height,r=c.transform,i=c.extra,s=c.watchable,n=s===void 0?!1:s,o=t(t({},i.attributes),{},{class:i.classes.join(" ")});n&&(o[o2]="");var f=t({},i.styles);V1(r)&&(f.transform=p5({transform:r,startCentered:!0,width:a,height:l}),f["-webkit-transform"]=f.transform);var u=c1(f);u.length>0&&(o.style=u);var p=[];return p.push({tag:"span",attributes:o,children:[e]}),p}function U5(c){var e=c.content,a=c.extra,l=t(t({},a.attributes),{},{class:a.classes.join(" ")}),r=c1(a.styles);r.length>0&&(l.style=r);var i=[];return i.push({tag:"span",attributes:l,children:[e]}),i}var b1=V.styles;function E1(c){var e=c[0],a=c[1],l=c.slice(4),r=Z2(l,1),i=r[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(h1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(h1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(h1.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:a,icon:s}}var _5={found:!1,width:512,height:512};function O5(c,e){!n0&&!M.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function H1(c,e){var a=e;return e==="fa"&&M.styleDefault!==null&&(e=r2()),new Promise(function(l,r){if(a==="fa"){var i=b0(c)||{};c=i.iconName||c,e=i.prefix||e}if(c&&e&&b1[e]&&b1[e][c]){var s=b1[e][c];return l(E1(s))}O5(c,e),l(t(t({},_5),{},{icon:M.showMissingIcons&&c?i2("missingIconAbstract")||{}:{}}))})}var v3=function(){},I1=M.measurePerformance&&j2&&j2.mark&&j2.measure?j2:{mark:v3,measure:v3},S2='FA "7.1.0"',W5=function(e){return I1.mark("".concat(S2," ").concat(e," begins")),function(){return y0(e)}},y0=function(e){I1.mark("".concat(S2," ").concat(e," ends")),I1.measure("".concat(S2," ").concat(e),"".concat(S2," ").concat(e," begins"),"".concat(S2," ").concat(e," ends"))},K1={begin:W5,end:y0},X2=function(){};function g3(c){var e=c.getAttribute?c.getAttribute(o2):null;return typeof e=="string"}function q5(c){var e=c.getAttribute?c.getAttribute(W1):null,a=c.getAttribute?c.getAttribute(q1):null;return e&&a}function G5(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(M.replacementClass)}function j5(){if(M.autoReplaceSvg===!0)return Y2.replace;var c=Y2[M.autoReplaceSvg];return c||Y2.replace}function V5(c){return w.createElementNS("http://www.w3.org/2000/svg",c)}function $5(c){return w.createElement(c)}function w0(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,l=a===void 0?c.tag==="svg"?V5:$5:a;if(typeof c=="string")return w.createTextNode(c);var r=l(c.tag);Object.keys(c.attributes||[]).forEach(function(s){r.setAttribute(s,c.attributes[s])});var i=c.children||[];return i.forEach(function(s){r.appendChild(w0(s,{ceFn:l}))}),r}function X5(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Y2={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(w0(r),a)}),a.getAttribute(o2)===null&&M.keepOriginalSource){var l=w.createComment(X5(a));a.parentNode.replaceChild(l,a)}else a.remove()},nest:function(e){var a=e[0],l=e[1];if(~j1(a).indexOf(M.replacementClass))return Y2.replace(e);var r=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){var i=l[0].attributes.class.split(" ").reduce(function(n,o){return o===M.replacementClass||o.match(r)?n.toSvg.push(o):n.toNode.push(o),n},{toNode:[],toSvg:[]});l[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var s=l.map(function(n){return P2(n)}).join(`
`);a.setAttribute(o2,""),a.innerHTML=s}};function h3(c){c()}function k0(c,e){var a=typeof e=="function"?e:X2;if(c.length===0)a();else{var l=h3;M.mutateApproach===J8&&(l=l2.requestAnimationFrame||h3),l(function(){var r=j5(),i=K1.begin("mutate");c.map(r),i(),a()})}}var J1=!1;function A0(){J1=!0}function R1(){J1=!1}var Q2=null;function C3(c){if(r3&&M.observeMutations){var e=c.treeCallback,a=e===void 0?X2:e,l=c.nodeCallback,r=l===void 0?X2:l,i=c.pseudoElementsCallback,s=i===void 0?X2:i,n=c.observeMutationsRoot,o=n===void 0?w:n;Q2=new r3(function(f){if(!J1){var u=r2();M2(f).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!g3(p.addedNodes[0])&&(M.searchPseudoElements&&s(p.target),a(p.target)),p.type==="attributes"&&p.target.parentNode&&M.searchPseudoElements&&s([p.target],!0),p.type==="attributes"&&g3(p.target)&&~l5.indexOf(p.attributeName))if(p.attributeName==="class"&&q5(p.target)){var C=e1(j1(p.target)),v=C.prefix,k=C.iconName;p.target.setAttribute(W1,v||u),k&&p.target.setAttribute(q1,k)}else G5(p.target)&&r(p.target)})}}),Z&&Q2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Y5(){Q2&&Q2.disconnect()}function K5(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(l,r){var i=r.split(":"),s=i[0],n=i.slice(1);return s&&n.length>0&&(l[s]=n.join(":").trim()),l},{})),a}function J5(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),l=c.innerText!==void 0?c.innerText.trim():"",r=e1(j1(c));return r.prefix||(r.prefix=r2()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&l.length>0&&(r.iconName=C5(r.prefix,c.innerText)||X1(r.prefix,d0(c.innerText))),!r.iconName&&M.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function Q5(c){var e=M2(c.attributes).reduce(function(a,l){return a.name!=="class"&&a.name!=="style"&&(a[l.name]=l.value),a},{});return e}function Z5(){return{iconName:null,prefix:null,transform:X,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function x3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=J5(c),l=a.iconName,r=a.prefix,i=a.rest,s=Q5(c),n=D1("parseNodeAttributes",{},c),o=e.styleParser?K5(c):[];return t({iconName:l,prefix:r,transform:X,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:s}},n)}var c7=V.styles;function P0(c){var e=M.autoReplaceSvg==="nest"?x3(c,{styleParser:!1}):x3(c);return~e.extra.classes.indexOf(t0)?i2("generateLayersText",c,e):i2("generateSvgReplacementMutation",c,e)}function a7(){return[].concat($(a0),$(e0))}function b3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();var a=w.documentElement.classList,l=function(p){return a.add("".concat(n3,"-").concat(p))},r=function(p){return a.remove("".concat(n3,"-").concat(p))},i=M.autoFetchSvg?a7():I3.concat(Object.keys(c7));i.includes("fa")||i.push("fa");var s=[".".concat(t0,":not([").concat(o2,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(o2,"])")})).join(", ");if(s.length===0)return Promise.resolve();var n=[];try{n=M2(c.querySelectorAll(s))}catch{}if(n.length>0)l("pending"),r("complete");else return Promise.resolve();var o=K1.begin("onTree"),f=n.reduce(function(u,p){try{var C=P0(p);C&&u.push(C)}catch(v){n0||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,p){Promise.all(f).then(function(C){k0(C,function(){l("active"),l("complete"),r("pending"),typeof e=="function"&&e(),o(),u()})}).catch(function(C){o(),p(C)})})}function e7(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;P0(c).then(function(a){a&&k0([a],e)})}function l7(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=(e||{}).icon?e:B1(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:B1(r||{})),c(l,t(t({},a),{},{mask:r}))}}var r7=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.transform,r=l===void 0?X:l,i=a.symbol,s=i===void 0?!1:i,n=a.mask,o=n===void 0?null:n,f=a.maskId,u=f===void 0?null:f,p=a.classes,C=p===void 0?[]:p,v=a.attributes,k=v===void 0?{}:v,S=a.styles,D=S===void 0?{}:S;if(e){var T=e.prefix,_=e.iconName,W=e.icon;return l1(t({type:"icon"},e),function(){return t2("beforeDOMElementCreation",{iconDefinition:e,params:a}),Y1({icons:{main:E1(W),mask:o?E1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:_,transform:t(t({},X),r),symbol:s,maskId:u,extra:{attributes:k,styles:D,classes:C}})})}},i7={mixout:function(){return{icon:l7(r7)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=b3,a.nodeCallback=e7,a}}},provides:function(e){e.i2svg=function(a){var l=a.node,r=l===void 0?w:l,i=a.callback,s=i===void 0?function(){}:i;return b3(r,s)},e.generateSvgReplacementMutation=function(a,l){var r=l.iconName,i=l.prefix,s=l.transform,n=l.symbol,o=l.mask,f=l.maskId,u=l.extra;return new Promise(function(p,C){Promise.all([H1(r,i),o.iconName?H1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var k=Z2(v,2),S=k[0],D=k[1];p([a,Y1({icons:{main:S,mask:D},prefix:i,iconName:r,transform:s,symbol:n,maskId:f,extra:u,watchable:!0})])}).catch(C)})},e.generateAbstractIcon=function(a){var l=a.children,r=a.attributes,i=a.main,s=a.transform,n=a.styles,o=c1(n);o.length>0&&(r.style=o);var f;return V1(s)&&(f=i2("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),l.push(f||i.icon),{children:l,attributes:r}}}},s7={mixout:function(){return{layer:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.classes,i=r===void 0?[]:r;return l1({type:"layer"},function(){t2("beforeDOMElementCreation",{assembler:a,params:l});var s=[];return a(function(n){Array.isArray(n)?n.map(function(o){s=s.concat(o.abstract)}):s=s.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat($(i)).join(" ")},children:s}]})}}}},n7={mixout:function(){return{counter:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.title,i=r===void 0?null:r,s=l.classes,n=s===void 0?[]:s,o=l.attributes,f=o===void 0?{}:o,u=l.styles,p=u===void 0?{}:u;return l1({type:"counter",content:a},function(){return t2("beforeDOMElementCreation",{content:a,params:l}),U5({content:a.toString(),title:i,extra:{attributes:f,styles:p,classes:["".concat(M.cssPrefix,"-layers-counter")].concat($(n))}})})}}}},o7={mixout:function(){return{text:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.transform,i=r===void 0?X:r,s=l.classes,n=s===void 0?[]:s,o=l.attributes,f=o===void 0?{}:o,u=l.styles,p=u===void 0?{}:u;return l1({type:"text",content:a},function(){return t2("beforeDOMElementCreation",{content:a,params:l}),L3({content:a,transform:t(t({},X),i),extra:{attributes:f,styles:p,classes:["".concat(M.cssPrefix,"-layers-text")].concat($(n))}})})}}},provides:function(e){e.generateLayersText=function(a,l){var r=l.transform,i=l.extra,s=null,n=null;if(E3){var o=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();s=f.width/o,n=f.height/o}return Promise.resolve([a,L3({content:a.innerHTML,width:s,height:n,transform:r,extra:i,watchable:!0})])}}},T0=new RegExp('"',"ug"),S3=[1105920,1112319],N3=t(t(t(t({},{FontAwesome:{normal:"fas",400:"fas"}}),G6),Y8),Z6),U1=Object.keys(N3).reduce(function(c,e){return c[e.toLowerCase()]=N3[e],c},{}),t7=Object.keys(U1).reduce(function(c,e){var a=U1[e];return c[e]=a[900]||$(Object.entries(a))[0][1],c},{});function f7(c){var e=c.replace(T0,"");return d0($(e)[0]||"")}function m7(c){var e=c.getPropertyValue("font-feature-settings").includes("ss01"),a=c.getPropertyValue("content"),l=a.replace(T0,""),r=l.codePointAt(0),i=r>=S3[0]&&r<=S3[1],s=l.length===2?l[0]===l[1]:!1;return i||s||e}function p7(c,e){var a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),l=parseInt(e),r=isNaN(l)?"normal":l;return(U1[a]||{})[r]||t7[a]}function y3(c,e){var a="".concat(K8).concat(e.replace(":","-"));return new Promise(function(l,r){if(c.getAttribute(a)!==null)return l();var i=M2(c.children),s=i.filter(function(u1){return u1.getAttribute(k1)===e})[0],n=l2.getComputedStyle(c,e),o=n.getPropertyValue("font-family"),f=o.match(a5),u=n.getPropertyValue("font-weight"),p=n.getPropertyValue("content");if(s&&!f)return c.removeChild(s),l();if(f&&p!=="none"&&p!==""){var C=n.getPropertyValue("content"),v=p7(o,u),k=f7(C),S=f[0].startsWith("FontAwesome"),D=m7(n),T=X1(v,k),_=T;if(S){var W=x5(k);W.iconName&&W.prefix&&(T=W.iconName,v=W.prefix)}if(T&&!D&&(!s||s.getAttribute(W1)!==v||s.getAttribute(q1)!==_)){c.setAttribute(a,_),s&&c.removeChild(s);var f2=Z5(),Y=f2.extra;Y.attributes[k1]=e,H1(T,v).then(function(u1){var a6=Y1(t(t({},f2),{},{icons:{main:u1,mask:S0()},prefix:v,iconName:_,extra:Y,watchable:!0})),d1=w.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(d1,c.firstChild):c.appendChild(d1),d1.outerHTML=a6.map(function(e6){return P2(e6)}).join(`
`),c.removeAttribute(a),l()}).catch(r)}else l()}else l()})}function z7(c){return Promise.all([y3(c,"::before"),y3(c,"::after")])}function u7(c){return c.parentNode!==document.head&&!~Q8.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(k1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var d7=function(e){return!!e&&s0.some(function(a){return e.includes(a)})},M7=function(e){if(!e)return[];var a=new Set,l=e.split(/,(?![^()]*\))/).map(function(o){return o.trim()});l=l.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(f){return f.trim()})});var r=$2(l),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;if(d7(s)){var n=s0.reduce(function(o,f){return o.replace(f,"")},s);n!==""&&n!=="*"&&a.add(n)}}}catch(o){r.e(o)}finally{r.f()}return a};function w3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Z){var a;if(e)a=c;else if(M.searchPseudoElementsFullScan)a=c.querySelectorAll("*");else{var l=new Set,r=$2(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;try{var n=$2(s.cssRules),o;try{for(n.s();!(o=n.n()).done;){var f=o.value,u=M7(f.selectorText),p=$2(u),C;try{for(p.s();!(C=p.n()).done;){var v=C.value;l.add(v)}}catch(S){p.e(S)}finally{p.f()}}}catch(S){n.e(S)}finally{n.f()}}catch(S){M.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href," (").concat(S.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(S){r.e(S)}finally{r.f()}if(!l.size)return;var k=Array.from(l).join(", ");try{a=c.querySelectorAll(k)}catch{}}return new Promise(function(S,D){var T=M2(a).filter(u7).map(z7),_=K1.begin("searchPseudoElements");A0(),Promise.all(T).then(function(){_(),R1(),S()}).catch(function(){_(),R1(),D()})})}}var L7={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=w3,a}}},provides:function(e){e.pseudoElements2svg=function(a){var l=a.node,r=l===void 0?w:l;M.searchPseudoElements&&w3(r)}}},k3=!1,v7={mixout:function(){return{dom:{unwatch:function(){A0(),k3=!0}}}},hooks:function(){return{bootstrap:function(){C3(D1("mutationObserverCallbacks",{}))},noAuto:function(){Y5()},watch:function(a){var l=a.observeMutationsRoot;k3?R1():C3(D1("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},A3=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(l,r){var i=r.toLowerCase().split("-"),s=i[0],n=i.slice(1).join("-");if(s&&n==="h")return l.flipX=!0,l;if(s&&n==="v")return l.flipY=!0,l;if(n=parseFloat(n),isNaN(n))return l;switch(s){case"grow":l.size=l.size+n;break;case"shrink":l.size=l.size-n;break;case"left":l.x=l.x-n;break;case"right":l.x=l.x+n;break;case"up":l.y=l.y-n;break;case"down":l.y=l.y+n;break;case"rotate":l.rotate=l.rotate+n;break}return l},a)},g7={mixout:function(){return{parse:{transform:function(a){return A3(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,l){var r=l.getAttribute("data-fa-transform");return r&&(a.transform=A3(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var l=a.main,r=a.transform,i=a.containerWidth,s=a.iconWidth,n={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(o," ").concat(f," ").concat(u)},C={transform:"translate(".concat(s/2*-1," -256)")},v={outer:n,inner:p,path:C};return{tag:"g",attributes:t({},v.outer),children:[{tag:"g",attributes:t({},v.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:t(t({},l.icon.attributes),v.path)}]}]}}}},S1={x:0,y:0,width:"100%",height:"100%"};function P3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function h7(c){return c.tag==="g"?c.children:[c]}var C7={hooks:function(){return{parseNodeAttributes:function(a,l){var r=l.getAttribute("data-fa-mask"),i=r?e1(r.split(" ").map(function(s){return s.trim()})):S0();return i.prefix||(i.prefix=r2()),a.mask=i,a.maskId=l.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var l=a.children,r=a.attributes,i=a.main,s=a.mask,n=a.maskId,o=a.transform,f=i.width,u=i.icon,p=s.width,C=s.icon,v=m5({transform:o,containerWidth:p,iconWidth:f}),k={tag:"rect",attributes:t(t({},S1),{},{fill:"white"})},S=u.children?{children:u.children.map(P3)}:{},D={tag:"g",attributes:t({},v.inner),children:[P3(t({tag:u.tag,attributes:t(t({},u.attributes),v.path)},S))]},T={tag:"g",attributes:t({},v.outer),children:[D]},_="mask-".concat(n||f3()),W="clip-".concat(n||f3()),f2={tag:"mask",attributes:t(t({},S1),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,T]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:W},children:h7(C)},f2]};return l.push(Y,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(W,")"),mask:"url(#".concat(_,")")},S1)}),{children:l,attributes:r}}}},x7={provides:function(e){var a=!1;l2.matchMedia&&(a=l2.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var l=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:t(t({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=t(t({},i),{},{attributeName:"opacity"}),n={tag:"circle",attributes:t(t({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||n.children.push({tag:"animate",attributes:t(t({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},s),{},{values:"1;0;1;1;0;1;"})}),l.push(n),l.push({tag:"path",attributes:t(t({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:t(t({},s),{},{values:"1;0;0;0;0;1;"})}]}),a||l.push({tag:"path",attributes:t(t({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},b7={hooks:function(){return{parseNodeAttributes:function(a,l){var r=l.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},S7=[u5,i7,s7,n7,o7,L7,v7,g7,C7,x7,b7];T5(S7,{mixoutsTo:O});var C9=O.noAuto,F0=O.config,x9=O.library,D0=O.dom,B0=O.parse,b9=O.findIconDefinition,S9=O.toHtml,E0=O.icon,N9=O.layer,N7=O.text,y7=O.counter;var w7=["*"],k7=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(a){F0.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(l){return new(l||c)};static \u0275prov=g2({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),A7=(()=>{class c{definitions={};addIcons(...a){for(let l of a){l.prefix in this.definitions||(this.definitions[l.prefix]={}),this.definitions[l.prefix][l.iconName]=l;for(let r of l.icon[2])typeof r=="string"&&(this.definitions[l.prefix][r]=l)}}addIconPacks(...a){for(let l of a){let r=Object.keys(l).map(i=>l[i]);this.addIcons(...r)}}getIconDefinition(a,l){return a in this.definitions&&l in this.definitions[a]?this.definitions[a][l]:null}static \u0275fac=function(l){return new(l||c)};static \u0275prov=g2({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),P7=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},T7=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},I0=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),F7=c=>{let e=I0(c.rotate),a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:e,"fa-rotate-by":c.rotate!=null&&!e,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(l=>a[l]?l:null).filter(l=>l!=null)},Q1=new WeakSet,H0="fa-auto-css";function D7(c,e){if(!e.autoAddCss||Q1.has(c))return;if(c.getElementById(H0)!=null){e.autoAddCss=!1,Q1.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",H0),a.innerHTML=D0.css();let l=c.head.childNodes,r=null;for(let i=l.length-1;i>-1;i--){let s=l[i],n=s.nodeName.toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}c.head.insertBefore(a,r),e.autoAddCss=!1,Q1.add(c)}var B7=c=>c.prefix!==void 0&&c.iconName!==void 0,E7=(c,e)=>B7(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},H7=(()=>{class c{stackItemSize=I2("1x");size=I2();_effect=k4(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(l){return new(l||c)};static \u0275dir=E2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),I7=(()=>{class c{size=I2();classes=L1(()=>{let a=this.size(),l=a?{[`fa-${a}`]:!0}:{};return e4(a4({},l),{"fa-stack":!0})});static \u0275fac=function(l){return new(l||c)};static \u0275cmp=h({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(l,r){l&2&&N4(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:w7,decls:1,vars:0,template:function(l,r){l&1&&(b4(),S4(0))},encapsulation:2,changeDetection:0})}return c})(),R0=(()=>{class c{icon=R();title=R();animation=R();mask=R();flip=R();size=R();pull=R();border=R();inverse=R();symbol=R();rotate=R();fixedWidth=R();transform=R();a11yRole=R();renderedIconHTML=L1(()=>{let a=this.icon()??this.config.fallbackIcon;if(!a)return T7(),"";let l=this.findIconDefinition(a);if(!l)return"";let r=this.buildParams();D7(this.document,this.config);let i=E0(l,r);return this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))});document=E(s4);sanitizer=E(R4);config=E(k7);iconLibrary=E(A7);stackItem=E(H7,{optional:!0});stack=E(I7,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(a){let l=E7(a,this.config.defaultPrefix);if("icon"in l)return l;let r=this.iconLibrary.getIconDefinition(l.prefix,l.iconName);return r??(P7(l),null)}buildParams(){let a=this.fixedWidth(),l={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof a=="boolean"?a:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),i=typeof r=="string"?B0.transform(r):r,s=this.mask(),n=s!=null?this.findIconDefinition(s):null,o={},f=this.a11yRole();f!=null&&(o.role=f);let u={};return l.rotate!=null&&!I0(l.rotate)&&(u["--fa-rotate-angle"]=`${l.rotate}`),{title:this.title(),transform:i,classes:F7(l),mask:n??void 0,symbol:this.symbol(),attributes:o,styles:u}}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=h({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(l,r){l&2&&(x4("innerHTML",r.renderedIconHTML(),f4),H2("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(l,r){},encapsulation:2,changeDetection:0})}return c})();var U0=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275mod=B2({type:c});static \u0275inj=D2({})}return c})();var _0={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]};var O0={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]};function U7(c,e){if(c&1){let a=s2();z(0,"a",12),j("keyup.enter",function(){q(a),y(3);let r=H(1);return G(r.previous())})("click",function(){q(a),y(3);let r=H(1);return G(r.previous())}),m(1),z(2,"span",13),m(3),d()()}if(c&2){let a=y(3);L(),A(" ",a.previousLabel," "),L(2),I(a.screenReaderPageLabel)}}function _7(c,e){if(c&1&&(z(0,"span",14),m(1),z(2,"span",13),m(3),d()()),c&2){let a=y(3);L(),A(" ",a.previousLabel," "),L(2),I(a.screenReaderPageLabel)}}function O7(c,e){if(c&1&&(z(0,"li",9),K(1,U7,4,2,"a",10)(2,_7,4,2,"span",11),d()),c&2){y(2);let a=H(1);h2("disabled",a.isFirstPage()),L(),P("ngIf",1<a.getCurrent()),L(),P("ngIf",a.isFirstPage())}}function W7(c,e){if(c&1){let a=s2();z(0,"a",12),j("keyup.enter",function(){q(a);let r=y().$implicit;y(2);let i=H(1);return G(i.setCurrent(r.value))})("click",function(){q(a);let r=y().$implicit;y(2);let i=H(1);return G(i.setCurrent(r.value))}),z(1,"span",13),m(2),d(),z(3,"span"),m(4),C2(5,"number"),d()()}if(c&2){let a=y().$implicit,l=y(2);L(2),A("",l.screenReaderPageLabel," "),L(2),I(a.label==="..."?a.label:x2(5,2,a.label,""))}}function q7(c,e){if(c&1&&(g4(0),z(1,"span",16)(2,"span",13),m(3),d(),z(4,"span"),m(5),C2(6,"number"),d()(),h4()),c&2){let a=y().$implicit,l=y(2);L(3),A("",l.screenReaderCurrentLabel," "),L(2),I(a.label==="..."?a.label:x2(6,2,a.label,""))}}function G7(c,e){if(c&1&&(z(0,"li"),K(1,W7,6,5,"a",10)(2,q7,7,5,"ng-container",15),d()),c&2){let a=e.$implicit;y(2);let l=H(1);h2("current",l.getCurrent()===a.value)("ellipsis",a.label==="..."),L(),P("ngIf",l.getCurrent()!==a.value),L(),P("ngIf",l.getCurrent()===a.value)}}function j7(c,e){if(c&1){let a=s2();z(0,"a",12),j("keyup.enter",function(){q(a),y(3);let r=H(1);return G(r.next())})("click",function(){q(a),y(3);let r=H(1);return G(r.next())}),m(1),z(2,"span",13),m(3),d()()}if(c&2){let a=y(3);L(),A(" ",a.nextLabel," "),L(2),I(a.screenReaderPageLabel)}}function V7(c,e){if(c&1&&(z(0,"span",14),m(1),z(2,"span",13),m(3),d()()),c&2){let a=y(3);L(),A(" ",a.nextLabel," "),L(2),I(a.screenReaderPageLabel)}}function $7(c,e){if(c&1&&(z(0,"li",17),K(1,j7,4,2,"a",10)(2,V7,4,2,"span",11),d()),c&2){y(2);let a=H(1);h2("disabled",a.isLastPage()),L(),P("ngIf",!a.isLastPage()),L(),P("ngIf",a.isLastPage())}}function X7(c,e){if(c&1&&(z(0,"ul",4),K(1,O7,3,4,"li",5),z(2,"li",6),m(3),d(),K(4,G7,3,6,"li",7)(5,$7,3,4,"li",8),d()),c&2){let a=y(),l=H(1);h2("responsive",a.responsive),L(),P("ngIf",a.directionLinks),L(2),y4(" ",l.getCurrent()," / ",l.getLastPage()," "),L(),P("ngForOf",l.pages)("ngForTrackBy",a.trackByIndex),L(),P("ngIf",a.directionLinks)}}var T2=class{constructor(){this.change=new m2,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(e){return e.id==null&&(e.id=this.DEFAULT_ID),this.instances[e.id]?this.updateInstance(e):(this.instances[e.id]=e,!0)}updateInstance(e){let a=!1;for(let l in this.instances[e.id])e[l]!==this.instances[e.id][l]&&(this.instances[e.id][l]=e[l],a=!0);return a}getCurrentPage(e){return this.instances[e]?this.instances[e].currentPage:1}setCurrentPage(e,a){if(this.instances[e]){let l=this.instances[e],r=Math.ceil(l.totalItems/l.itemsPerPage);a<=r&&1<=a&&(this.instances[e].currentPage=a,this.change.emit(e))}}setTotalItems(e,a){this.instances[e]&&0<=a&&(this.instances[e].totalItems=a,this.change.emit(e))}setItemsPerPage(e,a){this.instances[e]&&(this.instances[e].itemsPerPage=a,this.change.emit(e))}getInstance(e=this.DEFAULT_ID){return this.instances[e]?this.clone(this.instances[e]):{}}clone(e){var a={};for(var l in e)e.hasOwnProperty(l)&&(a[l]=e[l]);return a}},Y7=Number.MAX_SAFE_INTEGER,W0=(()=>{class c{constructor(a){this.service=a,this.state={}}transform(a,l){if(!(a instanceof Array)){let p=l.id||this.service.defaultId();return this.state[p]?this.state[p].slice:a}let r=l.totalItems&&l.totalItems!==a.length,i=this.createInstance(a,l),s=i.id,n,o,f=i.itemsPerPage,u=this.service.register(i);if(!r&&a instanceof Array){if(f=+f||Y7,n=(i.currentPage-1)*f,o=n+f,this.stateIsIdentical(s,a,n,o))return this.state[s].slice;{let C=a.slice(n,o);return this.saveState(s,a,C,n,o),this.service.change.emit(s),C}}else return u&&this.service.change.emit(s),this.saveState(s,a,a,n,o),a}createInstance(a,l){return this.checkConfig(l),{id:l.id!=null?l.id:this.service.defaultId(),itemsPerPage:+l.itemsPerPage||0,currentPage:+l.currentPage||1,totalItems:+l.totalItems||a.length}}checkConfig(a){let r=["itemsPerPage","currentPage"].filter(i=>!(i in a));if(0<r.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${r.join(", ")}`)}saveState(a,l,r,i,s){this.state[a]={collection:l,size:l.length,slice:r,start:i,end:s}}stateIsIdentical(a,l,r,i){let s=this.state[a];return!s||!(s.size===l.length&&s.start===r&&s.end===i)?!1:s.slice.every((o,f)=>o===l[r+f])}}return c.\u0275fac=function(a){return new(a||c)(c2(T2,16))},c.\u0275pipe=m4({name:"paginate",type:c,pure:!1,standalone:!1}),c})();var K7=(()=>{class c{constructor(a,l){this.service=a,this.changeDetectorRef=l,this.maxSize=7,this.pageChange=new m2,this.pageBoundsCorrection=new m2,this.pages=[],this.changeSub=this.service.change.subscribe(r=>{this.id===r&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){this.id===void 0&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(a){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return this.getCurrent()===1}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(a){this.pageChange.emit(a)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let a=this.service.getInstance(this.id);return a.totalItems<1?1:Math.ceil(a.totalItems/a.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){this.service.getInstance(this.id).id==null&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let a=this.service.getInstance(this.id),l=this.outOfBoundCorrection(a);l!==a.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(l),this.pages=this.createPageArray(a.currentPage,a.itemsPerPage,a.totalItems,this.maxSize)}):this.pages=this.createPageArray(a.currentPage,a.itemsPerPage,a.totalItems,this.maxSize)}outOfBoundCorrection(a){let l=Math.ceil(a.totalItems/a.itemsPerPage);return l<a.currentPage&&0<l?l:a.currentPage<1?1:a.currentPage}createPageArray(a,l,r,i){i=+i;let s=[],n=Math.max(Math.ceil(r/l),1),o=Math.ceil(i/2),f=a<=o,u=n-o<a,p=!f&&!u,C=i<n,v=1;for(;v<=n&&v<=i;){let k,S=this.calculatePageNumber(v,a,i,n),D=v===2&&(p||u),T=v===i-1&&(p||f);C&&(D||T)?k="...":k=S,s.push({label:k,value:S}),v++}return s}calculatePageNumber(a,l,r,i){let s=Math.ceil(r/2);return a===r?i:a===1?a:r<i?i-s<l?i-r+a:s<l?l-s+a:a:a}}return c.\u0275fac=function(a){return new(a||c)(c2(T2),c2(A4))},c.\u0275dir=E2({type:c,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],standalone:!1,features:[t4]}),c})();function Z1(c){return!!c&&c!=="false"}var q0=(()=>{class c{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new m2,this.pageBoundsCorrection=new m2,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(a){this._directionLinks=Z1(a)}get autoHide(){return this._autoHide}set autoHide(a){this._autoHide=Z1(a)}get responsive(){return this._responsive}set responsive(a){this._responsive=Z1(a)}trackByIndex(a){return a}}return c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=h({type:c,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},standalone:!1,decls:4,vars:4,consts:[["p","paginationApi"],[3,"pageChange","pageBoundsCorrection","id","maxSize"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(a,l){if(a&1){let r=s2();z(0,"pagination-template",1,0),j("pageChange",function(s){return q(r),G(l.pageChange.emit(s))})("pageBoundsCorrection",function(s){return q(r),G(l.pageBoundsCorrection.emit(s))}),z(2,"nav",2),K(3,X7,6,8,"ul",3),d()()}if(a&2){let r=H(1);P("id",l.id)("maxSize",l.maxSize),L(2),H2("aria-label",l.screenReaderPaginationLabel),L(),P("ngIf",!(l.autoHide&&r.pages.length<=1))}},dependencies:[K7,F4,T4,D4],styles:[`.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}
`],encapsulation:2,changeDetection:0}),c})(),G0=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=B2({type:c}),c.\u0275inj=D2({providers:[T2],imports:[[R2]]}),c})();var Q7=c=>({itemsPerPage:4,currentPage:c}),Z7=c=>["/user-details",c];function c9(c,e){if(c&1&&(z(0,"div",3)(1,"div",6),N(2,"img",7),z(3,"div",8)(4,"h5",9),m(5),d(),z(6,"p",10),m(7),d(),z(8,"p",10),N(9,"fa-icon",11),m(10),d(),z(11,"p",10),N(12,"fa-icon",11),m(13),d(),z(14,"p",10),m(15),d(),z(16,"button",12),m(17," View Details"),d()()()()),c&2){let a=e.$implicit,l=y();L(5),I(a.username),L(2),I(a.name),L(2),P("icon",l.faEnvelope),L(),A(" ",a.email," "),L(2),P("icon",l.faPhone),L(),A(" ",a.phone," "),L(2),I(a.address.city),L(),P("routerLink",M1(8,Z7,a.id))}}var r1=class c{userArr=Q4;faPhone=O0;faEnvelope=_0;p=1;static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-user-list"]],decls:10,vars:5,consts:[[1,"text-center"],[1,"container"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-6","offset-3"],[3,"pageChange"],[1,"card"],["src","https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png","alt","...",1,"card-img-top"],[1,"card-body","text-center"],[1,"card-title"],[1,"card-text"],[3,"icon"],[1,"btn","btn-primary",3,"routerLink"]],template:function(a,l){a&1&&(z(0,"h3",0),m(1,"User List"),d(),z(2,"div",1)(3,"div",2),L4(4,c9,18,10,"div",3,M4),C2(6,"paginate"),d(),z(7,"div",2)(8,"div",4)(9,"pagination-controls",5),j("pageChange",function(i){return l.p=i}),d()()()()),a&2&&(L(4),v4(x2(6,0,l.userArr,M1(3,Q7,l.p))))},dependencies:[U0,R0,G0,q0,a2,W0],encapsulation:2})};var i1=class c{activatedRoute=E(U2);httpClient=E(E4);user;ngOnInit(){this.activatedRoute.params.subscribe(e=>{console.log(e);let a=`https://jsonplaceholder.typicode.com/users/${e.id}`;this.httpClient.get(a).subscribe(l=>{this.user=l})})}static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-user-details"]],decls:16,vars:5,consts:[[1,"text-center"],[1,"col-sm-3","offset-5"],[1,"card"],["src","https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png","alt","...",1,"card-img-top"],[1,"card-body","text-center"],[1,"card-title"],[1,"card-text"]],template:function(a,l){a&1&&(x(0,"h3",0),m(1,"User Details"),b(),x(2,"div",1)(3,"div",2),p2(4,"img",3),x(5,"div",4)(6,"h5",5),m(7),b(),x(8,"p",6),m(9),b(),x(10,"p",6),m(11),b(),x(12,"p",6),m(13),b(),x(14,"p",6),m(15),b()()()()),a&2&&(L(7),I(l.user.username),L(2),I(l.user.name),L(2),A(" ",l.user.email," "),L(2),A(" ",l.user.phone," "),L(2),I(l.user.address.city))},encapsulation:2})};var s1=class c{activatedRoute=E(U2);productInfo;ngOnInit(){this.activatedRoute.queryParams.subscribe(e=>{this.productInfo=e})}static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-product-details"]],decls:9,vars:3,consts:[[1,"text-center"],[1,"col-sm-3","offset-5","border","border-2","rounded-2","p-2"]],template:function(a,l){a&1&&(x(0,"h3",0),m(1,"Product Details"),b(),x(2,"div",1)(3,"div"),m(4),b(),x(5,"div"),m(6),b(),x(7,"div"),m(8),b()()),a&2&&(L(4),A("Id: ",l.productInfo.id),L(2),A("Title: ",l.productInfo.name),L(2),A("Price: ",l.productInfo.price))},encapsulation:2})};var F2=class c{static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-permanent-jobs"]],decls:2,vars:0,template:function(a,l){a&1&&(x(0,"p"),m(1,"permanent-jobs works!"),b())},encapsulation:2})};var n1=class c{static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-contract-jobs"]],decls:2,vars:0,template:function(a,l){a&1&&(x(0,"p"),m(1,"contract-jobs works!"),b())},encapsulation:2})};var o1=class c{static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-upload-videos"]],decls:3,vars:0,consts:[[1,"text-center"],["type","file","name","","id",""]],template:function(a,l){a&1&&(x(0,"h3",0),m(1,"Upload Videos"),b(),p2(2,"input",1))},encapsulation:2})};var L2=class c{userRole="student";static \u0275fac=function(a){return new(a||c)};static \u0275prov=g2({token:c,factory:c.\u0275fac,providedIn:"root"})};var j0=(c,e)=>E(L2).userRole==="teacher"?!0:(alert("Sorry!! You have no rights to open this page."),!1);var V0=(c,e,a,l)=>c.hasChanges?(alert("Please Save Before You leave the page"),!1):!0;var $0=[{path:"home",component:b2},{path:"about",component:O2},{path:"careers",component:W2,children:[{path:"",component:F2},{path:"permanent",component:F2},{path:"contract",component:n1}]},{path:"contactus",component:q2,canDeactivate:[V0]},{path:"users",component:r1},{path:"user-details/:id",component:i1},{path:"products",loadComponent:()=>import("./chunk-UEUCLVNP.js").then(c=>c.Products)},{path:"product-details",component:s1},{path:"upload-videos",component:o1,canActivate:[j0]},{path:"",component:b2},{path:"**",component:G2}];var X0=(c,e)=>(console.log("Logger Interceptor::",c.url,c.method,new Date().toLocaleTimeString()),e(c));var Y0=(c,e)=>{let l=c.clone({setHeaders:{Authorization:"Bearer ABCDEF123456"}});return e(l)};var K0=(c,e)=>e(c).pipe(i4(2));var Q0=r6(J0()),Z0=(c,e)=>e(c).pipe(r4(a=>(new Q0.default(`${a.message}`,{position:"top-center",theme:"light",timeout:5e3,actionText:"X"}),l4)));var c6={providers:[n4(),w4({eventCoalescing:!0}),O4($0),H4(I4([X0,Y0,K0,Z0]))]};var t1=class c{constructor(e){this.cartService=e}cartsArr=[];ngOnInit(){this.cartService.cartItem$.subscribe(e=>{this.cartsArr=[...e]})}static \u0275fac=function(a){return new(a||c)(c2(J4))};static \u0275cmp=h({type:c,selectors:[["app-cart"]],decls:2,vars:1,consts:[[1,"text-danger","text-center"]],template:function(a,l){a&1&&(x(0,"div",0),m(1),b()),a&2&&(L(),A("Cart ",l.cartsArr.length," "))},encapsulation:2})};var f1=class c{userInfoService=E(L2);userRole="";ngOnInit(){this.userRole=this.userInfoService.userRole}static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-navbar"]],decls:34,vars:0,consts:[["data-bs-theme","dark",1,"navbar","navbar-expand-lg","bg-body-tertiary","bg-dark"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["routerLink","home","routerLinkActive","active",1,"nav-link"],["routerLink","about","routerLinkActive","active",1,"nav-link"],["routerLink","careers","routerLinkActive","active",1,"nav-link"],["routerLink","contactus","routerLinkActive","active",1,"nav-link"],["routerLink","users","routerLinkActive","active",1,"nav-link"],["routerLink","products","routerLinkActive","active",1,"nav-link"],["routerLink","upload-videos","routerLinkActive","active",1,"nav-link"],["role","search",1,"d-flex"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","me-2"],["type","submit",1,"btn","btn-outline-success"]],template:function(a,l){a&1&&(z(0,"nav",0)(1,"div",1)(2,"a",2),m(3,"Navbar"),d(),z(4,"button",3),N(5,"span",4),d(),z(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),m(10,"Home"),d()(),z(11,"li",7)(12,"a",9),m(13,"AboutUs"),d()(),z(14,"li",7)(15,"a",10),m(16,"Careers"),d()(),z(17,"li",7)(18,"a",11),m(19,"Contactus"),d()(),z(20,"li",7)(21,"a",12),m(22,"Users"),d()(),z(23,"li",7)(24,"a",13),m(25,"Products"),d()(),z(26,"li",7)(27,"a",14),m(28,"UploadVideos"),d()()(),z(29,"form",15),N(30,"input",16),z(31,"button",17),m(32,"Search"),d(),N(33,"app-cart"),d()()()())},dependencies:[t1,a2,_4],styles:[".active[_ngcontent-%COMP%]{background-color:#7fffd4}"]})};var m1=class c{static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-body"]],decls:2,vars:0,consts:[[1,"body"]],template:function(a,l){a&1&&(z(0,"div",0),N(1,"router-outlet"),d())},dependencies:[_2],styles:[`.body{min-height:350px}input{border:2px solid blue}
`],encapsulation:2})};var p1=class c{static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-footer"]],decls:19,vars:0,consts:[[1,"py-3","my-4","bg-dark","text-white"],[1,"nav","justify-content-center","border-bottom","pb-3","mb-3"],[1,"nav-item"],["href","#",1,"nav-link","px-2"],[1,"text-center"]],template:function(a,l){a&1&&(x(0,"footer",0)(1,"ul",1)(2,"li",2)(3,"a",3),m(4,"Home"),b()(),x(5,"li",2)(6,"a",3),m(7,"Features"),b()(),x(8,"li",2)(9,"a",3),m(10,"Pricing"),b()(),x(11,"li",2)(12,"a",3),m(13,"FAQs"),b()(),x(14,"li",2)(15,"a",3),m(16,"About"),b()()(),x(17,"p",4),m(18,"\xA9 2025 Company, Inc"),b()())},encapsulation:2})};var z1=class c{title=o4("eureka_angular_oct_2025_project1");static \u0275fac=function(a){return new(a||c)};static \u0275cmp=h({type:c,selectors:[["app-root"]],decls:3,vars:0,template:function(a,l){a&1&&N(0,"app-navbar")(1,"app-body")(2,"app-footer")},dependencies:[f1,m1,p1],encapsulation:2})};B4(z1,c6).catch(c=>console.error(c));
