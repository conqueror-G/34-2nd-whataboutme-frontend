#  나는어때
🔶 개요: 여행지 주변의 모텔, 호텔, 게스트하우스를 예약할 수 있는 사이트<br>
🔶 참여 인원: Front-End 3명<br>
🔶 제작 기간: 2022.07.07 ~ 2022.07.14<br>
🔶 협업 툴: Slack, Notion<br>
🔶 회의 방식: Sprint회의를 진행해서 티켓을 관리하고 StandUp meeting을 통해 팀원의 진행도를 체크<br>
🔶 담당 구현 파트: Nav, Main-page, Footer
<br>[시현 영상 보러가기](https://www.youtube.com/watch?v=B9UGGxGt4L4)

## 사용기술 스택
- Front-end: <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=ReactRouter&logoColor=white"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"/>

<br>

## 필수구현 기능
> ### 1. Nav
  - REST-API를 사용한 소셜 로그인

> ### 2. Main-page
  - React-Slick을 이용한 Carousel 구현
  - kakao map api로 kakao map 구현

> ### 3. List-page
  - 사용자의 현재 GPS 가져오기 구현
  - 숙박지 필터링 기능 구현
  - geolib, getDistance 라이브러리를 활용한 kakao map 구현

> ### 4. Detail-page
  - React-Slick을 이용한 Carousel 구현
  - kakao map api로 kakao map 구현


<br>
## :: 담당 구현 목표
[Layout] NavBar<br />
[Function] NavBar UX MouseOver event<br />
[Layout] NavBar - SearchBar<br />
[Function] NavBar - SearchBar DropDown event<br />
[Function] NavBar - Kakao social login<br />
[Function] NavBar - Logout<br />
[Function] NavBar - Menu active<br />
[Function] NavBar - Scroll event<br />
[Layout, Function] NavBar - Local menu<br />

<br />

## :: 구현 사항 설명
**[Layout] NavBar**:  앱 기반 웹이기 때문에 navigation bar가 상당히 맘에 들지 않습니다. 접근성도 너무 떨어지고요. 현재는 해당 웹 페이지를 클론해서 동일한 디자인으로 구현했지만 추가 리팩토링 작업으로 더 예쁘게 디자인 해보고 싶습니다. 더불어 로그인 모달창도 더 디자인이 좋았으면 좋겠네요
<img width="1067" alt="스크린샷 2022-07-10 오후 3 57 55" src="https://user-images.githubusercontent.com/90183279/178134637-304cd94f-5d49-4d73-a512-5b4aea6f3a03.png">

**[Function] NavBar UX mouseOver event**: 여러 다른 페이지를 참고해서 사용자의 입장에서 좋은 경험을 주는 이벤트를 참고해서 만들었습니다.
![mouseOver event](https://user-images.githubusercontent.com/90183279/178134644-55cd552f-d5f4-4749-b87f-2189a4559cd8.gif)

**[Layout] NavBar - searchBar**: 메인페이지 디자인 변경에 따라 네브바 디자인 중 검색창을 계속 표시하고 있도록 변경했습니다.
<img width="395" alt="스크린샷 2022-07-10 오후 3 27 46" src="https://user-images.githubusercontent.com/90183279/178134656-ad688993-c05b-45f6-98bc-c03b38efee8c.png">

**[Function] NavBar - searchBar DropDown event**: 지역, 지하철, 대학교의 분류에 따라 select 되도록 이벤트를 만들었습니다.
![검색창 dropdown](https://user-images.githubusercontent.com/90183279/178134660-71d4506a-983f-4e7c-b7e4-9fc51fa9ff39.gif)

**[Function] NavBar - kakao social login**: 진행한 카카오 소셜 로그인 플로우를 설명드리겠습니다.
- 클라이언트가 카카오톡으로 로그인하기 버튼을 클릭하면 서비스 서버가 카카오 인증 서버에게 인가 코드를 요청합니다.
- 카카오 인증 서버가 인증 및 동의 요청을 합니다.
- 인증 및 동의하는 페이지로 이동된 클라이언트가 카카오톡 로그인을 하고, 동의를 합니다.
- 카카오 인증서버에서 인가 코드를 발급합니다.
- 서비스 서버에서 토큰 발급 요청을 합니다.
- 카카오 인증 서버에서 토큰을 발급합니다.
여기서부터 백앤드 서버와 통신이 시작되지만, 로컬 스토리지에 저장해서 로그인에 사용하였습니다.
![카카오 소셜 로그인](https://user-images.githubusercontent.com/90183279/178134669-caf84754-1df6-4594-8891-2b76b3d7c990.gif)

**[Function] NavBar - logout**: 로그인 할 시 카카오 인증 서버에서 발급한 토큰이 발급되며, 로컬 스토리지에 저장되며, 로그아웃 버튼으로 업데이트 됩니다. 
![로그아웃](https://user-images.githubusercontent.com/90183279/178134672-4929269a-9972-442e-838f-5f2a28171fe7.gif)

**[Function] NavBar - menu active**: 현재 page를 active 상태로 표시해주는 시각적인 기능입니다. NavLink를 사용해서 active class를 사용하는 방법과 redux를 사용하는 방법 2가지가 있는데 그 중 전자의 방법을 사용했습니다. 이후 리팩토링때 고려해보겠습니다.
![menu active](https://user-images.githubusercontent.com/90183279/178143281-08d34fe8-f632-441b-bc5c-ceacdb9f7f5c.gif)

**[Function] NavBar - scroll event**: 10px 이하로 스크롤이 이동하게 되면 Navbar의 색상이 전체적으로 변경됩니다.
![스크롤 이벤트](https://user-images.githubusercontent.com/90183279/178483970-83785e2c-d8fe-4135-9c57-c6a0f1885cde.gif)


<br />

## :: 성장 포인트 
1. 카카오 로그인이 어떻게 흘러가는지 플로우 알게되었습니다.
```javascript
const KaKao = () => {
  const location = useLocation();

  const code = qs.parse(location.search, { ignoreQueryPrefix: true }).code;

  const getToken = async () => {
    const payload = qs.stringify({
      Content_Type: "application/x-www-form-urlencoded",
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    await axios
      .post("https://kauth.kakao.com/oauth/token", payload)
      .then(res => localStorage.setItem("token", res.data.access_token))
      .catch(err => {
        alert("로그인에 실패하였습니다.");
      });

    window.open("http://localhost:3000", "_self");
  };

  useEffect(() => {
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default KaKao;
``` 

2. 로그인을 했을 때 , 로그아웃 버튼으로 업데이트 되지 않는 이슈가 있었는데.. 로그인 완료 시 새로고침되고 해당 페이지로 이동하도록 하는 코드를 작성하여 해결했습니다. 해당 문제는 라우터 구조에 의한 문제라고 파악했습니다. Router.js는 이렇게 작성되어있습니다.
```javascript
<BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/" element={<Detail />} />
        <Route path="/oauth/kakao/callback" element={<KaKao />} />
      </Routes>
      <Footer />
    </BrowserRouter>
```
Nav 컴포넌트가 어떤 페이지에서라도 항상 그려져 있기 때문에, 로그인시 토큰을 state에 저장하는 로직을 짜더라도 렌더링 되지 않는 문제가 발생했습니다. 로그아웃을 할때에도 마찬가지로 동일한 현상이 나타났기 때문에, 해당 문제를 이렇게 해결했습니다.
```javascript
window.open("http://localhost:3000", "_self");
```
해당 코드는 window 메소드를 사용하는 것이며, 해당 URL로 이동하고 새로고침됩니다. 즉 다시 렌더링 되며 로그아웃 버튼으로 업데이트 되거나 로그아웃을 할 때는 로그인 버튼으로 업데이트 됩니다.

3. 환경 변수에 대해 알게되고 적용해볼 수 있었습니다.
4. Custom Hooks를 modal on/off하는 곳에 유용하게 사용해 볼 수 있었습니다. 모달이 늘어날때마다 점점 더 늘어가는 state를 모두 제거할 수 있었네요.
```javascript
// 모달 on/off
export const useHandleStatus = () => {
  const [isStatus, SetIsStatus] = useState(false);

  const handleStatus = () => {
    SetIsStatus(!isStatus);
  };
  return { isStatus, handleStatus };
};
```
5. menu에 대해 mouseOver event를 할때 약 4시간을 해매다가 발견했는데..  hover는 after보다 앞에 작성되어야 한다는 것입니다. 주체가 무엇이냐에 따라 다르겠지만, 저는 a태그 다음으로 오는 after class에 대해 적용하고자 했기 때문이었습니다.
(O) &:hover::after
(X) &::after:hover

6. DropDown UI를 라이브러리를 사용해서 손쉽게 작성할 수 있을 것이라고 생각했지만 오히려 간단한 것은 직접 생각해서 만드는 것이 더 효율적이라고 생각하는 계기가 되었습니다. 하지만 이것도 잘 모르겠습니다. 라이브러리는 코딩을 편하게 해주는 도구라고 생각하는데, 이걸 사용하지 않는 다는 것이 더 개발자에게는 치명적인 생각이 아닌가 생각합니다.. 결국에는 라이브러리도 자유자재로 사용해서 레이아웃에 들어가는 시간을 줄이는 것도 좋은 개발자가 아닐까 생각했습니다. 

추가적으로 DropDown UI를 만들때 또 3시간을 해맸는데.. 이유는 position 때문이었습니다. 왜 클릭을하면 그 자리에서 드롭다운이 펼쳐지는지 이해를 못했습니다. 밑으로 펼쳐지는게 아니라 바로 위에서 펼쳐져서 원하는 대로 표현되지 않았기 때문인데요. 해결방법은 해맨 시간에 비해 너무 간단했습니다. 또또 CSS입니다. 
- 클릭하는 모체에 relative 속성이 있어야하고 펼쳐지는 자식에게 absolute 속성이 있어야합니다. 
- 컴포넌트가 작성된 위치가 제일 중요합니다. 

7. 스타일 컴포넌트 안에서 스타일링을 할 때 &:active가 왜 동작하지 않았는지 상당히 오래 해맸습니다. 이유는 사실 아직도 모르겠습니다. 또한 LInk 컴포넌트 뿐만 아니라 NavLink 컴포넌트도 있다는 것을 알았고, Link와의 차이점을 알겠습니다.
(O) &.active
(X) &:active

8. theme.js를 너무 잊고 코드를 작성한 것 같아서 전체적으로 코드 리팩토링을 했고, theme가 이미 전역적으로 설정되어있음에도 불구하고, 각 컴포넌트에서 import를 하고 있던 문제를 래영님의 도움을 받아 해결했습니다.
```javascript
${({theme: {fontSizes}}) => theme.colors.red}
```
위의 코드는 theme를 import 받아서 사용했기 때문에 비구조 할당이 이상하게 된 것처럼 보인 것입니다.
```javascript
${({theme: {style}}) => style.colors.red}
```
밑의 코드는 제대로 비구조할당을 했기 때문에 예상된 결과가 나온 것입니다.

9. 모달창의 함정을 발견했습니다. 해당 페이지의 뷰의 높이 값이 길다면 스크롤이 되서 움직인 다는 것입니다.  모달창은 모두 이것을 막아줄 필요가 있습니다. 

## 소통에 사용한 협업 툴
### Slack
- 작업 중 변경 사항이 생기거나 공유하고 싶은 내용이 생길 때 사용 

<img width="400" alt="스크린샷 2022-07-14 오후 11 54 26" src="https://user-images.githubusercontent.com/90183279/179352627-8ce90e09-39e5-4ad5-88bc-ddff41e0c713.png">

### Notion
- 매일 진행되는 Stand-up meeting에서 각자의 진행 상황과 블로커 파악 및 소통
- 작업 진행 티켓 관리
- 공통 작업 디렉토리 관리
- 라이브러리 관리

<img width="600" alt="image" src="https://user-images.githubusercontent.com/90183279/179352722-98a44738-f046-401d-9a0d-09efca234afd.png">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/90183279/179352754-5d4206db-b126-4b9f-b360-91dabbf1e646.png">


