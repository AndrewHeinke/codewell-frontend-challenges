import{d as e,c as t,a as l,w as o,F as s,r as n,b as a,o as r,t as i,e as c,f as d,g as u,h as g}from"./vendor.cb1a5435.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const o=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,n)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return l(self[t].moduleMap[a]);const r=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){n(new Error(`Failed to import: ${e}`)),s(i)},onload(){l(self[t].moduleMap[a]),s(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/codewell-frontend-challenges/assets/");const p=e({data:()=>({showMenu:!1,links:[{text:"Challenge 1",to:"/Challenge1"},{text:"Challenge 2",to:"/Challenge2"},{text:"Challenge 3",to:"/Challenge3"}]})}),x={class:"bg-gray-800 border-b border-gray-600"},m={class:"container"},f={class:"flex items-center justify-between h-16"},h={class:"flex items-center overflow-x-auto"},b={class:"flex-shrink-0"},y=l("svg",{class:"h-8 w-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 242.41 323.21"},[l("path",{d:"M161.6 80.8v80.8H80.8V80.8H0v242.41h80.8v-80.8h80.8v80.8h80.81V80.8H161.6zM80.8 0h80.8v80.8H80.8z"})],-1),w={class:"hidden md:block"},v={class:"ml-4 flex items-baseline"},k={class:"-mr-2 flex md:hidden"},C=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1),j=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),L={class:"px-2 pt-2 pb-3 sm:px-3"};p.render=function(e,c,d,u,g,p){const M=a("router-link"),S=a("router-view");return r(),t(s,null,[l("nav",x,[l("div",m,[l("div",f,[l("div",h,[l("div",b,[l(M,{class:"p-2 block fill-current text-gray-300 hover:bg-gray-700 rounded-md focus:outline-none focus:bg-gray-700 focus:text-white hover:text-whites",to:"/"},{default:o((()=>[y])),_:1})]),l("div",w,[l("div",v,[(r(!0),t(s,null,n(e.links,((e,s)=>(r(),t(M,{key:s,to:e.to,custom:""},{default:o((({navigate:t,href:o,isExactActive:n})=>[l("a",{href:o,onClick:t,class:["px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap",[n?"text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700":"text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",s>0&&"ml-4"]]},i(e.text),11,["href","onClick"])])),_:2},1032,["to"])))),128))])])]),l("div",k,[l("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white",onClick:c[1]||(c[1]=t=>e.showMenu=!e.showMenu)},[(r(),t("svg",{class:e.showMenu?"hidden h-6 w-6":"block h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[C],2)),(r(),t("svg",{class:e.showMenu?"block h-6 w-6":"hidden h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[j],2))])])])]),l("div",{class:["md:hidden",e.showMenu?"block":"hidden"]},[l("div",L,[(r(!0),t(s,null,n(e.links,((s,n)=>(r(),t(M,{key:n,to:s.to,custom:""},{default:o((({navigate:t,href:o,isExactActive:a})=>[l("a",{href:o,onClick:l=>t().then((()=>e.showMenu=!1)),class:["block px-3 py-2 rounded-md text-base font-medium",[a?"text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700":"text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",n>0&&"mt-1"]]},i(s.text),11,["href","onClick"])])),_:2},1032,["to"])))),128))])],2)]),l(S)],64)};const M={},S={class:"homepage"},G={class:"container py-6"},P=l("div",{class:"homepage-title-section rounded-xl p-8 text-center mb-16"},[l("h1",{class:"text-4xl lg:text-6xl font-bold leading-tight mb-4"}," Codewell Front End Challenges "),l("p",{class:"text-xl"},[c(" A site to show all the "),l("a",{class:"text-purple-700 hover:underline",href:"https://www.codewell.cc/challenges"},"Codewell Frontend Challenges"),c(". ")])],-1),A={class:"card-container rounded-xl p-8"},E={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},_={class:"relative w-full rounded-lg p-4 group homepage-card"},B=c("Spense Landing Page"),F=l("p",{class:"text-gray-500 my-1"}," Spence is a landing page for writers. Great for practicing absolute positioning and flex layouts. ",-1),R={class:"relative w-full rounded-lg p-4 group homepage-card"},T=c("Fiber Landing Page"),U=l("p",{class:"text-gray-500 my-1"}," An online portfolio generator. Great to practice flex/grid layouts, absolute positioning and sliders. ",-1),O={class:"relative w-full rounded-lg p-4 group homepage-card"},D=c(" Gradie Sign Up Page "),H=l("p",{class:"text-gray-500 my-1"}," Gradie is a simple sign up page, great to practice centering layouts and absolute positioning. ",-1),q={class:"relative w-full rounded-lg p-4 group homepage-card"},$=c("Spense Landing Page"),W=l("p",{class:"text-gray-500 my-1"}," Spence is a landing page for writers. Great for practicing absolute positioning and flex layouts. ",-1),Y={class:"relative w-full rounded-lg p-4 group homepage-card"},z=c("Fiber Landing Page"),V=l("p",{class:"text-gray-500 my-1"}," An online portfolio generator. Great to practice flex/grid layouts, absolute positioning and sliders. ",-1),J={class:"relative w-full rounded-lg p-4 group homepage-card"},N=c(" Gradie Sign Up Page "),Q=l("p",{class:"text-gray-500 my-1"}," Gradie is a simple sign up page, great to practice centering layouts and absolute positioning. ",-1);M.render=function(e,s){const n=a("router-link");return r(),t("main",S,[l("div",G,[P,l("div",A,[l("div",E,[l("div",_,[l(n,{to:"/Challenge1",class:"text-purple-700 inline-flex items-center font-semibold text-lg cursor-pointer stretched-link outline-none"},{default:o((()=>[B])),_:1}),F]),l("div",R,[l(n,{to:"/Challenge2",class:"text-purple-700 inline-flex items-center font-semibold text-lg cursor-pointer stretched-link outline-none"},{default:o((()=>[T])),_:1}),U]),l("div",O,[l(n,{to:"/Challenge3",class:"text-purple-700 inline-flex items-center font-semibold text-lg cursor-pointer stretched-link outline-none"},{default:o((()=>[D])),_:1}),H]),l("div",q,[l(n,{to:"/Challenge1",class:"text-purple-700 inline-flex items-center font-semibold text-lg cursor-pointer stretched-link outline-none"},{default:o((()=>[$])),_:1}),W]),l("div",Y,[l(n,{to:"/Challenge2",class:"text-purple-700 inline-flex items-center font-semibold text-lg cursor-pointer stretched-link outline-none"},{default:o((()=>[z])),_:1}),V]),l("div",J,[l(n,{to:"/Challenge3",class:"text-purple-700 inline-flex items-center font-semibold text-lg cursor-pointer stretched-link outline-none"},{default:o((()=>[N])),_:1}),Q])])])])])};var I="/codewell-frontend-challenges/img/spense/facebook-logo.png",K="/codewell-frontend-challenges/img/spense/dribbble-logo.png",X="/codewell-frontend-challenges/img/spense/youtube-logo.png",Z="/codewell-frontend-challenges/img/spense/pinterest-logo.png",ee="/codewell-frontend-challenges/img/spense/twitter-logo.png",te="/codewell-frontend-challenges/img/spense/reddit-logo.png",le="/codewell-frontend-challenges/img/spense/google-logo.png",oe="/codewell-frontend-challenges/img/spense/slack-logo.png";const se=e({data:()=>({showMenu:!1,links:[{text:"Business"},{text:"Pricing"},{text:"Features"}]})}),ne=l("div",{class:"text-center bg-black text-white p-4"},[l("p",{class:"mx-auto max-w-xl font-medium"},[c(" 🎉 To celebreate Spense's launch, we will be waiving all fees for the entire month of April. "),l("span",{class:"underline"},"You will be receiving 100% of the earnings."),c(" 🎉 ")])],-1),ae={class:"py-2 md:py-6 bg-gray-100"},re={class:"container"},ie={class:"flex items-center justify-between h-16"},ce={class:"flex items-center justify-between w-full"},de=l("a",{class:"text-gray-700 text-2xl font-bold focus:bg-gray-100 focus:text-gray-700 mr-auto lg:mr-0",href:"javascript:;"}," spense. ",-1),ue={class:"hidden md:block"},ge={class:"ml-4 flex items-baseline"},pe=l("div",{class:"hidden md:block"},[l("a",{href:"javascript:;",class:"px-2 lg:px-3 py-2 rounded-md text-md lg:text-lg whitespace-nowrap text-gray-700 focus:outline-none focus:bg-gray-100 ml-2 lg:ml-4"},"Login"),l("button",{type:"button",class:"rounded-md px-4 py-4 bg-gray-900 text-md lg:text-lg font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ml-2 lg:ml-4"}," Get Started ")],-1),xe={class:"-mr-2 flex md:hidden"},me=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1),fe=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),he={class:"container"},be={class:"pt-2 pb-3"},ye=l("div",null,[l("a",{href:"javascript:;",class:"block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100 mt-1"},"Login"),l("button",{type:"button",class:"rounded-md px-2 py-2 bg-gray-900 text-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 my-4 w-full"}," Get Started ")],-1),we=l("div",{class:"bg-gray-100 pb-8"},[l("div",{class:"container"},[l("div",{class:"flex flex-wrap -mx-4"},[l("div",{class:"w-full lg:w-1/2 xl:w-3/5 px-4 order-2 lg:order-1"},[l("h1",{class:"text-4xl font-bold md:text-5xl xl:text-6xl mb-4 max-w-2xl"}," Share your unfiltered thoughts. Get paid. "),l("p",{class:"text-lg max-w-2xl"},[c(" Spense is an open platform for individuals to share their unfiltered thoughts. Discuss the topic you love, and get paid for doing "),l("em",null,"just"),c(" that. ")]),l("ul",{class:"spense-hero-list text-lg my-6"},[l("li",null,"Receive 99% off the earnings."),l("li",null,"Get paid via Debit Card, ACH, or Paypal."),l("li",null,"Withdraw your earnings anytime.")]),l("form",{action:"#",method:"POST",onsubmit:"return false;",autocomplete:"off"},[l("div",{class:"flex max-w-lg"},[l("label",{for:"email-input",class:"sr-only"},"Email"),l("input",{name:"email-input",id:"email-input",type:"email",required:"",placeholder:"john@example.com",class:"block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 appearance-none text-lg"}),l("button",{type:"submit",class:"rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-lg font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex-shrink-0 ml-4"}," Get Started ")])])]),l("div",{class:"w-full lg:w-1/2 xl:w-2/5 px-4 order-1 lg:order-2 mb-8 lg:mb-0"},[l("div",{class:"spense-hero rounded-xl w-full relative"},[l("div",{class:"bg-white rounded-lg p-4 absolute left-8 top-8"},[l("p",{class:"border-color-gray-300 border-b pb-3 mb-3 text-lg"}," April Earnings "),l("p",{class:"font-bold text-lg"},"$272.21"),l("button",{type:"button",class:"rounded-md px-2 py-2 bg-gray-900 text-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 mt-4 w-full"}," Withdraw ")])])])])])],-1),ve=l("div",{class:"overflow-x-hidden py-12 bg-white"},[l("div",{class:"relative translate-x-1/2"},[l("div",{class:"spense-logos"},[l("img",{src:I,alt:"Facebook Logo"}),l("img",{src:K,alt:"Dribbble Logo"}),l("img",{src:X,alt:"Youtube Logo"}),l("img",{src:Z,alt:"Pinterest Logo"}),l("img",{src:ee,alt:"Twitter Logo"}),l("img",{src:te,alt:"Reddit Logo"}),l("img",{src:le,alt:"Google Logo"}),l("img",{src:oe,alt:"Slack Logo"}),l("img",{src:I,alt:"Facebook Logo"}),l("img",{src:K,alt:"Dribbble Logo"}),l("img",{src:X,alt:"Youtube Logo"}),l("img",{src:Z,alt:"Pinterest Logo"}),l("img",{src:ee,alt:"Twitter Logo"}),l("img",{src:te,alt:"Reddit Logo"}),l("img",{src:le,alt:"Google Logo"}),l("img",{src:oe,alt:"Slack Logo"})])])],-1),ke=l("div",{class:"container"},[l("div",{class:"bg-gray-100 rounded-xl relative p-4 md:p-8 lg:p-12 xl:p-20 pb-0 md:pb-0"},[l("div",{class:"max-w-2xl xl:py-8"},[l("h2",{class:"text-3xl md:text-4xl xl:text-5xl mb-4 max-w-lg font-bold"}," Secure your money with Escrow. "),l("p",{class:"text-lg max-w-lg mb-8"}," Spense uses Escrow to secure all payments. We believe Escrow offers the highest level of security for your payments, so you never need to worry about scames. "),l("a",{class:"text-gray-700 inline-flex items-center font-semibold tracking-wide underline cursor-pointer",href:"javascript:;"}," Learn more about Escrow → ")]),l("div",{class:"spense-phone-callout-img"})])],-1),Ce=l("div",{class:"container py-16"},[l("div",{class:"flex flex-wrap -mx-4"},[l("div",{class:"w-full lg:w-1/2 px-4 order-2 lg:order-1"},[l("img",{src:"/codewell-frontend-challenges/img/spense/text-editor.png",alt:""})]),l("div",{class:"w-full lg:w-1/2 px-4 order-1 lg:order-2 flex items-center"},[l("div",{class:"max-w-2xl xl:py-8 mb-8 lg:mb-0"},[l("h2",{class:"text-3xl md:text-4xl xl:text-5xl mb-4 font-bold"}," A text editor like no other. "),l("p",{class:"text-lg max-w-lg mb-8"}," Our text editor pulls you into focus mode with it's simplistic design and usability so you can put out your best writings. "),l("a",{class:"text-gray-700 inline-flex items-center font-semibold tracking-wide underline cursor-pointer",href:"javascript:;"}," Text Editor Live Demo → ")])])])],-1),je=l("footer",{class:"bg-black"},[l("div",{class:"container text-white"},[l("div",{class:"flex flex-wrap -mx-4 py-8 md:py-16"},[l("div",{class:"w-full xl:w-1/2 px-4"},[l("p",{class:"font-bold text-lg mb-4"},"spense."),l("p",{class:"text-white text-opacity-80 text-lg max-w-lg"},[c(" Spense is an open platform for individuals to share their unfiltered thoughts. Discuss the topics you love, and get paid for doing "),l("em",null,"just"),c(" that. ")])]),l("div",{class:"w-full xl:w-1/2 px-4 mt-16 xl:mt-0"},[l("div",{class:"flex flex-wrap -mx-4"},[l("div",{class:"w-1/2 lg:w-1/4 px-4"},[l("h3",{class:"font-bold text-lg md:text-xl mb-4"},"Sitemap"),l("ul",null,[l("li",null,[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Homepage")])])]),l("div",{class:"w-1/2 lg:w-1/4 px-4"},[l("h3",{class:"font-bold text-lg md:text-xl mb-4"},"Resources"),l("ul",null,[l("li",{class:"mb-4"},[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Support")]),l("li",{class:"mb-4"},[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Contact")]),l("li",null,[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"FAQ")])])]),l("div",{class:"w-1/2 lg:w-1/4 px-4 mt-8 lg:mt-0"},[l("h3",{class:"font-bold text-lg md:text-xl mb-4"},"Company"),l("ul",null,[l("li",{class:"mb-4"},[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"About")]),l("li",{class:"mb-4"},[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Customer")]),l("li",null,[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Blog")])])]),l("div",{class:"w-1/2 lg:w-1/4 px-4"},[l("h3",{class:"font-bold text-lg md:text-xl mb-4 mt-8 lg:mt-0"}," Opportunities "),l("ul",null,[l("li",{class:"mb-4"},[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Jobs")]),l("li",{class:"mb-4"},[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Customer")]),l("li",null,[l("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Blog")])])])])])])])],-1);se.render=function(e,o,a,c,d,u){return r(),t("main",null,[ne,l("nav",ae,[l("div",re,[l("div",ie,[l("div",ce,[de,l("div",ue,[l("div",ge,[(r(!0),t(s,null,n(e.links,((e,l)=>(r(),t("a",{key:l,href:"javascript:;",class:"px-2 lg:px-3 py-2 rounded-md text-md lg:text-lg whitespace-nowrap text-gray-700 focus:outline-none focus:bg-gray-100 ml-2 lg:ml-4"},i(e.text),1)))),128))])]),pe]),l("div",xe,[l("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100",onClick:o[1]||(o[1]=t=>e.showMenu=!e.showMenu)},[(r(),t("svg",{class:e.showMenu?"hidden h-6 w-6":"block h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[me],2)),(r(),t("svg",{class:e.showMenu?"block h-6 w-6":"hidden h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[fe],2))])])])]),l("div",{class:["md:hidden border-gray-300 border-b",e.showMenu?"block":"hidden"]},[l("div",he,[l("div",be,[(r(!0),t(s,null,n(e.links,((e,l)=>(r(),t("a",{key:l,href:"javascript:;",class:"block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100 mt-1"},i(e.text),1)))),128)),ye])])],2)]),we,ve,ke,Ce,je])};const Le={},Me=l("div",null,"challenge 2 page",-1);Le.render=function(e,l){return r(),t("main",null,[Me])};const Se={},Ge=l("div",{class:"gradie-desktop-bg h-full flex lg:items-center lg:p-4"},[l("div",{class:"gradie block lg:flex w-full lg:max-w-6xl mx-auto"},[l("section",{class:"flex-1 bg-gray-900 text-center gradie-bg lg:h-auto px-4 lg:px-0 py-12 lg:rounded-l-xl"},[l("h1",{class:"text-white font-bold text-5xl mb-4"},"Gradie"),l("p",{class:"text-white text-lg lg:text-xl text-blue-200"}," Beautiful gradients in seconds. ")]),l("section",{class:"flex-1 py-12 bg-white lg:rounded-r-xl lg:border-gray-200 lg:border lg:border-l-0"},[l("div",{class:"mx-auto max-w-lg px-4"},[l("h2",{class:"text-gray-900 font-bold text-5xl mb-8"},"Login"),l("form",{action:"#",method:"POST",onsubmit:"return false;",autocomplete:"off"},[l("div",{class:"mb-4"},[l("label",{for:"email-input",class:"block text-md font-medium text-gray-700"}," Email "),l("input",{name:"email-input",id:"email-input",type:"email",required:"",placeholder:"john@example.com",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 appearance-none"})]),l("div",{class:"mb-4"},[l("label",{for:"password-input",class:"block text-md font-medium text-gray-700"}," Password "),l("input",{name:"password-input",id:"password-input",type:"password",required:"",minlength:"8",placeholder:"At least 8 characters",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 appearance-none"})]),l("div",{class:"mb-4"},[l("label",{class:"inline-flex items-start mt-3"},[l("input",{type:"checkbox",class:"form-checkbox h-5 w-5 text-gray-900 focus:ring-gray-900 cursor-pointer rounded relative top-1",required:""}),l("span",{class:"ml-2 text-gray-700 cursor-pointer"},"By creating an account, you agree to the Terms & Conditions.")])]),l("div",{class:"flex flex-col-reverse mt-4 sm:block col-span-full sm:place-self-end"},[l("button",{type:"submit",class:"rounded-md border border-transparent shadow-sm px-4 py-4 bg-gray-900 text-xl font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-full"}," Create an Account ")])])])])])],-1);Se.render=function(e,l){return r(),t("main",null,[Ge])};const Pe={},Ae={class:"px-4 py-6 sm:px-0 mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},Ee=l("div",{class:"sm:text-center lg:text-left"},[l("h2",{class:"text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"}," Not found "),l("p",{class:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"}," The page you requested doesn't seem to exist... ")],-1);Pe.render=function(e,l){return r(),t("div",Ae,[Ee])};let _e=[{path:"/",component:M},{path:"/Challenge1",component:se},{path:"/Challenge2",component:Le},{path:"/Challenge3",component:Se},{path:"/:path(.*)",component:Pe}],Be=d(p),Fe=u({history:g("/codewell-frontend-challenges/"),routes:_e});Be.use(Fe),Be.mount("#app");
