import{a as f}from"./mobileMenuBurger-6226215d.js";(()=>{const t={openModalBtn:document.querySelector("#openModalLink"),closeModalBtn:document.querySelector(".modalWindow-btn"),modalWindow:document.querySelector(".modalWindow")};t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",n);function n(){t.modalWindow.classList.toggle("is-hidden")}})();async function k(t){if(t.toLowerCase(),typeof e=="string"&&e.toLowerCase()==="all categories"){window.location.href="index.html";return}const n=`https://books-backend.p.goit.global/books/category?category=${t}`;try{const d=(await f.get(n)).data,a=document.getElementById("result-container");a.innerHTML="";const o=t.split(" ");if(o.length>1){const s=o.pop();o.push(`<span style="color: #4F2EE8;">${s}</span>`)}const l=o.join(" "),g=document.createElement("h2");if(g.classList.add("title_books"),g.innerHTML=l,a.appendChild(g),d.length===0){const s=document.createElement("p");s.classList.add("categoryesNotFound"),s.textContent="Вибраної категорії не існує. Виберіть іншу категорію.",a.appendChild(s)}else{const s=document.createElement("ul");s.className="bestseller",d.forEach(i=>{const r=document.createElement("li");r.className="book-item",r.id=`book-${i._id}`;const m=document.createElement("a");m.href="/book-details.html?id="+i._id;const E=document.createElement("div"),u=document.createElement("img");u.classList.add("book-wrap"),u.src=i.book_image||"../images/plug picture/plug335x485@1x.jpg",u.alt=i.title,E.appendChild(u);const p=document.createElement("div");p.classList.add("noName");const h=document.createElement("p");h.classList.add("book-name"),h.textContent=i.title||"N/A";const L=document.createElement("p");L.classList.add("book-author"),L.textContent=i.author||"N/A",p.appendChild(h),p.appendChild(L),m.appendChild(E),m.appendChild(p),r.appendChild(m),s.appendChild(r)}),a.appendChild(s)}}catch(c){console.error("Error fetching books:",c)}}k();const b="https://books-backend.p.goit.global/",y=document.querySelector(".categories");async function v(){try{const{data:t}=await f.get(`${b}books/category-list`),n={list_name:"All categories"};t.unshift(n),B(t);const c=t[0].categoryLink;c&&c.classList.add("active-category")}catch(t){console.error("Помилка при отриманні категорій:",t)}}async function B(t){y.innerHTML="";const n=document.createElement("ul");n.classList.add("book_list"),t.forEach(c=>{const{list_name:d}=c,a=document.createElement("li");a.classList.add("category_item");const o=document.createElement("a");o.textContent=d,o.addEventListener("click",async()=>{await k(d),t.forEach(l=>{l.categoryLink.classList.remove("active-category")}),o.classList.add("active-category")}),o.classList.add("category_link"),["focus","blur","mouseover","mouseout"].forEach(l=>{o.addEventListener(l,()=>{l==="focus"||l==="mouseover"?o.classList.add("uppercase"):o.classList.remove("uppercase")})}),c.categoryLink=o,a.appendChild(o),n.appendChild(a)}),y.appendChild(n)}v();const C=document.querySelector(".go-top");window.addEventListener("scroll",M);C.addEventListener("click",w);function M(){const t=document.documentElement.scrollTop,n=document.documentElement.clientHeight;C.classList.toggle("show",t>n)}function w(){document.documentElement.scrollTop>0&&(window.scrollBy(0,-40),requestAnimationFrame(w))}
