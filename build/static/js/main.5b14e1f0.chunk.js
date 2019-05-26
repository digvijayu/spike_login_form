(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(n,e,t){n.exports=t(35)},28:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(6),i=t.n(o),c=(t(28),t(4)),l=t(8),u=t(18),s=t(9),d={isLoggedIn:!1,email:"",password:"",loginErrorMessage:""},p=Object(l.c)({app:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ACTION_SEND_LOGIN_REQUEST":return Object(s.a)({},n,{loginErrorMessage:""});case"ACTION_LOGIN_RESPONSE_RECEIVED":return Object(s.a)({},n,{isLoggedIn:!0});case"ACTION_LOGIN_RESPONSE_ERROR":return Object(s.a)({},n,{loginErrorMessage:"\n                Mock Error: This error just shows how failed \n                authentication requests are displayed. The response \n                is random, please try logging in one again.\n                "});case"ACTION_UPDATE_EMAIL":return Object(s.a)({},n,{email:e.email,loginErrorMessage:""});case"ACTION_UPDATE_PASSWORD":return Object(s.a)({},n,{password:e.password,loginErrorMessage:""});case"ACTION_LOGOUT":return{isLoggedIn:!1,email:"",password:"",loginErrorMessage:""};default:return n}}});var g=t(1),m=t(2),f=t(12),b=t.n(f),E=t(19),h=function(){return new Promise(function(n,e){setTimeout(function(){var t=Math.random()>.5;console.log("random login response is: ",t),t?n({}):e(new Error("Login failed"))},500)})};function v(){var n=Object(g.a)(["\n    color: ","\n    margin-top: 5px;\n    font-size: 11px;\n    display:list-item;\n    margin-left: 20px;\n"]);return v=function(){return n},n}var O=m.a.div(v(),function(n){return n.valid?"#009900":"#FF0000"}),w=/(.+)@(.+){2,}\.(.+){2,}/,x=/abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/,I=/i|O|l/,j=/aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz/g,_=/^[a-z]+$/,k=function(n){return w.test(n)},y=function(n){return x.test(n)},A=function(n){return!!n&&!I.test(n)},C=function(n){return(n.match(j)||[]).length>=2},N=function(n){return!!n&&n.length<=32},T=function(n){return _.test(n)};function L(){var n=Object(g.a)(["\n    background:#ecf0f1;\n    border: #ccc 1px solid;\n    border-bottom: #ccc 2px solid;\n    padding: 8px;\n    width:250px;\n    color:#AAAAAA;\n    margin-top:10px;\n    font-size:1em;\n    border-radius:4px;\n"]);return L=function(){return n},n}var P=function(n){var e=n.email,t=n.onChange,r=k(e);return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{onChange:function(n){return t(n)},type:"text",placeholder:"Email",name:"email",value:e}),a.a.createElement(O,{valid:r},r?"Email is valid":"Email should be valid"))},S=m.a.input(L());function R(){var n=Object(g.a)(["\n    border-radius:4px;\n    background:#ecf0f1;\n    border: #ccc 1px solid;\n    padding: 8px;\n    width:250px;\n    font-size:1em;\n    margin-top:10px;\n"]);return R=function(){return n},n}var z=function(n){var e=n.password,t=n.onChange;return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{onChange:function(n){return t(n)},type:"password",placeholder:"Password",name:"email",value:e}),a.a.createElement(O,{valid:y(e)},"Passwords must include one increasing straight of at least three letters, like abc , cde , fgh , and so on, up to xyz . They cannot skip letters; acd doesn't count."),a.a.createElement(O,{valid:A(e)},"Passwords may not contain the letters i, O, or l, as these letters can be mistaken for other characters and are therefore confusing."),a.a.createElement(O,{valid:C(e)},"Passwords must contain at least two non-overlapping pairs of letters, like aa, bb, or cc."),a.a.createElement(O,{valid:N(e)},"Passwords cannot be longer than 32 characters."),a.a.createElement(O,{valid:T(e)},"Passwords can only contain lower case alphabetic characters."))},M=m.a.input(R());function D(){var n=Object(g.a)(["\n    position: fixed;\n    margin: 10px 50%;\n    padding: 12px 40px;\n    border: 2px solid #721c24;\n    border-radius: .25rem;\n    color: #721c24;\n    background-color: #f8d7da;\n    border-color: #721c24;\n    z-index: 1;\n    transform: translate(-50%, 0);\n    width: 400px;\n    text-align: center;\n"]);return D=function(){return n},n}var F=function(n){var e=n.message;return a.a.createElement(G,null,e)},G=m.a.div(D());function U(){var n=Object(g.a)(["\n    background:#2ecc71;\n    width:125px;\n    padding-top:5px;\n    padding-bottom:5px;\n    color:white;\n    border-radius:4px;\n    border: #27ae60 1px solid;\n\n    margin-top:20px;\n    margin-bottom:20px;\n    float:left;\n    margin-left:16px;\n    font-weight:800;\n    font-size:0.8em;\n\n    &:hover {\n        background:#2CC06B;\n    }\n\n    &:disabled {\n        opacity: 0.5;\n    }\n"]);return U=function(){return n},n}function q(){var n=Object(g.a)(["\n    font-size:1.5em;\n    color:#525252;\n"]);return q=function(){return n},n}function B(){var n=Object(g.a)(["\n    position: fixed;\n    width: 400px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background:white;\n    border-radius:6px;\n    padding:20px;\n    border: #2980b9 4px solid;\n"]);return B=function(){return n},n}function W(){var n=Object(g.a)(["\n    position: fixed;\n    background-color: #aaa;\n    opacity: 0.8;\n    width: 100%;\n    height: 100%;\n"]);return W=function(){return n},n}var J=function(n){var e=Object(c.c)(function(n){return n.app}),t=e.isLoggedIn,r=e.email,o=e.password,i=e.loginErrorMessage,l=Object(c.b)();if(t)return a.a.createElement(a.a.Fragment,null);var u=k(r)&&y(o)&&A(o)&&C(o)&&N(o)&&T(o);return a.a.createElement(a.a.Fragment,null,!!i&&a.a.createElement(F,{message:i}),a.a.createElement(Q,null),a.a.createElement(V,null,a.a.createElement($,null,"Login"),a.a.createElement(P,{email:r,onChange:function(n){return l({type:"ACTION_UPDATE_EMAIL",email:n.target.value})}}),a.a.createElement(z,{password:o,onChange:function(n){return l({type:"ACTION_UPDATE_PASSWORD",password:n.target.value})}}),a.a.createElement(H,{onClick:function(){return function(){var n=Object(E.a)(b.a.mark(function n(e){return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"ACTION_SEND_LOGIN_REQUEST"}),h().then(function(n){e({type:"ACTION_LOGIN_RESPONSE_RECEIVED",response:n})}).catch(function(n){return e({type:"ACTION_LOGIN_RESPONSE_ERROR",error:n})});case 2:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()(l)},disabled:!u},"Sign In")))},Q=m.a.div(W()),V=m.a.div(B()),$=m.a.div(q()),H=m.a.button(U());function K(){var n=Object(g.a)(["\n    font-size:1.5em;\n    color:#525252;\n"]);return K=function(){return n},n}function X(){var n=Object(g.a)(["\n    background:#2ecc71;\n    width:125px;\n    padding-top:5px;\n    padding-bottom:5px;\n    color:white;\n    border-radius:4px;\n    border: #27ae60 1px solid;\n\n    margin-top:20px;\n    margin-bottom:20px;\n    float:left;\n    font-weight:800;\n    font-size:0.8em;\n\n    &hover {\n        background:#2CC06B;\n    }\n"]);return X=function(){return n},n}function Y(){var n=Object(g.a)(["\n    height: 100%;\n    padding: 40px;\n"]);return Y=function(){return n},n}var Z=m.a.div(Y()),nn=m.a.button(X()),en=m.a.div(K()),tn=function(n){var e=Object(c.b)(),t=Object(c.c)(function(n){return{isLoggedIn:n.app.isLoggedIn,email:n.app.email}}),r=t.isLoggedIn,o=t.email;return a.a.createElement(Z,null,r&&a.a.createElement(a.a.Fragment,null,a.a.createElement(en,null,"Hello, ",o),a.a.createElement(nn,{onClick:function(){return e({type:"ACTION_LOGOUT"})}},"Logout")),!r&&a.a.createElement(a.a.Fragment,null))},rn=function(){var n=[u.a];return Object(l.d)(p,l.a.apply(void 0,n))}();var an=function(){return a.a.createElement("div",{className:"modal-open"},a.a.createElement(c.a,{store:rn},a.a.createElement(J,null),a.a.createElement(tn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(an,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.5b14e1f0.chunk.js.map