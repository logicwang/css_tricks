(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{397:function(t,n,a){},505:function(t,n,a){"use strict";var e=a(397);a.n(e).a},549:function(t,n,a){"use strict";a.r(n);var e={name:"polygonLayout",data:function(){return{num:3,maxNum:10}},computed:{position:function(){return this.setPolyGonLayout(this.num,160,{width:60,height:60})}},methods:{setPolyGonLayout:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{width:0,height:0};if(!(t<3)){for(var e=t%2==1?0:2*Math.PI/t/2,l=[],o=0;o<t;o++){var i=2*o*Math.PI/t+e;l.push({top:-n*Math.cos(i)-a.height/2,left:-n*Math.sin(i)-a.width/2})}return l}}}},l=(a(505),a(9)),o=Object(l.a)(e,function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"polygonLayout-container"},[a("div",{staticClass:"circle"}),t._v(" "),a("div",{staticClass:"polygonLayout"},t._l(t.position,function(n,e){return a("div",{key:e,staticClass:"polygonLayout-item",style:{left:n.left+"px",top:n.top+"px"}},[t._v("\n        item-"+t._s(e+1)+"\n      ")])}),0)]),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("选择边数:")]),t._v(" "),a("el-radio",{attrs:{label:3},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),t._v(" "),a("el-radio",{attrs:{label:4},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),t._v(" "),a("el-radio",{attrs:{label:5},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),t._v(" "),a("el-radio",{attrs:{label:6},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),t._v(" "),a("el-radio",{attrs:{label:7},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),t._v(" "),a("el-radio",{attrs:{label:8},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1)])},[],!1,null,"7e8c9aea",null);n.default=o.exports}}]);