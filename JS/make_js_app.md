- init함수를 먼저 만듬

- const date = new Date();
- date.getDay() -> 요일
- date.getDate() -> 일
- Hours, Minutes etc

- setinterver(fn, time) -> time 마다 fn 실행 time은 millisecond 1sec = 1000
- 삼항 연산자  ~ ? true : false -> ?가 참이면 트루 실행 아니면 펄스

- localstorage 사용자 컴퓨터에 저장할 수 있는 작은 저장소?
- localStorage.getItem("~")
- localStorage.setItem(key, value)
- form에서 enter는 summit
- 기본동작을 막는 preventDefault

- JSON.stringify -> 오브젝트를 스트링으로 바꿔줌 로컬스토리지는 스트링밖에 저장이 안되서 이렇게 저장함
- JSON.parse(~) -> ~ 바꿔줌
- ~.forEach(F) ~에 대해 F를 다실행함  
- filter?
- 위치 api navigator.geolocation.getcurrentposition(성공시함수, 실패함수)