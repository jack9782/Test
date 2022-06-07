"use strict";(self["webpackChunkvue_test2"]=self["webpackChunkvue_test2"]||[]).push([[759],{7302:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h4",[t._v(t._s(t.route)+" "+t._s(t.origin)+" 往 "+t._s(t.destination))]),i("div",{staticClass:"stop-list"},[i("table",{staticClass:"table text-left"},[t._m(0),i("tbody",t._l(t.current_route_stop_list,(function(e){return i("tr",{key:e.id,on:{click:function(s){return t.stop_click(e.seq,this)}}},[i("td",{staticClass:"td-seq"},[e.star?t._e():i("img",{attrs:{src:s(6101),width:"25px"},on:{click:function(s){return t.star_click(e.seq)}}}),e.star?i("img",{attrs:{src:s(8767),width:"25px"},on:{click:function(s){return t.star_click(e.seq)}}}):t._e(),i("span",[t._v(" "+t._s(e.seq))])]),i("td",[i("div",{class:[e.seq==t.stop_seq_clicked?"font-weight-bold":""]},[t._v(t._s(e.name_tc))]),t.stop_seq_clicked==e.seq?i("div",[e.eta_1||e.eta_2||e.eta_3||!t.eta_loaded?t._e():i("div",[t._v(" 暫時沒有預定班次 ")]),e.eta_1?i("div",[i("span",{staticClass:"eta-time-diff"},[t._v(t._s(e.eta_1.time_diff))]),i("span",{staticClass:"eta-time-diff-desc"},[t._v(" 分鐘")]),i("span",{staticClass:"eta-time"},[t._v(" ("+t._s(e.eta_1.time)+")")]),e.eta_1.rmk_tc?i("span",{staticClass:"eta-rmk"},[t._v(" ("+t._s(e.eta_1.rmk_tc)+")")]):t._e()]):t._e(),e.eta_2?i("div",[i("span",{staticClass:"eta-time-diff"},[t._v(t._s(e.eta_2.time_diff))]),i("span",{staticClass:"eta-time-diff-desc"},[t._v(" 分鐘")]),i("span",{staticClass:"eta-time"},[t._v(" ("+t._s(e.eta_2.time)+")")]),e.eta_2.rmk_tc?i("span",{staticClass:"eta-rmk"},[t._v(" ("+t._s(e.eta_2.rmk_tc)+")")]):t._e()]):t._e(),e.eta_3?i("div",[i("span",{staticClass:"eta-time-diff"},[t._v(t._s(e.eta_3.time_diff))]),i("span",{staticClass:"eta-time-diff-desc"},[t._v(" 分鐘")]),i("span",{staticClass:"eta-time"},[t._v(" ("+t._s(e.eta_3.time)+")")]),e.eta_3.rmk_tc?i("span",{staticClass:"eta-rmk"},[t._v(" ("+t._s(e.eta_3.rmk_tc)+")")]):t._e()]):t._e()]):t._e()])])})),0)])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("站數")]),s("th",[t._v("巴士站")])])])}],a=s(8638),_={name:"KMB_ETA",data(){return{route:this.$route.params.route,bound:this.$route.params.bound,service_type:this.$route.params.service_type,origin:"",destination:"",stop_list:[],route_list:[],route_stop_list:[],current_route_stop_list:[],stop_seq_clicked:0,eta_loaded:!1}},computed:{star_image_src:function(){return this.current_route_stop_list.map((function(t){return t.star,"../assets/star.png"}))}},mounted(){let t=this;(async()=>{await a.Zt(),this.route_list=JSON.parse(localStorage.getItem("KMBRouteList"));let t=this.route_list.find((t=>t.route==this.route&&t.bound==this.bound&&t.service_type==this.service_type));t?(this.origin=t.orig_tc,this.destination=t.dest_tc):location.href="/KMB"})(),(async()=>{await a.vw(),t.loadStop()})(),setInterval((()=>{this.eta_loaded&&this.stop_click(this.stop_seq_clicked)}),1e4)},methods:{loadStop:function(){let t=JSON.parse(localStorage.getItem("KMBRouteStopList")),e=JSON.parse(localStorage.getItem("KMBStopList")),s=t.filter((t=>t.route==this.route&&t.bound==this.bound&&t.service_type==this.service_type));this.current_route_stop_list=s.map((t=>{let s=e.find((e=>e.stop==t.stop));return s.stop&&(t.name_tc=s.name_tc),t}));let i=JSON.parse(localStorage.getItem("KMBRouteStopStar"));i&&(this.current_route_stop_list=this.current_route_stop_list.map((t=>{let e=i.find((e=>e.route==t.route&&e.bound==t.bound&&e.service_type==t.service_type&&e.seq==t.seq));return t.star=!!e,t})))},stop_click:function(t){this.stop_seq_clicked=t,(async()=>{let e=await a.I0(this.route,this.service_type);e=e.data;let s=e.find((e=>e.route==this.route&&e.dir==this.bound&&e.service_type==this.service_type&&e.seq==t&&1==e.eta_seq)),i=e.find((e=>e.route==this.route&&e.dir==this.bound&&e.service_type==this.service_type&&e.seq==t&&2==e.eta_seq)),r=e.find((e=>e.route==this.route&&e.dir==this.bound&&e.service_type==this.service_type&&e.seq==t&&3==e.eta_seq));this.eta_loaded=!0,this.current_route_stop_list=this.current_route_stop_list.map((t=>(s.eta&&(t.eta_1=s,t.eta_1.time=a.mr(s.eta),t.eta_1.time_diff=a.pm(s.eta)),i.eta&&(t.eta_2=i,t.eta_2.time=a.mr(i.eta),t.eta_2.time_diff=a.pm(i.eta)),r.eta&&(t.eta_3=r,t.eta_3.time=a.mr(r.eta),t.eta_3.time_diff=a.pm(r.eta)),t))),this.eta_loaded=!0})()},star_click:function(t){let e=this,s={route:e.route,bound:e.bound,service_type:e.service_type,seq:t},i=localStorage.getItem("KMBRouteStopStar");i=JSON.parse(i),i||(i=[]);let r=-1;for(let a=0;a<i.length;a++)if(i[a].route==s.route&&i[a].bound==s.bound&&i[a].service_type==s.service_type&&i[a].seq==s.seq){r=a;break}if(r>-1){i.splice(r,1);for(let t=0;t<this.current_route_stop_list.length;t++){let e=this.current_route_stop_list[t];if(e.route==s.route&&e.bound==s.bound&&e.service_type==s.service_type&&e.seq==s.seq){this.current_route_stop_list[t].star=!1;break}}}else{i.push(s);for(let t=0;t<this.current_route_stop_list.length;t++){let e=this.current_route_stop_list[t];if(e.route==s.route&&e.bound==s.bound&&e.service_type==s.service_type&&e.seq==s.seq){this.current_route_stop_list[t].star=!0;break}}}localStorage.setItem("KMBRouteStopStar",JSON.stringify(i))}}},o=_,c=s(1001),n=(0,c.Z)(o,i,r,!1,null,"a7ee8746",null),u=n.exports},6101:function(t,e,s){t.exports=s.p+"img/star.5f894ed9.png"},8767:function(t,e,s){t.exports=s.p+"img/starred.5d1433f5.png"}}]);
//# sourceMappingURL=759.1d0e23f8.js.map