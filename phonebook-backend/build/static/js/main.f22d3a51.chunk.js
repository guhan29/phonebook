(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(14),o=t.n(a),u=(t(19),t(3)),i=t(0),s=function(e){var n=e.person,t=e.handleDelete;return Object(i.jsxs)("p",{children:[n.name," ",n.number," ",Object(i.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},d=function(e){var n=e.persons,t=e.filter,c=e.handleDelete;return Object(i.jsx)("div",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(i.jsx)(s,{person:e,handleDelete:c},e.id)}))})},l=function(e){var n=e.newName,t=e.newNumber,c=e.handleNameChange,r=e.handleNumberChange,a=e.handleSubmit;return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:a,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:c})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:t,onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})})},j=function(e){var n=e.onChange,t=e.value;return Object(i.jsxs)("div",{children:["filter shown with: ",Object(i.jsx)("input",{value:t,onChange:n})]})},h=t(4),b=t.n(h),f="/api/persons",O={getAll:function(){return b.a.get(f).then((function(e){return e.data}))},create:function(e){return b.a.post(f,e).then((function(e){return e.data}))},update:function(e,n){return b.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},deletePerson:function(e){return b.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))}},m=function(e){var n=e.message;return null==n[0]?Object(i.jsx)(i.Fragment,{}):Object(i.jsx)("div",{children:Object(i.jsx)("h1",{className:n[0],children:n[1]})})},p=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),o=Object(u.a)(a,2),s=o[0],h=o[1],b=Object(c.useState)(""),f=Object(u.a)(b,2),p=f[0],x=f[1],v=Object(c.useState)(""),g=Object(u.a)(v,2),w=g[0],C=g[1],N=Object(c.useState)([null,null]),S=Object(u.a)(N,2),k=S[0],D=S[1];Object(c.useEffect)((function(){O.getAll().then((function(e){return r(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(m,{message:k}),Object(i.jsx)(j,{onChange:function(e){C(e.target.value)},value:w}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(l,{newName:s,newNumber:p,handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){x(e.target.value)},handleSubmit:function(e){e.preventDefault();var n={name:s,number:p},c=t.find((function(e){return e.name===s}));void 0===c?O.create(n).then((function(e){r(t.concat(e)),h(""),x(""),D(["success","Added ".concat(n.name)])})).catch((function(e){D(["error",e.response.data.error])})):window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))?(console.log(c.id),O.update(c.id,n).then((function(e){r(t.map((function(n){return n.id!==c.id?n:e}))),h(""),x(""),D(["success","Modified ".concat(s)])})).catch((function(e){D(["error",e.response.data.error])}))):(h(""),x(""))}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(d,{persons:t,filter:w,handleDelete:function(e){r(t.filter((function(n){return n.id!==e}))),O.deletePerson(e).catch((function(e){console.log("unable to delete")}))}})]})};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.f22d3a51.chunk.js.map