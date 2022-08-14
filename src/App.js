import './App.css';
import {Route} from 'react-router-dom'
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  
  return (
    <div className="App">
     <Route path='/' component={Home}/>
      
    </div>
  );
}

export default App;
