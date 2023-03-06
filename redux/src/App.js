import logo from './logo.svg';
import './App.css';
import Subscribers from './components/Subscribers';
import {Provider} from 'react-redux';
import store from './redux/store';
import Display from './components/Display';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Detail from './page/Detail';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:id' element={<Detail/>}></Route>
      </Routes>

    </div>

    </Provider>
    </BrowserRouter>
    
    
  );
}

export default App;
