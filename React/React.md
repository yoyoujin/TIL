# React

- 페이스북에서 관리
- 웹 페이지의 컴포넌트를 렌더링하고 빌드하는 데 초첨을둔 자바스크립트 라이브러리이다.
- UI 라이브러리이기 때문에 리액트 자체만으로 전역상태관리, 라우팅, 빌드시스템 등을 지원하지 않는다.
(필요한 라이브러리들를 추가해서 사용해야함)
- 리액트 특징
    - 가상돔을 사용해서 빠른 렌더링, 성능 개선이 가능
    - 단방향 데이터 흐름을 가진다.
    - UI를 여러 컴포넌트로 쪼개서 만든다.

## 가상돔 (Virtual Dom)
- 가상돔은 Virtual document object model을 말한다.
- 이벤트가 발생할 때마다 가상돔을 만들고, 다시 그릴때마다 실제 돔과 비교하고 전후 상태를 비교해, 변경이 필요한 최소한의 변경사항만 돔에 반영하여 업데이트한다. -> 웹의 효율성과 속도 개선