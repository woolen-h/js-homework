const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

// 이메일 유효성
function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

// 비밀번호 유효성
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 이메일 입력 시 유효성 검사
document.getElementById("userEmail").addEventListener("input", (e) => {
  const inputEmail = e.target.value;
  const emailValid = emailReg(inputEmail);
  const emailErrorElement = document.getElementById("userEmailError");
  const emailInputElement = document.getElementById("userEmail");

  // email 정규표현식을 사용한 조건처리
  if (!emailValid) {
    emailErrorElement.classList.add("is--invalid");
    emailInputElement.classList.add("input-error");
  } else {
    emailErrorElement.classList.remove("is--invalid");
    emailInputElement.classList.remove("input-error");
  }
});

// 비밀번호 입력 시 유효성 검사
document.getElementById("userPassword").addEventListener("input", (e) => {
  const inputPw = e.target.value;
  const pwValid = pwReg(inputPw);
  const passwordErrorElement = document.getElementById("userPasswordError");
  const passwordInputElement = document.getElementById("userPassword");

  // pw 정규표현식을 사용한 validation
  if (!pwValid) {
    passwordErrorElement.classList.add("is--invalid");
    passwordInputElement.classList.add("input-error");
  } else {
    passwordErrorElement.classList.remove("is--invalid");
    passwordInputElement.classList.remove("input-error");
  }
});

// 로그인 버튼 클릭 시 처리 함수
const handleLogin = (e) => {
  e.preventDefault(); // 폼 제출 이벤트 중단

  const inputEmail = document.getElementById("userEmail").value;
  const inputPw = document.getElementById("userPassword").value;

  const emailValid = emailReg(inputEmail);
  const pwValid = pwReg(inputPw);

  if (!emailValid || !pwValid) {
    alert("이메일 또는 비밀번호 형식이 올바르지 않습니다.");
    return;
  }
  // 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
  // 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
  if (inputEmail !== user.id || inputPw !== user.pw) {
    alert("이메일 또는 비밀번호가 일치하지 않습니다.");
    return;
  }

  alert("로그인 성공!");
  // 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
  window.location.href = "./welcome.html";
};

document.querySelector(".login-form").addEventListener("submit", handleLogin);
