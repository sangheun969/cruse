import BoardRow from "../lib/boardRow.js";

import Storage from "../lib/storage.js";
const storage = new Storage();

const form = document.querySelector("#writeform");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = e.target.title.value;
  const writer = e.target.writer.value;
  const content = e.target.content.value;

  const id = storage.incrementId();
  const dataRow = {
    id: id,
    title: title,
    writer: writer,
    content: content,
  };
  const boardRow = new BoardRow(dataRow);
  console.log(BoardRow);

  storage.set(boardRow);

  location.href = `/board/view.html?id=${id}`;
});
