import{a as h}from"./mobileMenuBurger-8b72c297.js";const b=document.querySelector(".bestseller"),C="https://books-backend.p.goit.global/books/top-books";async function y(){return(await h.get(C)).data}y();async function E(t){try{(await y(t)).map(n=>v(n))}catch{console.error("Try again!")}}E();function v(t){const{list_name:e,books:n}=t,i=`
  <div class="best_list">
    <h2 class="best_list_name">${e}</h2>
     <ul>
         ${n.map(r=>S(r)).join("")}
      </ul>
      <button type="button" class="see-more">SEE MORE</button>
  </div>
  `;b.insertAdjacentHTML("beforeend",i)}function S({book_image:t,title:e,author:n}){return`<img width="218" height="auto" src="${t}" alt="${e}"/>
    <div'>
      <p>${e}</p>
      <p>${n}</p>
    </div>`}const $=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"united.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"medical.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"medecins.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"action.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"world.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"sergiy.png"}],m=document.querySelector(".found-list"),u=document.querySelector(".found-down");_();u.addEventListener("click",M);function M(){u.matches(".found-down")?m.scrollTo({top:500,behavior:"smooth"}):m.scrollTo({top:0,behavior:"smooth"}),u.classList.toggle("found-down"),u.classList.toggle("found-up")}function _(){m.innerHTML=A()}function A(){return $.map(B).join("")}function B(t,e){return`
        <li class="found-item" value="${e+1}">
            <a href="${t.url}" class="found-link" title="${t.title}" target="_blank"> 
                <img src="./images/found/${t.img}" alt="${t.title}" class="found-logo">
            </a>
        </li>
    `}async function w(t){if(t.toLowerCase()==="all categories"){window.location.href="index.html";return}const n=`https://books-backend.p.goit.global/books/category?category=${t}`;try{const r=(await h.get(n)).data,o=document.getElementById("result-container");o.innerHTML="";const s=t.split(" ");if(s.length>1){const a=s.pop();s.push(`<span style="color: #4F2EE8;">${a}</span>`)}const L=s.join(" "),f=document.createElement("h2");if(f.innerHTML=L,o.appendChild(f),r.length===0){const a=document.createElement("p");a.classList.add("categoryesNotFound"),a.textContent="Вибраної категорії не існує. Виберіть іншу категорію.",o.appendChild(a)}else{const a=document.createElement("ul");a.className="categoryes-book-list",r.forEach(d=>{const l=document.createElement("li");l.className="book-item";const c=document.createElement("img");c.classList.add("categoryes-book-img"),c.height=316,c.width=218,c.src=d.book_image||"../images/plug picture/plug335x485@1x.jpg",c.alt=d.title||"N/A";const g=document.createElement("p");g.classList.add("categoryes-title-book"),g.textContent=d.title||"N/A";const p=document.createElement("p");p.classList.add("categoryes-author-book"),p.textContent=d.author||"N/A",l.appendChild(c),l.appendChild(g),l.appendChild(p),a.appendChild(l)}),o.appendChild(a)}}catch(i){console.error("Error fetching books:",i)}}w();const x="https://books-backend.p.goit.global/",k=document.querySelector(".categories");async function T(){try{const{data:t}=await h.get(`${x}books/category-list`),e={list_name:"All categories"};t.unshift(e),j(t);const n=t[0].categoryLink;n&&n.classList.add("active-category")}catch(t){console.error("Помилка при отриманні категорій:",t)}}async function j(t){k.innerHTML="";const e=document.createElement("ul");e.classList.add("book_list"),t.forEach(n=>{const{list_name:i}=n,r=document.createElement("li");r.classList.add("category_item");const o=document.createElement("a");o.textContent=i,o.addEventListener("click",async()=>{await w(i),t.forEach(s=>{s.categoryLink.classList.remove("active-category")}),o.classList.add("active-category")}),o.classList.add("category_link"),["focus","blur","mouseover","mouseout"].forEach(s=>{o.addEventListener(s,()=>{s==="focus"||s==="mouseover"?o.classList.add("uppercase"):o.classList.remove("uppercase")})}),n.categoryLink=o,r.appendChild(o),e.appendChild(r)}),k.appendChild(e)}T();