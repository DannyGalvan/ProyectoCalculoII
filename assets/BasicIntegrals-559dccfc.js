import{j as s,L as i}from"./index-5772bd20.js";import{T as o,s as c,i as n}from"./estrella-605b95f6.js";import{G as x,u as m}from"./useLocalStorage-2c576c64.js";import"./Tooltip-0827bc25.js";import{C as p}from"./Card-755701f4.js";import{b as d}from"./basic-1609c034.js";import"./Col-dd96b946.js";const _=()=>{const{get:t}=m("basic"),l=t();return s.jsxs("section",{className:"mx-4 flex flex-col items-center",children:[s.jsx(o,{}),s.jsx(x,{sm:1,md:2,lg:3,className:"w-full gap-16 p-10 md:px-20",children:d.map((e,a)=>s.jsx(i,{to:`/BasicIntegrals/Play/${a+1}`,children:s.jsxs(p,{className:"relative h-[18rem] border-0 bg-container shadow-[1px_10px_8px_7px_#B46767]",children:[s.jsx("h1",{className:"text-center font-chilanka text-2xl",children:e.problemTitle}),s.jsxs("h1",{className:"text-center font-chilanka text-2xl",children:["Tiene ",e.steps.length," niveles"]}),l.some(r=>r===e.id)&&s.jsxs("div",{className:"absolute left-4 top-4 flex flex-col items-center ",children:[s.jsx("img",{src:c,className:"shadow-star",width:65})," "]}),s.jsx("div",{className:"absolute right-4 top-4 rounded-full bg-secondary p-2 shadow-[5px_5px_2px_0px_#B46767]",children:s.jsx("img",{src:n,alt:"Bienvenidos",className:"w-[50px]"})})]})},a))})]})};export{_ as default};