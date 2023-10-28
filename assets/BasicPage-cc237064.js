import{a as w,j as s}from"./index-4acac225.js";import{b}from"./basic-29f73f9d.js";import{C as r}from"./Col-7345bab2.js";import{G as v}from"./useLocalStorage-bf616e7b.js";import"./Tooltip-c082bfb9.js";import{C as n}from"./Card-193ce199.js";import{u as _,a as y,s as k,F as C,b as P,S as B}from"./usePlay-e1867f2d.js";const A=()=>{var d,h;const{id:f}=w(),{error:p,toggleError:o,success:j,toggleSuccess:x,toggleFinal:i,final:g}=_(),{currentStep:a,handleClick:u,message:m,problem:e,selectedItem:t,process:N}=y({id:f,problems:b,toggleError:o,toggleSuccess:x,toggleFinal:i,key:"basic"});return s.jsxs("div",{className:"flex flex-col items-center gap-4",children:[s.jsx(r,{md:"8",className:"mb-3 flex flex-col",children:s.jsx(n,{className:"rounded-2xl border-0 bg-container shadow-[1px_10px_8px_7px_#B46767]",children:s.jsxs("div",{className:"flex flex-col items-center md:flex-row md:justify-around",children:[a!==(e==null?void 0:e.steps.length)&&s.jsx("img",{src:t==null?void 0:t.image,alt:"Problema",className:"max-w-[15%]"}),s.jsxs("p",{className:"font-chilanka font-bold",children:["Resuelto: ",a,"/",e==null?void 0:e.steps.length]})]})})}),s.jsxs(r,{className:"flex flex-col items-center justify-center md:flex-row",children:[s.jsx(r,{xs:"12",md:"10",className:"px-10 md:px-16",children:s.jsxs(n,{className:`flex ${a!==(e==null?void 0:e.steps.length)?"h-[45vh]":"h-[55vh]"} flex-col rounded-2xl border-0 bg-container py-2 shadow-[1px_10px_8px_7px_#B46767] ${a!==(e==null?void 0:e.steps.length)?"md:h-[55vh]":"md:h-[65vh]"}`,children:[s.jsx("p",{className:"text-center font-chilanka font-bold",children:(d=e==null?void 0:e.steps[a])==null?void 0:d.instruction}),m&&s.jsx("div",{className:"flex w-full flex-row rounded-md bg-rose-500 p-2 shadow-lg",children:s.jsx("div",{className:"ml-1",children:s.jsx("p",{className:"font-bold text-white",children:m})})}),s.jsx("div",{className:"flex h-[47vh] flex-wrap items-center overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500",children:N.map((l,c)=>s.jsxs(v,{md:2,className:"gap-3",children:[s.jsxs("article",{className:"flex justify-center",children:[s.jsxs("h3",{className:"font-chilanka font-bold",children:["Paso ",c+1]}),s.jsx("img",{src:l.problem.image,className:"max-w-[30%]"})]}),s.jsxs("article",{className:"flex justify-center",children:[s.jsx("h3",{className:"font-chilanka font-bold",children:"Respuesta"}),s.jsx("img",{src:l.response.image,className:"max-w-[30%]"})]})]},c))})]})}),s.jsx(r,{xs:"12",md:"2",className:"mt-2 flex flex-row items-start justify-center gap-4 md:h-[53vh] md:flex-col",children:k(((h=e==null?void 0:e.steps[a])==null?void 0:h.options)??[]).map((l,c)=>s.jsx(n,{className:"max-w-[30%] cursor-pointer rounded-2xl border-0 bg-container shadow-[1px_10px_8px_7px_#B46767] hover:scale-105 md:max-w-[200px] lg:max-w-[62%]",children:s.jsx("img",{src:l.image,alt:l.image,onClick:()=>u(l)},c)},c))})]}),s.jsx(C,{open:g,setOpen:i,url:"/BasicIntegrals"}),s.jsx(P,{open:p,setOpen:o}),s.jsx(B,{open:j,setOpen:x})]})};export{A as default};