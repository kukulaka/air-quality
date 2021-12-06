(this["webpackJsonpair-quality"]=this["webpackJsonpair-quality"]||[]).push([[0],{138:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(26),o=n.n(a),i=n(18),s=n(13),l=n.n(s),u=n(19),d=n(12),j=n(36),h=n(3),p=function(e){var t=e.children;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(j.Flex,{direction:"column",position:"relative",minHeight:"100vh",bgGradient:"linear(to-r,  #6a0dad, #0da2ff)",align:"center",justifyContent:"center",overflow:"auto",children:Object(h.jsx)(j.Box,{with:"100%",padding:"20px",children:t})})})},f=n(30),x=n(58),b=n.n(x).a.create({baseURL:"https://docs.openaq.org/v2"}),m=function(e,t,n){return b.request({method:e,url:t,params:n})},g=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/cities?limit=100&page=1&offset=0&sort=asc&country_id=GB&order_by=city",e.next=3,m("GET","/cities?limit=100&page=1&offset=0&sort=asc&country_id=GB&order_by=city",{}).then((function(e){return e.data})).catch((function(e){if(e)return{error:!0,errorMsg:e.message,meta:null,results:null}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.Text,{textStyle:"h1",children:"Compare your Air"}),Object(h.jsx)(j.Text,{paddingTop:"40px",id:"header",paddingBottom:"5px",children:"Compare the air quality between cities in the UK."}),Object(h.jsx)(j.Text,{children:"Select cities to compare using the search tool below."})]})},v=n(59),y=n(42),w=n(38),S=function(e){var t=e.label,n=e.placeholder,r=e.itemsList,a=e.handleSelectedItemsChange,o=e.selectedItems,s=c.a.useState(r),l=Object(d.a)(s,2),u=l[0];l[1];return Object(h.jsx)(j.Flex,{width:"100%",alignItems:"center",justifyContent:"center",color:"#000000",children:Object(h.jsx)(v.CUIAutoComplete,{label:t,placeholder:n,items:u,disableCreateItem:!0,selectedItems:o,onSelectedItemsChange:function(e){return a(e.selectedItems)},hideToggleButton:!0,renderCustomInput:function(e){return Object(h.jsx)(j.Box,{width:"100%",children:Object(h.jsxs)(w.InputGroup,{rounded:"md",color:"#000000",children:[Object(h.jsx)(w.InputLeftElement,{pointerEvents:"none",children:Object(h.jsx)(y.SearchIcon,{color:"gray.300"})}),Object(h.jsx)(w.Input,Object(i.a)(Object(i.a)({},e),{},{width:"100%",borderColor:"gray.300"}))]})})},listStyleProps:{overflow:"auto",rounded:"md"}})})},F=n(67),B=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("cities",t),n="/latest?limit=100&page=1&offset=0&sort=asc&radius=10&country_id=GB".concat(t,"&order_by=lastUpdated&dumpRaw=false"),e.next=4,m("GET",n,{}).then((function(e){return e.data})).catch((function(e){if(e)return{error:!0,errorMsg:e.message,meta:null,results:null}}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=n(57),I=function(e){e.status;var t=e.description;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(C.a,{status:"error",children:[Object(h.jsx)(C.b,{}),t]})})},T=n(5),E=n(62),k=n.n(E),U=function(e){var t=e.lastUpdated,n=new Date(t),r=k()(n).fromNow();return Object(h.jsxs)(j.Text,{textTransform:"uppercase",fontWeight:"bold",fontSize:["14px","14px"],paddingBottom:"3px",children:["Updated ",r]})},L=function(e){var t=e.measurements;return Object(h.jsx)(h.Fragment,{children:t&&t.length>0&&Object(h.jsxs)(j.Text,{fontWeight:"bold",paddingBottom:"3px",children:["Values: ",function(){var e="";return t&&t.length>0?(t.map((function(t,n,r){e="".concat(e," ").concat(t.parameter.toUpperCase(),": ").concat(t.value).concat(n!=r.length-1?",":"")})),e):""}()]})})},z=n(66),G=function(e){var t=e.location,n=e.handleRemoveLocation;return Object(h.jsxs)(j.Box,{width:"100%",rounded:"md",backgroundColor:"#ffffff",padding:"10px",alignItems:"left",textAlign:"left",children:[Object(h.jsx)(j.Box,{width:"100%",alignItems:"right",textAlign:"right",fontSize:"30px",fontWeight:"bold",children:Object(h.jsx)(T.a,{as:z.a,cursor:"pointer",onClick:function(){return n(t.location)}})}),Object(h.jsxs)(j.Box,{with:"100%",paddingLeft:"15px",paddingRight:"15px",paddingTop:"5px",paddingBottom:"15px",children:[Object(h.jsx)(U,{lastUpdated:t.measurements[0].lastUpdated}),Object(h.jsx)(j.Text,{fontSize:["18px","25px"],color:"#6a0dad",fontWeight:"bold",paddingBottom:"5px",children:t.location}),Object(h.jsxs)(j.Text,{fontSize:["14px","18px"],color:"#000000",paddingBottom:"3px",children:["in ",t.city,", United Kingdom"]}),Object(h.jsx)(L,{measurements:t.measurements})]})]},"".concat(t.location,"_box"))},_=function(e){var t=e.selectedItems,n=c.a.useState(null),r=Object(d.a)(n,2),a=r[0],o=r[1],s=c.a.useState(!1),p=Object(d.a)(s,2),x=p[0],b=p[1],m=c.a.useState(!1),g=Object(d.a)(m,2),O=g[0],v=g[1],y=function(e){if(console.log("got here"),a&&a.results){var t=Object(F.a)(a.results).filter((function(t){return t.location!==e}));o(Object(i.a)(Object(i.a)({},a),{},{results:t}))}};return c.a.useEffect((function(){if(t&&t.length>0){var e=function(){var e="";return t.map((function(t){e="".concat(e,"city=").concat(t.city,"&")})),"".concat("&").concat(e)},n=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e());case 2:n=t.sent,o(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();v(!0),n(),v(!1)}}),[t]),c.a.useEffect((function(){a&&(a.error?b(!0):b(!1))}),[a]),Object(h.jsx)(j.Box,{width:"100%",children:O?Object(h.jsx)(f.a,{}):Object(h.jsx)(h.Fragment,{children:x?Object(h.jsx)(I,{status:"error",description:"There was an error retrieving location data"}):Object(h.jsx)(j.Grid,{templateColumns:["1fr","repeat(2, 1fr)"],gap:6,paddingTop:"20px",width:"100%",children:a&&a.results&&a.results.length>0&&Object(h.jsx)(h.Fragment,{children:a.results.map((function(e){return Object(h.jsx)(G,{location:e,handleRemoveLocation:y})}))})})})})},q=function(e){var t=e.label,n=e.placeholder,r=e.itemsList,a=c.a.useState([]),o=Object(d.a)(a,2),i=o[0],s=o[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(S,{label:t,placeholder:n,itemsList:r,handleSelectedItemsChange:function(e){e&&(s(e),console.log(e,"selected items"))},selectedItems:i}),Object(h.jsx)(_,{selectedItems:i})]})},A=function(e){var t=c.a.useState(null),n=Object(d.a)(t,2),r=n[0],a=n[1],o=c.a.useState(!1),s=Object(d.a)(o,2),x=s[0],b=s[1],m=c.a.useState(!1),v=Object(d.a)(m,2),y=v[0],w=v[1],S=c.a.useState(null),F=Object(d.a)(S,2),B=F[0],C=F[1];return c.a.useEffect((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r||(w(!0),e(),w(!1))}),[]),c.a.useEffect((function(){if(r){if(r.results){var e=[];r.results.map((function(t){var n=Object(i.a)(Object(i.a)({},t),{},{label:t.city,value:t.city});e.push(n)})),C({cities:e})}r.error&&b(!0)}}),[r]),Object(h.jsx)(p,{children:Object(h.jsxs)(j.Box,{width:"100%",height:"100%",textAlign:"center",children:[Object(h.jsx)(O,{}),Object(h.jsx)(j.Box,{paddingTop:"30px",paddingBottom:"30px",color:"#000000",fontSize:"16px",width:"100%",children:y?Object(h.jsx)(f.a,{}):Object(h.jsx)(h.Fragment,{children:x?Object(h.jsx)(I,{status:"error",description:"There was an error retrieving cities data"}):Object(h.jsx)(h.Fragment,{children:B&&B.cities.length>0&&Object(h.jsx)(q,{label:"",placeholder:"Enter city name...",itemsList:B.cities})})})})]})})},W=function(e){return Object(h.jsx)(A,{})};var M=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(W,{})})},R=n(11),D=Object(R.b)({styles:{global:function(){return{"html, body":{overflowX:"hidden",fontSize:["18px","25px"],scrollBehavior:"smooth",color:"#FFFFFF"}}}},textStyles:{h1:{fontSize:["30px","40px"],lineHeight:"100%",fontWeight:"bold"},h2:{fontSize:["36px","48px"],fontWeight:"semibold",lineHeight:"110%",letterSpacing:"-1%"}},fonts:{heading:"Open Sans",body:"Open Sans"},colors:{primary:"#FFFFFF"},space:{},config:{cssVarPrefix:"air-quality",initialColorMode:"light",useSystemColorMode:!1}}),H=(n(137),n(63)),J=n(64),K=n(68),P=n(65),V=function(e){Object(K.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1},e}return Object(J.a)(n,[{key:"componentDidCatch",value:function(e,t){console.error("Uncaught error:",e,t)}},{key:"render",value:function(){return this.state.hasError?Object(h.jsx)("h1",{children:"Sorry.. there was an error that was weird!"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(R.a,{theme:D,children:Object(h.jsx)(V,{children:Object(h.jsx)(M,{})})})}),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.9c7160f2.chunk.js.map