import Storage from "../lib/storage.js";

const storage = new Storage();
const list = storage.get();

const createRow = (row) => `
<tr>
  <td>${row.id}</td>
  <td><a href="./view.html?id=${row.id}">${row.title}</a></td>
  <td>${row.writer}</td>
  <td>${row.created_at}</td>
  <td>${row.hit}</td>
</tr>
`;

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000);
}
