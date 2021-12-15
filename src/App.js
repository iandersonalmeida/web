import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MainContent from './components/MainContent';
import AboutContent from './components/AboutContent';

//<MainContent/>
//<Route path = ""  element = {<MainContent/>}> </Route>

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>  
      <MainContent/>
      
      <div>
        <Router >
          <Routes>          
             <Route path = "about" element = {<AboutContent/>}> </Route>
          </Routes>
        </Router>
        </div>  
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
