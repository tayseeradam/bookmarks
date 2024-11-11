const formElement = document.querySelector('form');
let bookMarks = [];


document.addEventListener('DOMContentLoaded',() =>{
   const getBookmarkFromLS = localStorage.getItem('bookmarks');
   if (! getBookmarkFromLS) {
     localStorage.setItem('bookmark',JSON.stringify(bookMarks));
     return;
   }
   if (getBookmarkFromLS.length === 0) {
     bookmarks = JSON.parse(getBookmarkFromLS);
   }
 });


 formElement.addEventListener("submit", (e) => {
   e.preventDefault();
   const websiteName = document.getElementById("websiteName").value;
   const WebsiteUrl  = document.getElementById("websiteUrl").value;
   
   const bookmark = {
     id: Math.random,
     websiteName: websiteName,
     WebsiteUrl: WebsiteUrl,
   };
   console.log(bookmark)

   bookMarks.unshift(bookmark);
   localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
   formElement.reset();
   presentBookmark();
 });

 const presentBookmark = () => {
   const section = document.querySelector("section");
   section.innerHTML = "";
   bookMarks.forEach((bookmark, index) => {
     const card = document.createElement("div");
     card.classList.add("container");
     card.innerHTML = `
   <h4>${bookmark.websiteName}</h4>
   <a href="#"><i class="fa fa-external-link" aria-hidden="true"></i>${bookmark.WebsiteUrl}</a>
   <div>
       <button id='button1' onclick='editBookmark(${index})'><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
</i>Edit</button>
       <button id='button2' onclick='deleteBookmark(${index})' ><i class="fa fa-trash" aria-hidden="true"></i>Delete</button>
   </div>
   `;
   section.appendChild(card);
   });
 };
 
