import{a as r}from"./mobileMenuBurger-3e4825a4.js";const d=document.querySelector(".bestseller"),p="https://books-backend.p.goit.global/books/top-books";async function i(){const s=`${p}`;return(await r.get(s)).data}i();async function g(s){try{(await i(s)).map(a=>u(a))}catch{console.error("Try again!")}}g();function u(s){const{list_name:t,book_image:a,author:o,title:e}=s,c=`
  <div class="best_list">
    <h2 class="best_list_name">${t}</h2>
    <div class="best_list_item">
      <a class="best_list_link" href="${a}">
         <img src="${a}" alt="${e}" width="300" loading="lazy" />
      </a>
      <p class="best_list_title">${e}</p>
      <p class="best_list_author">${o}</p>
    </div>
  </div>`;d.insertAdjacentHTML("beforeend",c)}const m="https://books-backend.p.goit.global/",n=document.querySelector(".categories");async function L(){try{const t=(await r.get(`${m}books/category-list`)).data,a={list_name:"All categories"};t.unshift(a),y(t);const o=t[0].categoryLink;o&&o.classList.add("active-category")}catch(s){console.error("Помилка при отриманні категорій:",s)}}async function y(s){n.innerHTML="";const t=document.createElement("ul");t.classList.add("book_list"),s.forEach(a=>{const o=document.createElement("li");o.classList.add("category_item");const e=document.createElement("a");e.textContent=a.list_name,e.addEventListener("click",async()=>{const c=a.list_name;await fetchBooksForCategory(c),s.forEach(l=>{l.categoryLink.classList.remove("active-category")}),e.classList.add("active-category")}),e.classList.add("category_link"),e.addEventListener("focus",()=>{e.classList.add("uppercase")}),e.addEventListener("blur",()=>{e.classList.remove("uppercase")}),e.addEventListener("mouseover",()=>{e.classList.add("uppercase")}),e.addEventListener("mouseout",()=>{e.classList.remove("uppercase")}),a.categoryLink=e,o.appendChild(e),t.appendChild(o)}),n.appendChild(t)}L();
