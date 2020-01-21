(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{310:function(t,i,s){t.exports=s.p+"assets/img/bg1.29bb8eb5.jpg"},342:function(t,i,s){},448:function(t,i,s){"use strict";var e=s(342);s.n(e).a},565:function(t,i,s){"use strict";s.r(i);var e={name:"filterTemp",data:function(){return{blur:0,contrast:100,grayscale:0,hue_rotate:0,sepia:0,saturate:100,brightness:100,invert:0,opacity:100}}},a=(s(448),s(9)),n=Object(a.a)(e,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("main",[e("div",{staticClass:"container"},[e("section",[e("figure",[e("figcaption",[e("p",[t._v("blur(px)")]),t._v(" "),e("p",{staticClass:"note"},[t._v(t._s(t.__("给图像设置高斯模糊。“radius”一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。")))])]),t._v(" "),e("img",{style:{filter:"blur("+t.blur+"px)"},attrs:{src:s(310)}})]),t._v(" "),e("footer",[e("el-slider",{attrs:{min:0,max:40,"input-size":"mini","show-input":""},model:{value:t.blur,callback:function(i){t.blur=i},expression:"blur"}})],1)]),t._v(" "),e("section",[e("figure",[e("figcaption",[e("p",[t._v("contrast(%)")]),t._v(" "),e("p",{staticClass:"note"},[t._v(t._s(t.__("调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。")))])]),t._v(" "),e("img",{style:{filter:"contrast("+t.contrast+"%)"},attrs:{src:s(310)}})]),t._v(" "),e("footer",[e("el-slider",{attrs:{min:0,max:500,"input-size":"mini","show-input":""},model:{value:t.contrast,callback:function(i){t.contrast=i},expression:"contrast"}})],1)]),t._v(" "),e("section",[e("figure",[e("figcaption",[e("p",[t._v("grayscale(%)")]),t._v(" "),e("p",{staticClass:"note"},[t._v(t._s(t.__("将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0。")))])]),t._v(" "),e("img",{style:{filter:"grayscale("+t.grayscale+"%)"},attrs:{src:s(310)}})]),t._v(" "),e("footer",[e("el-slider",{attrs:{min:0,max:100,"input-size":"mini","show-input":""},model:{value:t.grayscale,callback:function(i){t.grayscale=i},expression:"grayscale"}})],1)]),t._v(" "),e("section",[e("figure",[e("figcaption",[e("p",[t._v("hue-rotate(deg)")]),t._v(" "),e("p",{staticClass:"note"},[t._v(t._s(t.__("给图像应用色相旋转。“angle”一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。")))])]),t._v(" "),e("img",{style:{filter:"hue-rotate("+t.hue_rotate+"deg)"},attrs:{src:s(310)}})]),t._v(" "),e("footer",[e("el-slider",{attrs:{min:0,max:100,"input-size":"mini","show-input":""},model:{value:t.hue_rotate,callback:function(i){t.hue_rotate=i},expression:"hue_rotate"}})],1)]),t._v(" "),e("section",[e("figure",[e("figcaption",[e("p",[t._v("sepia(%)")]),t._v(" "),e("p",{staticClass:"note"},[t._v(t._s(t.__("将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0")))])]),t._v(" "),e("img",{style:{filter:"sepia("+t.sepia+"%)"},attrs:{src:s(310)}})]),t._v(" "),e("footer",[e("el-slider",{attrs:{min:0,max:100,"input-size":"mini","show-input":""},model:{value:t.sepia,callback:function(i){t.sepia=i},expression:"sepia"}})],1)]),t._v(" "),e("section",[e("figure",[e("figcaption",[e("p",[t._v("saturate(%)")]),t._v(" "),e("p",{staticClass:"note"},[t._v(t._s(t.__("转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是1。")))])]),t._v(" "),e("img",{style:{filter:"saturate("+t.saturate+"%)"},attrs:{src:s(310)}})]),t._v(" "),e("footer",[e("el-slider",{attrs:{min:0,max:200,"input-size":"mini","show-input":""},model:{value:t.saturate,callback:function(i){t.saturate=i},expression:"saturate"}})],1)]),t._v(" "),e("section",[e("figure",[e("figcaption",[e("p",[t._v("brightness(%)")]),t._v(" "),e("p",{staticClass:"note"},[t._v(t._s(t.__("给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。")))])]),t._v(" "),e("img",{style:{filter:"brightness("+t.brightness+"%)"},attrs:{src:s(310)}})]),t._v(" "),e("footer",[e("el-slider",{attrs:{min:0,max:400,"input-size":"mini","show-input":""},model:{value:t.brightness,callback:function(i){t.brightness=i},expression:"brightness"}})],1)]),t._v(" "),e("section",[e("figure",[e("figcaption",[e("p",[t._v("invert(%)")]),t._v(" "),e("p",{staticClass:"note"},[t._v(t._s(t.__("反转输入图像。值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。")))])]),t._v(" "),e("img",{style:{filter:"invert("+t.invert+"%)"},attrs:{src:s(310)}})]),t._v(" "),e("footer",[e("el-slider",{attrs:{min:0,max:100,"input-size":"mini","show-input":""},model:{value:t.invert,callback:function(i){t.invert=i},expression:"invert"}})],1)]),t._v(" "),e("section",[e("figure",[e("figcaption",[e("p",[t._v("opacity(%)")]),t._v(" "),e("p",{staticClass:"note"},[t._v(t._s(t.__("转化图像的透明程度。值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是1。")))])]),t._v(" "),e("img",{style:{filter:"opacity("+t.opacity+"%)"},attrs:{src:s(310)}})]),t._v(" "),e("footer",[e("el-slider",{attrs:{min:0,max:100,"input-size":"mini","show-input":""},model:{value:t.opacity,callback:function(i){t.opacity=i},expression:"opacity"}})],1)]),t._v(" "),e("section",[e("figure",[e("figcaption",[e("p",[t._v("drop-shadow")]),t._v(" "),e("p",{staticClass:"note"},[t._v("\n            "+t._s(t.__("给图像设置一个阴影效果。"))),e("br"),t._v("\n            "+t._s(t.__("效果见"))+" "),e("a",{attrs:{href:"/css_tricks/shadow/#不规则图形投影"}},[t._v(t._s(t.__("不规则图形投影")))])])]),t._v(" "),e("img",{staticStyle:{visibility:"hidden"},attrs:{src:s(310)}})]),t._v(" "),e("footer",{staticStyle:{visibility:"hidden"}},[e("el-slider",{attrs:{min:0,max:100,"input-size":"mini","show-input":""}})],1)])])])},[],!1,null,"df8bca06",null);i.default=n.exports}}]);