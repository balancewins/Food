!function(){"use strict";const e=async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()};function t(e,t){const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",t&&clearInterval(t)}function n(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}window.addEventListener("DOMContentLoaded",(()=>{const o=setTimeout((()=>t(".modal",o)),3e4);(function(){const e=document.querySelector(".calculating__result span");let t,n,o,s,a;function c(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function r(){e.textContent=t&&o&&s&&a&&n?"female"===t?Math.round((447.6+9.2*s+3.1*o-4.3*a)*n):Math.round((88.36+13.4*s+4.8*o-5.7*a)*n):"____"}function i(e,o){const s=document.querySelectorAll(e);s.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(n=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",n)):(t=e.target.getAttribute("id"),localStorage.setItem("sex",t)),s.forEach((e=>{e.classList.remove(o)})),e.target.classList.add(o),r()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":o=+t.value;break;case"weight":s=+t.value;break;case"age":a=+t.value}r()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex",t)),localStorage.getItem("ratio")?n=localStorage.getItem("ratio"):(n=1.375,localStorage.setItem("ratio",n)),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),r(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")})(),function(){class t{constructor(e,t,n,o,s,a){this.src=e,this.alt=t,this.title=n,this.description=o,this.price=s;for(var c=arguments.length,r=new Array(c>6?c-6:0),i=6;i<c;i++)r[i-6]=arguments[i];this.classes=r,this.parent=document.querySelector(a),this.roundPrice()}roundPrice(){this.price=Math.round(this.price)}render(){const e=document.createElement("div");0===this.classes.length?(this.classes=["menu__item"],e.classList.add(this.classes)):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.description}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>\n                </div>\n            `,this.parent.append(e)}}e("https://cdn.cur.su/api/latest.json").then((n=>{const o=n.rates.RUB||60;e("http://localhost:3000/menu").then((e=>{e.forEach((e=>{let{img:n,altimg:s,title:a,descr:c,price:r}=e;new t(n,s,a,c,r*o,".menu .container").render()}))}))}))}(),function(e,o){function s(e){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),t(".modal",o);const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>&#10006;</div>\n                <div class="modal__title">${e}</div>\n            </div>\n        `,document.querySelector(".modal").append(a),setTimeout((()=>{a.remove(),s.classList.add("show"),s.classList.remove("hide"),n(".modal")}),3e3)}document.querySelectorAll(e).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",t.insertAdjacentElement("afterend",n);const o=new FormData(t);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((e=>{console.log(e),s("Спасибо! Скоро мы с вами свяжемся"),n.remove()})).catch((()=>{s("Что-то пошло не так...")})).finally((()=>{t.reset()}))}))}))}("form",o),function(e,o,s){const a=document.querySelectorAll(e),c=document.querySelector(o);a.forEach((e=>{e.addEventListener("click",(()=>t(o,s)))})),c.addEventListener("click",(function(e){e.target!==c&&""!=e.target.getAttribute("data-close")||n(o)})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&c.classList.contains("show")&&n(o)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(t(o,s),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",o),function(e){let{container:t,slide:n,nextArrow:o,prevArrow:s,totalCounter:a,currentCounter:c,wrapper:r,field:i}=e;const l=document.querySelector(o),d=document.querySelector(s),u=document.querySelectorAll(n),m=document.querySelector(t),h=document.querySelector(a),f=document.querySelector(c),g=document.querySelector(r),y=document.querySelector(i),v=window.getComputedStyle(g).width;let _=1,p=0;u.length<10?(h.textContent=`0${u.length}`,f.textContent=`0${_}`):(h.textContent=u.length,f.textContent=_),y.style.width=100*u.length+"%",y.style.display="flex",y.style.transition="0.5s all",g.style.overflow="hidden",u.forEach((e=>{e.style.width=v})),m.style.position="relative";const L=document.createElement("ol"),w=[];L.classList.add("carousel-indicators"),m.append(L);for(let e=0;e<u.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.classList.add("dot"),0==e&&(t.style.opacity=1),L.append(t),w.push(t)}function S(e){return+e.replace(/\D/g,"")}l.addEventListener("click",(()=>{p==S(v)*(u.length-1)?p=0:p+=S(v),y.style.transform=`translateX(-${p}px)`,_==u.length?_=1:_++,u.length<10?f.textContent=`0${_}`:f.textContent=_,w.forEach((e=>e.style.opacity=".5")),w[_-1].style.opacity=1})),d.addEventListener("click",(()=>{0==p?p=S(v)*(u.length-1):p-=S(v),y.style.transform=`translateX(-${p}px)`,1==_?_=u.length:_--,u.length<10?f.textContent=`0${_}`:f.textContent=_,w.forEach((e=>e.style.opacity=".5")),w[_-1].style.opacity=1})),w.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");_=t,p=S(v)*(t-1),y.style.transform=`translateX(-${p}px)`,u.length<10?f.textContent=`0${_}`:f.textContent=_,w.forEach((e=>e.style.opacity=".5")),w[_-1].style.opacity=1}))}))}({container:".offer__slider",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",slide:".offer__slide",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"}),function(e,t,n,o){const s=document.querySelectorAll(e),a=document.querySelectorAll(t),c=document.querySelector(n);function r(){a.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),s.forEach((e=>{e.classList.remove(o)}))}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;a[e].classList.add("show","fade"),a[e].classList.remove("hide"),s[e].classList.add(o)}r(),i(),c.addEventListener("click",(t=>{const n=t.target;n&&n.classList.contains(e.slice(1))&&s.forEach(((e,t)=>{n==e&&(r(),i(t))}))}))}(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(e,t){function n(e){return e>=0&&e<10?`0${e}`:e}!function(e,t){const o=document.querySelector(e),s=o.querySelector("#days"),a=o.querySelector("#hours"),c=o.querySelector("#minutes"),r=o.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const e=function(e){const t=Date.parse(e)-Date.parse(new Date);let n,o,s,a;return t<=0?(n=0,o=0,s=0,a=0):(n=Math.floor(t/864e5),o=Math.floor(t/36e5%24),s=Math.floor(t/1e3/60%60),a=Math.floor(t/1e3%60)),{total:t,days:n,hours:o,minutes:s,seconds:a}}(t);s.innerHTML=n(e.days),a.innerHTML=n(e.hours),c.innerHTML=n(e.minutes),r.innerHTML=n(e.seconds),e.total<=0&&clearInterval(i)}l()}(e,t)}(".timer","2022-10-31")}))}();
//# sourceMappingURL=app.js.map