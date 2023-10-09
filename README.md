
# 퇴근길 (Toe-Geun-Gil)
### &nbsp;: &nbsp;퇴근 후 직장인들의 취미 플랫폼

<img width="700" alt="퇴근길 로고 이미지" src="https://github.com/Teddybear-6/.github/assets/130436337/140e23f8-7ea8-4ac2-abfe-660d778c15cc">

<br><br>

## 팀 소개

### [ Team. Teddybear-6 ]

- [강소임(Notice)](https://github.com/afdsj) <br>
- [고민영(Social)](https://github.com/bearnyong) <br>
- [김민지(QnA)](https://github.com/KMJs680) <br>
- [김형통(User)](https://github.com/httt56 ) <br>
- [이단비(Community)](https://github.com/daneeb1) <br>
- [전지환(Hobby)](https://github.com/jjjh0508)

<br>

### [ 작업 ]
- [BACK_REPOSITORY](https://github.com/Teddybear-6/Back_ToeGeunGil) <br>
- [FRONT_REPOSITORY](https://github.com/Teddybear-6/Front_ToeGeunGil) <br>

<br><br><br>

## 프로젝트 소개

<img width="500" alt="퇴근길 로고 이미지" src="https://github.com/Teddybear-6/.github/assets/130436337/4c493406-29ef-4f98-90c8-5a9c9ef65f79">

<br><br>

### [ 개요 ]
- 명칭 &nbsp;:&nbsp; <u>***퇴근길***</u> (Toe-Geun-Gil)
- 개발 인원 &nbsp;:&nbsp; 6명 (Team_ Teddybear-6)
- 개발 기간 &nbsp;:&nbsp; 2023.09.01 ~ 2023.09.24
- 배포 사이트  &nbsp;:&nbsp; [toegeungil.shop](http://toegeungil.shop/)

<br>

### [ 주요 기능 ]
- 강사가 강의하는 다양한 취미 클래스 참여
- 취미가 비슷하거나 같은 사용자들끼리의 모임형성 및 참여
- 취미에 대한 고민과 방법을 나눌수있는 커뮤니티 형성

<br>

### [ Target ]
- 퇴근길에 뭐할지 고민하는 직장인들
- 여가시간에 새로운 취미생활을 원하는 직장인들
- 취미가 비슷하거나 같은 사용자들끼리의 커뮤니케이션을 원하는 이들

<Br><br><br>

## 개발 환경 및 기술 소개
### [ 기술스택 및 개발 환경 ]
<img width="550" alt="기술스택 및 개발환경 이미지" src="https://github.com/Teddybear-6/Front_ToeGeunGil/assets/130436427/1679946a-b1db-46cd-9876-62559795371b">

<br>

### [ 시스템 아키텍처 ]
<img width="550" alt="시스템 아키텍처 이미지" src="https://github.com/Teddybear-6/Front_ToeGeunGil/assets/130436427/ba7777c8-1b30-48ef-831d-fb3d3dd8aeda">

<br>

### [ Branch 관리 ]
[ Git Flow ] 브랜치 전략을 사용하여 프로젝트를 진행하였습니다. <br>
<img width="550" alt="Git Flow 전략 이미지" src="https://github.com/Teddybear-6/Front_ToeGeunGil/assets/130436427/895a2bb6-97f5-46f6-86cd-f63619c5e916">
- main : 실제 배포를 위한 main 브랜치
- develop : main 브랜치에 영향을 주지 않으면서 개발하기 위해서 사용
- feature : develop을 개발하면서 기능 단위로 develop 서버에 영향을 주지 않기 위해서 사용

<br><br><br>

## 스웨거 (Swagger)
### [ 스웨거 명세서 ]
[퇴근길 스웨거 명세서 확인하기](http://toegeungil.shop:8001/swagger-ui/) <br>

<br>

### [ API 설계 ]
|기능|Method|URL|
|:---|:---:|:---:|
|로그인|POST|login|
|회원가입|POST|user/regist|
|이메일유무확인|POST|user|findEmail|
|임시비밀번호발송|POST|user/emailComfirm|
|취미 전체 조회|GET|hobbys|
|취미 단일 조회|GET|hobbys/{hobbysCode}|
|취미 등록|POST|hobbys|
|취미 수정|PUT|hobbys|
|취미 삭제|DELETE|hobbys|
|강사별 취미 조회|GET|hobbys/tutor|
|커뮤니티 별 댓글 목록|GET|communitys/comments/{communitysNum}|
|커뮤니티 별 댓글 작성|POST|communitys/comments/{communitysNum}/{commentNum}|
|커뮤니티 작성|POST|communitys|
|커뮤니티 수정|PUT|communitys|
|커뮤니티 목록|GET|communitys|
|소셜 전체 조회|GET|socials|
|소셜 단일 조회|GET|socials/{socialsNum}|
|소셜 작성|POST|socials|
|소셜 수정|PUT|socials|
|소셜 게시글 별 참여 리스트|GET|participate/{socialNum}|
|공지사항 전체 조회|GET|notices|
|공지사항 단일 조회|GET|notices/{noticeNum}|
|공지사항 등록|POST|notices|
|공지사항 수정|PUT|notices/{noticeNum}|
|공지사항 삭제|DELETE|notices/{noticeNum}|
|질문 전체 조회|GET|qeustions|
|질문 단일 조회|GET|qeustions/{questionID}|
|질문 등록|POST|qeustions|
|질문 수정|PUT|qeustions/{questionID}|
|질문 삭제|DELETE|answers/{questionID}|
|답변 전체 조회|GET|answers|
|답변 단일 조회|GET|answers/{questionID}|
|답변 등록|POST|answers|
|답변 수정|PUT|answers/{answerID}|
|답변 삭제|DELETE|answers/{answerID}|
