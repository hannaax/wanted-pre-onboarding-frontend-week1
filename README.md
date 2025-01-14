## 기능 구현 ? 구현 과정
    - ~~각 이슈에 포함되는 요구사항 & 구현사항~~
    - ~~리팩토링(가제) ? 주요 로직 ?~~
        - ~~(지금까지 자윤님이 PR에 적으신 부분들 및 앞으로 나오는 리팩토링 부분?)~~
    - (01:47 의견)
        - 이슈 3개를 나누고
        - 그 안에 과제의 요구사항을 정리하고
        - 그 안에 GIF들을 넣고
### SignUp & SignIn
#### Assignment 1. 회원가입, 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능 구현
- `useCheckAccount` custom hook을 만듬
  - 이 hook은 두 가지 일을 담당합니다.
    1. 이메일과 비밀번호 유효성 검사
    2. 이메일과 비밀번호의 유효성에 따른 submit button의 상태 변경
    
#### Assignment 2. 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행, 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동 & Assignment 3. 로그인 페이지에서 버튼을 클릭 시 로그인을 진행, 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동
- 아이디, 비밀번호를 유효성에 맞게 입력한다면 로그인 버튼이 활성화됩니다.
- 유저가 활성화된 로그인 버튼을 클릭하면 `postSignIn` 함수가 호출됩니다.
- 서버의 DB에 유저의 정보가 있는지 확인 후, 존재하는 회원이라면 status 코드 200과 함께 JWT 토큰을 클라이언트에서 받을 수 있게 됩니다.
  - 이 경우 요구사항대로 localStorage에 토큰을 저장했습니다.
    - 저장 시 key는 추후 여러 곳에서 사용될 수 있으므로 상수화하여 constants 폴더에 따로 저장했습니다.
    
#### Assignment 4. 로그인 여부에 따른 리다이렉트 처리 구현
- React Router Dom에서 제공하는 기능인 `loader`와 `redirect`를 활용하여 로그인 여부에 따른 리다이렉트를 처리했습니다.
  - 각 경로(route)마다 loader 함수를 정의할 수 있으며, 이 loader 함수는 렌더링 하기 전에 실행됩니다. 따라서 유저에게 해당 라우트의 페이지를 보여주기 전에 작업을 수행할 수 있게 됩니다.
    
### Todo
## 프로젝트 구조
    - 현오님 디렉터리 구조처럼 옆에 한줄정도 간단 설명
## 사용된 라이브러리
    - axios
    - react-router-dom
    - husky 사용 → 부연 설명 한 줄 정도
## 프로젝트 실행 방법
    1. root 경로에 .env 파일 생성
    
    `REACT_APP_API_URL=https://pre-onboarding-selection-task.shop`
    
    1. 패키지 설치
    
    `npm install`
    
    1. 프로젝트 실행
    
    `npm start`
    
    이걸 토대로
    
## 팀원 정보
    - 이런 방식으로
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/41a85aa4-3686-4aaa-ab3d-8af2b6b05035/Untitled.png)
        
