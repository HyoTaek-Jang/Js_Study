## 21년 1월 24일

- 제이쿼리 설치

  1. 다운로드 방식 : 라이브러리를 다운받아야함. 하지만 네트워크 상관없이 사용가능 : cdnjs에서 링크를 복붙하고 저장
  2. 네트워크 전송 방식 : 링크를 스크립트로 박음

### 선택자 사용하기

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

## 21년 1월 25일

#### 이벤트

- 이벤트 등록 메서드

  - ex) 버튼을 클릭했을 때 경고 창을 나타내라
  - 버튼을 : 이벤트 대상, 클릭했을 때 : 이벤트 등록 메서드, 경고 창을 나타내라 : 이벤트 핸들러

  ```
  $("#btn").click(function(){
    js code;
    })s
  ```

- 그룹 이벤트 등록 메서드

  - .on을 활용

  ```
  $(~).on({
    "mouseover" : function(){
      ~
    },
    "focus" : function(){
      ~
    }
  })
  ```

- 강제로 이벤트 발생시키기

  - $().click() or .trigger("~")

- 이벤트 제거하기

  - .off

- 로딩 이벤트 메서드

  - .ready 는 html 요소 로드, load는 외부 소스가 완전히 로딩되면

- 마우스 이벤트

  - .click, .dbclick, mouseover, mouseout, hover

- 기본 이벤트 차단하기

  - function(e) { e.preventDefault()};

- 다양한 이벤트 객체와 종류

  - 필요시 찾아보자

- 키보드 이벤트
  - keydown, keyup, keypress 가 있다. function(e) 로 받으면 e.keycode로 어떤 키가 눌렸는지 확인 가능
  - 그에 맞게 스위치문으로 처리하면 돼

### 효과 및 애니메이션 메서드

- 효과 메서드의 기본형
  -$().효과메서드(효과 소요 시간, 가속도, 콜백 함수);
  - 효과 소요 시간 : slow normal fast
  - 가속도 : swing linear
- animate() 메서드
  - 모션효과
  - $().animate({스타일 속성}, 적용시간, 가속도, 콜백 함수)
- ## 애니메이션 효과 제어 메서드
  - 애니메이션 메서드는 큐에 저장
  - .stop() 애니메이션 정지 이동안함, .stop(true, true) 애니메이션 종료 이동함.
  - .delay(ms).애니메이션 효과()
