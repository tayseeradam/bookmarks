const formElement = document.querySelector('form');
let bookMarks = [];


document.addEventListener('DOMContentLoaded', () => {
  const getBookmarkFromLS = localStorage.getItem('bookMarks');
  if (getBookmarkFromLS) {
    bookMarks = JSON.parse(getBookmarkFromLS);
  }
  presentBookmark(); 
});


formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const websiteName = document.getElementById("websiteName").value;
  const websiteUrl = document.getElementById("websiteUrl").value;

  const bookmark = {
    id: Math.random(), 
    websiteName: websiteName,
    websiteUrl: websiteUrl,
  };

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
      <a href="${bookmark.websiteUrl}" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i> ${bookmark.websiteUrl}</a>
      <div>
        <button id='editButton' onclick='editBookmark(${index})'><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</button>
        <button id='deleteButton' onclick='deleteBookmark(${index})'><i class="fa fa-trash" aria-hidden="true"></i>Delete</button>
      </div>
    `;
    section.appendChild(card);
  });
};


const deleteBookmark = (index) => {
  bookMarks.splice(index, 1);
  localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
  presentBookmark(); 
};


const editBookmark = (index) => {
  const bookmark = bookMarks[index];
  document.getElementById("websiteName").value = bookmark.websiteName;
  document.getElementById("websiteUrl").value = bookmark.websiteUrl;

 
  deleteBookmark(index);

 
};
