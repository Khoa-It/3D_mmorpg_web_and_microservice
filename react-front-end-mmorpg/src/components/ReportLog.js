// src/components/ReportLog.js
import React, { useEffect, useState } from 'react';
import "./ReportLog.css"
import { apiGetAllUser } from '../api/admin';

const ReportLog = () => {
  const [logData, setlogData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await apiGetAllUser();
      console.log(res);
      setlogData(() => res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="report-log">
      <div className="report-header">
        <h2>Báo Cáo Đăng Nhập/Đăng Xuất</h2>
      </div>
      <div className="report-table-container">
        <table className="report-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên người dùng</th>
              <th>Thời gian đăng nhập lần cuối</th>
            </tr>
          </thead>
          <tbody>
            {logData && logData.map((log, index) => (
              <tr key={log.userId}>
                <td>{index + 1}</td>
                <td>{log.username}</td>
                <td>{log.lastLogin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportLog;