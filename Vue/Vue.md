# Vue.js

Vue.js는 MVVM(Model-View-ViewModel) 패턴을 기반으로 한다.

데이터 바인딩과 DOM조작에 초점을 두어 뷰 레이어와 상호작용하는 것을 간소화함

단일 파일 컴포넌트(SFC-Single File Components)를 사용하여 HTML, CSS, JavaScript 코드를 하나의 파일로 결합할 수 있다.

Vue.js는 이 파일을 컴파일하여 브라우저에서 실행할 수 있는 JavaScript파일로 변환한다.

### 주요특징

- 반응성: 데이터가 변경될 때 자동으로 뷰를 업데이트함
- 컴포넌트: 재사용 가능한 코드 블록으로 뷰를 구성
- 라우팅: SPA에서 페이지 전환을 관리
- 템플릿: HTML 기반의 템플릿을 사용하여 뷰를 작성
- 상태관리: Vuex를 사용하여 복잡한 애플리케이션의 상태를 관리함
  <br><br>

## Vue의 두가지 API 스타일

### Options API

data, methods, mounted와 같은 옵션 객체를 사용하여 컴포넌트의 로직을 정의한다.
옵션으로 정의된 프로퍼티는 this로 노출되며, this는 내부 함수의 컴포넌트 인스턴스를 가리킨다.

```
<script>
export default {
  // data()에서 return된 프로퍼티는 활성(reactive)상태가 되고, `this`에 의해 노출됨.
  data() {
    return {
      count: 0
    }
  },

  // Methods는 state를 변경하고, 업데이트의 트리거 역할을 하는 함수이다.
  // 템플릿에서 '이벤트 리스너'로 바운드할 수 있다.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks는 컴포넌트의 생애주기의 다양한 단계에서 호출되며,
  // 이 함수는 컴포넌트가 마운트된 상태일 때 호출된다.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

```

<br>

### Composition API

Composition API는 import한 API function을 이용하여 내부 로직을 정의한다.
SFC(Single-File Component)에서 Composition API는 보통 `<script setup>` 와 함께 사용된다.

setup 어트리뷰트는 뷰가 컴파일 하는 것을 효율적으로 해줄 수 있도록 하는 힌트의 역할을 한다.

예를 들면,
`<script setup>` 내부에 선언된 import문과 top-level 변수/함수들은 템플릿에서 직접 사용할 수 있게된다.

아래 코드는 Options API 예제와 동일하다.

```
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// state를 변경하고 업데이트 트리거 역할을 하는 함수
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

```

이 두 API 스타일은 완전히 동일한 기본 시스템에 의해 구동되는 서로 다른 인터페이스이다. 실제로 Options API는 Composition API 위에 구현된다고 한다.
<br>
<br>

## 두 가지 API 스타일, 무엇을 골라야할까?

OptionsAPI는 데이터, 속성, 메서드, 라이프사이클 훅 등을 객체 안에 정의한다. 이 방법은 작고 단순한 경우 유용할 수 있으나, 대규모 앱에서는 코드의 가독성과 유지보수성이 저하 될 수 있다.

CompositionAPI는 코드를 기능별로 구성할 수 있게 하며, 관련된 기능을 모듈화하여 재사용성을 높인다. 함수형 프로그래밍의 개념을 활용하여 코드를 작성할 수 있도록 돕고, TypeScript와 같은 언어와 함께 사용하기에도 좋아서 코드의 안정성을 높일 수 있다.

그래서 대규모 앱에서 작성할 때 CompositionAPI를 사용하는 것이 좋을 것 같다. 가독성과 유지보수성 면에서 더 나은 선택이 될 것 같기 때문이다.

<br>

## 속성 바인딩

속성을 동적 값에 바인딩하려면 `v-bind` 디렉티브를 사용한다

```jsx
<div v-bind:id='dynamicId'></div>
```

<br>

## [디렉티브](https://v3-docs.vuejs-korea.org/guide/essentials/template-syntax.html#attribute-bindings)

- `v-` 로 시작하는 특수한 속성으로 Vue 템플릿 문법의 일부이다.
- 컴포넌트의 상태에 접근할 수 있는 JavaScript 표현식
- 위의 예시에서 콜론 뒷 부분은(id) 디렉티브의 ‘인자’이다.
- 엘리먼트의 id 속성은 컴포넌트 상태의 dynamicId 속성과 동기화됩니다.

<br>

## 리스트 렌더링

