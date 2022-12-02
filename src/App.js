import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Users from './components/Users/Users';
import Header from './components/Header/Header';
import UserDetail from './components/UserDetail/UserDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div className='App'>
      <h1>Welcome To the World</h1>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/posts' element={<Posts/>}>
          <Route path=':postId' element={<PostDetail/>} ></Route>
        </Route>
        <Route path='/singleuser/:userId' element={<UserDetail/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
