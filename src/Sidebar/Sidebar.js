import React from 'react';
import { Link } from 'react-router-dom';
import "../Sidebar/Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div>
          <Link to="/" style={{ color: 'black' }}>Home</Link>
        </div>
        <div>
            <Link to="/scenarios" style={{ color: 'black' }}>Add scenario</Link>
        </div>
        <div>
          <Link to="/allscenarios" style={{ color: 'black' }}>All Scenarios</Link>
        </div>
        <div>
          <Link to="/vehicles" style={{ color: 'black' }}>Add Vehicle</Link>
        </div>
    </div>
  );
};

export default Sidebar;