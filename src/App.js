import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeComponent from './components/Home';
import LoginComponent from './components/Login';
import DashboardComponent from './components/Dasboard';
import HotelsComponent from './components/Hotels';
import HotelAddComponent from './components/Hotel-add';
import RoomsComponent from './components/Rooms';
import RoomAddComponent from './components/Room-add';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent/>}/>
        <Route path="/home" element={<HomeComponent/>}>
            <Route path="dashboard" element={<DashboardComponent/>} />
            <Route path="hotels">
              <Route path='' element={<HotelsComponent/>} />
              <Route path='hotel-add' element={<HotelAddComponent/>} />
            </Route>
            <Route path="rooms">
              <Route path='' element={<RoomsComponent/>} />
              <Route path='room-add' element={<RoomAddComponent/>} />
            </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
