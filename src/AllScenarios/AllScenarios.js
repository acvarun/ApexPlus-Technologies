import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import "../AllScenarios/AllScenarios.css"

const AllScenarios = () => {
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/scenarios')
      .then((response) => {
        setScenarios(response.data);
      })
      .catch((error) => {
        console.error('Error fetching scenarios:', error);
      });
  }, []);

  return (
    <div className='main2'>
        <Sidebar/>
      <div id='main2-body'>
        <div id='heading-bar'>
            <h4>All Scenarios</h4>
            <div>
            <button id='btn4'>New Scenario</button>
            <button id='btn5'>Add Vehicle</button>
            <button id='btn6'>Delete All</button>
            </div>
        </div>
      <table>
        <thead>
          <tr>
            <th>Scenario Id</th>
            <th>Scenario Name</th>
            <th>Scenario Time</th>
            <th>Number of Vehicles</th>
            <th>Add Vehicle</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((scenario) => (
            <tr key={scenario.id}>
              <td>{scenario.id}</td>
              <td>{scenario.name}</td>
              <td>{scenario.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AllScenarios;
