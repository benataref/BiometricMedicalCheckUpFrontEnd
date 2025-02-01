import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, useNavigate } from 'react-router-dom';
import Topbar from './Topbar'; // Ensure this path is correct

const Sidebar = ({ handleLogout }) => {
  return (
    <div style={{ display: 'flex', height: '90vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        
        
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <Topbar handleLogout={handleLogout} /> {/* Pass handleLogout to Topbar */}
          <CDBSidebarMenu>
            <NavLink to="/HomePage" end>
              <CDBSidebarMenuItem icon="columns 2x">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/Signup" end>
              <CDBSidebarMenuItem icon="columns 2x">Signup</CDBSidebarMenuItem>
            </NavLink> 
           <NavLink to="/Barcode">
              <CDBSidebarMenuItem icon="table">Barcode</CDBSidebarMenuItem>
            </NavLink> 
            <NavLink to="/Mindray">
              <CDBSidebarMenuItem icon="table">Clinical Chemistry</CDBSidebarMenuItem>
            </NavLink> 
            <NavLink to="/Maglumi800">
              <CDBSidebarMenuItem icon="table">Immuno Assey</CDBSidebarMenuItem>
            </NavLink> 
<NavLink to="/Patient">
              <CDBSidebarMenuItem icon="user 2x">Client</CDBSidebarMenuItem>
            </NavLink>
           <NavLink to="/Vital">
              <CDBSidebarMenuItem icon="fa fa-stethoscope 2x">Examination</CDBSidebarMenuItem>
            </NavLink> 
            <NavLink to="BarcodeGenerator">
              <CDBSidebarMenuItem icon="chart-line"> BarcodeGenerator</CDBSidebarMenuItem>
            </NavLink> 
            <NavLink to="Reader">
              <CDBSidebarMenuItem icon="chart-line"> BarCodeReader</CDBSidebarMenuItem>
            </NavLink>  
            <NavLink to="/Labresult">
              <CDBSidebarMenuItem icon="fa-solid fa-microscope 2x">Lab Results</CDBSidebarMenuItem>
            </NavLink>
          
             <NavLink to="/Xray">
              <CDBSidebarMenuItem icon="fa-solid fa-bed-pulse 2x">Chest Xray</CDBSidebarMenuItem>
            </NavLink>
     
          


            <NavLink to="/Test">
              <CDBSidebarMenuItem icon="chart-line 2x">General Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/Verify">
              <CDBSidebarMenuItem icon="fas fa-fingerprint fa-2x">Client Verification</CDBSidebarMenuItem>
            </NavLink> 
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          {/* Footer content */}
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
