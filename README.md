# 프로젝트 명 : 퇴근길 (Toe-Geun-Gil)

## 퇴근길 소개
**퇴근 후에 뭐할지 고민하는 직장인들을 타겟으로 한 취미 플랫폼 클래스 사이트**

- 취미 플랫폼 클래스들을 볼 수 있는 사이트
- 사용자의 관심 지역 및 카테고리 설정을 통한 취미 맞춤 추천
- 취미가 비슷하거나 같은 사용자들끼리의 모임을 관심 지역 및 카테고리로 형성

**주요 Target**
- 퇴근길에 뭐할지 고민하는 직장인들
- 여가시간에 새로운 취미생활을 원하는 직장인들
- 직장 생활을 하는 20-50대
- 취미가 비슷하거나 같은 사용자들끼리의 커뮤니케이션을 원하는 이들

## 개요
- 명칭 : 퇴근길
- 개발 인원 : 6명
- 개발 기간 : 2023.09.01~2023.09.24

## 팀 소개
- Teddybear-6 <br/>
  강소임 https://github.com/afdsj <br/>
  고민영 https://github.com/bearnyong <br/>
  김민지 https://github.com/KMJs680 <br/>
  김형통 https://github.com/httt56 <br/>
  이단비 https://github.com/daneeb1 <br/>
  전지환 https://github.com/jjjh0508 <br/>
  
### 퇴근길 - BACK REPOSITORY
https://github.com/Teddybear-6/Back_ToeGeunGil

### 퇴근길 - FRONTEND REPOSITORY
https://github.com/Teddybear-6/Front_ToeGeunGil

## 기술스택 및 개발 환경
<img width="550" alt="아키텍처" src="https://github.com/Teddybear-6/Front_ToeGeunGil/assets/130436427/1679946a-b1db-46cd-9876-62559795371b">


## 시스템 아키텍처
<img width="550" alt="아키텍처" src="https://github.com/Teddybear-6/Front_ToeGeunGil/assets/130436427/ba7777c8-1b30-48ef-831d-fb3d3dd8aeda">


## Branch 관리
프로젝트를 하면서 Git Flow 브랜치 전략을 사용했습니다
<img width="550" alt="아키텍처" src="https://github.com/Teddybear-6/Front_ToeGeunGil/assets/130436427/895a2bb6-97f5-46f6-86cd-f63619c5e916">
- main : 실제 배포를 위한 main 브랜치
- develop : main 브랜치에 영향을 주지 않으면서 개발하기 위해서 사용
- feature : develop을 개발하면서 기능 단위로 develop 서버에 영향을 주지 않기 위해서 사용

## API 설계
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
