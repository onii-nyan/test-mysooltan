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
        {/* <Route index element={<Home />} />        
         <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
      </Route>
      </Routes>
      </header>
    </div>
  </BrowserRouter>
  );
}

export default App;
