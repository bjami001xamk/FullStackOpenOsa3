(this.webpackJsonposa2puhelinluettelo=this.webpackJsonposa2puhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),l=(t(19),t(2)),c=t(3),i=t.n(c),m="/api/persons",s=function(){return i.a.get(m).then((function(e){return e.data}))},d=function(e){return i.a.post(m,e).then((function(e){return e.data})).catch((function(e){return e.response.data}))},f=function(e){if(window.confirm("Delete "+e.name+"?"))return i.a.delete(m+"/"+e.id).then((function(e){return e}))},h=function(e,n){var t=n.filter((function(n){return n.name===e.name}))[0].id;return i.a.put(m+"/"+t,e).then((function(e){return e}))},b=function(e){return r.a.createElement("button",{onClick:e.handleClick},"Delete")},p=function(e){if(""==e.persons)return r.a.createElement(r.a.Fragment,null);var n=e.persons.filter((function(n){return n.name.includes(e.newFilter)}));return r.a.createElement(r.a.Fragment,null,n.map((function(n){return r.a.createElement("p",{key:n.name},n.name," ",n.number," ",r.a.createElement(b,{handleClick:function(){return function(n){f(n).then(e.setPersons(e.persons.filter((function(e){return e.id!==n.id})))),e.setErrorText("Deleted ".concat(n.name," from database")),setTimeout((function(){e.setErrorText(null)}),5e3)}(n)}}))})))},E=function(e){var n=e.value,t=e.handleOnChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},v=function(e){var n=e.newName,t=e.handleNameChange,a=e.newNumber,o=e.handleNumberChange,u=e.addPerson;return r.a.createElement("form",{onSubmit:u},r.a.createElement("h2",null,"add a new"),r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.errorText;return null===n?null:r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},w=function(){var e=Object(a.useState)([""]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),c=Object(l.a)(u,2),i=c[0],m=c[1],f=Object(a.useState)(""),b=Object(l.a)(f,2),w=b[0],O=b[1],C=Object(a.useState)(""),j=Object(l.a)(C,2),k=j[0],N=j[1],S=Object(a.useState)(null),T=Object(l.a)(S,2),y=T[0],x=T[1];return Object(a.useEffect)((function(){s().then((function(e){o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{errorText:y}),r.a.createElement(E,{value:k,handleOnChange:function(e){N(e.target.value)}}),r.a.createElement(v,{newName:i,handleNameChange:function(e){m(e.target.value)},newNumber:w,handleNumberChange:function(e){O(e.target.value)},addPerson:function(e){e.preventDefault();var n={name:i,number:w};t.filter((function(e){return e.name===n.name})).length>0?window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))&&(h(n,t),o(t.map((function(e){return e.name===i?n:e}))),m(""),O(""),x("Updated ".concat(n.name," phonenumber")),setTimeout((function(){x(null)}),5e3)):d(n).then((function(e){void 0!=e.name?(o(t.concat(e)),m(""),O(""),x("Added ".concat(e.name)),setTimeout((function(){x(null)}),5e3)):(x(e.error),setTimeout((function(){x(null)}),5e3))}))}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(p,{persons:t,newFilter:k,setPersons:o,setErrorText:x}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.e1a66829.chunk.js.map