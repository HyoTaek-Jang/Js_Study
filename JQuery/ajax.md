# Ajax

## 21년 1월 25일

- Ajax : 비동기 방식의 js와 XML
- 사용하는 이유 : 화면 전환 없이 클라이언트와 서버간에 정보를 교환하기 위해. 싱글 페이지 어플리케이션 구현 가능
- fetch의 방법을 쓴느거 같음.
- fetch api 원리
  - fetch('~') ~를 서버에 요청함 .then 은 작업이 끝나면 콜백함수를 불러줌
- hash : url 맨위에 #one(id값) 이런거 같은 페이지지만 href로 이동하거나 할때 씀 js에서 location.hash 로 알아낼수이씀 #이 해쉬 !는 뱅 보통 북마크로 쓸때 #!~~로 씀 해쉬뱅
- .substr(1)하면 one이 나옴
- hash의 문제. 검색엔진이 정상작동이 안됨. 실제 내용은 백엔드에서 가져오고 네비게이션했을때 내용이 안바뀜
- pjax도 많이 씀!!!

## 21년 1월 26일

- ajax 관련 메서드들

  - load() 외부 컨텐츠 가져올 때
  - $.ajax() 데이터를 서버에 http, post, get 방식으로 전송, json xml 등의 유형에 데이터를 요청 할 수 있는 통합 메서드
  - .ajaxStop Success Complete 비동식 방식으로 서버에 요청이 완료, 성공, 통신 완료가 되면 함수 실행
  - $().load(url, data, callback) url에 데이터를 전공하고 외부 콘텐츠를 요청하여 가져올때 사용
  - $.ajax() 지정한 url 경로에 파일의 데이터를 전공하고 입력한 url로부터 요청한 데이터를 불러옴.

    - ```
      $.ajax({
        url: "page",
        type : "전송 방식 GET POST",
        data : "요청한 데이터 형식 html xml json",
        success : function(data){
          성공하면 진행될 코드
        },
        error: function(){
          실패코드
        }
      })
      ```
      - 이거 외에도 옵션으로 contentType ... etc 여러 옵션이있음.
