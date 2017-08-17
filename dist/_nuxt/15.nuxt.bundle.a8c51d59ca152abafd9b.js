webpackJsonp([15],{156:function(e,t,n){"use strict";function s(e){n(199)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(201),l=n(202),a=n(17),r=s,c=a(i.a,l.a,r,null,null);t.default=c.exports},199:function(e,t,n){var s=n(200);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(28)("0c76b2eb",s,!0)},200:function(e,t,n){t=e.exports=n(27)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue",sourceRoot:""}])},201:function(e,t,n){"use strict";t.a={data:function(){return{units:["in","ft","yd"],selected:{},checkedRows:[],rectangles:[],rectangle:{name:"",x:{size:0,unit:"ft"},y:{size:0,unit:"ft"},z:{size:0,unit:"in"},volume:0}}},computed:{totalVolume:function(){return this.rectangle.x.size*this.rectangle.y.size*this.rectangle.z.size}},methods:{resetRect:function(){this.rectangle={name:"",x:{size:0,unit:"ft"},y:{size:0,unit:"ft"},z:{size:0,unit:"in"},volume:0}},addRect:function(){this.rectangle.volume=this.calcVolume(this.rectangle),this.rectangles.push(this.rectangle),this.resetRect()},convertToInches:function(e){var t={size:0,unit:""};switch(e.unit){case"in":t.size=1*e.size;break;case"ft":t.size=12*e.size;break;case"yd":t.size=36*e.size}return t.unit="in",console.log(t,"newMeasure"),t},convertCubicInchesToCubicYards:function(e){return e/46656},calcVolume:function(e){var t=this.convertToInches(e.x).size,n=this.convertToInches(e.y).size,s=this.convertToInches(e.z).size,i=t*n*s;return this.convertCubicInchesToCubicYards(i)}}}},202:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Calculator")]),n("b-field",{attrs:{label:"Region Name",message:"Descriptive name of region"}},[n("b-input",{attrs:{placeholder:"East flowerbed"},model:{value:e.rectangle.name,callback:function(t){e.rectangle.name=t},expression:"rectangle.name"}})],1),n("b-field",{attrs:{label:"Length",message:"Length of the region"}},[n("b-field",[n("b-input",{model:{value:e.rectangle.x.size,callback:function(t){e.rectangle.x.size=t},expression:"rectangle.x.size"}}),n("b-select",{model:{value:e.rectangle.x.unit,callback:function(t){e.rectangle.x.unit=t},expression:"rectangle.x.unit"}},e._l(e.units,function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],1)],1),n("b-field",{attrs:{label:"Width",message:"Width of the region"}},[n("b-field",[n("b-input",{model:{value:e.rectangle.y.size,callback:function(t){e.rectangle.y.size=t},expression:"rectangle.y.size"}}),n("b-select",{model:{value:e.rectangle.y.unit,callback:function(t){e.rectangle.y.unit=t},expression:"rectangle.y.unit"}},e._l(e.units,function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],1)],1),n("b-field",{attrs:{label:"Depth",message:"Required depth of the region"}},[n("b-field",[n("b-input",{model:{value:e.rectangle.z.size,callback:function(t){e.rectangle.z.size=t},expression:"rectangle.z.size"}}),n("b-select",{model:{value:e.rectangle.z.unit,callback:function(t){e.rectangle.z.unit=t},expression:"rectangle.z.unit"}},e._l(e.units,function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],1)],1),n("button",{staticClass:"button is-primary",on:{click:e.addRect}},[e._v("Add Region")]),n("b-table",{attrs:{data:e.rectangles,bordered:!0,striped:!0,narrowed:!1,checkable:!0,loading:!1,"mobile-cards":!0,selected:e.selected,"checked-rows":e.checkedRows},on:{"update:selected":function(t){e.selected=t},"update:checkedRows":function(t){e.checkedRows=t}},scopedSlots:e._u([{key:"default",fn:function(t){return[n("b-table-column",{attrs:{field:"name",label:"Region Name",sortable:""}},[e._v("\r\n            "+e._s(t.row.name)+"\r\n        ")]),n("b-table-column",{attrs:{field:"x.size",label:"Length",sortable:""}},[e._v("\r\n            "+e._s(t.row.x.size)+" "+e._s(t.row.x.unit)+"\r\n        ")]),n("b-table-column",{attrs:{field:"y.size",label:"Width",sortable:""}},[e._v("\r\n            "+e._s(t.row.y.size)+" "+e._s(t.row.y.unit)+"\r\n        ")]),n("b-table-column",{attrs:{field:"z.size",label:"Depth",sortable:""}},[e._v("\r\n            "+e._s(t.row.z.size)+" "+e._s(t.row.z.unit)+"\r\n        ")]),n("b-table-column",{attrs:{field:"volume",label:"Volume",sortable:""}},[e._v("\r\n            "+e._s(t.row.volume)+" yd"),n("sup",[e._v("3")])])]}}])},[n("div",{staticClass:"has-text-centered",slot:"empty"},[e._v("\r\n        This table is empty!\r\n    ")])]),n("b-field",{attrs:{label:"Volume"}},[n("b-field",[n("b-input",{attrs:{readonly:""},model:{value:e.totalVolume,callback:function(t){e.totalVolume=t},expression:"totalVolume"}})],1)],1)],1)},i=[],l={render:s,staticRenderFns:i};t.a=l}});
//# sourceMappingURL=15.nuxt.bundle.a8c51d59ca152abafd9b.js.map