import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';

// import 폴더 이름(대문자로 시작) from "./폴더 이름/또 폴더 이름";
import Book1 from "./book1/book1";
import Book2 from "./book2/book2";
import Home from "./home/home";
import Main from "./main/main";
import Plan from "./plan/plan";

function App() {
  return (
    
    // BrowserRouter 태그로 감싸고 그 안에서 첫 두 줄은

    // <Route exact path='/' component={메인 화면 컴포넌트} />
    // <Route exact path='리액트 앱을 만든 폴더 이름' component={메인 화면 컴포넌트} />

    // 그 외는 <Route path='/폴더 이름' component={대문자로 시작한 폴더 이름} />
    // 이렇게 쓰게 됩니다.

    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/xd-to-react/build' component={Home} />
      <Route exact path='/home-cleaning' component={Home} />
      <Route path='/book1' component={Book1} />
      <Route path='/book2' component={Book2} />
      <Route path='/home' component={Home} />
      <Route path='/main' component={Main} />
      <Route path='/plan' component={Plan} />
    </BrowserRouter>
  );
}

export default App;
