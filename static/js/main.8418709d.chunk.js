(this["webpackJsonpfood-recipes"]=this["webpackJsonpfood-recipes"]||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(6),r=c.n(i),s=(c(12),c(4)),o=c.n(s),u=c(7),l=c(2),b=c(5),j=c.n(b),p=c(0),d=function(e){var t=e.name,c=e.calories,n=e.image,a=e.ingredients;return Object(p.jsxs)("div",{className:j.a.recipe,children:[Object(p.jsx)("h2",{children:t}),Object(p.jsxs)("i",{className:j.a.calories,children:[Object(p.jsx)("b",{children:"Calories:"})," ",c]}),Object(p.jsx)("ul",{children:a.map((function(e){return Object(p.jsx)("li",{children:e.text})}))}),Object(p.jsx)("img",{src:n,alt:""})]})},f=(c(15),c(18)),O=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(l.a)(i,2),s=r[0],b=r[1],j=Object(n.useState)(""),O=Object(l.a)(j,2),h=O[0],m=O[1],x=Object(n.useState)("The world's number One Food Recipes App"),g=Object(l.a)(x,2),v=g[0],S=g[1];Object(n.useEffect)((function(){N()}),[h]);var N=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/api/recipes/v2?type=public&q=".concat(h,"&app_id=").concat("aa2b90bb","&app_key=").concat("85c65e9d285e9a1dfce74f3cfbcddf7d"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=c.hits,a(n),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:v?"App":"no-bg",children:[Object(p.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),m(s),b(""),S("")},children:[Object(p.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){b(e.target.value)},placeholder:"Enter ingredient... (e.g. bread)"}),Object(p.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(p.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(p.jsx)(d,{name:e.recipe.label,image:e.recipe.image,calories:e.recipe.calories,ingredients:e.recipe.ingredients},Object(f.a)())}))}),Object(p.jsx)("div",{className:v?"title":"no-title",children:v})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),h()},5:function(e,t,c){e.exports={recipe:"recipe_recipe__iQSBG",calories:"recipe_calories__OjF-q"}}},[[16,1,2]]]);
//# sourceMappingURL=main.8418709d.chunk.js.map