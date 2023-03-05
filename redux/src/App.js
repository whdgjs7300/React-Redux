import logo from './logo.svg';
import './App.css';
import Subscribers from './components/Subscribers';
import {Provider} from 'react-redux';
import store1 from './redux/store1';

function App() {
  return (
    <Provider store1={store1}>
      <div className="App">
      <Subscribers/>
    </div>

    </Provider>
    
  );
}

export default App;
