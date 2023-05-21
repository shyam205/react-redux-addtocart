import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Infobar from './components/Infoheader';
import Header from './components/Header';
import Singleproduct from './pages/Singleproduct';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
     <Infobar />
        <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/:id" element={ <Singleproduct/> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ <Login/> } />
        {/* <Route path="chart-map" element={ <ChartMapWrapper /> } />
        <Route path="chart" element={ <Chart /> } />
        <Route path="graph" element={ <Graph /> } /> */}
      </Routes>
    </div>
  );
}

export default App;
