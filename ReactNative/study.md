# 노마드코더 React Native

React Native 앱은,

아래의 구조 + JavaScript 코드의 조합

<img width="522" alt="image" src="https://user-images.githubusercontent.com/102464638/224306734-4a5ac5b5-3156-470c-8bc8-069aff35b6ab.png">

- Expo
  - 위와 같은 구조 / 환경을 다 만들어놓은 Expo
  - 작성한 코드의 결과를 Expo를 통해 앱에서 즉시 확인 가능

<img width="659" alt="image" src="https://user-images.githubusercontent.com/102464638/224306256-2a65f6a7-ab7a-4c29-abd7-6e8bfa79ba54.png">

- RN은 각 운영체제에게 ‘메세지’를 보낸다
- ex) iOS, Android에게 버튼을 그려달라는 메세지를 보내고, 실제로 그 버튼을 그려내는 것은 RN이 아니라 각 운영체제이다!

<br><br>

## How does React Native work

- 사용자가 버튼을 누른다
- iOS와 안드로이드가 이 터치 event를 감지한다
- 해당 event에 대한 data가 수집된다
  - ex. ‘버튼이 눌렸습니다’라는 데이터가 메시지로 만들어짐
- 이 메세지가 JavaScript로 전달됨
- JS가 이벤트에 대한 코드를 실행시킴
- React Native는 Native 운영체제에게 메세지를 보냄 : ‘배경색을 00색으로 변경해주세요’

→ 자바스크립트는, 개발자들이 운영체제를 상대로 메세지를 주고 받기 위해 쓰는 레이어일 뿐이다!

→ RN 에는 Native코드 / Bridge / JavaScript 코드가 있다

→ JS외 이 앱의 모든 인프라는 JAVA로 작성된다 따라서 JAVA와 Xcode가 필요함 (iOS 라면 Objective-c 또는 swift에)

<br>

## Expo 프로젝트 만들기

```jsx
// 1. 프로젝트 만들기
expo init 파일명

// 2. expo 로그인
expo login

// 3. 실행 - expo 앱에서 실시간으로 확인 가능!
npm start
```

<br>

## The Rules of Native

- React Native 는 웹사이트가 아니기 때문에, HTML을 쓸 수 없다. (div 등등…)

- <View>
    - Container
    - div 대신 사용 → 항상 import 해줘야한다!
    - View에는 style이 존재 but 웹에서 사용하던 스타일을 모두 사용할 수는 없음 (ex. border)
- <Text>
    - RN에 있는 모든 text는 이 text component안에 들어가야함
    - View 컴포넌트에 text를 넣을경우 ? - 바로 error남 주의
- StyleSheet.create

  - object를 생성하는데 사용
    ```jsx
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    ```
  - 인라인으로 스타일을 적용할 수 있지만, 자동완성 기능이 제공된다는 장점이 있음
    → 자동완성 기능을 제공해주는 멋진 스타일 object이다!

  <br>

## React Native Directory

[https://reactnative.directory/](https://reactnative.directory/)

- React Native 에서 지원하지 않는 일부 package(AsyncStorage, Navigation 등)가 있어서 커뮤니티 기반으로 만들어진 API를 사용할 수 있음
- 하지만 이 커뮤니티는 오픈소스이기 때문에, 제작자의 개인 상황에 따라 업데이트가 느릴 수도 있는 단점이 있음!

<br>

## Expo SDK

[https://docs.expo.dev/versions/latest/](https://docs.expo.dev/versions/latest/)

- RN에서 지원하지 않는 일부 packages 때문에 Expo 팀에서 자체적으로 Packages와 APIs 를 만들기 시작
- 대부분의 패키지는 Expo에서 다 찾을 수 있음!

<br>

## Layout System

Layout with Flexbox.

**View는 기본적으로 Flex Container이다.**

- View 컴포넌트에 display: flex 설정을 별도로 명시해 줄 필요가 없다.
- f**lexDircetion의 기본값은 ‘column’**이다. (모바일이기때문에 웹과 기본값이 다름)
- 또한, flexDirection의 값을 ‘row’로 바꿔주어도, 웹과 다르게 가로 스크롤이 생기지 않는다
