import { getParams } from "../lib/utils.js"
import Storage from "../lib/storage.js"

try {
  const storage = new Storage()
  // 쿼리스트링에서 id 가져와서 구조분해할당
  const {id} = getParams()
  // id로 게시글 객체 찾아오기
  const row = storage.getById(id)

  // element 가져오기
  const title = document.querySelector("#title")
  const writer = document.querySelector("#writer")
  const content = document.querySelector("#content")

  // 내용 채우기
  title.innerHTML = row.title
  writer.innerHTML = row.writer
  content.innerHTML = row.content

  // 수정 페이지 로더
  document.querySelector("#modify").href = `./modify.html?id=${id}`

  // 삭제 버튼
  const deleteButton = document.querySelector("#delete")
  deleteButton.addEventListener("click", () => {
    storage.delete(id)
    location.href = "./list.html"
  })

} catch (e) {
  alert(e.message)
  location.href = "./list.html"
}