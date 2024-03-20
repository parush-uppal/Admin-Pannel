import React from 'react'
import AddToTable from './AddToTable'
import { getUser } from './api/user';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Table() {
  const [user, setUser] = useState(null); 
  const getUsers = async () => {
    const { error, users } = await getUser();
    if (error) return console.log(error); 
    console.log(users)
    setUser(users);
  };
  useEffect(() => {
    getUsers();
}, []);
  return (
    <div>
       {/* <AddToTable/> */}
         <main class=" pt-3 mt-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="card">
              <div class="card-header">
                <span><i class="bi bi-table me-2"></i></span> User Table
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table
                    id="example"
                    class="table table-striped data-table"
                    style={{width: "100%"}}
                  >
                    <thead>
                        
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Color</th>
                        <th>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                    {user?user.map((idx) => {
          return <>
          <tr>
                        <td>{idx.name}</td>
                        <td>{idx.price}</td>
                        <td>{idx.discount}</td>
                        <td>{idx.color}</td>
                        <td>{idx.type}</td>
                      </tr>
          </> 
        }):""}
                    </tbody>
                    <tfoot>
                      <tr>
                      <th>Name</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Color</th>
                        <th>Type</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </main>
    </div>
  )
}
