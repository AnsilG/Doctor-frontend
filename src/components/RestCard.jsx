import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'

function RestCard({ doctors }) {
    console.log(doctors);
    return (
        <div><MDBCard className='my-4 mx-3' style={{ height: '250px' }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>

                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{doctors.hospital}</MDBCardTitle>
                <MDBCardText className='mx-3'>{doctors.name}</MDBCardText>
                <MDBCardTitle>{doctors.phone}</MDBCardTitle>
                <MDBCardText className='p-2 mx-4'>
                    Rating : {doctors.rating}⭐
                </MDBCardText>

                <Link to={`view/${doctors.id}`}>
                    <MDBBtn className='mx-5' href='#'>More</MDBBtn>
                </Link>
            </MDBCardBody>
        </MDBCard></div>
    )
}

export default RestCard