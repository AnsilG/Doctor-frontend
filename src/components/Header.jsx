import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div><MDBNavbar light style={{backgroundColor:'#87CEEB'}}>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <i class="fa-solid fa-user-doctor me-4"></i>
        Doctor Appointment
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header