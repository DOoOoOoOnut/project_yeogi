# 2024/02/01 ~ 프로젝트 시작
* 02/01 작업 내용
1. 홈페이지 확정 : 여기어때
2. 역할분담 : 발표(일혁),메인서기(민아),서브서기(은지),발표자료(다은)
3. 오늘 작업한 내용
- 일혁: 홈페이지 구성파악 및 사이트맵
- 다은: 동적기능 정리 및 사용할 API사이트 정리
- 민아: 스타일가이드 작업
- 은지: 홈페이지 이미지 다운 및 페이지 캡쳐 및 이미지 class 만들기

## 개별 분담 페이지
- 일혁: 숙소 상세페이지 / 이용약관페이지 / 비회원예약조회, 공지사항
- 다은: 숙소 검색페이지(지도팝업포함) / 로그인페이지 / 회원가입페이지
- 민아: 메인페이지 / 서비스문의,혜택 / 숙소 예약페이지
- 은지: 마이페이지 / 고객센터(챗gpt추가) / 이벤트 전체,상세페이지

## 작업
- 반응형 웹 크기: 데스크탑 너비 1400 / 노트북 너비 1200 / 태블릿 너비 900 / 모바일 너비 430

## 여기어때 홈페이지 수정해야 할 부분
1. header
- 이벤트 카테고리 삭제
- 고객센터 마이페이지 안에 넣기

2. nav추가
- 에어비앤비 카테고리를 이벤트 배너 위에 넣기
- nav종류 : 국내여행지 / 해외여행지 / 인기검색키워드 / 마이페이지
--> 인기검색키워드: 슬라이드형식(오늘의집 참고)

3. 예약기능
- 에어비앤비처럼 변경
- 여행지 선택하면 자동으로 날짜선택 할 수 있게 넘어가는 기능 추가
- 뒤에 이미지 애니메이션 넣기 / 시간 지나면 제자리에서 스르륵 이미지 바뀌게(20s)

4. 회원가입
- 우편번호 검색 추가

5. 기타
- 하단고정버튼추가 : top버튼 / 챗GPT
--> 챗GPT 기능 : 검색 혹은 추천여행지
- 지역별로 대표 페이지 하나씩 만들어서 상세페이지는 반복하는걸로
- 검색저장되는 기능 삭제(검색창에 남아있는 글 삭제)

-----------------------------------------------------------------
- gitHub주소 : https://github.com/DOoOoOoOnut/project_yeogi.git
- Figma주소 : https://www.figma.com/file/jBgjvFMuj70w786UyRKf4a/%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8!!!?type=design&node-id=0%3A1&mode=design&t=Om2TsDX2O7MjstnR-1
- 스타일가이드 주소 : https://www.figma.com/file/EPMmNUXDbWR7hIl8dyCVW6/Style-Guide?type=design&node-id=0%3A1&mode=design&t=YM2zPhYZo6oPD45l-1

### 작업규칙
- push하기 전/후에 꼭 말하기
- pull하고 push하기
- 어느부분 수정하고 작업했는지 commit메세지로 적어주기
- 하루 작업량 엑셀파일 혹은 단톡방에 말해주기
- 클래스명 언더바로 고정

### 팀규칙
- 개인의견이 지나칠시에 제지해주기
- 모든 의견에 대해서 각자의 생각을 전부 들어보기
- 모르는거 막히는거 있으면 부끄럼없이 물어보기
- 불만있으면 바로 얘기해서 그자리에서 풀기
- 갑자기 연락이 안된다거나 사라지지 않기
- 문제생기면 바로 얘기하기(안되는날 미리 말하기)

### 클래스 규칙
- container > wrap > box > detail
- 눌렀을 때 다른 주소로 넘어가면 a
- 그냥 눌리는건 button
- section같이 크게 묶는 박스에 id 사용
- 한페이지에 넘어가면 page

### html명 규칙
- 같은 주제로 파생되는 페이지라면
- 큰갈래_페이지키워드.html
ex) event_newyear.html

### 이미지 파일명 규칙
* ./images/폴더명(html명)/용도(큰틀)_분류숫자
- 이미지 폴더명은 html명으로 통일하기
- 숫자 앞에는 언더바 쓰지 않기
- 숫자는 세자리로
ex) ./images/main/ _best_hotel001

### 주석 규칙
1. 레이아웃 박스에는 무조건 써주기 / 너무 작은 단위에는 상의하고 쓰기
2. 나중에 추가할 동적 기능 고려해서 주석으로 표시해주기 (js)
3. fa 등 나중에 추가할 디자인도 주석 써주기

-----------------------------------------------------------------

