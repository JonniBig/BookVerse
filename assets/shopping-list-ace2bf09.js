import"./mobileMenuBurger-843dabf6.js";const e=document.querySelector(".book-shop-list"),r=document.querySelector(".empty-list");document.querySelector(".tui-pagination");const t=JSON.parse(localStorage.getItem("ListOfBooks"));l();function l(){if(t.length===0){r.classList.remove("is-hidden"),e.innerHTML="",e.classList.add("is-hidden");return}e.classList.remove("is-hidden"),r.classList.add("is-hidden"),e.innerHTML="",e.insertAdjacentHTML("beforeend",m(t)),document.querySelectorAll(".icon-damp").forEach(o=>o.addEventListener("click",g))}function g(o){o.preventDefault();const i=o.currentTarget.id,s=t.findIndex(a=>a._id===i);t.splice(s,1),localStorage.removeItem("ListOfBooks"),localStorage.setItem("ListOfBooks",JSON.stringify(t)),l()}function m(o){return o.flatMap(({book_image:i,title:s,list_name:a,description:c,author:d,buy_links:n,_id:p})=>`<li class="shop-list-item">
             <img
             src="./images/shopingList/dump.png"
             alt="Close button"
             class="icon-damp"
             loading="lazy"
             width="28px"
             height: 28px;
             id="${p}"
             />
         
           <img
             src="${i}"
             alt="${s}"
             class="shop-book-img"
             loading="lazy"
             width="100px"
             height: 142px;
             />
         
          <div class="info-box">
           <h3 class="book-title">${s}</h3>
           <p class="book-category">${a}</p>
           <p class="book-deskr" id="style-4">${c}</p>
           <div class="bottom-card-book">
             <p class="book-author-bottom">${d}</p>
             <div class="book-links">
               <a href="${n[0].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Amazon">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/amazon.png" alt="Logo Amazon" width="32px" class="link-1"/>
               </a>
               <a href="${n[1].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Apple book shop">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/apple.png" alt="Logo Apple book store" width="16px" class="link-2"/>
               </a>
               <a href="${n[4].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Book shop">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/book_shop.png" alt="Logo book shop" width="16px" class="link-3"/>
               </a>
             </div>
           </div>
          </div>
        </li>`).join(" ")}
