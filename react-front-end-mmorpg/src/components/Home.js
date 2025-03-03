// src/components/Home.js
import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import ReportLog from "./ReportLog";
import "../App.css";
import { apiBanUser, apiGetAllUser } from "../api/admin";


const Home = () => {


  useEffect(() => {
    const fetchData = async () => {
      const res = await apiGetAllUser();
      console.log(res);
      setUsers(() => res.data);
    }
    fetchData();
  }, []);

  const [users, setUsers] = useState();
  

  const [showReport, setShowReport] = useState(false);

  const deleteUser = async (id) => {
    const res = await apiBanUser(id);
    if(!res.data){
      alert('Xóa tài khoản thất bại');
    }else{
      alert('Xóa tài khoản thành công');
      const res = await apiGetAllUser();
      setUsers(() => res.data);
    }
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1 className="dashboard-title">
          {showReport ? "Report Log" : "Dashboard"}
        </h1>
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm" className="search-input" />
        </div>
        <div className="header-actions">
          {showReport ? (
            <button 
              className="back-to-dashboard-button"
              onClick={() => setShowReport(false)}
            >
              Dashboard
            </button>
          ) : (
            <button 
              className="report-log-button"
              onClick={() => setShowReport(true)}
            >
              Report Log
            </button>
          )}
          <button className="logout-button">
            <a className="logout" href="/login">Đăng xuất</a>
          </button>
        </div>
      </header>

      {showReport ? (
        <ReportLog />
      ) : (
        <UserList users={users} onDeleteUser={deleteUser} />
      )}

      <footer className="footer">
        <p>&copy; 2024 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;