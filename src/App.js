
import './App.css';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import Nav from './nav';
 import Home from './home';
 import About from './about';


function App() {
  return (
    <>
      <BrowserRouter>
           <Nav/>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                
          </Routes>
          </BrowserRouter>
          </>
  );
}

export default App;
