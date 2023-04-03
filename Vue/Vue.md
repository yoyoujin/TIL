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
