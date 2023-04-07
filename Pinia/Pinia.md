# Pinia 피니아

## About Pinia

Pinia는 Vue.js 애플리케이션의 상태 관리를 위한 상태 관리 라이브러리입니다. Vuex와 같은 다른 상태 관리 라이브러리와 달리, Pinia는 Vue.js의 리액티브 시스템을 활용하여 상태를 관리합니다.

Pinia는 Vue.js 3에 대한 공식적인 상태 관리 라이브러리로서, TypeScript를 완전히 지원합니다. 또한, Vuex와 달리 전역 스토어를 사용하지 않고, 개별적인 스토어 모듈을 생성하여 관리합니다. 이를 통해 각 모듈은 독립적인 상태를 가지게 되어 유지 보수와 확장성을 향상시킵니다.
<br><br>

## 주요기능

- Vue.js의 리액티브 시스템을 활용한 상태 관리
- TypeScript를 완전히 지원하는 타입 안정성
- 전역 스토어 대신 개별적인 스토어 모듈을 사용하여 유지 보수와 확장성을 향상시킴
- Vuex와 유사한 API를 제공하여 기존 Vuex 사용자가 쉽게 전환할 수 있도록 함
- 동기 및 비동기 작업을 처리할 수 있는 액션 기능을 제공
- Vue Devtools와 함께 사용 가능한 디버깅 도구

Pinia는 Vue.js 3의 새로운 기능을 활용하여 상태 관리를 보다 간편하게 처리할 수 있도록 해주는 라이브러리로, Vue.js 애플리케이션 개발 시 상태 관리를 위한 선택지 중 하나입니다.
<br><br>

## 다른 상태관리 툴과의 차이점

1. 전역 스토어 대신 개별적인 스토어 모듈 사용

   Pinia는 Vuex와 달리 전역 스토어를 사용하지 않고, 개별적인 스토어 모듈을 생성하여 관리합니다. 이를 통해 각 모듈은 독립적인 상태를 가지게 되어 유지 보수와 확장성을 향상시킵니다.

2. TypeScript를 완전히 지원하는 타입 안정성

   Pinia는 TypeScript를 완전히 지원하여, 타입 안정성을 보장합니다. 타입스크립트 사용자들은 Pinia를 사용하여 타입 안정성이 보장되는 상태 관리를 구현할 수 있습니다.

3. Vue.js의 리액티브 시스템 활용

   Pinia는 Vue.js의 리액티브 시스템을 활용하여 상태를 관리합니다. 이를 통해, Vue.js의 기본적인 반응성 시스템을 이용하여 데이터를 간단하게 관리할 수 있으며, Vue.js 애플리케이션 개발에 익숙한 사용자들은 더욱 빠르게 익힐 수 있습니다.

4. 동기 및 비동기 작업을 처리할 수 있는 액션 기능 제공

   Pinia는 Vuex와 유사한 API를 제공하면서도, 동기 및 비동기 작업을 처리할 수 있는 액션 기능을 제공합니다. 이를 통해 비동기 작업을 처리하는 데 필요한 논리를 간단하게 구현할 수 있습니다.

5. Vue Devtools와 함께 사용 가능한 디버깅 도구

   Pinia는 Vue Devtools와 함께 사용 가능한 디버깅 도구를 제공합니다. 이를 통해 Pinia 애플리케이션의 상태를 쉽게 디버깅하고, 문제를 해결할 수 있습니다.

이러한 차이점들을 통해, Pinia는 Vue.js 애플리케이션 개발 시 상태 관리를 보다 간편하게 처리할 수 있도록 해주는 라이브러리로, 기존의 다른 뷰 상태 관리 라이브러리와는 차별화된 특징을 가지고 있습니다.

## 예제-1

```jsx
// store.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
```

`useCounterStore`는 `defineStore`
함수를 사용하여 생성된 스토어 모듈입니다. `state`객체에는 카운터의 현재 상태를 나타내는 `count`변수가 포함되어 있습니다. `actions`객체에는 `increment`와 `decrement`함수가 정의되어 있으며, 각각 카운터를 증가시키거나 감소시키는 역할을 합니다.

```jsx
// App.vue
// 위에서 정의한 스토어 모듈을 사용하여 카운터 애플리케이션을 구현하는 코드
<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { useCounterStore } from './store'

export default {
  setup() {
    const counterStore = useCounterStore()

    return {
      count: counterStore.count,
      increment: counterStore.increment,
      decrement: counterStore.decrement
    }
  }
}
</script>
```

