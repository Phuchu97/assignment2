
import DataGridDemo from "./Dashboard-table";

function DashboardComponent() {
  return (
    <div className="dashboard">
      <div className="row header">
          <div className="col-3 header-item">
            <div className="header-item-content">
              <h6 className="header-item-content-title">USERS</h6>
              <p>100</p>
              <div className="header-item-content-icon">
                <span className="users-icon">
                  <i class="fa-regular fa-user"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="col-3 header-item">
            <div className="header-item-content">
              <h6 className="header-item-content-title">ORDERS</h6>
              <p>100</p>
              <div className="header-item-content-icon">
                <span className="orders-icon"><i class="fa-solid fa-cart-shopping"></i></span></div>
            </div>
          </div>

          <div className="col-3 header-item">
            <div className="header-item-content">
              <h6 className="header-item-content-title">EARNINGS</h6>
              <p>$ 100</p>
              <div className="header-item-content-icon">
                <span className="earnings-icon"><i class="fa-solid fa-sack-dollar"></i></span>
              </div>
            </div>
          </div>

          <div className="col-3 header-item">
            <div className="header-item-content">
              <h6 className="header-item-content-title">BALANCE</h6>
              <p>$ 100</p>
              <div className="header-item-content-icon">
                <span className="balance-icon"><i class="fa-solid fa-scale-balanced"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dashboard-content">
              <DataGridDemo/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default DashboardComponent;