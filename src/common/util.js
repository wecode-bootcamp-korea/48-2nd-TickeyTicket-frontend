export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&()._-])[A-Za-z\d$@$!%*#?&()._-]{8,}$/;

// 닉네임에 사용되는 한글 + 영어 + 숫자 정규식
export const nicknameRegex = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,8}$/;

// 전화번호 입력하는 정규식
export const numRegex = /^[0-9]{8,13}$/;

// 한글 여부 확인 정규식
export const krRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

// 이름 여부 확인 정규식
export const nameRegex = /^[가-힣]{2,5}/;

// 단어 공백제거하는 함수
export const trimmingKeyword = keyword => keyword.replace(/ /g, '');
