(this["webpackJsonpstackoverflow-api"]=this["webpackJsonpstackoverflow-api"]||[]).push([[8],{531:function(e,t,a){"use strict";a.r(t),a.d(t,"HomePage",(function(){return T}));var n=a(526),c=a(0),r=a.n(c),s=a(108),o=a(109),u=Object(o.a)((function(){return a.e(6).then(a.bind(null,529))}),(function(e){return e.CustomTable})),i=Object(o.a)((function(){return Promise.all([a.e(4),a.e(5)]).then(a.bind(null,530))}),(function(e){return e.CustomModal})),b=a(229),d=a(111),j=a(217);var l=a(496),p=a.n(l),O=a(112),f=a(497),h=a.n(f),m=function(e){return h()({method:"GET",url:"https://api.stackexchange.com/2.2/questions?site=stackoverflow&filter=withBody",params:{page:e}})},g=a(527),x=p.a.mark(y),k=p.a.mark(v);function y(e){var t,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.a)(m,e.payload);case 2:if("OK"!==(t=n.sent).statusText){n.next=9;break}return a=t.data.items.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{ownerName:e.owner.display_name,key:e.question_id})})),n.next=7,Object(g.b)(D.successUpdatePageData({data:a,hasMore:t.data.has_more}));case 7:n.next=11;break;case 9:return n.next=11,Object(g.b)(D.errorUpdatePageData("ERROR"));case 11:case"end":return n.stop()}}),x)}function v(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.c)(D.requestUpdatePageData.type,y);case 2:case"end":return e.stop()}}),k)}var w,P={pageNumber:1,data:[],error:"",hasMore:!1},M=(w={name:"homepage",initialState:P,reducers:{requestUpdatePageData:function(e,t){e.pageNumber=t.payload},successUpdatePageData:function(e,t){e.data=[].concat(Object(b.a)(e.data),Object(b.a)(t.payload.data)),e.hasMore=t.payload.hasMore},errorUpdatePageData:function(e,t){e.error=t.payload}}},Object(d.b)(w)),D=M.actions,U=function(){var e;return e={key:M.name,reducer:M.reducer},Object(j.b)(e),function(e){Object(j.c)(e)}({key:M.name,saga:v}),{actions:M.actions}},q=a(64),C=a(44),R=function(e){return e.homepage||P},S=(Object(C.a)([R],(function(e){return e})),Object(C.a)(R,(function(e){return e.data}))),E=Object(C.a)(R,(function(e){return e.hasMore})),H=a(515),N=a(19);function T(){var e=Object(c.useState)(1),t=Object(n.a)(e,2),a=t[0],o=t[1],b=U().actions,d=Object(c.useState)(!1),j=Object(n.a)(d,2),l=j[0],p=j[1],O=Object(c.useState)({title:"",link:"",body:""}),f=Object(n.a)(O,2),h=f[0],m=f[1],g=Object(q.c)(),x=Object(q.d)(S),k=Object(q.d)(E);Object(c.useEffect)((function(){g(b.requestUpdatePageData(a))}),[a,b,g]);return Object(N.jsxs)(r.a.Fragment,{children:[Object(N.jsxs)(s.a,{children:[Object(N.jsx)("title",{children:"Home Page"}),Object(N.jsx)("meta",{name:"description",content:"Homepage"})]}),l&&Object(N.jsx)(i,{visible:l,data:h,handleCancel:function(){p(!1)}}),x.length>1&&Object(N.jsx)(H.a,{dataLength:x.length,next:function(){o(a+1)},hasMore:k,loader:Object(N.jsx)("h4",{children:"..."}),endMessage:Object(N.jsx)("p",{style:{textAlign:"center"},children:Object(N.jsx)("b",{children:"Yay! You have seen it all"})}),children:Object(N.jsx)(u,{data:x,handleRowClick:function(e){m(e),p(!0)}})})]})}}}]);