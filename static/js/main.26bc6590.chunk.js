(this["webpackJsonphuddle01-client"]=this["webpackJsonphuddle01-client"]||[]).push([[0],{149:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(71),u=n.n(a),o=n(45),i=n(9),s=n(0),b=n.n(s),l=n(4),j=n(32),d=n(1),f=n(20),p=n(24),O=function(e){var t=new MediaStream;return t.addTrack(e),t},h=n(3),v=function(e){var t=e.videoTrack,n=Object(r.useRef)(null);return Object(r.useEffect)((function(){n.current.srcObject=t}),[]),Object(h.jsx)("div",{children:Object(h.jsx)("video",{ref:n,height:"400px",width:"400px",autoPlay:!0})})},x=function(e){var t=e.screenTrack,n=Object(r.useRef)(null);return Object(r.useEffect)((function(){n.current.srcObject=t}),[]),Object(h.jsx)("div",{children:Object(h.jsx)("video",{ref:n,height:"400px",width:"400px",autoPlay:!0})})},m=function(e){var t=e.audioTrack,n=Object(r.useRef)(null);return Object(r.useEffect)((function(){console.log(t),n.current.srcObject=t}),[]),Object(h.jsx)("div",{children:Object(h.jsx)("audio",{ref:n,autoPlay:!0,playsInline:!0,controls:!1})})};var k=function(){var e=Object(i.g)(),t="huddle01"===localStorage.getItem("bot_password"),n=Object(r.useState)(null),c=Object(f.a)(n,2),a=c[0],u=c[1],o=Object(r.useState)(""),s=Object(f.a)(o,2),k=s[0],w=s[1],y=Object(r.useState)(!1),S=Object(f.a)(y,2),g=S[0],C=S[1],N=Object(r.useState)(!1),R=Object(f.a)(N,2),I=R[0],M=R[1],E=Object(r.useState)(!1),P=Object(f.a)(E,2),T=P[0],z=P[1],B=Object(r.useState)([]),W=Object(f.a)(B,2),_=(W[0],W[1]),D=Object(r.useState)({video:[],audio:[],screen:[]}),J=Object(f.a)(D,2),Z=J[0],H=J[1],q=Object(r.useRef)(null),A=Object(r.useRef)(null),K=Object(r.useRef)(null),L=Object(r.useState)({apiKey:"i4pzqbpxza8vpijQMwZsP1H7nZZEH0TN3vR4NdNS",roomId:"C132",peerId:"Rick"+Math.floor(4e3*Math.random()),displayName:"Rick Sanchez",window:window,isBot:t}),Q=Object(f.a)(L,2),F=Q[0],G=Q[1];Object(r.useEffect)((function(){a&&t&&K.current.click()}),[a,t]);var U=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.b.on("roomState",(function(e){switch(e){case"connected":case"failed":case"disconnected":break;default:w(e)}w(e)})),p.b.on("error",(function(e){alert(e)})),p.b.on("addPeer",(function(e){console.log("new peer =>",e),_((function(t){return[].concat(Object(j.a)(t),[e])}))})),p.b.on("addProducer",(function(e){switch(console.log("new prod",e),e.type){case"webcam":var t=e.track;if("object"==typeof t)try{null!==t&&(q.current.srcObject=O(t))}catch(r){console.error(r)}break;case"mic":break;case"screen":var n=e.track;if("object"==typeof n)try{null!==n&&(A.current.srcObject=O(n))}catch(r){console.error(r)}}})),p.b.on("removeProducer",(function(e){switch(console.log("remove ",e),e.type){case"webcam":try{q.current.srcObject=null}catch(t){console.error(t)}break;case"mic":break;case"screen":try{A.current.srcObject=null}catch(t){console.error(t)}}})),p.b.on("addConsumer",(function(e){switch(e.type){case"webcam":var t=e.track;H((function(e){return Object(l.a)(Object(l.a)({},e),{},{video:[].concat(Object(j.a)(e.video),[t])})}));break;case"screen":var n=e.track;H((function(e){return Object(l.a)(Object(l.a)({},e),{},{screen:[].concat(Object(j.a)(e.screen),[n])})}));break;case"mic":var r=e.track;H((function(e){return Object(l.a)(Object(l.a)({},e),{},{audio:[].concat(Object(j.a)(e.audio),[r])})}))}})),p.b.on("removeConsumer",(function(e){switch(e.type){case"screen":H((function(t){return Object(l.a)(Object(l.a)({},t),{},{screen:t.screen.filter((function(t){return t.id!==e._id}))})}));break;case"webcam":H((function(t){return Object(l.a)(Object(l.a)({},t),{},{video:t.video.filter((function(t){return t.id!==e._id}))})}));break;case"mic":H((function(t){return Object(l.a)(Object(l.a)({},t),{},{audio:t.audio.filter((function(t){return t.id!==e._id}))})}))}}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,U(),e.next=6,a.join();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,a.close();case 5:w(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,a.enableWebcam();case 5:M(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),M(!1),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,a.disableWebcam();case 5:M(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,a.enableShare();case 5:z(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0),z(!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,a.disableShare();case 5:z(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:try{a.enableMic(),C(!0)}catch(t){C(!1),alert(t)}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:try{a.disableMic(),C(!1)}catch(t){alert(t),C(!0)}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=Object(r.useState)(""),ae=Object(f.a)(ce,2),ue=ae[0],oe=ae[1],ie=Object(r.useState)(""),se=Object(f.a)(ie,2),be=se[0],le=se[1],je=function(){G((function(e){return Object(l.a)(Object(l.a)({},e),{},{displayName:be,roomId:ue,peerId:be+Math.floor(4e3*Math.random())})}))};return Object(h.jsxs)("div",{className:"App",style:{backgroundColor:"#ff4d4d"},children:[Object(h.jsxs)("div",{className:"me-ports",children:[Object(h.jsx)("video",{height:"400px",width:"400px",autoPlay:!0,ref:q}),Object(h.jsx)("video",{height:"400px",width:"400px",autoPlay:!0,ref:A})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{id:"initialize-btn",onClick:function(){e.push("?roomId=".concat(F.roomId));var t=new p.a(F);u(t)},children:"Initialize"}),Object(h.jsx)("input",{id:"room-id",value:ue,onChange:function(e){oe(e.target.value)}}),Object(h.jsx)("button",{id:"setNameBtn",onClick:function(){je()},children:"Set Room Id"}),Object(h.jsx)("input",{id:"display-name",value:be,onChange:function(e){le(e.target.value)}}),Object(h.jsx)("button",{id:"setNameBtn",onClick:function(){je()},children:"Set Name"})]}),Object(h.jsxs)("div",{className:"btn-grp",children:[Object(h.jsx)("button",{ref:K,id:"join-btn",onClick:"connected"===k?X:V,children:"connected"===k?"Leave Room":"Join Room"}),Object(h.jsx)("button",{onClick:I?$:Y,children:I?"Disable Webcam":"Enable Webcam"}),Object(h.jsx)("button",{onClick:g?re:ne,children:g?"Disable Mic":"Enable Mic"}),Object(h.jsx)("button",{onClick:T?te:ee,children:T?"Disable Screenshare":"Enable Screenshare"})]}),Object(h.jsxs)("div",{className:"peer-ports",children:[Z.video.map((function(e,t){return Object(h.jsx)(v,{videoTrack:O(e)},t)})),Z.screen.map((function(e,t){return Object(h.jsx)(x,{screenTrack:O(e)},t)})),Z.audio.map((function(e,t){return Object(h.jsx)(m,{audioTrack:O(e)},t)}))]})]})};var w=function(){return Object(h.jsx)(o.a,{children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/room",component:k}),Object(h.jsx)(i.b,{path:"/",component:function(){return Object(h.jsx)(i.a,{to:"/room"})}})]})})};u.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.26bc6590.chunk.js.map