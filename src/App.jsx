import { Routes,Route } from 'react-router-dom';
import './App.css';
import AllRest from './components/AllRest';
import Footer from './components/Footer';
import Header from './components/Header';
import ViewRest from './components/ViewRest';



function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section>
        <Routes>
          <Route path='/'element={<AllRest/>} />
          <Route path='/view/:id' element={<ViewRest/>}/>
        </Routes>
      </section>
      <footer>
        <Footer/>
      </footer>
    
    </div>
  );
}

export default App;