위 코드에서 `useCounterStore`함수를 호출하여 `counterStore` 객체를 생성합니다. `count` 변수와 `increment`, `decrement` 함수는 `counterStore`객체의 프로퍼티와 메소드로 사용됩니다. 이를 통해 `count` 변수의 상태를 감시하고, `increment`와 `decrement` 함수를 사용하여 카운터 값을 변경할 수 있습니다.

## 예제-2

```jsx
import { defineStore } from 'pinia';

// state type
interface CounterState {
  count: number;
}

// store type
export const useCounterStore = defineStore({
  id: 'counter',
  state: (): CounterState => ({
    count: 0,
  }),
  getters: {
    doubleCount(): number {
      return this.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    async incrementAsync() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.count++;
    },
  },
});
```

Pinia의 강력한 기능 중 하나는 `getters`와 `actions`에 대한 타입 안전성을 보장한다는 것입니다. 이를 이용하여 상태와 관련된 연산을 모듈화하고, 컴포넌트 로직에서 분리할 수 있습니다. 위의 코드는 타입 안전성이 보장되는 Pinia 예시 코드입니다.
<br><br>

### getters

상태를 가공하여 반환하는 함수를 의미한다.

보통 아래와 같은 경우에 사용된다.

1. 상태를 가공하여 계산된 값을 반환할 때
2. 상태를 여러 곳에서 사용할 때
3. 상태를 읽기만 할 때

<br>

**getters 예제** - 장바구니 상품들의 총 금액 계산하기

```jsx
const cart = {
  state: {
    items: [
      { id: 1, name: 'Product A', price: 1000, quantity: 2 },
      { id: 2, name: 'Product B', price: 500, quantity: 1 },
    ],
  },
  getters: {
    total: (state) => {
      return state.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
  },
};
```

total 이라는 getter함수는 items 배열의 모든 상품들의 가격과 수량을 곱하여 총 금액을 계산한다. 이렇게 getters를 사용하면 장바구니 총 금액을 사용하는 컴포넌트들은 모두 cart스토어를 import하여 state.items 를 사용하지않아도 된다. 대신 cart.getters.total을 사용하여 총 금액을 가져올 수 있다.

### actions

비동기 처리 로직을 담당하는 함수를 의미한다.

보통 아래와 같은 경우 사용된다.

1. API 요청 등의 비동기 로직을 처리할 때
2. 여러 개의 mutation을 연달아 실행할 때
3. getters를 이용해 계산된 값을 사용하여 mutation을 실행할 때

<br>

**actions 예제** - 장바구니에 상품 추가하기

```jsx
const cart = {
  state: {
    items: [],
  },
  mutations: {
    addProduct(state, product) {
      state.items.push(product);
    },
  },
  actions: {
    async addProduct({ commit }, product) {
      // API 요청 등의 비동기 로직 처리
      const result = await axios.post('/api/cart', product);

      // mutation 실행
      // commit은 mutation을 실행하는 메소드이다.
      commit('addProduct', result.data);
    },
  },
};
```

addProduct 액션은 비동기 로직 처리를 위해 axios.post를 호출한다. 이후 commit 메소드를 이용하여 addProduct 뮤테이션을 실행한다. 이렇게 actions를 사용하면 비동기 처리를 보다 간편하게 구현할 수 있으며, 여러 개의 mutation을 연달아 실행하거나 getters를 사용하여 계산된 값을 사용하여 mutation을 실행하는 등 복잡한 로직을 처리할 수도 있다.

<br><br>

### computed vs getters

`computed`와 `getters`는 상태 값을 연산하고 반환하는 데 모두 사용됩니다. 하지만 `computed`는 컴포넌트 내부에서 직접 사용되는 반면, `getters`는 스토어 내부에서만 사용됩니다.

`getters`는 스토어 내부에서 상태 값을 연산하고 반환하기 때문에 다음과 같은 경우에 `getters`를 사용하는 것이 좋습니다.

- 다른 `getters`나 `actions`에서 사용되는 중복된 로직이 있는 경우
- 상태 값이 `state` 외부에 있는 경우

반면 `computed`는 컴포넌트 내부에서 상태 값을 연산하고 반환하기 때문에 다음과 같은 경우에 `computed`를 사용하는 것이 좋습니다.

- 템플릿에서 상태 값을 사용하는 경우
- 상태 값이 컴포넌트에 의존적인 경우

따라서 `getters`와 `computed`는 서로 다른 사용 시나리오를 가지고 있으며, 사용 목적에 따라 적절하게 선택하여 사용하는 것이 좋습니다.
