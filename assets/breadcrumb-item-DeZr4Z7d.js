import{o as _,v as C,q as y,_ as v,j as E,E as P,w as S,C as $}from"./base-oIpHj4zO.js";import{i as w}from"./icon-BgyhuzM8.js";import{g as c,p as k,y as x,k as j,o,c as i,z as g,n,f as e,v as N,a as q,G as f,w as z,U as A,t as D,l as K}from"./index-CSWM6IMJ.js";const B=Symbol("breadcrumbKey"),T=_({separator:{type:String,default:"/"},separatorIcon:{type:w}}),G=["aria-label"],L=c({name:"ElBreadcrumb"}),M=c({...L,props:T,setup(l){const t=l,{t:p}=C(),s=y("breadcrumb"),r=k();return x(B,t),j(()=>{const a=r.value.querySelectorAll(`.${s.e("item")}`);a.length&&a[a.length-1].setAttribute("aria-current","page")}),(a,u)=>(o(),i("div",{ref_key:"breadcrumb",ref:r,class:n(e(s).b()),"aria-label":e(p)("el.breadcrumb.label"),role:"navigation"},[g(a.$slots,"default")],10,G))}});var O=v(M,[["__file","breadcrumb.vue"]]);const U=_({to:{type:E([String,Object]),default:""},replace:{type:Boolean,default:!1}}),V=c({name:"ElBreadcrumbItem"}),F=c({...V,props:U,setup(l){const t=l,p=K(),s=N(B,void 0),r=y("breadcrumb"),a=p.appContext.config.globalProperties.$router,u=k(),h=()=>{!t.to||!a||(t.replace?a.replace(t.to):a.push(t.to))};return(m,H)=>{var b,d;return o(),i("span",{class:n(e(r).e("item"))},[q("span",{ref_key:"link",ref:u,class:n([e(r).e("inner"),e(r).is("link",!!m.to)]),role:"link",onClick:h},[g(m.$slots,"default")],2),(b=e(s))!=null&&b.separatorIcon?(o(),f(e(P),{key:0,class:n(e(r).e("separator"))},{default:z(()=>[(o(),f(A(e(s).separatorIcon)))]),_:1},8,["class"])):(o(),i("span",{key:1,class:n(e(r).e("separator")),role:"presentation"},D((d=e(s))==null?void 0:d.separator),3))],2)}}});var I=v(F,[["__file","breadcrumb-item.vue"]]);const W=S(O,{BreadcrumbItem:I}),X=$(I);export{W as E,X as a};
