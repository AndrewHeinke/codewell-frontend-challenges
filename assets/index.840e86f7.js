import{d as e,c as t,a as l,w as o,F as s,r as n,b as a,o as r,t as i,e as c,f as d,g as u,h as g,i as p}from"./vendor.3cc7c404.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const o=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,n)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return l(self[t].moduleMap[a]);const r=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){n(new Error(`Failed to import: ${e}`)),s(i)},onload(){l(self[t].moduleMap[a]),s(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/codewell-frontend-challenges/assets/");const m=[{bgColor:"#eeeeee",shadowLight:"#ffffff",shadowDark:"#cacaca",textColor:"#6b7280",linkColor:"#6d28d9"},{bgColor:"#4A90E2",shadowLight:"#55a6ff",shadowDark:"#3f7ac0",textColor:"#FFFFFF",linkColor:"#F1BBDF"},{bgColor:"#7ed321",shadowLight:"#91F326",shadowDark:"#6BB31C",textColor:"#171738",linkColor:"#3423A6"},{bgColor:"#9013fe",shadowLight:"#a616ff",shadowDark:"#7A10D8",textColor:"#BCF8EC",linkColor:"#F9CFF2"},{bgColor:"#f5a623",shadowLight:"#FFBF28",shadowDark:"#D08D1E",textColor:"#1D2F6F",linkColor:"#2E4BB2"},{bgColor:"#3a3842",shadowLight:"#43404c",shadowDark:"#313038",textColor:"#D8E8F6",linkColor:"#44CF6C"}],h=e({data:()=>({showMenu:!1,links:[{text:"Challenge 1",to:"/Challenge1"},{text:"Challenge 2",to:"/Challenge2"},{text:"Challenge 3",to:"/Challenge3"}]}),mounted(){const e=window.localStorage,t=document.documentElement;function l(){let l=e.getItem("colorIndex"),o=m[l],s=document.querySelector(".select-wrapper");document.getElementById("theme-select").value=l,"0"===l?s.classList.add("light-theme"):s.classList.remove("light-theme"),t.style.setProperty("--bg-color",o.bgColor),t.style.setProperty("--text-color",o.textColor),t.style.setProperty("--shadow-light",o.shadowLight),t.style.setProperty("--shadow-dark",o.shadowDark),t.style.setProperty("--link-color",o.linkColor)}function o(){e.setItem("colorIndex",document.getElementById("theme-select").value),l()}document.getElementById("theme-select").addEventListener("change",(function(){o()})),e.getItem("colorIndex")?l():o()}}),f={class:"main-nav"},x={class:"container"},w={class:"flex items-center h-16"},v={class:"flex items-center w-full"},b={class:"flex-shrink-0"},y=l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 242.41 323.21"},[l("path",{d:"M161.6 80.8v80.8H80.8V80.8H0v242.41h80.8v-80.8h80.8v80.8h80.81V80.8H161.6zM80.8 0h80.8v80.8H80.8z"})],-1),k={class:"hidden md:block py-8 pr-4"},C={class:"ml-4 flex items-baseline"},L=l("div",{class:"select-wrapper"},[l("div",{class:"select-prepend"},[l("svg",{"aria-hidden":"true",class:"w-4 h-4",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[l("path",{fill:"currentColor",d:"M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"})])]),l("label",{class:"sr-only",for:"theme-select"},"Set Theme"),l("select",{name:"theme",id:"theme-select"},[l("option",{value:"0"},"Light"),l("option",{value:"1"},"Blue"),l("option",{value:"2"},"Green"),l("option",{value:"3"},"Purple"),l("option",{value:"4"},"Orange"),l("option",{value:"5"},"Dark")]),l("div",{class:"select-append"},[l("svg",{"aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:"w-4 h-4"},[l("path",{fill:"currentColor",d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"})])])],-1),M={class:"flex md:hidden"},j=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1),F=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),B={class:"py-3"};h.render=function(e,c,d,u,g,p){const m=a("router-link"),h=a("router-view");return r(),t(s,null,[l("nav",f,[l("div",x,[l("div",w,[l("div",v,[l("div",b,[l(m,{class:"main-nav-logo",to:"/"},{default:o((()=>[y])),_:1})]),l("div",k,[l("div",C,[(r(!0),t(s,null,n(e.links,((e,s)=>(r(),t(m,{key:s,to:e.to,custom:""},{default:o((({navigate:t,href:o,isExactActive:n})=>[l("a",{href:o,onClick:t,class:["\n                                        px-3\n                                        py-2\n                                        rounded-md\n                                        text-base\n                                        font-medium\n                                        whitespace-nowrap\n                                    ",[n?"nav-link nav-link--active":"nav-link",s>0&&"ml-4"]]},i(e.text),11,["href","onClick"])])),_:2},1032,["to"])))),128))])]),L]),l("div",M,[l("button",{class:"mobile-menu-btn",onClick:c[1]||(c[1]=t=>e.showMenu=!e.showMenu)},[(r(),t("svg",{class:e.showMenu?"hidden h-6 w-6":"block h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[j],2)),(r(),t("svg",{class:e.showMenu?"block h-6 w-6":"hidden h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[F],2))])])])]),l("div",{class:["container md:hidden",e.showMenu?"block":"hidden"]},[l("div",B,[(r(!0),t(s,null,n(e.links,((s,n)=>(r(),t(m,{key:n,to:s.to,custom:""},{default:o((({navigate:t,href:o,isExactActive:a})=>[l("a",{href:o,onClick:l=>t().then((()=>e.showMenu=!1)),class:["block px-3 py-2 rounded-md text-base font-medium",[a?"mobile-nav-link mobile-nav-link--active":"mobile-nav-link",n>0&&"mt-1"]]},i(s.text),11,["href","onClick"])])),_:2},1032,["to"])))),128))])],2)]),l(h)],64)};const S={},_={class:"homepage"},E={class:"container py-6"},A=l("div",{class:"homepage-title-section rounded-xl p-8 text-center mb-16"},[l("h1",{class:"homepage-title-heading"},"Front End Challenges")],-1),D={class:"card-container rounded-xl p-8"},P=c('<div class="clock"><div class="hand hours"></div><div class="hand minutes"></div><div class="hand seconds"></div><div class="point"></div><div class="marker"><span class="marker__1"></span><span class="marker__2"></span><span class="marker__3"></span><span class="marker__4"></span></div></div>',1),G={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},z={class:"relative w-full rounded-lg p-4 group homepage-card"},H=d("Spense Landing Page"),R=l("p",{class:"homepage-card-text"}," Spence is a landing page for writers. Great for practicing absolute positioning and flex layouts. ",-1),I={class:"relative w-full rounded-lg p-4 group homepage-card"},T=d("Fiber Landing Page"),O=l("p",{class:"homepage-card-text"}," An online portfolio generator. Great to practice flex/grid layouts, absolute positioning and sliders. ",-1),U={class:"relative w-full rounded-lg p-4 group homepage-card"},V=d(" Gradie Sign Up Page "),q=l("p",{class:"homepage-card-text"}," Gradie is a simple sign up page, great to practice centering layouts and absolute positioning. ",-1),$={class:"relative w-full rounded-lg p-4 group homepage-card"},W=d("Spense Landing Page"),Y=l("p",{class:"homepage-card-text"}," Spence is a landing page for writers. Great for practicing absolute positioning and flex layouts. ",-1),J={class:"relative w-full rounded-lg p-4 group homepage-card"},N=d("Fiber Landing Page"),Q=l("p",{class:"homepage-card-text"}," An online portfolio generator. Great to practice flex/grid layouts, absolute positioning and sliders. ",-1),K={class:"relative w-full rounded-lg p-4 group homepage-card"},X=d(" Gradie Sign Up Page "),Z=l("p",{class:"homepage-card-text"}," Gradie is a simple sign up page, great to practice centering layouts and absolute positioning. ",-1),ee=l("footer",{class:"homepage-footer"},[l("div",{class:"container"},[l("div",{class:"flex justify-center pt-8"},[l("a",{class:"morph-btn",href:"https://github.com/AndrewHeinke/codewell-frontend-challenges",target:"_blank",rel:"noopener noreferrer"},[l("svg",{viewBox:"0 0 16 16","aria-hidden":"true"},[l("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})])]),l("a",{class:"morph-btn",href:"https://www.linkedin.com/in/andrewheinke/",target:"_blank",rel:"noopener noreferrer"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 34 34"},[l("path",{d:"M34 2.5v29a2.5 2.5 0 01-2.5 2.5h-29A2.5 2.5 0 010 31.5v-29A2.5 2.5 0 012.5 0h29A2.5 2.5 0 0134 2.5zM10 13H5v16h5zm.45-5.5a2.88 2.88 0 00-2.86-2.9H7.5a2.9 2.9 0 000 5.8 2.88 2.88 0 002.95-2.81zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.7 5.7 0 00-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 013-3.58h.19c1.59 0 2.77 1 2.77 3.52V29h5z"})])]),l("a",{class:"morph-btn",href:"https://www.instagram.com/andrewheinke/",target:"_blank",rel:"noopener noreferrer"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.063 169.063"},[l("path",{d:"M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z"}),l("path",{d:"M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 00-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z"})])])])])],-1);S.render=function(e,n){const i=a("router-link");return r(),t(s,null,[l("main",_,[l("div",E,[A,l("div",D,[P,l("div",G,[l("div",z,[l(i,{to:"/Challenge1",class:"homepage-card-link"},{default:o((()=>[H])),_:1}),R]),l("div",I,[l(i,{to:"/Challenge2",class:"homepage-card-link"},{default:o((()=>[T])),_:1}),O]),l("div",U,[l(i,{to:"/Challenge3",class:"homepage-card-link"},{default:o((()=>[V])),_:1}),q]),l("div",$,[l(i,{to:"/Challenge1",class:"homepage-card-link"},{default:o((()=>[W])),_:1}),Y]),l("div",J,[l(i,{to:"/Challenge2",class:"homepage-card-link"},{default:o((()=>[N])),_:1}),Q]),l("div",K,[l(i,{to:"/Challenge3",class:"homepage-card-link"},{default:o((()=>[X])),_:1}),Z])])])])]),ee],64)};var te="/codewell-frontend-challenges/img/spense/facebook-logo.png",le="/codewell-frontend-challenges/img/spense/dribbble-logo.png",oe="/codewell-frontend-challenges/img/spense/youtube-logo.png",se="/codewell-frontend-challenges/img/spense/pinterest-logo.png",ne="/codewell-frontend-challenges/img/spense/twitter-logo.png",ae="/codewell-frontend-challenges/img/spense/reddit-logo.png",re="/codewell-frontend-challenges/img/spense/google-logo.png",ie="/codewell-frontend-challenges/img/spense/slack-logo.png";const ce=e({data:()=>({showMenu:!1,links:[{text:"Business"},{text:"Pricing"},{text:"Features"}]})}),de=l("div",{class:"text-center bg-black text-white p-4"},[l("p",{class:"mx-auto max-w-xl font-medium"},[d(" 🎉 To celebreate Spense's launch, we will be waiving all fees for the entire month of April. "),l("span",{class:"underline"},"You will be receiving 100% of the earnings."),d(" 🎉 ")])],-1),ue={class:"py-2 md:py-6 bg-gray-100"},ge={class:"container"},pe={class:"flex items-center justify-between h-16"},me={class:"flex items-center justify-between w-full"},he=l("a",{class:"text-gray-700 text-2xl font-bold focus:bg-gray-100 focus:text-gray-700 mr-auto lg:mr-0",href:"javascript:;"}," spense. ",-1),fe={class:"hidden md:block"},xe={class:"ml-4 flex items-baseline"},we=l("div",{class:"hidden md:block"},[l("a",{href:"javascript:;",class:"px-2 lg:px-3 py-2 rounded-md text-md lg:text-lg whitespace-nowrap text-gray-700 focus:outline-none focus:bg-gray-100 ml-2 lg:ml-4"},"Login"),l("button",{type:"button",class:"rounded-md px-4 py-4 bg-gray-900 text-md lg:text-lg font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ml-2 lg:ml-4"}," Get Started ")],-1),ve={class:"-mr-2 flex md:hidden"},be=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1),ye=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),ke={class:"container"},Ce={class:"pt-2 pb-3"},Le=l("div",null,[l("a",{href:"javascript:;",class:"block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100 mt-1"},"Login"),l("button",{type:"button",class:"rounded-md px-2 py-2 bg-gray-900 text-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 my-4 w-full"}," Get Started ")],-1),Me=l("div",{class:"bg-gray-100 pb-8"},[l("div",{class:"container"},[l("div",{class:"flex flex-wrap -mx-4"},[l("div",{class:"w-full lg:w-1/2 xl:w-3/5 px-4 order-2 lg:order-1"},[l("h1",{class:"text-4xl font-bold md:text-5xl xl:text-6xl mb-4 max-w-2xl"}," Share your unfiltered thoughts. Get paid. "),l("p",{class:"text-lg max-w-2xl"},[d(" Spense is an open platform for individuals to share their unfiltered thoughts. Discuss the topic you love, and get paid for doing "),l("em",null,"just"),d(" that. ")]),l("ul",{class:"spense-hero-list text-lg my-6"},[l("li",null,"Receive 99% off the earnings."),l("li",null,"Get paid via Debit Card, ACH, or Paypal."),l("li",null,"Withdraw your earnings anytime.")]),l("form",{action:"#",method:"POST",onsubmit:"return false;",autocomplete:"off"},[l("div",{class:"flex max-w-lg"},[l("label",{for:"email-input",class:"sr-only"},"Email"),l("input",{name:"email-input",id:"email-input",type:"email",required:"",placeholder:"john@example.com",class:"block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 appearance-none text-lg"}),l("button",{type:"submit",class:"rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-lg font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex-shrink-0 ml-4"}," Get Started ")])])]),l("div",{class:"w-full lg:w-1/2 xl:w-2/5 px-4 order-1 lg:order-2 mb-8 lg:mb-0"},[l("div",{class:"spense-hero rounded-xl w-full relative"},[l("div",{class:"bg-white rounded-lg p-4 absolute left-8 top-8"},[l("p",{class:"border-color-gray-300 border-b pb-3 mb-3 text-lg"}," April Earnings "),l("p",{class:"font-bold text-lg"},"$272.21"),l("button",{type:"button",class:"rounded-md px-2 py-2 bg-gray-900 text-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 mt-4 w-full"}," Withdraw ")])])])])])],-1),je=l("div",{class:"overflow-x-hidden py-12 bg-white"},[l("div",{class:"relative translate-x-1/2"},[l("div",{class:"spense-logos"},[l("img",{src:te,alt:"Facebook Logo"}),l("img",{src:le,alt:"Dribbble Logo"}),l("img",{src:oe,alt:"Youtube Logo"}),l("img",{src:se,alt:"Pinterest Logo"}),l("img",{src:ne,alt:"Twitter Logo"}),l("img",{src:ae,alt:"Reddit Logo"}),l("img",{src:re,alt:"Google Logo"}),l("img",{src:ie,alt:"Slack Logo"}),l("img",{src:te,alt:"Facebook Logo"}),l("img",{src:le,alt:"Dribbble Logo"}),l("img",{src:oe,alt:"Youtube Logo"}),l("img",{src:se,alt:"Pinterest Logo"}),l("img",{src:ne,alt:"Twitter Logo"}),l("img",{src:ae,alt:"Reddit Logo"}),l("img",{src:re,alt:"Google Logo"}),l("img",{src:ie,alt:"Slack Logo"})])])],-1),Fe=l("div",{class:"container"},[l("div",{class:"bg-gray-100 rounded-xl relative p-4 md:p-8 lg:p-12 xl:p-20 pb-0 md:pb-0"},[l("div",{class:"max-w-2xl xl:py-8"},[l("h2",{class:"text-3xl md:text-4xl xl:text-5xl mb-4 max-w-lg font-bold"}," Secure your money with Escrow. "),l("p",{class:"text-lg max-w-lg mb-8"}," Spense uses Escrow to secure all payments. We believe Escrow offers the highest level of security for your payments, so you never need to worry about scames. "),l("a",{class:"text-gray-700 inline-flex items-center font-semibold tracking-wide underline cursor-pointer",href:"javascript:;"}," Learn more about Escrow → ")]),l("div",{class:"spense-phone-callout-img"})])],-1),Be=l("div",{class:"container py-16"},[l("div",{class:"flex flex-wrap -mx-4"},[l("div",{class:"w-full lg:w-1/2 px-4 order-2 lg:order-1"},[l("img",{src:"/codewell-frontend-challenges/img/spense/text-editor.png",alt:""})]),l("div",{class:"w-full lg:w-1/2 px-4 order-1 lg:order-2 flex items-center"},[l("div",{class:"max-w-2xl xl:py-8 mb-8 lg:mb-0"},[l("h2",{class:"text-3xl md:text-4xl xl:text-5xl mb-4 font-bold"}," A text editor like no other. "),l("p",{class:"text-lg max-w-lg mb-8"}," Our text editor pulls you into focus mode with it's simplistic design and usability so you can put out your best writings. "),l("a",{class:"text-gray-700 inline-flex items-center font-semibold tracking-wide underline cursor-pointer",href:"javascript:;"}," Text Editor Live Demo → ")])])])],-1),Se=l("footer",{class:"bg-black"},[l("div",{class:"container text-white"},[l("div",{class:"flex flex-wrap -mx-4 py-8 md:py-16"},[l("div",{class:"w-full xl:w-1/2 px-4"},[l("p",{class:"font-bold text-lg mb-4"},"spense."),l("p",{class:"text-white text-opacity-80 text-lg max-w-lg"},[d(" Spense is an open platform for individuals to share their unfiltered thoughts. Discuss the topics you love, and get paid for doing "),l("em",null,"just"),d(" that. ")])]),l("div",{class:"w-full xl:w-1/2 px-4 mt-16 xl:mt-0"},[l("div",{class:"flex flex-wrap -mx-4"},[l("div",{class:"w-1/2 lg:w-1/4 px-4"},[l("h3",{class:"font-bold text-lg md:text-xl mb-4"},"Sitemap"),l("ul",null,[l("li",null,[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Homepage")])])]),l("div",{class:"w-1/2 lg:w-1/4 px-4"},[l("h3",{class:"font-bold text-lg md:text-xl mb-4"},"Resources"),l("ul",null,[l("li",{class:"mb-4"},[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Support")]),l("li",{class:"mb-4"},[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Contact")]),l("li",null,[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"FAQ")])])]),l("div",{class:"w-1/2 lg:w-1/4 px-4 mt-8 lg:mt-0"},[l("h3",{class:"font-bold text-lg md:text-xl mb-4"},"Company"),l("ul",null,[l("li",{class:"mb-4"},[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"About")]),l("li",{class:"mb-4"},[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Customer")]),l("li",null,[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Blog")])])]),l("div",{class:"w-1/2 lg:w-1/4 px-4"},[l("h3",{class:"font-bold text-lg md:text-xl mb-4 mt-8 lg:mt-0"}," Opportunities "),l("ul",null,[l("li",{class:"mb-4"},[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Jobs")]),l("li",{class:"mb-4"},[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Customer")]),l("li",null,[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Blog")])])])])])])])],-1);ce.render=function(e,o,a,c,d,u){return r(),t("main",null,[de,l("nav",ue,[l("div",ge,[l("div",pe,[l("div",me,[he,l("div",fe,[l("div",xe,[(r(!0),t(s,null,n(e.links,((e,l)=>(r(),t("a",{key:l,href:"javascript:;",class:"px-2 lg:px-3 py-2 rounded-md text-md lg:text-lg whitespace-nowrap text-gray-700 focus:outline-none focus:bg-gray-100 ml-2 lg:ml-4"},i(e.text),1)))),128))])]),we]),l("div",ve,[l("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100",onClick:o[1]||(o[1]=t=>e.showMenu=!e.showMenu)},[(r(),t("svg",{class:e.showMenu?"hidden h-6 w-6":"block h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[be],2)),(r(),t("svg",{class:e.showMenu?"block h-6 w-6":"hidden h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[ye],2))])])])]),l("div",{class:["md:hidden border-gray-300 border-b",e.showMenu?"block":"hidden"]},[l("div",ke,[l("div",Ce,[(r(!0),t(s,null,n(e.links,((e,l)=>(r(),t("a",{key:l,href:"javascript:;",class:"block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100 mt-1"},i(e.text),1)))),128)),Le])])],2)]),Me,je,Fe,Be,Se])};const _e={},Ee=l("div",null,"challenge 2 page",-1);_e.render=function(e,l){return r(),t("main",null,[Ee])};const Ae={},De={class:"h-full"},Pe=l("div",{class:"gradie-desktop-bg h-full flex lg:items-center lg:p-4"},[l("div",{class:"gradie block lg:flex w-full lg:max-w-6xl mx-auto"},[l("section",{class:"\n                        flex-1\n                        bg-gray-900\n                        text-center\n                        gradie-bg\n                        lg:h-auto\n                        px-4\n                        lg:px-0\n                        py-12\n                        lg:rounded-l-xl\n                    "},[l("h1",{class:"text-white font-bold text-5xl mb-4"},"Gradie"),l("p",{class:"text-white text-lg lg:text-xl text-blue-200"}," Beautiful gradients in seconds. ")]),l("section",{class:"\n                        flex-1\n                        py-12\n                        bg-white\n                        lg:rounded-r-xl\n                        lg:border-gray-200 lg:border lg:border-l-0\n                    "},[l("div",{class:"mx-auto max-w-lg px-4"},[l("h2",{class:"text-gray-900 font-bold text-5xl mb-8"},"Login"),l("form",{action:"#",method:"POST",onsubmit:"return false;",autocomplete:"off"},[l("div",{class:"mb-4"},[l("label",{for:"email-input",class:"block text-md font-medium text-gray-700"}," Email "),l("input",{name:"email-input",id:"email-input",type:"email",required:"",placeholder:"john@example.com",class:"\n                                        mt-1\n                                        block\n                                        w-full\n                                        py-2\n                                        px-3\n                                        border border-gray-300\n                                        bg-white\n                                        rounded-md\n                                        shadow-sm\n                                        focus:outline-none\n                                        focus:ring-2 focus:ring-offset-2 focus:ring-gray-900\n                                        appearance-none\n                                    "})]),l("div",{class:"mb-4"},[l("label",{for:"password-input",class:"block text-md font-medium text-gray-700"}," Password "),l("input",{name:"password-input",id:"password-input",type:"password",required:"",minlength:"8",placeholder:"At least 8 characters",class:"\n                                        mt-1\n                                        block\n                                        w-full\n                                        py-2\n                                        px-3\n                                        border border-gray-300\n                                        bg-white\n                                        rounded-md\n                                        shadow-sm\n                                        focus:outline-none\n                                        focus:ring-2 focus:ring-offset-2 focus:ring-gray-900\n                                        appearance-none\n                                    "})]),l("div",{class:"mb-4"},[l("label",{class:"inline-flex items-start mt-3"},[l("input",{type:"checkbox",class:"\n                                            form-checkbox\n                                            h-5\n                                            w-5\n                                            text-gray-900\n                                            focus:ring-gray-900\n                                            cursor-pointer\n                                            rounded\n                                            relative\n                                            top-1\n                                        ",required:""}),l("span",{class:"ml-2 text-gray-700 cursor-pointer"},"By creating an account, you agree to the Terms & Conditions.")])]),l("div",{class:"\n                                    flex flex-col-reverse\n                                    mt-4\n                                    sm:block\n                                    col-span-full\n                                    sm:place-self-end\n                                "},[l("button",{type:"submit",class:"\n                                        rounded-md\n                                        border border-transparent\n                                        shadow-sm\n                                        px-4\n                                        py-4\n                                        bg-gray-900\n                                        text-xl\n                                        font-medium\n                                        text-white\n                                        hover:bg-gray-700\n                                        focus:outline-none\n                                        focus:ring-2 focus:ring-offset-2 focus:ring-gray-900\n                                        w-full\n                                    "}," Create an Account ")])])])])])],-1);Ae.render=function(e,l){return r(),t("main",De,[Pe])};const Ge={},ze={class:"px-4 py-6 sm:px-0 mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},He=l("div",{class:"sm:text-center lg:text-left"},[l("h2",{class:"text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"}," Not found "),l("p",{class:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"}," The page you requested doesn't seem to exist... ")],-1);Ge.render=function(e,l){return r(),t("div",ze,[He])};let Re=[{path:"/",component:S},{path:"/Challenge1",component:ce},{path:"/Challenge2",component:_e},{path:"/Challenge3",component:Ae},{path:"/:path(.*)",component:Ge}],Ie=u(h),Te=g({history:p("/codewell-frontend-challenges/"),routes:Re});Ie.use(Te),Ie.mount("#app");