# 02/02 작업
- 일혁 공지사항 (완료), 비회원예약조회 (작업중)
- 다은 검색페이지(완료), 가입약관페이지(완료), 로그인페이지(완료) 
- 민아
1. index.scss main.scss :
(국내여행지 / 해외여행지 / 인기검색어 메뉴 추가 - 기존: 이벤트 / 고객센터 삭제
-> 고객센터 카테고리는 마이페이지 안에 넣음)
2. footer(완료)
(기존: 카카오 문의 삭제)
- 은지
1. 이미지 이름주기:index 부분 완료
2. 마이페이지작업: 예약내역 / 포인트

------------------------------------------------------------

# 02/04 작업

- 다은 
* 회원가입 페이지(join_000) html 완료
- 은지
1. 마이페이지작업:포인트(팝업) / 쿠폰 / 내 정보 관리 / 설정 완료
2. 고객센터: 완료

---------------------------------------------------------
# 02/05 작업

- 일혁
1. 비회원 예약페이지 완성, 숙소상세페이지 80%완성
- 다은
1. raw.html 완성
2. css 시작: join_raw.scss, login.scss 완성
3. scss 변수생성: 스타일가이드 기반으로 common.scss 파일에 변수만들기
- 은지
1. 고객센터 완성
2. 이벤트 목록 완성
3. 이벤트 내용 1개 완성

-----------------------------------------------------------
# 02/06 작업
- 은지
1. 이벤트 내용 1개 완성

-----------------------------------------------------------
# 02/07 작업
- 일혁
1. detail.page 추가작업
- 다은
1. 로그인 페이지, 가입 페이지 js 시작
2. search.html scss 완료
- 은지
1. html 수정
2. event.scss 완
- 민아
1. pay.html 구조 완성

-----------------------------------------------------------
# 02/08 작업
- 일혁
1. detail.page 구조 완성 (swiper 컨펌 완료)
- 다은
1. search.scss 완료
2. join_phone.js 완성
- 은지
1. event_best_sole.scss완성
2. event_new_year.scss 작업중
- 민아
1. service_inquiry.html 완성
2. footer_event.html 완성
3. index.html fixed버튼 추가 / 검색창 수정

-----------------------------------------------------------
# 02/09 작업
- 민아
1. 폰트어썸 전부 넣기 완료
2. 모바일 nav 완성

-----------------------------------------------------------
# 02/10 작업
- 은지
1.  event_new_year.scss 완성
2. 고객센터 scss 작업중

-----------------------------------------------------------
# 02/11 작업
- 은지
1. 마이페이지 scss : 예약확인 완료 / 포인트 작업중
- 일혁 
1. notice, notice_detail scss 완성

-----------------------------------------------------------
# 02/13 작업
- 은지
1. 마이페이지 scss : 포인트 완성 /  쿠폰 완성 / 내 정보 확인 작업 중
- 일혁 
1. 상세페이지 css 작업 / 비회원 예약조회 css 작업 시작
- 민아
1. index.css 작업 : header / footer css 작업하기
2. main.css 작업 : main css 작업하기

-----------------------------------------------------------
# 02/14 작업
- 은지
1. 마이페이지: 내 정보 확인 완성 / 설정 완성 /   마켓팅 수신 동의 완성 / 회원탈퇴 완성
2. 챗GPT 디자인 수정
3. 다른 사람들 도와주기 : footer.scss 완성
- 일혁 
1. 비회원 예약 상세 페이지 css 작업 완료
2. 일반 상세페이지 css 작업 중
- 민아
1. index.scss 작업
2. main.scss 작업
- 다은
1. search.scss 완료
2. data 파일 만들기
3. search.js 30% 완료

-----------------------------------------------------------
# 02/15 작업
- 은지
1. 팀원 도와주기 : raw.scss 작업 (html 약간 수정)
2. event_new_year.js 완료
3. event_best_sole.js
- 일혁 
1. css 상세페이지 작업중
- 민아
1. index.scss 작업 : hover 효과
2. index.scss main.scss : footer.scss 작업하기
- 다은
1. search.js 80% 완성 : 네이버 지도 api 삽입 / js 단계 정리 / 데이터 필요한 부분 외 완료
2. login.js 100% 완성
3. 데이터파일 만들기 : accommodation.json 내에 기본 틀 정한 후 임시로 3개만 만들어둠
4. search.scss 오류 해결하기
5. 팀원 도와주기 : service_inquiry.scss

---------------------------------------------------------
# 02/16 회의
1. 전체적인 사이즈 통일
2. 폰트사이즈 확인 후 수정
3. 폰트두께는 font-family로 적용
4. 18일까지 수정 및 css마무리

---------------------------------------------------------
# 02/16 작업
- 민아
1. pay.scss 작업
2. header 수정
3. 파비콘 넣기 완료
- 일혁
1. 상세페이지 css 작업중
- 다은
1. search.scss 오류 해결하기
2. 팀원 도와주기
3. 필터 기능 마무리
- 은지
1. event_new_year.js 수정 중
2. user_info.html 수정 (정보 수정 되게)
3. 파비콘 삽입

---------------------------------------------------------
# 02/19 작업
반응형 시작 ~ 내일까지 완성