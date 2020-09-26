const browse = document.getElementById("navbar-browse");
const browseList = document.getElementById("navbar-browse-list");

browse.addEventListener("click", () => {
  browseList.classList.toggle("open");
});