```jsx
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

- `v-for` 디렉티브를 사용하여 자료 배열을 요소로 렌더링 할 수 있다.
- todo: 현재 반복중인 배열 요소를 나타내는 로컬변수 (v-for 엘리먼트 위 또는 내부에서만 접근가능)
- 목록을 업데이트하는 방법

  1. 자료 배열에서 변경 메서드(mutating methods) 호출

     todos.value.push(newTodo)

  2. 배열을 새 배열로 교체

     todos.value = todos.value.filter(…)

     <br>

## 데이터 바인딩

🙌 데이터 바인딩을 사용하는 이유

- HTML에 하드코딩 해놓으면 나중에 변경이 어렵기 때문에
  → 가변적인 데이터들은 하드코딩보다는 데이터로 저장해두는 것이 좋음
- Vue의 실시간 자동 렌더링을 사용하기 위해
  - Vue는 data를 변경하면, 해당 data와 바인딩되어있는 HTML에도 실시간으로 반영됨
  - 웹앱같은 사이트를 만들기 좋음!

👉 자주 변할 것 같은 데이터들은 data에 보관하고 HTML에 꽂아넣기!

ex) 아래 쇼핑몰 이름의 경우 변경되는 data가 아니기때문에 데이터바인딩 할 필요❌

👉 (충격) HTML 속성도 데이터 바인딩 가능 -> `:속성=’데이터이름’`

```html
<template>
  <h1>{{ logo }}</h1>
  <div>
    <h3 :style="fontColor">XX 원룸</h3>
    <p>{{ price1 }} 만원</p>
  </div>
  <div>
    <h3>XX 원룸</h3>
    <p>{{ price2 }} 만원</p>
  </div>
</template>

export default { name: 'APP', data(){ return { logo: '원룸샵', price1: 80, price2: 40, fontColor:
'color: blue', } }, components: { } }
```

## reactive / watch / ref / computed

### 1. reactive

Vue의 `reactive`는 Vue 3에서 새롭게 도입된 API 중 하나로, 객체나 배열을 반응형으로 만들어주는 함수이다. `reactive` 함수를 사용하여 생성된 반응형 객체는 Vue의 반응성 시스템에 의해 추적되고, 해당 객체의 프로퍼티 값이 변경될 때마다 자동으로 다시 렌더링되는 등의 처리가 가능해진다.

`reactive` 함수는 다음과 같은 방법으로 사용할 수 있다.

```jsx
import { reactive } from 'vue';

const state = reactive({
  count: 0,
  message: 'Hello world!',
  nested: {
    foo: 'bar',
  },
  list: [1, 2, 3],
});
```

위 코드에서 `reactive` 함수를 사용하여 `state` 객체를 생성하고 있다. `state` 객체는 `count`, `message`, `nested`, `list`와 같은 프로퍼티들을 갖고 있으며, 이들 프로퍼티는 모두 반응형으로 만들어졌다. 따라서 `state` 객체의 어떤 프로퍼티 값이 변경되면, 해당 변경사항이 Vue의 반응성 시스템에 의해 감지되고, 자동으로 다시 렌더링된다.

`reactive` 함수는 Vue의 `watch` 함수와 함께 사용되어 객체나 배열의 변경사항을 감시하고 처리할 수 있다. 예를 들어, 다음과 같은 방법으로 `state` 객체의 `count` 프로퍼티를 감시할 수 있다.

```jsx
import { reactive, watch } from 'vue';

const state = reactive({
  count: 0,
  message: 'Hello world!',
  nested: {
    foo: 'bar',
  },
  list: [1, 2, 3],
});

watch(
  () => state.count,
  (newValue, oldValue) => {
    console.log(`count changed from ${oldValue} to ${newValue}`);
  }
);
```

위 코드에서 `watch` 함수를 사용하여 `state` 객체의 `count` 프로퍼티를 감시하고 있다. `watch` 함수의 첫 번째 인자로는 감시 대상의 getter 함수를, 두 번째 인자로는 감시 대상이 변경될 때 호출될 콜백 함수를 전달하면 된다. 따라서 위 코드에서는 `state.count`의 값이 변경될 때마다 콘솔에 변경된 값을 출력하는 콜백 함수가 호출된다.

### 2. watch

`watch` 함수는 지정한 대상을 감시하고, 대상이 변경될 때마다 콜백 함수를 호출하는 API이다. 대상은 다양한 형태로 지정할 수 있으며, `watch` 함수를 사용하여 객체나 배열의 변경사항을 감시할 수 있다.

`watch` 함수는 다음과 같은 형태로 사용할 수 있다.

```jsx
watch(source, callback, options);
```

- `source`: 감시 대상의 getter 함수 또는 대상 객체
- `callback`: 감시 대상이 변경될 때 호출될 콜백 함수
- `options`: 옵션 객체 (생략 가능)

`source` 인자에는 감시 대상을 지정한다. 이 인자는 함수나 객체 모두 가능하다. 함수를 사용할 경우, 이 함수는 감시 대상의 값을 반환하는 getter 함수여야 한다. 객체를 사용할 경우, 객체의 프로퍼티를 감시한다.

`callback` 인자에는 감시 대상이 변경될 때마다 호출될 콜백 함수를 지정한다. 이 콜백 함수는 두 개의 인자를 받는데, 첫 번째 인자는 변경된 값이고 두 번째 인자는 이전 값이다.

- `watch` 함수를 사용하여 `count` 변수를 감시하는 예제

```jsx
import { watch } from 'vue';

const count = ref(0);

watch(
  () => count.value,
  (newValue, oldValue) => {
    console.log(`count changed from ${oldValue} to ${newValue}`);
  }
);
```

위 코드에서는 `count` 변수를 `watch` 함수를 사용하여 감시하고 있다. `watch` 함수의 첫 번째 인자로는 `count` 변수의 값을 반환하는 getter 함수를 전달하고, 두 번째 인자로는 감시 대상이 변경될 때 호출될 콜백 함수를 전달하고 있다. 콜백 함수에서는 변경된 값과 이전 값이 출력된다.
