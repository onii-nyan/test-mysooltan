import Home from './views/Home';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
<BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      </Routes>
      </header>
    </div>
  </BrowserRouter>
  );
}

export default App;
