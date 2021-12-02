import React from 'react'
import api from '../api'

export const Users = () => {
 const users = api.users.fetchAll();

 const userName = users[1].name
 console.log(userName);
 const userProfessions = users[1].profession.name
 console.log(userName +' ' + userProfessions);

 const render = () => {
   
 }
  
 return (
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
 )

}