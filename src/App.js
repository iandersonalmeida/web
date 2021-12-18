import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MainContent from './components/MainContent';
import AboutContent from './components/AboutContent';
import PortfolioContent from './components/PortfolioContent';

//<MainContent/>
//<Route path = ""  element = {<MainContent/>}> </Route>

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>  
          
      <div>      
        <Router basename='/web'>
          <Routes>
          <Route path = "web"  element = {<MainContent/>}> </Route>
          <Route path ="about" element={<AboutContent/>}></Route>
          <Route path ="portfolio" element={<PortfolioContent/>}></Route>
          </Routes>
        </Router>
      </div> 
        
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
