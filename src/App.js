
import { Provider } from 'react-redux';
import './App.css';
// import Home from './components/Home';
import Body from './components/Body';
import appStore from './app/store';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
     <Body/>
    </div>
    </Provider>
  );
}

export default App;
