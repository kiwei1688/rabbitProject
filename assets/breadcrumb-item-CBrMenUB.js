import{b as _,A as C,d as E,c as y,_ as k,n as P,e as $,w as S,k as w}from"./base-BYK0webe.js";import{g as c,k as v,H as x,q as A,o,c as u,x as g,n,f as e,P as K,a as N,v as f,w as j,$ as q,t as D,K as T}from"./index-CMEQwe3J.js";const B=Symbol("breadcrumbKey"),z=_({separator:{type:String,default:"/"},separatorIcon:{type:C}}),H=["aria-label"],L=c({name:"ElBreadcrumb"}),M=c({...L,props:z,setup(l){const t=l,{t:p}=E(),s=y("breadcrumb"),r=v();return x(B,t),A(()=>{const a=r.value.querySelectorAll(`.${s.e("item")}`);a.length&&a[a.length-1].setAttribute("aria-current","page")}),(a,i)=>(o(),u("div",{ref_key:"breadcrumb",ref:r,class:n(e(s).b()),"aria-label":e(p)("el.breadcrumb.label"),role:"navigation"},[g(a.$slots,"default")],10,H))}});var O=k(M,[["__file","breadcrumb.vue"]]);const V=_({to:{type:P([String,Object]),default:""},replace:{type:Boolean,default:!1}}),F=c({name:"ElBreadcrumbItem"}),G=c({...F,props:V,setup(l){const t=l,p=T(),s=K(B,void 0),r=y("breadcrumb"),a=p.appContext.config.globalProperties.$router,i=v(),h=()=>{!t.to||!a||(t.replace?a.replace(t.to):a.push(t.to))};return(b,J)=>{var m,d;return o(),u("span",{class:n(e(r).e("item"))},[N("span",{ref_key:"link",ref:i,class:n([e(r).e("inner"),e(r).is("link",!!b.to)]),role:"link",onClick:h},[g(b.$slots,"default")],2),(m=e(s))!=null&&m.separatorIcon?(o(),f(e($),{key:0,class:n(e(r).e("separator"))},{default:j(()=>[(o(),f(q(e(s).separatorIcon)))]),_:1},8,["class"])):(o(),u("span",{key:1,class:n(e(r).e("separator")),role:"presentation"},D((d=e(s))==null?void 0:d.separator),3))],2)}}});var I=k(G,[["__file","breadcrumb-item.vue"]]);const U=S(O,{BreadcrumbItem:I}),W=w(I);export{U as E,W as a};
