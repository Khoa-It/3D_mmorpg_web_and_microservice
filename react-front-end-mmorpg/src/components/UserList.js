import React, { useState } from "react";

const UserList = ({ users, onDeleteUser }) => {
  return (
    <div className="user-list">
      <h2 className="table-title">Danh sách tài khoản</h2>
      <table> 
        <thead>
          <tr>
            <th>Tên</th>
            <th>Email</th>
            <th>Ngày tạo</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => (
            <tr key={user.userId}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.createdDate}</td>
              <td>
                <button onClick={() => onDeleteUser(user.userId)} className="action-button delete-button">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
