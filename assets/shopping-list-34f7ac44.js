import"./mobileMenuBurger-893341bd.js";const e=document.querySelector(".book-shop-list"),n=document.querySelector(".empty-list");document.querySelector(".tui-pagination");const s=JSON.parse(localStorage.getItem("ListOfBooks"));l();function l(){if(s.length===0){n.classList.remove("is-hidden"),e.innerHTML="",e.classList.add("is-hidden");return}e.classList.remove("is-hidden"),n.classList.add("is-hidden"),e.innerHTML="",e.insertAdjacentHTML("beforeend",m(s)),document.querySelectorAll(".icon-damp").forEach(o=>o.addEventListener("click",g))}function g(o){o.preventDefault();const i=o.target.id,t=s.findIndex(a=>a._id===i);s.splice(t,1),localStorage.removeItem("ListOfBooks"),localStorage.setItem("ListOfBooks",JSON.stringify(s)),l()}function m(o){return o.flatMap(({book_image:i,title:t,list_name:a,description:c,author:d,buy_links:r,_id:p})=>`<li class="shop-list-item">
              <svg class="icon-damp" width="28" height="28">
                <use href="../images/icomoon.svg#icon-dump" id="${p}"></use>
              </svg>
         
           <img
             src="${i}"
             alt="${t}"
             class="shop-book-img"
             loading="lazy"
             width="100px"
             height: 142px;
             />
         
          <div class="info-box">
           <h3 class="book-title">${t}</h3>
           <p class="book-category">${a}</p>
           <p class="book-deskr" id="style-4">${c}</p>
           <div class="bottom-card-book">
             <p class="book-author-bottom">${d}</p>
             <div class="book-links">
               <a href="${r[0].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Amazon">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/amazon.png" alt="Logo Amazon" width="32px" class="link-1"/>
               </a>
               <a href="${r[1].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Apple book shop">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/apple.png" alt="Logo Apple book store" width="16px" class="link-2"/>
               </a>
               <a href="${r[4].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Book shop">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/book_shop.png" alt="Logo book shop" width="16px" class="link-3"/>
               </a>
             </div>
           </div>
          </div>
        </li>`).join(" ")}
