(this["webpackJsonpalgorithms-visualizer"]=this["webpackJsonpalgorithms-visualizer"]||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(20),o=n.n(a),i=(n(27),n(9)),l=function(){return Object(r.jsxs)("div",{className:"h-screen text-center bg-white mb-6 p-4 shadow-xl",children:[Object(r.jsxs)("div",{id:"sorting-algo-container",className:"mb-12",children:[Object(r.jsx)("div",{className:"border-gray-100 w-full rounded-sm border-2 mb-2 shadow-xl",children:"Sorting Algorithms"}),Object(r.jsx)("button",{className:"bg-white w-full mb-2 rounded-md hover:bg-gray-100",children:Object(r.jsx)(i.b,{to:"/merge-sort",children:"Merge Sort"})}),Object(r.jsx)("button",{className:"bg-white w-full mb-2 rounded-md hover:bg-gray-100",children:Object(r.jsx)(i.b,{to:"/quick-sort",children:"Quick Sort"})}),Object(r.jsx)("button",{className:"bg-white w-full mb-2 rounded-md hover:bg-gray-100",children:Object(r.jsx)(i.b,{to:"/bubble-sort",children:"Bubble Sort"})})]}),Object(r.jsxs)("div",{id:"data-structures-container",className:"mb-12",children:[Object(r.jsx)("div",{className:"border-gray-100 w-full rounded-sm border-2 mb-2  shadow-xl",children:"Data Structures"}),Object(r.jsx)("button",{className:"bg-white w-full mb-2 rounded-md hover:bg-gray-100",children:Object(r.jsx)(i.b,{to:"/linked-list",children:"Singly Linked List"})}),Object(r.jsx)("button",{className:"bg-white w-full mb-2 rounded-md hover:bg-gray-100",children:Object(r.jsx)(i.b,{to:"/binary-tree",children:"Binary Tree"})})]}),Object(r.jsx)("div",{id:"path-finding-container",className:"mb-12",children:Object(r.jsx)("div",{className:"border-gray-100 w-full rounded-sm border-2 mb-2  shadow-xl",children:"Pathfinding Algorithms"})}),Object(r.jsx)("button",{className:"bg-white w-full rounded-md hover:bg-gray-100",children:Object(r.jsx)(i.b,{to:"/multiple-pointers",children:"Multiple pointers"})})]})},s=n(4),u=function(e){return Object(r.jsx)("div",{className:"...",children:Object(r.jsx)("div",{id:"circle-".concat(e.index),className:"bg-gray-500 rounded-full mx-auto",style:{width:"".concat(e.value,"px"),height:"".concat(e.value,"px"),textAlign:"center"},children:e.value})})},d=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(1),i=Object(s.a)(o,2),l=i[0],d=i[1],h=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},b=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.length-1,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(t>=n.length-1)return!1;var i=n[t]+n[r];null!==a&&(a.style.backgroundColor="rgb(107, 114, 128)"),null!==o&&(o.style.backgroundColor="rgb(107, 114, 128)");var l=document.getElementById("circle-".concat(t)),s=document.getElementById("circle-".concat(r));if(l.style.backgroundColor="whitesmoke",s.style.backgroundColor="whitesmoke",i===c){var u=document.getElementById("circle-".concat(t)),d=document.getElementById("circle-".concat(r));return u.style.backgroundColor="green",d.style.backgroundColor="green",!0}r<=t+1?setTimeout((function(){return e(t+1,n.length-1,c,l,s)}),100):setTimeout((function(){return e(t,r-1,c,l,s)}),100)};return Object(c.useEffect)((function(){!function(){for(var e=[],t=0;t<h(10,50);t++)e.push(h(20,75));a(e);var n=Math.floor(e.length/5);d(n)}()}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"flex items-center h-64 grid grid-cols-".concat(l," grid-flow-row gap-8"),children:n.map((function(e,t){return Object(r.jsx)(u,{value:e,index:t})}))}),Object(r.jsx)("button",{className:"hover:bg-gray-200 rounded-xl p-1 float-right",onClick:function(){return b()},children:"Run"})]})},h=n(2),b=function(){return Object(r.jsx)("div",{})},f=function(e){return Object(r.jsx)("div",{id:"bar-".concat(e.index),className:"array-bar w-full min-w-0 my-6 mx-1 bg-gray-300",style:{height:"".concat(e.value,"px")},children:e.value})},m=function e(t,n,r,c,a){if(n!==r){var o=Math.floor((n+r)/2);e(c,n,o,t,a),e(c,o+1,r,t,a),g(t,n,o,r,c,a)}},g=function(e,t,n,r,c,a){for(var o=t,i=t,l=n+1;i<=n&&l<=r;)a.push([i,l]),a.push([i,l]),c[i]<=c[l]?(a.push([o,c[i]]),e[o++]=c[i++]):(a.push([o,c[l]]),e[o++]=c[l++]);for(;i<=n;)a.push([i,i]),a.push([i,i]),a.push([o,c[i]]),e[o++]=c[i++];for(;l<=r;)a.push([l,l]),a.push([l,l]),a.push([o,c[l]]),e[o++]=c[l++]},j=function(){for(var e=[],t=0;t<x(20,80);t++)e.push(x(20,500));return e},x=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},v=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=function(){for(var e=function(e){var t=[];if(e.length<=1)return e;var n=e.slice();return m(e,0,e.length-1,n,t),t}(n),t=function(t){var n=document.getElementsByClassName("array-bar");if(t%3!==2){var r=Object(s.a)(e[t],2),c=r[0],a=r[1],o=n[c].style,i=n[a].style,l=t%3===0?"whitesmoke":"rgb(107, 114, 128)";setTimeout((function(){o.backgroundColor=l,i.backgroundColor=l}),20*t)}else setTimeout((function(){var r=Object(s.a)(e[t],2),c=r[0],a=r[1],o=n[c];o.style.height="".concat(a,"px"),o.innerHTML="".concat(a)}),20*t)},r=0;r<e.length;r++)t(r)};return Object(c.useEffect)((function(){a(j())}),[]),Object(r.jsxs)("div",{className:"flex flex-row",children:[n.map((function(e,t){return Object(r.jsx)(f,{value:e,index:t},t)})),Object(r.jsx)("button",{onClick:function(){return o()},children:"Run"})]})},y=n(7),p=n.n(y),O=n(12),k=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1];function o(e,t,n){return i.apply(this,arguments)}function i(){return(i=Object(O.a)(p.a.mark((function e(t,n,r){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n>=r)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,l(t,n,r);case 4:return c=e.sent,document.getElementById("bar-".concat(c)).style.backgroundColor="#D1D5DB",e.next=8,Promise.all([o(t,n,c-1),o(t,c+1,r)]);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t,n){return u.apply(this,arguments)}function u(){return(u=Object(O.a)(p.a.mark((function e(t,n,r){var c,a,o,i,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c=n;c<=r;c++)document.getElementById("bar-".concat(c)).style.backgroundColor="#D6FFB7";a=t[r],o=n,document.getElementById("bar-".concat(o)).style.backgroundColor="#E0777D",i=n;case 5:if(!(i<r)){e.next=15;break}if(!(t[i]<a)){e.next=12;break}return e.next=9,d(t,i,o);case 9:document.getElementById("bar-".concat(o)).style.backgroundColor="#D1D5DB",o++,document.getElementById("bar-".concat(o)).style.backgroundColor="#E0777D";case 12:i++,e.next=5;break;case 15:return e.next=17,d(t,o,r);case 17:for(l=n;l<r;l++)l!=o&&(document.getElementById("bar-".concat(l)).style.backgroundColor="#D1D5DB");return e.abrupt("return",o);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,n){return h.apply(this,arguments)}function h(){return(h=Object(O.a)(p.a.mark((function e(t,n,r){var c,a,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(100);case 2:c=t[n],t[n]=t[r],t[r]=c,(a=document.getElementById("bar-".concat(n))).style.height="".concat(t[n],"px"),a.innerHTML=t[n],(o=document.getElementById("bar-".concat(r))).style.height="".concat(t[r],"px"),o.innerHTML=t[r];case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return new Promise((function(t){return setTimeout(t,e)}))}return Object(c.useEffect)((function(){a(j())}),[]),Object(r.jsxs)("div",{className:"flex flex-row",children:[n.map((function(e,t){return Object(r.jsx)(f,{value:e,index:t},t)})),Object(r.jsx)("button",{onClick:function(){return o(n,0,n.length-1)},children:"Run"})]})},w=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=function(){var e=Object(O.a)(p.a.mark((function e(){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<n.length)){e.next=19;break}r=0;case 3:if(!(r<n.length)){e.next=16;break}if(document.getElementById("bar-".concat(t)).style.backgroundColor="#D1D5DB",document.getElementById("bar-".concat(r)).style.backgroundColor="#D1D5DB",!(n[t]<n[r])){e.next=13;break}return document.getElementById("bar-".concat(t)).style.backgroundColor="#E0777D",document.getElementById("bar-".concat(r)).style.backgroundColor="#E0777D",e.next=11,i(n,t,r);case 11:document.getElementById("bar-".concat(t)).style.backgroundColor="#D1D5DB",document.getElementById("bar-".concat(r)).style.backgroundColor="#D1D5DB";case 13:r++,e.next=3;break;case 16:t++,e.next=1;break;case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function i(e,t,n){return l.apply(this,arguments)}function l(){return(l=Object(O.a)(p.a.mark((function e(t,n,r){var c,a,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(100);case 2:c=t[n],t[n]=t[r],t[r]=c,(a=document.getElementById("bar-".concat(n))).style.height="".concat(t[n],"px"),a.innerHTML=t[n],(o=document.getElementById("bar-".concat(r))).style.height="".concat(t[r],"px"),o.innerHTML=t[r];case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return new Promise((function(t){return setTimeout(t,e)}))}return Object(c.useEffect)((function(){a(j())}),[]),Object(r.jsxs)("div",{className:"flex flex-row",children:[n.map((function(e,t){return Object(r.jsx)(f,{value:e,index:t},t)})),Object(r.jsx)("button",{onClick:function(){return o()},children:"Run"})]})},I=n(10),E=n(14),B=function e(t){Object(I.a)(this,e),this.value=t,this.next=null,this.prev=null},C=function e(t){Object(I.a)(this,e),this.value=t,this.left=null,this.right=null,this.frequency=0,this.x=0,this.y=0,this.nodeNumberOnBranch=0},N=function(){function e(){Object(I.a)(this,e),this.head=null,this.tail=null,this.length=0}return Object(E.a)(e,[{key:"push",value:function(e){var t=new B(e);return this.head?(this.tail.next=t,this.tail=t):(this.head=t,this.tail=this.head),this.length++,this}},{key:"pop",value:function(){if(this.head){for(var e=this.head,t=e;e.next;)t=e,e=e.next;return this.tail=t,this.tail.next=null,this.length--,0===this.length&&(this.head=null,this.tail=null),e}}},{key:"shift",value:function(){if(this.head){var e=this.head;return this.head=e.next,this.length--,e}}},{key:"unshift",value:function(e){var t=new B(e);return this.head?(t.next=this.head,this.head=t):(this.head=t,this.tail=this.head),this.length++,this}}]),e}(),T=function(){var e=Object(c.useState)(new N),t=Object(s.a)(e,2),n=t[0],a=(t[1],function(){var e=document.querySelector("#node-container");if(0===n.length){var t=document.createElement("div");t.style.marginLeft="1%",t.style.borderRadius="50%",t.style.padding="1%",t.style.border="2px solid blue",t.innerHTML=1,t.id="node-head",t.className="node",e.append(t),n.push(1)}else{if(n.length>1){var r=document.getElementById("node-tail");r.id="node-".concat(n.tail.value),r.style.borderColor="darkgray",document.getElementById("last-spacer").id="spacer-".concat(n.length-1)}var c=n.tail.value+1,a=document.createElement("div");a.innerHTML="--\x3e",a.style.textAlign="center",a.style.marginTop="1%",a.style.marginLeft="1%",a.id="last-spacer",a.className="spacer";var o=document.createElement("div");o.style.marginLeft="1%",o.style.borderRadius="50%",o.style.padding="1%",o.style.border="2px solid lightgreen",o.innerHTML=c,o.id="node-tail",o.className="node",e.append(a),e.append(o),n.push(c)}});return Object(c.useEffect)((function(){n.head=0}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{id:"node-container",className:"flex flex-row"}),Object(r.jsx)("button",{className:"ml-2",onClick:function(){return a()},children:" Push"}),Object(r.jsx)("button",{className:"ml-2",onClick:function(){return function(){var e=document.querySelector("#node-container");if(0!==n.length)if(n.pop(),0===n.length){var t=document.getElementById("node-head");e.removeChild(t)}else{var r=document.getElementById("node-tail");e.removeChild(r);var c=document.getElementById("last-spacer");if(e.removeChild(c),1!==n.length){var a=document.getElementById("node-".concat(n.tail.value));a.id="node-tail",a.style.borderColor="lightgreen",document.getElementById("spacer-".concat(n.length-1)).id="last-spacer"}}}()},children:" Pop"}),Object(r.jsx)("button",{className:"ml-2",onClick:function(){return function(){if(0!==n.length){var e=document.querySelector("#node-container"),t=document.getElementById("node-head");if(e.removeChild(t),n.length>2){var r=document.querySelectorAll(".spacer");r.forEach((function(e,t){t!==r.length-1&&(e.id="spacer-".concat(t))}));var c=document.getElementById("node-".concat(n.head.value+1));c.style.borderColor="blue",c.id="node-head";var a=document.getElementById("spacer-0");e.removeChild(a)}else if(2===n.length){var o=document.getElementById("node-tail");o.style.borderColor="blue",o.id="node-head";var i=document.getElementById("last-spacer");e.removeChild(i)}n.shift()}}()},children:" Shift"}),Object(r.jsx)("button",{className:"ml-2",onClick:function(){return function(){if(0===n.length)return a();var e=document.querySelectorAll(".node"),t=document.querySelectorAll(".spacer"),r=document.querySelector("#node-container"),c=n.head.value-1,o=document.createElement("div");o.style.marginLeft="1%",o.style.borderRadius="50%",o.style.padding="1%",o.style.border="2px solid blue",o.innerHTML=c,o.className="node",o.id="node-head";var i=document.createElement("div");i.innerHTML="--\x3e",i.style.textAlign="center",i.style.marginTop="1%",i.style.marginLeft="1%",i.className="spacer",1===n.length?i.id="last-spacer":i.id="spacer-1",e.forEach((function(t,n){t.innerHTML="".concat(c+n+1),n!==e.length-1?(t.id="node-".concat(t.innerHTML),t.style.borderColor="darkgray"):t.style.borderColor="lightgreen"})),t.forEach((function(e,n){n!==t.length-1&&(e.id="spacer-".concat(n+2))})),r.prepend(i),r.prepend(o),n.unshift(c)}()},children:" Unshift"})]})},D=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=.25*Math.floor(.9*window.innerWidth),c=.75*Math.floor(.9*window.innerWidth);if(e===t)return n?r:c;var a=80-Math.floor(8*parseInt(e.nodeNumberOnBranch));return n?a>0?e.x-a:e.x-18:a>0?e.x+a:e.x+18},M=function e(t,n,r,c){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#000000",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1.9*Math.PI,i=document.getElementById("tree-canvas");if(i.getContext){var l=i.getContext("2d");o>0?(l.beginPath(),l.arc(n,r,c,o,2*Math.PI,!1),l.strokeStyle=a,l.stroke(),setTimeout((function(){return e(t,n,r,c,a,o-.1)}),20)):(l.beginPath(),l.arc(n,r,c,0,2*Math.PI,!1),l.stroke(),l.font="10pt Georgia",l.fillStyle=a,l.textAlign="center",l.fillText(t,n,r+3))}},S=function(e,t,n,r){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#000000",a=document.getElementById("tree-canvas");if(a.getContext){var o=a.getContext("2d");o.beginPath(),o.moveTo(e,t),o.lineTo(n,r),o.strokeStyle=c,o.stroke()}},L=function(){function e(){Object(I.a)(this,e),this.root=null}return Object(E.a)(e,[{key:"insert",value:function(e){var t=new C(e),n=Math.floor(.9*window.innerWidth/2);if(!this.root){var r=n;return t.x=r,t.y=25,M(e,r,25,18),this.root=t,this}this.checkValue(this.root,t)}},{key:"checkValue",value:function(e,t){var n=this;if(parseInt(e.value)>parseInt(t.value)){if(null===e.left){var r=D(e,this.root,!0),c=e.y+50;return t.x=r,t.y=c,M(parseInt(t.value),r,c,18),setTimeout((function(){return S(e.x,e.y,r,c)}),1750),e.left=t,this}e=e.left,t.nodeNumberOnBranch+=1,setTimeout((function(){return n.checkValue(e,t)}),250)}else{if(!(parseInt(e.value)<parseInt(t.value)))return e.frequency+=1,this;if(null===e.right){var a=D(e,this.root,!1),o=e.y+50;return t.x=a,t.y=o,t.nodeNumberOnBranch+=1,M(parseInt(t.value),a,o,18),setTimeout((function(){return S(e.x,e.y,a,o)}),1750),e.right=t,this}e=e.right,t.nodeNumberOnBranch+=1,setTimeout((function(){return n.checkValue(e,t)}),250)}}},{key:"find",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root;if(!n)return alert("No node with value ".concat(e," was found")),!1;if(parseInt(e)===parseInt(n.value))return M(parseInt(n.value),n.x,n.y,18,"#00FF00"),console.log(n.nodeNumberOnBranch),n;if(parseInt(e)<parseInt(n.value))M(parseInt(n.value),n.x,n.y,18,"#ffa500"),null!==n.left&&setTimeout((function(){return S(n.x,n.y,n.left.x,n.left.y,"#ffa500")}),1750),setTimeout((function(){return t.find(e,n.left)}),2e3);else{if(!(parseInt(e)>parseInt(n.value)))return!1;M(parseInt(n.value),n.x,n.y,18,"#ffa500"),null!==n.right&&setTimeout((function(){return S(n.x,n.y,n.right.x,n.right.y,"#ffa500")}),1750),setTimeout((function(){return t.find(e,n.right)}),2e3)}}}]),e}(),H=function(){var e=Object(c.useState)(new L),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{id:"binary-tree-page",className:"h-screen w-screen",children:[Object(r.jsx)("canvas",{id:"tree-canvas",className:"mt-2 ml-2 border-gray-200 border-2",width:.9*window.innerWidth,height:.9*window.innerHeight}),Object(r.jsxs)("div",{className:"flex flex-row",children:[Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.insert(e.target[0].value)},children:[Object(r.jsx)("input",{className:"m-6",type:"number",id:"value",placeholder:"0"}),Object(r.jsx)("button",{type:"submit",children:"Add"})]}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.find(e.target[0].value)},children:[Object(r.jsx)("input",{className:"m-6",type:"number",id:"value",placeholder:"0"}),Object(r.jsx)("button",{type:"submit",children:"Find"})]}),Object(r.jsx)("button",{className:"m-6",onClick:function(){for(var e=0;e<100;)n.insert(Math.floor(100*Math.random())),e++},children:"Random Tree"}),Object(r.jsx)("button",{className:"m-6",onClick:function(){a(new L),function(){var e=document.getElementById("tree-canvas");if(e.getContext){var t=e.getContext("2d");t.beginPath(),t.clearRect(0,0,.9*window.innerWidth,.9*window.innerHeight),t.closePath()}}()},children:"Reset"})]})]})},P=function(){return Object(r.jsx)("div",{className:"w-screen",children:Object(r.jsxs)(h.d,{children:[Object(r.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(r.jsx)(b,{})}}),Object(r.jsx)(h.b,{path:"/multiple-pointers",exact:!0,render:function(){return Object(r.jsx)(d,{})}}),Object(r.jsx)(h.b,{path:"/merge-sort",exact:!0,render:function(){return Object(r.jsx)(v,{})}}),Object(r.jsx)(h.b,{path:"/quick-sort",exact:!0,render:function(){return Object(r.jsx)(k,{})}}),Object(r.jsx)(h.b,{path:"/bubble-sort",exact:!0,render:function(){return Object(r.jsx)(w,{})}}),Object(r.jsx)(h.b,{path:"/linked-list",exact:!0,render:function(){return Object(r.jsx)(T,{})}}),Object(r.jsx)(h.b,{path:"/binary-tree",component:H}),Object(r.jsx)(h.a,{to:"/"})]})})},q=function(){return Object(r.jsx)("div",{className:"App h-screen flex flex-row",children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(P,{})]})})};o.a.render(Object(r.jsx)(q,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9809be88.chunk.js.map