import{S as f,i as g,a as x,A as w}from"./assets/vendor-D-2ozGNI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const h="https://portfolio-js.b.goit.study/api/reviews",m=document.querySelector(".cards");async function _(){const{data:e}=await x(h);return e}_().then(e=>{m.insertAdjacentHTML("beforeend",y(e))}).catch(e=>{let t=e,n=new IntersectionObserver((s,o)=>{s.forEach(a=>{a.isIntersecting&&t&&(L("Виникли проблеми з отриманням даних із сервера."),m.insertAdjacentHTML("beforeend",'<p class="not-found"> Not found</p>'),t=null,o.disconnect())})});const r=document.getElementById("reviews");n.observe(r)});function y(e){return e.map(({author:t,avatar_url:n,review:r})=>`
    <li class="card swiper-slide">
    <img src="${n}" alt="Author's photo" class="card-img">
    <div class="card-content">
    <p class="common-headers">${t}</p>
    <p class="common-text"> ${r}</p>
    </div>
    </li>
    `).join("")}const p=new f(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},centeredSlidesBounds:!0,slidesPerView:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:4,spaceBetween:16}}});document.addEventListener("keydown",e=>{e.key==="ArrowRight"?p.slideNext():e.key==="ArrowLeft"?p.slidePrev():e.key==="Tab"&&(e.preventDefault(),e.shiftKey?p.slidePrev():p.slideNext())});function L(e){g.error({title:"Error",message:e})}const c=new f(".swiper",{slidesPerView:1,spaceBetween:30,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.querySelectorAll(".project-btn").forEach(e=>{e.addEventListener("click",()=>{window.open("https://github.com/Bohdan-Potopliak/free-azov","_blank")})});document.addEventListener("keydown",e=>{e.key==="ArrowRight"?c.slideNext():e.key==="ArrowLeft"?c.slidePrev():e.key==="Tab"&&(e.preventDefault(),e.shiftKey?c.slidePrev():c.slideNext())});let u=0;document.querySelector(".swiper").addEventListener("touchstart",e=>{u=e.touches[0].clientX});document.querySelector(".swiper").addEventListener("touchend",e=>{const t=e.changedTouches[0].clientX;u>t?c.slideNext():u<t&&c.slidePrev()});const b="/free-azov/assets/Rectangle1_1x-CGksTac5.jpg",E="/free-azov/assets/Rectangle1_2x-CI8JEbDS.jpg",R="/free-azov/assets/Rectangle4_1x-QLvJ6n7w.jpg",S="/free-azov/assets/Rectangle4_2x-BwkY-IS2.jpg",q="/free-azov/assets/Rectangle5_1x-iVgEUf9i.jpg",z="/free-azov/assets/Rectangle5_2x-D_gYKsNZ.jpg",j="/free-azov/assets/Rectangle6_1x-BKR7GDC7.webp",C="/free-azov/assets/Rectangle6_2x-CTtKgr4a.webp",k="/free-azov/assets/Rectangle7_1x-C3C6qfsv.webp",A="/free-azov/assets/Rectangle7_2x-Br8UtosN.webp",P="/free-azov/assets/Rectangle8_1x-eK4M8KFD.jpg",B="/free-azov/assets/Rectangle8_2x-COI2LxQp.jpg",I="/free-azov/assets/Rectangle9_1x-B84OYv22.webp",D="/free-azov/assets/Rectangle9_2x-DS4u3aOC.webp",O="/free-azov/assets/Rectangle10_1x-C1LVCajt.jpg",M="/free-azov/assets/Rectangle10_2x-2fBNBAdE.jpg",N="/free-azov/assets/Rectangle11_1x-BLqa_EF_.jpg",T="/free-azov/assets/Rectangle11_2x-Bt0oCA2i.jpg",V="/free-azov/assets/Rectangle12_1x-DTW4asiT.jpg",F="/free-azov/assets/Rectangle12_2x-C3mEAY16.jpg",K=[{src1x:b,src2x:E,alt:"Зображення 1"},{src1x:R,src2x:S,alt:"Зображення 2"},{src1x:q,src2x:z,alt:"Зображення 3"},{src1x:j,src2x:C,alt:"Зображення 4"},{src1x:k,src2x:A,alt:"Зображення 5"},{src1x:P,src2x:B,alt:"Зображення 6"},{src1x:I,src2x:D,alt:"Зображення 7"},{src1x:O,src2x:M,alt:"Зображення 8"},{src1x:N,src2x:T,alt:"Зображення 9"},{src1x:V,src2x:F,alt:"Зображення 10"}],$=e=>{for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},X=()=>{document.querySelectorAll(".covers-row").forEach(t=>{const n=t.querySelector(".covers-list"),r=t.dataset.speed,s=$([...K]);for(let o=0;o<200;o++){const a=document.createElement("li");a.classList.add("covers-item");const l=document.createElement("img"),d=s[o%s.length];l.src=d.src1x,l.srcset=`${d.src1x} 1x, ${d.src2x} 2x`,l.alt=d.alt,a.appendChild(l),n.appendChild(a)}n.style.animationDuration=`${r}s`})};new w(".accordion-block",{showMultiple:!0,openOnInit:[0]});window.addEventListener("load",()=>{document.querySelector(".accordion-block").classList.remove("no-animation")});new f(".skill",{direction:"horizontal",loop:!0,allowSlidePrev:!1,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0},navigation:{nextEl:".btn-next"},mousewheel:{enabled:!0}});const H="https://portfolio-js.b.goit.study/api/requests";async function U(e){return await x.post(H,e)}const v=document.querySelector("#work_together_form");v.addEventListener("input",Y);v.addEventListener("submit",J);const i={email:"",comment:""};function Y(e){i[e.target.name]=e.target.value.trim(),console.log(i.comment.length)}const G=Q();async function J(e){if(e.preventDefault(),console.log(1),!i.email||!i.comment)return alert("Fill please all fields");try{console.log(" formData",i);const t=await U(i);console.log("response",t),G.openModal(t.data.title,t.data.message),e.target.reset()}catch(t){console.error("error",t)}}function Q(){const e=document.querySelector("[data-modal-close]"),t=document.querySelector("[data-modal-messages]"),n=t.querySelector("[data-modal-title]"),r=t.querySelector("[data-modal-message]");return e.addEventListener("click",()=>{t.classList.remove("is-open")}),t.addEventListener("click",()=>{t.classList.remove("is-open")}),document.addEventListener("keydown",s=>{s.key==="Escape"&&t.classList.remove("is-open")}),{openModal:(s,o)=>{s&&(n.textContent=s),o&&(r.textContent=o),t.classList.add("is-open")},closeModal:()=>t.classList.remove("is-open")}}g.settings({messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});const W=document.querySelectorAll(".faq-item");W.forEach(e=>{e.querySelector(".faq-question").addEventListener("click",()=>{e.classList.toggle("open")})});document.addEventListener("DOMContentLoaded",()=>{X()});
//# sourceMappingURL=index.js.map
