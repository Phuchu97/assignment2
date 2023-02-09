import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeComponent from './components/Home';
import LoginComponent from './components/Login';
import DashboardComponent from './components/Dasboard';
import HotelsComponent from './components/Hotels';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent/>}/>
        <Route path="/home" element={<HomeComponent/>}>
            <Route path="dashboard" element={<DashboardComponent/>} />
            <Route path="hotels" element={<HotelsComponent/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
