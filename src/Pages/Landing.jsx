import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
 <>

<div className='d-flex justify-content-center align-items-center container-fluid' style={{ height: "80vh" }}>
        <div className='col-11 col-md-8 col-lg-6 border shadow p-4 text-center'>
          <h1 className='display-4'>Todos</h1>
          <Link to={'/home'} className="btn btn-outline-danger mt-4">Todos</Link>
        </div>
      </div>
 
 </>
  )
}

export default Landing
