import{a as w,j as s}from"./index-7b14f67e.js";import{C as c}from"./Col-2647530a.js";import{G as y}from"./useLocalStorage-568e353d.js";import"./Tooltip-12849fcd.js";import{C as o}from"./Card-e88a3fc3.js";import{u as b,a as v,s as _,F as P,b as k,S as C}from"./usePlay-abd8e19d.js";import{b as B}from"./byParts-7216fc91.js";const A=()=>{var m,h;const{id:f}=w(),{error:p,toggleError:n,success:j,toggleSuccess:x,toggleFinal:i,final:g}=b(),{currentStep:a,handleClick:u,message:d,problem:e,selectedItem:t,process:N}=v({id:f,problems:B,toggleError:n,toggleSuccess:x,toggleFinal:i,key:"byParts"});return s.jsxs("div",{className:"flex flex-col items-center gap-4",children:[s.jsx(c,{md:"8",className:"mb-3 flex flex-col",children:s.jsx(o,{className:"rounded-2xl border-0 bg-secondary shadow-[1px_10px_8px_7px_#B46767]",children:s.jsxs("div",{className:"flex flex-col items-center md:flex-row md:justify-around",children:[a!==(e==null?void 0:e.steps.length)&&s.jsx("img",{src:t==null?void 0:t.image,alt:"Problema",className:"max-w-[15%]"}),s.jsxs("p",{className:"font-chilanka font-bold",children:["Resuelto: ",a,"/",e==null?void 0:e.steps.length]})]})})}),s.jsxs(c,{className:"flex flex-col items-center justify-center md:flex-row",children:[s.jsx(c,{xs:"12",md:"10",className:"px-10 md:px-16",children:s.jsxs(o,{className:`flex ${a!==(e==null?void 0:e.steps.length)?"h-[45vh]":"h-[55vh]"} flex-col rounded-2xl border-0 bg-secondary py-2 shadow-[1px_10px_8px_7px_#B46767] ${a!==(e==null?void 0:e.steps.length)?"md:h-[55vh]":"md:h-[65vh]"}`,children:[s.jsx("p",{className:"text-center font-chilanka font-bold",children:(m=e==null?void 0:e.steps[a])==null?void 0:m.instruction}),d&&s.jsx("div",{className:"flex w-full flex-row rounded-md bg-rose-500 p-2 shadow-lg",children:s.jsx("div",{className:"ml-1",children:s.jsx("p",{className:"font-bold text-white",children:d})})}),s.jsx("div",{className:"flex h-[47vh] flex-wrap items-center overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500",children:N.map((l,r)=>s.jsxs(y,{md:2,className:"gap-3",children:[s.jsxs("article",{className:"flex justify-center",children:[s.jsxs("h3",{className:"font-chilanka font-bold",children:["Paso ",r+1]}),s.jsx("img",{src:l.problem.image,className:"max-w-[30%]"})]}),s.jsxs("article",{className:"flex justify-center",children:[s.jsx("h3",{className:"font-chilanka font-bold",children:"Respuesta"}),s.jsx("img",{src:l.response.image,className:"max-w-[30%]"})]})]},r))})]})}),s.jsx(c,{xs:"12",md:"2",className:"mt-2 flex flex-row items-start justify-center gap-4 md:h-[53vh] md:flex-col",children:_(((h=e==null?void 0:e.steps[a])==null?void 0:h.options)??[]).map((l,r)=>s.jsx(o,{className:"max-w-[30%] cursor-pointer rounded-2xl border-0 bg-secondary shadow-[1px_10px_8px_7px_#B46767] hover:scale-105 md:max-w-[200px] lg:max-w-[62%]",children:s.jsx("img",{src:l.image,alt:l.image,onClick:()=>u(l)},r)},r))})]}),s.jsx(P,{open:g,setOpen:i,url:"/IntegralByParts"}),s.jsx(k,{open:p,setOpen:n}),s.jsx(C,{open:j,setOpen:x})]})};export{A as default};