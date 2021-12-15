import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MainContent from './components/MainContent';

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>  
      <MainContent></MainContent>
      <div>
        <Router basename='public.env.PUBLIC_URL'>
          <Routes>
            <Route path = "/"  element = {<MainContent/>}> /</Route>
          </Routes>
        </Router>
        </div>  
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
