import{a as d,f as m}from"./mobileMenuBurger-c32d3e60.js";(()=>{const e={openModalBtn:document.querySelector("#openModalLink"),closeModalBtn:document.querySelector(".modalWindow-btn"),modalWindow:document.querySelector(".modalWindow")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modalWindow.classList.toggle("is-hidden")}})();const u="https://books-backend.p.goit.global/",i=document.querySelector(".categories");async function g(){try{const{data:e}=await d.get(`${u}books/category-list`),o={list_name:"All categories"};e.unshift(o),L(e);const c=e[0].categoryLink;c&&c.classList.add("active-category")}catch(e){console.error("Помилка при отриманні категорій:",e)}}async function L(e){i.innerHTML="";const o=document.createElement("ul");o.classList.add("book_list"),e.forEach(c=>{const{list_name:a}=c,s=document.createElement("li");s.classList.add("category_item");const t=document.createElement("a");t.textContent=a,t.addEventListener("click",async()=>{await m(a),e.forEach(n=>{n.categoryLink.classList.remove("active-category")}),t.classList.add("active-category")}),t.classList.add("category_link"),["focus","blur","mouseover","mouseout"].forEach(n=>{t.addEventListener(n,()=>{n==="focus"||n==="mouseover"?t.classList.add("uppercase"):t.classList.remove("uppercase")})}),c.categoryLink=t,s.appendChild(t),o.appendChild(s)}),i.appendChild(o)}g();const l=document.querySelector(".go-top");window.addEventListener("scroll",y);l.addEventListener("click",r);function y(){const e=document.documentElement.scrollTop,o=document.documentElement.clientHeight;l.classList.toggle("show",e>o)}function r(){document.documentElement.scrollTop>0&&(window.scrollBy(0,-40),requestAnimationFrame(r))}
