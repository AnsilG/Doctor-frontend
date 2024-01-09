import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'


function ViewRest() {

    const [restDetails, setAllRestdetails] = useState({})

    // const paraId = useParams()
    // console.log(paraId.id);

    // destructure
    const { id } = useParams()
    console.log(id);



    const base_url = 'https://doctor-backend-e95t.onrender.com/doctors'
    const fetchRest = async () => {
        const result = await axios.get(`${base_url}/${id}`)
        console.log(result.data);
        setAllRestdetails(result.data)
    }
    console.log(restDetails);

    useEffect(() => {
        fetchRest()
    }, [])
    return (
        <div className='container p-3 my-3 '>
            <Row>
                <Col>
                    <div className='my-5 px-5 py-2 mx-5' style={{ width: '450px' }} >
                        <h1>{restDetails.hospital}</h1>
                        <h2>{restDetails.name}</h2>
                        <h5>specialty: {restDetails.specialty}</h5>
                    </div>
                </Col>

                <Col>
                    <div className='my-4 px-4 py-3 mx-4  ' style={{ width: '450px' }} >
                        <h5>Location: {restDetails.address}</h5>
                        <h5>Available Time: {restDetails.available_hours}</h5>
                        
                        <h5>Phone: {restDetails.phone}</h5>
                        <hr />


                        <h6>Available days : </h6>
                        <div style={{display:"flex"}}>
                             {restDetails.available_days &&
                                 restDetails.available_days.map((restDetails) => (
                                     <p>{restDetails} / </p>
                                 ))
                             }
                            </div>
                            <hr />





                        <h5>Email: {restDetails.email}</h5>
                    </div>
                </Col>
            </Row>
            <hr />
            <Row >
                <div     style={{ width: '450px' }}>
                   Review : {restDetails.reviews && restDetails.reviews.map((restDetails) => (
                        <h5>{restDetails.patient_name}on({restDetails.date})</h5>

                    ))}
                  
                </div>
            </Row>
        </div>
    )
}

export default ViewRest