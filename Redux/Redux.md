# Redux 리덕스

## Redux?

리덕스는 cross-component 또는 app-wide state 를 위한 상태관리 시스템

- 화면에 표시하는 **데이터**를 다수의 컴포넌트 or 앱 전체에서 관리하도록 도와줌

<br>

## State

1. Local State
   - State that belongs to a single component
   - E.g. listening to user input in a input field; toggling a ‘show more’ details field
   - 보통 useState / useReducer 를 사용해서 컴포넌트 안에서 로컬 상태를 관리하게됨
2. Cross-Component State
   - State that affects multiple components
   - E.g. open / closed state of a modal overlay (다수의 컴포넌트가 모달을 표시하고 감추게됨)
   - 다수의 컴포넌트에서 관리하게되는 상태의 경우, useState / useReducer를 사용해 구현할 수도 있고, 그 때 prop을 내려줘야 하기때문에 props drilling 이 발생하게됨
3. App-Wide State

   - State that affects the entire app (most / all components)
   - E.g. user authentication status
   - 이 역시 useState / useReducer를 사용해 구현할 수 있으며, props drilling이 발생

   <br>

## Redux vs React Context

- React Context의 잠재적인 단점
  1. Complex Setup / Management
     - In more complex apps, managing React Context can lead to deeply nested JSX code and / or huge “Context Provider” components
     - 대형 프로젝트에서는 정말 복잡해짐,, 결국 아래와같은 코드가 나올 수도 있다
       ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5a729bfe-56c3-47dc-8769-e8e37de6883e/Untitled.png)
  2. Performance 성능이슈
     - React Context is not optimized for high-frequency state changes
     - 데이터가 자주 변경되는경우, 성능에 좋지 않다

👉  리덕스에는 이러한 단점이 없다 ! (리액트 컨텍스트의 대안이라고도 할 수 있음,,)

## Core Redux Concepts

- 리덕스는 애플리케이션에 있는 **하나의** **중앙 데이터 저장소**이다. - Central Data (State) Store

- **Store**
  - 애플리케이션의 모든 상태를 저장
  - 인증상태, 테마, 입력상태 등등
  - Store에 저장된 데이터를 Component에서 사용할 수 있음
- **Subscription**
  - Store → Component (구독방향)
  - component가 store를 구독하고 데이터가 변경될 때마다 저장소가 컴포넌트에 알려줌
    → component는 필요한 store로부터 데이터를 받게 됨 (ex. 현재의 인증상태)
  - component는 store에 있는 데이터를 직접 조작할 수 없다
- **Reducer**

  ```jsx
  const reducer(기존상태, 발송된액션) => {return 새로운 상태 객체}
  ```

  - Mutates(=changes) Store Data
  - 저장소 데이터를 업데이트 / 조작
  - Reducer Function은 일반적으로 입력을 변환해서 새로운 출력 / 결과를 리턴한다

- **Action**
  - 액션은 자사스크립트 객체로, reducer가 수행해야할 작업을 설명한다
  - component와 reducer 함수를 어떻게 연결할까?

         → 결국 데이터의 변경을 트리거하는 것은 component이다

        ex) 어떤 컴포넌트 안에 있는 버튼을 클릭하면 데이터의 변경을 트리거

    → component가 action을 발송
    <br>

## Redux 작동 방식

1. Component가 Action을 발송 Dispatch 한다 (= 컴포넌트가 액션을 트리거한다)
2. Redux는 이 Action을 Reducer로 전달
3. Reducer가 작업을 수행
4. 작업을 마친 Reducer는 새로운 상태를 뱉어냄
5. 이 새로운 상태는 Store의 기존 상태를 대체하게 됨 (상태 업데이트)
6. 해당 상태를 구독 중인 컴포넌트는 알림을 받게 되고 UI를 업데이트함