## 협업방식
주된 커뮤니케이션 툴로 [**팀 노션**]([https://www.notion.so/1-48d83304b94c42ad8352fcf6e7973b9f?pvs=4](https://www.notion.so/Wanted-Frontend-Team-5-1b4b70c451904220aba9221ad9f706ae)) 페이지와 **디스코드**를 사용했습니다.

### **노션 페이지**

- 팀원들의 코드를 분석하고, 그 중에서 Best Practice를 정리하였습니다.
- commit 컨벤션, git flow 전략, 네이밍을 정의하였습니다.
- 팀원들의 역할 분담, 일정 조율을 위해 활용되었습니다.

### **디스코드**

- 팀원들의 의사소통 및 화면 공유를 통한 협업을 위해 활용되었습니다.


---

# 원티드 프리온보딩 프론트엔드 코스

# 2. 프로젝트 구조

```
📦 src
├── 📂 component
│   └── 📂 todo
│        ├── 📄 TodoForm
│        ├── 📄 TodoItem
│        └── 📄 TodoList
├── 📂 hooks
├── 📂 pages
│   ├── 📄 Home
│   ├── 📄 Signin
│   ├── 📄 Signup
│   └── 📄 todo
└── 📂 shared

```

# 3. 기능 시연 GIF

## 로그인 , 회원가입

<img src="[https://user-images.githubusercontent.com/87622597/218252160-86bccb24-90b6-434e-bc85-78e552e91321.gif](https://user-images.githubusercontent.com/87622597/218252160-86bccb24-90b6-434e-bc85-78e552e91321.gif)" width="500" height="450"/>

✅ Assignment 1

- 정규표현식을 이용해서 이메일과 비밀번호의 유효성 검사기능을 구현했습니다.
- 유효성검사에 속해있는 state들을 이용해
    - button의 disabled속성에 조건부로 true값을 지정해줍니다.
    - className을 조건부로 바꾸고 이를 통해 유효성 검사를 통과하지 못했을 경우의 className으로 조건부렌더링을 해줍니다.

✅ Assignment 2

- axios를 이용해 baseURL과 intercepters를 사용 모든 요청에 대해 같은 코드의 중복을 제거했습니다.
- App.js에 react-router-dom의 Routes를 이용하여 /signin경로를 지정해줍니다.
- react-router-dom의 useNavigate를 이용하여 회원가입이 성공했을 경우 statusText를 “Created”로 받는 것을 이용해 /signin 경로로 이동시킵니다.

✅ Assignment 3

- 서버와의 로그인관련 비동기통신이 성공했을 경우 statusText를 “OK”로 받는 것을 이용해 서버로 부터 받은 엑세스토큰을 로컬스토리지에 저장하고 /todo 경로로 이동시킵니다.

✅ Assignment 4

- useEffect를 이용해서 /signin, /signup, /todo의 초기렌더링시 localStorage.getItem을 이용해 로컬스토리지에 access_token이 있는지 확인하고 그 여부에 따라
    - 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시킵니다.
    - 로컬 스토리지에 토큰이 없는 상태로 /todo 페이지에 접속한다면 /signin 경로로 리다이렉트 시킵니다.

## Todo List

<img src="[https://user-images.githubusercontent.com/87622597/218252162-d5580730-7fc7-4663-99ef-1a0809b61a54.gif](https://user-images.githubusercontent.com/87622597/218252162-d5580730-7fc7-4663-99ef-1a0809b61a54.gif)" width="500" height="450"/>

✅ Assignment 5

- router를 통해 /todo경로에 접속하면 useTodo함수가 실행되어 useTodo내부의 useEffect를 통해 투두 목록을 가져옵니다.

✅ Assignment 6

- TodoForm 컴포넌트를 만들어 그 내부에서 내용을 추가할 수 있습니다.
- 빈칸일때는 input의 value값을 이용해서 판별한 후 제출함수를 바로 return시켜 제출하지 못하게 막았습니다.

✅ Assignment 7

- 체크박스의 onChange속성에 update함수를 넣어 체크박스가 바뀔때마다 그 값을 서버로 전달합니다.

✅ Assignment 8, 9

- 수정과 삭제는 button의 onClick속성을 이용해 서버로 전달합니다.

✅ Assignment 10

- modifyToggle이라는 상태를 따로 만들어 수정 버튼을 눌렀을 때는 조건부렌더링을 통해 새로운 input창이 뜨게 하였으며 그 값은 부모 컴포넌트로부터 받은 기존의 값을 넣었습니다.
- 제출하였을 시 유저가 빈칸으로 제출할경우 그 값의 boolean을 판단하여 빈칸일 경우 "할 일을 입력해 주세요” 라는 문구를 alert합니다.

추가 구현

- 로그아웃 (로컬 스토리지에서 삭제)

## 성능 최적화

<img src="[https://user-images.githubusercontent.com/87622597/218252693-e635a800-0a41-4105-9dc2-808dc9fb98fe.PNG](https://user-images.githubusercontent.com/87622597/218252693-e635a800-0a41-4105-9dc2-808dc9fb98fe.PNG)" width="500" height="450"/>

## 4. 프로젝트 설치 및 실행

#### 1) root 경로에 .env 파일 생성

```
REACT_APP_API_URL=https://pre-onboarding-selection-task.shop

```

#### 2) 프로젝트 패키지 설치

```
npm install

```

#### 3) 프로젝트 실행

```
npm start

```

## 5. 사용 라이브러리

![wanted-week2-gif4](https://user-images.githubusercontent.com/111215320/223873897-cc9a9ec8-7b3d-48d9-b196-f9852a03615d.gif)

