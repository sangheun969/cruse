import { getParams } from "../lib/utils.js";
import Storage from "../lib/storage.js";
import BoardRow from "../lib/boardRow.js";

const storage = new Storage();
const form = document.querySelector("#modifyform");
const titleForm = document.querySelector("#title-Form");
const textareaForm = document.querySelector("#textarea-Form");

const { id } = getParams();
const row = storage.getById(id);

titleForm.value = row.title;
textareaForm.value = row.content;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = e.target.title.value;
  const content = e.target.content.value;

  const dataRow = {
    id: id,
    title: title,
    writer: row.writer,
    content: content,
  };

  const boardRow = new BoardRow(dataRow);

  storage.modify(id, boardRow);
  //내아이디의 로컬 스토리지에 저장
  location.href = `/board/view.html?id=${id}`;
});

// 글 수정하기 아이디어
// 뷰에서 수정하기를 누르면 ->
// write.html 과 비슷한 ui의 modify.html 이 나오게됨
// 이때 view 페이지에서 id를 가져와서 id에 해당하는 로컬스토리지를 바꾸어 주면 된다.
// 이때 바뀌지 않는 값인 것은 >> 작성자, 조회수, id는 바뀌지 않고 콘텐츠, created_at

// 아이디어

// 로컬스토리지 배열 [{ }, { }, { }, { }, ]
// id 제목 텍스트 덮어쓰면된다.. 시간

// id 값을 주소로 가져와서
// 쿼리스트링으로 id 값에 해당하는 객체 찾고
// 제목과 콘텐츠에 대한 내용을 날리고 수정되는 데이터를 넣어줘야함
