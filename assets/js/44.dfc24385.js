(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{376:function(t,i,s){},484:function(t,i,s){"use strict";var e=s(376);s.n(e).a},586:function(t,i,s){"use strict";s.r(i);s(311),s(37),s(50),s(75);var e=s(309),n=s.n(e),a={name:"grid",data:function(){return{colors:["#9fe8fa","#26baee","#73d2f3","#fff4e0","#4a9ff5","#5ff4ee","#c2fcf6"],gridTemplateColumns:[{value:"1",unit:"fr"},{value:"1",unit:"fr"},{value:"1",unit:"fr"}],gridTemplateRows:[{value:"40",unit:"px"},{value:"40",unit:"px"},{value:"40",unit:"px"}],gridcolumnGaps:1,gridrowGaps:1,justifyItem:"start",alignItems:"start",gridItem:[{index:1,gridColumnStart:1,gridColumnEnd:2,gridRowStart:1,gridRowEnd:2,backgroundColor:"#9fe8fa"}],choosenGridItem:null}},computed:{gridTemplateColumnsCss:function(){return this.gridTemplateColumns.map(function(t){return t.value?"".concat(t.value).concat(t.unit):""}).join(" ")},gridTemplateRowsCss:function(){return this.gridTemplateRows.map(function(t){return t.value?"".concat(t.value).concat(t.unit):""}).join(" ")},gridGapCss:function(){return this.gridcolumnGaps==this.gridrowGaps?"".concat(this.gridcolumnGaps,"px"):"".concat(this.gridcolumnGaps,"px ").concat(this.gridrowGaps,"px")},itemColumn:function(){return this.choosenGridItem?"".concat(this.choosenGridItem.gridColumnStart," / ").concat(this.choosenGridItem.gridColumnEnd):""},itemRow:function(){return this.choosenGridItem?"".concat(this.choosenGridItem.gridRowStart," / ").concat(this.choosenGridItem.gridRowEnd):""}},watch:{gridTemplateColumnsCss:function(t){this.updateColumnsCss()},gridTemplateRowsCss:function(t){this.updateRowsCss()},gridGapCss:function(){this.updateGaps()},itemColumn:function(){this.updateItemColumn()},itemRow:function(){this.updateItemRow()}},methods:{choosenGridItemChange:function(){this.choosenGridItem.gridColumnStart>=this.choosenGridItem.gridColumnEnd&&(this.choosenGridItem.gridColumnStart=this.choosenGridItem.gridColumnEnd-1)},addGridItem:function(){var t=this.gridItem.length>=this.colors.length?this.colors[this.gridItem.length%this.colors.length]:this.colors[this.gridItem.length];this.gridItem.push({index:this.gridItem.length+1,gridColumnStart:1,gridColumnEnd:2,gridRowStart:1,gridRowEnd:2,backgroundColor:t})},gridItemClick:function(t){this.choosenGridItem=this.gridItem[t]},addColum:function(){this.gridTemplateColumns.push(this.gridTemplateColumns[this.gridTemplateColumns.length-1])},addRow:function(){this.gridTemplateRows.push(this.gridTemplateRows[this.gridTemplateRows.length-1])},delColum:function(t){this.gridTemplateColumns.splice(t,1)},delRow:function(t){this.gridTemplateRows.splice(t,1)},setRepeat:function(t){var i=[];return t.forEach(function(t,s){0==s?i.push([t]):i[i.length-1][0]==t?i[i.length-1].push(t):i.push([t])}),i.map(function(t){return 1==t.length?t[0]:"repeat(".concat(t.length,", ").concat(t[0],")")}).join(" ")},updateColumnsCss:function(){this.$refs.gridTemplateColumns.innerHTML=n.a.highlight("grid-template-columns: ".concat(this.setRepeat(this.gridTemplateColumnsCss.split(" ")),";"),n.a.languages.css)},updateRowsCss:function(){this.$refs.gridTemplateRows.innerHTML=n.a.highlight("grid-template-rows: ".concat(this.setRepeat(this.gridTemplateRowsCss.split(" ")),";"),n.a.languages.css)},updateGaps:function(){this.$refs.gridcolumnGaps.innerHTML=n.a.highlight("grid-gap: ".concat(this.gridGapCss,";"),n.a.languages.css)},updateItemColumn:function(){var t=this;setTimeout(function(){t.$refs.itemColumn.innerHTML=n.a.highlight("grid-column: ".concat(t.itemColumn,";"),n.a.languages.css)})},updateItemRow:function(){var t=this;setTimeout(function(){t.$refs.itemRow.innerHTML=n.a.highlight("grid-row: ".concat(t.itemRow,";"),n.a.languages.css)})},updateCss:function(){this.updateColumnsCss(),this.updateRowsCss(),this.updateGaps()}},mounted:function(){this.updateCss()}},o=(s(484),s(9)),l=Object(o.a)(a,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"grid-container"},[s("section",{staticClass:"property-value"},[s("div",{staticClass:"language-css extra-class"},[s("pre",{staticClass:"language-css"},[s("code",{ref:"gridTemplateColumns"})])]),t._v(" "),s("div",{staticClass:"value-set"},[t._l(t.gridTemplateColumns,function(i,e){return s("div",{key:e,staticClass:"value-item"},[s("el-input",{attrs:{size:"mini"},model:{value:i.value,callback:function(s){t.$set(i,"value",s)},expression:"item.value"}}),t._v(" "),s("el-radio",{attrs:{label:"fr"},model:{value:i.unit,callback:function(s){t.$set(i,"unit",s)},expression:"item.unit"}}),t._v(" "),s("el-radio",{attrs:{label:"px"},model:{value:i.unit,callback:function(s){t.$set(i,"unit",s)},expression:"item.unit"}}),t._v(" "),1!=t.gridTemplateColumns.length?s("el-button",{staticClass:"btn",attrs:{plain:"",size:"mini",icon:"el-icon-minus",circle:""},on:{click:function(i){return t.delColum(e)}}}):t._e()],1)}),t._v(" "),s("el-button",{staticClass:"btn add-btn",attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-plus",circle:""},on:{click:t.addColum}})],2)]),t._v(" "),s("section",{staticClass:"property-value"},[s("div",{staticClass:"language-css extra-class"},[s("pre",{staticClass:"language-css"},[s("code",{ref:"gridTemplateRows"})])]),t._v(" "),s("div",{staticClass:"value-set"},[t._l(t.gridTemplateRows,function(i,e){return s("div",{key:e,staticClass:"value-item"},[s("el-input",{attrs:{size:"mini"},model:{value:i.value,callback:function(s){t.$set(i,"value",s)},expression:"item.value"}}),t._v(" "),s("el-radio",{attrs:{label:"fr"},model:{value:i.unit,callback:function(s){t.$set(i,"unit",s)},expression:"item.unit"}}),t._v(" "),s("el-radio",{attrs:{label:"px"},model:{value:i.unit,callback:function(s){t.$set(i,"unit",s)},expression:"item.unit"}}),t._v(" "),1!=t.gridTemplateRows.length?s("el-button",{staticClass:"btn",attrs:{plain:"",size:"mini",icon:"el-icon-minus",circle:""},on:{click:function(i){return t.delRow(e)}}}):t._e()],1)}),t._v(" "),s("el-button",{staticClass:"btn add-btn",attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-plus",circle:""},on:{click:t.addRow}})],2)]),t._v(" "),s("section",{staticClass:"property-value"},[s("div",{staticClass:"language-css extra-class"},[s("pre",{staticClass:"language-css"},[s("code",{ref:"gridcolumnGaps"})])]),t._v(" "),s("div",{staticClass:"value-set"},[s("div",{staticClass:"key-value w-50"},[s("span",{staticClass:"key"},[t._v("grid-column-gap:  ")]),t._v(" "),s("el-input-number",{attrs:{min:0,max:30,size:"mini"},model:{value:t.gridcolumnGaps,callback:function(i){t.gridcolumnGaps=i},expression:"gridcolumnGaps"}}),t._v(" "),s("span",{staticClass:"unit"},[t._v("px")])],1),t._v(" "),s("div",{staticClass:"key-value w-50"},[s("span",{staticClass:"key"},[t._v("grid-row-gap:  ")]),t._v(" "),s("el-input-number",{attrs:{min:0,max:30,size:"mini"},model:{value:t.gridrowGaps,callback:function(i){t.gridrowGaps=i},expression:"gridrowGaps"}}),t._v(" "),s("span",{staticClass:"unit"},[t._v("px")])],1)])]),t._v(" "),s("div",{staticClass:"btn-container"},[s("span",{staticClass:"tip"},[t._v(t._s(t.__("点击 grid-item 以改变其属性")))]),t._v(" "),s("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:t.addGridItem}},[t._v(t._s(t.__("增加"))+" grid-item")])],1),t._v(" "),s("div",{staticClass:"grid-wrapper",style:{gridTemplateColumns:t.gridTemplateColumnsCss,gridTemplateRows:t.gridTemplateRowsCss,gridGap:t.gridGapCss}},t._l(t.gridItem,function(i,e){return s("div",{key:e,staticClass:"grid-item",class:"grid-item"+e,style:{gridColumnStart:i.gridColumnStart,gridColumnEnd:i.gridColumnEnd,gridRowStart:i.gridRowStart,gridRowEnd:i.gridRowEnd,backgroundColor:i.backgroundColor},on:{click:function(i){return t.gridItemClick(e)}}},[t._v("\n      grid-item-"+t._s(i.index)+"\n    ")])}),0),t._v(" "),t.choosenGridItem?s("section",{staticClass:"property-value"},[s("h4",[t._v("grid-item-"+t._s(t.choosenGridItem.index))]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{staticClass:"language-css"},[s("code",{ref:"itemColumn"})])]),t._v(" "),s("div",{staticClass:"value-set"},[s("div",{staticClass:"key-value w-50"},[s("span",{staticClass:"key"},[t._v("grid-column-start:  ")]),t._v(" "),s("el-input-number",{attrs:{min:1,max:t.choosenGridItem.gridColumnEnd-1,size:"mini"},model:{value:t.choosenGridItem.gridColumnStart,callback:function(i){t.$set(t.choosenGridItem,"gridColumnStart",i)},expression:"choosenGridItem.gridColumnStart"}})],1),t._v(" "),s("div",{staticClass:"key-value w-50"},[s("span",{staticClass:"key"},[t._v("grid-column-end:  ")]),t._v(" "),s("el-input-number",{attrs:{min:t.choosenGridItem.gridColumnStart+1,max:t.gridTemplateColumns.length+1,size:"mini"},model:{value:t.choosenGridItem.gridColumnEnd,callback:function(i){t.$set(t.choosenGridItem,"gridColumnEnd",i)},expression:"choosenGridItem.gridColumnEnd"}})],1)]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{staticClass:"language-css"},[s("code",{ref:"itemRow"})])]),t._v(" "),s("div",{staticClass:"value-set"},[s("div",{staticClass:"key-value w-50 "},[s("span",{staticClass:"key"},[t._v("grid-row-start:  ")]),t._v(" "),s("el-input-number",{attrs:{min:1,max:t.choosenGridItem.gridRowEnd-1,size:"mini"},model:{value:t.choosenGridItem.gridRowStart,callback:function(i){t.$set(t.choosenGridItem,"gridRowStart",i)},expression:"choosenGridItem.gridRowStart"}})],1),t._v(" "),s("div",{staticClass:"key-value w-50"},[s("span",{staticClass:"key"},[t._v("grid-row-end:  ")]),t._v(" "),s("el-input-number",{attrs:{min:t.choosenGridItem.gridRowStart+1,max:t.gridTemplateRows.length+1,size:"mini"},model:{value:t.choosenGridItem.gridRowEnd,callback:function(i){t.$set(t.choosenGridItem,"gridRowEnd",i)},expression:"choosenGridItem.gridRowEnd"}})],1)])]):t._e()])},[],!1,null,null,null);i.default=l.exports}}]);