import{aM as R,aL as $,bm as x,s as _,aO as h,au as M,bn as m,r as S,aP as A,aQ as L,aC as U,q as P,aR as X}from"./index-CUb6G_Bt.js";function T(t){return String(parseFloat(t)).length===String(t).length}function k(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function i(t){return parseFloat(t)}function W(t){return(a,e)=>{const n=k(a);if(n===e)return a;let s=i(a);n!=="px"&&(n==="em"||n==="rem")&&(s=i(a)*i(t));let r=s;if(e!=="px")if(e==="em")r=s/i(t);else if(e==="rem")r=s/i(t);else return a;return parseFloat(r.toFixed(5))+e}}function q({size:t,grid:a}){const e=t-t%a,n=e+a;return t-e<n-t?e:n}function G({lineHeight:t,pixels:a,htmlFontSize:e}){return a/(t*e)}function Q({cssProperty:t,min:a,max:e,unit:n="rem",breakpoints:s=[600,900,1200],transform:r=null}){const o={[t]:`${a}${n}`},u=(e-a)/s[s.length-1];return s.forEach(c=>{let l=a+u*c;r!==null&&(l=r(l)),o[`@media (min-width:${c}px)`]={[t]:`${Math.round(l*1e4)/1e4}${n}`}}),o}function j(t){return $("MuiSkeleton",t)}const V=R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]),B=["animation","className","component","height","style","variant","width"];let d=t=>t,g,v,C,b;const E=t=>{const{classes:a,variant:e,animation:n,hasChildren:s,width:r,height:o}=t;return X({root:["root",e,n,s&&"withChildren",s&&!r&&"fitContent",s&&!o&&"heightAuto"]},j,a)},N=x(g||(g=d`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),F=x(v||(v=d`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),K=_("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=k(t.shape.borderRadius)||"px",n=i(t.shape.borderRadius);return h({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:M(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${e}/${Math.round(n/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&m(C||(C=d`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),N),({ownerState:t,theme:a})=>t.animation==="wave"&&m(b||(b=d`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),F,(a.vars||a).palette.action.hover)),D=S.forwardRef(function(a,e){const n=A({props:a,name:"MuiSkeleton"}),{animation:s="pulse",className:r,component:o="span",height:u,style:c,variant:l="text",width:w}=n,p=L(n,B),f=h({},n,{animation:s,component:o,variant:l,hasChildren:!!p.children}),y=E(f);return U.jsx(K,h({as:o,ref:e,className:P(y.root,r),ownerState:f},p,{style:h({width:w,height:u},c)}))});export{D as S,q as a,j as b,W as c,G as f,k as g,T as i,Q as r,V as s,i as t};
