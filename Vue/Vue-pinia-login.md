# Vue3 + Pinia JWT Login Tutorial

## Pages

`/login`

- 사용자 이름 및 비밀번호 필드가 있는 공개 로그인 페이지를 제출하면 페이지가 API에 POST요청을 보내 사용자 자격증명을 인증함
- 성공 → API는 보안 API 경로에 인증된 요청을 할 수 있도록 JWT 토큰을 반환

`/`

- 로그인 성공 후 받은 JWT 토큰을 사용하여 보안 API 엔드포인트에서 가져온 사용자 목록을 표시하는 보안 홈페이지

## Pinia 상태관리

- Vuex 적은 양의 코드가 필요하며 Vue3에 권장되는 상태관리 라이브러리
- state와 business logic은 스토어를 사용하여 정의된다
- store - state, getters, action이 포함된다
    - state - store에서 관리하는 데이터를 정의
    - getters - state 및 다른 getter에서 계산된 값을 반환
    - action - 비즈니스 로직 또는 API 호출과 같은 비동기 작업을 실행하는데 사용

### VeeValidate

- 사용자 이름과 비밀번호 필드가 모두 필수
- Vue.js에서 양식을 작성, 유효성 검사 및 처리하기 위한 라이브러리

## 프로젝트 세팅

- 소스코드
    
    [https://github.com/cornflourblue/vue-3-pinia-jwt-authentication-example](https://github.com/cornflourblue/vue-3-pinia-jwt-authentication-example)
    
    - vue-project-work 디렉토리

## Pinia Store

[useAuthStore](https://www.notion.so/useAuthStore-b4ab6f153e2c4beb96da71b09766cc2e)

[useUsersStore](https://www.notion.so/useUsersStore-8ed5288a3828441e98d7bf0d3f81eec5)

## VeeValidate

- Vue.js와 통합된 유효성 검사 라이브러리
- 컴포넌트 기반의 폼 유효성 검사 쉽게 구현 가능
- 템플릿과 컴포넌트 간의 바인딩 및 데이터 처리가 용이
- VeeValidate만의 커스텀 규칙에 따라 복잡한 유효성 검사 구현 가능
- 에러메시지는 커스텀이 가능하며, 컴포넌트 데이터와 연결하여 유연하게 처리할 수 있음

## Yup

- 객체의 유효성 검사를 위한 라이브러리
- 폼 유효성 검사, 데이터 유효성 검사 등에서 사용됨
- 체이닝 방식으로 간단하고 직관적인 유효성 검사 규칙 정의를 제공
- 서버 / 클라이언트 모두에서 사용 가능

1. **코드 간결성**: VeeValidate와 Yup은 각각 간결한 문법과 쉬운 사용법을 가지고 있어, 폼 유효성 검사 로직을 간결하게 표현할 수 있습니다. 불필요한 반복적인 코드를 줄여줌으로써 개발자의 생산성을 향상시킵니다.
2. **유연성**: 두 라이브러리 모두 다양한 유효성 검사 규칙들을 제공하며, 커스텀 규칙을 추가하여 더 복잡한 유효성 검사 로직을 간결하게 표현할 수 있음