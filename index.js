const myInfo = [
    {
      id: "crud",
      password: "0000",
    },
  ];
  
  const login = document.querySelector("#myLogin");
  const myId = document.querySelector("#myId");
  const password = document.querySelector("#myPW");
  
  login.addEventListener("click", () => {
    if (myId.value === myInfo[0].id) {
      if (password.value === myInfo[0].password) {
        window.location.href = "./board/list.html";
        alert("로그인 되었습니다");
      } else {
        alert("잘 못 입력되었습니다.");
        window.location.reload(true);
      }
    } else {
      window.location.reload();
    }
  });