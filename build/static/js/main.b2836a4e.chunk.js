(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(6),r=a.n(o),c=(a(17),a(7)),i=a(3),s=(a(19),a(4));function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(s.b,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/about"},"About"))))))}m.defaultProps={title:"Your Title Here"};var u=function(e){var t=e.todo,a=e.onDelete;return l.a.createElement("div",{className:"py-2"},l.a.createElement("p",{style:{float:"left",paddingRight:"1em",opacity:"70%",color:"red",fontSize:"1.5em"}},t.sno+1),l.a.createElement("div",null,l.a.createElement("h4",null,t.title),l.a.createElement("p",null,t.desc),l.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){a(t)}},"Delete")))},d=function(e){return l.a.createElement("div",{className:"container",style:{minHeight:"70vh"}},l.a.createElement("h3",{className:"my-3"},"Todos List"),0===e.todos.length?"No Todos to display":e.todos.map(function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{todo:t,key:t.sno,onDelete:e.onDelete}))}))},g=function(){return l.a.createElement("footer",{className:"bg-dark text-light",style:{position:"relative",bottom:"0",width:"100%",height:"40px",padding:"1 0 1 0",margin:"0"}},l.a.createElement("p",{className:"text-center py-1"},"Copyright \xa9bigeye.in"))},E=function(e){var t=e.addTodo,a=Object(n.useState)(""),o=Object(i.a)(a,2),r=o[0],c=o[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),u=m[0],d=m[1];return l.a.createElement("div",{className:"container my-6"},l.a.createElement("h3",null,"Add a Todo"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r,u),c(""),d("")}},l.a.createElement("div",{className:"form-group needs validation"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",value:r,onChange:function(e){return c(e.target.value)},className:"form-control",id:"todoTitle",placeholder:"Enter Title",required:!0})),l.a.createElement("div",{className:"form-group needs validation"},l.a.createElement("label",{htmlFor:"desc"},"Description"),l.a.createElement("input",{type:"text",value:u,onChange:function(e){return d(e.target.value)},className:"form-control",id:"todoDesc",placeholder:"Enter Description",required:!0})),l.a.createElement("button",{type:"submit",className:"btn btn-sm btn-success my-2"},"Add Todo")))},b=function(){return l.a.createElement("div",{className:"container",style:{margin:"2em auto auto auto",height:"80vh"}},l.a.createElement("h3",{style:{color:"white",backgroundColor:"black",margin:"auto auto 1em auto",textAlign:"center"}},"About Website"),l.a.createElement("h6",null,"TODOS List Website is a kind of Website that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks at any time and delete a task that is completed.",l.a.createElement("hr",null),l.a.createElement("b",null,"Features:"),l.a.createElement("hr",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Create (add) a new task or adding a new ToDo in the ToDo List App."),l.a.createElement("li",null,"See all the tasks or View all the ToDos that were added to the app."),l.a.createElement("li",null,"Delete any ToDo from the list of ToDos."))))},p=a(0);var h=function(){var e,t=Object(n.useState)(e),a=Object(i.a)(t,2),o=a[0],r=a[1];return e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos")),Object(n.useEffect)(function(){localStorage.setItem("todos",JSON.stringify(o))},[o]),l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(m,{title:"TodosList"}),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",element:l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{addTodo:function(e,t){console.log("I am Adding this Todo ",e,t);var a={sno:o.length,title:e,desc:t};r([].concat(Object(c.a)(o),[a]))}}),l.a.createElement(d,{todos:o,onDelete:function(e){console.log("I am onDelete",e),r(o.filter(function(t){return t!==e})),localStorage.setItem("todos",JSON.stringify(o))}}))}),l.a.createElement(p.a,{exact:!0,path:"/about",element:l.a.createElement(b,null)})),l.a.createElement(g,null)))},v=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,22)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null))),v()},8:function(e,t,a){e.exports=a(21)}},[[8,3,2]]]);
//# sourceMappingURL=main.b2836a4e.chunk.js.map