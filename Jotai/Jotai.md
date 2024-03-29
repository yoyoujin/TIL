# Jotai

- Jotai는 리코일에서 영감을 얻은 모델을 통해 글로벌 React 상태 관리에 원자적인 접근 방식을 취한다.

- 원자 결합을 통해 상태를 빌드하고, 원자 종속성에 따라 렌더링이 자동으로 최적화된다.<br>
  👉 이를 통해 React Context의 추가 리렌더링 문제를 해결하고 메모화가 필요하지 않다.

> 💡 Context값을 구독하는 컴포넌트의 불필요한 리렌더링에 대하여<br><br>
> ▪︎ React Context API를 사용할 때 주의해야할 문제 중 하나는 리렌더링을 발생시킬 수 있다는 점이다. <br>
> ▪︎ 발생하는 이유 <br>
> 1️⃣ Context의 값을 구독하는 컴포넌트가 그 상위 컴포넌트의 state나 props를 의존할 때 발생한다.<br> 만약 상위 컴포넌트가 리렌더링 된다면 👉 해당 컴포넌트의 자식 컴포넌트들도 함께 리렌더링 되는데, 이 때 Context의 값을 사용하는 컴포넌트도 함께 리렌더링되게 된다.<br>
> 2️⃣ state여부와 관계없이 Context가 업데이트되는 순간 하위에있는 컴포넌트는 전부 리렌더링된다. <br>
> ▪︎ 해결방법<br>
> Context 값을 사용할 때 최적화를 고려해야한다.<br> React에서는 'React.memo'나 'useMemo'와 같은 최적화 기능을 제공한다. 이를 사용하여 컴포넌트의 리렌더링을 제어하고, Context값이 변경되지 않았을 때 불필요한 리렌더링을 방지할 수 있다.

- Jotai는 최소한의 API를 가지고 있으며, TypeScript 지향적이다.
  모든 상태에 전역적으로 접근할 수 있고 파생된 상태를 쉽게 구현할 수 있으며 불필요한 리렌더링이 자동적으로 제거된다.
  <br><br>

## useAtom

- 상태의 원자 값을 읽는다.
- useState와 마찬가지로 원자 값과, 업데이트 함수를 튜플 형태로 반환한다.
- useAtom을 통해 아톰이 사용된 후에만 초기 값이 state에 저장된다.
- 만약 파생된 아톰이라면, 읽기 함수가 호출되어 초기값을 계산한다.

```jsx
const stableAtom = atom(0);
const Component = () => {
  const [atomValue] = useAtom(atom(0)); // This will cause an infinite loop
  const [atomValue] = useAtom(stableAtom); // This is fine
  const [derivedAtomValue] = useAtom(
    useMemo(
      // This is also fine
      () => atom((get) => get(stableAtom) * 2),
      []
    )
  );
};
```
