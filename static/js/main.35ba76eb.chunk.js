(this.webpackJsonpreact_chat1=this.webpackJsonpreact_chat1||[]).push([[0],{19:function(e,a,t){e.exports=t(37)},24:function(e,a,t){},33:function(e){e.exports=JSON.parse('{"users":[{"id":0,"username":"betteruser0","real_name":"Better User","verified":true},{"id":1,"username":"marymeeker","real_name":"Mary Meeker","verified":true},{"id":2,"username":"ConanOBrien","real_name":"Conan O\'Brien","verified":true},{"id":3,"username":"baratunde","real_name":"Baratunde","verified":false}],"posts":[{"id":2374237842,"user":1,"message":"Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.","ts":1337774582},{"id":2374272076,"user":2,"message":"If I were in prison, I wouldn\'t ruin my spoon trying to tunnel out, because going without morning yogurt is its own prison.","ts":1337968739},{"id":4545435344,"user":3,"message":"Something beautiful happened in Cornwall. https://media.better.com/microblog/cornwall.jpg","ts":1461607139},{"id":4629293242,"user":2,"message":"Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.","ts":1478942943}]}')},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(12),c=t.n(s),o=(t(24),t(1)),l=t(6),m=t.n(l),i=t(13),u=t.n(i),h=function(e){var a=e.message,t=e.showCard;return r.a.createElement("div",{className:"chat__card"},r.a.createElement("div",{className:"chat__card-container"},r.a.createElement("div",{className:"chat__card-flipper","data-flip":t},r.a.createElement("div",{className:"chat__card-front"},r.a.createElement("div",{className:"chat__message-content"},a.message)),r.a.createElement("div",{className:"chat__card-back"},r.a.createElement("div",{className:"chat__card-content"},r.a.createElement(u.a,null)," Active Since \xa0",r.a.createElement(m.a,{date:a.ts,format:"MMM YYYY"}))))))},d=Object(n.createContext)(),f=function(e){return r.a.createElement(d.Provider,{value:{isAuthenticated:!0,authId:0}},e.children)},g=function(e){var a=e.message,t=e.user,s=Object(n.useContext)(d).authId,c=a.user===s,l=c?"better-icon.svg":"".concat(t.username,".jpg"),i=Object(n.useState)(!1),u=Object(o.a)(i,2),f=u[0],g=u[1];return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("li",{className:"chat__message",onClick:function(){return g(!f)},"data-id":a.id,"data-is-auth":c,"data-flip":f},r.a.createElement("div",{className:"chat__message-avatar"},r.a.createElement("img",{className:"chat__message-avatar-img",src:"/images/".concat(l),alt:t.real_name})),r.a.createElement("div",{className:"chat__message-wrapper"},r.a.createElement(m.a,{className:"chat__message-timestamp",fromNow:!0,date:a.ts,interval:3e4}),r.a.createElement("div",{className:"chat__message-user"},r.a.createElement("span",{className:"chat__message-realname"},t.real_name),r.a.createElement("span",{className:"chat__message-username"},"@",t.username)),r.a.createElement(h,{message:a,showCard:f}))))},p=t(10),_=t(7),v=t.n(_),b=t(2),E=Object(n.createContext)(),O=function(e){var a=Object(n.useState)("false"),s=Object(o.a)(a,2),c=s[0],l=(s[1],Object(n.useState)([])),m=Object(o.a)(l,2),i=m[0],u=m[1],h=Object(n.useState)([]),d=Object(o.a)(h,2),f=d[0],g=d[1];Object(n.useEffect)((function(){if(c){!function(){var e,a;v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.awrap(fetch("/api/get/chat"));case 3:return e=t.sent,t.next=6,v.a.awrap(e.json());case 6:a=t.sent,u(Object(b.a)(a.users)),g(Object(b.a)(a.posts)),console.log("data fetched",a),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("get error,",t.t0.message);case 15:case"end":return t.stop()}}),null,null,[[0,12]])}()}else{var e=t(33);u(Object(b.a)(e.users)),g(Object(b.a)(e.posts)),console.log("data imported",e)}}),[c]);return r.a.createElement(E.Provider,{value:{users:i,messages:f,postMessage:function(e){c?fetch("/api/post/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(a){if(!a.ok)throw new Error("Oops! Something went wrong with the fetch.");g([].concat(Object(b.a)(f),[Object(p.a)({},e)]))})).catch((function(e){console.log("POST error:",e.message)})):g([].concat(Object(b.a)(f),[Object(p.a)({},e)]))}}},e.children)},j=function(){var e=Object(n.useContext)(E),a=e.users,t=e.messages,s=Object(n.useRef)(null);return Object(n.useEffect)((function(){s.current.scrollIntoView({behavior:"smooth"})}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"chat__messages"},t&&t.map((function(e){var t=a.find((function(a){return a.id===e.user}));return r.a.createElement(g,{key:e.id,message:e,user:t})}))),r.a.createElement("div",{ref:s}))},w=t(15),N=t.n(w),y=t(16),S=t.n(y),C=function(){var e=Object(n.useContext)(E).postMessage,a=Object(n.useContext)(d).authId,t=Object(n.useState)(""),s=Object(o.a)(t,2),c=s[0],l=s[1],m=Object(n.useState)(140),i=Object(o.a)(m,2),u=i[0],h=i[1];return r.a.createElement("div",{className:"chat__form"},r.a.createElement("form",{className:"chat__form-form",onSubmit:function(t){if(t.preventDefault(),c.trim().length>0){var n={id:N()(),user:a,message:c,ts:Date.now()};e(n)}else console.log("Form error: New message must include characters other than whitespace.");l(""),h(140)}},r.a.createElement("span",{className:"chat__form-chars"},u),r.a.createElement("input",{className:"chat__form-input",name:"message",placeholder:"Whats happening?",onChange:function(e){e.preventDefault();var a=e.target.value;h(140-a.length),l(a)},value:c,maxLength:140,required:!0}),r.a.createElement("button",{className:"chat__form-button",type:"submit"},r.a.createElement(S.a,null))))},x=t(17),k=t.n(x),I=function(){return r.a.createElement("header",{className:"chat__header"},r.a.createElement("div",{className:"chat__logo"},r.a.createElement(k.a,{className:"chat__logo-svg"})))},M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement(O,null,r.a.createElement(f,null,r.a.createElement("main",{className:"chat"},r.a.createElement(j,null),r.a.createElement(C,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.35ba76eb.chunk.js.map