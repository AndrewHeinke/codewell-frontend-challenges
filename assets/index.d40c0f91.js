import{d as e,c as l,a as t,w as o,F as a,r as n,b as s,o as r,t as i,e as c,f as d,g,h as u}from"./vendor.cb1a5435.js";!function(e=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(t){const o=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[l]=e=>new Promise(((t,n)=>{const s=new URL(e,o);if(self[l].moduleMap[s])return t(self[l].moduleMap[s]);const r=new Blob([`import * as m from '${s}';`,`${l}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){n(new Error(`Failed to import: ${e}`)),a(i)},onload(){t(self[l].moduleMap[s]),a(i)}});document.head.appendChild(i)})),self[l].moduleMap={}}}("/codewell-frontend-challenges/assets/");const m=[{bgColor:"#eeeeee",shadowLight:"#ffffff",shadowDark:"#cacaca",textColor:"#6b7280",linkColor:"#6d28d9"},{bgColor:"#4A90E2",shadowLight:"#55a6ff",shadowDark:"#3f7ac0",textColor:"#FFFFFF",linkColor:"#F1BBDF"},{bgColor:"#7ed321",shadowLight:"#91F326",shadowDark:"#6BB31C",textColor:"#171738",linkColor:"#3423A6"},{bgColor:"#9013fe",shadowLight:"#a616ff",shadowDark:"#7A10D8",textColor:"#BCF8EC",linkColor:"#F9CFF2"},{bgColor:"#f5a623",shadowLight:"#FFBF28",shadowDark:"#D08D1E",textColor:"#1D2F6F",linkColor:"#2E4BB2"},{bgColor:"#3a3842",shadowLight:"#43404c",shadowDark:"#313038",textColor:"#D8E8F6",linkColor:"#44CF6C"}],p=e({data:()=>({showMenu:!1,links:[{text:"Challenge 1",to:"/Challenge1"},{text:"Challenge 2",to:"/Challenge2"},{text:"Challenge 3",to:"/Challenge3"},{text:"Challenge 4",to:"/Challenge4"},{text:"Challenge 5",to:"/Challenge5"},{text:"Challenge 6",to:"/Challenge6"},{text:"Challenge 7",to:"/Challenge7"},{text:"Challenge 8",to:"/Challenge8"},{text:"Challenge 9",to:"/Challenge9"}]}),mounted(){const e=window.localStorage,l=document.documentElement;function t(){let t=e.getItem("colorIndex"),o=m[t],a=document.querySelector(".select-wrapper");document.getElementById("theme-select").value=t,"0"===t?a.classList.add("light-theme"):a.classList.remove("light-theme"),l.style.setProperty("--bg-color",o.bgColor),l.style.setProperty("--text-color",o.textColor),l.style.setProperty("--shadow-light",o.shadowLight),l.style.setProperty("--shadow-dark",o.shadowDark),l.style.setProperty("--link-color",o.linkColor)}function o(){e.setItem("colorIndex",document.getElementById("theme-select").value),t()}document.getElementById("theme-select").addEventListener("change",(function(){o()})),e.getItem("colorIndex")?t():o()}}),h={class:"main-nav"},f={class:"container"},x={class:"flex items-center h-16"},v={class:"flex items-center w-full"},w={class:"flex-shrink-0"},b=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 242.41 323.21"},[t("path",{d:"M161.6 80.8v80.8H80.8V80.8H0v242.41h80.8v-80.8h80.8v80.8h80.81V80.8H161.6zM80.8 0h80.8v80.8H80.8z"})],-1),y=t("div",{class:"flex ml-auto"},[t("div",{class:"select-wrapper"},[t("div",{class:"select-prepend"},[t("svg",{"aria-hidden":"true",class:"w-4 h-4",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[t("path",{fill:"currentColor",d:"M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"})])]),t("label",{class:"sr-only",for:"theme-select"},"Set Theme"),t("select",{name:"theme",id:"theme-select"},[t("optgroup",{label:"Theme"},[t("option",{value:"0"},"Light"),t("option",{value:"1"},"Blue"),t("option",{value:"2"},"Green"),t("option",{value:"3"},"Purple"),t("option",{value:"4"},"Orange"),t("option",{value:"5"},"Dark")])]),t("div",{class:"select-append"},[t("svg",{"aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:"w-4 h-4"},[t("path",{fill:"currentColor",d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"})])])])],-1),k={class:"flex"},C=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1),L=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),M={class:"py-3"};p.render=function(e,c,d,g,u,m){const p=s("router-link"),j=s("router-view");return r(),l(a,null,[t("nav",h,[t("div",f,[t("div",x,[t("div",v,[t("div",w,[t(p,{class:"main-nav-logo",to:"/"},{default:o((()=>[b])),_:1})]),y]),t("div",k,[t("button",{class:"mobile-menu-btn",onClick:c[1]||(c[1]=l=>e.showMenu=!e.showMenu)},[(r(),l("svg",{class:e.showMenu?"hidden h-6 w-6":"block h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[C],2)),(r(),l("svg",{class:e.showMenu?"block h-6 w-6":"hidden h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[L],2))])])])]),t("div",{class:["container",e.showMenu?"block":"hidden"]},[t("div",M,[(r(!0),l(a,null,n(e.links,((a,n)=>(r(),l(p,{key:n,to:a.to,custom:""},{default:o((({navigate:l,href:o,isExactActive:s})=>[t("a",{href:o,onClick:t=>l().then((()=>e.showMenu=!1)),class:["block px-3 py-2 text-base font-medium rounded-md",[s?"mobile-nav-link mobile-nav-link--active":"mobile-nav-link",n>0&&"mt-1"]]},i(a.text),11,["href","onClick"])])),_:2},1032,["to"])))),128))])],2)]),t(j)],64)};const j={},B={class:"homepage"},F={class:"container py-6"},S=t("div",{class:"homepage-title-section mb-16 p-8 text-center rounded-xl"},[t("h1",{class:"homepage-title-heading"},"Front End Challenges")],-1),P={class:"card-container p-4 rounded-xl md:p-8"},E={class:"\n                        grid\n                        gap-4\n                        grid-cols-1\n                        sm:grid-cols-2\n                        md:gap-8\n                        lg:grid-cols-3\n                        xl:grid-cols-4\n                    "},A={class:"group homepage-card relative p-4 w-full rounded-lg"},D=t("img",{class:"mb-4 rounded-md",src:"http://via.placeholder.com/600x400",alt:""},null,-1),N=c("Spense Landing Page"),_=t("p",{class:"homepage-card-text"}," Spence is a landing page for writers. Great for practicing absolute positioning and flex layouts. ",-1),z={class:"group homepage-card relative p-4 w-full rounded-lg"},G=t("img",{class:"mb-4 rounded-md",src:"http://via.placeholder.com/600x400",alt:""},null,-1),T=c("Fiber Landing Page"),H=t("p",{class:"homepage-card-text"}," An online portfolio generator. Great to practice flex/grid layouts, absolute positioning and sliders. ",-1),I={class:"group homepage-card relative p-4 w-full rounded-lg"},R=t("img",{class:"mb-4 rounded-md",src:"http://via.placeholder.com/600x400",alt:""},null,-1),O=c(" Gradie Sign Up Page "),U=t("p",{class:"homepage-card-text"}," Gradie is a simple sign up page, great to practice centering layouts and absolute positioning. ",-1),q={class:"group homepage-card relative p-4 w-full rounded-lg"},V=t("img",{class:"mb-4 rounded-md",src:"http://via.placeholder.com/600x400",alt:""},null,-1),$=c("IndieBrew Landing Page"),W=t("p",{class:"homepage-card-text"}," IndieBrew's template has a landing page and a sign up page. Great for general practice. ",-1),Y={class:"group homepage-card relative p-4 w-full rounded-lg"},J=t("img",{class:"mb-4 rounded-md",src:"http://via.placeholder.com/600x400",alt:""},null,-1),Q=c("Snipper Landing Page"),K=t("p",{class:"homepage-card-text"}," Snipper's a really fun project if you want some quick coding to do. Perfect for beginners. ",-1),X={class:"group homepage-card relative p-4 w-full rounded-lg"},Z=t("img",{class:"mb-4 rounded-md",src:"http://via.placeholder.com/600x400",alt:""},null,-1),ee=c(" Comment Module "),le=t("p",{class:"homepage-card-text"}," A comment box with nested replies. Perfect for practicing positioning. Intermediate level. ",-1),te={class:"group homepage-card relative p-4 w-full rounded-lg"},oe=t("img",{class:"mb-4 rounded-md",src:"http://via.placeholder.com/600x400",alt:""},null,-1),ae=c(" Commune Waitlist Page "),ne=t("p",{class:"homepage-card-text"}," The perfect template for beginners to start working on their HTML and CSS skills. ",-1),se={class:"group homepage-card relative p-4 w-full rounded-lg"},re=t("img",{class:"mb-4 rounded-md",src:"http://via.placeholder.com/600x400",alt:""},null,-1),ie=c(" TimeNow Landing Page "),ce=t("p",{class:"homepage-card-text"}," A 2-page template, perfect for practicing custom components and flex layouts. ",-1),de={class:"group homepage-card relative p-4 w-full rounded-lg"},ge=t("img",{class:"mb-4 rounded-md",src:"http://via.placeholder.com/600x400",alt:""},null,-1),ue=c(" Unifeed Blog Page "),me=t("p",{class:"homepage-card-text"}," A blog page perfect for practicing both Flex and Grid. Beginner level. ",-1),pe=t("footer",{class:"homepage-footer"},[t("div",{class:"container"},[t("div",{class:"flex justify-center pt-8"},[t("a",{class:"morph-btn",href:"https://github.com/AndrewHeinke/codewell-frontend-challenges",target:"_blank",rel:"noopener noreferrer"},[t("svg",{viewBox:"0 0 16 16","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})])]),t("a",{class:"morph-btn",href:"https://www.linkedin.com/in/andrewheinke/",target:"_blank",rel:"noopener noreferrer"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 34 34"},[t("path",{d:"M34 2.5v29a2.5 2.5 0 01-2.5 2.5h-29A2.5 2.5 0 010 31.5v-29A2.5 2.5 0 012.5 0h29A2.5 2.5 0 0134 2.5zM10 13H5v16h5zm.45-5.5a2.88 2.88 0 00-2.86-2.9H7.5a2.9 2.9 0 000 5.8 2.88 2.88 0 002.95-2.81zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.7 5.7 0 00-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 013-3.58h.19c1.59 0 2.77 1 2.77 3.52V29h5z"})])]),t("a",{class:"morph-btn",href:"https://www.instagram.com/andrewheinke/",target:"_blank",rel:"noopener noreferrer"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.063 169.063"},[t("path",{d:"M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z"}),t("path",{d:"M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 00-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z"})])])])])],-1);j.render=function(e,n){const i=s("router-link");return r(),l(a,null,[t("main",B,[t("div",F,[S,t("div",P,[t("div",E,[t("div",A,[D,t(i,{to:"/Challenge1",class:"homepage-card-link"},{default:o((()=>[N])),_:1}),_]),t("div",z,[G,t(i,{to:"/Challenge2",class:"homepage-card-link"},{default:o((()=>[T])),_:1}),H]),t("div",I,[R,t(i,{to:"/Challenge3",class:"homepage-card-link"},{default:o((()=>[O])),_:1}),U]),t("div",q,[V,t(i,{to:"/Challenge4",class:"homepage-card-link"},{default:o((()=>[$])),_:1}),W]),t("div",Y,[J,t(i,{to:"/Challenge5",class:"homepage-card-link"},{default:o((()=>[Q])),_:1}),K]),t("div",X,[Z,t(i,{to:"/Challenge6",class:"homepage-card-link"},{default:o((()=>[ee])),_:1}),le]),t("div",te,[oe,t(i,{to:"/Challenge7",class:"homepage-card-link"},{default:o((()=>[ae])),_:1}),ne]),t("div",se,[re,t(i,{to:"/Challenge8",class:"homepage-card-link"},{default:o((()=>[ie])),_:1}),ce]),t("div",de,[ge,t(i,{to:"/Challenge9",class:"homepage-card-link"},{default:o((()=>[ue])),_:1}),me])])])])]),pe],64)};var he="/codewell-frontend-challenges/img/spense/facebook-logo.png",fe="/codewell-frontend-challenges/img/spense/dribbble-logo.png",xe="/codewell-frontend-challenges/img/spense/youtube-logo.png",ve="/codewell-frontend-challenges/img/spense/pinterest-logo.png",we="/codewell-frontend-challenges/img/spense/twitter-logo.png",be="/codewell-frontend-challenges/img/spense/reddit-logo.png",ye="/codewell-frontend-challenges/img/spense/google-logo.png",ke="/codewell-frontend-challenges/img/spense/slack-logo.png";const Ce=e({data:()=>({showMenu:!1,links:[{text:"Business"},{text:"Pricing"},{text:"Features"}]})}),Le=t("div",{class:"text-center bg-black text-white p-4"},[t("p",{class:"mx-auto max-w-xl font-medium"},[c(" 🎉 To celebreate Spense's launch, we will be waiving all fees for the entire month of April. "),t("span",{class:"underline"},"You will be receiving 100% of the earnings."),c(" 🎉 ")])],-1),Me={class:"py-2 md:py-6 bg-gray-100"},je={class:"container"},Be={class:"flex items-center justify-between h-16"},Fe={class:"flex items-center justify-between w-full"},Se=t("a",{class:"text-gray-700 text-2xl font-bold focus:bg-gray-100 focus:text-gray-700 mr-auto lg:mr-0",href:"javascript:;"}," spense. ",-1),Pe={class:"hidden md:block"},Ee={class:"ml-4 flex items-baseline"},Ae=t("div",{class:"hidden md:block"},[t("a",{href:"javascript:;",class:"px-2 lg:px-3 py-2 rounded-md text-md lg:text-lg whitespace-nowrap text-gray-700 focus:outline-none focus:bg-gray-100 ml-2 lg:ml-4"},"Login"),t("button",{type:"button",class:"rounded-md px-4 py-4 bg-gray-900 text-md lg:text-lg font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ml-2 lg:ml-4"}," Get Started ")],-1),De={class:"-mr-2 flex md:hidden"},Ne=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1),_e=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),ze={class:"container"},Ge={class:"pt-2 pb-3"},Te=t("div",null,[t("a",{href:"javascript:;",class:"block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100 mt-1"},"Login"),t("button",{type:"button",class:"rounded-md px-2 py-2 bg-gray-900 text-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 my-4 w-full"}," Get Started ")],-1),He=t("div",{class:"bg-gray-100 pb-8"},[t("div",{class:"container"},[t("div",{class:"flex flex-wrap -mx-4"},[t("div",{class:"w-full lg:w-1/2 xl:w-3/5 px-4 order-2 lg:order-1"},[t("h1",{class:"text-4xl font-bold md:text-5xl xl:text-6xl mb-4 max-w-2xl"}," Share your unfiltered thoughts. Get paid. "),t("p",{class:"text-lg max-w-2xl"},[c(" Spense is an open platform for individuals to share their unfiltered thoughts. Discuss the topic you love, and get paid for doing "),t("em",null,"just"),c(" that. ")]),t("ul",{class:"spense-hero-list text-lg my-6"},[t("li",null,"Receive 99% off the earnings."),t("li",null,"Get paid via Debit Card, ACH, or Paypal."),t("li",null,"Withdraw your earnings anytime.")]),t("form",{action:"#",method:"POST",onsubmit:"return false;",autocomplete:"off"},[t("div",{class:"flex max-w-lg"},[t("label",{for:"email-input",class:"sr-only"},"Email"),t("input",{name:"email-input",id:"email-input",type:"email",required:"",placeholder:"john@example.com",class:"block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 appearance-none text-lg"}),t("button",{type:"submit",class:"rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-lg font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex-shrink-0 ml-4"}," Get Started ")])])]),t("div",{class:"w-full lg:w-1/2 xl:w-2/5 px-4 order-1 lg:order-2 mb-8 lg:mb-0"},[t("div",{class:"spense-hero rounded-xl w-full relative"},[t("div",{class:"bg-white rounded-lg p-4 absolute left-8 top-8"},[t("p",{class:"border-color-gray-300 border-b pb-3 mb-3 text-lg"}," April Earnings "),t("p",{class:"font-bold text-lg"},"$272.21"),t("button",{type:"button",class:"rounded-md px-2 py-2 bg-gray-900 text-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 mt-4 w-full"}," Withdraw ")])])])])])],-1),Ie=t("div",{class:"overflow-x-hidden py-12 bg-white"},[t("div",{class:"relative translate-x-1/2"},[t("div",{class:"spense-logos"},[t("img",{src:he,alt:"Facebook Logo"}),t("img",{src:fe,alt:"Dribbble Logo"}),t("img",{src:xe,alt:"Youtube Logo"}),t("img",{src:ve,alt:"Pinterest Logo"}),t("img",{src:we,alt:"Twitter Logo"}),t("img",{src:be,alt:"Reddit Logo"}),t("img",{src:ye,alt:"Google Logo"}),t("img",{src:ke,alt:"Slack Logo"}),t("img",{src:he,alt:"Facebook Logo"}),t("img",{src:fe,alt:"Dribbble Logo"}),t("img",{src:xe,alt:"Youtube Logo"}),t("img",{src:ve,alt:"Pinterest Logo"}),t("img",{src:we,alt:"Twitter Logo"}),t("img",{src:be,alt:"Reddit Logo"}),t("img",{src:ye,alt:"Google Logo"}),t("img",{src:ke,alt:"Slack Logo"})])])],-1),Re=t("div",{class:"container"},[t("div",{class:"bg-gray-100 rounded-xl relative p-4 md:p-8 lg:p-12 xl:p-20 pb-0 md:pb-0"},[t("div",{class:"max-w-2xl xl:py-8"},[t("h2",{class:"text-3xl md:text-4xl xl:text-5xl mb-4 max-w-lg font-bold"}," Secure your money with Escrow. "),t("p",{class:"text-lg max-w-lg mb-8"}," Spense uses Escrow to secure all payments. We believe Escrow offers the highest level of security for your payments, so you never need to worry about scames. "),t("a",{class:"text-gray-700 inline-flex items-center font-semibold tracking-wide underline cursor-pointer",href:"javascript:;"}," Learn more about Escrow → ")]),t("div",{class:"spense-phone-callout-img"})])],-1),Oe=t("div",{class:"container py-16"},[t("div",{class:"flex flex-wrap -mx-4"},[t("div",{class:"w-full lg:w-1/2 px-4 order-2 lg:order-1"},[t("img",{src:"/codewell-frontend-challenges/img/spense/text-editor.png",alt:""})]),t("div",{class:"w-full lg:w-1/2 px-4 order-1 lg:order-2 flex items-center"},[t("div",{class:"max-w-2xl xl:py-8 mb-8 lg:mb-0"},[t("h2",{class:"text-3xl md:text-4xl xl:text-5xl mb-4 font-bold"}," A text editor like no other. "),t("p",{class:"text-lg max-w-lg mb-8"}," Our text editor pulls you into focus mode with it's simplistic design and usability so you can put out your best writings. "),t("a",{class:"text-gray-700 inline-flex items-center font-semibold tracking-wide underline cursor-pointer",href:"javascript:;"}," Text Editor Live Demo → ")])])])],-1),Ue=t("footer",{class:"bg-black"},[t("div",{class:"container text-white"},[t("div",{class:"flex flex-wrap -mx-4 py-8 md:py-16"},[t("div",{class:"w-full xl:w-1/2 px-4"},[t("p",{class:"font-bold text-lg mb-4"},"spense."),t("p",{class:"text-white text-opacity-80 text-lg max-w-lg"},[c(" Spense is an open platform for individuals to share their unfiltered thoughts. Discuss the topics you love, and get paid for doing "),t("em",null,"just"),c(" that. ")])]),t("div",{class:"w-full xl:w-1/2 px-4 mt-16 xl:mt-0"},[t("div",{class:"flex flex-wrap -mx-4"},[t("div",{class:"w-1/2 lg:w-1/4 px-4"},[t("h3",{class:"font-bold text-lg md:text-xl mb-4"},"Sitemap"),t("ul",null,[t("li",null,[t("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Homepage")])])]),t("div",{class:"w-1/2 lg:w-1/4 px-4"},[t("h3",{class:"font-bold text-lg md:text-xl mb-4"},"Resources"),t("ul",null,[t("li",{class:"mb-4"},[t("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Support")]),t("li",{class:"mb-4"},[t("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Contact")]),t("li",null,[t("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"FAQ")])])]),t("div",{class:"w-1/2 lg:w-1/4 px-4 mt-8 lg:mt-0"},[t("h3",{class:"font-bold text-lg md:text-xl mb-4"},"Company"),t("ul",null,[t("li",{class:"mb-4"},[t("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"About")]),t("li",{class:"mb-4"},[t("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Customer")]),t("li",null,[t("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Blog")])])]),t("div",{class:"w-1/2 lg:w-1/4 px-4"},[t("h3",{class:"font-bold text-lg md:text-xl mb-4 mt-8 lg:mt-0"}," Opportunities "),t("ul",null,[t("li",{class:"mb-4"},[t("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Jobs")]),t("li",{class:"mb-4"},[t("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Customer")]),t("li",null,[t("a",{class:"text-white text-opacity-90 focus:outline-none focus:text-opacity-100 focus:underline hover:underline hover:text-opacity-100",href:"javascript:;"},"Blog")])])])])])])])],-1);Ce.render=function(e,o,s,c,d,g){return r(),l("main",null,[Le,t("nav",Me,[t("div",je,[t("div",Be,[t("div",Fe,[Se,t("div",Pe,[t("div",Ee,[(r(!0),l(a,null,n(e.links,((e,t)=>(r(),l("a",{key:t,href:"javascript:;",class:"px-2 lg:px-3 py-2 rounded-md text-md lg:text-lg whitespace-nowrap text-gray-700 focus:outline-none focus:bg-gray-100 ml-2 lg:ml-4"},i(e.text),1)))),128))])]),Ae]),t("div",De,[t("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100",onClick:o[1]||(o[1]=l=>e.showMenu=!e.showMenu)},[(r(),l("svg",{class:e.showMenu?"hidden h-6 w-6":"block h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[Ne],2)),(r(),l("svg",{class:e.showMenu?"block h-6 w-6":"hidden h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[_e],2))])])])]),t("div",{class:["md:hidden border-gray-300 border-b",e.showMenu?"block":"hidden"]},[t("div",ze,[t("div",Ge,[(r(!0),l(a,null,n(e.links,((e,t)=>(r(),l("a",{key:t,href:"javascript:;",class:"block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100 mt-1"},i(e.text),1)))),128)),Te])])],2)]),He,Ie,Re,Oe,Ue])};const qe={},Ve=t("div",null,"challenge 2 page",-1);qe.render=function(e,t){return r(),l("main",null,[Ve])};const $e={},We={class:"h-full"},Ye=t("div",{class:"gradie-desktop-bg flex h-full lg:items-center lg:p-4"},[t("div",{class:"gradie block mx-auto w-full lg:flex lg:max-w-6xl"},[t("section",{class:"\n                        gradie-bg\n                        flex-1\n                        px-4\n                        py-12\n                        text-center\n                        bg-gray-900\n                        lg:px-0\n                        lg:h-auto\n                        lg:rounded-l-xl\n                    "},[t("h1",{class:"mb-4 text-white text-5xl font-bold"},"Gradie"),t("p",{class:"text-blue-200 text-white text-lg lg:text-xl"}," Beautiful gradients in seconds. ")]),t("section",{class:"\n                        flex-1\n                        py-12\n                        bg-white\n                        lg:border lg:border-l-0 lg:border-gray-200\n                        lg:rounded-r-xl\n                    "},[t("div",{class:"mx-auto px-4 max-w-lg"},[t("h2",{class:"mb-8 text-gray-900 text-5xl font-bold"},"Login"),t("form",{action:"#",method:"POST",onsubmit:"return false;",autocomplete:"off"},[t("div",{class:"mb-4"},[t("label",{for:"email-input",class:"text-md block text-gray-700 font-medium"}," Email "),t("input",{name:"email-input",id:"email-input",type:"email",required:"",placeholder:"john@example.com",class:"\n                                        block\n                                        mt-1\n                                        px-3\n                                        py-2\n                                        w-full\n                                        bg-white\n                                        border border-gray-300\n                                        rounded-md\n                                        focus:outline-none\n                                        shadow-sm\n                                        appearance-none\n                                        focus:ring-gray-900 focus:ring-offset-2 focus:ring-2\n                                    "})]),t("div",{class:"mb-4"},[t("label",{for:"password-input",class:"text-md block text-gray-700 font-medium"}," Password "),t("input",{name:"password-input",id:"password-input",type:"password",required:"",minlength:"8",placeholder:"At least 8 characters",class:"\n                                        block\n                                        mt-1\n                                        px-3\n                                        py-2\n                                        w-full\n                                        bg-white\n                                        border border-gray-300\n                                        rounded-md\n                                        focus:outline-none\n                                        shadow-sm\n                                        appearance-none\n                                        focus:ring-gray-900 focus:ring-offset-2 focus:ring-2\n                                    "})]),t("div",{class:"mb-4"},[t("label",{class:"inline-flex items-start mt-3"},[t("input",{type:"checkbox",class:"\n                                            form-checkbox\n                                            relative\n                                            top-1\n                                            w-5\n                                            h-5\n                                            text-gray-900\n                                            rounded\n                                            cursor-pointer\n                                            focus:ring-gray-900\n                                        ",required:""}),t("span",{class:"ml-2 text-gray-700 cursor-pointer"},"By creating an account, you agree to the Terms & Conditions.")])]),t("div",{class:"\n                                    flex flex-col-reverse\n                                    col-span-full\n                                    mt-4\n                                    sm:block\n                                    sm:place-self-end\n                                "},[t("button",{type:"submit",class:"\n                                        px-4\n                                        py-4\n                                        w-full\n                                        text-white text-xl\n                                        font-medium\n                                        hover:bg-gray-700\n                                        bg-gray-900\n                                        border border-transparent\n                                        rounded-md\n                                        focus:outline-none\n                                        shadow-sm\n                                        focus:ring-gray-900 focus:ring-offset-2 focus:ring-2\n                                    "}," Create an Account ")])])])])])],-1);$e.render=function(e,t){return r(),l("main",We,[Ye])};const Je={},Qe=t("div",null,"challenge 4 page",-1);Je.render=function(e,t){return r(),l("main",null,[Qe])};const Ke={},Xe=t("div",null,"challenge 5 page",-1);Ke.render=function(e,t){return r(),l("main",null,[Xe])};const Ze={},el={class:"h-full"},ll=t("div",{class:"comment-module-bg flex h-full lg:items-center lg:p-4"},[t("div",{class:"block mx-auto p-8 w-full bg-white rounded-lg lg:flex lg:max-w-6xl"},[t("div",{class:"comment"},[t("div",{className:"flex"},[t("div",{className:"p-2"},[t("div",{class:"avatar block w-10 h-10 bg-gray-500 rounded-full"})]),t("div",null,[t("div",{class:"flex flex-wrap mb-2"},[t("div",{class:"mr-3 w-full font-semibold"},"user name"),t("div",{className:"text-gray-700 font-lighter"},"time")]),t("p",{className:"text-sm mb-3"},"data body"),t("div",{className:"flex flex-wrap mb-3"},[t("div",{className:"flex items-center mr-3"},[t("div",{class:"mx-1"},"^"),t("div",{class:"mx-1 font-bold"},"4"),t("div",{class:"mx-1"},">")]),t("div",{className:"mr-3"},"Reply"),t("div",{className:"mr-3"},"Share")]),t("div",{class:"comment"},[t("div",{className:"flex"},[t("div",{className:"p-2"},[t("div",{class:"avatar block w-10 h-10 bg-gray-500 rounded-full"})]),t("div",null,[t("div",{class:"flex flex-wrap mb-2"},[t("div",{class:"mr-3 w-full font-semibold"},"user name"),t("div",{className:"text-gray-700 font-lighter"},"time")]),t("p",{className:"text-sm mb-3"},"data body"),t("div",{className:"flex flex-wrap mb-3"},[t("div",{className:"flex items-center mr-3"},[t("div",{class:"mx-1"},"^"),t("div",{class:"mx-1 font-bold"},"4"),t("div",{class:"mx-1"},">")]),t("div",{className:"mr-3"},"Reply"),t("div",{className:"mr-3"},"Share")])])])])])])])])],-1);Ze.render=function(e,t){return r(),l("main",el,[ll])};const tl={},ol=t("div",null,"challenge 7 page",-1);tl.render=function(e,t){return r(),l("main",null,[ol])};const al={},nl=t("div",null,"challenge 8 page",-1);al.render=function(e,t){return r(),l("main",null,[nl])};const sl={},rl=t("div",null,"challenge 9 page",-1);sl.render=function(e,t){return r(),l("main",null,[rl])};const il={},cl={class:"px-4 py-6 sm:px-0 mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},dl=t("div",{class:"sm:text-center lg:text-left"},[t("h2",{class:"text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"}," Not found "),t("p",{class:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"}," The page you requested doesn't seem to exist... ")],-1);il.render=function(e,t){return r(),l("div",cl,[dl])};let gl=[{path:"/",component:j},{path:"/Challenge1",component:Ce},{path:"/Challenge2",component:qe},{path:"/Challenge3",component:$e},{path:"/Challenge4",component:Je},{path:"/Challenge5",component:Ke},{path:"/Challenge6",component:Ze},{path:"/Challenge7",component:tl},{path:"/Challenge8",component:al},{path:"/Challenge9",component:sl},{path:"/:path(.*)",component:il}],ul=d(p),ml=g({scrollBehavior(){document.documentElement.scrollTop=0},history:u("/codewell-frontend-challenges/"),routes:gl});ul.use(ml),ul.mount("#app");
