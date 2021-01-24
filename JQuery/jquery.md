## 21년 1월 24일

- 제이쿼리 설치

  1. 다운로드 방식 : 라이브러리를 다운받아야함. 하지만 네트워크 상관없이 사용가능 : cdnjs에서 링크를 복붙하고 저장
  2. 네트워크 전송 방식 : 링크를 스크립트로 박음

- 선택자 사용하기
  - 선택자를 사용하기 위해선 문서 객체를 불러와야함. 그 담에 선택자를 사용해야해.
  - $("~") : ~에 선택자를 넣음 #123 or .class, \*은 전체... etc
  - 여러 항목을 적용하고 싶으면, $("#abs").css("~","~").css ...
- 인접 선택자
  - $("h2").next() or .parent()
  - 하위 선택자. $("#id h1") -> id 아래 h1
  - 자식요소. $("h1 > h2") or $("").children("자식요소 선택 or blank")
- 위침 탐색 선택자

  - $("li:first") ㅇㅋ?
  - li:odd even, li:nth-child(2n) -> 2n번째들

- 배열 관련 메서드

  - $(obj).each(function(i,o)) : i는 index o는 obj.
  - let arr2 = $.map(arr1, function(a,b){~}) : arr2에 저장해줌. a는 객체, b는 인덱스.
  - grep은 true일때만 새 배열에 저장

- 이를 비롯하여 정말 많은 선택자 메소드가 있기에 상황마다 찾아보길..!

- 객체 조작
  - 객체 조작에는 요소 생성, 복제, 삭제, 속성 변환이 있다.
  - var result_1 = $("#sec").html(); -> sec 하위 html을 보여줌.. html(~) 요소를 html 코드 ~로 바꿈.
  - .text() 는 요소의 텍스트를 보여줌. 만약 인자가 있으면 바꿔줌.
- attr()
  - attr('속성명') : 속성값 가져오기
  - attr({"width" :200, "src" : srcVal.replace("1.jpg","2.jpg")}).removeAttr("border")
- class
  - addClass() : 클래스 생성
  - removeClass() : 삭제
  - toggleClass() : 있으면 삭제, 없으면 생성
  - hasClass() : 있냐 없냐 체크
- 객체 편집 메서드
  - .before("새 요소") .after() .append() 어펜드는 요소 자식으로 마지막 위치에 새요소 추가.
  - clone() : 복제, remove() 삭제. empty() 하위요소 삭제. append(~) : 자식 맨위에 삽입
