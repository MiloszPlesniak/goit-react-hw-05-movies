"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[31],{31:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(861),a=t(439),i=t(757),u=t.n(i),s=t(335),c=t(791),o=t(87),v=t(689),p=t(184),f=function(e){var r=e.backHref;return(0,p.jsx)(o.rU,{to:r,children:"Go back"})},d=function(){var e,r,t=(0,c.useState)({}),i=(0,a.Z)(t,2),d=i[0],h=i[1],l=(0,v.UO)().id,g=null!==(e=null===(r=(0,v.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r,t,n,a,i,c,o,v;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Y5)(l);case 2:r=e.sent,t=r.original_title,n=r.release_date,a=r.overview,i=r.genres,c=r.vote_average,o=i.map((function(e){return e.name})).toString(),v={vote_average:c?(10*c).toFixed(0)+"%":"Brak ocen",original_title:t,release_date:n.slice(0,4),overview:a,genresString:o},h(v);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var x=d.original_title,_=d.release_date,w=d.overview,m=d.genresString,k=d.vote_average;return(0,p.jsxs)("div",{children:[(0,p.jsx)(f,{backHref:g}),(0,p.jsxs)("h2",{children:[x," (",_,")"]}),(0,p.jsxs)("p",{children:["User Score: ",k]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:w}),(0,p.jsx)("h4",{children:"Genres"}),(0,p.jsx)("p",{children:m}),(0,p.jsx)(o.rU,{to:"Cast",children:"Cast "}),(0,p.jsx)(o.rU,{to:"Reviews",children:"Reviews"}),(0,p.jsx)(v.j3,{})]})}},335:function(e,r,t){t.d(r,{Cg:function(){return c},QC:function(){return p},Y5:function(){return o},mv:function(){return v}});var n=t(861),a=t(757),i=t.n(a),u=t(263),s="d9966d378d1934b9425ef6ee448d16ed",c=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key="+s);case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/"+r+"?api_key="+s);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key="+s+"&query="+r);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(r,t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/"+r+"/"+t+"?api_key="+s);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=31.23302a84.chunk.js.map