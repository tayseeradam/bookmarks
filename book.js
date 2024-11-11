 const formElement = document.querySelector('form');
 let bookMarks = [];
 document.addEventListener('DOMContentLoaded',() =>{
    const getBookmarkFromLS = localStorage.getItem('bookmarks');
    if (! getBookmarkFromLS) {
      localStorage.setItem('bookmark',JSON.stringify(bookMarks));
      return;
    }
    if(getBookmarkFromLS.length ===0){
      bookMarks = JSON.parse(getBookmarkFromLS);
    }

 });
 formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const websiteName = document.getElementById('websiteName').value;
  const websiteURL = document.getElementById('websiteURL'). value;
  const bookmark = {
  id:Math.random,websiteName : websiteName,websiteURL: websiteURL,
  };
  bookMarks . unshift(bookmark);
  localStorage.setItem('bookmarks',JSON.stringify(bookMarks));
  formElement.reset();
  presenBookmark();
 });
 const presenBookmark = () => {
  const section = document.querySelector('section');
  section.innerHTML = '';
  bookMarks.forEach((bookmark , index) => {

    const card = document.createElement('dive');
    card.classList.add('container');
    card.innerHTML =`
    <h4>${bookmark.websiteName}</h4>
  <a href="#">
  <i class="fa fa-external-link" aria-hidden="true"></i>${bookmark.WebsiteUrl}</a>
  <div>
      <button id='button1' onclick='editBookmark(${index})'>
      <i class="material-icons">edit_square</i>Edit</button>
      <button id='button2' onclick='deleteBookmark(${index})'>
      <i class="fa fa-trash" aria-hidden="true"></i>Delete</button>
  </div>
  `;
  section.appendChild(card);
  });
};

