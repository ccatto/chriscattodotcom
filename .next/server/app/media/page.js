(()=>{var e={};e.id=990,e.ids=[990],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4059:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=s(5847),n=s(3878),o=s(1889),a=s.n(o),i=s(7866),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let c=["",{children:["media",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,486)),"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/media/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,6555)),"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,712,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/media/page.tsx"],u="/media/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/media/page",pathname:"/media",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5151:(e,t,s)=>{Promise.resolve().then(s.bind(s,8360))},8360:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(2444),n=s(8358),o=s(8131);let a=({data:e})=>{let[t,s]=(0,o.useState)(0),[a,i]=(0,o.useState)({width:0,height:0}),l=(0,o.useRef)(null),c=e.length;return console.log("totalSlides === ",c),console.log("currentImg number === ",t),(0,o.useEffect)(()=>{let{width:e,height:t}=l.current.getBoundingClientRect();l.current&&i({width:e,height:t})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{id:"indicators-carousel",className:"relative w-full overflow-hidden",children:[r.jsx("h1",{children:"Carousel Container"}),r.jsx("div",{ref:l,style:{left:-t*a.width},className:"relative h-56 overflow-hidden rounded-lg md:h-96",children:e.map((e,t)=>r.jsx("div",{className:"duration-700 ease-in-out",children:r.jsx(n.default,{className:"block w-full",alt:`carousel-image-${t}`,fill:!0,src:e.image||"/hero-desktop.png"})},t))})]}),(0,r.jsxs)("div",{className:"flex justify-center mt-3",children:[r.jsx("button",{onClick:e=>{console.log("inside PREVIOUS CLICK"),0===t?(console.log("inside AT beginning"),s(c-1)):(console.log("not at end yet"),s(t-1)),e.preventDefault()},className:`border px-4 py-2 font-bold ${0===t&&"opacity-50"}`,children:"<"}),r.jsx("button",{onClick:e=>{t+1===c?(console.log("inside AT END"),s(0)):(console.log("not at end yet"),s(t+1)),e.preventDefault()},className:`border px-4 py-2 font-bold ${t===e.length-1&&"opacity-50"}`,children:">"})]})]})}},486:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(6685);let n=(0,s(6107).createProxy)(String.raw`/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto3/CarouselCatto3.tsx`),{__esModule:o,$$typeof:a}=n,i=n.default,l=[{image:"/images/Chris-Catto-Sunrise.jpg"},{image:"/hero-mobile.png"},{image:"/Catto.png"}];function c(){return(0,r.jsxs)(r.Fragment,{children:[r.jsx("h1",{children:"Media Page"}),r.jsx(i,{data:l}),r.jsx("hr",{className:"m-4"}),r.jsx("h2",{children:"testing"})]})}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[868,49],()=>s(4059));module.exports=r})();