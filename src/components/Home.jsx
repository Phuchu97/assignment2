import { Routes, Route, Outlet } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/home.css'
import DashboardComponent from "./Dasboard";
import HotelsComponent from "./Hotels";

function HomeComponent() {
  return (
    <div className="home row">
      <div className="col-2 home-left sidebar">
        <div className="home-title">
          <h3>Admin Page</h3>
        </div>

        <div className="main sidebar-item">
          <div className="main-title"><h5>MAIN</h5></div>
          <Link to={'/home/dashboard'} style={{textDecoration: 'none'}}>
            <div className="main-item">
              <div className="main-item-icon"><i class="fa-solid fa-chart-line"></i></div>
              <h6>Dashboard</h6>
            </div>
          </Link>
        </div>

        <div className="row sidebar-item sidebar-list">
          <div><h5>LISTS</h5></div>
          <ul className="list-title">
            <li className="list-title-item">
              <i class="fa-regular fa-user"></i>
              Users
            </li>
            <li className="list-title-item">
              <Link to={'/home/hotels'} style={{textDecoration: 'none'}}>
                <i class="fa-solid fa-hotel"></i>
                Hotels
              </Link>
            </li>
            <li className="list-title-item">
              <Link to={'/home/rooms'} style={{textDecoration: 'none'}}>
                <i class="fa-solid fa-person-shelter"></i>
                Rooms
              </Link>
            </li>
            <li className="list-title-item">
              <i class="fa-solid fa-truck-fast"></i>
              Transactions
            </li>
          </ul>
        </div>

        <div className="row sidebar-item sidebar-list">
          <h5>NEW</h5>
          <ul className="list-title">
            <li className="list-title-item">
              <Link to={'/home/hotels/hotel-add'} style={{textDecoration: 'none'}}>
                <i class="fa-solid fa-hotel"></i>
                New Hotel
              </Link>
            </li>
            <li className="list-title-item">
              <Link to={'/home/rooms/room-add'} style={{textDecoration: 'none'}}>
                <i class="fa-solid fa-person-shelter"></i>
                New Room
              </Link>
            </li>
          </ul>
        </div>

        <div className="row sidebar-item sidebar-list">
          <h5>USER</h5>
          <ul className="list-title">
            <Link to={'/'} className="logout" style={{textDecoration: 'none'}}>
              <div><i class="fa-solid fa-arrow-right-from-bracket"></i></div>
              <p style={{margin: 0}}>Logout</p>
            </Link>
          </ul>
        </div>

      </div>

      <div className="col-10 home-right">
        <div className="top"></div>
        <Outlet/>
      </div>
    </div>
  );
}

export default HomeComponent;