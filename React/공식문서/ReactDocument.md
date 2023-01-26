# 주요개념

## 3. 엘리먼트 렌더링

```html
<div id="root"></div>
```

HTML 파일 어딘가에 div태그가 있다고 가정
이 안에 들어가는 모든 엘리먼트를 React DOM에서 관리하기때문에
`루트(root) DOM 노드`라고 부른다.
React로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM 노드를 가진다.

<hr>

### 💡 React 엘리먼트를 렌더링하기 <br>

- DOM 엘리먼트를 `ReactDOM.createRoot()`에 전달
- React엘리먼트를 root.render()에 전달

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <h1>Hello, world</h1>;
root.render(element);
```

<hr>

### 💡 렌더링 된 엘리먼트 업데이트하기

- React 엘리먼트는 불변객체이다.
- 엘리먼트 생성 후 해당 엘리먼트의 속성이나 자식을 변경할 수 없음

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

- setInterval() 콜백을 이용해 초마다 root.render()를 호출
- but, 대부분의 React앱은 root.render()를 한 번만 호출함
  <br><br>

### 💡 변경된 부분만 업데이트

- React DOM은 해당 엘리먼트와 그 자식엘리먼트를 이전의 엘리먼트와 비교하고, DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트한다.
- 매초 전체 UI를 다시 그리도록 엘리먼트를 만들었지만, React DOM 은 내용이 변경된 텍스트 노드만 업데이트한다.

## 4. Components와 Props

- 개념적으로 Component는 JavaScript 함수와 유사함
  - 'props'라고 하는 임의의 입력을 받은 후, 화면에 React엘리먼트를 반환

### 함수 컴포넌트와 클래스 컴포넌트

- 함수 컴포넌트

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- 클래스 컴포넌트

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### 🌟 컴포넌트 렌더링

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name='Sara' />;
root.render(element);
```

- `<Welcome name="Sara" />` 엘리먼트로 root.render()를 호출
- {name: 'Sara'}를 props로 하여 Welcome 컴포넌트 호출
- Welcome 컴포넌트는 결과적으로 `<h1>Hello, Sara</h1>` 엘리먼트 반환
- ReactDOM은 `<h1>Hello, Sara</h1>`엘리먼트와 일치하도록 DOM을 효율적으로 업데이트

❗️ 컴포넌트의 이름은 항상 대문자로 시작한다.
<br><br>

## 5. State와 생명주기

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

- setInterval() 콜백을 이용해 초마다 root.render()를 호출 <br><br>

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  root.render(<Clock date={new Date()} />);
  s;
}

setInterval(tick, 1000);
```

- Clock 컴포넌트를 완전히 재사용하고 캡슐화하기
- 이 컴포넌트는 스스로 타이머를 설정하고, 매초 스스로 업데이트 한다.
  - Clock이 타이머를 설정하고 매초 UI 업데이트하는 것이 Clock의 구현 세부사항이 되어야한다.
  - State는 props와 유사하지만, 비공개이며 컴포넌트에 의해 완전히 제어된다.

### 🙌 함수에서 클래스로 변환하기

1. React.Component를 확장하는 동일한 이름의 ES6 class 생성
2. render()라고 불리는 빈 메서드 추가
3. 함수의 내용을 render() 안으로 옮기기
4. render() 내용 안에 있는 props를 this.props로 변경
5. 남아있는 빈 함수선언 삭제

```jsx
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
