(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{313:function(e,o,t){},393:function(e,o,t){"use strict";var i=t(313);t.n(i).a},496:function(e,o,t){"use strict";t.r(o);var i={name:"",data:function(){return{isLoaded:!0,model:{blackCat:"https://qishaoxuan.github.io/live2DModel/live2d-widget-model-hijiki/assets/hijiki.model.json",whiteCat:"https://qishaoxuan.github.io/live2DModel/live2d-widget-model-tororo/assets/tororo.model.json"}}},mounted:function(){var e=this;if(!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return this.isLoaded=!1,console.log("mobile do not load model");var o=document.querySelector("body"),t=document.createElement("script");t.src="https://qishaoxuan.github.io/live2DModel/L2Dwidget.min.js",o.appendChild(t),t.onload=function(){e.isLoaded=!1,L2Dwidget.init({model:{jsonPath:Math.random()>.5?e.model.blackCat:e.model.whiteCat},display:{superSample:2,width:80/1424*document.body.clientWidth,height:80/1424*document.body.clientWidth/.8,position:"right",hOffset:0,vOffset:-20},mobile:{show:!0,scale:1,motion:!0},react:{opacityDefault:.9,opacityOnHover:.2}}),console.clear(),console.log("找猫? 在这里 https://github.com/xiazeyu/live2d-widget.js"),console.log("感谢作者 ~")}}},a=(t(393),t(1)),n=Object(a.a)(i,function(){var e=this.$createElement;return(this._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoaded,expression:"isLoaded"}],staticClass:"cat-container"},[this._v("一只猫正在赶来 ~")])},[],!1,null,"1552d404",null);n.options.__file="cat.vue";o.default=n.exports}}]);