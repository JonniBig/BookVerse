import"./mobileMenuBurger-3051bb5a.js";const e=document.querySelector(".book-shop-list"),n=document.querySelector(".empty-list");document.querySelector(".tui-pagination");const s=JSON.parse(localStorage.getItem("ListOfBooks"));l();function l(){if(s.length===0){n.classList.remove("is-hidden"),e.innerHTML="",e.classList.add("is-hidden");return}e.classList.remove("is-hidden"),n.classList.add("is-hidden"),e.innerHTML="",e.insertAdjacentHTML("beforeend",m(s)),document.querySelectorAll(".icon-damp").forEach(o=>o.addEventListener("click",g))}function g(o){o.preventDefault();const i=o.target.id,a=s.findIndex(t=>t._id===i);s.splice(a,1),localStorage.removeItem("ListOfBooks"),localStorage.setItem("ListOfBooks",JSON.stringify(s)),l()}function m(o){return o.flatMap(({book_image:i,title:a,list_name:t,description:d,author:c,buy_links:r,_id:p})=>`<li class="shop-list-item">
              <svg class="icon-damp" width="28" height="28">
                <use href="../images/icomoon.svg#icon-dump" id="${p}"></use>
              </svg>
         
           <img
             src="${i}"
             alt="${a}"
             class="shop-book-img"
             loading="lazy"
             width="100px"
             height: 142px;
             />
         
          <div class="info-box">
           <h3 class="book-title">${a}</h3>
           <p class="book-category">${t}</p>
           <p class="book-deskr" id="style-4">${d}</p>
           <div class="bottom-card-book">
             <p class="book-author-bottom">${c}</p>
             <div class="book-links">
               <a href="${r[0].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Amazon">
                 <img src="../images/shopingList/amazon.png" alt="Logo Amazon" width="32px" class="link-1"/>
               </a>
               <a href="${r[1].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Apple book shop">
                 <img src="../images/shopingList/apple.png" alt="Logo Apple book store" width="16px" class="link-2"/>
               </a>
               <a href="${r[4].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Book shop">
                 <img src="../images/shopingList/book_shop.png" alt="Logo book shop" width="16px" class="link-3"/>
               </a>
             </div>
           </div>
          </div>
        </li>`).join(" ")}
