import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CuntomerRouter from './Routers/CustomerRouter';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/*' Component={CuntomerRouter} />
          {/* <Route path='/*' Component={Dastboard} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
