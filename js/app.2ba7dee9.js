(function(e){function t(t){for(var n,i,l=t[0],a=t[1],c=t[2],s=0,f=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);u&&u(t);while(f.length)f.shift()();return d.push.apply(d,c||[]),o()}function o(){for(var e,t=0;t<d.length;t++){for(var o=d[t],n=!0,l=1;l<o.length;l++){var a=o[l];0!==r[a]&&(n=!1)}n&&(d.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},d=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/asdf-to-do/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=a;d.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bigDiv"},[e._m(0),o("hr"),o("md-field",[o("md-input",{staticClass:"addATodo",attrs:{placeholder:"add to-do | double click edit | drag rearrange"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo()}},model:{value:e.currentTodo,callback:function(t){e.currentTodo=t},expression:"currentTodo"}})],1),o("draggable",{staticClass:"dragContainer",on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.todos,callback:function(t){e.todos=t},expression:"todos"}},e._l(e.todos,(function(t){return o("md-card",{key:t.id,class:{todo:!0,editing:e.editedTodo===t,completed:t.completed},attrs:{"md-with-hover":""}},[o("md-card-content",[o("div",{staticClass:"regular"},[o("md-checkbox",{staticClass:"check",model:{value:t.completed,callback:function(o){e.$set(t,"completed",o)},expression:"todo.completed"}}),o("span",{staticClass:"todoListItem",on:{dblclick:function(o){return e.editTodo(t)}}},[e._v(" "+e._s(t.label)+" ")]),o("md-button",{staticClass:"remove",on:{click:function(o){return e.removeTodo(t)}}},[e._v("DELETE")])],1),o("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"todo.label"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:t.label},on:{blur:function(o){return e.cancelEdit(t)},keyup:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:e.cancelEdit(t)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.doneEdit(t)}],input:function(o){o.target.composing||e.$set(t,"label",o.target.value)}}})])],1)})),1)],1)},d=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"appName"},[o("h1",[e._v("asdf To-do")])])}],i=(o("c975"),o("a434"),o("b76a")),l=o.n(i),a={components:{draggable:l.a},data:function(){return{todos:[],currentTodo:"",completed:"",editedTodo:null,originalEditedTodoValue:""}},methods:{addTodo:function(){this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1}),this.currentTodo=""},removeTodo:function(e){var t=this.todos.indexOf(e);this.todos.splice(t,1)},editTodo:function(e){this.editedTodo=e,this.originalEditedTodoValue=e.label},doneEdit:function(e){this.editedTodo=null,e.label||this.removeTodo(e)},cancelEdit:function(e){this.editedTodo&&(this.editedTodo=null,e.label=this.originalEditedTodoValue)}}},c=a,u=(o("034f"),o("2877")),s=Object(u["a"])(c,r,d,!1,null,null,null),f=s.exports,p=o("43f9"),b=o.n(p),h=(o("51de"),o("9c30"));n["default"].use(b.a),n["default"].use(h["MdField"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.2ba7dee9.js.map