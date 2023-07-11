# Next.js

React 기능을 강화하는 생산용 프레임워크

NextJS는 React 앱에 많은 기능을 간단히 추가 / 바로 사용할 수 있도록 한다

<br><br>

## NextJS - Key Features & Benefits

- SSR 서버 사이드 렌더링을 내장

  - 추가 설정 없이도, 페이지에 방문했을 때 서버에서 기본적으로 사전 렌더링 진행

  - 사용자에게 더 나은 초기 로딩 환경을 제공

  - ReactJS에도 해당 기능이 내장되어있지만, 추가설정이 필요하여 제대로 구현하기 까다로울 수 있음

- File-based Routing 파일 기반 라우팅

  - React-Router
    페이지 역할을 하는 컴포넌트를 만들고, 라우터 코드를 따로 작성한다
  - NextJS는 이러한 코드 내 라우트 정의를 없앤다
  - **파일, 폴더를 이용해서 페이지와 라우트를 정의**한다
    - NextJS 앱에는 특수 페이지 폴더가 존재 (pages)
    - 페이지가 지원하는 라우트와 경로를 정의
  - less code, less work, highly understandable concept

- Fullstack Capabilities
  - 백엔드 API를 쉽게 추가할 수 있음
  - 데이터베이스나 파일에 데이터 저장하거나 받아오거나, 인증을 추가하는 등 모든 작업을 할 수 있음

### About `_app.js`

- **`_app.js`** 파일은 Next.js 애플리케이션에서 전역적으로 적용되는 컴포넌트
- 모든 페이지에서 사용되는 공통 레이아웃이나 상태 관리 로직 등을 구현할 때 사용됨
- **`_app.js`** 파일은 다음과 같은 몇 가지 기능을 제공함
  1. 페이지 전환 시에 상태값 유지하기: **`_app.js`** 파일 안에서 **`getInitialProps()`** 메서드를 사용하면 페이지 전환 시에 상태값을 유지할 수 있습니다.
  2. 페이지 전환 시에 전역적으로 적용되는 애니메이션 효과 적용하기: **`_app.js`** 파일 안에서 페이지 전환 시에 전역적으로 적용되는 애니메이션 효과를 적용할 수 있습니다.
  3. 전역적으로 적용되는 CSS 설정하기: **`_app.js`** 파일 안에서 전역적으로 적용되는 CSS 스타일을 설정할 수 있습니다. 이를 통해 CSS-in-JS 라이브러리를 사용하여 스타일을 적용할 수 있습니다.
  4. 서버에서 사용되는 컴포넌트 설정하기: **`_app.js`** 파일 안에서 서버에서 사용되는 컴포넌트를 설정할 수 있습니다. 이를 통해 서버 측에서도 컴포넌트를 렌더링할 수 있습니다.

## Pre-rendering

- NextJS는 기본적으로 모든 페이지를 사전 렌더링함
- 클라이언트 사이드 JavaScript에서 모든 작업을 수행하는 대신 미리 각 페이지에 대한 HTML을 생성함
- 사전 렌더링을 통해 더 나은 성능과 SEO를 얻을 수 있음
- 생성된 HTML은 해당 페이지에 필요한 최소한의 JS코드와 연결됨

### 사전 렌더링이 진행중인지 확인하려면 ?

1. 브라우저에서 JavaScript를 비활성화 하기

   → [크롬에서 비활성화 하는 방법](https://developer.chrome.com/docs/devtools/javascript/disable/)

2. 페이지에 access해보기

결과

- Next.js가 앱을 정적 HTML로 사전 렌더링을 했기 때문에 JavaScript를 실행하지 않고도 앱 UI가 렌더링 되는 것을 확인 할 수 있음

## Two Forms of Pre-rendering

Next.js에는 두가지 렌더링 형식이 있다.

1. 정적생성(Static Generation)
2. 서버 측 렌더링(Server-side Rendering)

페이지에 대한 HTML을 생성할 때 차이점이 존재한다.

### Static Generation 정적생성

- 빌드 시 HTML을 생성하는 사전 렌더링 방법
- 미리 렌더링된 HTML이 각 요청에서 재사용됨

### Server-side Rendering 서버 측 렌더링

- 각 요청에서 HTML을 생성하는 사전 렌더링 방법

<aside>
💡 Next.js 는 각 페이지에 사용할 사전 렌더링 양식을 선택할 수 있다.
대부분의 페이지는 정적 생성을 사용하고 다른 페이지에는 서버 사이드 렌더링을 사용하여 **하이브리드 Next.js 앱**을 만들 수 있다.

</aside>

### When to Use **[Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) vs [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering)**

가능한 한 정적생성을 사용하는 것이 좋다.

요청이 있을 때마다 서버에서 페이지를 렌더링 하는 것보다 훨씬 빠르기 때문

### 정적생성을 선택하는 기준?

- 질문하기 : 사용자 요청에 앞서, 이 페이지를 미리 렌더링 할 수 있는가?
- 정적생성을 사용하는 유형의 페이지
  - Marketing pages
  - Blog posts
  - E-commerce product listings
  - Help and documentation

### 서버 사이드 렌더링을 선택하는 기준?

- 정적생성의 질문에 대한 대답이 NO 이거나
- 페이지에 자주 업데이트되는 데이터가 표시되는 경우
  → 속도는 느려지지만 미리 렌더링된 페이지는 항상 최신 상태이다.
  → 사전 렌더링을 건너뛰고 클라이언트측JS를 사용하여 자주 업데이트되는 데이터를 채울 수 있다

## **Static Generation with Data using `getStaticProps`**

- getStaticProps는 프로덕션 빌드 시 생성됨
- 함수 내에서 외부 데이터를 가져와 페이지에 대한 props로 보낼 수 있음
- 개발모드에서는 getStaticProps가 각 요청에서 실행됨

```js
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

## CSR

> 렌더링을 하는 주체가 클라이언트 (브라우저)

- 리액트 웹앱의 경우 유저가 홈페이지에 접속하면
- 클라이언트가 서버에게 웹페이지에대한 정보에 대해 요청을 보내고, 서버는 body가 `빈 HTML 파일`을 먼저 보내준다.
- 빈 페이지가 유저에게 보여진다.
- 이후 `리액트 라이브러리 소스파일`, `리액트 컴포넌트로 만든 소스코드`를 서버로부터 다운받는다.
- 이렇게 3가지 파일이 모두 다운로드 되어야 클라이언트 측에서 렌더링할 준비가 완료된다.

📍 정리
HTML 파일 + 리액트 라이브러리 + 리액트 컴포넌트로 만든 소스코드를 서버로부터 다운받아서, 클라이언트 측에서 DOM요소로 변환하여 브라우저에 표기하는 것
